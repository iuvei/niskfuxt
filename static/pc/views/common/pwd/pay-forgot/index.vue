<template>
    <el-dialog
      v-if="isSetPayPwd"
      center
      title="找回支付密码"
      :visible.sync="showForget"
      width="500px"
      >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="短信找回" name="Sms">
        <el-form :model="phone" :rules="phoneRules" ref="phoneForm" label-width="0" class="register-ruleForm" width="500">

          <el-form-item prop="phone">
            <el-input v-model="phone.phone" prefix-icon="iconfont icon-shouji" placeholder="请输入绑定手机号码" maxlength="11"></el-input>
          </el-form-item>

          <el-form-item prop="code">
            <el-input v-model="phone.code" auto-complete="off" prefix-icon="iconfont icon-yanzhengma" maxlength="10" placeholder="请输入验证码">
              <el-button slot="append" @click="getimg">
                <img @click="getimg" :src="authImg">
              </el-button>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('phoneForm')" :loading="isLoadingSms">提交</el-button>
          </el-form-item>

        </el-form>
      </el-tab-pane>
      <el-tab-pane label="邮箱找回" name="Email">
        <el-form :model="phone" :rules="emailRules" ref="emailForm" label-width="0" class="register-ruleForm" width="500">

          <el-form-item prop="email">
            <el-input v-model="phone.email" prefix-icon="iconfont icon-youjian" placeholder="请输入绑定的邮箱" maxlength="50"></el-input>
          </el-form-item>

          <el-form-item prop="code">
            <el-input v-model="phone.code" auto-complete="off" prefix-icon="iconfont icon-yanzhengma" maxlength="10" placeholder="请输入验证码">
              <el-button slot="append" @click="getimg">
                <img @click="getimg" :src="authImg">
              </el-button>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('emailForm')" :loading="isLoadingEmail">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="在线客服" name="Cs">
      </el-tab-pane>
    </el-tabs>
    </el-dialog>
</template>
<script>
  import  {SETTING} from "@/assets/data";
  import  check from "@/util/RegExp";
  import openWindow from '@/util/openWindow'
  import {mapGetters} from 'vuex'
  import {payForgot} from '@/controls/auth/payForgot'
  export default {
    mixins:[payForgot],
    data() {
      // 手机号验证规则
      const phone_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }else if(!check.phone.test(value)){
          return callback(new Error('手机号格式不正确'));
        }
        else{
          callback();
        }
      };
      // 邮箱验证规则
      const email_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱地址不能为空'));
        }else if(!check.email.test(value)){
          return callback(new Error('邮箱地址不正确'));
        }
        else{
          callback();
        }
      };
      // 验证码验证规则
      const code_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        else{
          callback();
        }
      };
      return {
        SETTING,
        showForget:false,
        authImg: '',
        activeName:'Sms',// 当前选择tab
        isLoadingSms:false,
        isLoadingEmail:false,
        phoneRules:{
          phone: [
            { validator: phone_check, trigger: 'blur' }
          ],
          code: [
            { validator: code_check, trigger: 'blur' }
          ]
        },
        emailRules:{
          email: [
            { validator: email_check, trigger: 'blur' }
          ],
          code: [
            { validator: code_check, trigger: 'blur' }
          ]
        },
      }
    },
    computed: {
      ...mapGetters(["isSetPayPwd"])
    },
    methods: {
      handleClick($tab,$evt){
        // 选项点击事件
        if($tab.name=='Cs'){
          // 客服
          openWindow(SETTING.live800, '在线客服', 700, 640)
        }
      },
      // 确认事件
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(formName=='phoneForm'){
              this.phone.pipe = 'PHONE';
              this.isLoadingSms=true;
              this.findBySms(this.phone).then(res=>{
                this.resetForm('phoneForm')
                this.isLoadingSms=false;
                window.toast(res.message)
              }).catch(err=>{
                this.isLoadingSms=false;
                console.log(err)
                window.toast(err.message)
              })
            }else if(formName=='emailForm'){
              this.phone.pipe = 'EMAIL';
              this.isLoadingEmail=true;
              this.findByEmail(this.phone).then(res=>{
                this.isLoadingEmail=false;
                this.resetForm('emailForm')
                window.toast(res.message)
              }).catch(err=>{
                this.isLoadingEmail=false;
                console.log(err)
                window.toast(err.message)
              })
            }
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        // 重置表单
        this.$refs[formName].resetFields();
      }
    },
    created(){
      this.$bus.$on('showForgetPay', (eventData) => {
        this.showForget=eventData
      })
      // 获取验证码
      this.getimg();
    }
  }
</script>
<style lang="scss"></style>
