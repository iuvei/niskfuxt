<template>
  <div class="nav-wr">
    <div class="nav">
      <router-link :to="{name:'home'}" class="logo">
        <img v-lazy="'/static/images/base/logo.png'">
      </router-link>
      <div class="fr nav-link">
        <router-link :to="{name:'home'}" class="nav-link-item">
          <span class="iconay ay-shouye"></span>首页
        </router-link>
        <router-link :to="{name:'real'}" class="nav-link-item nav-item">
          <span class="iconay ay-ziyuan2"></span>真人娱乐
          <ul class="menu-nav">
            <li @click="open(Games.href_ag,'AG真人', 900, 640, true, islogin)">
              <i class="logos"><i class="logos AG"></i></i><span>AG真人</span>
            </li>
            <li @click="open(Games.href_bbin,'BBIN真人', 900, 640, true, islogin)">
              <i class="logos "><i class="logos BBIN"></i></i><span>BBIN真人</span>
            </li>
            <li @click="open(Games.href_og,'OG真人', 900, 640, true, islogin)">
              <i class="logos "><i class="logos OG"></i></i><span>OG真人</span>
            </li>
            <li @click="open(Games.href_sunbet,'SUNBET真人', 900, 640, true, islogin)">
              <i class="logos "><i class="logos SUNBET"></i></i><span>申博真人</span>
            </li>
          </ul>
        </router-link>
        <router-link :to="{name:'sportNew'}" class="nav-link-item nav-item">
          <span class="iconay ay-ziyuan3"></span>体育
          <ul class="menu-nav">
            <li @click="open(Games.href_sb_pc,'沙巴体育', 900, 640, true, islogin)">
              <i class="logos "><i class="logos SHABA"></i></i><span>沙巴体育</span>
            </li>
            <!-- <li @click="open(Games.href_pbsport,'平博体育', 900, 640, true, islogin)">
              <i class="logos "><i class="logos PINBO"></i></i><span>平博体育</span>
            </li> -->
            <li @click="open(Games.href_ug_pc,'新皇冠体育', 900, 640, true, islogin)">
              <i class="iconay ay-huangguan1"></i><span>新皇冠体育</span>
            </li>
          </ul>
        </router-link>
        <router-link :to="{name:'gameIndex',params:{type:'PT'}}" class="nav-item nav-link-item">
          <span class="iconay ay-ziyuan11"></span>老虎机
          <ul class="menu-nav">
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'PT'}}">
                <i class="logos "><i class="logos PT"></i></i><span>PT老虎机</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'TGP'}}">
                <i class="logos "><i class="logos TGP"></i></i><span>TGP老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'MG'}}">
                <i class="logos "><i class="logos MG"></i></i><span>MG老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'PNG'}}">
                <i class="logos "><i class="logos PNG"></i></i><span>PNG老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'CQ9'}}">
                <i class="logos "><i class="logos CQ9"></i></i><span>CQ9老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'DT'}}">
                <i class="logos "><i class="logos DT"></i></i><span>DT老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'NT'}}">
                <i class="logos "><i class="logos NT"></i></i><span>NT老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'RTG'}}">
                <i class="logos "><i class="logos RTG"></i></i><span>RTG老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'AMEBA'}}">
                <i class="logos "><i class="logos AMEBA"></i></i><span>阿米巴老虎机</span></router-link>
            </li>
            <li>
              <router-link :to="{name:'gameIndex',params:{type:'BBSLOT'}}">
                <i class="logos "><i class="logos BBIN"></i></i><span>BB老虎机</span></router-link>
            </li>
          </ul>
        </router-link>
        <router-link :to="{name:'chess'}" class="nav-link-item nav-item">
          <span class="iconay ay-qipaizhongcxin"></span>棋牌
          <ul class="menu-nav">
            <li @click="open(Games.href_kyqp,'开元棋牌', 900, 640, true, islogin)">
              <i class="logos "><i class="logos KYQP"></i></i><span>开元棋牌</span>
            </li>
            <li @click="open(Games.href_city761,'761棋牌', 900, 640, true, islogin)">
              <i class="logos "><i class="logos QP761"></i></i><span>761棋牌</span>
            </li>
          </ul>
        </router-link>
        <router-link :to="{name:'lottery'}" class="nav-link-item nav-item">
          <span class="iconay ay-ziyuan4"></span>彩票
          <ul class="menu-nav">
            <li @click="open(Games.href_vr,'VR彩票', 900, 640, true, islogin)">
              <i class="logos "><i class="logos VR"></i></i><span>VR彩票</span>
            </li>
            <li @click="open(Games.href_bbcp,'BB彩票', 900, 640, true, islogin)">
              <i class="logos "><i class="logos BBIN"></i></i><span>BB彩票</span>
            </li>
            <li @click="open(Games.href_ig_ssc,'IG时时彩', 900, 640, true, islogin)">
              <i class="logos "><i class="logos IG"></i></i><span>IG时时彩</span>
            </li>
            <li @click="open(Games.href_ig_hk,'IG香港彩', 900, 640, true, islogin)">
              <i class="logos "><i class="logos IG"></i></i><span>IG香港彩</span>
            </li>
          </ul>
        </router-link>
        <router-link :to="{name:'fish'}" class="nav-link-item">
          <span class="iconay ay-ziyuan"></span>捕鱼
        </router-link>
        <!-- <router-link :to="{name:'chess'}">
          <span class="iconay ay-youxi"></span>VR彩票
        </router-link> -->
        <router-link :to="{name:'promosIndex'}" class="nav-link-item">
          <span class="iconay ay-icon-test"></span>优惠活动
        </router-link>
        <router-link :to="{name:'downloadIndex'}" class="nav-link-item">
          <span class="iconay ay-shouji11"></span>手机投注
        </router-link>
        <router-link :to="{name:'vipIndex'}" class="nav-link-item">
          <span class="iconay ay-vip1"></span>VIP
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Games, platformData } from "@/assets/data";
import { SETTING } from "@/assets/data";
import openWindow from "@/util/openWindow";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      SETTING,
      Games
    };
  },
  props: {},
  computed: {
    ...mapGetters(["islogin"])
  },
  watch: {},
  methods: {
    open(url, title, w, h, needLogin, loginState) {
      openWindow(url, title, w, h, needLogin, loginState);
    }
  },
  created() {},
  activated() {},
  components: {}
};
</script>
<style lang="scss">
.nav-wr {
  height: 88px;
  min-width: 1200px;
  background: rgba(0, 0, 0, 0.9);
  position: sticky;
  top: 41px;
  z-index: 999;

  .nav {
    width: 1200px;
    margin: 0 auto;
  }

  .logo {
    // padding: 15px 0 0 0;
    display: inline-block;
    // &:hover {
    //   opacity: .8
    // }
  }

  .nav-link {
    width: 940px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .nav-link-item {
      text-align: center;
      display: inline-block;
      height: 88px;
      line-height: 26px;
      font-size: 16px;
      color: #807f7d;
      width: 90px;
      // float: left;
      flex: 1;
      position: relative;

      span {
        width: 100%;
        display: block;
        margin: 15px auto 10px;
      }

      .iconay {
        font-size: 35px;
        color: #807f7d;
      }

      &.active,
      &:hover {
        // background: url(./images/navbg.png) no-repeat 0 -1px;
        // background-size: 100%;
        background: #cca352;
        color: #fff;

        .iconay {
          font-size: 35px;
          color: #fff;
        }
      }
    }

    .nav-item {
      .menu-nav {
        position: absolute;
        top: 100%;
        z-index: 1000;
        padding: 10px 10px;
        opacity: 0;
        transition: all 1s;
        height: 0;
        overflow: hidden;
        width: 140% !important;
        box-sizing: content-box !important;
        left: 71%;
        transform: translate(-45%);
        background: rgba(0, 0, 0, 0.9);

        /* Old browsers */
        // background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.9), #cca352 100%); /* FF3.6-15 */
        // background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.9),#cca352 100%); /* Chrome10-25,Safari5.1-6 */
        // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9),#cca352 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(0, 0, 0, 0.9)', endColorstr='#cca352',GradientType=0 ); /* IE6-9 */
        li {
          color: #fff;
          padding: 6px 0;
          font-size: 12px;
          display: flex;

          &:hover {
            color: #cca352;
            .logos {
              .logos {
                color: #cca352;
              }
            }
            .iconay {
              color: #cca352;
            }
          }
          .iconay {
            font-size: 26px;
            padding: 0 14px 0 12px;
            line-height: 20px;
          }
          .logos {
            display: inline-block;
            width: 100%;
            height: 20px;
            overflow: hidden;
            flex: 2;
            .logos {
              background-size: auto 90%;
              background-position: center center;
              background-repeat: no-repeat;
              position: relative;
              top: -5px;
              border-right: 2px solid transparent;
              display: inline-block;
              vertical-align: middle;
              -webkit-box-flex: 1;
              -ms-flex: 1;
              flex: 1;
              color: #fff;
            }
          }

          span {
            flex: 3;
            margin: 0;
            text-align: left;
            line-height: 20px;
            font-size: 13px;
          }

          .AG {
            background-image: url("./images/ag.png");
            left: -44px;
            -webkit-filter: drop-shadow(44px 0);
            filter: drop-shadow(44px 0);
          }

          .BBIN {
            background-image: url("./images/BBIN.png");
            left: -51px;
            -webkit-filter: drop-shadow(51px 0);
            filter: drop-shadow(51px 0);
          }

          .OG {
            background-image: url("./images/OG.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .SUNBET {
            background-image: url("./images/sunbet.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .SHABA {
            background-image: url("./images/shaba.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .PINBO {
            background-image: url("./images/pinbo.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .UG {
            background-image: url("./images/ug.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .KYQP {
            background-image: url("./images/kyqp.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .QP761 {
            background-image: url("./images/qp761.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .VR {
            background-image: url("./images/vr.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .IG {
            background-image: url("./images/ig.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .PT {
            background-image: url("./images/pt.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .TGP {
            background-image: url("./images/tgp.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .MG {
            background-image: url("./images/mg.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .PNG {
            background-image: url("./images/png.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .CQ9 {
            background-image: url("./images/cq9.png");
            left: -51px;
            -webkit-filter: drop-shadow(51px 0);
            filter: drop-shadow(51px 0);
          }

          .DT {
            background-image: url("./images/dt.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .NT {
            background-image: url("./images/nt.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .RTG {
            background-image: url("./images/rtg.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }

          .AMEBA {
            background-image: url("./images/ameba.png");
            left: -47px;
            -webkit-filter: drop-shadow(47px 0);
            filter: drop-shadow(47px 0);
          }
        }

        a {
          display: flex;
          width: 100%;
        }
      }

      &:hover {
        .menu-nav {
          opacity: 1;
          height: auto;
        }
      }
    }
  }
}
</style>
