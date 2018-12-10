<template>
  <div class="agent-proce-content m-content">
    <span>佣金计算：</span>
    <table class="table">
      <tbody>
      <tr>
        <th>合作伙伴等级</th>
        <th>活跃会员数</th>
        <th>公司盈利</th>
        <th>佣金比例</th>
      </tr>
      <tr>
        <td>黄金代理</td>
        <td>≥3</td>
        <td>0-200000</td>
        <td>30%</td>
      </tr>
      <tr>
        <td>白金代理</td>
        <td>≥20</td>
        <td>200001-500000</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>钻石代理</td>
        <td>≥30</td>
        <td>500001-800000</td>
        <td>45%</td>
      </tr>
      <tr>
        <td>至尊代理</td>
        <td>≥55</td>
        <td>≥800001</td>
        <td>50%</td>
      </tr>
      </tbody>
    </table>
    <span>佣金计算公式：</span>
    <p class="content-p">（老虎机/真人/体育/棋牌/彩票平台输赢-平台费-返水-优惠）*比例 </p>
    <p class="content-p">*平台费用：我们需要上缴给平台商的租赁费用，平台费为10%</p>
    <p class="content-p">*优惠及返水：官方赠送给代理所有下线玩家的金额。 </p>
    <p class="content-p">每月最低活跃会员与公司净盈利需要同时达到要求方可按对应佣金比例计算佣金。</p>
    <span>活跃会员：</span>
    <p class="content-p">活跃会员的定义：佣金结算周期内累计存款500元以上且当月有效投注额1000元以上，才可称作活跃会员。</p>
    <span>结算举例：</span>
    <p class="content-p">例如：3月份某代理下线有5个活跃会员，线下会员的在老虎机平台类输值为50万，真人娱乐平台输值：50万，累计返水为7万元，存送优惠为8万元。那么他的佣金计算为：（1000000-100000-70000-80000）*30%=22.5万元。</p>
    <span>首创支持：日结佣金、周结佣金</span>
    <p class="content-p">*电子游戏老虎机代理可向代理专员申请日结/周结佣金结算</p>
    <p class="content-p">*其他类（真人/体育/彩票/棋牌）：累计获得佣金10万以上，每月满足活跃会员要求，可申请晋级VIP代理，享有日结/周结佣金</p>
    <p class="content-p">*日结佣金每日18：00前结算前一天的佣金并自动派发到代理账号（非工作日则次日结算）。</p>
    <p class="content-p">*周结佣金每周一下午18:00前结算前一周的佣金并自动派发到代理账号。</p>
    <p class="content-p">*月结佣金每月结算时间为1-5号，结算上月佣金并派发到代理账号。</p>
    <p class="content-p">*日结/周结代理若连续一个月无新增1位活跃会员，将取消其日结模式，达到活跃人数要求后即可恢复日结/周结。</p>

    
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {},
    methods: {},
    computed: {},
    created() {
    },
    components: {}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .agent-proce-content{
    // text-align: center;
    padding: 0 r(30);
    @include f(24px);
    line-height: r(50);
    color: #ffffff;
    table {
      width: 100%;
      @include f(24px);
      text-align: center;
      th{
        background: $cl6;
        border:1px solid #606060;
        color: #fff;
        padding: r(10) 0;
      }
      td{
        border: 1px solid #606060;
        line-height: 2;
        padding: r(10) 0;
      }
    }
    span{
      @include f(30px);
      color: $cl6;
      margin: r(20) auto;
      display: block;
    }
    // .content-color{
    //   border-color: #c3c3c3;
    //   border-width: 1.5px 3px;
    //   border-style: solid;
    //   width: 8%;
    //   margin: -5px auto 5px;
    // }
    .content-p{
      text-align: justify;
      @include f(24px);
    }
  }
  .agent-proce {
    padding: 0 r(30);
    @include f(28px);
    line-height: 1.3;
    table {
      width: 100%;
      @include f(26px);
      text-align: center;
      td, th {
        border: 1px solid $main-bg;
        line-height: 2;
      }
    }
    p {
      line-height: 1.3;
      @include f(24px)
    }
    h3 {
      margin: 1em 0;
      color: $cl1;
    }
  }
</style>
