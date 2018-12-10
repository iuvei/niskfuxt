<template>
  <div class="user-top-box">
    <div class="user-top-box-row">
      <div class="user-top-box-row-col"><span class="money">{{userData.accountMoney}}</span><br><span class="account">主账户(元)</span></div>
      <div class="user-top-box-row-col"><span class="money">{{userData.deputyCredit}}</span><br><span class="account">礼金账户(元)</span></div>
    </div>
    <div class="user-top-box-row">
      <div class="user-top-box-row-col"><span class="account">{{userData.loginname}},您好！</span></div>
      <div class="user-top-box-row-col"><div class="logos" :class="`logo${userData.levelNumber}`"></div><span class="account">{{userData.level}}</span></div>
      <div class="user-top-box-row-col"><i class="signico"></i><span class="btn-sign" @click="doSignRecord">签到</span></div>
    </div>
    <div class="user-top-box-row-col" style="text-align:center;">
      <span class="user-top-btn" @click="transferAll">资金一键归集</span>
    </div>
    <process></process>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getGuestbookCountNew} from "@/api/show"
  import {doSignRecord} from "@/api/user"
  import  {SETTING} from "@/assets/data"
  import { updateGameMoney } from "@/api/payment";
  import process from "mobile/components/process";
  export default {
    data() {
      return {
        SETTING,
        newMsg: false,
        showSheet: false,
        value1:false,
        sheetData: [
          {name: "在线客服"},
          {name: "电话回拨"},
          {
            name: "400-2312314", method() {
          }
          }
        ]
      };
    },
    props: {
      value: {
        default: false
      }
    },
    watch: {
      value(val) {
        this.showSheet = val;
      },
      showSheet(val) {
        this.$emit("input", val)
      }
    },
    methods: {
      loadData() {
        getGuestbookCountNew().then(res => {  //未读消息
          this.newMsg = res.data > 0;
        })
      },
      transferAll() {
        window.$confirm(
          '<p style="text-align:left;">1.游戏平台余额只会回收整数部分。<br/>2.领取优惠但未完成流水的游戏余额不会被归集。<br/>3.资金归集可能需要较长时间，请耐心等待。</p>',
          "温馨提示",
          {
            confirmText: "确认",
            cancelText: "取消"
          }
        ).then(
          () => {
          // 确认，发出归集请求
          window.setTimeout(()=>{
            const postData = {
              transferGameOut: "ALL_V2",
              transferGameIn: "MAIN",
              transferGameMoney: 0
            };
            // 查看进度按钮
              updateGameMoney(postData).then(res => {
                  if (res.success) {
                    this.$bus.$emit('showTransferProce',true)
                    window.toast(res.message)
                  } else {
                    window.toast(res.message)
                  }
                })
                .catch(err => {
                  window.toast(err.message)
                });
            },300)
          },
          () => {

            // 取消，查看订单
          });
      },
      doSignRecord(){
        doSignRecord().then(res=>{
          window.toast(res.message)
        })
      }
    },
    created() {
//      this.loadData();
    },
    components:{
      // sheet
      process
    },
    computed: {
      ...mapGetters(["userData", 'islogin', 'isUser', 'unread']),
      userImg(){
        return this.userData.levelNumber?require(`./images/${this.userData.levelNumber}.png`):require("./images/0.png"); 
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .user-top-box{
    overflow: hidden;
    background:#fff url("./images/bg.jpg") no-repeat top center/100% 100%;
    // margin-top: r(100);
    padding-bottom: r(80);
    // padding-top: r(80);
    @include f(30px);
    .user-top-box-header{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding: r(10) 2%;
      .iconyg{
        @include f(48px);
        color: #fff;
        // transform: translateY(-50%);
        line-height: r(80);
        display: inline-block;
        vertical-align: middle;
      }
      .link_logo{
        img{
          width: 32vw;
        }
      }
    }
    .user-top-box-row{
      width: 100%;
      padding: r(50) 2% 0;
      display: flex;
      &:last-child{
        padding-bottom: r(30);
      }
      .user-top-box-row-col{
        color: #fff;
        flex: 1;
        text-align: center;
        line-height: r(50);
        .money{
          @include f(46px);
          color:#ff7e28;
          text-align: center;
        }
        .account{
          @include f(26px);
          text-align: center;
        }
        .iconfont{
          @include f(50px);
          vertical-align:middle;
          margin-right:r(5);
        }
        .signico{
          display: inline-block; 
          width:r(40); 
          height:r(28); 
          white-space:nowrap; 
          letter-spacing: -1em; 
          text-indent: -99em; 
          color: transparent;
          vertical-align: middle;
          background-image: url(./images/pic_mine_sign@3x.png);
          background-position:center center;
          background-repeat: no-repeat;
          background-size: cover;
          &:before{
            content: '\3000'
          }
        }
        .btn-sign{
          display:inline-block;
          background-color: #6e4f4f;
          @include f(24px);
          line-height: r(30);
          color:#fff;
          padding:r(2) r(10);
          border-radius:r(8);
        }
        .logos {
          background-image: url(./images/0.png);
          background-position:center center;
          background-repeat: no-repeat;
          background-size: 100% 100%!important;
          margin-right: 4px;
          display: inline-block; 
          width:r(50); 
          height:r(40); 
          white-space:nowrap; 
          letter-spacing: -1em; 
          text-indent: -99em; 
          color: transparent;
          vertical-align: middle;
          &:before{
            content: '\3000'
          }
          &.logo0{
            // 新会员
            background-image: url(./images/0.png);
          }
          &.logo1{
            // 忠实VIP
            background-image: url(./images/1.png);
          }
          &.logo2{
            // 青铜
            background-image: url(./images/2.png);
          }
          &.logo3{
            // 白银
            background-image: url(./images/3.png);
          }
          &.logo4{
            // 黄金
            background-image: url(./images/4.png);
          }
          &.logo5{
            // 铂金
            background-image: url(./images/5.png);
          }
          &.logo6{
            // 钻石
            background-image: url(./images/6.png);
          }
        }
      }
    }

    .user-top-btn{
        display:inline-block;
        margin-top:r(10);
        background: #efdaa7;
        background: -webkit-linear-gradient(bottom,#efdaa7,#a48048);
        background: -moz-linear-gradient(bottom,#efdaa7,#a48048);
        background: -o-linear-gradient(bottom,#efdaa7,#a48048);
        background: linear-gradient(bottom,#efdaa7,#a48048);
        color: #303030;
        text-align: center;
        @include f(24px);
        padding: r(10) r(100);
        border-radius: 50px;
      }
  }
</style>
