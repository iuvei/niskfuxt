<template>
  <div class="summary">
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
          <td>
            <p class="num num-3">{{summary.betall}}</p>
            <p>本月投注额</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="num num-1" id="data-reg">{{summary.reg}}</p>
            <p>会员总人数</p>
          </td>
          <td>
            <p class="num num-3">{{summary.daily_reg}}</p>
            <p>本日注册量</p>
          </td>
          <td>
            <p class="num num-2">{{summary.monthly_reg}}</p>
            <p>本月注册量</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { summary } from "@@/mixins/agent/summary";
export default {
  mixins: [summary],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.getSummary()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.summary {
  border-top: solid 1px #2b2b2b;
  background: #000;
  color: #ecf4f2;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .data-collect {
    width: 100%;
    td {
      padding: 4px 2px;
    }
    .num {
      font-size: 20px;
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
    }
  }
}
</style>
