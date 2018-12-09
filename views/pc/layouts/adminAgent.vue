<template>
  <div>
    <h3>user-layout</h3>
    <nuxt/>
  </div>
</template>

<script>
export default {
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
