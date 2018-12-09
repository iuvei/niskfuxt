<template>
  <div class="down-content content">
    <div class="d-item">
      <div class="title">官网客户端下载</div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/1.png')">扫码下载</div>
        <div class="text">使用手机二维码，扫描软件扫码下载</div>
        <div class="qrbox">
          <div class="qr android">
            <img v-lazy="generateQRCode(Download.app)">
          </div>
          <div class="qr ios">
            <img v-lazy="generateQRCode(Download.app)">
          </div>
        </div>
      </div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/2.png')">网址下载</div>
        <div class="text">手机任意浏览器输入网址</div>
        <p class="links"><a>{{Download.app}}</a></p>
        <p class="links2" @click="showTech">查看安装教程</p>
      </div>
      <img class="ico" v-lazy="require('./images/d3.png')">
    </div>
    <div class="d-item">
      <div class="title">D<br/>T客户端下载</div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/1.png')">扫码下载</div>
        <div class="text">使用手机二维码，扫描软件扫码下载</div>
        <div class="qrbox">
          <div class="qr android">
            <img v-lazy="`/index/generateQRCode.php?qrtext=${Download.dtAndroid}`">
          </div>
          <div class="qr ios">
            <img v-lazy="`/index/generateQRCode.php?qrtext=${Download.dtIos}`">
          </div>
        </div>
      </div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/2.png')">扫码下载</div>
        <div class="text">手机任意浏览器输入网址</div>
        <p class="links"><a :href="Download.dtAndroid" target="_blank">{{Download.dtAndroid}}</a></p>
        <p class="links"><a :href="Download.dtIos" target="_blank">{{Download.dtIos}}</a></p>
        <p class="links2" @click="showTech">查看安装教程</p>
        
      </div>
      <img class="ico" v-lazy="require('./images/d2.png')">
    </div>
    <div class="d-item">
      <div class="title">P<br/>T客户端下载</div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/1.png')">扫码下载</div>
        <div class="text">使用手机二维码，扫描软件扫码下载</div>
        <div class="qrbox">
          <div class="qr android">
            <img v-lazy="`/index/generateQRCode.php?qrtext=${Download.ptMobile}`">
          </div>
          <!-- <div class="qr ios">
            <img :src="`/index/generateQRCode.php?qrtext=${Download.dtIos}`">
          </div> -->
        </div>
      </div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/2.png')">网址下载</div>
        <div class="text">电脑任意浏览器输入网址</div>
        <p class="links"><a :href="Download.dtAndroid" target="_blank">{{Download.ptpc}}</a></p>
        <!-- <p class="links"><a :href="Download.dtIos" target="_blank">{{Download.dtIos}}</a></p> -->
      </div>
      <img class="ico" v-lazy="require('./images/d1.png')">
    </div>
    <div class="d-item">
      <div class="title">A<br/>G客户端下载</div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/1.png')">扫码下载</div>
        <div class="text">使用手机二维码，扫描软件扫码下载</div>
        <div class="qrbox">
          <div class="qr android">
            <img v-lazy="`/index/generateQRCode.php?qrtext=${Download.agMobile}`">
          </div>
          <!-- <div class="qr ios">
            <img v-lazy="`/index/generateQRCode.php?qrtext=${Download.agMobile}`">
          </div> -->
        </div>
      </div>
      <div class="show-box">
        <div class="head"><img v-lazy="require('./images/2.png')">网址下载</div>
        <div class="text">手机任意浏览器输入网址</div>
        <p class="links"><a :href="Download.dtAndroid" target="_blank">{{Download.agMobile}}</a></p>
        <!-- <p class="links2" @click="showTech">查看安装教程</p> -->
        
        <!-- <p class="links"><a :href="Download.dtIos" target="_blank">{{Download.dtIos}}</a></p> -->
      </div>
      <img class="ico" v-lazy="require('./images/d4.png')">
    </div>
  </div>
</template>
<script>
  import  {generateQRCode} from "@/api/show"
  import  {Download} from "@/assets/data"
  export default {
    name: "",
    data() {
      return {
        Download,
      }
    },
    methods: {
      generateQRCode(url,size){
        return   generateQRCode(url,size)
      },
      showTech(){
        console.log('showTech')
        this.$bus.$emit('setTech',true)
      }
    },
    components:{
    }
  }
</script>
<style lang="scss" spcoed>
    .down-content{
      padding:40px 0;
      .d-item{
        border-radius:12px;
        overflow:hidden;
        height:320px;
        background:url(./images/bg.jpg) center center no-repeat;
        background-size:100% 100%;
        margin-bottom:20px;
        position:relative;
        padding-left:70px;
        transition:all 0.8s;
        &:Hover{
          transform:scale(1.05);
        }
        .title{
          position:absolute;
          top:0;
          left:0;
          height:100%;
          width:70px;
          word-break:break-all;
          font-size:24px;
          padding:20px;
          line-height:1.8;
        }
        .show-box{
          float:left;
          margin-left:50px;
          margin-top:20px;
          .qrbox{
            min-width:330px;
          }

        }
        .head{
            font-size:22px;
            color:#ffd37b;
            font-weight:bold;
            img{
              vertical-align:middle;
              margin-right:10px;
            }
        }
        .text{
          color:#fff;
          font-size:16px;
          line-height:2.5;
        }
        .qr{
          width:140px;
          height:170px;
          background-size:100% 100%;
          text-align:center;
          float:left;
          margin-right:30px;
          &.android{
            background-image:url('./images/bg-android.jpg');
          }
          &.ios{
            background-image:url('./images/bg-ios.jpg');
          }
          img{
            display:inline-block;
            margin-top:60px;
            width:100px;
            height:100px;
          }
        }
        .links{
          margin-bottom:20px;
          min-width:300px;
          height:40px;
          line-height:40px;
          font-size:14px;
          border-radius:20em;
          color:#fff;
          padding:0 10px;
          // z-index:9;
          background: rgb(218,101,77); /* Old browsers */
          background: -moz-linear-gradient(left, rgba(218,101,77,1) 0%, rgba(236,136,76,1) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(left, rgba(218,101,77,1) 0%,rgba(236,136,76,1) 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right, rgba(218,101,77,1) 0%,rgba(236,136,76,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#da654d', endColorstr='#ec884c',GradientType=1 ); /* IE6-9 */
        }
        .links2{
          cursor:pointer;
          text-align:center;
          transition:all 0.3s linear;
          margin-bottom:20px;
          width:160px;
          height:40px;
          line-height:40px;
          font-size:16px;
          border-radius:20em;
          color:#343434;
          padding:0 10px;
          background: rgb(255,210,121); /* Old browsers */
          background: -moz-linear-gradient(left, rgba(255,210,121,1) 0%, rgba(249,222,152,1) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(left, rgba(255,210,121,1) 0%,rgba(249,222,152,1) 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right, rgba(255,210,121,1) 0%,rgba(249,222,152,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffd279', endColorstr='#f9de98',GradientType=1 ); /* IE6-9 */        
          &:hover{
            transform:scale(1.05);
          }
        }
        .ico{
          position:absolute;
          right:0;
          top:50%;
          transform:translateY(-50%);
        }
      }
    }
</style>
