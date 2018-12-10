<template>
  <div class="wrap index-casino" id="wrap">
    <h3 style="position: absolute;top: 0;left: 50%;margin-left: -48px;color:#f7e6b0">电子游戏</h3>
    <ol id="list">
      <li class="casinoIcon mg" :class="{active:showPic == item.value}" v-for="(item,i) in platformData" @mouseover="showPic = item.value" :key="item.name+i">
        <span class="">i</span>
        <a :href='"#"+item.name' data-toggle="tab">{{item.value}}</a>
      </li>
    </ol>
    <ul id="pic">
      <li v-for="(item,i) in platformData" :key="item.name+i" v-show="showPic == item.value">
        <div class="tab-pane fade in active" id="mg">
          <router-link class="_vr_mt_check _vr_mt_slogan" :to="{name:'slotgame'}">
            <!-- <img src="./images/AG.png"> -->
            <img :src='require("./images/" + item.value + ".png")' alt="">
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {
    games
  } from "@/controls/games/game";
  import {
    queryRecommandGamesList
  } from "@/api/show"
  import {
    platformData
  } from "@/assets/data"

  export default {
    mixins: [games],
    data() {
      return {
        platformData,
        myData: [],
        showPic: 'PT',
        timer:null
      };
    },
    created() {
      const $this=this;
      this.timer=setInterval(()=>{
        let _index=$this.platformData.findIndex((item)=>{
          return item.value==$this.showPic
        })
        _index=(_index+1)%$this.platformData.length
        $this.showPic=$this.platformData[_index].value
      },3000)
    },
    watch: {
      platformData(arr) {
        let $this = this
      }
    },
    beforeDestroy(){
      clearInterval(this.timer);
    }
  }

</script>
<style lang="scss" spcoed>
 /*index-casino*/
.wrap {
  margin: 0;
  padding: 0;
  list-style: none;
  ul, li, a, span {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  height: 300px;
  width: 390px;
  overflow: hidden;
  position: relative;
  left: 15px;
  ul {
    position: absolute;
    top: 78px;
    li {
      height: 170px;
    }
  }
  ol {
    width: 375px;
    position: absolute;
    left: 56%;
    top: 53px;
    margin-left: -201px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    li {
      height: 20px;
      // flex: 1;
      // padding: 0 4px;
      color: #000;
      float: left;
      text-align: center;
      margin-right: 5px;
      cursor: pointer;
      &:hover,&.active{
        a{
          color: #9a3131;
        }
      }
      span {
        color: transparent;
        background: transparent;
        display: inline-block;
        position: absolute;
      }
      a {
        font-size: 15px;
        color: #fff;
      }
    }
    .on + a {
      color: #9a3131;
    }
  }
}
.index-casino {
  text-align: center;
  overflow: hidden;
  margin-left: 8px;
  width: 390px;
  background: #282828 url(./images/index-shadow-02.png) center bottom no-repeat;
  padding: 0;
  border-radius: 8px;
  height: 300px;
  h3 {
    color: #c83434;
    margin-bottom: 0;
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -48px;
    color: #f7e6b0;
    margin-top: 20px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }
}

.index-casino-tabs {
  position: relative;
  overflow: hidden;
  height: 28px;
  top: 20px;
  z-index: 10;
  height: 38px;
  li {
    display: inline-block;
    a {
      color: #fff;
      font-size: 15px;
      padding: 3px;
    }
    &.active a {
      color: #c83434;
    }
  }
}

.index-casino-show {
  text-align: center;
}

.index-casino .tab-pane {
  -webkit-animation: rightIn .5s forwards;
  animation: rightIn .5s forwards;
}
.fade{
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
@-webkit-keyframes rightIn {
  from {
    opacity: 0;
    -webkit-transform: translateX(300px);
    transform: translateX(300px);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
