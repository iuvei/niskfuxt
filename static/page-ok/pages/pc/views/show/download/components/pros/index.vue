<template>
  <div class="content-container">
    <div class="qrItem">
      <p class="tips">使用扫码软件进行扫描</p>
      <div class="qrcode" v-if="cur == 'APP'">
        <div>
          <div class="qrbg">
            <img class="qrimg" :src="generateQRCode(Download.app,140)">
          </div>
          <p>客户端下载</p>
        </div>
      </div>
      <div class="qrcode" v-if="cur == 'DT'">
        <div>
          <div class="qrbg">
            <img class="qrimg" :src="generateQRCode(Download.dtIos,140)">
            <!-- <img class="qrimg" src="/static/images/waiting.png" alt=""> -->
          </div>
          <p>IOS客户端下载</p>
        </div>
        <div>
          <div class="qrbg">
            <img class="qrimg" :src="generateQRCode(Download.dtAndroid,140)">
            <!-- <img class="qrimg" src="/static/images/waiting.png" alt=""> -->
          </div>
          <p>Android客户端下载</p>
        </div>
      </div>
      <div class="qrcode" v-if="cur == 'AG'">
        <div>
          <div class="qrbg">
            <img class="qrimg" :src="generateQRCode(Download.agMobile,140)">
          </div>
          <p>客户端下载</p>
        </div>
      </div>
      <div class="qrcode" v-if="cur == 'PT'">
        <div >
          <div class="qrbg">
            <img class="qrimg" :src="generateQRCode(Download.ptMobile,140)">
          </div>
          <p>安卓手机版本下载</p>
        </div>
        <div>
          <a class="pc-downLink" :href="Download.ptpc">
            <img src="./images/icon_pc.png" alt="">
          </a>
        </div>
        <div class="pt-tips">
          <p>温馨提示：</p>
          <p>PT电脑和手机客户端登录需在账号前加大写字母"JZ"。 </p>
          <p>例如：新九州账号xjz001，登录PT客户端需输入"JZXJZ001"</p>
        </div>
      </div>
    </div>
    <div class="imgItem">
      <img src="./images/image_app.png" v-if="cur == 'APP'" alt="">
      <img src="./images/image_ag.png" v-if="cur == 'AG'" alt="">
      <img src="./images/image_dt.png" v-if="cur == 'DT'" alt="">
      <img src="./images/image_pt.png" v-if="cur == 'PT'" alt="">
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
        cur: "DT",
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
  .content-container {
    display: flex;
    padding-top: 127px;
    .qrItem{
      flex: 1;
      text-align: center;
      padding-top: 223px;
      .tips{
        font-size: 14px;
        color: #fff;
        line-height: 1.7;
        text-align: left;

      }
      .qrcode{
        display: flex;
        flex-flow: wrap;
        margin-top: 10px;
        div{
          margin-right: 20px;
          .qrimg{
            width: 115px;
            height: 115px;
          }
          p{
            font-size: 15px;
            color: #fff;
            line-height: 1.7px;
            margin-top: 15px;
          }
          .pc-downLink{
            margin-left: 30px;
            img{
              width: 75%;
              margin-top: -32px;
            }
          }
          .qrbg{
            background: url('./images/qrbg.png') no-repeat;
            background-size: cover;
            background-position: top center;
            width: 125px;
            height: 125px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .pt-tips {
        margin-top: 15px;
        p {
          line-height: 1.4;
          text-align: left;
        }
      }
    }
    .imgItem{
      text-align: right;
      img{
        width: 90%;
      }
    }
  }
</style>
