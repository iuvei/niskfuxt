<template>
  <!--
    业务逻辑
    1、需要先判断是否已经设置过支付密码
      已设置：显示修改支付密码表单
      未设置：显示设置支付密码表单
    2、支付密码均需要二次md5（mixins里已经处理）加密后发送给后台，注意number和String加密结果不同，所以Input不能绑定为v-model.number
  -->
  <div>
    <!-- 更新支付密码 -->
    <Form :model="formData" status-icon ref="pwdForm" :label-width="110" class="password-ruleForm" v-if="isSetPayPwd">
      <FormItem label="原支付密码" prop="password">
        <Input :type="passwordType.password" v-model="formData.password" :maxlength="6" placeholder="请输入旧的支付密码">
        <Button slot="append" @click="showPwd('password')" v-if="passwordType.password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem label="新支付密码" prop="new_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
        <Input :type="passwordType.new_password" v-model="formData.new_password" auto-complete="off" :maxlength="6"
          placeholder="请输入新的支付密码">
        <Button slot="append" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('new_password')" v-else>隐藏</Button>
        </Input>

      </FormItem>
      <FormItem label="确认支付密码" prop="confirm_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
        <Input :type="passwordType.confirm_password" v-model="formData.confirm_password" auto-complete="off" :maxlength="6"
          placeholder="请再次输入新的支付密码">
        <Button slot="append" @click="showPwd('confirm_password')" v-if="passwordType.confirm_password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('confirm_password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem>
        <Button class="btn" @click="setPayWord('pwdForm')">提交</Button>
        <!--Button @click="$bus.$emit('showForgetPay',true)" type="text">忘记支付密码?</Button-->
      </FormItem>

    </Form>
    <!-- 初次设置支付密码 -->
    <Form :model="formData" status-icon ref="pwdForm" :label-width="110" class="password-ruleForm" v-if="!isSetPayPwd">
      <FormItem label="登陆密码" prop="password">
        <Input :type="passwordType.password" v-model="formData.password" auto-complete="off" placeholder="请输入当前登陆密码">
        <Button slot="append" @click="showPwd('password')" v-if="passwordType.password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('password')" v-else>隐藏</Button>
        </Input>
      </FormItem>

      <FormItem label="支付密码" prop="new_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->

        <Input :type="passwordType.new_password" v-model="formData.new_password" auto-complete="off" :maxlength="6"
          placeholder="请输入新的支付密码">
        <Button slot="append" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('new_password')" v-else>隐藏</Button>
        </Input>

      </FormItem>
      <FormItem label="确认支付密码" prop="confirm_password">
        <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->

        <Input :type="passwordType.confirm_password" v-model="formData.confirm_password" auto-complete="off" :maxlength="6"
          placeholder="请再次输入新的支付密码">
        <Button slot="append" @click="showPwd('confirm_password')" v-if="passwordType.confirm_password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('confirm_password')" v-else>隐藏</Button>
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
  } from '@@/mixins/auth/payword'
  export default {
    mixins: [payword],
    data() {
      return {
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
      // 初次设置支付密码
      setPayWord(formName) {
        this.bindPwd(this.formData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          window.toast(err.message)
        })

      },
      // 已设置过支付密码，修改旧支付密码
      updataPayWord() {
        this.changePwd(this.formData).then(res => {
          window.toast(res.message)
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
