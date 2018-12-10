<template>
  <div class="container promo-gift">
    <!-- <header class="header-back">
      <a @click="doClick" class="back-link"><i class="iconfont icon-arrow_l"></i></a>
      存款五重好礼
    </header> -->
    <div class="banner">
      <span class="gif"></span>
    </div>
    <div class="decor">
      <div class="holder">
        <div class="col col1">
          <div class="num" id="count_amount">{{money}}</div>
        </div>
        <div class="col col2">
          <div class="num" id="count_people">{{person}}</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="row">
        <div class="title1"></div>
        <div class="c">
          <p>为回馈广大用户，澳盈特推出“新会员专享首存5重好礼”活动，新用户存款即可登录澳盈APP领取礼金，存款越多送越多，赠送比例高达50%</p>
          <p>举例说明：如用户首存金额为1000元，赠红利30%，则用户需要达到的有效投注额为：（1000+300）×22=28600</p>
          <div class="list">
            <div class="item">
              <span class="num num1"></span>
              <div class="item-info">
                <div class="item-row">
                  <h1>首存送30% <span>赠送金额高达5000元</span></h1>
                  <div class="inline">
                    <div class="group group1">
                      <i class="icon-check false"></i>
                      存款≥100元
                    </div>
                    <div class="group">
                      <i class="icon-check false"></i>
                      取款=（存款+优惠）×22倍
                    </div>
                  </div>
                </div>
                <a href="/login.htm?redirect=/promote/Fivesgifts.htm"><span class="hand"></span></a>
              </div>
            </div>
            <div class="item">
              <span class="num num2"></span>
              <div class="item-info">
                <div class="item-row">
                  <h1>续存送35% <span>赠送金额高达1888元</span></h1>
                  <div class="inline">
                    <div class="group group1">
                      <i class="icon-check false"></i>
                      存款≥100元
                    </div>
                    <div class="group">
                      <i class="icon-check false"></i>
                      取款=（存款+优惠）×22倍
                    </div>
                  </div>
                </div>
                <span class="hand"></span>
              </div>
            </div>
            <div class="item">
              <span class="num num3"></span>
              <div class="item-info">
                <div class="item-row">
                  <h1>三存送40% <span>赠送金额高达1888元</span></h1>
                  <div class="inline">
                    <div class="group group1">
                      <i class="icon-check false"></i>
                      存款≥100元
                    </div>
                    <div class="group">
                      <i class="icon-check false"></i>
                      取款=（存款+优惠）×22倍
                    </div>
                  </div>
                </div>
                <span class="hand"></span>
              </div>
            </div>
            <div class="item">
              <span class="num num4"></span>
              <div class="item-info">
                <div class="item-row">
                  <h1>四存送45% <span>赠送金额高达1888元</span></h1>
                  <div class="inline">
                    <div class="group group1">
                      <i class="icon-check false"></i>
                      存款≥100元
                    </div>
                    <div class="group">
                      <i class="icon-check false"></i>
                      取款=（存款+优惠）×22倍
                    </div>
                  </div>
                </div>
                <span class="hand"></span>
              </div>
            </div>
            <div class="item">
              <span class="num num5"></span>
              <div class="item-info">
                <div class="item-row">
                  <h1>五存送50% <span>赠送金额高达1888元</span></h1>
                  <div class="inline">
                    <div class="group group1">
                      <i class="icon-check false"></i>
                      存款≥100元
                    </div>
                    <div class="group">
                      <i class="icon-check false"></i>
                      取款=（存款+优惠）×22倍
                    </div>
                  </div>
                </div>
                <span class="hand"></span>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="row row2">
        <div class="qr-box">
          <h4>下载澳盈手机APP享受乐趣</h4>
          <span class="qr">
            <img src="./images/qr.jpg">
          </span>
          <div class="icons">
            <span class="icon icon1"></span>
            <span class="br"></span>
            <span class="icon icon2"></span>
          </div>
        </div>
        <a :href="Download.app" target="_blank" class="qr-btn">立即安装</a>
        <div class="clear"></div>
      </div>
      <div class="row" :class="{active:isclick}" @click="isclick = !isclick">
        <div class="title2"></div>
        <a href="javascript:void(0);" class="arrow xsrules" :class="{arrow_down:isclick}"></a>

        <div class="rules">
          <p>1. 首次存款指第一笔投注之前的单笔存款金额，申请领取礼金7天内进行存款视为有效。</p>
          <p>2. 本优惠无法与首存及本娱乐场的其他奖励或者促销活动同时享受，另此优惠第一笔首存也无法与洗码优惠共享。 </p>
          <p>3. 优惠礼金请联系在线客服申请，如在优惠卷派发后24小时内未使用优惠券，视玩家自主放弃优惠，不再做添加处理。</p>
          <p>4.
            申请后将派发5张存送优惠券：[新人5重奏一]、[新人5重奏二]、[新人5重奏三]、[新人5重奏四]、[新人5重奏五]，请按照存款顺序进行使用，并且在前5次存款使用，如有一次存款未使用，即当做放弃该优惠，不能再次使用。如果违规使用，将扣除盈利所得以及赠送彩金</p>
          <p>5. 为了公平游戏，您在提取任何现金之前需要有效投注额达到规定的要求即可申请取款；电子游戏平台的特惠游戏（特惠游戏：包括各种桌面卡牌游戏、视频扑克、轮盘、Pontoon游戏、各种
            Craps游戏、赌场战争游戏、娱乐场Hold’em游戏、牌九游戏等 电子游戏）不计算为有效投注额。</p>
          <p>6. 此优惠只适用于拥有一个账户的玩家，相同姓名、电话号码、地址、邮箱、支付方式及IP都只可享受一次。</p>
          <p>7. 为了避免文字的理解差异，澳盈娱乐保留以上方案的解释权。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    SETTING,
    Download,
    Games
  } from "@/assets/data"
  import {
    $localStorage
  } from '@/util/storage'
  export default {
    data() {
      return {
        SETTING,
        Download,
        Games,
        isclick: false,
        money: 10538,
        person: 468,
        time: null
      }
    },
    methods: {
      getData() {
        if (!$localStorage.get('promoMoney')) {
          this.money = 10000 + Math.round(Math.random() * 7000)
          this.person = 500 + Math.round(Math.random() * 70)
          this.time = new Date().getTime();
          $localStorage.set('promoTime', this.time)
        } else {
          if (new Date().getTime() > ($localStorage.get('promoTime') + 3600000)) {
            $localStorage.set('promoTime', new Date().getTime() + 3600000)
            this.money = parseInt($localStorage.get('promoMoney')) + Math.round(Math.random() * 7000)
            this.person = parseInt($localStorage.get('promoPerson')) + Math.round(Math.random() * 70)
          } else {
            this.money = $localStorage.get('promoMoney')
            this.person = $localStorage.get('promoPerson')
          }
        }
        $localStorage.set('promoMoney', this.money)
        $localStorage.set('promoPerson', this.person)
      },
      doClick() {
        // window.location.href = '/'
        if (this.back && typeof this.back == 'function') {
          this.back();
        } else {
          console.log('go-back')
          this.$router.go(-1);
          console.log('=-=-=-=-=-=')
        }
      }
    },
    created() {
      this.getData()
    },
  }

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";


  header h1 {
    line-height: 30px;
  }

  .header-back {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background: $herder-bg;
    color: $main-cl;
    height: r(100);
    text-align: center;
    line-height: r(100);
    @include f(36px);

    .back-link {
      position: absolute;
      height: 100%;
      left: 0;
      width: r(88);
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
    }

    .icon-arrow_l {
      @include f(44px)
    }
  }

  .promo-gift {
    background: url("./images/bg.jpg") no-repeat center top, url("./images/bg2.jpg") repeat center top;
    background-size: 100% auto, 100% auto;
    width: 100%;
    overflow: hidden;
    // padding-top: r(100);

    .banner {
      background: url("./images/01.gif") no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 200px;
      position: relative;

      .gif {
        //   background: url("./images/gif.gif") no-repeat;
        background-size: 100% 100%;
        width: 62px;
        height: 98px;
        display: block;
        position: absolute;
        bottom: 49px;
        left: 114px;
      }
    }

    .decor {
      background: url("./images/02.png") no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 433px;
      position: relative;
      top: -25px;
      margin: 0 auto;

      .holder {
        position: absolute;
        bottom: 93px;
        text-align: center;
        display: flex;
        width: 100%;
      }
    }

    .holder {
      .col {
        width: 145px;
        height: 65px;
        display: inline-block;
        position: relative;
        margin: 0 18px;
        width: 50%;
      }

      .col1 {
        background: url("./images/03.png") no-repeat;
        background-size: 100% 100%;
      }

      .col2 {
        background: url("./images/04.png") no-repeat;
        background-size: 100% 100%;
      }
    }

    .col .num {
      height: 30px;
      width: 100%;
      line-height: 30px;
      @include f(40px);
      color: #ffee00;
      letter-spacing: 6px;
      text-align: center;
      position: absolute;
      bottom: 2px;
      left: 2px;
    }

    .main {
      padding: 0 0 70px;
    }

    .row {
      .title1 {
        background: url("./images/title1.png") no-repeat;
        background-size: 100% 100%;
        width: 198px;
        height: 40px;
        margin-bottom: 18px;
      }

      .c {
        padding: 0 15px;
      }

      p {

        @include f(17px);
        color: #fff;
        line-height: 20px;
      }

      .list {
        margin-top: 45px;
      }

      .item {
        border: 3px solid #00bbff;
        height: 137px;
        border-radius: 80px;
        background: #090099;
        margin-bottom: 34px;
        position: relative;
        box-shadow: 11px 11px 22px rgba(0, 43, 126, 0.7);
      }
    }

    .item {
      .num {
        width: 41px;
        height: 41px;
        display: block;
        margin: 0 auto;
        position: relative;
        top: -26px;
      }

      .num1 {
        background: url("./images/num1.png") no-repeat;
        background-size: 100% 100%;
      }

      .num2 {
        background: url("./images/num2.png") no-repeat;
        background-size: 100% 100%;
      }

      .num3 {
        background: url("./images/num3.png") no-repeat;
        background-size: 100% 100%;
      }

      .num4 {
        background: url("./images/num4.png") no-repeat;
        background-size: 100% 100%;
      }

      .num5 {
        background: url("./images/num5.png") no-repeat;
        background-size: 100% 100%;
      }

      .item-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .item {
    .item-row {
      margin: 0 19px;
      height: 73px;
      border-bottom: 1px solid #00bbff;
      padding: 0 15px 0 20px;

      h1 {
        @include f(28px);
        color: #ffee00;
        padding-top: 17px;
        font-weight: bold;
        line-height: 26px;
        margin-bottom: 2px;

        span {
          @include f(18px);
          color: #00bbff;
          margin-left: 15px;
        }
      }

      .inline {}
    }

    .inline {
      .group {
        display: inline-block;

        @include f(15px);
        color: #3874e3;
      }

      .group1 {
        margin-right: 28px;
        float: left;
      }

      // .group .icon-check {
      //   background: url("./images/icon1.png") no-repeat;
      //   background-size: 100% 100%;
      //   width: 9px;
      //   height: 9px;
      //   display: inline-block;
      //   margin-right: 2px;
      //   &.false {
      //     background: url("./images/icon11.png") no-repeat;
      //     background-size: 100% 100%;
      //     width: 9px;
      //     height: 9px;
      //     display: inline-block;
      //     margin-right: 2px;
      //   }
      // }
    }

    .item-btn {
      display: block;

      @include f(20px);
      color: #0a0099;
      font-weight: bold;
      width: 137px;
      height: 38px;
      text-align: center;
      line-height: 38px;
      margin: 12px auto 0;
      border-radius: 20px;
      background: #ffee00;
      box-shadow: 11px 11px 22px rgba(11, 0, 117, 0.7);
    }

    .item-btn2 {
      background: #0649ce;
    }

    .item-btn3 {
      background: #41557c;
    }

    .hand {
      background: url("./images/icon3.png") no-repeat;
      background-size: 100% 100%;
      width: 69px;
      height: 61px;
      display: block;
      margin: -4px auto 0;
    }
  }

  .promo-gift {
    .row {
      &.active {
        .rules {
          animation: myfirst 1s alternate;
          height: auto;
        }
      }

      .title2 {
        background: url("./images/title2.png") no-repeat;
        background-size: 100% 100%;
        width: 171px;
        height: 40px;
        display: block;
        margin: 0 auto 16px;
      }

      .arrow {
        background: url("./images/icon2.png") no-repeat;
        background-size: 100% 100%;
        width: 31px;
        height: 17px;
        display: block;
        margin: 0 auto;
      }

      .arrow_down {
        background: url("./images/icon2_down.png") no-repeat;
        background-size: 100% 100%;
        width: 31px;
      }
    }

    .rules {
      margin-top: 25px;
      padding: 0 15px;
      overflow: hidden;
      height: 0;
      animation: mySec 1s alternate;
      animation-fill-mode: forwards;
      animation-direction: alternate;

      p {

        @include f(16px);
        color: #fff;
        line-height: 22px;
      }
    }

    .banner h2 {
      @include f(18px);
      color: #ffee00;
      text-shadow: 0 10px 15px #060293;
      font-weight: bold;
      position: absolute;
      bottom: 10px;
      left: 30px;
      z-index: 100;
      font-family: "Microsoft Yahei";
    }

    .row2 {
      margin: 0 60px 63px;
    }
  }

  .qr-box {
    margin: 0 auto 26px;
    border: 3px solid #00bbff;
    background: #090099;
    border-radius: 25px;
    text-align: center;
    padding: 20px 0 7px;

    h4 {

      @include f(21px);
      color: #00bbff;
      margin-bottom: 18px;
      font-weight: bold;
    }

    .qr {
      display: block;
      margin: 0 50px 10px;

      img {
        width: 100%;
        display: block;
      }
    }

    .icons {
      .icon {
        display: inline-block;
        vertical-align: middle;
      }

      // .icon1 {
      //   background: url("./images/icon-android.png") no-repeat;
      //   background-size: 100% 100%;
      //   width: 25px;
      //   height: 29px;
      //   margin: 0 8px;
      // }
      // .icon2 {
      //   background: url("./images/icon-ios.png") no-repeat;
      //   background-size: 100% 100%;
      //   width: 22px;
      //   height: 29px;
      //   margin: 0 8px;
      // }
      .br {
        height: 37px;
        width: 1px;
        background: #a4a1d6;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .row2 .qr-btn {
    display: block;

    @include f(22px);
    color: #0a0099;
    font-weight: bold;
    margin: 0 auto;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border-radius: 38px;
    background: #ffee00;
    box-shadow: 11px 11px 22px rgba(11, 0, 117, 0.7);
  }

  .clear {
    clear: both;
  }

  @keyframes myfirst {
    0% {
      height: 0px
    }

    100% {
      height: 520px
    }
  }

  @keyframes mySec {
    0% {
      height: 520px
    }

    100% {
      height: 0
    }
  }

</style>
