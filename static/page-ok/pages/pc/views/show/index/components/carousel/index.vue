<template>
  <div class="sports_contest">
    <div class="line"></div>
    <div class="mainItem">
      <div class="gameItem">
        <div class="head casino">
          <p class="title-ch">电子游艺</p>
          <p class="title-en">SLOT</p>
        </div>
        <div class="gamePic">
          <img src="./images/pic1.png" alt="">
          <div class="shadow">
            <router-link :to="{name:'slotgame'}" class="jumpBtn">进入游戏</router-link>
          </div>
        </div>
      </div>
      <div class="gameItem">
        <div class="head live">
          <p class="title-ch">视讯直播</p>
          <p class="title-en">LIVE CASINO</p>
        </div>
        <div class="gamePic">
          <img src="./images/pic2.png" alt="">
          <div class="shadow">
            <router-link :to="{name:'real'}" class="jumpBtn">进入游戏</router-link>
          </div>
        </div>
      </div>
      <div class="gameItem">
        <div class="head sports">
          <p class="title-ch">体育&电竞</p>
          <p class="title-en">SPORTS</p>
        </div>
        <div class="gamePic">
          <img src="./images/pic3.png" alt="">
          <div class="shadow">
            <router-link :to="{name:'sport'}" class="jumpBtn">进入游戏</router-link>
          </div>
        </div>
      </div>
      <div class="gameItem">
        <div class="head chess">
          <p class="title-ch">棋牌游戏</p>
          <p class="title-en">POKER</p>
        </div>
        <div class="gamePic">
          <img src="./images/pic4.png" alt="">
          <div class="shadow">
            <router-link :to="{name:'chess'}" class="jumpBtn">进入游戏</router-link>
          </div>
        </div>
      </div>
      <div class="gameItem">
        <div class="head lottery">
          <p class="title-ch">彩票</p>
          <p class="title-en">LOTTERY</p>
        </div>
        <div class="gamePic">
          <img src="./images/pic5.jpg" alt="">
          <div class="shadow">
            <router-link :to="{name:'lottery'}" class="jumpBtn">进入游戏</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="textItem">
      <div class="item">
        <p class="title">真人娱乐</p>
        <p class="des">
          提供真人百家乐、轮盘、骰宝、龙虎斗等，美女荷官在线发牌，画面真是高清，在网上体验如同亲临赌场的刺激！
        </p>
        <div class="imgItem">
          <router-link class="imgItemList" :to="{name:'real'}">
            <!-- <img src="./images/icon_casino.png" alt=""> -->
            <div class="iconitem iconitem1"></div>
            <p>百家乐</p>
          </router-link>
          <router-link class="imgItemList" :to="{name:'real'}">
            <!-- <img src="./images/icon_21.png" alt=""><br> -->
            <div class="iconitem iconitem2"></div>
            <p>轮盘</p>
          </router-link>
          <router-link class="imgItemList" :to="{name:'real'}">
            <!-- <img src="./images/icon_Suibao.png" alt=""><br> -->
            <div class="iconitem iconitem3"></div>
            <p>骰宝</p>
          </router-link>
        </div>
      </div>
      <div class="item">
        <p class="title">体育游戏</p>
        <p class="des">
          每月提供上万场体育赛事，有足球、篮球、网球、排球等。五彩缤纷的体育赛事，精心设计的投注界面，带给您轻松、恬静的体育投注乐趣！
        </p>
        <div class="imgItem">
          <router-link class="imgItemList" :to="{name:'sport'}">
            <!-- <img src="./images/icon_zuqiu.png" alt=""><br> -->
            <div class="iconitem iconitem4"></div>
            <p>足球</p>
          </router-link>
          <router-link class="imgItemList" :to="{name:'sport'}">
            <!-- <img src="./images/icon_lanqiu.png" alt=""><br> -->
            <div class="iconitem iconitem5"></div>
            <p>篮球</p>
          </router-link>
          <router-link class="imgItemList" :to="{name:'sport'}">
            <!-- <img src="./images/icon_paiqiu.png" alt=""><br> -->
            <div class="iconitem iconitem6"></div>
            <p>排球</p>
          </router-link>
        </div>
      </div>
      <div class="item">
        <p class="title">棋牌游戏</p>
        <p class="des">
          百人牛牛、斗地主、二八杠等，游戏丰富，画面精美奖品多多，带给您一夜致富的机会及空前的游戏体验！
        </p>
        <div class="imgItem">
          <router-link class="imgItemList" :to="{name:'chess'}">
            <!-- <img src="./images/icon_doudizu.png" alt=""><br> -->
            <div class="iconitem iconitem7"></div>
            <p>斗地主</p>
          </router-link>
          <router-link class="imgItemList" :to="{name:'chess'}">
            <!-- <img src="./images/icon_niuniu.png" alt=""><br> -->
            <div class="iconitem iconitem8"></div>
            <p>百人牛牛</p>
          </router-link>
          <router-link class="imgItemList" :to="{name:'chess'}">
            <!-- <img src="./images/icon_dezhou.png" alt=""><br> -->
            <div class="iconitem iconitem9"></div>
            <p>德州扑克</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Games
  } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        Games
      }
    },
    methods: {
      open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState)
      }
    },
    created() {

    },
    computed: {
      ...mapGetters(["islogin"])
    }
  }

</script>
<style lang="scss" scoped>
  .sports_contest {
    position: relative;
    overflow: hidden;
    width: 1200px;
    height: 744px;
    background: #191919;
    margin: 0 auto;
    .line{
      background: url('./images/line.png') no-repeat;
      background-position: center;
      background: cover;
      height: 20px;
      width: 100%;
      margin-bottom: 20px;
    }
    .mainItem{
      display: flex;
      justify-content: space-between;
      width: 100%;      
      .gameItem{
        width: 219px;
        cursor: pointer;
        .head{
          width: 100%;
          height: 72px;
          color: #e2b85a;
          padding-top: 8px;
          padding-left: 72px;
          padding-right: 30px;
          text-align: center;
          border: 2px solid #3a3a3a;
          .title-ch {
            font-size: 20px;
            width: 120px;
          }
          .title-en {
            font-size: 16px;
            width: 120px;
          }
          &.casino{
            background:url('./images/icon_Slot.png') no-repeat 30px 18px;
          }
          &.live{
            background:url('./images/icon_live.png') no-repeat 30px 18px;
          }
          &.sports{
            background:url('./images/icon_sports.png') no-repeat 30px 14px;
          }
          &.chess{
            background:url('./images/icon_poker.png') no-repeat 30px 14px;
          }
          &.lottery{
            background:url('./images/icon_lottery.png') no-repeat 40px 18px;
          }
        }
        .gamePic{
          margin-top: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: url('./images/bg.png') no-repeat;
          background-size: cover;
          background-position: center top;
          height: 320px;
          img{
            width: 90%;
            display: block;
          }
          .jumpBtn{
            background: url('./images/btn.png') no-repeat;
            text-align: center;
            width: 105px;
            height: 35px;
            // opacity: 0;
            display: none;
            line-height: 35px;
            transition: all 0.5s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
        &:hover{
          .gamePic{
            .shadow{
              background: rgba($color: #000000, $alpha: 0.8);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .jumpBtn{
              display: block;
              transition: all 0.5s;
            }
          }
          .head {
            color: #fefb9b;
             &.casino{
              background:url('./images/icon_Slot1.png') no-repeat 30px 18px;
            }
            &.live{
              background:url('./images/icon_live1.png') no-repeat 30px 18px;
            }
            &.sports{
              background:url('./images/icon_sports1.png') no-repeat 30px 14px;
            }
            &.chess{
              background:url('./images/icon_poker1.png') no-repeat 30px 14px;
            }
            &.lottery{
              background:url('./images/icon_lottery1.png') no-repeat 40px 18px;
            }
          }
        }
      }
    }
    .textItem{
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      .item{
        width: 25%;
        .title{
          font-size: 24px;
          font-family: "PingFangSC";
          text-align: center;
          line-height: 1.2;
          color: #fff;
          margin-bottom: 10px;
        }
        .des{
          font-size: 12px;
          font-family: "PingFangSC";
          line-height: 1.2;
          color: #565656;
          text-align: center;
          margin-bottom: 10px;
          height: 50px;
        }
        
        .imgItem{
          display: flex;
          justify-content: space-between;
          .imgItemList{
            cursor: pointer;
            .iconitem {
              width: 72px;
              height: 72px;
              transition: all .5s;
              &.iconitem1{
                background: url(./images/icon_casino.png) no-repeat;
              }
              &.iconitem2{
                background: url(./images/icon_21.png) no-repeat;
              }
              &.iconitem3{
                background: url(./images/icon_Suibao.png) no-repeat;
              }
              &.iconitem4{
                background: url(./images/icon_zuqiu.png) no-repeat;
              }
              &.iconitem5{
                background: url(./images/icon_lanqiu.png) no-repeat;
              }
              &.iconitem6{
                background: url(./images/icon_paiqiu.png) no-repeat;
              }
              &.iconitem7{
                background: url(./images/icon_doudizu.png) no-repeat;
              }
              &.iconitem8{
                background: url(./images/icon_niuniu.png) no-repeat;
              }
              &.iconitem9{
                background: url(./images/icon_dezhou.png) no-repeat;
              }
            }
            img{
              width: 100%;
            }
            p{
              font-size: 12px;
              font-family: "PingFangSC";
              line-height: 1.2;
              color: #565656;
              text-align: center;
              margin-top: 5px;
            }
            &:hover {
              p{
                color: #fefb9b;
              } 
              .iconitem {
                transform: rotate(180deg);
                &.iconitem1{
                  background: url(./images/icon_casino2.png) no-repeat;
                }
                &.iconitem2{
                  background: url(./images/icon_21_2.png) no-repeat;
                }
                &.iconitem3{
                  background: url(./images/icon_Suibao2.png) no-repeat;
                }
                &.iconitem4{
                  background: url(./images/icon_zuqiu2.png) no-repeat;
                }
                &.iconitem5{
                  background: url(./images/icon_lanqiu2.png) no-repeat;
                }
                &.iconitem6{
                  background: url(./images/icon_paiqiu2.png) no-repeat;
                }
                &.iconitem7{
                  background: url(./images/icon_doudizu2.png) no-repeat;
                }
                &.iconitem8{
                  background: url(./images/icon_niuniu2.png) no-repeat;
                }
                &.iconitem9{
                  background: url(./images/icon_dezhou2.png) no-repeat;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
