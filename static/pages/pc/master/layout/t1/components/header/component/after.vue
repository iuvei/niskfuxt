<template>
  <div class="logined">
    <!-- 顶部菜单，登陆后显示的内容 -->
    
    <span v-if="isUser">
        Hi,{{userData.loginname}}&nbsp;&nbsp;&nbsp;
        <span v-show='isUser'> 主账户余额：{{money.MAIN}}</span>
        <a href="javascript:;" @click="getGameMoney('MAIN')" class="iconyg yg-f14 btn003"></a>
        <router-link class="btn-other btn-deposit" :to="{name:'deposit'}">充值</router-link>
        <router-link class="btn-other btn-deposit" :to="{name:'transfer'}">转账</router-link>
        <router-link class="btn-other btn-userCenter" :to="{name:'user'}">用户中心</router-link>
        <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')" class="logout">
        <i class="iconyg yg-tuichu2"></i>
        退出</a>
    </span>
    <span v-if="isAgent">
        Hi,{{userData.loginname}}&nbsp;&nbsp;&nbsp;
        <span > 老虎机余额：{{money.SLOT}}</span>
        <a href="javascript:;" @click="getGameMoney('SLOT')" class="iconyg yg-f14 btn003"></a>
        <router-link class="btn-other btn-userCenter" :to="{name:'agent_memberbill'}">代理中心</router-link>
        <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')" class="logout">
        <i class="iconyg yg-tuichu2"></i>
        退出</a>
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
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(["userData", "isUser","isAgent","money"]),
    },
    methods:{
      ...mapActions(["LOGIN_OUT","UPDATE_MONEY"]),
      doSignRecord() {
        doSignRecord().then(res => {
          toast(res.message)
        })
      },
      getGameMoney(val) {
        this.userData.accountMoney = "正在查询.."
        this.UPDATE_MONEY(val).then(res=>{

        }).catch(err=>{

        })
        getGameMoney({
          gameCode: val
        }).then(res => {
          if (res.success) {
            this.userData.accountMoney = res.data;
          } else {
            toast(res.message)
            this.userData.accountMoney = '查询失败'
          }
        })
      }
    }
  };

</script>
<style lang="scss" scoped>
  .logined {
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
  }
</style>