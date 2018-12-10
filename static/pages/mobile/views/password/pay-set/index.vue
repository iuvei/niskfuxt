<template>
  <div class="pay-set">
    <input-inline label="登录密码">
      <input ref="pwd" v-model="pwdForm.password" type="password" placeholder="登录密码（6-16位数字和字母）" maxlength="18">
      <eyes :dom="$refs.pwd"></eyes>
    </input-inline>
    <input-inline label="支付密码">
      <input v-model="pwdForm.new_password" ref="pwd1" type="password" placeholder="支付密码（6位数字）" maxlength="6">
      <eyes :dom="$refs.pwd1"></eyes>
    </input-inline>
    <input-inline label="重复新密码">
      <input v-model="pwdForm.confirm_password" ref="pwd1" type="password" placeholder="重复支付密码（6位数字）" maxlength="6">
      <eyes :dom="$refs.pwd1"></eyes>
    </input-inline>
    <v-button @click="submit">确定</v-button>
  </div>
</template>
<script>
  import check from "@/util/RegExp"
  import {payword} from '@/controls/auth/payword'
  export default {
    mixins:[payword],
    data(){
      return {
        withdrawPwd: '',
        loginPwd: ""
      };
    },
    methods: {
      submit() {
        this.bindPwd(this.pwdForm).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    components: {

    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .pay-set {
    @include f(32px);
    padding: r(30) r(30) 0;
  }
</style>
