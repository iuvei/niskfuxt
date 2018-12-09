<template>
  <div class="index-main">
    <annunciate></annunciate>
    <banner></banner>
    <menus></menus>
    <hots></hots>
    <pros></pros>
    <services></services>
    <alert-tips></alert-tips>
  </div>
</template>
<script>
  import annunciate from 'pc/components/annunciate'
  import banner from "./components/banner";
  import menus from "./components/menus"
  import hots from "./components/hots"
  import pros from "./components/pros"
  import services from "./components/services"
  import alertTips from "./components/alert-tips/index"
  
  export default {
    data() {
      return {
      };
    },
    components: {
      annunciate,
      banner,
      menus,
      hots,
      pros,
      services,
      alertTips
    }
  };

</script>
<style lang="scss" scoped>
  .index-main {
    background:#202020;
  }

</style>
