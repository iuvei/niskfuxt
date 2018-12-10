<template>
  <div class="container sports_triplegift">
    <!-- <header class="header-back">
      <a @click="doClick" class="back-link"><i class="iconfont icon-arrow_l"></i></a>
      体育三重大礼
    </header> -->
    <div class="banner">
      <img src="./images/banner.jpg">
      <div class="box_text">
        <div class="box">新老会员专享福利·礼金送不停</div>
        <div class="date_text">活动时间：2018年10月10日-2018年11月31日</div>
      </div>
      <div class="cb_container">
        <div class="chart_bonus">
          <div class="amount">
            <div class="numbers">
              <span class="cur"></span>
              <div id="showAmount">
                <span class="num " :class="`n${num1}`"></span>
                <span class="num " :class="`n${num2}`"></span>
                <span class="num " :class="`n${num3}`"></span>
                <span class="num " :class="`n${num4}`"></span>
                <span class="num " :class="`n${num5}`"></span>
                <span class="num " :class="`n${num6}`"></span>
                <span class="num " :class="`n${num7}`"></span>
                <span class="num " :class="`n${num8}`"></span>
                <span class="num " :class="`n${num9}`"></span>
                <span class="per"></span>
                <span class="num n0"></span>
                <span class="num n0"></span>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <p class="home_text">体育新赛季即将来临，澳盈特推出新赛季体育三重大礼回馈新老会员，礼金送不停，赠送金额高达1888元。</p>
      </div>
    </div>
    <div class="main">
      <div class="border1"></div>
      <section class="sect1">
        <div class="set" v-if="islogin">
          <h1>
            <span>尊敬的贵宾，恭喜您符合"新赛季体</span>
            <br>
            <span>育三重礼"参与资格</span>
          </h1>
          <h2>
            下载澳盈APP存款即可享受星级VIP福利和高额礼金
            <br>
          </h2>
          <div class="btn-con">
            <a class="download" :href="Download.app" target="_blank"></a>
          </div>
        </div>
        <div class="set" v-else>
          <h1>
            <span>尊敬的贵宾，您尚未登录</span>
            <br>
          </h1>
          <h2>
            登录后可查看福利
            <br>
          </h2>
          <div class="btn-con">
            <!-- <a class="btn3" onclick="_checkLogin();"></a> -->
            <router-link class="btn3" :to="{name:'login'}"></router-link>
          </div>
        </div>
      </section>
      <div class="border2"></div>
      <section class="sect2">
        <div class="chart_box">
          <div class="item set1">
            <div class="red_tag">
              <img src="./images/r1.png">
            </div>
            <div class="title">
              <img src="./images/t1.png">
              <div class="caption">新会员首次存款金额达到2000及以上即享受星级VIP福利</div>
            </div>
            <div class="method_list">
              <div class="mitem">
                <div class="method m1">
                  <div class="top"></div>
                  <h3>首次存款2000</h3>
                  <img src="./images/s1_img1.jpg">
                  <p>30天铂金VIP<br>享每日0.7%体育洗码</p>
                </div>
                <div class="method m2">
                  <div class="top"></div>
                  <h3>首次存款5000</h3>
                  <img src="./images/s1_img1.jpg">
                  <p>30天钻石VIP<br>享每日0.8%体育洗码</p>
                </div>
                <div class="method m3">
                  <div class="top"></div>
                  <h3>首次存款10000</h3>
                  <img src="./images/s1_img3.jpg">
                  <p>30天至尊VIP<br>享每日1.0%体育洗码</p>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>

          <div class="item set2">
            <div class="red_tag">
              <img src="./images/r2.png">
            </div>
            <div class="title">
              <img src="./images/t2.png">
              <div class="caption">新会员首次存款500以上并在体育竞技30天内打够相应流水可领取澳盈新赛季欢迎礼金</div>
            </div>
            <div class="method_list">
              <div class="mitem">
                <div class="method m1">
                  <div class="top"></div>
                  <h3>首次存款500</h3>
                  <img src="./images/s2_img1.jpg">
                  <p>*月有效投注额3000</p>
                </div>
                <div class="method m2">
                  <div class="top"></div>
                  <h3>首次存款2000</h3>
                  <img src="./images/s2_img2.jpg">
                  <p>*月有效投注额15000</p>
                </div>
                <div class="method m3">
                  <div class="top"></div>
                  <h3>首次存款5000</h3>
                  <img src="./images/s2_img3.jpg">
                  <p>*月有效投注额30000</p>
                </div>
                <div class="method m4">
                  <div class="top"></div>
                  <h3>首次存款10000</h3>
                  <img src="./images/s2_img4.jpg">
                  <p>*月有效投注额60000</p>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>

          <div class="item set3">
            <div class="red_tag">
              <img src="./images/r3.png">
            </div>
            <div class="title">
              <img src="./images/t3.png">
              <div class="caption">活动期间新老用户在体育竞技每周有效投注额达到2万以上者皆可申领鸿运礼金，如未领取将视作自动放弃</div>
            </div>
            <div class="giveaway_list">
              <div class="gitem">
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>2万</b></span></h3>
                  <img src="./images/s3_img1.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>20万</b></span></h3>
                  <img src="./images/s3_img2.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>50万</b></span></h3>
                  <img src="./images/s3_img3.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>100万</b></span></h3>
                  <img src="./images/s3_img4.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>200万</b></span></h3>
                  <img src="./images/s3_img5.jpg">
                  <p>*流水要求3倍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="border3"></div>
      <section class="sect3">
        <div class="chart_box">
          <div class="item">
            <div class="title">
              <img src="./images/t4.png">
              <div class="caption">澳盈提供三大体育平台，每月上万体育赛事供您体验享乐</div>
            </div>
            <div class="banner_list">
              <div class="bitems shabab_sports">
                <a href="javascript:void(0);" @click="agClick(Games.href_sb_mobile,$event)">
                  <img src="./images/thumb1.jpg">
                </a>
              </div>
              <div class="bitems ag_sports">
                <a href="javascript:void(0);" @click="agClick(Games.href_ug_mobile,$event)">
                  <img src="./images/thumb2.jpg">
                </a>
              </div>
              <div class="clear"></div>
            </div>
          </div>

          <div class="item">
            <div class="rule_list" :class="{active:isclick}" @click="isclick = !isclick">
              <div class="title readmore" :class="{active:isclick}">
                <span class="txt">查看活动规则</span>
              </div>
              <transition>
                <div class="rcon">
                  <ul>
                    <li>此活动不能与首存、存款5重礼等网站其他优惠共享，同时“二、三重礼”中的有效投注额不能重复计算。（举例说明：如A用户某一周总有效投注额为30000，享受188元礼金后，月有效投注额即为30000-20000=10000。）</li>
                    <li>活动期间内，新会员达到条件即可领取一次：领取成功后，礼金将在24小时内添加，二重礼礼金1倍流水即可取款，三重礼礼金3倍流水可取款。</li>
                    <li>“一重礼、二重礼中的有效投注额为一个存款成功后当天算起，往后数30天，“三重礼”中的有效投注额为一个自然周统计周期，<span>北京时间每周一00:00-至每周日23:59</span>，活动期间内，前一周达到要求的用户可在次周申请领取礼金，<span>逾期视为自动放弃</span>。</li>
                    <li>任何和局、取消、作废、退款、赔率低于：欧洲盘1.5、香港盘0.5、马来盘0.5、印尼盘-2.00、美式盘-200的投注和赔率高于：香港盘2.75、欧洲盘3.75及已经使用“提前兑现”功能的注单，不计入有效投注额。</li>
                    <li>对于各种非正常投注，如对冲等行为，一经发现将取消获奖资格，并保留进一步处理的权利。</li>
                  </ul>
                  <div class="note">澳盈娱乐拥有对此次优惠活动的最终解释权和裁决权，也有权在任何时候修改，终止该活动</div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
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
    generateQRCode
  } from "@/api/show"
  import openWindow from '@/util/openWindow'
  import {
    mapGetters
  } from 'vuex'
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
        time: null,
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0,
        num7: 0,
        num8: 0,
        num9: 0,
      }
    },
    methods: {
      open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState)
      },
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      },
      agClick(href, e) {
        if (this.islogin) {
          if (this.isAgent) {
            $alert("代理不能游戏！")
          } else {
            window.open(href);
          }
        } else {
          toast("请先登录！")
        }
        //  return item.method&&item.method(e,item,this)
      },
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
        const beforeNum = 1000000000 + this.money * 1
        const afterNum = beforeNum.toString().slice(1, 10)
        const arr = afterNum.split('')
        console.log(beforeNum)
        this.num1 = arr[0]
        this.num2 = arr[1]
        this.num3 = arr[2]
        this.num4 = arr[3]
        this.num5 = arr[4]
        this.num6 = arr[5]
        this.num7 = arr[6]
        this.num8 = arr[7]
        this.num9 = arr[8]
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
      this.generateQRCode("text")
      this.$bus.$on('getDownloadPage', eventData => {
        this.cur = eventData
      })
      this.getData()
    },
    computed: {
      ...mapGetters(["islogin", "isAgent"])
    },
  }

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";

  .sports_triplegift {
    display: block;
    background: #0c2150;
    overflow: hidden;
    // padding-top: r(100);

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

    .banner {
      display: block;
      position: relative;

      img {
        display: block;
        width: 100%;
      }
    }

    .box_text {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      text-align: center;
      color: #ffcc00;
    }

    .box {
      display: inline-block;
      position: relative;
      padding: 12px 18px;
      line-height: normal;
      @include f(36px);
      color: #ffcc00;
      border: 1px solid #ffcc00;

      &:before {
        content: "";
        width: 42px;
        height: 15px;
        position: absolute;
        top: 17px;
        left: -35px;
        background: url(./images/bdleft.png) center center no-repeat;
        background-size: 100% 100%;
      }

      &:after {
        content: "";
        width: 42px;
        height: 15px;
        position: absolute;
        top: 17px;
        right: -35px;
        background: url(./images/bdright.png) center center no-repeat;
        background-size: 100% 100%;
      }
    }

    .date_text {
      display: block;
      @include f(26px);
      text-align: center;
      padding: 10px 0;
    }

    .chart_bonus {
      display: block;
      width: r(700);
      height: 85.5px;
      background: url(./images/money_chart.png) center top no-repeat;
      margin: 0 auto;
      background-size: 100% 100%;

      .amount {
        display: block;
        padding: 38px 0 0 0;

        /*height:131px;*/
        .numbers {
          display: block;
          text-align: center;
          padding: 0px 0 0 15px;

          span {
            display: block;
            margin: 0 1px 0 0;
            height: 35px;
            float: left;

            &.cur {
              width: r(36);
              background: url(./images/yuan.png) no-repeat;
              background-size: 100% 100%;
            }

            &.com {
              width: 7px;
              background: url(./images/coma.png) no-repeat;
              background-size: 100% 100%;
            }

            &.per {
              width: 7px;
              background: url(./images/period.png) no-repeat;
              background-size: 100% 100%;
            }

            &.num {
              width: r(50);
            }

            &.n0 {
              width: r(50);
              background: url(./images/0.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n1 {
              width: r(50);
              background: url(./images/1.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n2 {
              width: r(50);
              background: url(./images/2.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n3 {
              width: r(50);
              background: url(./images/3.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n4 {
              width: r(50);
              background: url(./images/4.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n5 {
              width: r(50);
              background: url(./images/5.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n6 {
              width: r(50);
              background: url(./images/6.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n7 {
              width: r(50);
              background: url(./images/7.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n8 {
              width: r(50);
              background: url(./images/8.png) no-repeat;
              background-size: 100% 100%;
            }

            &.n9 {
              width: r(50);
              background: url(./images/9.png) no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }

    .cb_container {
      position: absolute;
      width: 100%;
      height: auto;
      bottom: 15%;
      left: 0;
    }

    .main {
      .sect1 {
        background: #1d1723 url(./images/mid.jpg) no-repeat;
        background-size: 100% 100%;
        padding: 15px 0;

        h1 {
          display: block;
          @include f(42px);
          font-weight: bold;
          line-height: normal;
          text-align: center;
          padding: 0 10px;

          span {
            color: #e7d29d;
            background: -webkit-linear-gradient(#ede6d1, #e0bb64);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        h2 {
          display: block;
          @include f(26px);
          color: #fff;
          text-align: center;
          padding: 20px 0;
          line-height: normal;

          span {
            color: #faac01;
          }
        }

        .btn-con {
          display: block;

          .btn1 {
            display: block;
            margin: 0 auto;
            width: 176px;
            height: 45px;
            background: url(./images/btn1.png) no-repeat;
            background-size: 100% 100%;
          }

          .btn2 {
            display: block;
            margin: 0 auto;
            width: 176px;
            height: 45px;
            background: url(./images/btn2.png) no-repeat;
            background-size: 100% 100%;
          }

          .btn3 {
            display: block;
            margin: 0 auto;
            width: 176px;
            height: 45px;
            background: url(./images/btn3.png) no-repeat;
            background-size: 100% 100%;
          }

          .btn12 {
            display: block;
            margin: 0 auto;
            width: 176px;
            height: 45px;
            background: url(./images/btn12.png) no-repeat;
            background-size: 100% 100%;
          }

          .btn7 {
            display: block;
            margin: 0 auto;
            width: 176px;
            height: 45px;
            background: url(./images/btn7.png) no-repeat;
            background-size: 100% 100%;
          }

          .download {
            display: block;
            margin: 0 auto;
            width: 176px;
            height: 45px;
            background: url(./images/download.png) no-repeat;
            background-size: 100% 100%;
          }
        }

        .alert_note {
          display: block;
          padding: 15px 10px 0 10px;
          color: #cc0505;
          @include f(22px);
          line-height: normal;
        }

        .tt1 {
          display: block;
          width: r(120);
          height: 21px;
          margin: 0 auto;
          background: url(./images/tt1.png) no-repeat;
          background-size: 100% 100%;
        }

        .bets_container {
          padding: 0 10px;
        }

        .bets_bar {
          display: block;
          padding: 37px 0px 55px 0px;
          position: relative;
          max-width: 674px;
          margin: 0 auto;
          border-bottom: 1px dashed #5c5663;

          .bar {
            display: block;
            border-radius: 50px;
            height: 9px;
            border: 1px solid #695e6e;
            background: #1d1925;
            padding: 1px;
            position: relative;
            z-index: 10;
            left: 0;
            top: -17px;
          }

          .bar_light {
            display: block;
            /*background:-webkit-radial-gradient(#fff, #faf94d);*/
            box-shadow: 0 0 16px #d76f59;
            border-radius: 50px;
            width: 100%;
            height: 9px;
            position: relative;

            &:after {
              content: "";
              width: 100%;
              height: 7px;
              position: absolute;
              top: 0;
              left: 0;
              box-shadow: inset 0 0 8px #faf94d;
              background: #fff;
              border-radius: 50px;
              border: 1px solid #f8f354;
            }
          }

          .milestone {
            display: table;
            width: 100%;
            height: 1px;
            position: relative;

            .col {
              display: table-cell;
              width: 16.66666666666667%;
              position: relative;
            }

            .spot {
              display: block;
              float: right;
              width: 2px;
              height: 20px;
              border-radius: 2px;
              background: #faf94d;
              box-shadow: 0 0 16px #d76f59;
              position: relative;

              .num {
                position: absolute;
                top: -23px;
                left: -20px;
                text-align: center;
                display: block;
                width: 45px;
                @include f(24px);
                color: #e7d29d;
                background: -webkit-linear-gradient(#ede6d1, #e0bb64);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .disc {
                position: absolute;
                bottom: -50px;
                left: -22px;
                display: block;
                width: 45px;
                height: 46px;
                background: #fff;

                &.d1 {
                  background: url(./images/disc1.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d2 {
                  background: url(./images/disc2.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d3 {
                  background: url(./images/disc3.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d4 {
                  background: url(./images/disc4.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d5 {
                  background: url(./images/disc5.png) no-repeat;
                  background-size: 100% 100%;
                }
              }

              &.active .disc {
                &.d1 {
                  background: url(./images/disc1a.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d2 {
                  background: url(./images/disc2a.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d3 {
                  background: url(./images/disc3a.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d4 {
                  background: url(./images/disc4a.png) no-repeat;
                  background-size: 100% 100%;
                }

                &.d5 {
                  background: url(./images/disc5a.png) no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }

        .colorbox_list {
          display: block;
          padding: 20px 10px;
        }

        .box_list {
          border-bottom: 1px dashed #5c5663;
          max-width: 690px;
          margin: 0 auto;
          padding-bottom: 15px;

          .item {
            display: table;
            width: 100%;
            height: 100%;
            min-height: 100px;
            margin-bottom: 15px;

            &:last-child {
              margin-bottom: 0;
            }

            .col {
              display: table-cell;
              line-height: normal;

              &:nth-of-type(1) {
                color: #fff;
                @include f(26px);
                vertical-align: middle;
                padding: 10px 0 10px 10px;

                span.blue {
                  color: #aae2ff;
                }
              }

              &:nth-of-type(2) {
                width: 16.5px;
              }

              &:nth-of-type(3) {
                width: 100px;
                text-align: center;

                h2 {
                  @include f(32px);
                  display: block;
                  font-weight: bold;
                }

                p {
                  @include f(26px);
                  display: block;
                  color: #fff;
                  margin-top: -20px;

                  b {
                    color: #ffd306;
                    @include f(36px);
                    display: inline-block;
                    margin: 0 5px;
                  }
                }

                .btn4 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn4.png) no-repeat;
                  background-size: 100% 100%;
                }

                .btn5 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn5.png) no-repeat;
                  background-size: 100% 100%;
                }

                .btn6 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn6.png) no-repeat;
                  background-size: 100% 100%;
                }

                .btn7 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn8.png) no-repeat;
                  background-size: 100% 100%;
                }

                .btn8 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn9.png) no-repeat;
                  background-size: 100% 100%;
                }

                .btn9 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn10.png) no-repeat;
                  background-size: 100% 100%;
                }

                .btn10 {
                  display: block;
                  margin: 0 auto;
                  width: 90px;
                  height: 25px;
                  background: url(./images/btn11.png) no-repeat;
                  background-size: 100% 100%;
                }
              }
            }

            &.green .col {
              &:nth-of-type(1) {
                background: url(./images/green_l.png) no-repeat;
                background-size: 100% 100%;
              }

              &:nth-of-type(2) {
                background: url(./images/green_m.png) no-repeat;
                background-size: 100% 100%;
              }

              &:nth-of-type(3) {
                background: url(./images/green_r.png) no-repeat;
                background-size: 100% 100%;
              }
            }

            &.brown .col {
              &:nth-of-type(1) {
                background: url(./images/brown_l.png) no-repeat;
                background-size: 100% 100%;
              }

              &:nth-of-type(2) {
                background: url(./images/brown_m.png) no-repeat;
                background-size: 100% 100%;
              }

              &:nth-of-type(3) {
                background: url(./images/brown_r.png) no-repeat;
                background-size: 100% 100%;
              }
            }

            &.blue .col {
              &:nth-of-type(1) {
                background: url(./images/blue_l.png) no-repeat;
                background-size: 100% 100%;
              }

              &:nth-of-type(2) {
                background: url(./images/blue_m.png) no-repeat;
                background-size: 100% 100%;
              }

              &:nth-of-type(3) {
                background: url(./images/blue_r.png) no-repeat;
                background-size: 100% 100%;
              }
            }

            &.green .col:nth-of-type(3) h2 {
              color: #b6fd9d;
              background: -webkit-linear-gradient(#e9ffd0, #b6fd9d);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            &.brown .col:nth-of-type(3) h2 {
              color: #ff9f58;
              background: -webkit-linear-gradient(#ffdbc1, #ff9f58);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            &.blue .col:nth-of-type(3) h2 {
              color: #7180ce;
              background: -webkit-linear-gradient(#7180ce, #d6ddff);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }

      .sect2 {
        display: block;
        padding: 0 10px;
      }

      .chart_box {
        display: block;
        width: 100%;
        margin: 0 auto;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: -1px;
          left: 0;
          display: block;
          width: 100%;
          height: 2px;
          // background: url(./images/top_highlight.jpg) center top no-repeat;
        }

        .red_tag {
          display: block;
          position: absolute;
          top: -32px;
          left: -10px;
          z-index: 1;

          img {
            width: 48px;
            height: 124px;
          }
        }

        .item {
          display: block;
          width: 100%;
          margin: 0 auto;
          border-bottom: 1px dashed #254f77;
          position: relative;
          z-index: 10;

          &:last-child {
            border-bottom: none;
          }

          .title {
            display: block;
            padding: 20px 0 0 0;
            text-align: center;
            border-bottom: none;
            position: relative;
            z-index: 10;

            img {
              margin: 0 auto;
              display: block;
              width: auto;
              height: 100%;
              max-height: 27px;
              border: none;
            }

            .caption {
              display: block;
              height: 27px;
              line-height: 18px;
              @include f(24px);
              color: #fff;
            }
          }

          .method_list {
            display: block;
            padding: 33px 0 0 0;
            text-align: center;
            position: relative;
            z-index: 10;

            .mitem {
              display: block;
              text-align: center;
              padding-bottom: 50px;

              .method {
                width: 220px;
                height: 100%;
                min-height: 154px;
                padding: 0 0 8px 0;
                border-top: 2px solid #ffbd0f;
                background: #061938;
                display: block;
                float: left;

                .top {
                  display: block;
                  height: 2px;
                  position: relative;
                  top: -2px;
                  left: 0;
                  text-align: center;

                  &:after {
                    content: "";
                    display: inline-block;
                    width: 28.5px;
                    height: 33px;
                    background: #fff;
                    position: relative;
                    top: -17px;
                  }
                }

                &.m1 .top:after {
                  background: url(./images/m1.png) center top no-repeat;
                  background-size: 100% 100%;
                }

                &.m2 .top:after {
                  background: url(./images/m2.png) center top no-repeat;
                  background-size: 100% 100%;
                }

                &.m3 .top:after {
                  background: url(./images/m3.png) center top no-repeat;
                  background-size: 100% 100%;
                }

                &.m4 .top:after {
                  background: url(./images/m4.png) center top no-repeat;
                  background-size: 100% 100%;
                }

                img {
                  max-width: 100%;
                  margin: 0 auto;
                }

                h3 {
                  display: block;
                  color: #cedfff;
                  @include f(26px);
                  font-weight: bold;
                  text-align: center;
                  padding: 17px 0 0 0;
                }

                p {
                  display: block;
                  color: #7fb0ff;
                  @include f(22px);
                  text-align: center;
                }
              }
            }
          }

          .giveaway_list {
            display: block;
            padding: 25px 0 0 0;
            text-align: center;
            position: relative;
            z-index: 10;

            .gitem {
              display: block;
              text-align: center;
              padding-bottom: 30px;

              .giveaway {
                width: 29%;
                height: auto;
                padding: 0 0 8px 0;
                border: 1px solid #1556bf;
                background: #0d316d;
                display: inline-block;
                margin: 1.5%;

                img {
                  display: block;
                  max-width: 100%;
                  margin: 0 auto;
                }

                h3 {
                  display: table;
                  width: 100%;
                  background: #0b2c61;
                  @include f(28px);

                  span {
                    display: table-cell;
                    vertical-align: middle;
                    padding: 8px 0;
                    color: #cedfff;

                    b {
                      color: #ffdf1a;
                    }
                  }
                }

                p {
                  display: block;
                  color: #6cb0f2;
                  @include f(24px);
                  text-align: center;
                }
              }
            }
          }

          .banner_list {
            display: block;
            padding: 15px 10px 30px 10px;

            .bitems {
              width: 470px;
              height: auto;
              display: inline-block;

              &.shabab_sports {
                float: left;
                width: 48%;
                margin: 0 1%;
                background: url(./images/thumb1.jpg) center top no-repeat;
                color: #fd9592;
              }

              &.ag_sports {
                float: left;
                width: 48%;
                margin: 0 1%;
                background: url(./images/thumb2.jpg) center top no-repeat;
                color: #76a2e3;
              }

              img {
                display: block;
                width: 100%;
                height: auto;
              }
            }
          }

          .rule_list {
            display: block;
            padding: 0;
            background: #051537;

            &.active {
              .rcon {
                animation: myfirst 1s alternate;
                height: auto;
              }
            }

            .title {
              display: block;
              text-align: center;
              padding: 20px 0;

              span {
                display: inline-block;
                color: #ffca14;
                @include f(36px);
                position: relative;

                &:after {
                  content: "";
                  margin-left: 5px;
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background: url(./images/arrow.png) no-repeat;
                  background-size: 100% 100%;
                  transform: rotate(180deg);
                }
              }

              &.active span:after {
                content: "";
                margin-left: 5px;
                display: inline-block;
                width: 12px;
                height: 12px;
                background: url(./images/arrow.png) no-repeat;
                background-size: 100% 100%;
                transform: rotate(0deg);
              }
            }

            .rcon {
              overflow: hidden;
              height: 0;
              animation: mySec 1s alternate;
              animation-fill-mode: forwards;
              animation-direction: alternate;
            }

            ul {
              list-style: none;
              display: block;
              margin: 0;
              padding: 0 10px 0 40px;

              li {
                display: block;
                color: #8ca5ce;
                @include f(28px);
                padding-bottom: 12px;
                position: relative;
                line-height: normal;

                &:before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 3px;
                  left: -30px;
                  width: 16px;
                  height: 16px;
                  background: url(./images/ball.png) center top no-repeat;
                }

                span {
                  color: #e8a71f;
                }
              }
            }

            .note {
              display: block;
              text-align: center;
              color: #4677c3;
              @include f(28px);
              padding: 10px 10px 30px 10px;
              line-height: normal;
            }
          }

          &.set1 .method_list .mitem .method {
            width: 32.33%;
            margin-right: 1%;
          }

          &.set2 {
            margin-top: 30px;

            .method_list .mitem .method {
              width: 39%;
              margin: 15px 5% 15px 5%;
              display: inline-block;
              float: none;
            }
          }
        }
      }

      .border1 {
        display: block;
        width: 100%;
        height: 4vh;
        background: url(./images/top.jpg) no-repeat;
        background-size: 100% 100%;
      }

      .border2 {
        display: block;
        width: 100%;
        height: 4vh;
        background: url(./images/bottom.jpg) no-repeat;
        background-size: 100% 100%;
      }

      .border3 {
        display: block;
        width: 100%;
        height: 4vh;
        background: url(./images/bottom2.png) no-repeat;
        background-size: 100% 100%;
      }
    }

    .clear {
      clear: both;
    }

    .no_border {
      border-bottom: none !important;
    }
  }

  .vip_popup {
    display: block;
    z-index: 999999999;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 305px;
    height: 250px;
    background: url(./images/popup_bg.png) no-repeat;
    background-size: 100% 100%;

    h1 {
      display: block;
      padding: 20px 0 10px 0;
      text-align: center;
      @include f(42px);
      font-weight: bold;

      span {
        color: #fac246;
        background: -webkit-linear-gradient(#f5f49f, #fac246);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .close {
      position: absolute;
      z-index: 999999999;
      bottom: -45px;
      left: 135px;
      display: block;
      width: 28px;
      height: 28px;
      background: url(./images/close.png) no-repeat;
      background-size: 100% 100%;
    }

    .text {
      display: block;
      color: #a4c9ff;
      font-weight: 1.2rem;
      text-align: center;
      padding: 5px 0 0 0;
    }

    .btn-con {
      display: block;
      padding: 20px 0;

      .btn {
        display: block;
        width: 106px;
        height: 33px;
        margin: 0 auto;
        background: url(./images/pbtn1.png) no-repeat;
        background-size: 100% 100%;
      }
    }

    .icon-con {
      display: table;
      width: 103px;
      height: 103px;
      background: url(./images/light.png) no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;

      .icon {
        display: table-cell;
        width: 103px;
        height: 103px;
        vertical-align: middle;

        img {
          width: 103px;
          height: 103px;
        }
      }
    }

    &.hide {
      display: none;
    }
  }

  .home_text {
    position: absolute;
    width: r(700);
    word-wrap: break-word;
    word-break: break-all;
    color: #fff;
    display: block;
    line-height: r(30);
    top: 110px;
    left: 15px;
  }

  .remark_text {
    color: #9a2727;
    padding: 15px 0 0 25px;
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
