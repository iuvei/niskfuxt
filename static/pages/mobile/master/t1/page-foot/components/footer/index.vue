<template>
  <footer class="footer" v-if="showFooter">
    <router-link :to="{name:'home'}">
      <i class="iconay ay-iconfontshouyecopy"></i>
      <div>首页</div>
    </router-link>
    <router-link :to="{name:'money_depositMenu'}" @click.native="checkLogin($event)">
      <i class="iconay ay-cunkuanlicairenminbi"></i>
      <div>存款</div>
    </router-link>
    <router-link :to="{name:'promo'}"> 
      <i class="iconay ay-youhui"></i>
      <div>优惠</div>
    </router-link>
    <a :href="SETTING.live800" target="_blank">
      <i class="iconay ay-ziyuan8"></i>
     <div>客服</div>
    </a>
    <router-link :to="account" v-if="islogin">
      <i class="iconay ay-zhanghu"></i>
      <div>账户</div>
    </router-link>
    <router-link :to="{name:'login'}" v-else>
      <i class="iconay ay-zhanghu"></i>
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
    border-top: 1px solid #ccc;
    // background: rgb(102,104,106);
    // background: linear-gradient(to bottom,rgba(102,104,106,1),rgba(28,28,28,1));
    color:rgba(149,149,149,1);
    background-color: $footer-bg;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    text-align:center;
    & > a {
      height: r($footer-h);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.2;
      &.active {
        color: $iconcl;
        border-top-color: #f33;
        .iconay{
          color: $iconcl;
        }
      }
    }
    .iconay{
      @include f(48px);
    }
  }
</style>
