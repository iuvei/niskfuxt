<template>

  <div class="slot-game">
    <slotgameMenu @fromMenu="activiedMenu"></slotgameMenu>
    <div v-show="showType == 'slot'">
      <div class="filter-box" >
        <fliter-input style="flex: 5"></fliter-input>
        <v-filter></v-filter>
      </div>
      <vJackpot ></vJackpot>
      <dada-list></dada-list>
    </div>
    <!-- 真人 -->
    <div class="others cfx" v-if="showType=='real'">
      <div class="pics" @click="open(Games.href_sunbetH5, '申博真人', 900, 640, true)">
        <img src="./images/pic_sun_live.png">
      </div>
      <div class="pics" @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true)">
        <img src="./images/pic_bbin_live.png">
      </div>
      <div class="pics" @click="open(Games.href_og, 'OG真人', 900, 640, true)">
        <img src="./images/pic_og_live.png">
      </div>
      <div class="pics" @click="open(Games.href_ag, 'AG真人', 900, 640, true)">
        <img src="./images/pic_ag_live.png">
      </div>
    </div>
    <!-- 体育 -->
    <div class="others cfx" v-if="showType=='sport'">
      <div class="pics" @click="open(Games.href_sb_mobile, '沙巴体育', 900, 640, true)">
        <img src="./images/pic_shaba_sports.png">
      </div>
      <!-- <div class="pics" @click="open(Games.href_pbsport, '平博体育', 900, 640, true)">
        <img src="./images/pic_pin_sports.png">
      </div> -->
      <div class="pics" @click="open(Games.href_ug_mobile, '新皇冠体育', 900, 640, true)">
        <img src="./images/pic_crown_sports.png">
      </div>
    </div>
    <!-- 棋牌 -->
    <div class="others cfx" v-if="showType=='chess'">
      <div class="pics" @click="open(Games.href_city761, '761棋牌', 900, 640, true)">
        <img src="./images/pic_761_poker.png">
      </div>
      <div class="pics" @click="open(Games.href_kyqp, '开元棋牌', 900, 640, true)">
        <img src="./images/pic_ky_poker.png">
      </div>
    </div>
    <!-- 捕鱼 -->
    <div class="others cfx" v-if="showType=='fish'">
      <div class="pics" @click="open(Games.href_fish_ag, 'AG捕鱼', 900, 640, true)">
        <img src="./images/pic_home_fish.png">
      </div>   
    </div>
    <!-- 彩票 -->
    <div class="others cfx" v-if="showType=='lottery'">
      <div class="pics" @click="open(Games.href_ig_ssc_mobile, 'IG时时彩', 900, 640, true)">
        <img src="./images/pic_ig_keno1.png">
      </div>
      <div class="pics" @click="open(Games.href_bbcp, 'BB彩票', 900, 640, true)">
        <img src="./images/pic_bbin_keno.png">
      </div>
      <div class="pics" @click="open(Games.href_ig_hk_mobile, 'IG香港彩', 900, 640, true)">
        <img src="./images/pic_ig_keno.png">
      </div>
      <div class="pics" @click="open(Games.href_vr, 'VR彩票', 900, 640, true)">
        <img src="./images/pic_vr_keno.png">
      </div>
    </div>
  </div>
  
</template>
<script>
  import vJackpot from "mobile/components/jackpot"
  import vFilter from "./components/filter"
  import slotgameMenu from "./components/menu/index"
  import dadaList from "./components/data-list/index"
  import fliterInput from "./components/fliter-input"
  import {    Games  } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        Games,
        showType:'slot'
      };
    },
    methods: {
      open(url, title, w, h, needLogin) {
        if(needLogin){
          if(!this.islogin){
            window.toast('请先登录!')
            return
          }
        }
        openWindow(url, title, w, h)
      },
      activiedMenu(val){
        console.log(val)
        this.showType = val
      }
    },
    computed: {
      ...mapGetters(['islogin'])
    },
    components: {
      vFilter, dadaList, fliterInput, slotgameMenu,vJackpot
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .slot-game {
    position: relative;
    // margin-top: r(100);
    background-color: #37373a;
    .filter-box {
      display: flex;
      height: r(86);
      line-height: r(86);
      background: #24232b;
      // position: fixed;
      // top: r(200);
      padding: 0 2%;
      width: 100%;
      z-index: 99;
      position: relative;
      .filter-btn {
        span{
          vertical-align: middle;
          margin-right: r(16);
        }
        .iconay{
          @include f(22px);
        }
        flex: 1;
        padding-left:r(30);
        @include f(30px);
        white-space: nowrap;
      }
      .filter-btn1{
        float:right;
        height: r(45);
        line-height: r(45);
        // margin-right: r(20);
        color: #ffffff;
        padding-left:r(30);
        @include f(30px);
        span{
          vertical-align: middle;
        }
        .iconay{
          @include f(48px);
        }
        
      }
    }
    .slot_game_result{text-align: center;line-height: 1.5; margin: 1em 0; @include  f(28px);}
    .others{
      clear:both;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .pics{
        text-align:center;
        width:49%;
        // float:left;
        // flex: 1;
        
        img{
          display:block;
          width:100%;
          padding:r(10);
          box-sizing:border-box;
        }
      }
    }
  }

</style>
