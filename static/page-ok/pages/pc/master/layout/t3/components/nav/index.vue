<template>
  <div class="menu-navbar">
    <nav class="z-depth-0">
      <div class="navWrapper container cfx">
        <div class="navContent">
          <ul class="center">
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'slotgame'}" :to="{name: 'gameIndex',params:{type:'PT2TIGER'}}">
                <p class="cn">电子游艺</p>
                <p class="en">SLOTS</p>
              </router-link>
              <ul class="gameList">
                <li class="gamePlatform" v-for="item in platformData" :key="item.value">
                  <router-link :to="{name:'gameIndex',params:{type:item.value}}">{{item.name}}</router-link>
                </li>
              </ul>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'real'}" :to="{name: 'real'}">
                <p class="cn">真人娱乐</p>
                <p class="en">CASINO</p>
              </router-link>
              <ul class="gameList">
                <li class="gamePlatform" v-for="item in realData" :key="item.value">
                  <!-- <router-link :to="{name:'real'}">{{item.name}}</router-link> -->
                  <a href="javascript:void(0);" @click="open(item.url,item.name, 900, 640, true, islogin)">{{item.name}}</a>
                </li>
              </ul>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'sport'}" :to="{name: 'sport'}">
                <p class="cn">体育&电竞</p>
                <p class="en">SPORTS</p>
              </router-link>
              <ul class="gameList">
                <li class="gamePlatform" v-for="item in sportData" :key="item.value">
                  <!-- <router-link :to="{name:'sport'}">{{item.name}}</router-link> -->
                  <a href="javascript:void(0);" @click="open(item.url,item.name, 900, 640, true, islogin)">{{item.name}}</a>
                </li>
              </ul>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'lottery'}" :to="{name:'lottery'}">
                <p class="cn">彩票游戏</p>
                <p class="en">LOTTERY</p>
              </router-link>
              <ul class="gameList">
                <li class="gamePlatform" v-for="item in lotteryData" :key="item.value">
                  <!-- <router-link :to="{name:'lottery'}">{{item.name}}</router-link> -->
                  <a href="javascript:void(0);" @click="open(item.url,item.name, 900, 640, true, islogin)">{{item.name}}</a>
                </li>
              </ul>
            </li>
            <li class="li">
              <router-link class="logoLi router" ui-sref="logo" :class="{'active': currentState == 'home'}" :to="{name: 'home'}">
                <img src="./images/logo.png" alt="">
              </router-link>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'fish'}" :to="{name:'fish'}">
                <p class="cn">捕鱼游戏</p>
                <p class="en">FISH</p>
              </router-link>
              <ul class="gameList">
                <li class="gamePlatform" v-for="item in fishData" :key="item.value">
                  <!-- <router-link :to="{name:'fish'}">{{item.name}}</router-link> -->
                  <a href="javascript:void(0);" @click="open(item.url,item.name, 900, 640, true, islogin)">{{item.name}}</a>
                </li>
              </ul>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'chess'}" :to="{name:'chess'}">
                <p class="cn">棋牌游戏</p>
                <p class="en">POKER</p>
              </router-link>
              <ul class="gameList">
                <li class="gamePlatform" v-for="item in chessData" :key="item.value">
                  <a href="javascript:void(0);" @click="open(item.url,item.name, 900, 640, true, islogin)">{{item.name}}</a>
                </li>
                <li class="gamePlatform">
                  <router-link :to="{name:'chessHall',params:{type:'MWQP'}}">大满贯棋牌</router-link>
                </li>
              </ul>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'promo'}" :to="{name: 'promosIndex'}">
                <p class="cn">优惠活动</p>
                <p class="en">PROMOTION</p>
              </router-link>
            </li>
            <li class="li">
              <router-link class="router" :class="{'active': currentState == 'vip'}" :to="{name:'vipIndex'}">
                <p class="cn">VIP专享</p>
                <p class="en">VIP</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <annunciate></annunciate>
  </div>
</template>
<script>
  import {
    SETTING,
    Games,
    platformData
  } from "@/assets/data";
  import openWindow from "@/util/openWindow";
import { mapGetters } from "vuex";
  import annunciate from 'pc/components/annunciate'
  export default {
    name: "",
    data() {
      return {
        SETTING,
        Games,
        currentState: '',
        platformData,
        realData: [{
            name: "AG真人",
            value: 'AG',
            url:Games.href_ag
          },
          {
            name: "OG真人",
            value: 'OG',
            url:Games.href_og
          },
          {
            name: "BBIN真人",
            value: 'BBIN',
            url:Games.href_bbin
          },
        ],
        sportData: [{
            name: "沙巴体育",
            value: 'SHABA',
            url:Games.href_sb_pc
          },
          {
            name: "BTI体育",
            value: 'BTI',
            url:Games.href_bti
          },
          {
            name: "新皇冠体育",
            value: 'UG',
            url:Games.href_ug_pc
          },
          {
            name: "泛亚电竞",
            value: 'AVIA',
            url:Games.href_avia
          },
        ],
        lotteryData: [{
            name: "VR彩票",
            value: 'VR',
            url:Games.href_vr
          },
          {
            name: "BBIN彩票",
            value: 'BBIN',
            url:Games.href_bbcp
          },
          {
            name: "IG时时彩",
            value: 'IG',
            url:Games.href_ig_ssc
          },
          {
            name: "IG香港彩",
            value: 'IG1',
            url:Games.href_ig_hk
          },
        ],
        chessData: [{
            name: "761棋牌",
            value: '761City',
            url:Games.href_city761
          },
          {
            name: "开元棋牌",
            value: 'KYQP',
            url:Games.href_kyqp
          },
        ],
        fishData: [{
            name: "AG捕鱼",
            value: 'AG',
            url:Games.href_fish_ag
          },
          {
            name: "大满贯捕鱼",
            value: 'MW',
            url:Games.href_fish_mw
          },
        ],
      };
    },
    props: {},
    computed: {
      ...mapGetters(["islogin"])
    },
    watch: {},
    methods: {
      checkLogin(e) {
        if (!this.$store.getters.islogin) {
          e.preventDefault();
          toast("请先登录")
          this.$store.commit("SHOW_LOGIN", true);
          return false;
        }
      },
      errTips() {
        toast("敬请期待！")
      },
      open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState);
      }
    },
    created() {
    },
    activated() {},
    components: {annunciate}
  };

</script>
<style lang="scss" scoped>
  .menu-navbar {
    height: 90px;
    // background-color: #000;
    position: absolute;
    top: 91px;
    z-index: 999;
    width: 100%;

    .navWrapper {
      background: url('./images/navbg.png') no-repeat;
      background-size: cover;
      background-position: top center;
      min-width: 1200px;
      position: relative;
      height: 81px;

      .navContent {
        width: 88%;
        margin: 0 auto;

        .logoLi {
          left: -5px;
          top: -50px !important;
          z-index: 9999;

          img {
            height: 110px;
          }
        }
      }
    }

    .center {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;

      .ddl-down {
        margin-top: 32px;
        margin-left: -32px;
        position: absolute;
        display: none;
      }


      .li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        height: 50px;

        .en {
          font-size: 12px;
          font-family: "Microsoft YaHei";
          color: rgb(105, 105, 105);
          line-height: 1.2;
        }

        .cn {
          color: #fff;
          line-height: 1.7;
        }

        .gameList {
          transition: all 0.5s;
          position: absolute;
          top: 60px;
          border: 2px solid transparent;
          left: 5px;

          .gamePlatform {
            text-align: center;
            // display: none;
            opacity: 0;
            width: 100%;
            transition: all 0.5s;

            a {
              padding: 0;
              height: 0;
              transition: all 0.5s;
              line-height: 0;
              border-bottom: 1px dotted rgba($color: #fff, $alpha: 0.15);
              width: 100%;
              margin: 0 auto;
              display: none;
              &:hover{
                color: #fff987;
              }
            }
          }
        }

        &:hover {

          .en,
          .cn {
            color: #fff987;
          }

          .gameList {
            visibility: visible;
            display: block;
            background: rgba($color: #000, $alpha: 0.5);
            border: 2px solid #ffd053;
            position: absolute;
            top: 60px;
            transition: all 0.5s;
            height: auto;
            width: 90%;
            color: #fff;
            left: 5px;

            &::before {
              content: '';
              border-style: solid;
              border-width: 10px;
              border-color: transparent transparent #ffd053 transparent;
              position: absolute;
              top: -20px;
              left: 50%;
              transform: translateX(-50%);
            }

            .gamePlatform {
              // display: block;
              opacity: 1;
              transition: all 0.5s;

              a {
                padding: 0;
                height: 32px;
                line-height: 32px;
                border-bottom: 1px dotted rgba($color: #fff, $alpha: 0.15);
                width: 100%;
                margin: 0 auto;
                display: block;
                transition: all 0.5s;
                
              }

              &:hover{
                a{
                  color: #fff987;
                }
              }
            }

          }

          .downtriangle {
            opacity: 0;
          }
        }

        .downtriangle {
          opacity: 1;
          width: 0;
          height: 0;
          border-width: 5px;
          border-style: solid;
          border-color: #787878 transparent transparent transparent;
          position: absolute;
          top: 47%;
          right: 11px;
        }

        .center {
          visibility: hidden;
          opacity: 0;
          display: none;
          position: absolute;
          transition: all .5s ease;
          margin-top: 35px;
          width: 100%;
          height: 140px;
          z-index: 999;

          &:hover {
            visibility: visible;
            opacity: 1;
            display: inline-block;
          }

          .li {
            height: 50px;
            clear: both;
            width: 100%;
            top: 11px;

            .router {
              height: 50px !important;
              background-color: #161620;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .router {
          left: 0;
          right: 0;
          margin: 0 auto;
        }

        &:not(.brand-logo-li) .router {
          color: #787878;
          font-size: 14px;
          width: 105px;
          height: 50px;
          position: absolute;
          top: 15px;

          &.active,
          &:hover {
            color: #3ec1fe;
          }

          &.active span,
          &:hover span {
            border-bottom: 1px solid;
            padding-bottom: 0.5rem;
          }

          &.active:after,
          &:hover:after {
            left: 0;
            width: 100%;
          }

          &:after {
            content: "";
            position: absolute;
            top: 90%;
            left: 50%;
            width: 0;
            height: 2px;
            margin-top: 4px;
            transition: all 0.3s ease;
          }
        }
      }
    }

  }

</style>
