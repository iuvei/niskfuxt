<template>
  <transition name="fade">
    <div class="promo-info" v-show="showWindow">
      <transition name="slideLeft">
        <div class="promo-info-wrap">
          <div class="btn-close" @click="showWindow=false">
            <img src="./images/close.png">
          </div>
          <h2>{{showDatas.activityTitle || ''}}</h2>
          <div class="promo-info-content">
            <div class="content-info">
              <iframe ref="iframe" width="100%" height="520" src="" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
  import util from '@/util/util'
  import {
    findLatestPreferentialById
  } from "@/api/show"

  export default {
    name: "",
    data() {
      return {
        showWindow:false,
        showDatas:{
          activityTitle:'',
          activityContent:''
        }
      }
    },
    methods: {
      setiframe(title,content) {
        this.showWindow=true;
        this.showDatas.activityTitle = title
        this.showDatas.activityContent = content
        let ifrm = this.$refs.iframe;
        console.log(ifrm)
        const doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
          doc.open();
          doc.write(content);
          doc.body.style['overflow-y'] = 'visible';
          doc.body.style['margin'] = 0;
          doc.close();
      }
    },
    created() {
      this.$bus.$on('showProDetail', eventData=>{
        console.log(eventData)
        this.setiframe(eventData.data.activityTitle,eventData.data.activityContent)
      })
    },
  }

</script>
<style lang="scss" spcoed>
  .promo-info {
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    text-align: center;
    &::before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .promo-info-wrap {
      border: solid 4px #cccccc;
      position: relative;
      width: 960px;
      vertical-align: middle;
      height: 700px;
      display: inline-block;
      background: #fff;
      padding-bottom: 40px;
      background: url(./images/start.jpg) 850px 90px no-repeat #fff;
    }
    .btn-close {
      position: absolute;
      top: 2px;
      right: 0px;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        transform: scale(1.05);
      }
    }
    h2 {
      text-align: center;
      height: 80px;
      line-height: 80px;
      border-bottom: 2px dotted #ddd;
      color: #dfaf1f;
      font-size: 36px;
      margin: 0 10px;
      background: url(./images/start.jpg) left 10px no-repeat;
    }
    .promo-info-content {
      margin-top: 40px;
      padding-right: 15px;
      padding-left: 40px;
      line-height: 1;
      height: 520px;
      text-align: left;
      font-size: 24px;
      color: #343434;
      div::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      div::-webkit-scrollbar-track-piece {
        margin: -2px;
        background-color: #eee;
      }

      div::-webkit-scrollbar-thumb {
        min-width: 150px;
        min-height: 150px;
        border-radius: 10px;
        background: #aaa;
      }

      div::-webkit-scrollbar-thumb:vertical:hover {
        background: #555;
      }

      div::-webkit-scrollbar-thumb:horizontal:hover {
        background: #555;
      }
    }
    .content-info {
      /*overflow: auto;*/
    }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  transform:scale(0);
}
</style>
