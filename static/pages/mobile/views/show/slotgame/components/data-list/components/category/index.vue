<template>
    <div class="slot-game-list cfx">
        <div v-if="fillterData.length>0">
        <div v-for="(item,i) in fillterData" class="slot-game-item" :key="i+item.id" > 
            <a class="item-view" href="javascript:;">
            <div :class="{'item-hot':item.tag.includes('HOT')}"></div>
            <div class="item-line">{{item.line?item.line+'线':''}}</div>
            <img class="item-img"  v-lazy="getImg(item,'mobile')">
            </a>
            <div class="item-operations">
            <div class="item-text" >{{item.name}}{{item.category}}</div>
            <!--<i  :class="['iconfont icon-heart-full',{faved:getfaved(item)}]" @click.stop="collect(item)"></i>-->
            </div>
            <a href="javascript:;" class="playbtn" v-show="showPlay(item)" v-cloak @click="playGame(item,$event, 'mobile')">立即游戏</a>
            <a href="javascript:;" class="playbtn" v-show="showTry(item)" v-cloak @click="tryGame(item,$event, 'mobile')">免费试玩</a>
        </div>
        </div>
        <div class="notfind" style="text-align:center;" v-else> 
        <img src="./images/gameicon_03.png">
        <p style="color:#bda059;line-height:3;">查询不到游戏</p>
        </div>
        <!-- 开始游戏弹窗 -->
        <!-- <model-game v-model="showModel" :data="curItem"></model-game> -->
    </div>
</template>
<script>
  // import modelGame from "./model-game"
  import {games} from "@/controls/games/game"
  export default {
    // 混合
    mixins: [games],
    data() {
      return {
      };
    },
    methods: {
      
    },
    created() {
      // 获取游戏数据
      this.getGames('mobile');
    },
    // components: {modelGame}
  };
</script>
