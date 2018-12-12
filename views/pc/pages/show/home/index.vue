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
  import annunciate from '@/components/shows/annunciate/t1'
  import banner from "@/components/shows/banners/t1";
  import menus from "@/components/shows/menus/t1"
  import hots from "@/components/shows/hotGames/t1"
  import pros from "@/components/shows/pros/t1"
  import services from "@/components/shows/services/t1"
  import alertTips from "@/components/shows/adPopup/t1"
  
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
