<template>
  <div>
    <div class="user-info content">
      <div class="user-avator">
        <img class="u-avator" v-lazy="userData.avator">
        <p class="u-name">{{userData.loginname}}</p>
        <p class="u-level">{{userData.level}}</p>
        <p></p>
      </div>
      <div class="user-level cfx">
        <div class="u-money fl">
          <p>
            <i class="icons icobjh bjh-Management"></i>主账户余额：
            <span class="u-yellow">{{wallet['MAIN']}}元</span>
          </p>
          <p>
            副账户余额：
            <span class="u-yellow">{{wallet['DEPUTY']}}元</span>
          </p>
          <p></p>
        </div>
        <div class="u-vip fr">
          <div class="u-level-box" v-for="(item,i) in level" :key="i">
            <p class="u-l-label">{{item.levelName}}</p>
            <span class="u-l-meter" :class="{active:userData.levelNumber>i}"></span>
            <span class="u-l-dot" :class="{active:userData.levelNumber>=i}"></span>
          </div>
          <!-- <div class="level-meter"></div> -->
        </div>
        <div class="u-wallet cfx">
          <games></games>
        </div>
      </div>
      <div class="user-cs">
        <p>专属客服二维码</p>
        <p>工作时间：</p>
        <p>周一至周五 09:00-18:00</p>
        <img class="u-code" v-lazy="generateQRCode(SETTING.live800)">
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import games from "../games"; // 用户钱包数据
import { Money, WEBCONFIG, SETTING } from "@/assets/data";
import { getGameMoney, doSignRecord } from "@/api/user";
import { vipGold } from "@/controls/discount/vipGold";
import { generateQRCode } from "@/api/show";

export default {
  mixins: [vipGold],
  data() {
    return {
      Money,
      WEBCONFIG,
      SETTING,
      searchMoney: "MAIN",
      showMoney: ""
      // level:["普通会员","青铜会员","白银会员","黄金会员","铂金会员","钻石会员"]
    };
  },
  props: {},
  methods: {
    ...mapActions(["LOGIN_OUT", "UPDATE_MONEY"]),
    getGameMoney(val) {
      this.showMoney = "正在查询..";
      this.UPDATE_MONEY(val).then(res => {});
    },
    generateQRCode(url, size) {
      return generateQRCode(url, size);
    },
    signIt() {
      doSignRecord().then(res => {
        toast(res.message);
      });
    }
  },
  watch: {
    level(arr) {
      if (arr[0].level != 0) {
        arr.unshift({
          level: 0,
          levelName: "新会员",
          retainthreshold: 0,
          upgradeprize: 0,
          upgradethreshold: 0
        });
      }
    }
  },
  computed: {
    ...mapGetters(["userData", "isUser", "unread", "wallet"])
  },
  created() {
    this.getVipInfo(this.userData);
  },
  components: { games }
};
</script>
<style lang="scss" scoped>
.user-info {
  display: flex;
  justify-content: space-between;
  border: solid 1px #2b2b2b;
  background: rgba(0, 0, 0, 0.3);
  color: #dcdcdc;
  > div {
    min-height: 100px;
    border-left: solid 1px #2b2b2b;
    &:first-child {
      border-left: none;
    }
  }
  .user-avator {
    padding-top: 4px;
    width: 140px;
    text-align: center;
    .u-avator {
      width: 90px;
      height: 90px;
      display: inline-block;
      border: solid 1px #2b2b2b;
      padding: 10px;
      border-radius: 20em;
      margin-bottom: 10px;
    }
    p {
      line-height: 2;
    }
  }
  .user-level {
    flex: 1;
    padding-top: 15px;
    .u-money {
      width: 200px;
      padding-left: 10px;
      p {
        font-size: 16px;
      }
      .icons {
        font-size: 18px;
        margin: 0 4px;
        color: #fca00d;
      }
      .u-yellow {
        color: #fca00d;
      }
    }
    .u-vip {
      // width: 100%;
      position: relative;
      padding: 6px 0;
      margin-bottom: 4px;
      display: flex;
      .u-level-box {
        display: inline-block;
        width: 100px;
        text-align: center;
        z-index: 333;
        cursor: pointer;
        position: relative;
        .u-l-label {
          font-size: 16px;
        }
        .u-l-dot {
          display: inline-block;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #b0b0b0;
          margin-top: 10px;
          border: 2px solid #fff;
          position: relative;
          &.active {
            background: #e07c03;
            border: 2px solid #f9d091;
          }
        }
        .u-l-meter {
          position: absolute;
          bottom: 9px;
          left: 50%;
          display: block;
          height: 10px;
          width: 100%;
          background: #292724;
          &.active {
            background: #867761;
          }
        }
        &:last-child {
          .u-l-meter {
            display: none;
          }
        }
      }
    }
    .u-wallet {
      padding-top: 20px;
    }
  }
  .user-cs {
    width: 150px;
    text-align: center;
    color: #cf3302;
    padding: 10px 4px;
    p {
      font-size: 12px;
      line-height: 1.5;
    }
    .u-code {
      margin-top: 5px;
      background: #fff;
      padding: 8px;
      width: 90px;
    }
  }
}
</style>
