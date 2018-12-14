<template>
  <div class="index-main">
    <banner></banner>
    <!-- <annunciate></annunciate> -->
    <winningList></winningList>
    <carousel></carousel>
    <download></download>
    <!-- <recommandGames></recommandGames> -->

  </div>
</template>
<script>
  import annunciate from 'pc/components/annunciate'
  import banner from "./components/banner";
  import carousel from "./components/carousel"
  import download from "./components/download"
  import recommandGames from "./components/recommand-games/"
  import winningList from './components/winning-list'
  
  export default {
    data() {
      return {
            active: 0,
      };
    },
    components: {
      annunciate,
      banner,
      recommandGames,
      carousel,
      download,
      winningList
    },
    methods: {
    },
    created() {

    },
    mounted() {
    },
    activated() {
    },
  };

</script>
<style lang="scss" scoped>
.index-main{
  background: #191919;
}
</style>
