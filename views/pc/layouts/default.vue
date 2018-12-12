<template>
  <div class="layout-default">
    <headerTemp></headerTemp>
    <navTemp></navTemp>
    <div class="page-view">
      <slot>
        <nuxt keep-alive/>
      </slot>
    </div>
    <footerTemp></footerTemp>
    <rightServer></rightServer>
  </div>
</template>

<script>
import headerTemp from "@/components/shows/header/t1";
import navTemp from "@/components/shows/nav/t1";
import footerTemp from "@/components/shows/footer/t1";
import rightServer from "@/components/shows/rightTool/t1";
export default {
  middleware: "route",
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
  computed: {
    userData() {
      return this.$store.getters.userData;
    }
  },
  mounted() {
    console.log("layout", window.location.href);
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
