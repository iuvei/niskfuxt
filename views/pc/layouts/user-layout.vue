<template>
  <layout>
    <h3>user-layout</h3>
    <nuxt/>
  </layout>
</template>

<script>
import layout from "./default";
export default {
  components: {
    layout
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    }
  },
  mounted() {
    // console.log(window.location.href)
  }
};
</script>

<style>
/* 引用用户中心需用的iconfont */
@import url("//at.alicdn.com/t/font_700045_jfc3obnxxb.css");
</style>
