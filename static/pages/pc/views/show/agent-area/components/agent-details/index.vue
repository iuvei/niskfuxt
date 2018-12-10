<template>
  <div class="agent_register">
    <div class="agent_register_content">
      <h2>代理合作条款</h2>
      <h4>1、有效下线数量：指线下会员当月累积存款500元以上且有效投注额达1000以上，才可称作有效下线，即活跃会员；</h4>
      <h4>2、单月佣金必须最低达到500元，佣金提款条件才能成立；</h4>
      <h4>3、所有未领取的佣金，将会在6个月后归零；</h4>
      <h4>4、代理的游戏账号不可以是自己的下线会员，否则将不会计算该账号产生的代理佣金，并将该账户从您的下线里注销；</h4>
      <h4>5、任何使用不诚实的方法以骗取佣金将会永久冻结账户，所有佣金一概不予发还；</h4>
      <h4>6、如公司对代理账号进行违规行为调查，期间将会暂停向代理付款，直到审核完毕；</h4>
      <h4>7、在没有获得公司批准的情况下，代理不可以提供任何红利以及优惠活动，如果违反了规定我们将会永久关闭违反规定的账户；</h4>
      <h4>8、如果当月代理总佣金的50%来自于一个下线会员，那么只能按25%计算当月的佣金，如3月某代理总佣金80万，其中50万来自于一个下线会员贡献，当月实际佣金：80万×25%=20万；</h4>
      <h4>9、如果代理在连续6个月内未达到佣金提款的最低要求，我们有权随时清零额度或取消其代理账户，而不需要任何理由或提前通知；</h4>
      <h4>10、{{WEBCONFIG.title}}保留对合作计划的最终解释权及决定权。</h4>
    </div>
  </div>
</template>
<script>
  import {
    AgentRegisterControl
  } from '@/controls/auth/registerAgent'
  import {
    WEBCONFIG
  } from "@/assets/data"
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    mixins: [AgentRegisterControl],
    data() {
      return {
        WEBCONFIG
      }
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
        regSubmit(){
            this.register(this.submitData).then(res=>{
                window.toast(res.message)
            }).catch(err=>{
                window.toast(err.message)
            })
        }
    },
    props: {},
    computed: {},
  }

</script>
<style lang="scss" scoped>
  .agent_register {
    background: url(../../images/daili_register.jpg) no-repeat center center;
    min-height: 797px;
    // padding-top: 146px;
    .agent_register_content {
      width: 1000px;
      margin: 0 auto;
      background: url(../../images/agent_registerbg.png) repeat;
      // padding-top: 20px;
      height: 100%;
      padding: 5% 2%;
      h2 {
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        height: 36px;
        line-height: 36px;
      }
      h4 {
        font-size: 18px;
        color: #ffffff;
        text-align: justify;
        height: 24px;
        line-height: 27px;
        margin-bottom: 33px;
        padding-left: 20px;
      }
      .form_agent {
        display: inline-block;
        padding-left: 51px;
      }
      .form_group {
        width: 434px;
        float: left;
        margin: 0 28px 20px 0;
        position: relative;
        .register_website{
            position:absolute;
            top:0;
            right:0;
            color:#fff;
            font-size:16px;
            line-height:47px;
            padding-right:10px;
        }
        .register_icon {
          position: absolute;
          width: 34px;
          height: 35px;
          display: block;
          background-image: url(../../images/agent_regicon.png);
          background-repeat: no-repeat;
          top: 7px;
          left: 10px;
        }
        .icon_user {
          background-position: -20px -147px;
        }
        .icon_mobile {
          background-position: -20px -358px;
        }
        .icon_pwd {
          background-position: -20px -286px;
        }
        .icon_email {
          background-position: -20px -20px;
          top: 14px;
        }
        .icon_qq {
          background-position: -20px -432px;
        }
        .icon_name {
          background-position: -20px -82px;
          top: 12px;
        }
        .icon_code {
          background-position: -20px -216px;
        }
        .form_control {
          width: 100%;
          height: 47px;
          line-height: 47px;
          border: 1px solid #FFFFFF;
          padding-left: 50px;
          font-size: 24px;
          color: #ffffff;
          background: transparent;
        }
        .code_form_control {
          width: 62%;
        }
        .code {
          display: inline-block;
          float: right;
          height: 46px;
          display: inline-block;
          width: 150px;
        }
        .checked {
          width: 16px;
          height: 16px;
          border: 1px solid #FFFFFF;
          vertical-align: sub;
        }
        p {
          display: inline;
          font-size: 16px;
          color: #ffffff;
        }
      }
      .form_btn_group {
        width: 100%;
        text-align: center;
        float: left;
        margin-bottom: 38px;
        .green_submitbtn {
          display:inline-block;
          width: 480px;
          height: 60px;
          line-height: 60px;
          border: none;
          background: #22A348;
          font-size: 36px;
          color: #ffffff;
          text-align: center;
          cursor:pointer;
        }
      }
    }
  }

</style>
