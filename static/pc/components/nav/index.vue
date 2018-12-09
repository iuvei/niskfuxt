<template>
  <nav class="nav">
    <div class="content">
      <router-link tag="a" to="/index" class="nav-item">
        <div class="nav-box">
          <p class="zh">首页</p>
          <p class="en">HOME</p>
        </div>
      </router-link>
      <router-link tag="a" to="/real" class="nav-item">
        <div class="nav-box">
          <span class="tips">
            <img src="./images/hot.png">
          </span>
          <p class="zh">真人娱乐</p>
          <p class="en">LIVE</p>
        </div>
      </router-link>
      <router-link tag="a" to="/sport"  class="nav-item">
        <div class="nav-box">
          <p class="zh">体育赛事</p>
          <p class="en">SPORT</p>
        </div>
      </router-link>

      <a class="nav-item" >
        <div class="nav-box">
          <p class="zh">棋牌</p>
          <p class="en">CHESS</p>
        </div>
        <div class="n-list">
          <a class="list" target="_blank" @click="open(Games.href_city761, '761棋牌', 900, 640, true, islogin)">761棋牌</a>
          <a class="list" target="_blank" @click="open(Games.href_kyqp, '开元棋牌', 900, 640, true, islogin)">开元棋牌</a>
        </div>
      </a>
      <a class="nav-item" >
        <div class="nav-box">
          <p class="zh">彩票</p>
          <p class="en">LOTTERY</p>
        </div>
        <div class="n-list">
          <a class="list" target="_blank" @click="open(Games.href_vr, 'VR彩票', 900, 640, true, islogin)">VR彩票</a>
          <a class="list" target="_blank" @click="open(Games.href_bbcp, 'BB彩票', 900, 640, true, islogin)">BB彩票</a>
          <a class="list" target="_blank" @click="open(Games.href_ig_ssc, 'IG时时彩', 900, 640, true, islogin)">IG时时彩</a>
          <a class="list" target="_blank" @click="open(Games.href_ig_hk, 'IG香港彩', 900, 640, true, islogin)">IG香港彩</a>
        </div>
      </a>
      <router-link tag="a" to="/fish" class="nav-item">
        <div class="nav-box">
          <p class="zh">捕鱼游戏</p>
          <p class="en">FISHING</p>
        </div>
      </router-link>
      <router-link tag="a" :to="{name:'slotgame'}" class="nav-item">
        <div class="nav-box">
          <p class="zh">电子游艺</p>
          <p class="en">GAME</p>
        </div>
        <div class="n-list">
          <router-link :to="{name:'slotgame',params:{type:item.value}}" class="list" v-for="item in platformData" :key="item.value">{{item.name}}</router-link>
        </div>
      </router-link>
      <router-link tag="a" to="/promo" class="nav-item">
        <div class="nav-box">
          <span class="tips">
            <img src="./images/hot.png">
          </span>
          <p class="zh">优惠活动</p>
          <p class="en">PROMS</p>
        </div>
      </router-link>
      <router-link tag="a" :to="{name:'download'}" class="nav-item">
        <div class="nav-box">
          <p class="zh">手机投注</p>
          <p class="en">DOWNLOAD</p>
        </div>
      </router-link>
      <!--router-link tag="a" to="/vip" class="nav-item">
        <div class="nav-box">
          <p class="zh">vip俱乐部</p>
          <p class="en">VIP CLUB</p>
        </div>
      </router-link-->
      <a class="nav-item" @click="open(SETTING.live800, '在线客服', 700, 640)">
        <div class="nav-box">
          <p class="zh">在线客服</p>
          <p class="en">ONLINE</p>
        </div>
      </a>
      <a class="nav-item red" @click="$bus.$emit('showRegister',true)" v-if="!islogin">
        <div class="nav-box">
          <p class="zh">30秒注册</p>
          <p class="en">JOIN US</p>
        </div>
      </a>
    </div>
  </nav>
</template>
<script>
import { Games, platformData } from "@/assets/data";
import openWindow from "@/util/openWindow";
import { SETTING } from "@/assets/data";

import { mapGetters } from "vuex";

export default {
  name: "",
  data() {
    return {
      Games,
      SETTING,
      platformData
    };
  },
  props: {},
  computed: {
    ...mapGetters(["islogin"])
  },
  watch: {},
  methods: {
    open(url, title, w, h, needLogin) {
      console.log(url);
      if (needLogin) {
        if (!this.islogin) {
          window.toast("请先登录!");
          return;
        }
      }
      openWindow(url, title, w, h);
    }
  },
  created() {},
  activated() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.nav {
  background: rgb(255, 236, 183);
  /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(255, 236, 183, 1) 0%,
    rgba(255, 209, 120, 1) 100%
  );
  /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 236, 183, 1) 0%,
    rgba(255, 209, 120, 1) 100%
  );
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 236, 183, 1) 0%,
    rgba(255, 209, 120, 1) 100%
  );
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
  /* IE6-9 */
  .content {
    display: flex;
    justify-content: space-between;
    .nav-item {
      text-align: center;
      display: flex;
      height: 62px;
      color: #343434;
      font-size: 16px;
      align-items: center;
      position: relative;
      flex: 1;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s;
      .tips {
        position: absolute;
        top: 0;
        right: 0;
        animation: start 0.4s;
        animation-iteration-count: 999999999;
      }
      .nav-box {
        text-align: center;
        width: 100%;
        // font-weight:600;
        .zh {
          font-size: 16px;
          margin-bottom: 4px;
        }
        .en {
          font-size: 12px;
        }
      }
      &:hover,
      &.active {
        color: #fff;
        background: url(./images/bg.png) center bottom no-repeat;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 50%;
        content: "|";
        color: orange;
        transform: translateY(-50%);
      }
      &.red {
        color: #da1a00;
        animation: color 0.8s;
        animation-iteration-count: 999;
        &:hover,
        &.active {
          color: #fff;
          background: url(./images/bg.png) center bottom no-repeat;
        }
      }
      &:hover {
        overflow: visible;
        .n-list {
          transform: scale(1);
          opacity: 1;
        }
      }
      .n-list {
        position: absolute;
        top: 100%;
        min-width: 100%;
        left: 0;
        border: solid 1px #ffd178;
        border-top: none;
        background: #202020;
        z-index: 10;
        transform: scale(0);
        opacity: 0;
        transition: all 0.4s;
        .list {
          color: #fff;
          height: 40px;
          line-height: 40px;
          display: block;
          border-bottom: dashed 1px #999;
          margin: 0 px;
          word-break: keep-all;
          &:hover,
          &.active {
            color: #ffdc98;
          }
          &:last-child {
            border-bottom: none !important;
          }
        }
      }
    }
  }
}

@keyframes start {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes color {
  from {
    color: #da1a00;
    transform: scale(1);
  }
  to {
    color: #343434;
    transform: scale(1.05);
  }
}
</style>
