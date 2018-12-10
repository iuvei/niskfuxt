<template>
  <div class="discount-code">
    <!-- <div class="discount-tips">
      优惠券代码会以站内信形式发送给您,请注意查看站内信通知。
    </div> -->

    <el-form :model="data" :rules="discountRule" ref="transferForm" label-width="100px" class="discount-form">
      <!-- 游戏平台 -->
      <el-form-item label="游戏平台" prop="couponType">
        <el-select v-model="data.couponType" placeholder="请选择需要转入的游戏平台">
          <el-option :label="item.name" v-for="item  in platformData" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <!-- 转入金额 -->
      <el-form-item label="转入金额" prop="couponRemit" >
        <el-input v-model="data.couponRemit" type="number" placeholder="请填写转入金额"></el-input>
      </el-form-item>

      <!-- 优惠代码 -->
      <el-form-item label="优惠代码" prop="couponCode" >
        <el-input v-model="data.couponCode" type="text" placeholder="请填写优惠代码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submitbtn" @click="submitForm('transferForm')">提交</el-button>
        <el-button @click="resetForm('transferForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
    </div>
  </div>
</template>
<script>
  // import {    platformData  } from "@/assets/data"
  import {coupon} from '@/controls/discount/coupon'
  export default {
    mixins:[coupon],
    data() {
      const couponType_check=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请选择游戏平台'))
        }else{
          callback();
        }
      }
      const couponRemit_check=(rule,value,callback)=>{
        if (!value) {
          return callback(new Error('请输入转入金额'));
        }else if (!/^\d+$/.test(value)) {
          return callback(new Error('请输入整数金额'));
        }else{
          callback();
        }
      }
      const couponCode_check=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入优惠代码'))
        }else{
          callback();
        }
      }
      return {
        platformData:[],
        discountRule:{
          couponType:[{validator:couponType_check,trigger:'blur'}],
          couponCode:[{validator:couponCode_check,trigger:'blur'}],
          couponRemit:[{validator:couponRemit_check,trigger:'blur'}]
        },
        tips:[
          "1.只限对应平台使用，需游戏账户低于5元才能使用存送优惠券，填写红利代码，确认游戏平台，提交后在相关的游戏里面会自动得到优惠礼金。",
          "2.所有优惠券都有最低转帐金额要求，优惠券需达到有效投注才可进行转出，需小于5元才可申请其他优惠。",
          "3.优惠券无法跨平台使用，如:PT优惠券无法使用在TTG平台，使用时请先确认后在提交。",
          "4.优惠券会通过站内消息发放，请您关注站内消息。",
          "5.请在存送优惠券有效期内使用，逾期不补。",
        ]
      };
    },
    watch: {
      "data.couponRemit" (val) {
        if (/[^\d]/g.test(val)) {
          this.data.couponRemit = this.data.couponRemit.toString().replace(/[^\d]/g, '')
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.couponSubmit(this.data).then(res=>{
              window.toast(res.message)
              this.resetForm('transferForm')
            }).catch(err=>{
              console.log(err)
              window.toast(err.message)
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  };

</script>

<style lang="scss" scoped>
.discount-tips{
        color: #09affe;
        font-size: 30px;
        margin: 20px 0;
        line-height:1.5;
}
  .discount-form {
    // margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
.tipsDiv{
    font-size: 15px;
    line-height: 30px;
    color: #d7b26c;
    padding: 0 0 20px 29px;
}
.submitbtn{
  background: #8d3e3c;
  background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: linear-gradient(to right,#8d3e3c,#bb4e49);
  border: 1px solid #8d3e3c;
  color: #fff;
}
</style>
