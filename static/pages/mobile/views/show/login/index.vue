<template>
<div class="login-box">
  <div class="login_logo">
    <img src="./images/logo.png" alt="">
  </div>

  <form class="form-ui">
    <div class="input-box">
      <div class="ui-input-row rq-value">
        <i class="iconay ay-denglu2"></i>
        <input type="text" class="ui-ipt" v-model="loginData.account" placeholder="请输入游戏账号">
      </div>
      <div class="ui-input-row rq-value">
        <i class="iconay ay-mima3"></i>
        <input type="password" class="ui-ipt" v-model="loginData.password" placeholder="请输入游戏密码">
      </div>
      <div class="ui-input-row rq-value">
        <i class="iconay ay-yanzhengma2"></i>
        <input type="text" class="ui-ipt" v-model="loginData.imageCode" placeholder="请输入验证码">
        <div class="form-img">
          <img :src="validateImage" @click="GET_VALIDATE"/>
        </div>
      </div>
    </div>
    <div class="input-x-txt">
      <span class="fl red" v-html="errMessage"></span>
    </div>
    <div class="btns">
      <span class="btn block btn-red" type="submit" @click="login" value="登录">登录</span>
    </div>
    <div class="register">
      <router-link :to="{name:'register'}">立即注册 |</router-link>
      <router-link :to="{name:'forgotpwd'}">忘记密码?</router-link>
    </div>
  </form>
  <p class="copyright"> 澳盈娱乐持有菲律宾 PAGCOR 合法博彩执照 </p>
</div>
</template>
<script type="text/ecmascript-6">
  import vChoose from './components/choose';
  import {AUTH_NAME} from "@/store/types"//权限名称
  import {loginControl} from "@/controls/auth/loginControl"; // 引入公共业务逻辑
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {getAuthImg} from '@/api/authService';

  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
        errMessage:""
      };
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      login() {
        this.loginSubmit(this.loginData).then(res=>{
          if (res.success && res.data.role == "AGENT"){
            this.$router.push({name:"agentcenter"})
          }else {
            this.$router.push({name:"usercenter"})
          }
        }).catch(err=>{
          console.log(err)
          // window.toast(err.message)
          this.errMessage = err.message ;
        })
      },
    },
    components: {
      vChoose
    },
  };
</script>
<style lang="scss" scoped> 
  @import "~mobile/assets/scss/mixin.scss";
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:    #676666;
  }
  input:-moz-placeholder, textarea:-moz-placeholder { 
      color:    #676666;
  }
  input::-moz-placeholder, textarea::-moz-placeholder { 
      color:    #676666;
  }
  input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
      color:    #676666;
  }
  .login-box{
    background-color: $body-bg;
    .login_logo{
      text-align: center;
      height:r(300);
      img {
        margin-top: r(60);
        width: 55%;
      }
    }

    .form-ui{
      width:90%; 
      margin:25px auto 10px;
      .ui-input-row {
        position: relative;
        line-height: 46px;
        height: 46px;
        padding: 0 10px;
        background: #fff;
        border-bottom:1px solid #dedede;
        &:last-child {
          border-bottom:0;
        }
        .iconay {
          color: #676666;
          @include f(32px);
        }
      }
      .form-img {
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;
        width:28%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        };         
      }
      .input-box {
        border-radius:10px;
        overflow:hidden;
      }
      .ui-ipt {
        display: block;
        font-size:15px;
        color: #333;
        line-height: normal;
        height: 100%;
        text-align: left;
        white-space: nowrap;
        border:0;
        float:right;
        width:90%;
        &:focus {
          outline:none;
        }
      }
    }
    .input-x-txt{
      font-size:12px;
      color:#fff;
      height:28px;
      line-height:28px;
      margin:5px 0;
      overflow:hidden;
      .abtn{
        color:#fff;
        font-size:14px;
        border-radius:15px;
        border: 1px solid #c13021;
        display:inline-block;
        height:22px;
        line-height:21px;
        padding:0 6px;
        margin-top:6px;
      }
    }
    .btn{
      height:50px;
      line-height:50px;
      text-align:center;
      border-radius:8px; font-size:16px;border:0;
    }
    input{outline:none;}
    .btn.block{
      display:block;
      width:100%;
      margin:0 0 15px 0;
    }
    .btn.btn-red{
      background:#ffe0aa;
      color:#333;
      font-size: 16px;
      font-weight: 600;
    }
    .btn.btn-green{
      background:#3dbd70;
      color:#fff;
    }
    .register{
      text-align: right;
    }
    .register a{
      color:#ffe0aa;
      opacity: .8;
      font-size: 14px;
    }
    .copyright {
      text-align: center;
      font-size: 12px;
      color: #fff;
      width: 100%;
      opacity: .4;
      position: fixed;
      bottom: 0;
      line-height: 30px;
      left: 0;
    }
    .red {
      color: red;
    }
  }
  
</style>
