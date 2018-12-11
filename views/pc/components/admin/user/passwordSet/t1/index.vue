<template>
  <Form :model="formData" status-icon ref="pwdForm" :label-width="110" class="password-ruleForm">

    <FormItem label="旧密码" prop="password">
      <Input :type="passwordType.password" v-model="formData.password" placeholder="请输入旧的登陆密码">
        <Button slot="append" @click="showPwd('password')" v-if="passwordType.password=='password'"><Icon type="ios-eye-off" /></Button>
        <Button slot="append" @click="showPwd('password')" v-else><Icon type="ios-eye" /></Button>
      </Input>
    </FormItem>

    <FormItem label="新密码" prop="new_password">
      <Input :type="passwordType.new_password" v-model="formData.new_password" auto-complete="off" placeholder="请输入新的登陆密码">
        <Button slot="append" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'"><Icon type="ios-eye-off" /></Button>
        <Button slot="append" @click="showPwd('new_password')" v-else><Icon type="ios-eye" /></Button>
      </Input>
    </FormItem>
    
    <FormItem label="确认密码" prop="confirm_password">
      <Input :type="passwordType.confirm_password" v-model="formData.confirm_password" auto-complete="off" placeholder="请再次输入新的登陆密码">
        <Button slot="append" @click="showPwd('confirm_password')" v-if="passwordType.confirm_password=='password'"><Icon type="ios-eye-off" /></Button>
        <Button slot="append" @click="showPwd('confirm_password')" v-else><Icon type="ios-eye" /></Button>
      </Input>
    </FormItem>

    <FormItem>
      <Button type="warning" @click="submitForm('pwdForm')">提交</Button>
    </FormItem>

  </Form>
</template>
<script>
  import check from "@@/utils/RegExp"
  import {passwordSet} from '@@/mixins/auth/passwordSet'
  export default {
    mixins:[passwordSet],
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
            this.submitPwd(this.formData).then(res=>{
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
