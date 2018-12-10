<template>
  <div class="col left content-container left">

    <img class="ebet content-block bounceInRight animated bounceInLeft" v-show="cur == 'DT'" src="./images/DT_app.png">
    <div class="ope content-block bounceInRight animated" v-show="cur == 'AG'">
      <h2 class="title">AG真人娱乐APP</h2>
      <div class="description">无视空间，时间，随时随地体验AG真人游戏</div>
      <h3 class="sub-title">支持机型</h3>
      <div class="device">
        <!-- <a class="iphone active">
            <img src="./images/IOS1.png">
            <span>iPhone</span>
          </a> -->
        <a class="android">
          <img src="./images/Android1.png">
          <span>Android</span>
        </a>
      </div>
      <h3 class="sub-title">下载方式</h3>
      <div class="download-block">
        <div class="col s4 left">请使用设备默认浏览器打开下列网址，即可自动下载。
          <br>
          <br>
          <br>
          <a target="_blank" :href="Download.agMobile"><u>立即下载</u></a>
        </div>
        <div class="col s8 right">
          <div class="qrcode">
            <img :src="generateQRCode(Download.agMobile,140)">
          </div>
          <div class="qrcode-msg">
            <u>扫描左侧二维码，即可快速下载</u>
            <br>
            <br>
            <!-- <span></span>iOS 安装教程</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="ope content-block bounceInRight animated" v-show="cur == 'APP'">
      <h2 class="title">澳盈娱乐手机APP</h2>
      <div class="description">原生态应用，操作体验完胜业界其他产品。全面支持手机在线存款、提款、转账，自取优惠等，APP内含朋友圈，与战友共同分享战绩，赢取海量红包</div>
      <h3 class="sub-title">支持机型</h3>
      <div class="device">
        <a class="iphone active">
          <img src="./images/IOS1.png">
          <span>iPhone</span>
        </a>
        <a class="android">
          <img src="./images/Android1.png">
          <span>Android</span>
        </a>
      </div>
      <h3 class="sub-title">下载方式</h3>
      <div class="download-block">
        <div class="col s4 left">请使用设备默认浏览器打开下列网址，即可自动下载。
          <br>
          <br>
          <br>
          <a target="_blank" :href="Download.app"><u>立即下载</u></a>
        </div>
        <div class="col s8 right">
          <div class="qrcode">
            <img :src="generateQRCode(Download.app,140)">
          </div>
          <div class="qrcode-msg">
            <u>扫描左侧二维码，即可快速下载</u>
            <br>
            <br>
            <router-link class="teachBtn col" :to="{name:'downloadTch'}"> iOS 安装教程</router-link>
          </div>
        </div>
      </div>
    </div>
    <img class="ebet content-block bounceInRight animated bounceInLeft" src="./images/EBET_app.png" style="display: none;">
    <div class="pt  content-block bounceInRight animated bounceInLeft" v-show="cur == 'PT'">
      <h2 class="title">PT游戏客户端下载</h2>
      <div class="description">PlayTech电子游戏平台商自1999年面世至今，提供的产品十分广泛，拥有经认可的检测机构BMM international
        和TST颁发的评估证书，并且还是远程电娱协会（RGA）的成员，拥有奥尔德尼岛电娱管理委员会（AGCC）颁发的官方预核证书。同时playtech也得到了代表英国电娱的主要贸易联合会ABB的认证。</div>
      <div class="prefixBlock">
        <span class="preLeft">您的客户端专用登陆名 </span>
        <span class="preRight">登录客户端游戏时，请记得在您的账户前 加大写的“{{WEBCONFIG.PtBefore}}”</span>
      </div>
      <div class="sub-description">例如：澳盈账号为“owin888”则登录PT客户端账号则为“{{WEBCONFIG.PtBefore}}owin888”</div>
      <h3 class="sub-title">下载方式</h3>
      <div class="download-block">
        <div class="col s4 left">
          <a class="pc-downLink" :href="Download.ptpc">电脑版下载</a>
          <a class="android-downLink" :href="Download.ptMobile">安卓手机版本下载</a>
        </div>
        <div class="col s8 right">
          <div class="qrcode">
            <img :src="generateQRCode(Download.ptMobile,140)">
          </div>
          <div class="qrcode-msg">
            <u>扫描左侧二维码，即可快速下载</u>
            <br>
            <br>
            <!-- <router-link class="teachBtn col" :to="{name:'downloadTch'}"> iOS 安装教程</router-link> -->
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both"></div>
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
        cur: "APP",
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
<style lang="scss">
  .content-container {
    width: 47%;
    margin-top: 75px;
    margin-left: -15px;

    .content-block {
      color: #efefef;

      a {
        color: #efefef;
      }

      .title {
        font-size: 36px;
        color: #fff;
        margin: 1.78rem 0 1.424rem;
        line-height: 110%;
        font-weight: 400;

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
        line-height: 1.5;
        font-weight: 400;
        font-size: 14px;
      }

      .sub-title {
        font-size: 18px;
        margin-top: 45px;
        line-height: 110%;
        margin: 1.46rem 0 1.168rem;
        font-weight: 400;
      }

      .sub-description {
        font-size: 12px;
        margin-top: 10px;
      }

      .prefixBlock {
        margin-top: 10px;
        background: #fff;
        padding: 10px;
        border-radius: 5px;

        .preLeft {
          color: #2293fc;
        }

        .preRight {
          margin-left: 20px;
          color: #787878;
        }
      }

      .device a {
        display: inline-block;
        border: 1px solid #efefef;
        border-radius: 5px;
        padding: 10px 20px;
        margin-right: 15px;

        >* {
          vertical-align: middle;
        }
      }

      .download-block {
        .col {
          padding-left: unset !important;
        }

        .s4 {
          width: 33.3333333333%;
          margin-left: auto;
          left: auto;
          right: auto;
          box-sizing: border-box;
          padding: 0 .75rem;
          min-height: 1px;
        }

        .left {
          float: left !important;
        }

        .s8 {
          width: 66.6666666667%;
          margin-left: auto;
          left: auto;
          right: auto;
          box-sizing: border-box;
          padding: 0 .75rem;
          min-height: 1px;
        }

        .right {
          float: right !important;
        }

        .pc-downLink {
          color: #2293fc;
          background: #fff;
        }

        .android-downLink,
        .pc-downLink {
          display: inline-block;
          border: 1px solid #efefef;
          border-radius: 50px;
          padding: 10px 20px;
          margin-right: 15px;
          margin-top: 14px;
          width: 128px;
          text-align: center;
          height: 21px;
          line-height: 21px;
        }

        .right {
          border-left: 1px solid #efefef;

          .qrcode {
            background-color: hsla(0, 0%, 100%, 0) !important;
            background-image: url(./images/qrcode2.png) !important;
            background-repeat: no-repeat !important;
            display: inline-block;
            width: 123px;
            height: 123px;
            background: #fff;
            border-radius: 10px;
            text-align: center;
            line-height: 122px;
            margin-left: 10px;
            float: left;

            img {
              width: 80px;
              height: 80px;
              vertical-align: middle;
            }
          }

          .qrcode-msg {
            margin-left: 10px;
            display: inline-block;
            height: 123px;
            text-align: center;
            float: left;
            font-size: 14px;
            .teachBtn {
              margin-top: 39px;
            }
          }
        }
      }
    }
  }

</style>
