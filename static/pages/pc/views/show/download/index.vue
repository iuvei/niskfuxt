<template>
  <div class="promo-page">
    <banner></banner>
    <annunciate></annunciate>
    <div class="promomain clear">
      <menus></menus>
      <pros></pros>
    </div>
  </div>
</template>
<script>
  import {queryLatestPreferential} from '@/api/show'
  import annunciate from 'pc/components/annunciate'
  import banner from './components/banner'
  import menus from './components/menus'
  import pros from './components/pros'
  export default {
    name: "",
    data() {
      return {
      }
    },
    created() {

    },
    components: {
      menus,banner,pros,annunciate
    }
  }
</script>
<style lang="scss">
  .promo-page{ 
    // background: url(~pc/assets/images/bg2.png) no-repeat center 260px;
    background: #202020;
    .promomain{
      width: 1140px;
      background: #101010;
      margin: auto;
      padding: 50px;
    }
    .clear::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
      clear: both;
    }
  }
</style>
