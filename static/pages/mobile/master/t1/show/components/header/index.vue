<template>
  <header class="index-top" v-if="showHead">
    <!-- <i class="iconay ay-daohang" @click="$bus.$emit('setToolBar',true)"></i> -->
    <i class="iconay ay-daohang" @click="value=true"></i>
    <a href="/" class="link_logo">
      <img src="./img/logo.png" alt="logo">
    </a>
    <tool-bar v-model="value"></tool-bar>
    <router-link :to="{name:'serviceCenter'}" class="tool-item-href">
      <i class="iconay ay-liuyan"></i>
    </router-link>
    <!-- <a class="tool-item-href" @click="valueRight=true">
      <i class="iconay ay-liuyan"></i>
    </a>
    <tool-barright v-model="valueRight"></tool-barright> -->
    <!-- <sheet v-model="showSheet" :data="sheetData" ></sheet> -->
  </header>
</template>
<script>
  import toolBar from '../tool-bar';
  import toolBarright from '../tool-bar-right';
  // import sheet from 'mobile/components/sheet';
  import  {SETTING} from "@/assets/data"
  export default {
    data() {
      return {
        SETTING,
        value:false,
        showHead:true,
        sheetData: [
          {
            name: "在线客服",
            target: "_blank",
            href: SETTING.live800
          },
          {name: "电话回拨", to: {path: "/help/backCall"}},
          {name: SETTING.telAgent, href: "tel:"+SETTING.telAgent}
        ],
        showSheet: false,
        valueRight:false,
      };
    },
    created(){
      // 监听header控制事件
      this.$bus.$on('setHeader',eventData=>{
        this.showHead=eventData
      })
    },
    components:{
      toolBar,
      toolBarright
      // sheet
    }
  };
</script>
<style lang="scss" scoped>

  @import "~mobile/assets/scss/mixin.scss";
  header.index-top {
    height: r(100);
    width: 100%;
    line-height: r(100);
    background-color: $herder-bg;
    // background: -moz-linear-gradient(to bottom, #333, #35312d);
    // background: -webkit-linear-gradient(to bottom, #333, #35312d);
    // background: linear-gradient(to bottom, #333, #35312d);
    position: fixed;
    top:0;
    // border-bottom: 2px solid #183d7e;
    border:none;
    text-align: center;
    z-index: 999;
    .iconay {
      @include f(48px);
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      vertical-align: middle;
    }
    .ay-daohang{
      left: r(16);
    }
    .ay-liuyan{
      right: r(16);
    }
    .link_logo{
      display:inline-block;
      height:95%;
      img {
        height:100%;
      }
    }
  }
</style>
