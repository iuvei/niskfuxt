<template>
  <div class="save-send">
    <el-form :model="submitData" ref="transferForm" :rules="saveSendRules" label-width="100px" class="discount-form">
      <!-- 游戏平台 -->
      <br />
      <el-form-item label="游戏平台">
        <el-select v-model="Type" placeholder="请选择需要转入的游戏平台">
          <el-option :label="item.name" v-for="(item,i)  in platformData" :value="item.value" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <!-- 优惠幅度 -->
      <el-form-item label="优惠幅度" prop="youhuiConfigId">
        <el-select v-model="submitData.youhuiConfigId" placeholder="请先选择转入的游戏平台">
          <el-option :label="item.name" v-for="item  in listData" :value="item.id" :key="item.id" v-if="item.platform==Type"></el-option>
        </el-select>
      </el-form-item>
      <!-- 转入金额 -->
      <el-form-item label="转入金额" prop="remit">
        <el-input v-model.number="submitData.remit" type="number" placeholder="请输入转入金额"></el-input>
      </el-form-item>

      <!-- 可获得红利 -->
      <el-form-item label="可获得红利">
        <el-input v-model.number="percentMoney" readonly placeholder="选择优惠幅度后自动计算"></el-input>
      </el-form-item>

      <!-- 倍数 -->
      <el-form-item label="流水倍数">
        <el-input v-model="betMultiples" readonly placeholder="选择优惠幅度后自动计算"></el-input>
      </el-form-item>

      <!-- 取款流水要求 -->
      <el-form-item label="取款流水要求">
        <el-input v-model.number="limitMoney" readonly placeholder="选择优惠幅度后自动计算"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="submitbtn" @click="submitForm('transferForm')">提交</el-button>
        <el-button @click="resetForm('transferForm')">重置</el-button>
        <router-link class="formbtn btn-reset" :to="{name:'datum'}" v-if="userData.phoneValidStatus=='0'">
          <el-button type="text">验证手机号码</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox">1、每天的00:00-01:00为系统结算时间，暂时无法使用自助存送。</p>
        <p class="tipsBox">2、申请存送后台彩金会自动添加到相应平台，您直接进入游戏即可。</p>
        <p class="tipsBox">3、存送优惠活动有相应的游戏限制，请您在申请时详细了解该优惠活动规则及限制游戏，如违反活动规则，例如投注限制游戏等，将取消申领资格，扣除所有红利及盈利。</p>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from "vuex"
  import {
    saveSend
  } from '@/controls/discount/saveSend'
  export default {
    mixins: [saveSend],
    data() {
      const youhuiConfigId_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请选择优惠方案'));
        } else {
          callback();
        }
      };
      const remit_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入转入金额'));
        } else if (!/^\d+$/.test(value)) {
          return callback(new Error('请输入整数金额'));
        } else {
          callback();
        }
      };
      return {
        // 规则
        saveSendRules: {
          youhuiConfigId: [{
            validator: youhuiConfigId_check,
            trigger: 'blur'
          }],
          remit: [{
            validator: remit_check,
            trigger: 'blur'
          }],

        },
        tips: [
          "部分厅NT需进入游戏激活，方可转入使用（点击游戏名称进入激活）。"
        ]
      }
    },

    methods: {
      submitForm(formName) {
        this.drawSuccess = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.saveSendSubmit(this.submitData).then(res => {
              window.toast(res.message)
            }).catch(err => {
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
    },
    computed: {
      ...mapGetters(["userData"]),
      // betMultiples(){
      //   this.listData.filter(item=>{
      //     return item.id=this.submitData.youhuiConfigId
      //   })
      // }
    },
    activated() {
      this.getYouHui()
      // this.phoneCheck();
    }
  };

</script>
<style lang="scss" scoped>
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
