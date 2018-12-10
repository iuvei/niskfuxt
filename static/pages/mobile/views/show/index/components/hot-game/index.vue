<template>

  <div class="hot-game" v-show="recommandData.length>0">
   <!-- <div class="section-tit"><i class="iconfont icon-fire"></i><h2>热门游戏</h2> </div>-->
    <div class="game-list">
      <div v-for="(item,i) in recommandData" :key="i" @click="tickGanme(item)" class="hot-item">

        <img class="game_img lazy" v-lazy="getImg(item)">

        <div class="item-title">{{item.name}}</div>
      </div>
    </div>
    <model-game v-model="showModel" :data="curItem"></model-game>
  </div>
</template>
<script>
  import {queryRecommandGamesList} from "@/api/show"
  import modelGame from "mobile/views/show/slotgame/components/data-list/model-game"
  import {games} from "@/controls/games/game" 
  export default {
    // 混合
    mixins: [games],
    data() {
      return {
        recommandData: [],
        curItem: {},
        showModel: false
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      tickGanme(item) {
        this.curItem = item;
        this.showModel = true;
      },
    },
    created() {
      queryRecommandGamesList({gameType: 1}).then(res => {
        if (res.success && res.data){
          this.recommandData = []
          for(let i =0;i<res.data.length;i++){
            this.recommandData.push({
              category:res.data[i].platform,
              code:res.data[i].code||'',
              eName:res.data[i].gameId,
              id:res.data[i].gameId,
              language:"",
              name:res.data[i].gameName,
              pic:res.data[i].picPath,
              subType:res.data[i].subType||'',
              state:1,
              tag:[],

            })
          }
          console.log(this.recommandData)
        }
      })
    },
    activated() {
    },
    components: {
      modelGame
    }
  }
</script>
<style spcoed lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .hot-game {
    @include f(28px);
    padding: r(20) 0 r(20) r(30);
    background-color:#353643;
    .game-list {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    .hot-item {
      position: relative;
      display: inline-block;
      width: r(210);
      margin-right: r(30);
      margin-bottom: r(40);
      img {
        width: r(150);
        height: r(150);
      }
    }
    .section-tit{
      h2{
        font-size: 18px;
      }
    }
    .item-title {
      position: absolute;
      bottom: r(-35);
      color: #fff;
      width: 100%;
      text-align: center;
      overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
    }
  }
</style>
