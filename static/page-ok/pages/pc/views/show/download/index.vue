<template>
  <div class="downloadPage">
    <div class="container">
      <div class="row">
        <menus></menus>
        <pros></pros>
      </div>
    </div>
    <!-- <banner></banner> -->
  </div>
</template>
<script>
  import {
    queryLatestPreferential
  } from '@/api/show'
  import annunciate from 'pc/components/annunciate'
  import banner from './components/banner'
  import menus from './components/menus'
  import pros from './components/pros'
  export default {
    name: "",
    data() {
      return {}
    },
    created() {

    },
    components: {
      menus,
      banner,
      pros,
      annunciate
    }
  }

</script>
<style lang="scss" scoped>
 .downloadPage{
   width: 100%;
   min-height: 670px;
   background: url('./images/bg.png') no-repeat;
   background-size: cover;
   background-position: top center;
   .row{
     margin: auto;
   }
 }
</style>
