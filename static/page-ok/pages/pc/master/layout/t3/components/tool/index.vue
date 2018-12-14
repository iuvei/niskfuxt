<template>
  <transition name="fade">
    <div class="rightTool" v-show="isshow">
      <p class="btns1">
        <router-link :to="{name:'deposit'}" class="btnRouteRecharge"></router-link>
        <router-link :to="{name:'drawmoney'}" class="btnRoute">快速取款</router-link>
      </p>
      <p class="welcome">欢迎光临</p>
      <!-- <p class="href">itgo88.com</p> -->
      <p class="line">
        <img src="./images/line.png" alt="">
      </p>
      <a :href="SETTING.live800" target="_blank" class="imgItem">
        <p class="welcome1">在线客服</p>
        <p class="href">7X24小时</p>
      </a>
      <p class="line">
        <img src="./images/line.png" alt="">
      </p>
      <!-- <div class="imgItem">
        <p class="welcome1">QQ客服</p>
        <p class="href">{{SETTING.qq}}</p>
      </div>
      <p class="line">
        <img src="./images/line.png" alt="">
      </p> -->
      <p class="btns">
        <!-- <router-link :to="{name:'agentarea'}" class="btnRoute">代理加盟</router-link> -->
        <router-link :to="{name:'agentarea'}" class="btnRouteAgent"></router-link>
        <a href="javascript:;" class="btnRoute" @click="registerIt">立即开户</a>
        <a href="javascript:;" class="btnRoute" @click="showBackCall">电话回拨</a>
      </p>
      <p class="logos">
        <img src="./images/logo.png" alt="">
      </p>
      <i class="close" @click="isshow = false"></i>
    </div>
  </transition>
</template>
<script>
  import {SETTING,Download} from "@/assets/data"
  import check from "@/util/RegExp"
  import {scrolltool} from "@/vue-extend/scrolltool"
  import {backCall} from "@/controls/common/backCall"
  import {
    generateQRCode
  } from "@/api/show"
  export default {
    mixins: [scrolltool, backCall],
    name: "",
    data() {
      return {
        SETTING,
        showMyself: true,
        ishover: true,
        Download,
        hover: false,
        isshow: true
      }
    },
    methods: {
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      },
      registerIt() {
        this.$bus.$emit('showRegister', true)
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
            toast(res.message)
          }).catch(err=>{
            toast(err.message)
          })
        }).catch((err) => {
          console.log(err)
        });
      }
    }
  }

</script>
<style lang="scss" scoped>
  .rightTool {
    width: 106px;
    height: 378px;
    background: url('./images/bg.png') no-repeat;
    background-size: cover;
    background-position: top center;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    z-index: 999;

    .welcome {
      font-size: 22px;
      font-family: "Microsoft YaHei";
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
      color: #fbf687;
      // padding-top: 40px;
    }

    .welcome1 {
      font-size: 22px;
      font-family: "Microsoft YaHei";
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
      color: #fbf687;
    }

    .href {
      font-size: 18px;
      font-family: "Microsoft YaHei";
      line-height: 1.2;
      text-align: center;
      color: #fbf687;

    }

    .line {
      width: 100%;
      text-align: center;
    }

    .imgItem {
      display: block;
      width: 100%;
      text-align: center;

      .qrTips {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        line-height: 1.7;
        text-align: center;
        color: #fbf687;
        display: block;

      }
    }

    .btns {
      text-align: center;

      .btnRoute {
        background-image: -moz-linear-gradient(90deg, rgb(200, 143, 60) 0%, rgb(239, 210, 84) 100%);
        background-image: -webkit-linear-gradient(90deg, rgb(200, 143, 60) 0%, rgb(239, 210, 84) 100%);
        background-image: -ms-linear-gradient(90deg, rgb(200, 143, 60) 0%, rgb(239, 210, 84) 100%);
        background-image: linear-gradient(90deg, #c88f3c 0%, #efd254 100%);
        display: block;
        margin: 0 auto 5px;
        width: 89px;
        height: 23px;
        font-family: "PingFangSC";
        line-height: 1.7;
        text-shadow: 0px 1px 0px rgba(255, 230, 88, 0.004);
        text-align: center;
        color: #48290d;
        font-size: 14px;
        border-radius: 20px;
        font-weight: bold;
      }
      .btnRouteAgent{
        background: url('./images/daili.gif');
        background-size: cover;
        background-position: top center;
        display: block;
        margin: 0 auto 5px;
        width: 89px;
        height: 23px;
        font-family: "PingFangSC";
        line-height: 1.7;
        text-shadow: 0px 1px 0px rgba(255, 230, 88, 0.004);
        text-align: center;
        color: #48290d;
        font-size: 14px;
        border-radius: 20px;
        font-weight: bold;
      }
    }
    .btns1 {
      text-align: center;
      padding-top: 35px;

      .btnRoute {
        background-image: -moz-linear-gradient(90deg, rgb(200, 143, 60) 0%, rgb(239, 210, 84) 100%);
        background-image: -webkit-linear-gradient(90deg, rgb(200, 143, 60) 0%, rgb(239, 210, 84) 100%);
        background-image: -ms-linear-gradient(90deg, rgb(200, 143, 60) 0%, rgb(239, 210, 84) 100%);
        background-image: linear-gradient(90deg, #c88f3c 0%, #efd254 100%);
        display: block;
        margin: 0 auto 5px;
        width: 89px;
        height: 23px;
        font-family: "PingFangSC";
        line-height: 1.7;
        text-shadow: 0px 1px 0px rgba(255, 230, 88, 0.004);
        text-align: center;
        color: #48290d;
        font-size: 14px;
        border-radius: 20px;
        font-weight: bold;
      }
      .btnRouteRecharge{
        background: url('./images/recharge.gif');
        background-size: cover;
        background-position: top center;
        display: block;
        margin: 0 auto 5px;
        width: 89px;
        height: 23px;
        font-family: "PingFangSC";
        line-height: 1.7;
        text-shadow: 0px 1px 0px rgba(255, 230, 88, 0.004);
        text-align: center;
        color: #48290d;
        font-size: 14px;
        border-radius: 20px;
        font-weight: bold;
      }
    }

    .logos {
      margin-top: 16px;
      text-align: center;

      img {
        width: 60%;
        margin: 0 auto;
      }
    }

    .close {
      background: url('./images/close.png') no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      width: 20px;
      height: 20px;
      display: block;
      right: -5px;
      cursor: pointer;
      bottom: -5px;
    }
  }

</style>
