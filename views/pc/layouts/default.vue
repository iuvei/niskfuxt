<template>
  <div class="layout-default">
    <headerTemp></headerTemp>
    <navTemp></navTemp>
    <div class="page-view">
      <h3>{{userData}}</h3>
      <nuxt/>
    </div>
    <footerTemp></footerTemp>
    <rightServer></rightServer>
  </div>
</template>

<script>
import headerTemp from "./components/header";
import navTemp from "./components/nav";
import footerTemp from "./components/footer";
import rightServer from "./components/rightServer";
export default {
  components: {
    headerTemp,
    navTemp,
    footerTemp,
    rightServer
  },
  created() {
    // 拉取用户信息
    if (!this.$store.getters.userData.loginname) {
      this.$store
        .dispatch("UPDATE_USERDATA")
        .then(res => {
          // console.log(res)
        })
        .catch(err => {
          // console.log(err)
        });
    }
  },
  computed:{
    userData(){
      return this.$store.getters.userData
    }
  },
  mounted() {
    // console.log(window.location.href)
  }
};
</script>

<style>
@import url("//at.alicdn.com/t/font_700045_jfc3obnxxb.css");
.page-view {
  min-height: 80vh;
  background: #ccc;
}
</style>
