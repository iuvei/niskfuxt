<template>
  <div class="container sports_triplegift">
    <div class="banner">
      <div class="" style="font-weight: bolder;position: relative;top: 550px;text-align: center;color: rgb(255, 211, 34)">活动时间：2018年10月10日
        - 2018年11月31日</div>
    </div>
    <div class="main">
      <section class="p56 ">
        <div class="chart_bonus">
          <div class="amount">
            <div class="numbers">
              <span class="cur"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num1}`"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num2}`"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num3}`"></span>
              <span class="com"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num4}`"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num5}`"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num6}`"></span>
              <span class="com"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num7}`"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num8}`"></span>
              <span class="num sportstriplegift_amount_int " :class="`n${num9}`"></span>
              <span class="per"></span>
              <span class="num sportstriplegift_amount_decimal n0"></span>
              <span class="num sportstriplegift_amount_decimal n0"></span>
              <div class="clear"></div>
            </div>
            <div class="text_note">体育新赛季即将来临，澳盈特推出新赛季体育三重大礼回馈新老会员，礼金送不停</div>
          </div>
        </div>
      </section>

      <section class="p96">
        <div class="info_msgbox">
          <div class="item" v-if="islogin">
            <h2>尊敬的贵宾，恭喜您获得“新赛季体育三重大礼”领取资格</h2>
            <p>下载澳盈APP存款即可享受星级VIP福利和高额礼金</p>
            <img class="qrcode" :src="generateQRCode(Download.app,140)">
            <span class="code_txt">扫二维码立即下载</span>
          </div>
          <div class="item" v-else>
            <h1>尊敬的贵宾，您尚未登录</h1>
            <p>登录后可查看福利</p>
            <a class="btn" @click="$bus.$emit('showLogin',true)"></a>
          </div>
        </div>
      </section>

      <section class="p56">
        <div class="chart_box">
          <div class="item set1">
            <div class="red_tag">
              <img src="./images/r1.png">
            </div>
            <div class="title">
              <img src="./images/t1.png">
              <div class="caption">新会员首次存款金额达到2000及以上即可享受星级VIP福利</div>
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
              </div>
            </div>
          </div>

          <div class="item set2">
            <div class="red_tag">
              <img src="./images/r2.png">
            </div>
            <div class="title">
              <img src="./images/t2.png">
              <div class="caption">新会员首次存款500以上并在体育平台30天内打够相应流水可领取澳盈新赛季欢迎礼金</div>
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
            </div>
          </div>

          <div class="item set3">
            <div class="red_tag">
              <img src="./images/r3.png">
            </div>
            <div class="title">
              <img src="./images/t3.png">
              <div class="caption">活动期间新老用户在体育平台每周有效投注额达到2万及以上者皆可申领鸿运礼金，如未领取将视作自动放弃</div>
            </div>
            <div class="giveaway_list">
              <div class="gitem">
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>20000</b></span></h3>
                  <img src="./images/s3_img1.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>200000</b></span></h3>
                  <img src="./images/s3_img2.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>500000</b></span></h3>
                  <img src="./images/s3_img3.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>1000000</b></span></h3>
                  <img src="./images/s3_img4.jpg">
                  <p>*流水要求3倍</p>
                </div>
                <div class="giveaway">
                  <h3><span>每周有效投注额<br><b>2000000</b></span></h3>
                  <img src="./images/s3_img5.jpg">
                  <p>*流水要求3倍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="p56">
        <div class="chart_box">
          <div class="item">
            <div class="title">
              <img src="./images/t4.png">
              <div class="caption">澳盈提供三大体育平台，每月上万体育赛事供您体验享乐</div>
            </div>
            <div class="banner_list">
              <div class="bitems shabab_sports">
                <section>
                  <div class="details">
                    <h1>沙巴体育</h1>
                    <a href="javascript:void(0);" target="_blank" class="btn start-game" @click="open(Games.href_sb_pc, '沙巴体育', 900, 640, true, islogin)"></a>
                    <!--<a class="btn start-game" data-game-id="A02031"></a>-->
                  </div>
                </section>
              </div>
              <div class="bitems ag_sports">
                <section>
                  <div class="details">
                    <h1>新皇冠体育</h1>
                    <a class="btn start-game" target="_blank" data-gametype="TASSPTA" @click="open(Games.href_ug_pc, '新皇冠体育', 900, 640, true, islogin)"></a>
                  </div>
                </section>
              </div>
              <div class="clear"></div>
            </div>
          </div>

          <div class="item">
            <div class="title">
              <img src="./images/t5.png">
            </div>
            <div class="rule_list">
              <ul>
                <li>此活动不能与首存、存款5重礼等网站其他优惠共享，同时“二、三重礼”中的有效投注额不能重复计算。（举例说明：如A用户某一周总有效投注额为30000，享受188元礼金后，月有效投注额即为30000-20000=10000。）</li>
                <li>活动期间内，新会员达到条件即可领取一次：领取成功后，礼金将在24小时内添加，二重礼礼金1倍流水即可取款，三重礼中礼金3倍流水可取款。</li>
                <li>“一重礼、二重礼中的有效投注额为一个存款成功后当天算起，往后数30天，“三重礼”中的有效投注额为一个自然周统计周期，<span>北京时间每周一00:00-至每周日23:59</span>，活动期间内，前一周达到要求的用户可在次周申请领取礼金，<span>逾期视为自动放弃</span>。</li>
                <li>任何和局、取消、作废、退款、赔率低于：欧洲盘1.5、香港盘0.5、马来盘0.5、印尼盘-2.00、美式盘-200的投注和赔率高于：香港盘2.75、欧洲盘3.75及已经使用“提前兑现”功能的注单，不计入有效投注额。</li>
                <li>对于各种非正常投注，如对冲等行为，一经发现将取消获奖资格，并保留进一步处理的权利。</li>
              </ul>
              <div class="note">澳盈娱乐拥有对此次优惠活动的最终解释权和裁决权，也有权在任何时候修改，终止该活动</div>
            </div>
          </div>
        </div>
      </section>

      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import { SETTING, Download, Games } from "@/assets/data";
import { generateQRCode } from "@/api/show";
import openWindow from "@/util/openWindow";
import { mapGetters } from "vuex";
import { $localStorage } from "@/util/storage";
export default {
  data() {
    return {
      SETTING,
      Download,
      Games,
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
      num9: 0
    };
  },
  methods: {
    open(url, title, w, h, needLogin, loginState) {
      openWindow(url, title, w, h, needLogin, loginState);
    },
    generateQRCode(url, size) {
      return generateQRCode(url, size);
    },
    getData() {
      if (!$localStorage.get("promoMoney")) {
        this.money = 10000 + Math.round(Math.random() * 7000);
        this.person = 500 + Math.round(Math.random() * 70);
        this.time = new Date().getTime();
        $localStorage.set("promoTime", this.time);
      } else {
        if (new Date().getTime() > $localStorage.get("promoTime") + 3600000) {
          $localStorage.set("promoTime", new Date().getTime() + 3600000);
          this.money =
            parseInt($localStorage.get("promoMoney")) +
            Math.round(Math.random() * 7000);
          this.person =
            parseInt($localStorage.get("promoPerson")) +
            Math.round(Math.random() * 70);
        } else {
          this.money = $localStorage.get("promoMoney");
          this.person = $localStorage.get("promoPerson");
        }
      }
      $localStorage.set("promoMoney", this.money);
      $localStorage.set("promoPerson", this.person);
      const beforeNum = 1000000000 + this.money * 1;
      const afterNum = beforeNum.toString().slice(1, 10);
      const arr = afterNum.split("");
      console.log(beforeNum);
      this.num1 = arr[0];
      this.num2 = arr[1];
      this.num3 = arr[2];
      this.num4 = arr[3];
      this.num5 = arr[4];
      this.num6 = arr[5];
      this.num7 = arr[6];
      this.num8 = arr[7];
      this.num9 = arr[8];
    }
  },
  created() {
    this.generateQRCode("text");
    this.$bus.$on("getDownloadPage", eventData => {
      this.cur = eventData;
    });
    this.getData();
  },
  computed: {
    ...mapGetters(["islogin"])
  }
};
</script>
<style lang="scss" scoped>
.sports_triplegift {
  display: block;
  position: relative;
  background: url(./images/bg.jpg) top center no-repeat;
  height: 3617px;

  .hide {
    display: none !important;
  }

  .banner {
    display: block;
    height: 662px;
  }

  .main {
    display: block;
    position: relative;

    .chart_bonus {
      display: block;
      width: 709px;
      height: 171px;
      background: url(./images/money_chart.png) center top no-repeat;
      margin: 0 auto;

      .amount {
        display: block;
        padding: 40px 0 0 0;
        height: 131px;

        .numbers {
          display: block;
          text-align: center;
          padding: 23px 0 0 35px;

          span {
            display: block;
            margin: 0 1px 0 0;
            height: 70px;
            float: left;

            &.cur {
              width: 26px;
              background: url(./images/yuan.png) no-repeat;
            }

            &.com {
              width: 14px;
              background: url(./images/coma.png) no-repeat;
            }

            &.per {
              width: 14px;
              background: url(./images/period.png) no-repeat;
            }

            &.num {
              width: 50px;
            }

            &.n0 {
              width: 50px;
              background: url(./images/0.png) no-repeat;
            }

            &.n1 {
              width: 50px;
              background: url(./images/1.png) no-repeat;
            }

            &.n2 {
              width: 50px;
              background: url(./images/2.png) no-repeat;
            }

            &.n3 {
              width: 50px;
              background: url(./images/3.png) no-repeat;
            }

            &.n4 {
              width: 50px;
              background: url(./images/4.png) no-repeat;
            }

            &.n5 {
              width: 50px;
              background: url(./images/5.png) no-repeat;
            }

            &.n6 {
              width: 50px;
              background: url(./images/6.png) no-repeat;
            }

            &.n7 {
              width: 50px;
              background: url(./images/7.png) no-repeat;
            }

            &.n8 {
              width: 50px;
              background: url(./images/8.png) no-repeat;
            }

            &.n9 {
              width: 50px;
              background: url(./images/9.png) no-repeat;
            }
          }
        }

        .text_note {
          display: block;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          color: #5ed0ff;
          text-align: center;
          text-shadow: 0 1px 0 #051d62;
        }
      }
    }

    .info_msgbox {
      display: table;
      width: 628px;
      height: 256px;
      margin: 0 auto;
      background: url(./images/bg2.jpg) center top no-repeat;

      .item {
        display: table-cell;
        vertical-align: middle;
        text-align: center;

        .qrcode {
          width: 120px;
          height: 120px;
          padding: 10px;
          background: #fff;
          border: 1px solid red;
        }

        h1 {
          display: block;
          color: #ffca14;
          font-size: 24px;
        }

        h2 {
          display: block;
          color: #ffca14;
          font-size: 18px;
        }

        p {
          display: block;
          color: #5ffff2;
          font-size: 14px;
          padding: 15px 0;
        }

        .code_txt {
          display: block;
          font-size: 12px;
          color: #fff;
          padding: 8px 0 0 0;
          text-align: center;
        }

        .btn {
          display: block;
          width: 241px;
          height: 62px;
          background: url(./images/btn1.png) center top no-repeat;
          margin: 0 auto;
        }

        .code {
          display: block;
          margin: 0 auto;
          border: 0;
        }
      }
    }

    .chart_box {
      display: block;
      width: 998px;
      margin: 0 auto;
      border: 1px solid #13549f;
      background: rgba(9, 33, 71, 0.7);
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background: url(./images/top_highlight.jpg) center top no-repeat;
      }

      .red_tag {
        display: block;
        position: absolute;
        top: -32px;
        left: -20px;
        z-index: 1;
      }

      .item {
        display: block;
        width: 960px;
        margin: 0 auto;
        border-bottom: 1px dashed #254f77;
        position: relative;
        z-index: 10;

        &:last-child {
          border-bottom: none;
        }

        .title {
          display: block;
          padding: 30px 0 0 0;
          text-align: center;
          border-bottom: none;

          img {
            margin: 0 auto;
            display: block;
            border: none;
          }

          .caption {
            display: block;
            height: 54px;
            line-height: 54px;
            font-size: 14px;
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
              height: 278px;
              border-top: 2px solid #ffbd0f;
              background: #061938;
              display: inline-block;

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
                  width: 57px;
                  height: 66px;
                  background: #fff;
                  position: relative;
                  top: -32px;
                }
              }

              &.m1 .top:after {
                background: url(./images/m1.png) center top no-repeat;
              }

              &.m2 .top:after {
                background: url(./images/m2.png) center top no-repeat;
              }

              &.m3 .top:after {
                background: url(./images/m3.png) center top no-repeat;
              }

              &.m4 .top:after {
                background: url(./images/m4.png) center top no-repeat;
              }

              h3 {
                display: block;
                color: #cedfff;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                padding: 45px 0 0 0;
              }

              p {
                display: block;
                color: #7fb0ff;
                font-size: 14px;
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
            padding-bottom: 50px;

            .giveaway {
              width: 158px;
              height: 218px;
              border: 1px solid #1556bf;
              background: #0d316d;
              display: inline-block;

              h3 {
                display: table;
                width: 100%;
                background: #0b2c61;
                font-size: 16px;

                span {
                  display: table-cell;
                  vertical-align: middle;
                  height: 56px;
                  color: #fff;

                  b {
                    color: #ffdf1a;
                  }
                }
              }

              p {
                display: block;
                color: #7fb0ff;
                font-size: 14px;
                text-align: center;
              }
            }
          }
        }

        .banner_list {
          display: block;
          padding: 15px 0 50px 0;

          .bitems {
            width: 470px;
            height: 240px;
            display: inline-block;

            section {
              display: table;
              width: 100%;
              height: 240px;

              .details {
                display: table-cell;
                vertical-align: middle;
                padding: 0 0 0 33px;

                h1 {
                  font-size: 40px;
                  display: block;
                }

                .btn {
                  display: block;
                  width: 167px;
                  height: 53px;
                  margin: 25px 0 0 0;
                  background: url(./images/btn2.png) center top no-repeat;
                }
              }
            }

            &.shabab_sports {
              float: left;
              background: url(./images/thmb1.jpg) center top no-repeat;
              color: #fd9592;
            }

            &.ag_sports {
              float: right;
              background: url(./images/thmb2.jpg) center top no-repeat;
              color: #76a2e3;
            }
          }
        }

        .rule_list {
          display: block;
          padding: 35px 0 0 0;

          ul {
            list-style: none;
            display: block;
            margin: 0;
            padding: 0 20px 0 40px;

            li {
              display: block;
              color: #8ca5ce;
              font-size: 14px;
              padding-bottom: 24px;
              position: relative;

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
            font-size: 14px;
            padding: 10px 0 30px 0;
          }
        }

        &.set1 .method_list .mitem .method {
          margin: 0 15px;
        }

        &.set2 .method_list .mitem .method {
          margin: 0 5px;
        }

        &.set3 .giveaway_list .gitem .giveaway {
          margin: 0 13px;
        }
      }
    }
  }

  section {
    &.p56 {
      padding-bottom: 56px;
    }

    &.p96 {
      padding-bottom: 96px;
    }
  }
}
</style>
