<template>
  <footer class="footer" v-if="showFooter">
    <router-link :to="{name:'home'}">
      <i class="iconyg yg-home"></i>
      <div>首页</div>
    </router-link>
    <router-link :to="{name:'promo'}">
      <i class="iconyg yg-youhuiquanicon"></i>
      <div>优惠</div>
    </router-link>
    
    <router-link :to="{name:'slotgame'}"> 
      <i class="iconyg yg-94"></i>
      <div>游戏</div>
    </router-link>
    <!-- <router-link :to="{name:'cooperation'}">
      <i class="iconyg yg-daili"></i>
      <div>代理</div>
    </router-link> -->
    <router-link :to="account" v-if="islogin">
      <i class="iconyg yg-gerenxinxi"></i>
      <div>账户</div>
    </router-link>
    <router-link :to="{name:'login'}" v-else>
      <i class="iconyg yg-gerenxinxi"></i>
      <div>登陆</div>
    </router-link>
  </footer>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        showFooter:true
      };
    },
    created(){
      // this.$bus.$on('setFooter',eventData=>{
      //   this.showFooter=eventData
      // })
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
    // background: #fff;
    background: rgb(102,104,106);
    background: linear-gradient(to bottom,rgba(102,104,106,1),rgba(28,28,28,1));
    color:rgba(149,149,149,1);
    display:flex;
    flex-direction: row;
    justify-content: space-around;;;
    text-align:center;
    & > a {
      height: r($footer-h);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.2;
      &.active {
        // color: $iconcl;
        color: #fff;
        border-top-color: #f33;
        .iconfont{
          // color: $iconcl;
          color: #fff;
        }
      }
    }
    .iconfont {
      @include f(48px);
    }
    .iconyg{
      @include f(48px);
    }
  }
</style>
