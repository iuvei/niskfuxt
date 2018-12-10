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
      <input type="text" v-model="data.couponCode" placeholder="红包代码">
    </v-input>
    <v-button @click="submit">确定转入</v-button>
    <form-tip>
      <p>1.红包优惠券可转入澳盈娱乐全部平台，须游戏平台账户低于5元才能使用红包优惠券，选择游戏平台，确认提交即可在相关游戏平台自动生成优惠礼金。</p>
      <p>2.使用红包优惠券无需进行存款，优惠券有相应的流水倍数，须达到限定投注额或是账户小于五元，才可进行户内转账。</p>
      <p>3.优惠券会通过站内消息发放，请您关注站内消息。</p>
      <p>4.请在红包优惠卷有效期内使用，逾期不补。</p>
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
    couponRed
  } from "@/controls/discount/couponRed"
  export default {
    mixins: [couponRed],
    data() {
      return {
        platformData:[],
      };
    },
    methods: {
      check() {
        if (this.formData.couponRemit == '') window.toast('请输入转入金额');
        else if (this.formData.couponCode == '') window.toast('请输入红包优惠券代码');
        else {
          return true;
        }
      },
      submit() {
        this.couponSubmit(this.data).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
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
