<template>
  <div class="downloadItem">
    <img src="./images/step.png" alt="">
    <div class="content">
      <img src="./images/iph.png" alt="" class="iphone">
      <div class="qrItem">
        <img :src="generateQRCode(href,140)">
        <!-- <img src="static/images/waiting.png" alt=""> -->
        <div class="rightItem">
          <router-link :to="{name:'downloadIndex'}" class="downloadBtn"></router-link>
          <p class="des">扫描二维码 进入手机web版</p>
          <!-- <p class="des">IOS & Android 移动装置访问 {{Download.app}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    generateQRCode
  } from "@/api/show"
  import {
    SETTING,Download
  } from "@/assets/data";
export default {
    data(){
        return{
          href: window.location.origin + '/mobile',
          SETTING,
          Download,
          item1:1,
          item2:2,
          item3:3,
          item4:4
        }
    },
    methods:{
        errTips(){
            toast('敬请期待！')
        },
        generateQRCode(url, size) {
          return generateQRCode(url, size)
        },
        changeItem(){
            let _this = this
            setInterval(function () {
                if (_this.item1<3) {
                    _this.item1 = _this.item1 + 1
                }else if(_this.item1 == 3){
                    _this.item1 = 1
                }
                if (_this.item2<3) {
                    _this.item2 = _this.item2 + 1
                }else if(_this.item2 == 3){
                    _this.item2 = 1
                }
                if (_this.item3<3) {
                    _this.item3 = _this.item3 + 1
                }else if(_this.item3 == 3){
                    _this.item3 = 1
                }
                // if (_this.item4<4) {
                //     _this.item4 = _this.item4 + 1
                // }else if(_this.item4 == 4){
                //     _this.item4 = 1
                // }
            }, 2000)
        },
        chooseIdx(idx){
            let _this = this
            switch (idx) {
                case 1:
                    _this.item1 = 1
                    _this.item2 = 2
                    _this.item3 = 3
                    _this.item4 = 4
                    break;
                case 2:
                    _this.item1 = 4
                    _this.item2 = 1
                    _this.item3 = 2
                    _this.item4 = 3
                    break;
                case 3:
                    _this.item1 = 3
                    _this.item2 = 4
                    _this.item3 = 1
                    _this.item4 = 2
                    break;
                default:
                    _this.item1 = 2
                    _this.item2 = 3
                    _this.item3 = 4
                    _this.item4 = 1
                    break;
            }
        }
    },
    created() {
        this.changeItem()
        this.generateQRCode("text")
    },
}
</script>
<style lang="scss" scoped>
.downloadItem{
  background: #191919;
  border-top: 2px solid #333;
  padding-top: 30px;
  text-align: center;
  img{
    margin: 0 auto;
  }
  .content{
    background: url('./images/content.png') no-repeat;
    background-size: cover;
    background-position: top center;
    width: 1000px;
    height: 410px;
    margin: 15px auto 0;
    position: relative;
    border-bottom: 2px solid #000;
    .iphone{
      position: absolute;
      left: 20px;
      bottom: 0;
    }
    .qrItem{
      position: absolute;
      left: 40%;
      bottom: 30px;
      display: flex;

      img{
        height: 140px;
        width: 140px;
        margin-right: 10px;
        border: 2px solid #ffffff;
      }
      .rightItem{
        text-align: center;
        padding-top: 35px;
        .downloadBtn{
          display: inline-block;
          background: url('./images/btn.png') no-repeat;
          background-size: contain;
          background-position: center;
          width: 150px;
          height: 40px;
          margin-bottom: 20px;
          &:hover {
            opacity: .8;
          }
        }
        p{
          color: #5f5f5f;
          text-align: left;
          line-height: 1.7;
        }
      }
    }
  }
}
</style>
