<template>

  <div class="author-form">
    <div class="login-form">
      <form>
        <Row :gutter="10">
          <Col span="12">
            <div class="inputs">
              <span class="fixed left icobjh bjh-yonghu"></span>
              <input v-model="loginData.account" :placeholder="placeholder.account" @keyup.enter="login">
            </div>
          </Col>
          <Col span="12">
            <div class="inputs">
              <span class="fixed left icobjh bjh-suo1"></span>
              <input v-model="loginData.password" :placeholder="placeholder.password" type="password" @keyup.enter="login">
            </div>
          </Col>
        </Row>
        <Row :gutter="10">
          <Col span="12">
            <div class="inputs">
              <span class="fixed left icobjh bjh-yanzhengma"></span>
              <input v-model="loginData.imageCode" :placeholder="placeholder.imageCode" @keyup.enter="login">
              <img class="fixed right code" v-lazy="validateImage" @click="GET_VALIDATE" />
            </div>
          </Col>
          <Col span="12">
            <div class="inputs">
              <a @click="login" class="btn btn01">登录</a>
              <a class="btn btn02" @click="$bus.$emit('showForget',true)" >忘记密码?</a>
            </div>
          </Col>
        </Row>
      </form>
    </div>
    <!-- <forgetPwd>忘记密码框</forgetPwd> -->
  </div>

</template>
<script>
  import {loginControl} from "@@/controls/auth/loginControl"; // 引入公共业务逻辑
  // import forgetPwd from "pc/views/common/pwd/pwdForgot"
  import {mapGetters, mapActions} from 'vuex'
  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods:{
      // ...mapMutations(['GET_VALIDATE']),
      login(){
        console.log('login')
      }
    }
  };
</script>
<style lang="scss" scoped>
  .login-form {
    width: 330px;
    float:right;
    margin-top:10px;
    .inputs {
      width:100%;
      margin:4px 0;
      display: inline-block;
      position:relative;
      border-radius:6px;
      overflow:hidden;
      .fixed{
        position:absolute;
        top:0;
        color:#999;
        &.left{
          left:0;
        }
        &.right{
          right:0;
        }
      }
      .icobjh{
        margin-left:8px;
        line-height:28px;
      }
      .code{
        height:28px;
        width:60px;
      }
      input {
        background: #fff;
        color: #343434;
        display:block;
        width:100%;
        height:28px;
        padding-left:30px;
        outline:0;
      }

      input::-moz-placeholder {
        color: #ccc;
      }

      input:-ms-input-placeholder {
        color: #ccc;
      }

      input::-webkit-input-placeholder {
        color: #ccc;
      }
    }
    .btn{
      line-height:32px;
      height:32px;
      width:50%;
      color:#fff;
      display:inline-block;
      margin:-2px;
      text-align:center;
      border-radius:9px;
      cursor:pointer;
      &.btn01{
        background: rgb(255,236,183); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(255,236,183,1) 0%, rgba(255,209,120,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(255,236,183,1) 0%,rgba(255,209,120,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(255,236,183,1) 0%,rgba(255,209,120,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178',GradientType=0 ); /* IE6-9 */
        color:#343434;
      }
      &.btn02{
        background:none;
      }
    }
  }
</style>
