<template>

  <div class="slot-platform content">
    <router-link class="p-item" :to="{name:'slotgame',params:{type:item.value}}" v-for="item in platformData" :key="item.value">
      <div class="icons" :class="`${item.value}`"></div> 
      <div class="text">{{item.name}}</div>
    </router-link>
  </div>

</template>
<script>
import { platformData } from "@/assets/data/index";
export default {
  data() {
    return {
      platformData,
      inputVal: ""
    };
  }
};
</script>
<style lang="scss">
.slot-platform {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  background: #373738;
  border-radius: 10px 10px 0 0;
  margin-top: 30px;
  .p-item {
    text-align: center;
    background: #202020;
    padding: 8px 20px;
    border-radius: 6px;
    margin: 0 10px 15px 0;
    .icons {
      height: 40px;
      width: 110px;
      transition: all 0.4s;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
      &.PT {
        background-image: url(./images/game-icon-pt.png);
      }
      &.DT {
        background-image: url(./images/game-icon-dt.png);
      }
      &.MG {
        background-image: url(./images/game-icon-mg.png);
      }
      &.QT {
        background-image: url(./images/game-icon-qt.png);
      }
      &.PNG {
        background-image: url(./images/game-icon-png.png);
      }
      &.NT {
        background-image: url(./images/game-icon-nt.png);
      }
      &.RTG {
        background-image: url(./images/game-icon-rtg.png);
      }
      &.TGP {
        background-image: url(./images/game-icon-tgp.png);
      }
      &.CQ9 {
        background-image: url(./images/game-icon-cq9.png);
      }
      &.PG {
        background-image: url(./images/game-icon-pg.png);
      }
      &.SKYWIND,
      &.SW {
        background-image: url(./images/game-icon-skywind.png);
      }
    }
    .text {
      font-size: 16px;
      color: #fff;
    }
    &:hover,
    &.active {
      background: rgb(255, 236, 183);
      /* Old browsers */
      background: -moz-linear-gradient(
        top,
        rgba(255, 236, 183, 1) 0%,
        rgba(255, 209, 120, 1) 100%
      );
      /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba(255, 236, 183, 1) 0%,
        rgba(255, 209, 120, 1) 100%
      );
      /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        rgba(255, 236, 183, 1) 0%,
        rgba(255, 209, 120, 1) 100%
      );
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
      /* IE6-9 */
      .icons {
        background-position: center top !important;
      }
      .text {
        color: #343434;
      }
    }
  }
}
</style>
