<template>
  <div class="mainDev">
    <div class="control pre" v-show="gamebox.length>=6" @click="pregame()">
      <span class="ico-pre"></span>
    </div>
    <div
      class="gameDev"
      v-for="(item,i) in gamebox"
      :key="item.value+i"
      @click="getGameMoney(item.value)"
    >
      <div class="name">{{item.name}}</div>
      <div class="money">
        <span
          v-if="wallet[item.value]&&wallet[item.value].toString()&&!loading[item.value]"
        >{{wallet[item.value]}}元</span>
        <span v-else-if="loading[item.value]">查询中...</span>
        <span v-else>点击查询</span>
        <!-- <span>{{wallet[item.value]||'点击刷新'}}</span> -->
      </div>
    </div>
    <div class="control next" v-show="gamebox.length>=6" @click="nextgame()">
      <i class="ico-next"></i>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Money } from "@/assets/data";
import { getGameMoney } from "@/api/user";

export default {
  data() {
    return {
      searchMoney: "",
      showMoney: "刷新余额",
      loading: {},
      gamebox: [],
      gameMinIndex: 0,
      gameMaxIndex: 6,
      gamelen: "",
      actived: -1,
      Money: Money.filter(item => {
        return item.value != "MAIN" && item.value != "DEPUTY";
      })
    };
  },
  computed: {
    ...mapGetters(["userData", "isUser", "unread", "wallet"])
  },
  methods: {
    ...mapActions(["LOGIN_OUT", "UPDATE_MONEY"]),
    getGameMoney(val) {
      this.$set(this.loading, val, true);
      this.UPDATE_MONEY(val)
        .then(res => {
          this.$delete(this.loading, val);
        })
        .catch(err => {
          this.$delete(this.loading, val);
        });
    },
    pregame() {
      if (this.gameMinIndex == 0) {
        window.toast("已无更多");
        return false;
      } else {
        this.gameMinIndex = this.gameMinIndex - 1;
        this.gameMaxIndex = this.gameMaxIndex - 1;
        this.gamebox = this.Money.slice(this.gameMinIndex, this.gameMaxIndex);
      }
    },
    nextgame() {
      if (this.gameMaxIndex < 6 || this.gameMaxIndex >= this.gamelen) {
        window.toast("已无更多");
        return false;
      } else {
        this.gameMinIndex = this.gameMinIndex + 1;
        this.gameMaxIndex = this.gameMaxIndex + 1;
        this.gamebox = this.Money.slice(this.gameMinIndex, this.gameMaxIndex);
      }
    }
  },
  created() {
    this.newMoney = this.Money;
    this.gamelen = this.newMoney.length;
    for (let i = 0; i < this.newMoney.length; i++) {
      this.newMoney[i].money = "刷新余额";
    }
    this.gamebox = this.newMoney.slice(this.gameMinIndex, 6);
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.mainDev {
  border-top: solid 1px #2b2b2b;
  background: #000;
  color: #ecf4f2;
  height: 70px;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .gameDev {
    padding: 15px 0;
    border-right: 1px solid #292929;
    flex: 1;
    display: inline-block;
    text-align: center;
    height: 100%;
    cursor: pointer;
    &:last-child {
      border-right: none;
    }
    .name {
      font-size: 18px;
    }
    .money {
      color: #fca00d;
      font-size: 14px;
    }
  }
  .gameDev:nth-child(9) {
    border-right: none;
  }
  .control {
    width: 28px;
    display: inline-block;
    height: 100%;
    vertical-align: top;
    cursor: pointer;
    &.pre {
      border-right: solid 1px #2b2b2b;
    }
    &.next {
      border-left: solid 1px #2b2b2b;
    }
    .ico-pre {
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      border-color: transparent #fff transparent transparent;
      /* top: 40px; */
      margin-top: 30px;
    }
    .ico-next {
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      border-color: transparent transparent transparent #fff;
      margin-left: 10px;
      /* top: 40px; */
      margin-top: 30px;
    }
  }
}
</style>
