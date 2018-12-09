<template>
  <div class="red-envelope">
    <div class="enve-tips">
      红包代码会以站内信形式发送给您,请注意查看站内信通知。
    </div>

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
        <el-button type="primary" @click="submitForm('transferFormRed')">提交</el-button>
        <el-button @click="resetForm('transferFormRed')">重置</el-button>
      </el-form-item>
    </el-form>
        <div class="tips" style="padding-top:100px;">
          <h3>温馨提示：</h3>
              <p>1.请选择游戏平台，填写正确的优惠代码后提交，将会自动添加至您选择的游戏平台;</p>
              <p>2.如提示“优惠券不存在”代表优惠代码填写错误，请您仔细确认，注意大小写要区分开，避免存在空格键；</p>
              <p>3.如提示“优惠券类型不匹配”代表您选择的优惠兑换类别错误；</p>
              <p>4.游戏平台账户余额需低于5元及未存在其他优惠流水限制方可使用存送优惠券;</p>
              <p>5.优惠券有效期为30天，请您在有效期内使用，逾期视为自动放弃</p>
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
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.couponSubmit(this.data).then(res=>{
              console.log(res)
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
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
.tips{
    clear:both;
    h3{

    }
    p{
      line-height:2;
      span{
        color:red;
      }
    }
  }
</style>