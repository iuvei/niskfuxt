<template>
    <el-dialog
      v-if="!islogin"
      center
      title="注册成为会员"
      :visible.sync="showRegister"
      width="500px"
      >
      <!-- <h2 class="tips"  slot="title">注册成为会员</h2> -->
        <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="0" class="register-ruleForm" width="500">

          <el-form-item prop="account">
            <el-input v-model="registerForm.account" prefix-icon="iconfont icon-yonghu" placeholder="用户名(6-10位数字和字母)"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input :type="passwordType" v-model="registerForm.password" auto-complete="off" prefix-icon="iconfont icon-mima" placeholder="密码(6-16位数字和字母)">
              <el-button slot="append" icon="icobjh bjh-yanjing" @click="showPwd" v-if="passwordType=='password'"></el-button>
              <el-button slot="append" icon="icobjh bjh-my-yanjing-on" @click="showPwd" v-else></el-button>
            </el-input>
          </el-form-item>

          <el-form-item prop="phone">
            <el-input v-model="registerForm.phone" auto-complete="off" prefix-icon="iconfont icon-shouji" maxlength='11' placeholder="请正确填写手机号,取款唯一凭证">
            </el-input>
          </el-form-item>

          <el-form-item prop="imageCode">
            <el-input v-model="registerForm.imageCode" auto-complete="off" prefix-icon="iconfont icon-yanzhengma" placeholder="请输入验证码">
              <el-button slot="append" @click="getimg">
                <img @click="getimg" :src="authImg">
              </el-button>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>

        </el-form>
    </el-dialog>
</template>
<script>
  import  check from "@/util/RegExp"
  import {mapGetters} from 'vuex'
  import {registerControl} from "@/controls/auth/registerControl" // 引入公共业务逻辑
  export default {
    mixins:[registerControl],
    data() {
      // 登录名验证规则
      const account_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else if(!check.account.test(value)){
          return callback(new Error('登入账号的长度请介于6-10字符之间'));
        }
        else{
          callback();
        }
      };
      // 登陆密码验证规则
      const password_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        else if(!check.password.test(value)){
          return callback(new Error('登入账号的长度请介于6-10字符之间'));
        }
        else{
          callback();
        }
      };
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
        showRegister:false,
        passwordType:'password',
        registerRules: {
          account: [
            { validator: account_check, trigger: 'blur' }
          ],
          password: [
            { validator: password_check, trigger: 'blur' }
          ],
          phone: [
            { validator: phone_check, trigger: 'blur' }
          ],
          imageCode: [
            { validator: code_check, trigger: 'blur' }
          ],
        }
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    watch: {
      showRegister(val) {
        val && this.getimg()
      }
    },
    created() {
      this.$bus.$on('showRegister', (eventData) => {
        this.showRegister=eventData
      })
    },
    methods: {
      // 是否显示密码
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 确认事件
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 提交动作
            this.register(this.registerForm).then(res=>{    
              this.$emit('input', false)
              window.toast(res.message)
            }).catch(err=>{
              window.toast(err.message)
              console.log(err)
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .register-ruleForm{
    width:450px;
    margin:0 auto;
  }
</style>
