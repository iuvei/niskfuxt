<template>
  <div class="notice-page">
    <banner></banner>
    <div class="show">
      <div class="contain cfx">
        <menus class="nitice-menu fl"></menus>
        <notices class='notice-show fr'></notices>
      </div>
    </div>
  </div>
</template>
<script>
  import banner from "./components/banner"
  import menus from "pc/components/contact"
  import notices from "./components/notices"
  export default {
    data() {
      return {};
    },
    components: {
      banner,
      menus,
      notices,
    },
  }

</script>
<style lang="scss" >
  .notice-page {
    background: #191919;
    padding-bottom: 30px;
    .show{
      margin: 10px auto 0;
      width: 1200px;
    }
  }

</style>
