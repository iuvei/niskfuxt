<template>
  <div class="agent_notice">
    <div class="container">
      <h1 class="agent_txtitle">代理须知</h1>
      <p>高收入，零投入！{{WEBCONFIG.title}}首创日结、周结佣金结算。</p>
      <p>【共赢】始终是我们{{WEBCONFIG.title}}的经营理念，伴随{{WEBCONFIG.title}}十四年的成长，玩家已经看到了{{WEBCONFIG.title}}的实力！现在加盟到{{WEBCONFIG.title}}来，让我们共同成长，共同受益。</p>
      <p>只需要简单的一步注册，就可以让你轻松获得高额回报。</p>
      <h3>佣金计算</h3>
      <table class="agent_info_tablist">
        <thead>
          <tr>
            <th>合作伙伴等级</th>
            <th>活跃会员数</th>
            <th>公司盈利</th>
            <th>佣金比例</th>
          </tr>
        </thead>
        <tbody>
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
      <h2>计算公式</h2>
      <p>（老虎机/真人/体育/棋牌/彩票平台输赢-平台费-返水-优惠）*比例 </p>
      <p>*平台费用：我们需要上缴给平台商的租赁费用，平台费为10%</p>
      <p>*优惠及返水：官方赠送给代理所有下线玩家的金额。</p>
      <p>每月最低活跃会员与公司净盈利需要同时达到要求方可按对应佣金比例计算佣金。</p>
      <h2 class="mt_20">活跃会员</h2>
      <p>活跃会员的定义：佣金结算周期内累计存款500元以上且结算周期内有效投注额1000元以上。</p>
      <h2 class="mt_20">结算举例</h2>
      <p>例如：3月份某代理下线有5个活跃会员，线下会员的在老虎机平台类输值为50万，真人娱乐平台输值：50万，累计返水为7万元，存送优惠为8万元。那么他的佣金计算为：（1000000-100000-70000-80000）*30%=22.5万元。</p>
     <h2 class="mt_20">首创支持：日结佣金、周结佣金</h2>
    <p class="content-p">*电子游戏老虎机代理可向代理专员申请日结/周结佣金结算</p>
    <p class="content-p">*其他类（真人/体育/彩票/棋牌）：累计获得佣金10万以上，每月满足活跃会员要求，可申请晋级VIP代理，享有日结/周结佣金</p>
    <p class="content-p">*日结佣金每日18：00前结算前一天的佣金并自动派发到代理账号（非工作日则次日结算）。</p>
    <p class="content-p">*周结佣金每周一下午18:00前结算前一周的佣金并自动派发到代理账号。</p>
    <p class="content-p">*月结佣金每月结算时间为1-5号，结算上月佣金并派发到代理账号。</p>
    <p class="content-p" style="padding-bottom: 20px;">*日结/周结代理若连续一个月无新增1位活跃会员，将取消其日结模式，达到活跃人数要求后即可恢复日结/周结。</p>

    </div>
  </div>
</template>
<script>
  import {
    WEBCONFIG
  } from "@/assets/data"
  export default {
    data() {
      return {
        WEBCONFIG
      }
    }
  }

</script>
<style lang="scss" scoped>
  .mt_20 {
    margin-top: 20px;
  }

  .agent_notice {
    background: url(../../images/agent_noticebg.jpg) no-repeat center center;
    min-height: 1080px;
    background-size: auto 100%;
    .container {
      margin: 0 auto;
      width: 1200px;
      overflow: hidden;
    }
    .agent_txtitle {
      font-size: 40px;
      color: #ffffff;
      margin-top: 20px;
      height: 80px;
      line-height: 74px;
    }
    h2 {
      font-size: 20px;
      color: #ed7e12;
      line-height: 38px;
    }
    h3 {
      font-size: 24px;
      color: #ed7e12;
      text-align: center;
      line-height: 38px;
    }
    p {
      font-size: 20px;
      color: #ffffff;
      line-height: 36px;
      padding-left: 20px;
    }
    .agent_info_tablist {
      width: 100%;
      border: 2px solid #FFFFFF;
      text-align: center;
      margin-bottom: 30px;
      thead {
        tr {
          height: 58px;
          line-height: 58px;
          background: #E0E0E0;
          font-size: 24px;
          color: #272727;
        }
        th {
          font-weight: normal;
        }
      }
      tbody {
        tr {
          height: 58px;
          line-height: 58px;
          font-size: 24px;
          color: #ffffff;
          border: 2px solid #FFFFFF;
        }
      }
    }
  }

</style>
