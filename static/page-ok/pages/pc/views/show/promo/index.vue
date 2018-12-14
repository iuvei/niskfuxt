<template>
  <div class="promo-page">
    <banner></banner>
    <div class="promoPageMain">
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
  .promo-page{ 
    // background: url(~pc/assets/images/bg2.png) no-repeat center 260px;
    background: #191919;
    .promoPageMain{
      width: 1200px;
      border-top: #cdbe67 2px solid;
      background: #151515;
      margin: 10px auto 0;
      
    }
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
    table {
      border-collapse: collapse;
      border: 1px solid #ddd !important;   
      th {
        text-align: center;
        border: 1px solid #ddd !important;
        background: #e2b85a;
        padding: 5px 0;
      }
      td {
        text-align: center;
        border: 1px solid #ddd !important;
        padding: 5px 0;
      }
    }
  }
</style>
