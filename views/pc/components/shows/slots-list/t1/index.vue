<template>
  <div class="slot-game-list content">
    <!--el-scrollbar style="height:800px;"--> 
      <div class="slot-item" v-for="(item,i) in fillterData" :key="item.category+item.id+i" v-show="fillterData.length>0">
        <div class="img">
          <img v-lazy="getImg(item,'pc')" :alt="item.name">
          <p>
            <a target="_blank" @click="playGame(item,$event)" class="playgame" v-if="showPlay(item)">立即游戏</a>
            <a target="_blank" @click="tryGame(item,$event)" v-if="showTry(item)">免费试玩</a>
          </p>
        </div>
        <div class="game-text" :title="item.name">{{item.name}}</div>
        <div class="game-star" :title="item.eName">
          {{item.eName}}
        </div>
      </div>
      <!-- 无筛选结果时显示的内容 -->
      <div v-show="fillterData.length==0" style="color:#fff;">
        查找不到游戏...
      </div>
    <!--el-scrollbar-->
  </div>
</template>
<script>
import { games } from "@@/mixins/games/game";

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
    this.getGames("pc")
      .then(res => {
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss">
.slot-game-list {
  padding: 40px;
  overflow: hidden;
  background: #373738;
  border-radius: 10px;
  min-height: 400px;
  .slot-item {
    float: left;
    width: 16.66%;
    height: 230px;
    margin-bottom: 20px;
    padding: 0 8px;
    .img,
    .img img {
      width: 169px;
      height: 169px;
      position: relative;
      display: block;
      cursor: pointer;
      &:hover p {
        opacity: 1;
        transform: scale(1);
      }
      p {
        position: absolute;
        width: 169px;
        height: 169px;
        top: 0;
        left: 0;

        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        padding-top: 20px;
        box-sizing: border-box;
        display: block;
        opacity: 0;
        transform: scale(0);
        transition: all 0.4s;
        a {
          display: block;
          margin: 0 auto;
          margin-top: 20px;
          width: 110px;
          height: 30px;
          line-height: 30px;
          border-radius: 6px;
          background: #fff;
          color: #333;
          &.playgame {
            background: #ffd37c;
          }
        }
      }
    }
    .game-text {
      color: #fff;
      font-size: 15px;
      padding: 15px 0 0px 0;
      line-height: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .game-star {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      color: #fff;
      height: 20px;
      line-height: 20px;
      span {
        padding-right: 10px;
        vertical-align: middle;
      }
    }
  }
}

.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
</style>
