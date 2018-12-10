<template>
  <div class="flex_1 index-page">
    <banner></banner>
    <game-list></game-list>
    <vJackpot></vJackpot>
    <hotgame></hotgame>
    <welfare></welfare>
    <downclient></downclient>
    <alert-tips></alert-tips>
    <router-link :to="{name:'promoPage'}" class="shoucun"></router-link>
  </div>
</template>
<script>
  import banner from "./components/banner"
  import gameList from "./components/game-list"
  import vJackpot from "mobile/components/jackpot"
  import hotgame from "./components/hot-game"
  import welfare from "./components/welfare"
  import downclient from "./components/down-client/index"
  import alertTips from "./components/alert-tips"

  export default {
    data() {
      return {
      };
    },
    components: {
      banner, 
      gameList, 
      vJackpot, 
      hotgame, 
      welfare,
      downclient,
      alertTips,
    }
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
.shoucun{
  position: fixed;
  width: r(150);
  height: r(150);
  background: url('/static/images/pop-fixed.png') no-repeat center center;
  background-size: contain;
  bottom: r(120);
  right: r(10);
  display: block;
}
</style>
