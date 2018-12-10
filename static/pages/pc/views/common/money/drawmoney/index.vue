<template>
  <div class="u-c-shows">
      <div class="drawmoney">
        <!-- 表单内容 -->
        <el-form :model="sumitData" ref="drawForm" :rules="drawRules" label-width="140px" class="draw-form">
          <!-- 取款类型，只有代理用户才需要传给后台！！ -->
          <el-form-item label="老虎机佣金余额：" v-show="isAgent">
            {{userData.slotAccount}}
          </el-form-item>
          <el-form-item label="其他佣金余额：" v-show="isAgent">
            {{userData.liveAccount}}
          </el-form-item>
          <!-- <el-form-item label="主账户总余额：" prop="tkType" v-show="!isAgent">
            <el-row>
              <el-col :span="7">{{userData.accountMoney}}</el-col>
              <el-col :offset="7" :span="10"><el-button class="backmainbtn">一键收回主账户</el-button></el-col>
            </el-row>
          </el-form-item> -->
          <el-form-item label="取款类型：" prop="tkType" v-if="isAgent">
            <el-select v-model="sumitData.tkType" placeholder="请选择取款类型">
              <el-option v-for="item in drawType" :key="item.value" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="取款银行：" prop="id">
            <el-select v-model="sumitData.id" placeholder="请选择取款银行">
              <!-- 取款额度由后台判断 -->
              <el-option v-for="item in bankList" :key="item.id" :label="`${item.bankname}--${item.bankno}`" :value="item.id">
              </el-option>
            </el-select>
            <router-link :to="{name:'banks'}" class="addbanks" v-if="bankList.length==0 && !isAgent">
              <el-button type="text">去绑定银行卡</el-button>
            </router-link>
            <router-link :to="{name:'agent_banks'}" class="addbanks" v-if="bankList.length==0 && isAgent">
              <el-button type="text">去绑定银行卡</el-button>
            </router-link>
          </el-form-item>

          <el-form-item label="取款金额：" prop="amount">
            <el-input v-model.number="sumitData.amount" type="number" placeholder="请输入取款金额"></el-input>
          </el-form-item>
          <!-- 取款密码需要二次md5加密后，传给后台-->
          <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
          <el-form-item label="取款密码：" prop="password">
            <el-input v-model="sumitData.password" maxlength="6" type="password" placeholder="请输入取款密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="submitbtn" @click="submitForm('drawForm')">提交</el-button>
            <el-button @click="resetForm('drawForm')">清空</el-button>
            <el-button type="text" @click="$bus.$emit('showForgetPay',true)" v-if="isSetPayPwd">忘记取款密码?</el-button>
            <router-link :to="{name:'payword'}" v-else-if="!isSetPayPwd && !isAgent">
              <el-button type="text">设置取款密码?</el-button>
            </router-link>
            <router-link :to="{name:'agent_payword'}" v-else-if="!isSetPayPwd && isAgent">
              <el-button type="text">设置取款密码?</el-button>
            </router-link>
            
          </el-form-item>
        </el-form>
        <!-- 取款成功提示 -->
        <el-dialog title="取款成功" width="640px" :visible.sync="drawSuccess">
          <el-alert :title="`取款金额:${sumitData.amount}元成功`" :description="`工作人员正在为您处理，如果您的各项资料正确，取款金额会在1小时内到达您的绑定银行账户`" :closable="false"
            type="success">
          </el-alert>
          <br/>
          <div class="btn-suc">
            <el-button type="primary" @click="drawSuccess=false">确定</el-button>
            <router-link :to="{name:'user_log',params:{type:'withdraw'}}" class="formbtn" v-if="!isAgent">
              <el-button type="text">查看取款记录</el-button>
            </router-link>
          </div>
        </el-dialog>
        <div class="tips">
          <p class="tipsTitle">温馨提示：</p>
          <p>1.若遇到提款问题或被取消，请联系在线客服为您查询。</p>
          <p>2.提款姓名与绑定银行卡须与注册信息一致，否则无法提款。</p>
          <p>3.若不申请任何优惠，须存款量的一倍流水即可申请提款。</p>
          <p>4.首次提款会进行电话核实、请您保持电话畅通，加速出款的速度。</p>
          <p>5.如利用本平台进行任何洗钱诈骗行为，本公司将保留权力终止会员服务及冻结其账户。</p>
        </div>
      </div>
    <!-- <el-dialog title="设置支付密码" center width="640px" :visible.sync="showSetPayWord">
      <pay-set></pay-set>
    </el-dialog> -->
    <!-- 忘记支付密码 -->
    <pay-forgot></pay-forgot>
  </div>
</template>
<script>
  import payForgot from 'pc/views/common/pwd/payword/component/pay-forgot' // 忘记支付密码
  import md5 from "MD5" // 取款密码加密
  import {
    findUserBankList,
    checkWithdrawPwd,
    withdraw_new
  } from "@/api/payment" // api接口
  // import 
  import {
    mapGetters
  } from 'vuex'
  import {withdraw} from '@/controls/money/withdraw'
  export default {
    mixins:[withdraw],
    data() {
      const password_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入取款密码'));
        } else {
          callback();
        }
      };
      const bank_check = (rule, value, callback) => {
        // 取款银行卡
        if (!value) {
          return callback(new Error('请选择取款银行'));
        } else {
          callback();
        }
      };
      const amount_check = (rule, value, callback) => {
        // 取款金额
        if (!value) {
          return callback(new Error('请输入取款金额'));
        } else if (!this.isAgent && this.wallet['MAIN'] - value < 0) {
          return callback(new Error('可取款金额不足'))
        } else if (this.isAgent&&this.sumitData.tkType=='slotmachine'&&this.wallet['SLOT'] - value < 0) {
          return callback(new Error('可取款金额不足'))
        } else if (this.isAgent&&this.sumitData.tkType=='liveall'&&this.wallet['LIVE'] - value < 0) {
          return callback(new Error('可取款金额不足'))
        }else {
          callback();
        }
      };
      const type_check = (rule, value, callback) => {
        // 仅当前用户是代理用户才判断提款类型
        if (!value && this.isAgent) {
          return callback(new Error('请选择取款类型'));
        } else {
          callback();
        }
      };
      return {
        step: 1,
        bankList: [], // 取款银行卡列表
        showSetPayWord: false, // 是否需要弹窗设置支付密码
        drawSuccess: false, // 取款成功标识
        drawType: [ // 取款类型，只有代理账户才会用到
          {
            name: '老虎机',
            value: 'slotmachine'
          },
          {
            name: '其他',
            value: 'liveall'
          },
        ],
        sumitData: { // 提交的表单类型
          amount: "", // 取款金额
          id: "", // 取款银行卡id
          password: "", // 取款密码，最终会经过2次md5加密
          tkType: "" // 若是代理取款，必填输入代理取款类型，取款类型，slotmachine-老虎机，liveall-其他部分
        },
        drawRules: {
          // 验证规则配置
          password: [{
            validator: password_check,
            trigger: 'blur'
          }],
          amount: [{
            validator: amount_check,
            trigger: 'blur'
          }],
          id: [{
            validator: bank_check,
            trigger: 'blur'
          }],
          tkType: [{
            validator: type_check,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 提交表单
            this.drawSubmit(this.sumitData).then(res=>{
              window.toast(res.message)
              this.step = 3;
              this.drawSuccess = true;
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
        // 重置表单
        this.$refs[formName].resetFields();
      },
    },
    computed: {
      ...mapGetters(["userData", 'isSetPayPwd', 'isAgent','wallet'])
    },
    created() {
      this.getBankList()
    },
    components: {
      payForgot,
    }
  };
</script>
<style lang="scss" scoped>
.drawmoney{
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #333333;
  .tips{
    padding: 0 0 20px 55px;
    font-size: 15px;
    line-height: 30px;
    width: 800px;
    p{
      color: #d7b26c;
    }
  }
}
  .backmainbtn{
    background: #ed7e12;
    color: #fff;
  }
  .transact_top {
    height: 70px;
    line-height: 35px;
    width: 800px;
    text-align: center;
    font-size: 24px;
  }
  .addbanks{
    position: absolute;
    left: 105%;
    top: 0;
    word-break: keep-all;
  }
  .draw-form {
    width: 500px;
    margin-top: 30px;
    .el-select {
      display: block !important;
    }
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
