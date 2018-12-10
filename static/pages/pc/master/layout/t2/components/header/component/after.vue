<template>
  <div class="logined">
    <!-- 顶部菜单，登陆后显示的内容 -->
    
    <span v-if="isUser">
        <!-- <router-link :to="{name:'user'}"><i class="iconay ay-denglu2"></i>&nbsp;&nbsp;用户中心</router-link>&nbsp;&nbsp; -->
        <span class="infotext">{{userData.loginname}}&nbsp;&nbsp;{{userData.level}}</span>&nbsp;&nbsp;
        <router-link :to="{name:'message'}"><i class="iconay ay-zhanneixin"></i>&nbsp;&nbsp;站内信</router-link>&nbsp;&nbsp;
        <i class="iconay ay-qiandai"></i>余额 <span class="infotext">{{wallet['MAIN']}}</span>
        <a href="javascript:;" @click="getGameMoney('MAIN')" class="iconyg yg-f14 btn003" :class="{xuanzhuan:actived==true}"></a>&nbsp;&nbsp;
        <span class="infobtn" @click="transferAll">资金一键归集</span>
        <router-link class="infobtn" :to="{name:'deposit'}">存款</router-link>
        <router-link class="infobtn" :to="{name:'transfer'}">户内转账</router-link>
        <router-link class="infobtn" :to="{name:'drawmoney'}">提款</router-link>&nbsp;
        <router-link class="infobtn" :to="{name:'user'}">用户中心</router-link>&nbsp;&nbsp;
        <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')" class="logout">退出</a>
    </span>
    <span v-if="isAgent">
        欢迎回来,{{userData.loginname}}&nbsp;&nbsp;&nbsp;
        <!-- <span > 老虎机余额：{{money.SLOT}}</span>
        <a href="javascript:;" @click="getGameMoney('SLOT')" class="iconyg yg-f14 btn003"></a> -->
        <router-link class="infobtn" :to="{name:'agent_memberbill'}">用户中心</router-link>&nbsp;&nbsp;
        <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')" class="logout">退出</a>
    </span>
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
  import { updateGameMoney } from "@/api/payment";
  export default {
    data() {
      return {
        actived:false
      }
    },
    computed: {
      ...mapGetters(["userData", "isUser","isAgent","money","wallet"]),
    },
    methods:{
      ...mapActions(["LOGIN_OUT","UPDATE_MONEY"]),
      doSignRecord() {
        doSignRecord().then(res => {
          toast(res.message)
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
      getGameMoney(val){
        this.actived = !this.actived
        this.UPDATE_MONEY(val).then(res=>{
          this.actived = !this.actived
        }).catch(err=>{
          toast(res.message)
        })
      }
    }
  };

</script>
<style lang="scss" scoped>
  .logined {
    .infotext{
      color: #fede9a;
    }
    .iconay{
      color: #fede9a;
    }
    .infobtn{
      background: #d7b26c;
      color: #333;
      padding: 4px 10px;
      border-radius: 5px;
      margin: 0 2px;
      transition: all .3s;
      cursor:pointer;
    }
    .btn003{
      font-size:18px;
    }
    .btn-other {
      border: solid 1px #fff;
      color: #fff;
      display: inline-block;
      position: relative;
      display: inline;
      padding: 2px 24px;
      font-size: 14px;
      margin-left: 10px;
      text-align: center;
      border-radius: 3px;
      font-weight: 500;
    }
    .btn-deposit{
      background: #23a2e4;
      background-image: -moz-linear-gradient(to bottom,#23a2e4,#1382ae);
      background-image: -o-linear-gradient(to bottom,#23a2e4,#1382ae);
      background-image: -webkit-linear-gradient(to bottom,#23a2e4,#1382ae);
      background-image: linear-gradient(to bottom,#23a2e4,#1382ae);
      border: none;
    }
    .btn-userCenter{
      background: #ffdb00;
      background-image: -moz-linear-gradient(to bottom,#ffdb00,#ffb400);
      background-image: -o-linear-gradient(to bottom,#ffdb00,#ffb400);
      background-image: -webkit-linear-gradient(to bottom,#ffdb00,#ffb400);
      background-image: linear-gradient(to bottom,#ffdb00,#ffb400);
      color: #252525;
      border: none;
    }
    .logout{
      .iconyg{
        font-size: 16px;
      }
      font-size: 14px;
      margin-left: 5px;
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
    .xuanzhuan{
      &.yg-f14:before{
        -webkit-animation:rotateImg 1s linear infinite;
        animation: rotateImg 1s linear infinite;
        display: inline-block;
      }
    }
  }
</style>