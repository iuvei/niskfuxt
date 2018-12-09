<template>
  <div class="register-form">
    <Form :model="loginData" label-position="top">
      <FormItem label="用户名">
        <Input v-model="loginData.account" placeholder="用户名(6-10位数字和字母)" :maxlength="20"></Input>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="loginData.password" placeholder="密   码(6-16位数字或字母）" :maxlength="16"></Input>
      </FormItem>
      <FormItem label="验证码">
        <Input v-model="loginData.imageCode" placeholder="验证码" :maxlength="20">
          <a @click="GET_VALIDATE" slot="append" class="imgCode" >
            <img :src="validateImage" style="width:100px;height:20px;display:inline-block;">
          </a>
        </Input>
      </FormItem>
      <FormItem>
          <Button @click="showRegister=false;">取消</Button>
          <Button type="error" @click="login">马上注册</Button>
      </FormItem>

    </Form>
  </div>

</template>
<script>
  import {loginControl} from "@@/controls/auth/loginControl"; // 引入公共业务逻辑

  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    mixins: [loginControl], // 混合
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      login(){
        this.loginSubmit(this.loginData).then(res=>{
          // window.toast(res.message)
          this.$Message.success({
            content:res.message,
            closable:true
          })
        }).catch(err=>{
          this.$Message.error({
            content:err.message,
            closable:true
          })
        })
        console.log('login')
      }
    }
  };

</script>
<style lang="scss" scoped>
  .register-form {
  }

</style>
