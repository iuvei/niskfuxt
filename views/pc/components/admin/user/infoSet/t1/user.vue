<template>
  <div class="form-rowbox perfect-data">
     <!--新用户完善个人信息 -->
    <Form :model="Data" ref="infoForm" label-position="right" :label-width="110" class="info-form" v-if="isCompleting">
      <FormItem label="真实姓名" prop="accountName">
        <Input v-model="Data.accountName" :readonly="userData.accountName?true:false" placeholder="输入真实姓名，必须与银行卡姓名一致"></Input>
      </FormItem>

      <FormItem label="手机号码" prop="phone">
        <Input v-model="Data.phone" :readonly="userData.phone?true:false" placeholder="输入手机号码">
          <Button type="warning" slot="append" v-if="userData.phoneValidStatus==0 && isUser" @click="checkverify">未验证</Button>
          <Button type="warning" slot="append" v-else-if="userData.phoneValidStatus !=0 && isUser">已验证</Button>
        </Input>
      </FormItem>

      <FormItem label="出生日期" prop="birthday" v-if="isUser">
        <DatePicker v-model="Data.birthday" type="date" placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss" :readonly="userData.birthday?true:false" style="width: 100%"></DatePicker>
      </FormItem>

      <FormItem label="电子邮箱" prop="email">
        <Input v-model="Data.email" :readonly="userData.email?true:false" placeholder="输入电子邮箱，方便找回密码">
          <!-- 邮箱非必填，修改按钮是在完善信息后，且没填邮箱时 -->
        </Input>
      </FormItem>

      <FormItem label="银行卡" prop="bankno" v-if="isUser">
        <Input v-model="Data.bankno" placeholder="输入16-19位卡号，系统自动识别" @input="verifyBankNumber(Data.bankno)">
          <!-- 银行卡必填，完善信息前 -->
          <Button slot="append" icon="el-icon-edit" v-if="!userData.bankno&&isCompleting">{{banktxt}}</Button>
        </Input>
      </FormItem>

      <FormItem label="微信号码" prop="wechat">
        <Input v-model="Data.wechat" :placeholder="userData.wechat?userData.wechat:'输入微信号码'">
        </Input>
      </FormItem>

      <FormItem label="Q Q号码" prop="qq">
        <Input v-model="Data.qq" :placeholder="userData.qq?userData.qq:'输入QQ号码'">
        </Input>
      </FormItem>

      <FormItem v-if="isCompleting">
        <Button class="btn" @click="submitForm('infoForm')">提交</Button>
        <Button @click="resetForm('infoForm')">重置</Button>
      </FormItem>

    </Form>
    <!-- 修改个人信息 -->
    <Form :model="Data" ref="infoForm" label-position="right" :label-width="110" class="info-form" v-if="!isCompleting">
      <FormItem label="真实姓名" prop="accountName">
        <Input v-model="Data.accountName" readonly :placeholder="Data.accountName"></Input>
      </FormItem>

      <FormItem label="手机号码" prop="phone">
        <Input v-model="Data.phone" readonly placeholder="输入手机号码">
          <Button slot="append" v-if="userData.phoneValidStatus==0 && isUser" @click="checkverify">未验证</Button>
          <Button slot="append" v-else-if="userData.phoneValidStatus !=0 && isUser">已验证</Button>
        </Input>
      </FormItem>

      <FormItem label="出生日期" prop="birthday" v-if="isUser">
        <DatePicker v-model="Data.birthday" type="date" placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss" readonly style="width: 100%"></DatePicker>
      </FormItem>

      <FormItem label="电子邮箱" prop="email">
        <Input v-model="Data.email" readonly placeholder="输入电子邮箱，方便找回密码">
          <!-- 邮箱非必填，修改按钮是在完善信息后，且没填邮箱时 -->
          <Button slot="append" icon="el-icon-edit" v-if="!userData.email" @click="upData('email')">修改</Button>
        </Input>
      </FormItem>

      <FormItem label="推广网址" prop="referWebsite" v-if="isAgent">
        <Input v-model="Data.referWebsite" readonly>
          <Button class="submitbtn" slot="append" icon="el-icon-edit" v-clipboard:copy="userData.referWebsite" v-clipboard:success="onCopy">复制</Button>
        </Input>
      </FormItem>

      <FormItem label="微信号码" prop="wechat">
        <Input v-model="Data.wechat" >
          <Button class="submitbtn" slot="append" icon="el-icon-edit" @click="upData('wechat')">修改</Button>
        </Input>
      </FormItem>

      <FormItem label="Q Q号码" prop="qq">
        <Input v-model="Data.qq" >
          <Button class="submitbtn" slot="append" icon="el-icon-edit" @click="upData('qq')">修改</Button>
        </Input>
      </FormItem>

    </Form>
    <Dialog title="验证手机" width="640px" v-if="userData.phoneValidStatus==0" :visible.sync="showVerify">
      <verifyPhone :data="reverseData" :phone="userData.phone"></verifyPhone>
    </Dialog>
  </div>
  
</template>
<script>
  import {
    completeUserInfo,
    getPhoneAndCode,
    modifyCustomerSocialInfo
  } from "@@/api/user"
  import {
    validateBankNo
  } from "@@/api/payment"
  import {
    mapGetters
  } from 'vuex'
  import check from "@@/utils/RegExp"
  import verifyPhone from '@/components/admin/user/verifyPhone/t1'
  import {
    update
  } from '@@/controls/user/update'
  import {
    bank
  } from '@@/controls/common/bank'
  export default {
    mixins: [update, bank],
    data() {
      return {
        showVerify: false,
        reverseData: null,
        showTips: false,
      }
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        // alert('submit!');
        // 提交完善信息表单
        this.completeSubmit(this.Data).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      // 更新某个值
      upData(type) {
        this.modifySubmit({
          [type]: this.Data[type]
        }).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      onCopy(){
        window.toast('复制成功')
      },
      checkverify() {
        // 这部分逻辑，应该放到verify组件内
        getPhoneAndCode().then(res => {
          if (res.success && this.userData.phone) {
            this.showVerify = true;
            this.reverseData = res.data;
          } else {
            window.toast(res.message)
          }
        })
      }
    },
    activated() {
      // 要用了keep-alive才会有作用
      Object.assign(this.Data, this.userData || {})
    },
    computed: {
      ...mapGetters(["userData","isUser","unread"]),
    },
    components: {
      verifyPhone
    }
  }

</script>
<style lang="scss" rel="scss">
  .info-form {
    width: 500px;
    .el-date-editor.Input,
    .el-date-editor.Input__inner {
      width: 100% !important;
    }
  }
</style>
