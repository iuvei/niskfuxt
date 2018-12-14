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
      <el-form-item label="优惠代码" prop="couponCode">
        <el-input v-model="data.couponCode" type="text" placeholder="请填写红包优惠代码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="submitbtn" @click="submitForm('transferFormRed')">提交</el-button>
        <el-button @click="resetForm('transferFormRed')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox">1.请选择正确的游戏平台。填写红利代码，确认提交，红利金额会自动添加到您转到的游戏平台里。</p>
        <p class="tipsBox">2.优惠券需游戏账户低于5元才能使用。达到相应的有效投注额要求或游戏账户低于5元，才能再次进行户内转账。</p>
        <p class="tipsBox">3.如何得到优惠券：红包优惠券代码会以站内信形式发送。</p>
    </div>
  </div>
</template>
<script>
  // import {platformData} from "@/assets/data"
  import {
    couponRed
  } from "@/controls/discount/couponRed"
  export default {
    mixins: [couponRed],
    data() {
      const couponType_check_red = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请选择游戏平台'))
        } else {
          callback();
        }
      }
      const couponCode_check_red = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入红包优惠代码'))
        } else {
          callback();
        }
      }
      return {
        platformData: [],
        data: {
          couponType: "", // 转入平台类型
          couponCode: "" // 红包代码
        },
        discountRuleRed: {
          // 验证规则配置
          couponType: [{
            validator: couponType_check_red,
            trigger: 'blur'
          }],
          couponCode: [{
            validator: couponCode_check_red,
            trigger: 'blur'
          }],
        },
        tips: [
          "红包代码会以站内信形式发送给您,请注意查看站内信通知。"
        ]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.couponSubmit(this.data).then(res => {
              window.toast(res.message)
            }).catch(err => {
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
  .enve-tips {
    color: #09affe;
    font-size: 30px;
    margin: 20px 0;
    line-height: 1.5;
  }

  .discount-form {
    margin-top: 30px;
    width: 500px;

    .el-select {
      display: block !important;
    }
  }

  .tipsDiv {
    font-size: 15px;
    line-height: 30px;
    width: 800px;

    .tipsTitle {
      color: #fff;
    }

    .tipsBox {
      color: #b5b5b5;
    }
  }

  .submitbtn {
    background: #e2b85a;
    background: -moz-linear-gradient(to right, #e2b85a, #b99548);
    background: -webkit-linear-gradient(to right, #e2b85a, #b99548);
    background: -o-linear-gradient(to right, #e2b85a, #b99548);
    background: linear-gradient(to right, #e2b85a, #b99548);
    border: 1px solid #e2b85a;
    color: #fff;
  }

</style>
