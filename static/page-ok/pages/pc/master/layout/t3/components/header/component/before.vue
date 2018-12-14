<template>
  <div class="headerBeforePage">
    <div class="firstItem">
      <input type="text" v-model="loginData.account" @keyup.enter="login" placeholder="账号" class="input">
      <input type="password" v-model="loginData.password" @keyup.enter="login" placeholder="密码" class="input">
    </div>
    <div class="secondItem">
      <div>
        <input type="text" maxlength="4" @keyup.enter="login" v-model="loginData.imageCode" class="input">
        <img class="verifyImg" :src="validateImage" @click="GET_VALIDATE">
      </div>
      <div>
        <button class="loginBtn" @click.enter="login();">登录</button>
        <span class="forgetPwd" @click="$bus.$emit('showForget',true)">忘记密码</span>
      </div>
    </div>
    <div class="thirdItem">
      <button class="registBtn" @click="registerIt">
        <img src="../images/info.png" alt=""><br>
        快速开户
      </button>
    </div>
  </div>
  <!-- <div class="right top-login-block">
      <a href="javascript:void(0);" @click="$bus.$emit('showLogin',true)" style="color: #3EC1FE !important">登录</a>
      <span class="split-line" style="color: #3EC1FE !important">|</span>
      <a href="javascript:void(0);" @click="$bus.$emit('showRegister',true)" ui-sref="register" style="color: #3EC1FE !important">注册</a>
      
    <v-login></v-login>
    </div> -->
</template>
<script>
  import {
    loginControl
  } from "@/controls/auth/loginControl"; // 引入公共业务逻辑
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import {
    SETTING
  } from '@/assets/data'
  import vLogin from 'pc/master/layout/t3/components/auth/login'
  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
        SETTING,
        showRig: false,
        ImgCode: "",
        showPass: false,
        showQRcode: false,
        isShowLoginModal: false
      }
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    components: {
      vLogin
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      login() {
        this.loginSubmit(this.loginData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      registerIt() {
        this.$bus.$emit('showRegister', true)
        console.log('ToshowRegister');
      },
      showQR() {
        this.showQRcode = true;
      },
      hideQR() {
        this.showQRcode = false;
      }
    },
  };

</script>
<style lang="scss" scoped>
  .headerBeforePage {
    flex: 3;
    display: flex;

    .input {
      border-style: solid;
      border-width: 1px;
      border-color: rgb(46, 46, 46);
      background-color: rgb(25, 25, 25);
      width: 152px;
      height: 30px;
      font-family: "Microsoft YaHei";
      color: #fff;
      font-size: 14px;
      display: block;
      padding: 5px;
      margin-bottom:5px;
      position: relative;
      right: 0;
      &:focus{
        outline: none;
      }
    }

    .firstItem {
    flex: 2;
    position: relative;
    }

    .secondItem {
    flex: 2;
      position: relative;

      .verifyImg {
        width: 65px;
        height: 20px;
        position: absolute;
        right: 30px;
        top: 5px;
        cursor: pointer;
      }

      .loginBtn {
        border-style: solid;
        border-width: 1px;
        border-color: rgb(212, 57, 44);
        background-color: #9a2117;
        width: 101px;
        height: 30px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        line-height: 1.2;
        color: #fff;

        &.active {
          background-color: #ba2114;


        }
      }

      .forgetPwd {
        font-size: 12px;
        font-family: "Microsoft YaHei";
        line-height: 1.2;
        color: #fff;
        cursor: pointer;

      }

    }

  .thirdItem {
    flex: 1;
    position: relative;

    .registBtn {
      border-style: solid;
      border-width: 1px;
      border-color: rgb(221, 174, 86);
      background-color: #c0984d;
      width: 97px;
      height: 68px;
      font-size: 18px;
      font-family: "Microsoft YaHei";
      color: #462811;
      text-align: center;
      line-height: 1.2;

      &.active {
        background: #cd9e47;
      }

    }
  }

  }

</style>
