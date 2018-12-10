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
        <el-button class="submitbtn" @click="submitForm('transferForm')">提交</el-button>
        <el-button @click="resetForm('transferForm')">重置</el-button>
        <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="userData.phoneValidStatus=='0'">
          <el-button type="text">验证手机号码</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
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

        },
        tips:[
          "1.请在转账时候认准您要参加的游戏平台，若参加优惠成功之后，请完成投注要求，方能进行下一次户内转账！",
          "2.若参与优惠并转入对应平台，则需要在对应平台进行游戏投注。",
          "3.每日的00：00—01：00自助系统例行维护升级，建议避开此时间段进行自助存送，谢谢！",
          "4.自助存送最低转入金额为20元起。",
          "5.若完成流水倍数不能进行额度转出，请及时联系在线客服为您处理。"
        ]
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
