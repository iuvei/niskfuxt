<template>
  <div class="notice-show fr">
    <div class="notice-show-title">公告</div>
    <div class="notice-show-content">
      <div class="notice-item cfx" v-for="(item,i) in data" :key="i" @click="itemClk(item,i)" :class="{active:item.already}">
        <div class="fl">{{item.title}}</div>
        <div class="fr">{{item.createtime | Date}}</div>
        <div class="detailItem">
          {{item.content}}
        </div>
      </div>

    </div>
    <!-- <Tips v-model="show" :data="cur"></Tips> -->
  </div>
  
</template>
<script>
  import Tips from "./tips";
  import { getNewAnnouncement} from "@/api/show";
  import {SETTING} from "@/assets/data"
  // 这里需要添加一个功能，点击进来后自动打开某个公告的详情
  export default {
    data() {
      return {
        cur: {},
        show: false,
        SETTING,
        data: [] //records
      };
    },
    components:{Tips},
    methods: {
      itemClk(item,i){
        item.already=!item.already;
        // this.cur=item;
      },
      checkOpen(){
        // 看下是否有带参数过来，自动展开对应的的详情
        if(this.$route.params&&this.$route.params.id){
          const _index=this.data.findIndex(item=>{
            return item.id==this.$route.params.id
          })
          if(_index>=0){
            this.itemClk(this.data[_index])
          }
        }
      }
    },
    created() {
      //加载数据
      getNewAnnouncement().then(res => {
        if (res.success) {
          this.data = res.data.map(item => {
            item.already = false;
            return item;
          });
          this.checkOpen()
        } else {
          toast(data.message);
        }
      })
    },
    activated(){
      this.checkOpen()
    }
  }

</script>
<style lang="scss" scoped>
  .notice-show {
        position: relative;
        width: 900px;
        overflow: hidden;
        background: #282828;
        border: 1px solid #cdbe67;
        &:before {
          position: absolute;
          bottom: -10px;
          display: block;
          width: 100%;
          height: 10px;
          content: '';
          background-repeat: no-repeat;
          background-position: bottom;
        }
        .notice-show-title {
          font-size: 26px;
          line-height: 80px;
          height: 80px;
          text-align: center;
          background: #282828;
          color: #fde29d;
          border-bottom: 1px solid #da9a2d;
          font-weight: bold;
        }
        .notice-show-content {
          padding: 30px 70px 30px 40px;
          color: #000000;
          background: #282828;
          .notice-item{
            padding:15px 10px;
            font-size:16px;
            line-height: 2;
            cursor:pointer;
            color: #fde29d;
            border-bottom: 1px solid #da9a2d;
            .detailItem{
              margin-top: 32px;
              color: #fff;
              text-indent: 2em;
              transition: all 0.5s ease;
              display: none;
            }
            &.active{
              .detailItem{
                transition: all 0.5s ease;
                display: block;
              }
            }
          }
        }
      }

</style>
