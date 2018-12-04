<template>
  <div class="layout-default">
    <headerTemp></headerTemp>
    <div class="page-view">
    <h3>PC-{{$store.getters.isLogin}}-LAYOUT</h3>
      <nuxt/>
    </div>
    <footerTemp></footerTemp>
    <rightServer></rightServer> 
  </div>
</template>

<script>
import headerTemp from "./components/header";
import footerTemp from "./components/footer";
import rightServer from "./components/rightServer";
export default {
  components: {
    headerTemp,
    footerTemp,
    rightServer
  },
  created(){
    // 拉取用户信息
    if(!this.$store.getters.userInfo.loginname){
      this.$store.dispatch('UPDATE_USERDATA').then(res=>{
        // console.log(res)
      }).catch(err=>{
        // console.log(err)
      })
    }

  },
  mounted(){
    // console.log(window.location.href)
  }
};
</script>

<style>
  .page-view{
    min-height:80vh;
    background:#ccc;
  }
</style>
