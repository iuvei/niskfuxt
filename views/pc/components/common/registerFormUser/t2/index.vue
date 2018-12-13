<template>
  <div class="register-form t2">
    <Form :model="formData" label-position="top">
      <FormItem label="用户名">
        <Input v-model="formData.account" placeholder="用户名(6-10位数字和字母)" :maxlength="20"></Input>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="formData.password" :type="passwordType.new_password" placeholder="密   码(6-16位数字或字母）" :maxlength="16">
          <Button slot="append"  @click="showPwd('new_password')" v-if="passwordType.new_password=='password'">查看</Button>
          <Button slot="append" @click="showPwd('new_password')" v-else>隐藏</Button>
        </Input>
      </FormItem>
      <FormItem label="手机号">
        <Input v-model="formData.phone" placeholder="取款唯一凭证，请正确填写手机号" :maxlength="11"></Input>
      </FormItem>
      <FormItem label="验证码">
        <Input v-model="formData.imageCode" placeholder="验证码" :maxlength="20">
          <a @click="GET_VALIDATE" slot="append" class="imgCode" >
            <img :src="validateImage" style="width:100px;height:20px;display:inline-block;">
          </a>
        </Input>
      </FormItem>
      <FormItem>
          <Button type="error" @click="register">马上注册</Button>
      </FormItem>
    </Form>
  </div>

</template>
<script>
  import {
    registerControl
  } from "@@/mixins/auth/registerControl" // 引入公共业务逻辑
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    mixins: [registerControl], // 混合
    data() {
      return {
        passwordType:{
          new_password:'password'
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
        this.registerSubmit(this.formData).then(res => {
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
      }
    }
  };

</script>
<style lang="scss" scoped>
</style>
