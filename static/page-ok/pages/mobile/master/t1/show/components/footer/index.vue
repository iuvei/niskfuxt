<template>
  <footer class="footer" v-if="showFooter">
    <router-link :to="{name:'aindex'}">
      <!-- <i class="iconbolin iconbolin-home"></i> -->
      <div class="iconDiv"><img src="./images/icon1.png" alt=""></div>     
      <div>首页</div>
    </router-link>

    <router-link :to="{name:'promo'}">
      <!-- <i class="iconbolin iconbolin-pro"></i> -->
      <div class="iconDiv"><img src="./images/icon2.png" alt=""></div>   
      <div>优惠</div>
    </router-link>
    
    <router-link :to="{name:'slotgame'}">
      <!-- <i class="iconbolin iconbolin-poker"></i> -->
      <div class="iconDiv iconDivthree"><img src="./images/icon3.png" alt=""></div>   
      <div>游戏</div>
    </router-link>

    <router-link :to="{name:'cooperation'}">
      <div class="iconDiv"><img src="./images/icon4.png" alt=""></div>         
      <div>APP</div>
    </router-link>
    
    <router-link :to="account" v-if="islogin">
      <!-- <i class="iconbolin iconbolin-mine"></i> -->
      <div class="iconDiv"><img src="./images/icon5.png" alt=""></div>   
      <div>用户</div>
    </router-link>
    <router-link :to="{name:'login'}" v-else>
      <!-- <i class="iconbolin iconbolin-mine"></i> -->
      <div class="iconDiv"><img src="./images/icon5.png" alt=""></div>   
      <div>登录</div>
    </router-link>
  </footer>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {SETTING} from "@/assets/data"
  export default {
    data() {
      return {
        showFooter:true,
        SETTING
      };
    },
    methods:{
      checkLogin(e) {
        if(!this.$store.getters.islogin) {
          e.preventDefault();
          toast("请先登录")
          return false;
        }
      }
    },
    created(){
      this.$bus.$on('setFooter',eventData=>{
        this.showFooter=eventData
      })
    },
    computed: {
      ...mapGetters(["isAgent","islogin"]),

      account() {
        return this.isAgent ? {name: "agentcenter"} : {name: 'usercenter'};
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin";
  footer.footer {
    position: fixed;
    bottom: 0;
    align-items: center;
    height: r($footer-h);
    z-index: 99;
    width: 100%;
    @include f(28px);
    border-top: 1px solid rgba($color: #556ebc, $alpha: .5);
    color:#fff;
    background-color: $footer-bg;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    text-align:center;
    & > a {
      width: 100%;
      height: r($footer-h);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1.2;
      &.active {
        background: url(./images/active.png) no-repeat center center/85% ;
      }
      .iconDiv {
        width: r(55);
        height: r(55);
        display: flex;
        justify-content: center;
        align-items: center;
        &.iconDivthree{
          width: r(65);
        }
        img {
          width: 100%;
        }
      }
    }
    .iconOkbet{
      @include f(44px);
      color: #ccdceb;
    }
  }
</style>
