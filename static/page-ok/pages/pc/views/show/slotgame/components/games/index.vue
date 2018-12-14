<template>
<div class="gameData-box">
  <p class="gameAmount">共有(<span>{{fillterData.length}}</span>)款游戏</p>
  <div class="game-list">
    <div class="game-item" v-for="(item,i) in fillterData" :key="item.category+item.id+i" v-show="fillterData.length>0">
      <div class="game-layer">
        <div class="link">
          <a href="javascript:void(0);" class="goGame" @click="playGame(item,$event)" v-if="showPlay(item)">立即游戏</a>
        </div>
        <div class="link">
          <a href="javascript:void(0);" class="tryGame" @click="tryGame(item,$event)" v-if="showTry(item)">免费试玩</a>
        </div>
      </div>
      <div class="game-img">
        <img v-lazy="getImg(item,'pc')" :alt="item.name">
      </div>
      <p class="game-name">{{item.name}}</p>
    </div>
    <div v-show="fillterData.length==0" style="color:#fff;">
      查找不到游戏...
    </div>
  </div>
</div>
</template>
<script>
  import {
    games
  } from "@/controls/games/game";

  export default {
    // games方法
    mixins: [games],
    data() {
      return {
        loading: true
      };
    },
    created() {
      // 获取游戏数据
      this.getGames('pc').then(res => {
        this.loading = false
      }).catch(err => {
        console.log(err)
      })
    },
  };

</script>
<style lang="scss" scoped>
.gameAmount {
  text-align: right;
  color: #d7d7d7;
  padding-right: 20px;
  span {
    color: red;
  }
}
  .game-list {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    .game-item {
      width: 190px;
      margin-right: 8px;
      position: relative;
      margin-top: 5px;
      border: 1px solid transparent;
      cursor: pointer;

      .game-layer {
        opacity: 0;
        width: 100%;
        height: 180px;
        position: absolute;
        background: rgba($color: #000000, $alpha: 0.7);
        transition: opacity .3s ease;
        top: 0;
        left: 0;
        color: #fff;
        padding-top: 30%;

        .link {
          text-align: center;
          margin-bottom: 20px;

          .goGame {
            margin-left: 0 !important;
            margin: 10px auto;
            background: #d2a748;
            padding: 5px 30px;
            border-radius: 15px;
          }

          .tryGame {
            margin-left: 0 !important;
            margin: 10px auto;
            background: #d2a748;
            padding: 5px 30px;
            border-radius: 15px;
          }
        }
      }

      &:hover {
        border: 1px solid #ab8f47;

        .game-layer {
          opacity: 1 !important;
        }

        .game-name {
          color: #e2b85a;
        }
      }

      .game-img {
        img {
          width: 100%;
          height: 180px;
        }
      }

      .game-name {
        background: #000;
        color: #fff;
        text-align: left;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
      }
    }
  }

</style>
