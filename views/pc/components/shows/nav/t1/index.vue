<template>
   <div class="nav6 navblock ">
    <div class="nav">
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-home'}" >首页</nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-slots'}" >游戏大厅</nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'admin-money-deposit'}">
        deposit
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-sport'}">
        体育竞技
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-fish'}">
        捕鱼
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-chess'}">
        棋牌
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-promos'}">
        优惠活动
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-download'}" >
        手机投注
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-vip'}" >
        VIP
      </nuxt-link>
      <span></span>
      <nuxt-link tag="a" :to="{name:'show-cooperation'}" >
        代理加盟
      </nuxt-link>
      <span></span>
    </div>
  </div>
</template>
<script>
import openWindow from "@@/utils/openWindow";

import { mapGetters } from "vuex";

export default {
  name: "",
  data() {
    return {
    };
  },
  methods: {
    open(url, title, w, h) {
      openWindow(url, title, w, h);
    }
  },
};
</script>
<style lang="scss" scoped>
.nav6 {
  background-color: #1b1b1c;
.header {
  width: 1200px;
  margin: 0 auto;
  img {
    margin: 10px 0 0 13px;
  }
}

.nav {
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  background: #ffecb7;
    background: linear-gradient(to bottom, #ffecb7 0%, #ffd178 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178',GradientType=0 );
    color: #343434;
  display:flex;
  justify-content: space-between;
  a {
    line-height: 40px;
    display: inline-block;
    width: 100%;
    vertical-align: 14px;
    color: #350103;
    vertical-align: top;
    &:hover, &.active {
      animation:rubberBand .7s linear;
      color: #fff;
      background: #aa0104;
    }
  }
  span {
    display: inline-block;
    width: 3px;
    height: 40px;
    border-right: 1px solid #a07635;
    border-left: 1px solid #a07635;
    background: #fefccd;
  }
}
}
</style>
