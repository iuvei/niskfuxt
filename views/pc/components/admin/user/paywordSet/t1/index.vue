<template>
  <div>
    <!-- 更新支付密码 -->
    <Form :model="pwdForm" status-icon ref="pwdForm" :label-width="110" class="password-ruleForm" v-if="isSetPayPwd">
      <FormItem label="原支付密码" prop="password">
        <Input :type="passwordType.password" v-model="pwdForm.password" :maxlength="6" placeholder="请输入旧的支付密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('password')" v-if="passwordType.password=='password'">查看</Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem label="新支付密码" prop="new_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
        <Input :type="passwordType.new_password" v-model="pwdForm.new_password" auto-complete="off" :maxlength="6"
          placeholder="请输入新的支付密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'">查看</Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('new_password')" v-else>隐藏</Button>
        </Input>

      </FormItem>
      <FormItem label="确认支付密码" prop="confirm_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
        <Input :type="passwordType.confirm_password" v-model="pwdForm.confirm_password" auto-complete="off" :maxlength="6"
          placeholder="请再次输入新的支付密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('confirm_password')" v-if="passwordType.confirm_password=='password'">查看</Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('confirm_password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem>
        <Button class="btn" @click="setPayWord('pwdForm')">提交</Button>
        <!--Button @click="$bus.$emit('showForgetPay',true)" type="text">忘记支付密码?</Button-->
      </FormItem>

    </Form>
    <!-- 设置支付密码 -->
    <Form :model="pwdForm" status-icon ref="pwdForm" :label-width="110" class="password-ruleForm" v-if="!isSetPayPwd">
      <FormItem label="登陆密码" prop="password">
        <Input :type="passwordType.password" v-model="pwdForm.password" auto-complete="off" placeholder="请输入当前登陆密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('password')" v-if="passwordType.password=='password'">查看</Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem label="支付密码" prop="new_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->

        <Input :type="passwordType.new_password" v-model="pwdForm.new_password" auto-complete="off" :maxlength="6"
          placeholder="请输入新的支付密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'">查看</Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('new_password')" v-else>隐藏</Button>
        </Input>

      </FormItem>
      <FormItem label="确认支付密码" prop="confirm_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->

        <Input :type="passwordType.confirm_password" v-model="pwdForm.confirm_password" auto-complete="off" :maxlength="6"
          placeholder="请再次输入新的支付密码">
        <Button slot="append" icon="iconyg yg-biyan" @click="showPwd('confirm_password')" v-if="passwordType.confirm_password=='password'">查看</Button>
        <Button slot="append" icon="iconyg yg-zhangyan" @click="showPwd('confirm_password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem>
        <Button class="btn" @click="setPayWord('pwdForm')">提交</Button>
      </FormItem>

    </Form>
  </div>
</template>
<script>
  import check from "@@/utils/RegExp"
  import {
    mapGetters
  } from 'vuex'
  import {
    payword
  } from '@@/controls/auth/payword'
  export default {
    mixins: [payword],
    data() {
      return {
        withdrawPwd: '',
        loginPwd: "",
        passwordType: {
          confirm_password: 'password',
          new_password: 'password',
          password: 'password'
        },
      };
    },
    computed: {
      ...mapGetters(["isSetPayPwd"])
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
      // 
      setPayWord(formName) {

        this.bindPwd(this.pwdForm).then(res => {
          // this.resetForm('pwdForm')
          window.toast(res.message)
        }).catch(err => {
          window.toast(err.message)
        })

      },
      updataPayWord() {
        this.changePwd(this.pwdForm).then(res => {
          window.toast(res.message)
          this.resetForm('pwdForm')
        }).catch(err => {
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

  .btn {
    background: #ed7e12;
    color: #fff;
  }

</style>
