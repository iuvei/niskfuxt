<template>
  <div class="save-send">
    <el-form :model="submitData" ref="transferForm" :rules="saveSendRules" label-width="100px" class="discount-form">
      <!-- 游戏平台 -->
      <br/>
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
        <el-button type="primary" @click="submitForm('transferForm')">提交</el-button>
        <el-button @click="resetForm('transferForm')">重置</el-button>
        <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="userData.phoneValidStatus=='0'">
          <el-button type="text">验证手机号码</el-button>
        </router-link>
      </el-form-item>
    </el-form>
        <div class="tips" style="padding-top:100px;">
          <h3>温馨提示：</h3>
            <p>1.每天的00:00-01:00为系统结算时间，暂时无法使用自助存送；</p>
            <p>2.申请存送优惠后，彩金将自动转入到相应的平台，请您直接进入平台游戏即可；</p>
            <p>3.不同的存送优惠有不同的游戏限制，请您在申请时详细查询该优惠活动规则；如违反活动规则，例如投注限制游戏等，将扣除所有红利及盈利；</p>
            <p>4.优惠申请成功后，无法中途取消，需完成规定流水要求；</p>
            <p>5.若完成优惠指定流水倍数后无法户内转账，请及时联系在线客服为您处理。</p>
        </div>
  </div>
</template>
<script>
  import {    mapGetters  } from "vuex"
  import {saveSend} from '@/controls/discount/saveSend'
  export default {
    mixins:[saveSend],
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

        }
      }
    },

    methods: {
      submitForm(formName) {
        this.drawSuccess = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.saveSendSubmit(this.submitData).then(res=>{
              window.toast(res.message)
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
