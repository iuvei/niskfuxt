<template>
  <div class="index-main">
    <banner></banner>
    <annunciate style="    margin-top: -40px;    z-index: 9;    position: absolute;width:100%;background-color:rgba(0,0,0,.3)"></annunciate>
    <div class="container">
      <realGames></realGames>
      <detail></detail>
      <div class="col-2-1">
        <services></services>
        <recommandGames></recommandGames>
      </div>
      <div class="col-2-1">
        <sportsGames></sportsGames>
        <teachClass></teachClass>
      </div>
      <router-link class="shoucun" :to="{name:'promoPage'}"></router-link>
    </div>
    <!-- <detail></detail>
    <recommandGames></recommandGames> -->
    <!-- <footAbout></footAbout> -->
  </div>
</template>
<script>
  import annunciate from 'pc/components/annunciate'
  import banner from "./components/banner";
  import detail from "./components/detail"
  // import footAbout from "./components/foot-about"
  import recommandGames from "./components/recommand-games/"
  import realGames from "./components/realGames";
  import services from "./components/services"
  import sportsGames from "./components/sportsGames";
  import teachClass from "./components/teachClass"
  
  export default {
    data() {
      return {
            active: 0,
      };
    },
    components: {
      annunciate,
      banner,
      detail,
      recommandGames,
      // footAbout,
      realGames,
      services,
      sportsGames,
      teachClass
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
  padding-bottom: 30px;
  .container{
    width: 1280px;
    padding: 30px 0 0;
    position: relative;
    overflow: visible;
    margin-right: auto;
    margin-left: auto;
    &::before,&::after{
      content: "";
      display: table;
      box-sizing: border-box;
    }
    &::after{
      clear: both;
    }
    .shoucun{
      position: fixed;
      width: 120px;
      height: 120px;
      background: url('/static/images/pop-fixed.png') no-repeat center center;
      background-size: contain;
      right: 20px;
      bottom: 70px;
    }
    .col-2-1{
      width: 50%;
      position: relative;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      float: left;
      &:nth-child(1){
        padding-left: 0;
      }
      &:nth-child(2){
        padding-right: 0;
      }
      &:nth-child(3){
        padding: 0;
      }
      &:nth-child(4){
        padding-right: 0;
      }
    }
  }
}
</style>
