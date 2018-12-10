<template>
  <div class="download-content">
    <div class="normal">
      <!-- APP -->
      <div class="content-info" v-show="cur=='APP'">
        <img src="./images/downloadBanner.jpg" alt="" class="download-img">
        <div class="picTexts">
          <h1>官网APP下载</h1>
          <h4>APP DOWNLOAD</h4>
        </div>
        <div class="download-step1">
          <span class="step">01</span>
          <div class="step-info">
            <p>&nbsp;下载方式一</p>
            <p>&nbsp;手机浏览器打开：
              <span>{{Download.app}}</span>
            </p>
          </div>
        </div>
        <div class="download-step2">
          <span class="step">02</span>
          <div class="step-info">
            <p>&nbsp;下载方式一</p>
            <p>&nbsp;扫一扫二维码轻松下载</p>
          </div>
          <vue-qr class="download-Qrcode" :text='Download.app' height="140" :margin="5" width="140"></vue-qr>
          <div class="support">
            <p>完美支持</p>
            <p>安卓版/IOS版</p>
          </div>
          <img src="./images/plaform.png" alt="" class="download-platform">
        </div>
        <div class="download-step1">
          <div class="line"></div>
          <span class="step">03</span>
          <div class="step-info">
            <p>&nbsp;游戏加速器下载</p>
            <p>&nbsp;感觉太慢？立即下载加速器</p>
          </div>
          <img src="./images/speed.png" alt="" class="speed">
          <button class="download-btn">立即下载</button>
        </div>
      </div>
      <!-- PT电脑 -->
      <div class="content-info" v-show="cur=='PT'">
        <img src="./images/downloadBanner.jpg" alt="" class="download-img">
        <div class="picTexts">
          <h1>PT电脑客户端下载</h1>
          <h4>PT DOWNLOAD</h4>
        </div>
        <div class="download-PT">
          <p class="pt-step">01</p>
          <div>
            <p>下载方式一</p>
            <p>网盘下载</p>
          </div>
          <a target="_blank" class="download-btn" :href="Download.ptpc">立即下载</a>
        </div>
        <img class="PTbg" src="./images/PTbg.png" alt="">
        <div class="PT-detail">
          <p>温馨提示</p>
          <p>登录客户端游戏时，请记得在您的账户前
            <span>加大写的“{{WEBCONFIG.PtBefore}}”</span>
          </p>
        </div>

      </div>
      <!-- PT手机 -->
      <div class="content-info" v-show="cur=='PTAPP'">
        <img src="./images/downloadBanner.jpg" alt="" class="download-img">
        <div class="picTexts">
          <h1>PT手机客户端下载</h1>
          <h4>PT DOWNLOAD</h4>
        </div>
        <div class="download-step1">
          <span class="step">01</span>
          <div class="step-info">
            <p>&nbsp;下载方式一</p>
            <p>&nbsp;手机浏览器打开：
              <span>{{Download.ptMobile}}</span>
            </p>
          </div>
        </div>
        <div class="download-step2">
          <span class="step">02</span>
          <div class="step-info">
            <p>&nbsp;下载方式二</p>
            <p>&nbsp;扫一扫二维码轻松下载</p>
          </div>
          <!-- <vue-qr class="download-Qrcode" :text='Download.app' height="140" :margin="5" width="140"></vue-qr> -->
          <div class="support">
            <p>完美支持</p>
            <p>安卓版/IOS版</p>
          </div>
          <img src="./images/plaform.png" alt="" class="download-platform">
          <div class="download-Qrcode">
            <img  :src="generateQRCode(Download.ptMobile,140)">
          </div>
        </div>
        <div class="download-step1">
          <div class="PT-detail">
            <p>温馨提示</p>
            <p>登录客户端游戏时，请记得在您的账户前
              <span>加大写的“{{WEBCONFIG.PtBefore}}”</span>
            </p>
        </div>
        </div>
      </div>
      <!-- DT手机 -->
      <div class="content-info" v-show="cur=='DT'">
        <img src="./images/downloadBanner.jpg" alt="" class="download-img">
        <div class="picTexts">
          <h1>DT手机客户端下载</h1>
          <h4>DT DOWNLOAD</h4>
        </div>
        <div class="PT-platform clear">
          <img src="./images/ios.png" alt="">
          <img src="./images/android.png" alt="">
        </div>
        <div class="download-PT">
          <p class="pt-step">01</p>
          <div>
            <p>IOS版</p>
            <p>点击下载</p>
          </div>
          <a target="_blank" class="download-btn" :href="Download.dtIos">立即下载</a>
          <p class="pt-step">02</p>
          <div>
            <p>Android版</p>
            <p>点击下载</p>
          </div>
          <a target="_blank" class="download-btn" :href="Download.dtAndroid">立即下载</a>
        </div>
        <img class="PTbg" src="./images/ptappbg.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import {
    generateQRCode
  } from "@/api/show"
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
        cur: "PT",
        // data:['PT客户端','AG客户端']
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      }
    },
    created() {
      this.generateQRCode("text")
      this.$bus.$on('getDownloadPage', eventData => {
        this.cur = eventData
      })
    },
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  .download-content {
    width: 696px;
    float: left;
    margin-left: 78px;
    border: 1px solid #2b2a27;
    .clear::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
      clear: both;
    }
    .normal {
      position: relative;
      .picTexts{
        position: absolute;
        top: 10px;
        text-align: center;
        width: 100%;
        h1{
          color: #fff;
          font-size: 30px;
          font-weight: bold;
          line-height: 35px;
          margin-bottom: 6px;
        }
        h4{
          color: #fff;
          font-size: 14px;
        }
      }
      .download-img {
        display: block;
      }
      .download-btn {
        position: absolute;
        background: #e14647;
        border-radius: 5px;
        color: #fff;
        width: 97px;
        height: 36px;
        top: 99px;
        right: 90px;
        cursor: pointer;
      }
      .download-step1 {
        height: 210px;
        position: relative;
        .line {
          width: 630px;
          margin: auto;
          border-top: 1px dashed #575757;
        }
        .speed {
          display: inline-block;
          margin: 44px 0 0 30px;
        }
      }
      .download-step2 {
        position: relative;
        height: 300px;
        .step {
          line-height: normal;
        }
        .step-info {
          line-height: normal;
          margin-top: 20px;
        }
        .download-Qrcode {
          display: block;
          float: left;
          // padding: 10px;
          background-color: #993839;
          border-radius: 5px;
          width: 200px;
          height: 200px;
          margin-left: 200px;
          padding-top: 4px;
          text-align: center;
          img{
            width: 96%;
          }
        }
        .support {
          width: 360px;
          height: 60px;
          border: 1px solid #2b2a27;
          position: absolute;
          top: 116px;
          left: 47px;
          color: #FFFFFF;
          text-align: center;
          padding-top: 10px;
        }
        .download-platform {
          position: absolute;
          bottom: 70px;
          left: 176px;
        }
      }
      .step {
        font: normal bold 70px/210px "Microsoft yahei";
        color: #993839;
        display: inline-block;
        float: left;
        margin-left: 47px;
      }
      .step-info {
        float: left;
        color: #FFFFFF;
        margin-top: 79px;
        p {
          height: 30px;
          line-height: 30px;
        }
        span {
          color: #993839;
        }
      }
      .download-PT {
        margin-top: 47px;
        color: #fff;
        padding-left: 30px;
        position: relative;
        .pt-step {
          float: left;
          font: normal bold 70px "Microsoft yahei";
          color: #e14647;
        }
        div {
          float: left;
          padding-top: 20px;
          p {
            font-size: 14px;
            line-height: 18px;
          }
        }
        .download-btn {
          &:nth-of-type(1) {
            display: inline-block;
            position: static;
            float: left;
            margin: 30px 84px 0 20px;
            top: 0;
            right: 0;
            line-height: 36px;
            text-align: center;
          }
          &:nth-of-type(2) {
            display: inline-block;
            float: left;
            position: static;
            margin: 30px 0 0 20px;
            top: 0;
            right: 0;
            line-height: 36px;
            text-align: center;
          }
        }
      }
      .PTbg {
        display: block;
        margin: 20px auto 10px;
      }
      .PT-detail {
        width: 590px;
        height: 137px;
        background-color: #222222;
        margin: 0 auto 70px auto;
        padding: 30px 0;
        text-align: center;
        p {
          &:first-child {
            font-size: 25px;
            color: #e14647;
          }
          &:last-child {
            margin-top: 20px;
            color: #fff;
            span {
              color: #e14647;
            }
          }
        }
      }
      .PT-platform{
        margin: 50px 0 -37px 0;
        img{
          display: block;
          float: left;
          &:nth-of-type(1){
            margin-left: 92px;
          }
          &:nth-of-type(2){
            margin-left: 212px;
          }
        }
      }
    }
  }

</style>
