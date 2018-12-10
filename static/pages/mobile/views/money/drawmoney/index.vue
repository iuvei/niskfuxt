<template>
  <div class="flex_1">
    <div class="drawmoney ">
      <div class="" v-show="step==1">
        <div class="sec_box main_account_sec " v-if="!isAgent">
          <h3>主账户余额</h3>
          <!-- <p><span class="money_text">{{userData.totalBalance}}</span> 元</p> -->
          <p><span class="money_text">{{userData.accountMoney}}</span> 元</p>
        </div>
        <div class="sec_box main_account_sec " v-else>
          <h3>老虎机佣金余额/其他佣金余额</h3>
          <p><span class="money_text">{{userData.slotAccount}}/{{userData.liveAccount}}</span> 元</p>
        </div>


        <input-inline v-show='isAgent' label="提款类型" select="1">
          <select v-model="sumitData.tkType">
            <option value="">请选择提款类型</option>
            <option :value="item.value" v-for="item in drawType" :key="item.value">{{item.name}}</option>
          </select>
        </input-inline>

        <input-inline label="取款银行" select="1">
          <select v-model="sumitData.id" ref="carddom">
            <option value="">请选择银行卡</option>
            <option v-for="(item,i) in bankList" :value="item.id" :key="i">{{item.bankname}}（尾号{{item.bankno}}）</option>
          </select>
        </input-inline>

        <input-inline label="取款金额">
          <input type="text" v-model.number="sumitData.amount" placeholder="最少100元">
        </input-inline>
        
        <input-inline label="取款密码">
          <input type="password" v-model="sumitData.password" placeholder="请输入取款密码">
        </input-inline>
        <v-button @click="submit">
          提交
        </v-button>
        <div class="bottom_link">
          <router-link :to="{name: 'addbank'}" v-if="bankList.length<3">去添加银行卡？</router-link>
          <router-link :to="{name: 'payset'}" v-if="!isSetPayPwd">去设置支付密码？</router-link>
          <router-link :to="{name: 'forgotPayword'}" v-else>忘记支付密码？</router-link>
          <!-- <router-link :to="{name: 'payupdate'}" v-if="isSetPayPwd">修改支付密码</router-link> -->
        </div>
      </div>

      <div class="drawmoney-success" v-show="step==2">
        <h3 class="">取款申请成功</h3>
        <p class="result_text">金额 <span>{{sumitData.amount}}</span></p>
        <div class="space_border"></div>
        <p class="info_text"  v-show='isUser'>工作人员正在为您处理，如果您的各项资料正确，取款金额会在1小时内到达您的绑定银行账户。</p>
        <p class="info_text" v-show='isAgent'>您好，代理账号提款需要审核，会在12小时内为您到账；我们会尽快为您处理，请您耐心等待，谢谢您的支持！！</p>
        <v-button v-show='isUser'>
          <router-link :to="{name:'user_log'}" class="btn btn01">查看取款记录</router-link>
        </v-button>
      </div>
      <form-tip>
        1.若遇到提款问题或被取消，请联系在线客服为您查询。 <br>
        2.提款姓名与绑定银行卡须与注册信息一致，否则无法提款。<br>
        3.若不申请任何优惠，须存款量的一倍流水即可申请提款。<br>
        4.首次提款会进行电话核实、请您保持电话畅通，加速出款的速度。<br>
        5.如利用本平台进行任何洗钱诈骗行为，本公司将保留权力终止会员服务及冻结其账户。
      </form-tip>
    </div>
  </div>
</template>
<script>
  import md5 from "MD5";
  import {findUserBankList, withdraw_new} from "@/api/payment";
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  import {withdraw} from '@/controls/money/withdraw'
  import formTip from "mobile/components/form-tip"
  export default {
    mixins:[withdraw],
    data() {
      return {
        step: 1,
        canAddcard: false,//判断是否能显示银行卡

      };
    },
    methods: {
      ...mapActions(["LOGIN_OUT","UPDATE_MONEY"]),
      submit() {
        this.drawSubmit(this.sumitData).then(res=>{
          window.toast(res.message)
          this.step=2;
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    computed: {
      ...mapGetters(["userData", "isSetPayPwd", "isAgent", "isUser","money"])
    },
    created() {
      this.getBankList()
    },
    components:{formTip}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";

  .drawmoney {
    padding: 0 r(30);
    .tips{

    }
    .bottom_link {
      margin-top: r(50);
      text-align: center;
      color: #bda059;
      a{
        margin:0 r(10)
      }
    }
    .drawmoney-success {
      @include f(32px);
      line-height: 1.4;
      p {
        color: $cl7;
      }
      h3 {
        text-align: center;
        color: $cl3;
        margin: r(20) 0;
      }
      .result_text {
        text-align: center;
        span {
          color: $cl3;
        }
      }
    }
  }

  // 金额
  .main_account_sec {
    padding: r(15);
    h3 {
      margin-bottom: r(8);
      @include f(32px);
      color: #999;
    }
    p {
      @include f(32px);
      color: #999;
      .money_text {
        @include f(60px);
        color: $cl7;
      }
    }
  }

  // 弹窗
  .drawmoney {
    padding-top: 15px;
    .main_nav_with_arrow {
      padding: 15px 0 0 15px;
      border-bottom: 1px solid #ddd;
      background: #eee;
      .title {
        justify-content: center;
        display: flex;
        li {
          flex: 1;
          position: relative;
          padding-bottom: 17px;
          width: 88px;
          text-align: center;
          display: inline-block;
          margin-right: 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
          .iconfont {
            @include f(60px);
            margin-bottom: r(10);
          }
          &.active {
            color: $iconcl;
          }
        }
      }
    }
    .form_field {
      position: relative;
      height: r(42*2);
      line-height: r(42*2);
      border-bottom: 1px solid #ccc;
      padding: 0 r(12);
      margin-bottom: r(16);
      background: #fff;
      color: #000;
      .form_field_label {
        display: block;
        float: left;
        width: r(150);
        height: 100%;
        color: #666;
        padding-left: 8px;
      }
      .form_field_input {
        overflow: hidden;
        margin: 0 0 0 r(140);
        height: 100%;
        white-space: nowrap;
        position: relative;
        input, select {
          padding: 0;
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: none;
          color: #999;
        }
      }
      .right_label {
        position: absolute;
        top: 0;
        right: 16px;
        color: #666;
        display: block;
        width: r(40);
        height: r(40);
        // border:solid;

      }
    }
    .btn_wrap {
      padding-left: r(15);
      padding-right: r(15);
      margin-bottom: r(12*2);
      .btn01, .btn02 {
        display: inline-block;
        text-align: center;
        width: 100%;
        height: r(40*2);
        line-height: r(40*2);
        margin-top: r(12*2);
        color: #fff;
        font-weight: 600;
        background: #1196bb;
        border: none;
      }
    }
.dialog_wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 100;
  .dialog_main {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
    .close {
      position: absolute;
      right: r(37);
      top: r(-25);
      transform: translate(50%, -50%);
    }
    .dialog_content {
      background-color: #fff;
      padding: r(11);
      border-radius: 0 0 r(15) r(15);
      position: relative;
      .dialog-view {
        color: #232323;
        line-height: r(32)
      }
      .dialog_title {
        text-align: center;
        @include f(30);
        line-height: r(55);
        background-color: #4d5792;
        margin-bottom: r(40);
      }
    }
  }
  .btn {
    border: 1px solid #070e3a;
    margin: r(40) auto;
    display: inline-block;
    line-height: r(49);
    border-radius: r(10);
    color: #091040;
    width: r(300);
  }
}
    .dialog_wrap {
      .dialog_main {
        .title_wrap {
          height: r(40*2);
          line-height: r(40*2);
          color: #fff;
          background: $main-bg;
          background-size: 100% 100%;
          border-radius: r(5*2) r(5*2) 0 0;
          @include f(30px);
          text-align: center;
          color: $main-cl;
        }
        .dialog_content {
          padding: r(15*2);
          text-align: center;
          @include f(30px);
        }
      }
    }

  }
</style>
