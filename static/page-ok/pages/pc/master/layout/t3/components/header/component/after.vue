<template>
  <div>
    <div class="top-login-block fr" v-if="isUser">
      <div class="accountItem">
        <span class="account">账户：{{userData.loginname}}</span>
        <router-link :to="{name:'user'}" class="userCenter">个人中心</router-link>
        <div class="ctrItems">
          <router-link :to="{name:'transfer'}" class="ctrItem">户内转账</router-link>
          <router-link :to="{name:'discount_savesend'}" class="ctrItem">自助存送</router-link>
          <a href="javascript:void(0);" @click="transferAll" class="ctrItem">资金一键归集</a>
          <div class="deputyMoney ctrItem">
            红利账户：{{wallet['DEPUTY']}}<a href="javascript:;" @click="getGameMoney('DEPUTY')" class="iconyg yg-f14 btn003" :class="{xuanzhuan:actived==true}"></a>
          </div>
        </div>
      </div>
      <div class="messageItem">
        <router-link v-if="unread" class="news" :to="{name:'message'}">消息(<i class="num">{{unread}}</i>)</router-link>
      </div>
      <div class="moneyItem">
        <div class="mainMoney">
          主账户：{{wallet['MAIN']}}<a href="javascript:;" @click="getGameMoney('MAIN')" class="iconyg yg-f14 btn003" :class="{xuanzhuan:actived==true}"></a>
        </div>
      </div>
      <div class="buttonItem">
        <router-link :to="{name:'deposit'}" class="depositBtn">充值</router-link>
        <router-link :to="{name:'drawmoney'}" class="drawMoneyBtn">提款</router-link>
      </div>
      <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')">退出</a>
      <!-- <span>欢迎您,{{userData.loginname}}</span><span class="split-line">|</span>
      <router-link v-if="unread" class="news" :to="{name:'message'}">未读信息：{{unread}}</router-link>
      <span class="split-line" v-if="unread">|</span>
      <span class="split-line">|</span>
      <router-link :to="{name:'drawmoney'}"></router-link><span class="split-line">|</span>
      <router-link :to="{name:'transfer'}">户内转账</router-link><span class="split-line">|</span>
      <a href="javascript:void(0);" @click="transferAll">资金一键归集</a><span class="split-line">|</span>
      <router-link :to="{name:'discount_savesend'}">自助存送</router-link><span class="split-line">|</span>
      <router-link :to="{name:'user'}">个人中心</router-link><span class="split-line">|</span>
      <router-link :to="{name:'user'}">主账户：{{wallet['MAIN']}}元</router-link>
      <a href="javascript:;" @click="getGameMoney()" class="iconyg yg-f14 btn003" :class="{xuanzhuan:actived==true}"></a>
      <div style="display:inline-block;">
        <span class="split-line">|</span>
        <a href="javascript:void(0)" @click="signIt">签到</a>
      </div>
      <span class="split-line">|</span>
      <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')">退出</a> -->
    </div>
    <div class="top-login-block fr" v-if="isAgent">
      <span>欢迎您,{{userData.loginname}}</span><span class="split-line">|</span>
      <router-link v-if="unread" class="news" :to="{name:'agent_message'}">未读信息：{{unread}}</router-link>
      <span class="split-line" v-if="unread">|</span>
      <span> 老虎机余额：{{wallet['SLOT']}}</span>
      <a href="javascript:;" @click="getGameMoney('SLOT')" class="iconyg yg-f14 btn003" :class="{xuanzhuan:actived==true}"></a>
      <span class="split-line">|</span>
      <router-link class="btn-other btn-userCenter" :to="{name:'agent_summary'}">代理中心</router-link><span class="split-line">|</span>
      <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')" class="logout">
        退出</a>
    </div>
    <process></process>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import {
    getGameMoney,
    doSignRecord
  } from '@/api/user'
  import {
    updateGameMoney
  } from "@/api/payment";
  import process from "pc/components/transfer-process";
  export default {
    data() {
      return {
        actived: false,
      }
    },
    computed: {
      ...mapGetters(["userData", "isUser", "isAgent", "unread", "money", "wallet"]),
    },
    components:{process},
    methods: {
      ...mapActions(["LOGIN_OUT", "UPDATE_MONEY"]),
      doSignRecord() {
        doSignRecord().then(res => {
          toast(res.message)
        })
      },
      getGameMoney(val) {
        // this.userData.accountMoney = "正在查询.."
        this.actived = !this.actived
        this.UPDATE_MONEY(val).then(res => {
          this.actived = !this.actived
        }).catch(err => {
          window.toast(err.message)
        })
        // getGameMoney({
        //   gameCode: val
        // }).then(res => {
        //   if (res.success) {
        //     this.userData.accountMoney = res.data;
        //   } else {
        //     toast(res.message)
        //     this.userData.accountMoney = '查询失败'
        //   }
        // })
      },
      signIt() {
        doSignRecord().then(res => {
          toast(res.message)
        })
      },
      transferAll() {
        window.$confirm(
          '<p style="text-align:left;">1.游戏平台余额只会回收整数部分。<br/>2.领取优惠但未完成流水的游戏余额不会被归集。<br/>3.资金归集可能需要较长时间，请耐心等待。</p>',
          "温馨提示", {
            confirmText: "确认",
            cancelText: "取消"
          }
        ).then(
          () => {
            // 确认，发出归集请求
            window.setTimeout(() => {
              const postData = {
                transferGameOut: "ALL_V2",
                transferGameIn: "MAIN",
                transferGameMoney: 0
              };
              // 查看进度按钮
              updateGameMoney(postData).then(res => {
                  if (res.success) {
                    this.$bus.$emit('showTransferProce', true)
                    window.toast(res.message)
                  } else {
                    window.toast(res.message)
                  }
                })
                .catch(err => {
                  window.toast(err.message)
                });
            }, 300)
          },
          () => {

            // 取消，查看订单
          });

      },
    }
  };

</script>
<style lang="scss" scoped>
  .top-login-block {
    display: flex;
    align-items: center;
    .accountItem {
      color: #fff;
      position: relative;
      margin-right: 5px;
      z-index: 999;
      .userCenter{
        margin-right: 5px;
      }
      .ctrItems{
        width: 210%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 35px;
        .deputyMoney{
          color: #b7b7b7;
          &:hover{
            color: #b7b7b7!important;
          }
          .iconyg{
            color: #e2b85a;
          }

        }
        .ctrItem{
          text-align: center;
          &:hover{
            color: #fff987;
          }
        }
      }
    }

    .messageItem{
      margin-right: 10px;
      .num{
        color: #e2b85a;
      }
    }

    .moneyItem{
      color: #b7b7b7;
      .mainMoney,.deputyMoney{
        display: inline-flex;
        margin-right: 5px;
        .iconyg{
          color: #e2b85a;
        }
      }
    }

    .buttonItem{
      margin-right: 5px;
      .depositBtn{
        background: #d52323;
        border-radius: 5px;
        color: #fff;
        margin-right: 5px;
        padding: 2px 8px;
      }
      .drawMoneyBtn{
        background: #54a54b;
        border-radius: 5px;
        color: #fff;
        margin-right: 5px;
        padding: 2px 8px;
      }
    }


    img {
      vertical-align: middle;
    }

    a,
    span {
      font-size: 14px;

      &:hover {
        color: #b7b7b7;
      }
    }

    a img,
    span img {
      vertical-align: middle;
      height: 23px;
    }

    .split-line {
      margin: 0 12px;
    }

    #qrcodeMobile {
      display: none;
      position: absolute;
      top: 35px;
      left: 230px;
      width: 276px;
      height: 294px;
      background-color: hsla(0, 0%, 100%, 0) !important;
      background-image: url(../images/mobile_down.png) !important;
      background-repeat: no-repeat !important;
      background-size: cover;
      background-position: (-43px) -21px;

      img {
        margin-top: 45px;
        margin-right: 87px;
        width: 100px;
        height: 100px;
      }

      div:not(:first-child) {
        margin-top: 20px;
        margin-right: 87px;

        span {
          color: #2293fc !important;
        }
      }
    }
  }

  a,
  span {
    color: #b7b7b7;
  }

  .pre-login {
    box-shadow: 1px 4px 80px 12px #5e5a5a;
    height: 455px;
    width: 400px;
    margin: 37px 0 0;
    margin-left: 997px;
    background: url(../images/bg.png) no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 10;
    border: 1px solid #efefef;
    border-radius: 6px;
    border-radius: 15px 15px 15px 15px;
    transition: all 0.2s linear;

    .triangle {
      position: relative;

      &:before {
        top: -11px;
        border-bottom: 10px solid #efefef;
      }

      &:after,
      &:before {
        position: absolute;
        content: "";
        left: 258px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
      }

      &:after {
        top: -9px;
        border-bottom: 10px solid #fff;
      }
    }

    label {
      margin-top: -1px;
      margin-left: 1rem !important;
    }

    ul {
      box-shadow: inset 0 -2px 0 #66b3ff;
    }

    .input-field {
      margin-top: 6px;
    }

    input {
      margin: 0;
    }

    .active-right-li {
      right: -1px;
      left: 174px;
      color: #66b3ff;
    }

    .active-left-li {
      left: 0;
      right: 189px;
      color: #66b3ff;
    }

    .tabs {
      background: transparent;

      .tab a {
        font-size: 16px;
        color: #b7b7b7;
        position: relative;

        &.active,
        &:hover {
          color: #66b3ff;
        }

        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          background: #b7b7b7;
          bottom: 0;
          left: 0;
        }
      }

      .indicator {
        background: #66b3ff;
      }
    }

    .close-btn {
      float: right;
      position: relative;
      right: 15px;
      top: 0;

      img {
        width: 10px;
        height: 10px;

        &:hover {
          -webkit-animation-name: rotateIn;
          animation-name: rotateIn;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
      }
    }

    .preLogin-qrcode-item {
      text-align: center;

      .qrcode {
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 150px;
      }

      span {
        color: #787878;
      }
    }

    .preLogin-account-item {
      margin: 13px;

      a,
      span {
        color: #d9006c;
      }

      .checkbox-item {
        float: left;

        span {
          color: #9e9e9e;
          vertical-align: middle;
        }

        img {
          vertical-align: middle;
        }
      }

      .image-input-field {
        img {
          float: right;
          width: 120px;
          text-align: right;
        }

        span {
          font-size: 12px;
          margin-right: 6px;
          text-align: right;
          float: right;
        }
      }

      .error {
        position: relative;
        color: red;
        text-align: left;
      }

      .btn-findPwd {
        outline: none;
        top: 6px;
        right: 30px;
        position: absolute;
        text-align: center;
        width: 80px;
        height: 25px;
        display: inline-block;
        color: #d9006c;
        border: none;
        background: url(../images/for.png) no-repeat;
        background-size: 80px 25px;

        &:hover {
          background: url(../images/for_02.png) no-repeat;
          background-size: 80px 25px;
          color: #000;
        }
      }
    }

    .btn-submit {
      outline: none;
      text-align: center;
      width: 351px;
      height: 45px;
      color: #fff;
      border: none;
      background: url(../images/button.png) no-repeat;
      background-size: 351px 45px;

      &:hover {
        background: url(../images/button_01.png) no-repeat;
        background-size: 351px 45px;
      }
    }
  }

  .xuanzhuan {
    &.yg-f14:before {
      -webkit-animation: rotateImg 1s linear infinite;
      animation: rotateImg 1s linear infinite;
      display: inline-block;
    }
  }

  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotateImg {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

</style>
