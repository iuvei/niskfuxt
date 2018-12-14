<template>
  <div class="agent-proce-content m-content">
    <span>代理方案</span>
    <p class="content-color"></p>
    <table class="table">
      <tbody>
      <tr>
        <th rowspan="2">当月盈利金额</th>
        <th rowspan="2">最低有效会员</th>
        <th colspan="4">可获退佣比例</th>
      </tr>
      <tr>
        <th>真人视讯、棋牌游戏</th>
        <th>老虎机</th>
        <th>彩票</th>
        <th>体育赛事</th>
      </tr>
      <tr>
        <td>1-30000</td>
        <td>3个或以上</td>
        <td>15%</td>
        <td>20%</td>
        <td rowspan="7">1%</td>
        <td rowspan="7">10%</td>
      </tr>
      <tr>
        <td>30001-100000</td>
        <td>5个或以上</td>
        <td>20%</td>
        <td>25%</td>
      </tr>
      <tr>
        <td>100001-200000</td>
        <td>10个或以上</td>
        <td>25%</td>
        <td>30%</td>
      </tr>
      <tr>
        <td>200001-500000</td>
        <td>20个或以上</td>
        <td>30%</td>
        <td>35%</td>
      </tr>
      <tr>
        <td>500001-1000000</td>
        <td>50个或以上</td>
        <td>35%</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>1000001-1800000</td>
        <td>100个或以上</td>
        <td>40%</td>
        <td>45%</td>
      </tr>
      <tr>
        <td>1800001+</td>
        <td>150个或以上</td>
        <td>45%</td>
        <td>50%</td>
      </tr>
      </tbody>
    </table>   
   
    <span>佣金计算</span>
    <p class="content-color"></p>
    <p class="content-p cl-red">（线下会员当月盈利额之９０％ X平台对应佣金比例）-相应费用</p>
    <p class="content-p">
      即真人视讯、体育赛事、电子游艺项目，以线下会员于平台中之负盈利总额之90%，依照上表门槛乘以佣金百分比后，再扣除相应费用。<br>
      彩票类则以报表中【有效投注】字段X 1%佣金百分比，并扣除相应费用；<br>
      若线下会员彩票及非彩票类均有投注，相应费用仅扣除一次。 <br>
      【相应费用】包括：会员各项网站优惠彩金、全平台返水总数、存/取款相应费用；<br>
      【有效会员】定义为，在月结区间内进行充值最少300元者，如代理当月未达【当月最低有效会员】最低门槛2人，将按照保底收益进行计算，该月两个条件未达者，无法领取佣金回馈。<br>
      【当月盈利金额】定义为线下会员之负营利总额(除彩票类外)。<br>
      代理商【当月营利达到标准】，而【当月最低有效会员】人数未达相应最低门槛，则该月佣金比例依照【当月最低有效会员】人数所达门槛相应的百分比进行退佣。<br>
      代理商【当月最低有效会员】，而【当月营利达到标准】人数未达相应最低门槛，则该月佣金比例依照【当月营利达到标准】人数所达门槛相应的百分比进行退佣。<br>
      例1：代理线下当月盈利510000，而当月有效会员人数为50人，依照下表退佣比例计算佣金。<br>
    </p>
    <table class="table">
      <tr>
        <th>真人视讯.棋牌游戏</th>
        <th>老虎机</th>
        <th>彩票</th>
        <th>体育赛事</th>
      </tr>
      <tr>
        <td>35%</td>
        <td>40%</td>
        <td>1%</td>
        <td>10%</td>
      </tr>
    </table>
    <p class="content-p">
      真人视讯盈利￥360000，电子游艺盈利￥150000，彩票有效投注￥1000000。如代理线下当月相应费用统计为￥30000，则佣金计算方式为：<br>
      真人视讯 360000X90%X35%，小计113400<br>
      电子游艺 150000X90%X40%，小计 54000<br>
      彩票类   1000000X1%   ，小计 10000<br>
      总退佣金额：113400+54000+10000-30000=147400<br>

      例2：代理线下当月盈利510000，而当月有效会员人数为20人，依照下表退佣比例计算佣金。<br>
    </p>
    <table class="table">
      <tr>
        <th>真人视讯.棋牌游戏</th>
        <th>老虎机</th>
        <th>彩票</th>
        <th>体育赛事</th>
      </tr>
      <tr>
        <td>30%</td>
        <td>35%</td>
        <td>1%</td>
        <td>10%</td>
      </tr>
    </table>
    <p class="content-p">
      真人视讯￥360000，电子游艺￥150000，彩票有效投注￥1000000。如代理线下当月相应费用统计为￥30000，则佣金计算方式为：<br>
      真人视讯 360000X90%X30%，小计 97200<br>
      电子游艺 150000X90%X35%，小计 47250<br>
      彩票类   1000000X1%   ，小计 10000<br>
      总退佣金额：97200+47250+10000-30000=124450<br>
    </p>

    <span>保底收益</span>
    <p class="content-color"></p>
    <p class="content-p">
      为回馈代理商的爱护与支持，如当月代理商佣金总额产生负值，将一律归零，并开始新一期计算，并可享受以下保底待遇：<br>
      当代理商当期线下有效投注总额为100万元，可获退佣低于 888元，将可获保底佣金 856元；<br>
      当代理商当期线下有效投注总额为250万元，可获退佣低于1888元，将可获保底佣金 1856元；<br>
      当代理商当期线下有效投注总额为500万元，可获退佣低于3801元，将可获保底佣金 3856元；<br>
      当代理商当期线下有效投注总额为800万元，可获退佣低于8888元，将可获保底佣金 5856元。<br>
    </p>

    <span>佣金支付</span>
    <p class="content-color"></p>
    <p class="content-p">
      代理佣金每期结算一次，结算区间为：每月1号至月底的最后一天，盈利将依照代理方案清算。清算后代理业绩归零并重新开始新一期计算。<br>
      佣金于每个月的月初3号开始与代理专员确认金额后，在3个工作日内将佣金直接汇入代理登记的银行帐号。<br>
    </p>
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
    text-align: center;
    padding: 0 r(30);
    @include f(24px);
    line-height: r(50);
    color: #ffffff;
    table {
      width: 100%;
      @include f(24px);
      text-align: center;
      th{
        background: #f28a57;
        border:1px solid #944b23;
        color: #fff;
        padding: r(10) 0;
      }
      td{
        border: 1px solid #606060;
        color:#c3c3c3;
        line-height: 2;
        padding: r(10) 0;
      }
    }
    span{
      @include f(30px);
      color: #ffffff;
      margin: r(20) auto;
      display: block;
    }
    .content-color{
      border-color: #c3c3c3;
      border-width: 1.5px 3px;
      border-style: solid;
      width: 8%;
      margin: -5px auto 5px;
    }
    .content-p{
      text-align: justify;
      @include f(24px);
    }
    .cl-red {
      color: red;
    }
  }
</style>
