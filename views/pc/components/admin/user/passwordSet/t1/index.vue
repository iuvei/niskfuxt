<template>
  <Form :model="pwdForm" status-icon ref="pwdForm" :label-width="110" class="password-ruleForm">

    <FormItem label="旧密码" prop="password">
      <Input :type="passwordType.password" v-model="pwdForm.password" placeholder="请输入旧的登陆密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('password')" v-if="passwordType.password=='password'"></Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('password')" v-else></Button>
      </Input>
    </FormItem>

    <FormItem label="新密码" prop="new_password">
      <Input :type="passwordType.new_password" v-model="pwdForm.new_password" auto-complete="off" placeholder="请输入新的登陆密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'"></Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('new_password')" v-else></Button>
      </Input>
    </FormItem>
    
    <FormItem label="确认密码" prop="confirm_password">
      <Input :type="passwordType.confirm_password" v-model="pwdForm.confirm_password" auto-complete="off" placeholder="请再次输入新的登陆密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('confirm_password')" v-if="passwordType.confirm_password=='password'"></Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('confirm_password')" v-else></Button>
      </Input>
    </FormItem>

    <FormItem>
      <Button type="warning" @click="submitForm('pwdForm')">提交</Button>
      <Button @click="resetForm('pwdForm')">清空</Button>
    </FormItem>

  </Form>
</template>
<script>
  import check from "@@/utils/RegExp"
  import {loginUpdate} from '@@/controls/auth/loginUpdate'
  export default {
    mixins:[loginUpdate],
    data() {
      return {
        // 密码明/暗文切换
        passwordType:{
          confirm_password:'password',
          new_password:'password',
          password:'password'
        },
      };
    },
    methods: {
      // 是否显示密码
      showPwd(val) {
        if (this.passwordType[val] === 'password') {
          this.passwordType[val] = 'text'
        } else {
          this.passwordType[val] = 'password'
        }
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 确认事件
      submitForm(formName) {
            this.submitPwd(this.pwdForm).then(res=>{
              window.toast(res.message)
              this.$store.dispatch('LOGIN_OUT')
            }).catch(err=>{
              console.log(err)
              window.toast(err.message)
            })
      }
    }
  };

</script>
<style lang="scss" scoped>
  .password-ruleForm {
    width: 500px;
  }
  .btn{
    background: #ed7e12;
    color: #fff;
  }
</style>
