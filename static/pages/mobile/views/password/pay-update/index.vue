<template>
  <div class="pay-update">
    <input-inline label="原密码">
      <input type="password" ref="pwd" v-model="pwdForm.password" maxlength="6" placeholder="原密码">
      <eyes :dom="$refs.pwd"></eyes>
    </input-inline>
    <input-inline label="新密码">
      <input ref="pwd1" v-model="pwdForm.new_password" type="password" placeholder="新密码（6位数字）" maxlength="6">
      <eyes :dom="$refs.pwd1"></eyes>
    </input-inline>
    <input-inline label="重复新密码">
      <input ref="pwd1" v-model="pwdForm.confirm_password" type="password" placeholder="重复新密码（6位数字）" maxlength="6">
      <eyes :dom="$refs.pwd1"></eyes>
    </input-inline>
    <v-button @click="submit">确定</v-button>
    <router-link :to="{name:'forgotPayword',params:{type:'2'}}" class="cz">重置支付密码</router-link>
  </div>
</template>
<script>
  import check from "@/util/RegExp"
  import {
    payword
  } from '@/controls/auth/payword'
  export default {
    mixins: [payword],
    data() {
      return {

      };
    },
    methods: {
      submit() {
        this.changePwd(this.pwdForm).then(res => {
          window.toast(res.message)
        }).catch(err => {
          window.toast(err.message)
        })
      }
    },
    components: {}
  };

</script>

<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .pay-update {
    @include f(32px);
    padding: r(30) r(30) 0;
    .btn-search {
      display: block;
      margin: r(20) auto 0;
      background: $btn-bg1;
      text-align: center;
      @include f(36px);
      color: #fff;
      width: 90%;
      border-radius: r(100);
      line-height: r(88)
    }

    .cz {
      display: block;
      text-align: center;
      margin-top: 20px;
      color: rgb(192, 0, 0);
    }
  }

</style>
