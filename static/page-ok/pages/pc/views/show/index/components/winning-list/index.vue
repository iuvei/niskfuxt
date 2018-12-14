<template>
  <div class="winning-box">
    <div class="contain">
      <div class="jackpot-box">
        <div class="numItem">
          <span class="num" :class="`num${toClass(num)}`" v-for="(num,i) in total" :key="i">{{num}}</span>
        </div>
      </div>
      <!-- <div class="item-box" :class="{animates:myData.length>5}" :style="animation">
        <div v-for="item in myData" :key="item.id" class="item">
          <img :src="item.link" alt="">
          <div class="rightItem">
            <p>恭喜玩家 <span class="username">{{item.userName}}</span></p>
            <p>刚刚赢取 <span class="money">{{item.prize}}元</span></p>
            <p><span class="gameName">{{item.gameName}}</span></p>
          </div>
        </div>

        <div v-for="item in myData" :key="item.id" class="item">
          <img :src="item.link" alt="">
          <div class="rightItem">
            <p>恭喜玩家 <span class="username">{{item.userName}}</span></p>
            <p>刚刚赢取 <span class="money">{{item.prize}}元</span></p>
            <p><span class="gameName">{{item.gameName}}</span></p>
          </div>
        </div>
      </div> -->
      <div class="item-box">
        <div v-for="item in myData" :key="item.id" class="item" :class="{animates:myData.length>2}" :style="animation">
          <img :src="item.link" alt="">
          <div class="rightItem">
            <p>恭喜玩家 <span class="username">{{item.userName}}</span></p>
            <p>刚刚赢取 <span class="money">{{item.prize}}元</span></p>
            <p><span class="gameName">{{item.gameName}}</span></p>
          </div>
        </div>
        <div v-for="item in myData" :key="item.id" class="item" :class="{animates:myData.length>2}" :style="animation">
          <img :src="item.link" alt="">
          <div class="rightItem">
            <p>恭喜玩家 <span class="username">{{item.userName}}</span></p>
            <p>刚刚赢取 <span class="money">{{item.prize}}元</span></p>
            <p><span class="gameName">{{item.gameName}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getCarouselListAll
  } from "@/api/show";
  import {
    jackpot
  } from '@/controls/shows/jackpot'
  export default {
    mixins: [jackpot],
    data() {
      return {
        myData: [],
        id: 0,
        animation: {}
      };
    },
    watch: {
      myData(val) {
        this.animation = {
          "animation-duration": val.length * 2.5 + 's',
          "-webkit-animation-duration": val.length * 2.5 + 's'
        }
      }
    },
    methods: {},
    beforeDestroy() {},
    created() {
      getCarouselListAll().then(res => {
        if (res.success) {
          this.myData = res.data;
        }
      });
      this.getjackpot('cny').then(res => {
      }).catch(err => [
        console.log(err)
      ])
    }
  };

</script>
<style lang="scss" scoped>

  .winning-box {
    width: 100%;
    // height: 107px;
    background: #101010;

    .contain {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      padding: 15px 0;
      overflow: hidden;
      position: relative;
      min-height: 126px;

      .jackpot-box{
        background: url('./images/bg.jpg') no-repeat;
        background-size: contain;
        background-position: top center;
        width: 900px;
        position: relative;
        .numItem{
          position: absolute;
          left: 25%;
          top: 50%;
          transform: translateY(-50%);
        }
        .num{
          color: #fef694;
          font-size: 46px;
          line-height: 1.4;
          width: 47px;
        }
        @for $i from 0 through 9 {
          .num#{$i} {
            // background: url(./images/bg_no.png) no-repeat center center / 100% 100%;
            margin: 0 2px;
            display:inline-block;
            background: #191919;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 0 1px #000;
            padding:  0 10px;
            // padding: r(10) 0;
          }
        }
      }

      .item-box {
        // display: flex;
        width: 270px;
        margin-left: 20px;
        height: 126px;
        background: #000;
        border: 2px solid #3a3a3a;
        overflow: hidden;
        padding: 10px;

      }

      .item {
        display: inline-flex;
        min-width: 200px;
        margin-bottom: 10px;

        img {
          width: 67px;
          height: 67px;
          margin-right: 10px;
        }

        .rightItem {
          color: #939393;

          .username {
            color: #fff;
          }

          .money {
            color: #ea0f26;
          }

          .gameName {
            color: #f2a50f;
          }
        }
      }
    }

    .animates {
      position: relative;
      animation: animations 20s linear infinite;
    }
  }

  @keyframes animations {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-1150%);
    }
  }

</style>
