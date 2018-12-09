<template>
  <div class="notice-page">
    <banner></banner>
    <div class="content n-box">
      <menus></menus>
      <notices></notices>
    </div>
  </div>
</template>
<script>
  import banner from "./components/banner"
  import menus from "pc/components/contact"
  import notices from "./components/notices"
  export default {
    data() {
      return {
      };
    },
    components: {banner,menus,notices}
  }
</script>
<style lang="scss" scoped>
.notice-page{
  background:#202020;
  .n-box{
    padding:50px 0;
    display:flex;
    justify-content: space-between;
  }
}

</style>
