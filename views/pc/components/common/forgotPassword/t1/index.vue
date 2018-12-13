<template>
    <div class="pwd-forgot-form">
      <div class="pwd-forgot-header">
        <a class="tabs" :class="{active:findBackType=='phone'}" @click="findBackType='phone'">手机找回</a>
        <a class="tabs" :class="{active:findBackType=='email'}" @click="findBackType='email'">邮箱找回</a>
        <a class="tabs" target="_blank" :href="$SITE.contact.live800">客服找回</a>
      </div>
      <Form :model="phone" label-position="top" v-show="findBackType=='phone'">
        <FormItem label="游戏帐号">
          <Input v-model="phone.name" placeholder="请填写游戏账号" :maxlength="16"></Input>
        </FormItem>
        <FormItem label="手机号">
          <Input v-model="phone.phone" placeholder="请填写手机号" :maxlength="11"></Input>
        </FormItem>
        <FormItem>
          <Button type="error" @click="submitPhone">提交</Button>
        </FormItem>
      </Form>
      <Form :model="email" label-position="top" v-show="findBackType=='email'">
        <FormItem label="游戏帐号">
          <Input v-model="email.name" placeholder="请填写游戏账号" :maxlength="16"></Input>
        </FormItem>
        <FormItem label="邮箱地址">
          <Input v-model="email.yxdz" placeholder="请填写绑定邮箱地址" :maxlength="100"></Input>
        </FormItem>
        <FormItem label="验证码">
          <Input v-model="email.code" placeholder="验证码" :maxlength="50">
          <a @click="GET_VALIDATE" slot="append" class="imgCode" >
            <img :src="validateImage" style="width:100px;height:20px;display:inline-block;">
          </a>
        </Input>
        </FormItem>
        <FormItem>
          <Button type="error" @click="submitEmail">提交</Button>
        </FormItem>
      </Form>

  </div>

</template>
<script>
  import {pwdForgot} from "@@/mixins/auth/pwdForgot"; // 引入公共业务逻辑
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  export default {
    mixins: [pwdForgot], // 混合
    data() {
      return {
        findBackType:'phone'
      };
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods:{
      ...mapMutations(['GET_VALIDATE']),
      submitPhone(){
        this.getbackPwdByDx_dc(this.phone).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          window.toast(err.message)
        })
      },
      submitEmail(){
        this.getbackPwdByEmail(this.email).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          window.toast(err.message)
        })
      }
    }
  };
</script>
<style lang="scss" scoped>
.pwd-forgot-header{
  display:flex;
  justify-content: space-around;
  margin-bottom:20px;
  .tabs{
    color:#333;
    border-bottom:solid 2px transparent;
    transition:all 0.5s;
    padding:4px 10px;
    &.active,&:hover{
      border-bottom:solid 2px #333;
    }
  }
}
</style>
