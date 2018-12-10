<template>
  <div class="tab-content" v-loading="loading">
    <div class="gamesTable">
      <div class="game-result">
        <div class="game game2" v-for="(item,i) in fillterData" :key="item.gameId" v-show="fillterData.length>0">
          <img v-lazy="getImg(item,'pc')" :alt="item.gameId" :key="item.gameId+i">
          <div class="game-details">
            <p class="game-title">
              <span class="game-name">{{item.name}}({{item.category}})</span>
            </p>
          </div>
          <span class="game-mask"></span>
          <div class="game-hover games">
            <h5>{{item.platform}} {{item.gameName}}</h5>
            <!-- <a href="javascript:void(0);" class="game-btn gamein" @click="playGame(extend(item),$event)">立即游戏</a> -->
            <a target="_blank" class="game-btn gamein" @click="playGame(item,$event)" v-if="showPlay(item)">立即游戏</a>
            <a target="_blank" class="game-btn gamein" @click="tryGame(item,$event)" v-if="showTry(item)">免费试玩</a>
          </div>
        </div>
        <div class="clear"></div>
        <!-- 无筛选结果时显示的内容 -->
        <div v-show="fillterData.length==0" style="color:#fff;">
          查找不到游戏...
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    games
  } from "@/controls/games/game";
  export default {
    mixins: [games],
    data() {
      return {
        firstGame: {},
        secondGame: {},
        loading: true,
      }
    },
    methods: {
      extend(item) {
        return {
          "eName": "",
          "name": item.gameName,
          "id": item.gameId,
          "code": item.code || '',
          "category": item.platform,
          "type": "SLO",
          "line": "",
          "state": 1,
          subType: item.subType || '',
          "pic": item.picPath,
          "tag": []
        }
      },
    },
    created() {
      // 获取游戏数据
      this.getGames('pc').then(res => {
        this.loading = false
      }).catch(err => {
        console.log(err)
      })
    },
  }

</script>
</script>
<style lang="scss" scoped>
  .tab-content {
    margin: 20px 0 0 -8px;
    position: relative;
    min-height: 800px;
    .imgbg {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  #recommended-tab {
    display: block;
  }

  .game {
    width: 236px;
    height: 180px;
    position: relative;
    float: left;
    margin: 0 0 8px 8px;
    overflow: hidden;
  }

  .game2 img {
    width: 100%;
    height: 180px;
  }

  .game1 {
    width: 596px;
  }

  .game img {
    transform: scale(1);
    transition: all 0.5s ease-in-out;
    margin: 0 auto;
  }

  .game-mask {
    background: url("./images/mask.png") repeat;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .game {
    .tag {
      background: url("./images/tag1.png") no-repeat;
      width: 70px;
      height: 70px;
      position: absolute;
      top: 0;
      right: 0;
    }
    .tag3 {
      background: url("./images/tag3.png") no-repeat;
      width: 70px;
      height: 70px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 100;
    }
    .game-details {
      position: absolute;
      height: 16px;
      width: 100%;
      bottom: 14px;
      left: 0;
      color: #fff;
      z-index: 200;
    }
    .game-title {
      font-size: 14px;
      color: #fff;
      float: left;
      padding-left: 17px;
      line-height: 20px;
      position: absolute;
      bottom: -3px;
      left: 0;
      .game-name {
        margin-bottom: 10px;
        display: block;
      }
      .game-dec {
        color: #cca352;
        font-size: 12px;
      }
    }
    .game-hover {
      display: none;
      z-index: 200;
      padding-top: 28px;
      text-align: center;
      width: 100%;
      height: 180px;
      border: 1px solid #996b3d;
      position: absolute;
      top: 0;
      left: 0;
      background: url("./images/trans1.png") repeat;
    }
  }

  .game1 .game-hover {
    width: 594px;
  }

  .game-hover {
    h5 {
      font-size: 16px;
      color: #fff;
      font-weight: normal;
      margin-bottom: 22px;
    }
    .game-btn {
      width: 160px;
      height: 40px;
      display: block;
      background: url("./images/btn1.png") no-repeat;
      margin: 0 auto 15px;
      font-size: 16px;
      color: #fff;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
    }
    a.trial {
      font-size: 14px;
      color: #cca352;
      text-align: center;
      float: none;
      margin: 0;
      width: auto;
      height: auto;
    }
  }

  .game {
    &:hover {
      .game-hover {
        display: block;
      }
      img {
        transform: scale(1.05);
      }
    }
  }

  .filter {
    margin: 22px 0 0 8px;
  }
.clear{
    clear: both;
  }
</style>
