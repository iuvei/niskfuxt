<template>
  <div class="promo-page">
    <banner></banner>
    <menus></menus>
    <pros></pros>
  </div>
</template>
<script>
  import banner from '@/components/shows/banners/t1'
  import menus from '@/components/shows/pros-filter/t1'
  import pros from '@/components/shows/pros-list/t1'
  export default {
    layout: "main", // 布局文件
    name: "",
    data() {
      return {
      }
    },
    created() {

    },
    components: {
      menus,banner,pros
    }
  }
</script>
<style lang="scss">
  .promo-page{ 
    background:#202020;
    }
</style>
