<template>
  <div class="nav-wr">
    <div class="nav">
        <router-link :to="{name:'home'}" class="logo">
          <img src="./images/logo.png">
        </router-link>
      <div class="fr nav-link">
        <router-link  :to="{name:'home'}">
          <span class="navicon navicon1"></span>首页
        </router-link>
        <router-link  :to="{name:'gameIndex',params:{type:'PT'}}">
          <span class="navicon navicon2"></span>老虎机
        </router-link>
        <router-link  :to="{name:'real'}">
          <span class="navicon navicon7"></span>真人娱乐
        </router-link>
        <router-link  :to="{name:'fish'}">
          <span class="navicon navicon7"></span>捕鱼
        </router-link>
        <router-link  :to="{name:'sport'}">
          <span class="navicon navicon7"></span>体育
        </router-link>
        <router-link  :to="{name:'promosIndex'}">
          <span class="navicon navicon6"></span>优惠活动
        </router-link>
        <router-link  :to="{name:'downloadIndex'}">
          <span class="navicon navicon7"></span>下载中心
        </router-link>
        <router-link  :to="{name:'vipIndex'}">
          <span class="navicon navicon8"></span>VIP
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    SETTING
  } from "@/assets/data";
  export default {
    name: "",
    data() {
      return {
        SETTING
      };
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    activated() {},
    components: {}
  };

</script>
<style lang="scss">
.nav-wr {
    height: 88px;
    min-width: 1110px;
    background: #2b2a26;
}

.nav {
    width: 1110px;
    margin: 0 auto;
}

.nav .logo {
    padding: 15px 0 0 0;
    display: inline-block;
}

.nav .logo:hover{
    opacity: .8
}

.nav-link {
    width: 800px;
}

.nav-link a {
    text-align: center;
    display: inline-block;
    height: 88px;
    line-height: 26px;
    font-size: 16px;
    color: #fff;
    width: 100px;
    float: left;
}

.nav-link span {
    width: 100%;
    display: block;
    margin-top: 15px;
}

.nav-link span.navicon1 {
    height: 36px;
    background: url(./images/nav1.png) no-repeat center 0;
}

.nav-link span.navicon2 {
    height: 38px;
    background: url(./images/nav2.png) no-repeat center 0;
}

.nav-link span.navicon3 {
    height: 40px;
    background: url(./images/nav3.png) no-repeat center 0;
}

.nav-link span.navicon4 {
    height: 38px;
    margin-bottom: 2px;
    background: url(./images/nav4.png) no-repeat center 0;
}

.nav-link span.navicon5 {
    height: 35px;
    margin-bottom: 5px;
    background: url(./images/nav5.png) no-repeat center 0;
}

.nav-link span.navicon6 {
    height: 36px;
    margin-bottom: 4px;
    background: url(./images/nav6.png) no-repeat center 0;
}

.nav-link span.navicon7 {
    height: 39px;
    background: url(./images/nav7.png) no-repeat center 0;
}

.nav-link span.navicon8 {
    margin-bottom: 3px;
    height: 36px;
    background: url(./images/nav8.png) no-repeat center 0;
}

.nav-link a.active,.nav-link a:hover {
  background: url(./images/navbg.png) no-repeat 0 -1px;
  background-size: 100%;
}

.nav-link a:hover .navicon8,
.nav-link a:hover .navicon6,
.nav-link a:hover .navicon1,
.nav-link a.active .navicon1 {
    background-position: center -36px;
}

.nav-link a:hover .navicon2,
.nav-link a:hover .navicon4 {
    background-position: center -38px;
}

.nav-link a:hover .navicon3 {
    background-position: center -40px;
}

.nav-link a:hover .navicon7 {
    background-position: center -39px;
}

.nav-link a:hover .navicon5 {
    background-position: center -35px;
}
</style>
