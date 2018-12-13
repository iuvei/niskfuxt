<template>
  <div class="register-form-agent">
    <Form :model="registerForm" label-position="top" class="flxe-form">
      <Divider orientation="left">基本信息</Divider>
      <FormItem label="*用户名">
        <Input v-model="registerForm.loginname" placeholder="用户名(6-10位数字和字母)" :maxlength="20">
        <span slot="prepend">a_</span>
        </Input>
      </FormItem>
      <FormItem label="*密码">
        <Input v-model="registerForm.password" :type="passwordType.new_password" placeholder="密   码(6-16位数字或字母）"
          :maxlength="16">
        <Button slot="append" @click="showPwd('new_password')" v-if="passwordType.new_password=='password'">查看</Button>
        <Button slot="append" @click="showPwd('new_password')" v-else>隐藏</Button>
        </Input>
      </FormItem>
      <FormItem label="*确认密码">
        <Input v-model="registerForm.confirmPassword" :type="passwordType.confirmPassword" placeholder="密   码(6-16位数字或字母）"
          :maxlength="16">
        <Button slot="append" @click="showPwd('confirmPassword')" v-if="passwordType.confirmPassword=='password'">查看</Button>
        <Button slot="append" @click="showPwd('confirmPassword')" v-else>隐藏</Button>
        </Input>
      </FormItem>
      <FormItem label="*推广网址">
        <Input v-model="registerForm.referWebsite" placeholder="推广网址(1-6位数字/字母)" :maxlength="6">
        <Button slot="append">{{domainName||'获取代理域名失败'}}</Button>
        </Input>
      </FormItem>

      <Divider orientation="left">身份信息</Divider>
      <FormItem label="*真实姓名">
        <Input v-model="registerForm.accountName" placeholder="请输入真实姓名" :maxlength="20"></Input>
      </FormItem>

      <FormItem label="*出生日期" prop="birthday">
        <DatePicker v-model="registerForm.birthday" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 100%"></DatePicker>
      </FormItem>

      <Divider orientation="left">联系方式信息</Divider>
      <FormItem label="*电子邮箱">
        <Input v-model="registerForm.email" placeholder="请输入电子邮箱" :maxlength="100"></Input>
      </FormItem>
      <FormItem label="*手机号">
        <Input v-model="registerForm.phone" placeholder="取款唯一凭证，请正确填写手机号" :maxlength="11"></Input>
      </FormItem>
      <FormItem label="QQ号码">
        <Input v-model="registerForm.qq" placeholder="请输入QQ" :maxlength="20"></Input>
      </FormItem>
      <FormItem label="微信号码">
        <Input v-model="registerForm.wechat" placeholder="请输入微信" :maxlength="30"></Input>
      </FormItem>
      <Divider orientation="left">其他</Divider>

      <FormItem label="代理推荐码">
        <Input v-model="registerForm.partner" placeholder="输入代理推荐人代码" :maxlength="20"></Input>
      </FormItem>
      <FormItem label="*验证码">
        <Input v-model="registerForm.validateCode" placeholder="验证码" :maxlength="20">
        <a @click="GET_VALIDATE" slot="append" class="imgCode">
          <img :src="validateImage" style="width:100px;height:20px;display:inline-block;">
        </a>
        </Input>
      </FormItem>
      <footer style="text-align:center;width:100%;">
        <Button type="error" @click="register">马上加盟</Button>
      </footer>
    </Form>
  </div>

</template>
<script>
  import {
    AgentRegisterControl
  } from '@@/mixins/auth/registerAgent'
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    mixins: [AgentRegisterControl], // 混合
    data() {
      return {
        passwordType: {
          new_password: 'password',
          confirmPassword: 'password'
        }
      };
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      showPwd(val) {
        if (this.passwordType[val] === 'password') {
          this.passwordType[val] = 'text'
        } else {
          this.passwordType[val] = 'password'
        }
      },
      register() {
        this.registerSubmit(this.registerForm).then(res => {
          this.$Message.success({
            content: res.message,
            closable: true
          })
        }).catch(err => {
          this.$Message.error({
            content: err.message,
            closable: true
          })
        })
        console.log('login')
      }
    }
  };

</script>
<style lang="scss">
  .register-form-agent {}

</style>
