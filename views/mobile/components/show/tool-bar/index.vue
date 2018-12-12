<template>
  <transition name="fade">
    <div class="tool-warp" v-show="showBar" @click.self="showBar=false">
      <transition name="slideLeft">
        <div v-show="showBar" class="tool-bar">
          <div class="tool-close" @click="$store.dispatch('LOGIN_OUT')">
            <div class="iconyg yg-poweroff" v-if="islogin">
            </div>
          </div>
          <div class="tool-user-info-login" v-if="islogin">
            <div class="user-info-img">
              <img src="./img/avatar.png">
            </div>
            <div class="account-info">
              <span>{{userData.loginname}},您好！</span>
              <br/>
              <span>等级：{{userData.level}}</span>
              <!-- <span>{{userData.accountMoney}}</span> -->
            </div>
            <div class="moneyBox" v-if="isUser">
              <div>主账户（元）：
                <span>{{userData.accountMoney}}</span>
                <br/>副账户（元）：
                <span>{{userData.deputyCredit}}</span>
              </div>
            </div>
            <div class="moneyBox" v-else>
              <div>老虎机账户（元）：
                <span>{{userData.slotAccount}}</span>
                <br/>其他账户（元）：
                <span>{{userData.liveAccount}}</span>
              </div>
            </div>
          </div>
          <div class="tool-user-info" v-else>
            <div class="user-info-img">
              <img src="./img/avatar.png">
            </div>
            <div class="account-info">
              <router-link @click.native="showBar=false" :to="{name:'login'}" class="btn">登陆</router-link>
              <router-link @click.native="showBar=false" :to="{path:'/register'}" class="btn rig-btn">注册</router-link>
            </div>
          </div>
          <div @click="showBar=false" class="sidebar">
            <router-link class="tool-item-href" :to="{name:'money_deposit'}" v-if="isUser">
              <i class="iconyg yg-cunkuan"></i>存款
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <router-link class="tool-item-href" :to="{name:'money_drawmoney'}" v-if="isUser">
              <i class="iconyg yg-ruhequkuan"></i>取款
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <router-link class="tool-item-href" :to="{name:'money_transfer'}" v-if="isUser">
              <i class="iconyg yg-zhuanzhang1"></i>转账
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <router-link class="tool-item-href" :to="{name:'security'}" v-if="islogin">
              <i class="iconyg yg-068zhanghuanquan"></i>账户安全
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <router-link class="tool-item-href" :to="{name:'message'}" v-if="islogin">
              <i class="iconfont icon-message"></i> 站内信
              <span class="unread" v-if="unread">{{unread}}</span>
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <a class="tool-item-href" target="_blank" :href="SETTING.live800">
              <i class="iconyg yg-ickefu"></i>在线客服
              <i class="iconyg yg-jiantou fr"></i>
            </a>
            <router-link class="tool-item-href" :to="{name:'backCall'}" v-if="islogin">
              <i class="iconfont icon-phone"></i>电话回拨
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <router-link class="tool-item-href" :to="{name:'personal'}" v-if="islogin">
              <i class="iconyg yg-shezhi"></i>设置
              <i class="iconyg yg-jiantou fr"></i>
            </router-link>
            <!-- <div class="tool-item-href" @click="$store.dispatch('LOGIN_OUT')">
              <i class="iconfont icon-logout"></i>退出</div> -->
          </div>
          <!-- <div class="downloadBox">
            <router-link class="downloadbtn">
              客户端下载</router-link>
          </div> -->
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
  import {
    SETTING
  } from "@/assets/data"
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        SETTING,
        showBar:false,
        myValue: false
      }
    },
    props: ["value"],
    computed: {
      ...mapGetters(["userData", 'islogin', 'isUser', 'unread'])

    },
    created(){
      // 监听setToolBar控制事件
      this.$bus.$on('setToolBar',eventData=>{
        this.showBar=eventData
      })
    },
    watch: {
      showBar(val) {
        this.$bus.$emit("changeToolBar", val);
      }
    },
  }

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";

  .tool-warp {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .tool-bar {
      @include f(28px);
      transition: transform 0.5s;
      top: 0;
      left: 0;
      text-align: left;
      background: #444 url(./img/bg1.jpg);
      background-size: 100% 100%;
      height: 100%;
      width: r(540);
      color: $main-cl;
      overflow-y: scroll;
      &.active {
        display: block;
        transform: translateX(0);
      }
      .unread {
        margin-left: r(20);
        background: #FF7E28;
        border-radius: 20em;
        display: inline-block;
        padding: r(6);
        line-height: 1;
      }
      .tool-close {
        height: r(120);
        line-height: r(120);
        text-align: right;
        .iconyg {
          @include f(50px);
          margin-right: r(24);
        }
      }
      .tool-user-info-login {
        text-align: center;
        margin-bottom: r(40);
        .user-info-img {
          float: left;
          width: 45%;
          img {
            display: inline-block;
            width: r(140);
          }
        }
        .account-info {
          display: inline-block;
          width: 55%;
          line-height: r(50);
          padding-top: r(10);
          text-align: left;
          span {
            @include f(28px);
          }
        }
        .moneyBox {
          margin-top: r(35);
          text-align: left;
          padding-left: 10%;
          div {
            line-height: r(55);
            @include f(28px);
            width: 100%;
            display: inline-block;
            span {
              color: rgba(255, 126, 40, 1);
            }
          }
        }
        .user-name {
          line-height: 2;
        }
      }
      .tool-user-info {
        text-align: center;
        margin-bottom: r(40);
        .user-info-img {
          img {
            display: inline-block;
            width: r(140);
          }
        }
        .account-info {
          margin-top: r(40);
          .btn {
            width: 35%;
            line-height: r(55);
            background: #e9e9e9;
            color: #FF7E28;
            @include f(22px);
            margin: 0 r(20);
            display: inline-block;
            border-radius: 10px;
          }
        }
      }
      .account-img {
        border: solid r(7) #fff;
        border-radius: 50%;
        width: r(150);
        margin: 0 auto;
        background: #1dc4ec;
        height: r(150);
        text-align: center;
        line-height: r(140);
        @include f(120px);

      }
      .sidebar {
        width: 100%;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        .tool-item-href {
          display: block;
          margin-left: 10%;
          background: transparent;
          line-height: r(90); // margin-bottom: r(20);
          border-bottom: 1px solid #e8e8e8;
          &:last-child {
            border-bottom: none;
          }
          .iconfont {
            @include f(48px);
            margin-right: r(20);
          }
          .iconyg {
            @include f(48px);
            margin-right: r(20);
          }
          .fr {
            float: right;
          }
        }
      }
      .downloadBox {
        margin: r(80) auto;
        width: 100%;
        text-align: center;
        .downloadbtn {
          width: 60%;
          border: 1px solid #fff;
          border-radius: 8px;
          color: #fff;
          line-height: r(80);
          display: inline-block;
        }
      } // .tool-item-href {
      //   display: block;
      //   padding: r(24) r(32);
      //   background: $main-bg;
      //   margin-bottom: r(20);
      //   line-height: 1.4;
      //   .iconfont {
      //     @include f(48px);
      //     margin-right: r(20);
      //   }
      // }
    }
  }

</style>
