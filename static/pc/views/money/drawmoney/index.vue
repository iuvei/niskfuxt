<template>
  <div class="u-c-shows">
    <div class="u-c-menu">
      <a class="u-c-router active">
        <span class="icobjh bjh-tikuan"></span>取款</a>
    </div>
    <div class="u-c-box">
      <div class="drawmoney">
        <!-- 头部提示部分 -->
        <el-alert title="" :closable="false">
          <!-- 代理取款，多一个取款类型，tkType -->
          <div class="transact_top" v-if="isAgent">
            <p class="col1">老虎机佣金余额：
              <span class="">{{wallet['SLOT']}}</span>
            </p>
            <p class="col1">其他佣金余额：
              <!-- 其他包括了真人和体育 -->
              <span class="">{{wallet['LIVE']}}</span>
            </p>
          </div>
          <div class="transact_top" v-else>
            <p class="col1">主账户总余额：<span class="">{{wallet['MAIN']}}</span>
                <span class="transferAll" @click="transferAll" v-show="!showProcessBtn">资金一键归户</span>
                <span class="transferAll" @click="dialogVisible=true" v-show="showProcessBtn">查看归户进度</span>
            </p>
            <!-- <p class="col1">副账户总余额：<span class="">{{userData.deputyCredit}}</span>
            </p> -->
          </div>
        </el-alert>
        <!-- 表单内容 -->
        <el-form :model="sumitData" ref="drawForm" :rules="drawRules" label-width="100px" class="draw-form">
          <!-- 取款类型，只有代理用户才需要传给后台！！ -->
          <el-form-item label="取款类型：" prop="tkType" v-if="isAgent">
            <el-select v-model="sumitData.id" placeholder="请选择取款类型">
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
            <router-link :to="{name:'user_banks'}" class="addbanks" v-if="bankList.length==0">
              <el-button type="text">去绑定银行卡</el-button>
            </router-link>
          </el-form-item>

          <el-form-item label="取款金额：" prop="amount">
            <el-input v-model.number="sumitData.amount" type="number" placeholder="请输入取款金额"></el-input>
          </el-form-item>
          <!-- 取款密码需要二次md5加密后，传给后台-->
          <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
          <el-form-item label="实际到账金额:">
            <el-input type="text" :placeholder="placeholder" readonly v-model="withdrawFee.amount"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('drawForm')">提交</el-button>
            <el-button @click="resetForm('drawForm')">清空</el-button>
            <!-- <el-button type="text" @click="$bus.$emit('showForgetPay',true)" v-if="isSetPayPwd">忘记取款密码?</el-button>
            <router-link :to="{name:'user_payword'}" v-else>
              <el-button type="text" @click="showSetPayWord=true" >设置取款密码?</el-button>
            </router-link> -->
            
          </el-form-item>
        </el-form>
        <!-- 取款成功提示 -->
        <el-dialog title="取款成功" width="640px" :visible.sync="drawSuccess">
          <el-alert title="提交提款申请" :description="`工作人员正在为您处理，如果您的各项资料正确，取款金额会在5-10分钟内到达您的绑定银行账户`" :closable="false"
            type="success">
          </el-alert>
          <br/>
          <div class="btn-suc">
            <el-button type="primary" @click="drawSuccess=false">确定</el-button>
            <router-link :to="{name:'user_log',params:{type:'withdraw'}}" class="formbtn">
              <el-button type="text">查看取款记录</el-button>
            </router-link>
          </div>
        </el-dialog>
        <div class="tips" style="padding-top:100px;">
          <h3>温馨提示：</h3>
            <p>1.<span>{{placeholder}}</span></p>
            <p>2.未申请任何优惠的情况下，需投注存款金额的<span>一倍流水</span>方可进行提款。</p>
            <p>3.中午<span>11:50~13:00</span>为游戏平台的后台结算时间，您的提款暂时无法审核，会顺延到14：00之前进行审核支付，建议您避开这个时间段</p>
            <p>4.首次提款会进行电话核实.请您保持电话畅通.加速出款的速度。</p>
            <p>5.提款金额最低<span>100</span>，请您使用100及以上金额进行取款。</p>
            <p>6.提款时银行卡姓名须与<span>注册姓名一致</span>，否则无法顺利提款。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import payForgot from 'pc/views/common/pwd/pay-forgot' // 忘记支付密码
// import paySet from 'pc/views/user/pwd/payword' // 设置支付密码
import md5 from "MD5"; // 取款密码加密
import {
  findUserBankList,
  checkWithdrawPwd,
  withdraw_new,
  showApplyWithdrawMsg,
  updateGameMoney
} from "@/api/payment"; // api接口
// import
import { mapGetters, mapActions } from "vuex";
import { withdraw } from "@/controls/money/withdraw";

export default {
  mixins: [withdraw],
  data() {
    const password_check = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入取款密码"));
      } else {
        callback();
      }
    };
    const bank_check = (rule, value, callback) => {
      // 取款银行卡
      if (!value) {
        return callback(new Error("请选择取款银行"));
      } else {
        callback();
      }
    };
    const amount_check = (rule, value, callback) => {
      // 取款金额
      if (!value) {
        return callback(new Error("请输入取款金额"));
      } else if (this.userData.accountMoney - value < 0) {
        return callback(new Error("可取款金额不足"));
      } else {
        callback();
      }
    };
    const type_check = (rule, value, callback) => {
      // 仅当前用户是代理用户才判断提款类型
      if (!value && this.isAgent) {
        return callback(new Error("请选择取款类型"));
      } else {
        callback();
      }
    };
    return {
      showProcessBtn: false,
      dialogVisible: false,
      tableData: [],
      step: 1,
      bankList: [], // 取款银行卡列表
      showSetPayWord: false, // 是否需要弹窗设置支付密码
      drawSuccess: false, // 取款成功标识
      drawType: [
        // 取款类型，只有代理账户才会用到
        {
          name: "老虎机",
          value: "slotmachine"
        },
        {
          name: "其他",
          value: "liveall"
        }
      ],
      showRate: "",
      sumitData: {
        // 提交的表单类型
        amount: "", // 取款金额
        id: "", // 取款银行卡id
        password: "", // 取款密码，最终会经过2次md5加密
        tkType: "" // 若是代理取款，必填输入代理取款类型，取款类型，slotmachine-老虎机，liveall-其他部分
      },
      withdrawTips: "",
      withdrawFee: {},
      drawRules: {
        // 验证规则配置
        password: [
          {
            validator: password_check,
            trigger: "blur"
          }
        ],
        amount: [
          {
            validator: amount_check,
            trigger: "blur"
          }
        ],
        id: [
          {
            validator: bank_check,
            trigger: "blur"
          }
        ],
        tkType: [
          {
            validator: type_check,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["UPDATE_MONEY"]),
    transferAll() {
      window.$confirm(
        '<p style="text-align:left;">1.游戏平台余额只会回收整数部分。<br/>2.领取优惠但未完成流水的游戏余额不会被归集。<br/>3.资金归集可能需要较长时间，请耐心等待。</p>',
        "温馨提示",
        {
          confirmText: "确认",
          cancelText: "取消"
        }
      ).then(
        () => {
        // 确认，发出归集请求
        window.setTimeout(()=>{
          const postData = {
            transferGameOut: "ALL_V2",
            transferGameIn: "MAIN",
            transferGameMoney: 0
          };
          // 查看进度按钮
            updateGameMoney(postData).then(res => {
                if (res.success) {
                  this.$bus.$emit('showTransferProce',true)
                  window.toast(res.message)
                } else {
                  window.toast(res.message)
                }
              })
              .catch(err => {
                window.toast(err.message)
              });
          },300)
        },
        () => {

          // 取消，查看订单
        });

    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 提交表单
          this.drawSubmit(this.sumitData)
            .then(res => {
              window.toast(res.message);
              this.step = 3;
              this.drawSuccess = true;
            })
            .catch(err => {
              console.log(err);
              window.toast(err.message);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields();
    },
    checkFee(money) {
      showApplyWithdrawMsg({ amount: money })
        .then(res => {
          console.log(res);
          this.withdrawTips = res.message;
          this.withdrawFee = res.data;
          this.showRate = res.data.showRate;
        })
        .catch(err => {});
    }
  },
  computed: {
    placeholder(val) {
      if (this.showRate) {
        return `当日首次免费提款，从第二笔开始，收取${this.showRate}手续费。`;
      } else {
        return "当日首次免费提款，从第二笔开始，收取手续费。";
      }
    },
    ...mapGetters(["userData", "isSetPayPwd", "isAgent", "wallet"])
  },
  created() {
    this.getBankList();
    showApplyWithdrawMsg({ amount: 0 })
      .then(res => {
        this.showRate = res.data.showRate;
      })
      .catch(err => {});
  },
  watch: {
    "sumitData.amount"(val) {
      if (val) {
        clearTimeout(window.withdrawTimer);
        window.withdrawTimer = window.setTimeout(() => {
          this.checkFee(this.sumitData.amount);
        }, 500);
      } else {
        console.log("lksdfj");
        clearTimeout(window.withdrawTimer);
        this.withdrawTips = "";
        this.withdrawFee = {};
      }
    }
  },
  components: {
    // payForgot,
    // paySet
  }
};
</script>
<style lang="scss" scoped>
.transact_top {
  height: 70px;
  line-height: 35px;
  width: 800px;
  text-align: center;
  font-size: 24px;
  .transferAll {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    position: absolute;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    color: #343434;
    background: #ffecb7;
    box-shadow: 0 0 3px 1px #ccc;
    transition: all 0.3s;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ffecb7),
      to(#ffd178)
    );
    background: linear-gradient(to bottom, #ffecb7 0%, #ffd178 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
    &:hover {
      transform: scale(1.1);
    }
  }
}
.addbanks {
  position: absolute;
  left: 105%;
  top: 0;
  word-break: keep-all;
}
.draw-form {
  margin-top: 30px;
  width: 500px;
  .el-select {
    display: block !important;
  }
}
.tips {
  clear: both;
  h3 {
  }
  p {
    line-height: 2;
    span {
      color: red;
    }
  }
}
</style>
