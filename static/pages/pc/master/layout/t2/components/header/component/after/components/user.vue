<template>
  <div class="loged" v-if="isUser">
    <div class="line1">
      <div class="info">
        Hi,&nbsp;&nbsp;{{userData.loginname}}&nbsp;&nbsp;主账户余额:&nbsp;&nbsp;<span>{{userData.accountMoney}}</span>
        <span class="icobjh bjh-shuaxin" @click="getGameMoney('MAIN')"></span>
      </div>
      <div class="btns">
        <router-link class="m-btn" :to="{name:'finance_deposit'}">存款</router-link>
        <router-link class="m-btn" :to="{name:'finance_transfer'}">转账</router-link>
        <span class="m-btn" @click="transferAll">资金一键归集</span>
      </div>
    </div>
    <div class="line2">
      <span class="l-btn sign btn-y1" @click="doSignRecord">
        <span class="icobjh bjh-qiandao"></span>签到
      </span>
      <router-link class="l-btn btn-y2" :to="{name:'user'}">
        <span class="icobjh bjh-z-user"></span>用户中心
      </router-link>
      <span class="l-btn btn-y3" @click="$store.dispatch('LOGIN_OUT')">
        <span class="icobjh bjh-dianyuan"></span>退出
      </span>
    </div>
    <process></process>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { getGameMoney, doSignRecord } from "@/api/user";
import { updateGameMoney } from "@/api/payment";
import process from "pc/components/transfer-process";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userData", "isUser"])
  },
  methods: {
    ...mapActions(["LOGIN_OUT"]),
    doSignRecord() {
      doSignRecord().then(res => {
        toast(res.message);
      });
    },
    transferAll() {
      window.$confirm(
        '<p style="text-align:left;">1.游戏平台余额只会回收整数部分。<br/>2.领取优惠但未完成流水的游戏余额不会被归集。<br/>3.资金归集可能需要较长时间，请耐心等待。</p>',
        "温馨提示",
        {
          confirmText: "确认",
          cancelText: "取消"
        }
      ).then(
        () => {
        // 确认，发出归集请求
        window.setTimeout(()=>{
          const postData = {
            transferGameOut: "ALL_V2",
            transferGameIn: "MAIN",
            transferGameMoney: 0
          };
          // 查看进度按钮
            updateGameMoney(postData).then(res => {
                if (res.success) {
                  this.$bus.$emit('showTransferProce',true)
                  window.toast(res.message)
                } else {
                  window.toast(res.message)
                }
              })
              .catch(err => {
                window.toast(err.message)
              });
          },300)
        },
        () => {

          // 取消，查看订单
        });

    },
    getGameMoney(val) {
      this.userData.accountMoney = "正在查询..";
      getGameMoney({ gameCode: val }).then(res => {
        if (res.success) {
          this.userData.accountMoney = res.data;
        } else {
          toast(res.message);
          this.userData.accountMoney = "查询失败";
        }
      });
    }
  },
  created() {},
  components:{process}
};
</script>
<style lang="scss" scoped>
.loged {
  color: #fff;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: right;
  overflow: hidden;
  .line1 {
    display: inline-block;
    .info {
      display: inline-block;
      span {
        color: #ead51e;
      }
      .icobjh {
        display: inline-block;
        margin-left: 10px;
        font-size: 22px;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          transform: rotate(180deg);
        }
      }
    }
    .btns {
      display: inline-block;
      .m-btn {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        width: 62px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 4px;
        color: #fff;
        background: #f40c0c;
      }
    }
  }
  .line2 {
    display: inline-block;
    text-align: right;
    .btn-y1 {
      background: #ffed23;
    }
    .btn-y2 {
      background: #ffc700;
    }
    .btn-y3 {
      background: #e58f0b;
    }
    .l-btn {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      width: 90px;
      text-align: center;
      border-radius: 5px;
      margin-left: 12px;
      font-size: 14px;
      cursor: pointer;
      color: #000000; 
      .icobjh {
        margin-right: 5px;
        font-size: 18px;
        vertical-align: middle;
      }
    }
  }
}
</style>
