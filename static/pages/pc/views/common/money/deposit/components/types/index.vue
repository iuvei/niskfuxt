<template>
  <div class="deposit_menus">
      <!-- <div class="next posl" @click="pregame()"><span class=" ico-pre"></span></div>
      <div class="payBox">
        <div class="gameDev" v-for="item in newPayMenus" :class="{active:active==item.name}" :key="item.name" @click="setPaytype(item)">
            <div class="name"><i :class="item.ico" class="iconyg"></i> {{item.name}}</div>
        </div>
      </div>
      <div class="next posl" @click="nextgame()"><i class=" ico-next"></i></div> -->
      <a href="javascript:void(0);" v-for="item in payMenus" :class="{active:active==item.name}" :key="item.name" @click="setPaytype(item)"  class="payBox">
        <div class="name"><i :class="item.ico" class="iconyg"></i> {{item.name}}</div>
      </a>
      <div class="qrItem">
        <img :src="generateQRCode(Download.app,140)">
        手机APP下载
      </div>
  </div>
</template>
<script>
  import {
    Download
  } from '@/assets/data'
  import {depositMenu} from '@/controls/money/deposit'
  import {
    generateQRCode
  } from "@/api/show"
  export default {
    mixins:[depositMenu],
    data() {
      return {
        Download,
        paySelect: null,
        active: "",
        newPayMenus:[],
        gameMinIndex:0,
        gameMaxIndex:5,
        gamelen:''
      }
    },
    methods: {
      setPaytype(item){
        if(this.paySelect==item) return
        this.paySelect=item;
        this.$bus.$emit('setClasses',item);
        this.active = item.name;
      },
      pregame(){
        if (this.gameMinIndex == 0) {
          window.toast('已无更多')
          return false;
        } else {
          this.gameMinIndex = this.gameMinIndex - 1
          this.gameMaxIndex = this.gameMaxIndex - 1
          this.newPayMenus = this.payMenus.slice(this.gameMinIndex,this.gameMaxIndex)
        }
      },
      nextgame(){
        if (this.gameMaxIndex < 5 || this.gameMaxIndex >= this.gamelen) {
          window.toast('已无更多')
          return false;
        } else {
          this.gameMinIndex = this.gameMinIndex + 1
          this.gameMaxIndex = this.gameMaxIndex + 1
          this.newPayMenus = this.payMenus.slice(this.gameMinIndex,this.gameMaxIndex)
        }
      },
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      }
    },
    created() {
      this.getPaymentConfigInfo({terminalType: 0,separateMcpay:1});
    },
    watch:{
      payMenus(item){
        this.active = item[0].name
        this.setPaytype(item[0])
        this.gamelen = this.payMenus.length;
        if (this.payMenus.length>5) {
          this.newPayMenus = this.payMenus.slice(0,5)
        }else{
          this.newPayMenus = this.payMenus;
        }
      }
    }
  };

</script>
<style lang="scss" scoped>
    .deposit_menus{
        .payBox{
          // background-color: rgba(0, 0, 0, 0.7);
          display: block;
          width: 140px;
          height: 60px;
          line-height: 60px;
          border: 1px solid #303030;
          font-size: 16px;
          color: #fff;
          padding-left: 30px;
          position: relative;
          cursor: pointer;
          &.active{
            background: #8d3e3c;
            background: -webkit-gradient(linear, left top, right top, from(#8d3e3c), to(#bb4e49));
            background: linear-gradient(to right, #8d3e3c 0%, #bb4e49 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49',GradientType=1 );
          }
          &::before{
            content: '';
            width: 100%;
            background: none;
            height: 5px;
            position: absolute;
            bottom: -4px;
            left: 0;
          }
          .yg-speedPay{
            margin-left: -10px;
          }
          .iconyg{
            font-size: 28px;
            vertical-align: middle;
          }
        }
        .qrItem{
          margin: 20px auto;
          color: #d7b26c;
          text-align: center;
          padding: 0 20px;
          img{
            width: 100%;
            border: 1px solid #d7b26c;
            border-radius: 5px;
            margin-bottom: 10px;
          }
        }
        .posl{
          position: relative;
          left: -29px;
        }
        .next{
            background: #a72c2f;
            display: inline-block;
            height: 20px;
            vertical-align: middle;
            cursor: pointer;
            .ico-pre{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              top: 50%;
              transform: translate(0,-50%);
              border-color: transparent #a72c2f transparent transparent;
            }
            .ico-next{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              top: 50%;
              transform: translate(0,-50%);
              border-color: transparent transparent transparent #a72c2f;
              margin-left: 10px;
              left: 27px;
            }
        }
    }
</style>
