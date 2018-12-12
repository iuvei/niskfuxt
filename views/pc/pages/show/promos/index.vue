<template>
  <div class="promo-page">
    <banner></banner>
    <menus></menus>
    <pros></pros>
  </div>
</template>
<script>
  import banner from '@/components/shows/page-promos/banner/t1'
  import menus from '@/components/shows/page-promos/filts/t1'
  import pros from '@/components/shows/page-promos/lists/t1'
  export default {
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
