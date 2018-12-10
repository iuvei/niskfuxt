<template>
  <div class="login-update">
    <div class="form-box">
      <input-inline label="原密码">
        <input ref="pwd" v-model='pwdForm.password' placeholder="6-16位数字和字母" type="password">
        <eyes :dom="$refs.pwd"></eyes>
        
      </input-inline>
      <input-inline label="新密码">
        <input ref="pwd1" v-model='pwdForm.new_password' type="password" placeholder="6-16位数字和字母">
        <eyes :dom="$refs.pwd1"></eyes>
        
      </input-inline>
      <input-inline label="确认新密码">
        <input ref="pwd2" v-model='pwdForm.confirm_password' type="password" placeholder="6-16位数字和字母">
        <eyes :dom="$refs.pwd2"></eyes>
        
      </input-inline>
    </div>
    <v-button @click="submit" class="subButton">确定</v-button>
  </div>
</template>
<script>
  import {changepws} from "@/api/payment";
  import {loginUpdate} from '@/controls/auth/loginUpdate'

  export default {
    mixins:[loginUpdate],    
    data() {
      return {
      };
    },
    props: {},
    methods: {

      submit() {
            this.submitPwd(this.pwdForm).then(res=>{
              window.toast(res.message)
              this.$store.dispatch('LOGIN_OUT')
              // window.reload()
              this.$router.push({name:"login"})
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

  .login-update {
    @include f(32px);
    .form-box {
      padding: r(30) r(30) 0;
    }
    .subButton {
      width: 92%!important;
    }
  }
</style>
