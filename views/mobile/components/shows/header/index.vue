<template>
  <header class="index-top" v-if="showHead">
    <i class="iconyg yg-gerenxinxi" @click="$bus.$emit('setToolBar',true)"></i>
    <a href="/" class="link_logo">
      <img src="./img/logo.png" alt="logo">
    </a>
    <!-- <tool-bar v-model="value"></tool-bar> -->
    <a class="tool-item-href" target="_blank" :href="SETTING.live800">
      <i class="iconyg yg-kefu"></i>
    </a>
  </header>
</template>
<script>
  // import toolBar from 'mobile/components/tool-bar';
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
      };
    },
    created(){
      // 监听header控制事件
      // this.$bus.$on('setHeader',eventData=>{
      //   this.showHead=eventData
      // })
    },
    components:{
      // toolBar,
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
    background: -moz-linear-gradient(to bottom, #333, #35312d);
    background: -webkit-linear-gradient(to bottom, #333, #35312d);
    background: linear-gradient(to bottom, #333, #35312d);
    position: fixed;
    top:0;
    // border-bottom: 2px solid #183d7e;
    border:none;
    text-align: center;
    z-index: 999;
    .iconfont {
      @include f(48px);
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      vertical-align: middle;
    }
    .iconyg{
      @include f(48px);
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      vertical-align: middle;
    }
    .yg-gerenxinxi{
      left: r(16);
    }
    .yg-kefu{
      right: r(16);
    }
    .link_logo{
      display:inline-block;
      height:95%;
      img {
        height:100%;
      }
    }
    .icon-menu {
      left: r(16);
    }
    .icon-message {
      right: r(16);
    }
  }
</style>
