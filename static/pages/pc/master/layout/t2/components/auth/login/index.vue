<template>
  <!-- 登录弹窗，写在这里 -->
  <div class="layui-layer layui-layer-dialog index-alert-wrapper layer-anim" v-show="showLogin && !islogin">
    <div class="top-class">
      <div class="layui-layer-title">登录</div>
      <div id="" class="layui-layer-content">
        <div class="layer-wrapper index-layer-wrapper">
          <div class="left">
            <p>扫一扫，安装{{WEBCONFIG.title}}手机APP</p>
            <img :src="generateQRCode(Download.app,140)">
            <p>存提款/快速游戏/防劫持
              <br>免费领取
              <span class="red">8-88</span>体验金</p>
            <!-- <a class="guide" href="/help.jsp?name=guide">安装教程</a> -->
          </div>
          <div class="right">
            <h3>账号登录</h3>
            <form>
              <div class="input-group">
                <input placeholder="账号" v-model="loginData.account" type="text"> </div>
              <div class="input-group">
                <input placeholder="密码" v-model="loginData.password" type="password"> </div>
              <div class="input-group">
                <input placeholder="验证码" v-model="loginData.imageCode" type="text" maxlength="4">
                <a href="javascript:;" class="captcha-code icon_popup" @click="GET_VALIDATE">
                  <img :src="validateImage">
                </a>
              </div>
              <input id="code" type="hidden">
              <a class="login-btn" @click.prevent="login" href="javascript:void(0);">登录</a>
            </form>
            <p class="register-text">
              <a href="javascript:void(0);" @click="registerIt()">快速注册账号</a> |
              <!-- <router-link :to="{name:'registerIndex'}">快速注册账号</router-link> | -->
              <a href="javascript:void(0);" @click="$bus.$emit('showForget',true)">找回密码</a>
            </p>
          </div>
        </div>
      </div>
      <span class="layui-layer-setwin">
        <!-- <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;"></a> -->
        <i class="iconay ay-guanbi1" @click="showLogin=false"></i>
      </span>
      <span class="layui-layer-resize"></span>
    </div>
  </div>
</template>
<script>
  import {
    loginControl
  } from "@/controls/auth/loginControl"; // 引入公共业务逻辑
  import eyes from "pc/components/eyes"
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import {
    SETTING,
    WEBCONFIG,
    Download
  } from '@/assets/data'
  import {
    generateQRCode
  } from "@/api/show"
  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
        SETTING,
        WEBCONFIG,
        Download,
        showLogin: false
      }
    },
    computed: {
      ...mapGetters(['validateImage', 'islogin'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      login() {
        this.loginSubmit(this.loginData).then(res => {
          // window.toast(res.message)
          this.showLogin = false
          if (res.success && res.data.role == "AGENT"){
            this.$router.push({name:"agent_datum"})
          }else {
            this.$router.push({name:"datum"})
          }
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      registerIt() {
        // this.$bus.$emit('showRegister', true)
        this.showLogin = false
        this.$router.push({name:'registerIndex'})
        console.log('ToshowRegister');
      },
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      }
    },
    created() {
      this.generateQRCode("text")
      this.$bus.$on('showLogin', eventData => {
        this.showLogin = eventData
      })
    },
    components: {
      eyes
    }
  };

</script>
<style lang="scss" scoped>
  .layui-layer {
    color: #666;
    position: fixed;
    _position: absolute;
    pointer-events: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background-color: #fff;
    -webkit-background-clip: content;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    z-index: 999; 
    background: rgba(0, 0, 0, 0.3)
  }

  .layui-layer-dialog {
    min-width: 260px;
    .layui-layer-content {
      position: relative;
      padding: 20px;
      line-height: 24px;
      word-break: break-all;
      overflow: hidden;
      font-size: 14px;
      overflow-x: hidden;
      overflow-y: auto;
      .layui-layer-ico {
        position: absolute;
        top: 16px;
        left: 15px;
        _left: -40px;
        width: 30px;
        height: 30px;
      }
    }
  }

  .layui-layer-dialog .layui-layer-padding {
    padding: 20px 20px 20px 55px;
    text-align: left;
  }

  .layui-layer-btn a,
  .layui-layer-dialog .layui-layer-ico,
  .layui-layer-setwin a {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: top;
  }

  .layer-anim {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
  }

  .top-class {
    min-width: 300px;
    width: 530px; 
    background: #fff;
    position: relative;
    .layui-layer-title {
      padding: 0 80px 0 20px;
      height: 42px;
      line-height: 42px;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      color: #333;
      overflow: hidden;
      background-color: #F8F8F8;
      border-radius: 2px 2px 0 0;
    }
  }

  .top-class .layui-layer-title,
  .top-class2 .layui-layer-title {
    text-indent: 60px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    background: rgb(216, 173, 86);
    background: #cbaa67;
  }

  .layui-layer-dialog.index-alert-wrapper .layui-layer-content {
    padding: 0;
  }

  .layui-layer-content {
    position: relative;
    .index-layer-wrapper {
      padding: 30px 40px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 100%;
      .left {
        text-align: center;
        width: 200px;
        padding-right: 30px;
        margin-right: 43px;
        border-right: 1px solid #ddd;
        padding-bottom: 48px; // .download-Qrcode {
        //   display: block;
        //   float: left;
        //   // padding: 10px;
        //   background-color: #993839;
        //   border-radius: 5px;
        //   width: 120px;
        //   height: 120px;
        //   padding-top: 4px;
        //   text-align: center;
        //   img{
        //     width: 96%;
        //   }
        // }
        img {
          padding: 10px;
          border: 1px solid #ddd;
          margin: 10px 0;
        }
        .guide {
          display: inline-block;
          padding-top: 10px;
        }
      }
      a {
        color: #d8ad56;
      }
      .right {
        width: 200px;
        h3 {
          font-size: 18px;
        }
        .input-group {
          margin-top: 10px;
          position: relative;
          .captcha-code {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
          }
          input {
            width: 200px;
            margin: 5px 0;
            line-height: 40px;
            height: 40px;
            outline: none;
            border-radius: 4px;
            text-indent: 1em;
            border: 1px solid #ddd;
            line-height: 30px;
            height: 30px;
          }
        }
        .login-btn {
          display: block;
          background: #f6c244;
          color: #333;
          text-align: center;
          margin: 15px 0;
          line-height: 40px;
          border-radius: 5px;
          transition: all .3s ease-in;
          font-size: 16px;
        }
        .register-text {
          margin-top: 34px;
          text-align: right;
        }
      }
    }
  }

  .red {
    color: red;
  }

  .layui-layer-resize {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 0;
    bottom: 0;
    cursor: se-resize;
  }

  .layui-layer-setwin {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
    .iconay {
      cursor: pointer;
      color: #000;
      font-size: 15px;
      top: -4px;
      position: absolute;
      right: 0px;
      &:hover {
        opacity: .7;
      }
    }
    .layui-layer-close1 {
      background-position: 0 -40px;
      cursor: pointer;
    }
    a {
      display: inline-block;
      vertical-align: top;
      position: relative;
      width: 16px;
      height: 16px;
      margin-left: 10px;
      font-size: 12px;
      _overflow: hidden;
    }
  }

</style>
