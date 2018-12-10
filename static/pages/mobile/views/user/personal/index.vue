<template>
  <div class="user-personal-updata">

    <input-inline label="真实姓名">
      <input v-model="Data.accountName" :readonly="userData.accountName?true:false" type="text" placeholder="请输入真实姓名">
    </input-inline>
    <input-inline label="手机号码">
      <input v-model="Data.phone" :readonly="userData.phone?true:false" type="text" placeholder="请输入手机号码">
    </input-inline>
    <input-inline label="出生日期" v-if="isUser">
      <input v-model="Data.birthday" :readonly="userData.birthday?true:false" type="date" placeholder="请输入出生日期">
    </input-inline>
    <input-inline label="电子邮箱">
      <input v-model="Data.email" :readonly="userData.email?true:false" :placeholder="userData.email?userData.email:'输入邮箱地址'" type="text">
      <span @click="upData('email')" v-if="!userData.email&&!isCompleting" class="right-info ">修改</span>
    </input-inline>

    <input-inline label="推广网址" v-if="isAgent">
      <input v-model="Data.referWebsite" :readonly="userData.referWebsite?true:false" type="text" placeholder="请输入推广网址">
      <span class="right-info" v-clipboard:copy="userData.referWebsite" v-clipboard:success="onCopy">复制</span>
    </input-inline>
    <input-inline label="银行卡号" v-if="isCompleting">
      <input v-model="Data.bankno" placeholder="输入16-19位卡号后，系统智能识别" @input="verifyBankNumber(Data.bankno)" maxlength="19" type="text">
    </input-inline>
    <div v-if="!userData.bankno&&isCompleting" class="page_content_tip">{{banktxt}}</div>
    <input-inline label="微信">
      <input v-model="Data.wechat" :placeholder="userData.wechat?userData.wechat:'输入微信号码'" type="text">
      <span v-if="!isCompleting" @click="upData('wechat')" class="right-info">修改</span>
    </input-inline>
    <input-inline label="QQ">
      <input v-model="Data.qq" :placeholder="userData.qq?userData.qq:'输入QQ号码'" type="text">
      <span v-if="!isCompleting" @click="upData('qq')" class="right-info">修改</span>
    </input-inline>

    <v-button @click="submitForm" v-if="isCompleting">保存</v-button>

    <v-verify v-show="userData.phoneValidStatus==0&&isUser"></v-verify>
    <bank-list></bank-list>
  </div>
</template>
<script>
  import {
    modifyCustomerSocialInfo
  } from '@/api/user';
  import {    mapGetters  } from 'vuex'
  import vVerify from './components/verify'
  import bankList from 'mobile/components/bank-list/index'
  import {    update  } from '@/controls/user/update'
  import {    bank  } from '@/controls/common/bank'
  export default {
    mixins: [update, bank],
    data() {
      return {
        newDetail: {
          qq: "",
          wechat: "",
          email: ''
        },
        oldDetail: {
          qq: "",
          wechat: "",
          email: ''
        }
      };
    },
    methods: {
      onCopy(){
        window.toast('复制成功')
      },
      submitForm(formName) {
        // alert('submit!');
        // 提交完善信息表单
        this.completeSubmit(this.Data).then(res => {
          window.toast(res.message)
          this.$bus.$emit('getBankList')
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
    },
    computed: {
      ...mapGetters(["userData","isUser"])
    },
    created() {
      Object.assign(this.Data, this.userData || {})
    },
    activated() {
      // 要用了keep-alive才会有作用
      Object.assign(this.Data, this.userData || {})
    },
    components: {
      vVerify,
      bankList
    }
  };

</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .user-personal-updata {
    padding: r(30);
  }
  .user-personal {
    @include f(32px);
  }
    .page_content_tip {
      padding: r(20);
      line-height: 1.4;
      text-align: center;
      color: red;
    }

</style>
