<template>

  <div class="loginSuccess t1">
    <div class="loged" v-if="isUser">
      <div class="line1">
        <div class="info">
          Hi,&nbsp;&nbsp;{{userData.loginname}}&nbsp;&nbsp;主账户余额:&nbsp;&nbsp;<span>{{wallet['MAIN']}}</span>
          <span class="icobjh bjh-shuaxin" @click="getGameMoney('MAIN')"></span>
        </div>
        <div class="btns">
          <nuxt-link class="m-btn" :to="{name:'deposit'}">存款</nuxt-link>
          <nuxt-link class="m-btn" :to="{name:'transfer'}">转账</nuxt-link>
        </div>
      </div>
      <div class="line2">
        <span class="l-btn sign btn-y1">
          <span class="icobjh bjh-qiandao"></span>签到
        </span>
        <nuxt-link class="l-btn btn-y2" :to="{name:'user'}">
          <span class="icobjh bjh-z-user"></span>用户中心
        </nuxt-link>
        <span class="l-btn btn-y3" @click="$store.dispatch('LOGIN_OUT')">
          <span class="icobjh bjh-dianyuan"></span>退出
        </span>
      </div>
    </div>
    <div class="loged" v-if="isAgent">
      <div class="line1">
        <div class="info">
          Hi,&nbsp;&nbsp;{{userData.loginname}}&nbsp;&nbsp;老虎机余额:&nbsp;&nbsp;{{wallet['MAIN']}}&nbsp;&nbsp;其他余额:&nbsp;&nbsp;{{wallet['LIVE']}}
        </div>
        <div class="btns">
          <el-badge :value="unread?unread:''" :max="50">
            <nuxt-link class="m-btn" :to="{name:'agent_message'}">站内信</nuxt-link>
          </el-badge>
          <nuxt-link class="m-btn" :to="{name:'agent_drawmoney'}">提款</nuxt-link>
        </div>
      </div>
      <div class="line2">
        <nuxt-link class="l-btn" :to="{name:'agent_summary'}">
          <span class="icobjh bjh-z-user"></span>代理中心
        </nuxt-link>
        <span class="l-btn" @click="$store.dispatch('LOGIN_OUT')">
          <span class="icobjh bjh-dianyuan"></span>退出
        </span>
      </div>
    </div>
  </div>

</template>
<script>
  import {loginControl} from "@@/controls/auth/loginControl"; // 引入公共业务逻辑
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(['validateImage','isLogin','isUser','isAgent','userData','wallet'])
    },
    methods:{
      ...mapMutations(['GET_VALIDATE']),
      getGameMoney(){

      },
      login(){
        this.loginSubmit(this.loginData).then(res=>{
          // window.toast(res.message)
          this.$Message.success({
            content:res.message,
            closable:true
          })
        }).catch(err=>{
          this.$Message.error({
            content:err.message,
            closable:true
          })
        })
        console.log('login')
      }
    }
  };
</script>
<style lang="scss" scoped>
.loginSuccess.t1{
  .loged {
  color: #fff;
  font-size: 14px;
  line-height: 40px;
  text-align: right;
  .line1 {
    display: inline-block;
    .info {
      display: inline-block;
      span {
        color: #ead51e;
      }
      .icobjh {
        display: inline-block;
        margin-left: 10px;
        font-size: 22px;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          transform: rotate(180deg);
        }
      }
    }
    .btns {
      display: inline-block;
      .m-btn {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        width: 62px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 4px;
        color: #fff;
        background: #f40c0c;
      }
    }
  }
  .line2 {
    display: inline-block;
    text-align: right;
    .btn-y1 {
      background: #ffed23;
    }
    .btn-y2 {
      background: #ffc700;
    }
    .btn-y3 {
      background: #e58f0b;
    }
    .l-btn {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      width: 90px;
      text-align: center;
      border-radius: 5px;
      margin-left: 12px;
      font-size: 14px;
      cursor: pointer;
      color: #fff; 
      .icobjh {
        margin-right: 5px;
        font-size: 18px;
        vertical-align: middle;
      }
    }
  }
}
}
</style>
