<template>
  <div class="user_center_content proxy_center_content">
    <account-top :slotAccount="slotAccount">头部内容</account-top>

    <col-list :data="colData">
      <!-- 汇总 -->
    </col-list>
    <!-- <form-tip>提示</form-tip> -->

    <row-list :data="rowdata">
      <!-- 菜单 -->
    </row-list>
    <!-- <div class="btn_wrap" style="margin-top: 1em">
      <a @click="$store.dispatch('LOGIN_OUT')" href="javascript:;" class="btn btn01">退出</a>
    </div> -->
  </div>
</template>
<script>
  import {agentReport} from '@/api/agent';
  import {mapGetters} from 'vuex'
  import accountTop from "./components/account-top"
  import colList from "./components/col-list"
  import rowList from "./components/row-list"
  import formTip from "./components/form-tip"

  export default {
    data() {
      return {
        slotAccount: 0,
        rowdata: [
          {name: '佣金报表', to: {name: "agent_ptcommission"}, ico:"yongjin"},
          {name: '会员列表', to: {name: "agent_memberlist"}, ico:"liebiao"},
          {name: '会员账务', to: {name: "agent_memberbill"}, ico:"zhangwu"},
          {name: '额度记录', to: {name: "agent_creditlog"}, ico:"edujilu"},
          // {name: '个人中心', to: {name: "agent_personal"}},
          {name: '代理提款', to: {name: "money_drawmoney"}, ico:"tikuan"},
          {name: '站内信', to: {name: "message"}, ico:"zhanneixin"},
          {name: '绑定银行卡/折号', to: {name: "addbank"}, ico:"yinhangka"},
          // {name:'联系在线客服',to:{path:"http://www.baidu.com/"}},
        ],
        colData: [
          {name: "本月总输赢", view: 0, ico:"tongqian"},
          {name: "本月总返水", view: 0, ico:"qianbao"},
          {name: "本月总优惠", view: 0, ico:"youhuiquan1"},
          {name: "会员总人数", view: 0, ico:"renshu"},
          {name: "本月注册量", view: 0, ico:"zhuceliangtongji"},
          {name: "本月投注额", view: 0, ico:"meihua"}
        ]
      }
    },
    created() {
      agentReport().then((res) => {
        this.colData[0].view = res.data.profitall || 0;
        this.colData[1].view = res.data.ximafee || 0;
        this.colData[2].view = res.data.couponfee || 0;
        this.colData[3].view = res.data.reg || 0;
        this.colData[4].view = res.data.monthly_reg || 0;
        this.colData[5].view = res.data.betall || 0;
      }).catch((err) => {
        window.toast("流水查询失败");
      });
    },
    computed: {
      ...mapGetters(["userData"])
    },
    components: {
      rowList,
      colList,
      accountTop,
      formTip
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .proxy_center_content{
    // margin-top: r(100);
    padding-bottom: r(20);
    background: #f5f5f5;
  }
  .btn_wrap {
    padding-left: r(35);
    padding-right: r(35);
    margin-bottom: r(12);
    text-align: center;
    .btn01, .btn02 {
      display: inline-block;
      width: 90%;
      height: r(30*2);
      line-height: r(30*2);
      @include f(30px);
      color: #fff;
      border-radius: 100px;
      font-weight: 700;
      background: $cl1;
      border: none;
    }
  }
</style>
