<template>
  <div class="promo-page">
    <banner></banner>
    <menus></menus>
    <pros></pros>
    <info></info>
  </div>
</template>
<script>
  import {queryLatestPreferential} from '@/api/show'
  import banner from './components/banner'
  import menus from './components/menus'
  import pros from './components/pros'
  import info from './components/info'
  export default {
    name: "",
    data() {
      return {
      }
    },
    created() {

    },
    components: {
      info,menus,banner,pros
    }
  }
</script>
<style lang="scss">
  .promo-page{ 
    background:#202020;
    }
</style>
