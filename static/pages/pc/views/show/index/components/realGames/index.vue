<template>
  <div class="col-2-1 index-item index-live">
    <div class="index-img">
      <img src="./images/index-live.png">
    </div>
    <div class="index-text">
      <h4>
        <span></span>真人娱乐场</h4>
      <p>我们囊括亚洲最全面的游戏平台，包括AG、BBIN、OG、申博等主流平台，无论您是东方多玩法百家乐爱好者，还是西方传统游戏爱好者，您都能在澳盈娱乐找到最合适您的游戏平台！</p>
    </div>
    <div class="cover-bg">
      <ul>
        <li class="col-4-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="1" href="javascript:void(0)" data-apitype="1" starttime="1487559158000"
            endtime="1487606399000" @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">
            <div class="live-item">
              <h5>女优厅 - AG</h5>
              <span>
                <img src="./images/index-con1-1-img-ag.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-4-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="16" href="javascript:void(0)" data-apitype="1" starttime="1490269119000"
            endtime="1490284799000" @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">
            <div class="live-item">
              <h5>富贵厅 - BBIN</h5>
              <span>
                <img src="./images/index-con1-1-img-bbin.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-4-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="7" href="javascript:void(0)" data-apitype="1" starttime="1493693159000"
            endtime="1493740800000" @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">
            <div class="live-item">
              <h5>东方厅 - OG</h5>
              <span>
                <img src="./images/index-con1-1-img-og.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-4-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="10" href="javascript:void(0)" data-apitype="1" starttime="1499224275000"
            endtime="1499270400000" @click="open(Games.href_sunbet, '申博真人', 900, 640, true, islogin)">
            <div class="live-item">
              <h5>太阳厅 - SUN</h5>
              <span>
                <img src="./images/index-con1-1-img-shenbo.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <!-- <li class="col-5-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="9" href="javascript:void(0)" data-apitype="1" starttime="1484390977000"
            endtime="1484409599000" onclick="apiLogin(9,'',1)">
            <div class="live-item">
              <h5>女优厅 - AG</h5>
              <span>
                <img src="./images/index-con1-1-img-ag.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-5-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="17" href="javascript:void(0)" data-apitype="1" onclick="apiLogin(17,'',1)">
            <div class="live-item">
              <h5>澳门厅 - SA</h5>
              <span>
                <img src="./images/index-con1-1-img-sa.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-5-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="5" href="javascript:void(0)" data-apitype="1" onclick="apiLogin(5,'',1)">
            <div class="live-item">
              <h5>锦秀厅 - GD</h5>
              <span>
                <img src="./images/index-con1-1-img-gd.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-5-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="24" href="javascript:void(0)" data-apitype="1" onclick="apiLogin(24,'',1)">
            <div class="live-item">
              <h5>欧洲厅 - OPUS</h5>
              <span>
                <img src="./images/index-con1-1-img-opus.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li>
        <li class="col-5-1">
          <a class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" data-api="33" href="javascript:void(0)" data-apitype="1" onclick="apiLogin(33,'',1)">
            <div class="live-item">
              <h5>太阳厅 - SUN</h5>
              <span>
                <img src="./images/index-con1-1-img-shenbo.png">
              </span>
            </div>
          </a>
          <span class="lightTop">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightRight">
            <img src="./images/index-con1-1-light-2.png">
          </span>
          <span class="lightBottom">
            <img src="./images/index-con1-1-light-1.png">
          </span>
          <span class="lightLeft">
            <img src="./images/index-con1-1-light-2.png">
          </span>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
  import { Games,Download } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        Games,
        Download,
        href:window.location.href
      };
    },
    methods: {
      open(url, title, w, h, needLogin, loginState){
        openWindow(url, title, w, h, needLogin, loginState)
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },
  }

</script>
<style lang="scss" scoped>
  .index-live {
    background: url('./images/index-shadow-01.png') center bottom no-repeat;
    &:hover{
        .cover-bg {
            opacity: 1;
        }
    }
  }

  .index-item {
    height: 310px;
    margin-bottom: 10px;
    position: relative;
    .index-img {
      height: 300px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        vertical-align: middle;
        border: 0;
      }
    }
    .index-text {
      width: 50%;
      position: absolute;
      top: 0;
      padding: 15px 30px 10px 40px;
      h4 {
        color: #f7e6b0;
        margin-bottom: 5px;
        position: relative;
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
        font-family: inherit;
        line-height: 1.1;
        span {
          background-image: url(./images/icon-index-1.png);
          width: 19px;
          height: 19px;
          display: inline-block;
          left: -25px;
          top: -1px;
          position: absolute;
        }
      }
      p {
        line-height: 20px;
        letter-spacing: .5px;
        color: #fff;
        margin: 0;
      }
    }
    .cover-bg {
      height: 300px;
      position: absolute;
      top: 0;
      border-radius: 8px;
      overflow: hidden;
      width: 630px;
      background: url(./images/index-live-h.png);
      opacity: 0;
      ul {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        .col-4-1,.col-5-1{
            position: relative;
            min-height: 1px;
            box-sizing: border-box;
            float: left;
        }
        .col-4-1{
            width: 25%;
        }
        .col-5-1{
            width: 20%;
        }
        >li {
          height: 100%;
          .live-item {
            position: relative;
            overflow: hidden;
            height: 100%;
            border-right: 1px solid rgba(0, 0, 0, 0.7);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(0, 0, 0, 0.7);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            border-right: 1px solid #060503 \9;
            border-left: 1px solid #2f2d26 \9;
            border-top: 1px solid #060503 \9;
            border-bottom: 1px solid #2f2d26 \9;
            h5 {
              padding: 14px;
              color: #f7e6b0;
            }
            span {
              position: absolute;
              right: -4px;
              bottom: 39%;
            }
          }
          padding: 0;
          &:hover .live-item span {
            display: inline-table;
            right: initial;
            left: 50%;
            transform: translateX(-50%);
            -o-transition: all .3s linear;
            -webkit-transition: all .3s linear;
            -ms-transition: all .3s linear;
            -moz-transition: all .3s linear;
            transition: all .3s linear;
          }
          .lightBottom,
          .lightLeft,
          .lightRight {
            position: absolute;
            z-index: 1;
            opacity: 0;
          }
          .lightTop {
            position: absolute;
            z-index: 1;
            opacity: 0;
            top: -11px;
            left: 0;
            width: 40px;
          }
          .lightRight {
            bottom: 0;
            right: -1px;
            height: 40px;
          }
          .lightBottom {
            bottom: -7px;
            right: 0;
            width: 40px;
          }
          .lightLeft {
            top: 0;
            left: -1px;
            height: 40px;
          }
          &:hover span {
            &.lightTop {
              animation: .3s linear topMove;
            }
            &.lightRight {
              animation: .3s linear rightMove;
            }
            &.lightBottom {
              animation: .3s linear bottomMove;
            }
            &.lightLeft {
              animation: .3s linear leftMove;
            }
          }
        }
      }
    }
  }
@keyframes topMove {
  0% {
    left: 0;
    opacity: 0;
  }

  50% {
    left: 50%;
    opacity: 1;
  }

  100% {
    left: 100%;
    opacity: 0;
  }
}


@keyframes rightMove {
  0% {
    bottom: 0;
    opacity: 0;
  }

  50% {
    bottom: 50%;
    opacity: 1;
  }

  100% {
    bottom: 100%;
    opacity: 0;
  }
}


@keyframes bottomMove {
  0% {
    right: 0;
    opacity: 0;
  }

  50% {
    right: 50%;
    opacity: 1;
  }

  100% {
    right: 100%;
    opacity: 0;
  }
}


@keyframes leftMove {
  0% {
    top: 0;
    opacity: 0;
  }

  50% {
    top: 50%;
    opacity: 1;
  }

  100% {
    top: 100%;
    opacity: 0;
  }
}
</style>
