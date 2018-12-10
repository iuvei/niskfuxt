<template>
  <div class="promo-main">
    <banner></banner>
    <!-- <annunciate></annunciate> -->
    <div class="connection">
      <menus></menus>
      <pros></pros>
      <info></info>
    </div>
  </div>
</template>
<script>
  import {queryLatestPreferential} from '@/api/show'
  import annunciate from 'pc/components/annunciate'
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
      info,menus,banner,pros,annunciate
    }
  }
</script>
<style lang="scss">
  .promo-main {
  background: #f0f5fa;
  .connection {
    width: 1200px;
    margin: 0 auto;
    display: block;
    position: relative;
  }
  }
</style>
