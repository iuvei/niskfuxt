<template>
  <div class="deposit_wrap">
    <table class="data-collect">
      <tbody>
        <tr>
          <td>
            <p class="num num-1" id="data-profitall">{{summary.profitall}}</p>
            <p>本月总输赢</p>
          </td>
          <td>
            <p class="num num-2" id="data-ximafee">{{summary.ximafee}}</p>
            <p>本月总反水</p>
          </td>
          <td>
            <p class="num num-3" id="data-couponfee">{{summary.couponfee}}</p>
            <p>本月总优惠</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="num num-1" id="data-reg">{{summary.reg}}</p>
            <p>会员总人数</p>
          </td>
          <td>
            <p class="num num-2">{{summary.monthly_reg}}</p>
            <p>本月注册量</p>
          </td>
          <td>
            <p class="num num-3">{{summary.betall}}</p>
            <p>本月投注额</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="num num-1" id="data-reg">{{summary.slotAccount}}</p>
            <p>老虎机佣金</p>
          </td>
          <!-- <td>
            <p class="num num-2" >{{summary.liveallAccount}}</p>
            <p>其他佣金</p>
          </td>-->
          <td>
            <p class="num num-3">{{summary.daily_reg}}</p>
            <p>本日注册量</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { summary } from "@@/mixins/agent/summary";

export default {
  mixins: [summary],
  data() {
    return {};
  },
  created() {
    this.getSummary()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
.deposit_wrap {
  width: 100%;
  color: #6c6c6c;
  letter-spacing: 0;
  font-size: 12px;
}
.data-collect {
  width: 100%;
  background: #fff;
  border-spacing: 15px;
  border-collapse: separate;
  .num {
    margin-bottom: 20px;
    font-size: 30px;
    color: #ff0038;
    &.num-2 {
      color: #2787d8;
    }
    &.num-3 {
      color: #ff9000;
    }
  }
  td {
    text-align: center;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    padding: 30px 20px;
  }
}
div.botton-tip {
  padding: 10px 10px 30px 10px;
  margin: 20px auto 0 auto;
  clear: both;
  border-top: solid 1px #bfbfbf;
  p.r {
    padding-bottom: 5px;
    color: #343434;
    font-weight: bold;
  }
  p {
    padding: 2px 0;
    line-height: 20px;
    font-size: 14px;
  }
}
</style>
