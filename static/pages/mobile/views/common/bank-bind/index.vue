<template>
  <div class="add-bank-card ">
    <div class="form-box">
      <input-inline label="银行卡号">
        <input v-model="bindData.cardNo" type="text" placeholder="输入卡号后，系统智能识别银行" maxlength="19" @input="verifyBankNumber(bindData.cardNo)">
      </input-inline>
    </div>
    <div class="card-tip">
      {{banktxt}}
    </div>
    <v-button @click="submit">保存</v-button>
    <form-tip>
      <p>1.绑定的【银行卡姓名】必须与【注册姓名】一致方可提款，如有乱填写造成无法出款，澳盈娱乐概不负责。</p>
      <p>2.请您认真核对正确的银行卡号，系统会自动识别判定银行卡是否有效。</p>
      <p>3.如果有任何疑问请及时联系在线客服</p>
    </form-tip>
  </div>
</template>
<script>
  import {bindBankNo} from "@/api/payment";
  import check from "@/util/RegExp"
  import {bank} from "@/controls/common/bank"
  import formTip from "mobile/components/form-tip"
  export default {
    mixins: [bank],
    data() {
      return {
      };
    },
    methods: {
      submit() {
        this.addBankNo(this.bindData).then(res=>{
          this.bindData.cardNo=''
          window.toast(res.message)
        }).catch(err=>{
          window.toast(err.message)
        })
      }
    },
    components: {
      formTip
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .add-bank-card {
    @include f(32px);
    padding: r(30) r(30) 0;
    .card-tip {
      line-height: 1.3;
      text-align: center;
      color: $cl3;
    }
  }
</style>
