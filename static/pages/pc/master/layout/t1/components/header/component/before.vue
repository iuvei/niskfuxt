<template>
  <form class="login-form">
    <!-- 顶部菜单，登陆前，显示的内容 -->
    <p>
      <label>用户名:</label>
      <input style="display:none"><!-- for disable autocomplete on chrome -->
      <input @keyup.enter="login" v-model="loginData.account" type="text"  autocomplete="off"></p>
    <p>
      <label>密码:</label>
      <input @keyup.enter="login" v-model="loginData.password" type="password"  autocomplete="off">
    </p>
    <p class="identifying-code"><label @click="GET_VALIDATE" style="left: 0;">
      <img :src="validateImage" style="vertical-align: top" height="23" width="80"  alt=""> </label>
      <input @keyup.enter="login" v-model="loginData.imageCode"   type="text"></p>
    <div @click.enter="login"  class="pointer btn-login btn">登录</div>
    <a href="javascript:void(0);"  class="btn btn-register" @click="$bus.$emit('showRegister',true)">极速开户</a>
    <!-- <a href="javascript:void(0);" @click="$bus.$emit('showForget',true)" class="cl-yelow free-try-play">忘记密码？</a>
    <a :href="SETTING.live800" target="_blank"  class="cl-red server free-try-play">
          <i class="iconyg yg-ickefu"></i>
          24小时在线客服</a> -->
  </form>
</template>
<script>
  import {loginControl} from "@/controls/auth/loginControl"; // 引入公共业务逻辑
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {SETTING} from '@/assets/data'

  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
        SETTING,
        showRig:false,
        ImgCode:"",
        showPass:false
      }
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      login(){
        this.loginSubmit(this.loginData).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err)
        })
      }
    },
  };

</script>
<style lang="scss" scoped>
  .pointer{
    cursor: pointer;
  }
  .login-form{ 
    p {
      border: 1px solid #6b6f77;
      padding-left: 53px;
      padding-right: 5px;
      display: inline-block;
      margin-right: 9px;
      vertical-align: middle;
      position: relative;
      height: 25px;
      width: 135px;
      input {
        color: #a4a3a7;
        text-align: right;
        width: 100%;
        background: none;
        height: 25px;
        outline: none;
        vertical-align: top;
      }
      label {
        position: absolute;
        left: 9px;
        top: 0px;
        line-height: 25px;;
      }
      .identifying-code {
        width: 145px;
        padding-left: 85px;
      }
    }
    .btn {
      display: inline-block;
      width: 68px;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
      vertical-align: middle;
      &:hover{
        opacity: .8;
      }
    }
    .btn-login{
      width: 100px;
      border-radius: 5px;
      color: #72716d;
      margin-right: 8px;
      border: 1px solid #777672;
    }
    .btn-register {
      border-radius: 5px;
      width: 100px;
      background: #983839;
      color: #fff;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .server{
      margin: 0!important;
      animation:flashs 0.6s infinite; ;
    }
    @keyframes flashs {
      0%{ color: #f00;}
      100%{color:yellow;}
    }
    }
</style>
