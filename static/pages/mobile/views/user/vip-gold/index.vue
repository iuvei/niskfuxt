<template>
  <div class="warp-public vip-gold">
    <div class="vip-step">
      <div class="titleT">
        <span>本月总投注额{{tips.allbet}}</span>
      </div>
      <table>
        <tr>
          <th>序号</th>
          <th>游戏平台</th>
          <th>晋级礼金</th>
          <th>晋级要求</th>
        </tr>
        <tr v-for=" (item,i) in level" :key="item.level">
          <td>{{i+1}}</td>
          <td>{{item.levelName}}</td>
          <td>{{item.upgradeprize}}</td>
          <td>{{item.upgradethreshold}}</td>
        </tr>
      </table>
    </div>

    <vButton @click="submit" :disabled="!canUpgrade">检测升级</vButton>
    <form-tip>
      <p>1.月初3号后开放领取，领取时需当月有过100元存款，否则活跃度不足无法领取，提款需1倍流水，礼金不可累积，每月刷新</p>
      <p>2.达到晋级标准即可自助晋级，或系统每月3号自动晋级。</p>
      <p>3.计算所有澳盈娱乐提供的真人、老虎机、彩票、棋牌、体育、捕鱼等游戏平台上的游戏投注。</p>
      <p>4.会员晋级后，级别会调整到晋级后的级别，晋级礼金会自动派发至用户的礼金账户。</p>
    </form-tip>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  import {
    vipGold
  } from '@/controls/discount/vipGold'
  import formTip from "mobile/components/form-tip"
  export default {
    mixins: [vipGold],
    name: "",
    data() {
      return {
        disabled: false,
        data: {
          upgradeThresholdList: [],
          betList: [{
            bet: 0
          }]
        },
        levelCount: 0, //所有的等级数量
        thisMonthMoney: 0 //本月投注额
      };
    },
    methods: {
      submit() {
        this.checkUpgrade().then(res => {
          window.toast(res.message)
        }).catch(err => {
          window.toast(err.message)
        })
      }
    },
    created() {
      this.getVipInfo()
    },
    watch: {
      level(arr) {
        if (arr[0].level == 0) {
          arr.shift();
        }
      }
    },
    components: {
      formTip
    }
  }

</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin";
  .vip-gold {
    padding: 0 r(20);
    .bottom_info_text {
      margin: 1em;
      text-align: center;
      color: $cl6
    }
    .vip-step {
      .titleT {
        height: r(84);
        line-height: r(84);
        color: $cl6;
        text-align: left;
        border-bottom: 1px solid #666;
        margin-bottom: 10px;
        @include f(36px)
      }
      table {
        width: 100%;
        border-spacing: 0;
        @include f(28px);
        text-align: center;
        border-collapse: collapse;
        th {
          background: #666;
          padding: r(20) r(40);
          font-weight: 100;
          color: #fff;
          height: r(100);
        }
        td {
          padding: r(20) r(40);
          border: 1px solid #b8b8b8;
          color: $cl7;
        }
      }
    }
  }

</style>
