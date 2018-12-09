<template>
  <transition name="fade">
    <div>
      <div class="right-server" >
        <a class="cont-item" target="_blank" :href="SETTING.live800">
          <span class="c-ico icobjh bjh-service"></span>
          <span class="c-text">在线客服</span>
        </a>
        <a class="cont-item" href="">
          <span class="c-ico icobjh bjh-youxiang"></span>
          <span class="c-text">客服邮箱</span>
          <div class="c-box">
             <p class="c-text-inline">{{SETTING.email}}</p>
          </div>
        </a>
        <a class="cont-item" @click="showBackCall">
          <span class="c-ico icobjh bjh-tele"></span>
          <span class="c-text">电话回拨</span>
        </a>
        <router-link class="cont-item" :to="{name:'download'}">
          <span class="c-ico icobjh bjh-download"></span>
          <span class="c-text">下载客户端</span>
          <div class="c-box">
            <img v-lazy="generateQRCode(Download.app)" alt="" width="100%">
          </div>
        </router-link>
        <a class="cont-item">
          <span class="c-ico icobjh bjh-wechat"></span>
          <span class="c-text">微信</span>
          <div class="c-box">
            <p class="c-text-inline">微信服务号</p>
            <img v-lazy="'/static/images/wechat-service.jpg'" alt="" width="100%">
            <p class="c-text-inline">微信公众号</p>
            <img v-lazy="'/static/images/wechat.jpg'" alt="" width="100%">
          </div>
        </a>
        <a class="cont-item">
          <span class="c-ico icobjh bjh-hezuo-copy"></span>
          <span class="c-text">代理微信</span>
          <div class="c-box">
            <img v-lazy="'/static/images/wechat-user.jpg'" alt="" width="100%">
          </div>
        </a>
        <a class="cont-item" href="/static/page/hijacking/index.html">
          <span class="c-ico icobjh bjh-buywebhostingstep1dns"></span>
          <span class="c-text">防劫持教程</span>
        </a>
        <a class="cont-item" href="javascript:void(0);" @click="backToTop">
          <span class="c-ico icobjh bjh-top"></span>
          <span class="c-text">返回顶部</span>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
  import {    SETTING  } from "@/assets/data"
  import  check from "@/util/RegExp"
  import {scrolltool} from "@/vue-extend/scrolltool"
  import {backCall} from "@/controls/common/backCall"
  import  {generateQRCode} from "@/api/show"
  import  {Download} from "@/assets/data"
  export default {
    mixins: [scrolltool,backCall],
    name: "",
    data() {
      return { 
        Download,
        SETTING,
        showMyself: true
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      generateQRCode(url,size){
        return   generateQRCode(url,size)
      },
      backToTop() {
        this.scrollTo(0);
      },
      showBackCall(){
          // 弹窗回拨
          this.$prompt('请输入手机号码', '电话回拨', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: check.phone,
            inputErrorMessage: '手机号码格式不正确'
          }).then((confirm) => {
            // 提交弹窗
            this.backCall({phone:confirm.value}).then(res=>{
              window.toast(res.message)
            }).catch(err=>{
              window.toast(err.message)
            })
          }).catch((err) => {
            console.log(err)
          });
      }

    },
    created() {},
    activated() {},
    components: {
    }
  }

</script>
<style lang="scss" spcoed>
  .right-server {
    position: fixed;
    z-index: 9;
    right: 10px;
    top: 50%;
    margin-top: -257px;
    width: 40px;
    .cont-item {
      display:inline-block;
      height:40px;
      width:40px;
      background: rgb(255,236,184); /* Old browsers */
      background: -moz-linear-gradient(top, rgba(255,236,184,1) 0%, rgba(255,210,121,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(255,236,184,1) 0%,rgba(255,210,121,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(255,236,184,1) 0%,rgba(255,210,121,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb8', endColorstr='#ffd279',GradientType=0 ); /* IE6-9 */
      border-radius:20em;
      position:relative;
      cursor:pointer;
      transition:all 0.6s;
      overflow:hidden;
      margin-bottom:20px;
      text-align:center;
      &:hover{
        width: 140px;
        overflow:visible;
        right:0;
        transform:translateX(-100px);
        z-index:9;
        .c-box{
          opacity:1;
          transform:scale(1);
        }
        .c-text{
          transform:scale(1);
        }
      }
      .c-ico{
        width:40px;
        height:40px;
        display:inline-block;
        text-align:center;
        line-height:40px;
        font-size:28px;
        color:#f37230;
        vertical-align: middle;
      }
      .c-text{
        word-break:keep-all;
        font-size:16px; 
        padding-right:10px;
        vertical-align: middle;
        transform:scale(0);
        transition:all 1s;
        display:inline-block;
      }
      .c-box{
        position:absolute;
        opacity:0;
        transform:scale(0);
        transition:all 1s;
        .c-text-inline{
          margin:8px;
          display:block;
          border-radius:6px;
          padding:8px;
          background: rgb(255,236,184); /* Old browsers */
          background: -moz-linear-gradient(top, rgba(255,236,184,1) 0%, rgba(255,210,121,1) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(top, rgba(255,236,184,1) 0%,rgba(255,210,121,1) 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to bottom, rgba(255,236,184,1) 0%,rgba(255,210,121,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb8', endColorstr='#ffd279',GradientType=0 ); /* IE6-9 */
        }
        img{
          margin:8px;
          display:block;
          width:80%;
          border:solid 4px #ffd27a;
          border-radius:6px;
        }
      }

    }
  
  }

</style>
