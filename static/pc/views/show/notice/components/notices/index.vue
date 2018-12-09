<template>
  <div class="notice-list">
    <div v-for="(item,i) in data" class="list-item" :key='i'>
      <div class="list-title" :class="{active:item.already}" @click="showView(item,i)">
        {{item.title}}
        <span class="list-time">{{item.createtime | Date}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="arrow">></span></span>
      </div>
      <transition name="message">
        <div class="" v-show="item.opened" :ref="item.id">
          <div class="item-info" v-html="item.content">
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import {
    getNewAnnouncement
  } from "@/api/show";
  export default {
    data() {
      return {
        data: [] //records
      };
    },
    methods: {
      showView(item, i) {
        if (this.$refs[item.id][0].style.height == "") {
          this.$refs[item.id][0].style.height = this.$refs[item.id][0].css("height");
        }
        this.$nextTick(() => {
          item.opened = !item.opened;
        });
      },
      getNewAnnouncement(){
        getNewAnnouncement().then(res => {
          if (res.success) {
            let needOpen= this.$route.params.id;
            console.log(this.$route);
            this.data = res.data.map(item => {
              item.opened = needOpen==item.id?true:false;

              return item;
            });
          } else {
            window.toast(data.message);
          }
        })
      }
    },
    activated () {
      //加载数据
      this.getNewAnnouncement();
    }
  }

</script>
<style lang="scss" scoped>
  .notice-list {
    padding: 0 20px 20px;
    background: #373738;
    width: 910px;
    border-radius: 10--px;
    .list-item {
      cursor: pointer;
    }
    .list-title {
      padding-top: 24px;
      padding-bottom: 11px;
      border-bottom: dashed 1px #666666;
      font-size: 16px;
      white-space: nowrap;
      color: #fff;
      &:hover{
        border-bottom: dashed 1px #ffdc98;
      }
      &:active{
        border-bottom: dashed 1px transparent;
      }
      &.active,
      &:hover {
        color: #ffdc98;
        .list-time {
          .arrow{
            transform:rotate(90deg);
          }
        }
      }

      .list-time {
        float: right;
        font-weight: lighter;
        .arrow{
          transition:all 0.5s;
          display:inline-block;
        }
      }
    }
    .item-info {
      margin-top: 3px;
      background: #2d2d2e;
      padding: 20px 20px;
      line-height: 25px;
      font-size: 14px;
      color: #ffdc98;
    }
  }

  .message-enter-active,
  .message-leave-active {
    transition: all 1s;
    overflow: hidden;
  }

  .message-enter,
  .message-leave-to {
    height: 0 !important;
  }

</style>
