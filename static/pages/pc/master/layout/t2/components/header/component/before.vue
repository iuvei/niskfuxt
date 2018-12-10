<template>
  <form class="login-form">
    <!-- 顶部菜单，登陆前，显示的内容 -->
    <!-- <p>
      <label>用户名:</label>
      <input style="display:none">
      <input @keyup.enter="login" v-model="loginData.account" type="text"  autocomplete="off"></p>
    <p>
      <label>密码:</label>
      <input @keyup.enter="login" v-model="loginData.password" type="password"  autocomplete="off">
    </p>
    <p class="identifying-code"><label @click="GET_VALIDATE" style="left: 0;">
      <img :src="validateImage" style="vertical-align: top" height="23" width="80"  alt=""> </label>
      <input @keyup.enter="login" v-model="loginData.imageCode"   type="text"></p> -->
    <div @click="$bus.$emit('showLogin',true)"  class="pointer btn-login btn">登录</div>
    <!-- <a href="javascript:void(0);"  class="btn btn-register" @click="registerIt()">立即注册</a> -->
    <router-link :to="{name:'registerIndex'}" class="btn btn-register">立即注册</router-link>
    <a href="javascript:void(0);" @click="$bus.$emit('showForget',true)" class="cl-yelow free-try-play">忘记密码？</a>
    <!-- <a :href="SETTING.live800" target="_blank"  class="cl-red server free-try-play">
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
          window.toast(err.message)
        })
      },
      registerIt(){
        this.$bus.$emit('showRegister',true)
        console.log('ToshowRegister');
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
      width: 100px;
      margin: 0 4px 0 0;
      border: none;
      color: #fff;
      padding: 0;
      cursor: pointer;
      transition: 0.3s;
      text-align: center;
      border-radius: 5px;
      line-height: 30px;
      height: 30px;
      &:hover{
        opacity: .9;
      }
    }
    .btn-login{
      // border: 1px solid #777672;
      background: #b58f53;
      background-image: -moz-linear-gradient(to right, #b58f53, #79512e);
      background-image: -o-linear-gradient(to right, #b58f53, #79512e);
      background-image: -webkit-linear-gradient(to right, #b58f53, #79512e);
      background-image: linear-gradient(to right, #b58f53, #79512e);
    }
    .btn-register {
      background: #fc6730;
      background-image: -moz-linear-gradient(to right, #fc6730, #f1293d);
      background-image: -o-linear-gradient(to right, #fc6730, #f1293d);
      background-image: -webkit-linear-gradient(to right, #fc6730, #f1293d);
      background-image: linear-gradient(to right, #fc6730, #f1293d);
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
