<template>
  <div class="discount-code">
    <v-input select="1">
      <select v-model="data.couponType" id="couponType">
        <option value=""> 请选择 </option>
        <option v-for="item in platformData" :value="item.value" :key="item.value">
          {{item.name}}
        </option>
      </select>
    </v-input>
    <v-input>
      <input type="text" v-model.number="data.couponRemit" placeholder="请填写转入金额" name="couponRemit" maxlength="10">
      <span class="right-info">元</span>
    </v-input>
    <v-input>
      <input type="text" v-model="data.couponCode" placeholder="优惠代码">
    </v-input>
    <v-button @click="submit">确定转入</v-button>
    <form-tip>
      <p>1.只限对应平台使用，需游戏账户低于5元才能使用存送优惠券，填写红利代码，确认游戏平台，提交后在相关的游戏里面会自动得到优惠礼金。</p>
      <p>2.所有优惠券都有最低转帐金额要求，优惠券需达到有效投注才可进行转出，需小于5元才可申请其他优惠。</p>
      <p>3.优惠券无法跨平台使用，如:PT优惠券无法使用在TTG平台，使用时请先确认后在提交。</p>
      <p>4.优惠券会通过站内消息发放，请您关注站内消息。</p>
      <p>5.请在存送优惠券有效期内使用，逾期不补。</p>
    </form-tip>
  </div>
</template>
<script>
  import formTip from "mobile/components/form-tip"
  // import {
  //   platformData
  // } from "@/assets/data"
  import vInput from "mobile/components/form"
  import vButton from "mobile/components/form/button"

  import {
    coupon
  } from '@/controls/discount/coupon'
  export default {
    mixins: [coupon],
    data() {
      return {
        platformData:[],
      };
    },
    methods: {
      submit() {
        this.couponSubmit(this.data).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created() {},
    components: {
      formTip,
      vInput,
      vButton
    }
  };

</script>

<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .discount-code {
    padding: r(30);

  }

</style>
