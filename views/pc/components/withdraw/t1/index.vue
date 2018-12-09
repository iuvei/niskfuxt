<template>
  <div class="drawmoney">
    <!-- 头部提示部分 -->
    <div class="withdraw-p" v-if="isAgent">
      <p>老虎机佣金余额：<span style="color:red;">{{wallet['SLOT']}}</span>元</p>
      <p>其他佣金余额：<span style="color:red;">{{wallet['LIVE']}}</span>元</p>
    </div>
    <div class="withdraw-p" v-if="isUser">
      <p>主账户余额：<span style="color:red;">{{wallet['MAIN']}}</span>元</p>
      <Button @click="transferAll_Modal=true" type="warning">资金一键归回主账户</Button>
    </div>

    <!-- 表单内容 -->
    <Form :model="sumitData" ref="drawForm" :rules="drawRules" label-position="right" :label-width="110" class="draw-form">
      <!-- 取款类型，只有代理用户才需要传给后台！！ -->
      <FormItem label="选择取款类型：" prop="tkType" v-if="isAgent">
        <Select v-model="sumitData.id" placeholder="请选择取款类型">
          <Option v-for="item in drawType" :key="item.value" :label="item.name" :value="item.value">
          </Option>
        </Select>
      </FormItem>

      <FormItem label="选择取款银行：" prop="id">
        <Select v-model="sumitData.id" placeholder="请选择取款银行">
          <!-- 取款额度由后台判断 -->
          <Option v-for="item in bankList" :key="item.id" :label="`${item.bankname}--${item.bankno}`" :value="item.id">
          </Option>
        </Select>
        <nuxt-link :to="{name:'user_banks'}" class="addbanks" v-if="bankList.length==0">
          <Button type="warning">去绑定银行卡</Button>
        </nuxt-link>
      </FormItem>

      <FormItem label="输入取款金额：" prop="amount">
        <Input v-model.number="sumitData.amount" placeholder="请输入取款金额"></Input>
      </FormItem>
      <!-- 取款密码需要二次md5加密后，传给后台-->
      <!-- 密码不能添加model.number后缀,字符串和数字的md5值是不同的 -->
      <FormItem label="取款密码：" prop="password">
        <Input v-model="sumitData.password" maxlength="6" type="password" placeholder="请输入取款密码"></Input>
      </FormItem>
      <FormItem label="实际到账金额：">
        <Input :placeholder="placeholder" readonly v-model="withdrawFee.amount"></Input>
      </FormItem>

      <FormItem>
        <Button type="warning" @click="submitForm('drawForm')">提交</Button>
        <Button @click="resetForm('drawForm')">清空</Button>
      </FormItem>
    </Form>

    <!-- 取款成功提示 -->
    <Dialog title="取款成功" width="640px" :visible.sync="drawSuccess">
      <Alert title="提交提款申请" :description="`工作人员正在为您处理，如果您的各项资料正确，取款金额会在5-10分钟内到达您的绑定银行账户`" :closable="false" type="warning">
      </Alert>
      <br />
      <div class="btn-suc">
        <Button @click="drawSuccess=false">确定</Button>
        <nuxt-link :to="{name:'user_log',params:{type:'withdraw'}}" class="formbtn">
          <Button type="text">查看取款记录</Button>
        </nuxt-link>
      </div>
    </Dialog>

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
  } from "@@/api/payment"; // api接口
  // import
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import {
    withdraw
  } from "@@/controls/money/withdraw";

  export default {
    layout: "admin", // 布局文件
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
        drawSuccess: true, // 取款成功标识
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
          password: [{
            validator: password_check,
            trigger: "blur"
          }],
          amount: [{
            validator: amount_check,
            trigger: "blur"
          }],
          id: [{
            validator: bank_check,
            trigger: "blur"
          }],
          tkType: [{
            validator: type_check,
            trigger: "blur"
          }]
        }
      };
    },
    methods: {
      ...mapActions(["UPDATE_MONEY"]),
      transferAll() {
        window.$confirm(
          '<p style="text-align:left;">1.游戏平台余额只会回收整数部分。<br/>2.领取优惠但未完成流水的游戏余额不会被归集。<br/>3.资金归集可能需要较长时间，请耐心等待。</p>',
          "温馨提示", {
            confirmText: "确认",
            cancelText: "取消"
          }
        ).then(
          () => {
            // 确认，发出归集请求
            window.setTimeout(() => {
              const postData = {
                transferGameOut: "ALL_V2",
                transferGameIn: "MAIN",
                transferGameMoney: 0
              };
              // 查看进度按钮
              updateGameMoney(postData).then(res => {
                  if (res.success) {
                    this.$bus.$emit('showTransferProce', true)
                    window.toast(res.message)
                  } else {
                    window.toast(res.message)
                  }
                })
                .catch(err => {
                  window.toast(err.message)
                });
            }, 300)
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
        showApplyWithdrawMsg({
            amount: money
          })
          .then(res => {
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
      ...mapGetters(["userData", "isSetPayPwd", "isAgent", "isUser", "wallet"])
    },
    created() {
      this.getBankList();
      showApplyWithdrawMsg({
          amount: 0
        })
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
  .drawmoney {
    .withdraw-p {
      font-size: 17px;
      line-height: 38px;
      margin-top: 10px;

      p {
        padding-left: 10px;
        display: inline-block;

        span {
          color: #bb4e49;
        }
      }
    }

    .draw-form {
      margin-top: 30px;
      width: 500px;

      .Select {
        display: block !important;
      }
    }
  }

</style>
