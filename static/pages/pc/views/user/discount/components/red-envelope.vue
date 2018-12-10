<template>
  <div class="red-envelope">
    <!-- <div class="enve-tips">
      红包代码会以站内信形式发送给您,请注意查看站内信通知。
    </div> -->

    <el-form :model="data" :rules="discountRuleRed" ref="transferFormRed" label-width="100px" class="discount-form">
      <!-- 游戏平台 -->
      <el-form-item label="游戏平台" prop="couponType">
        <el-select v-model="data.couponType" placeholder="请选择需要转入的游戏平台">
          <el-option :label="item.name" v-for="item  in platformData" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <!-- 优惠代码 -->
      <el-form-item label="优惠代码" prop="couponCode" >
        <el-input v-model="data.couponCode" type="text" placeholder="请填写红包优惠代码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="submitbtn" @click="submitForm('transferFormRed')">提交</el-button>
        <el-button @click="resetForm('transferFormRed')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
    </div>
  </div>
</template>
<script>
  // import {platformData} from "@/assets/data"
  import {couponRed} from "@/controls/discount/couponRed"
  export default {
    mixins:[couponRed],
    data() {
      const couponType_check_red=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请选择游戏平台'))
        }else{
          callback();
        }
      }
      const couponCode_check_red=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入红包优惠代码'))
        }else{
          callback();
        }
      }
      return {
        platformData:[],
        data: {
          couponType: "", // 转入平台类型
          couponCode: ""// 红包代码
        },
        discountRuleRed:{ 
          // 验证规则配置
          couponType:[{validator:couponType_check_red,trigger:'blur'}],
          couponCode:[{validator:couponCode_check_red,trigger:'blur'}],
        }, 
        tips:[
          "1.红包优惠券可转入澳盈娱乐全部平台，须游戏平台账户低于5元才能使用红包优惠券，选择游戏平台，确认提交即可在相关游戏平台自动生成优惠礼金。",
          "2.使用红包优惠券无需进行存款，优惠券有相应的流水倍数，须达到限定投注额或是账户小于五元，才可进行户内转账。",
          "3.优惠券会通过站内消息发放，请您关注站内消息。",
          "4.请在红包优惠卷有效期内使用，逾期不补。"
        ]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.couponSubmit(this.data).then(res=>{
              window.toast(res.message)
            }).catch(err=>{
              console.log(err)
              window.toast(err.message)
            })
            // this.submit(this.data)
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
.enve-tips{
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