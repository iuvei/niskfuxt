<template>
  <div class="message-inside">
    <div class="list-item" v-for="(item,i) in data.pageContents" :key="i">
      <div class="list-item-view iconfont icon-arrow_r" @click="showView(item,i)">

        <div class="view-title">
          <span class="icobjh bjh-email  unread" v-if="!item.read"></span>
          <span class="icobjh bjh-ready" v-else></span>
          {{item.title}}</div>
        <div>{{item.createDate}}</div>
      </div>
      <!--<transition name="message">-->
        <div :ref="item.id" v-show="item.show">
          <div class="list-item-info">
           <div v-html="item.html"></div>
          </div>
        </div>
      <!--</transition>-->
    </div>
    <pageBy :data="data" @search="search"></pageBy>
  </div>
</template>
<script>
  import {getMessageByUser, readMsg} from "@/api/show";
  import pageBy from "mobile/components/page-by.vue";
  export default {
    data() {
      return {
        data: {},  //records
        viewList: {},
        searchData: { //查询条件
          total: "10", //true string
          v: "",    //true string
          size: "10",  // true string
          pageIndex: "1"//
        }
      };
    },
    methods: {
      showView(item, i) {
        if (item.touch === true) {
          item.show = !item.show;
          return;
        }
        readMsg({msgID: item.id}).then((data) => {
          if(data.data.content){
            this.$store.commit("READ_MESSAGE"); // 已读站内信
            let html = data.data.content.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />")
            this.$set(item, 'html', html);
            item.read = true;
            item.hadGet = true;
          }
          item.touch = true;
          this.$nextTick(() => {
            item.show = true;
          });
        }).catch(err=>{
          console.log(err)
          window.toast("读取站内信失败,请稍后尝试")
        });
      },
      search(index) {
        if(!isNaN(index)&&this.searchData.pageIndex!=index){
          this.searchData.pageIndex=index;
        }
        getMessageByUser(this.searchData).then(res => {
          if (res.success) {
            res.data.pageContents.forEach((item, i) => {
              item.show = false;
              item.touch = false;
              item.html = '';
            });
            this.data = res.data;
          } else {
            window.toast(res.message);
          }
        })
      }
    },
    computed: {},
    activated() {
      //加载数据
     this.search();
    },
    components: {
      pageBy
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .message-enter-active, .message-leave-active {
    transition: all 1s;
    overflow: hidden;
  }

  .message-enter,
  .message-leave-to {
    height: 0 !important;
  }

  .message-inside {
    @include f(24px);
    // padding-top: r(30);
    .list-item {
      .list-item-view {
        position: relative;
        color: #ffffff;
        @include f(28px);
        padding: r(30) r(50) r(30) 0;
        margin-left: r(30);
        line-height: 1.2;
        border-bottom: 1px solid #ccc;
        &::before {
          position: absolute;
          top: 50%;
          right: r(30);
          transform: translateY(-50%);
          @include f(30px);
        }
        .view-title {
          @include f(34px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: r(6);
          .icobjh{
            @include f(34px);
            &.unread{
              color:red;
            }
          }
        }
      }
      .list-item-info {
        padding: r(30);
        background: #eee;
        line-height: 1.5;
        @include f(24px);
      }
    }
  }
</style>
