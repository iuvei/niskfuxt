<template>
  <div class="col left left-container">
    <div class="ebet ebet-left-container bounceInLeft animated" v-show="cur == 'DT'">
      <h2 class="title">DT手机端</h2>
      <div class="description">DT平台拥有数百种热门老虎机游戏、玩法新颖、稳定的高端设备、专业的技术支持，保障了平台的稳定运营，给予玩家彷佛置身于现场的绝妙体验。DT平台支持多端登录，无论玩家目前身处何处，随时可尽情享受游戏的乐趣。<br><br><br><br>
        <a class="teachBtn col" target="_blank" :href="Download.dtAndroid">安卓客户端</a>
        <a class="teachBtn col" style="margin-left: 20px;" target="_blank" :href="Download.dtIos">苹果客户端</a>
      </div>
    </div>
    <img class="ope bounceInLeft animated" src="./images/ow8_app.png" v-show="cur == 'APP'">
    <img class="ope bounceInLeft animated" src="./images/PT_app.png" style="margin-top: 155px;" v-show="cur == 'PT'">
    <div class="ebet ebet-left-container bounceInLeft animated" style="display: none;">
      <h2 class="title">EBET手机端</h2>
      <div class="description">娱乐平台拥有数百位训练有素的专业荷官、彷真实的娱乐环境、稳定的高端设备、专业的技术支持，保障了平台的稳定运营，给予玩家彷佛置身于现场的绝妙体验。eBET支持多端登录，无论玩家目前身处何处，随时可尽情享受游戏的乐趣。
        <br>
        <br>
        <br>
        <br>
        <a class="teachBtn col" target="_blank" href="https://www.ebetapp.com/opebet">立即下载</a>
      </div>
    </div>
    <img class="pt" src="./images/PT_app.png" style="display: none;margin-top:155px">
  </div>
</template>
<script>

  import {
    SETTING,
    WEBCONFIG,
    Download
  } from "@/assets/data"
  export default {
    name: "",
    data() {
      return {
        SETTING,
        WEBCONFIG,
        Download,
        cur:'APP'
      }
    },
    created() {
      this.$bus.$on('getDownloadPage', eventData => {
        this.cur = eventData
      })
    },

  }

</script>
<style lang="scss" scoped>
.left-container {
    width: 600px;
    .ebet-left-container {
      margin-left: 70px;
      position: absolute;
      top: 26%;
    }
    .title {
      margin-top: 90px;
      font-size: 36px;
      color: #fff;
      line-height: 110%;
      font-weight: 400;
      margin: 1.78rem 0 1.424rem;
      &:after {
        content: "";
        display: block;
        width: 60px;
        height: 1px;
        margin-top: 20px;
        background: #efefef;
      }
    }
    .description {
      width: 510px;
      color: #fff;
      line-height: 1.5;
      font-weight: 400;
      font-size: 14px;
    }
  }
</style>
