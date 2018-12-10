<template>
  <div class="mcpay">
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="填写订单"></el-step>
      <el-step title="生成订单"></el-step>
      <el-step title="查看订单"></el-step>
    </el-steps>
    <div v-if="active==0">
      <el-form ref="form" :model="submitData" label-width="110px" :label-position="'left'" class="deposit-form">
        <!-- 支付人姓名 -->
        <el-form-item label="存款姓名：" prop="accountName">
          <el-input v-model="submitData.accountName" placeholder="请输入存款人姓名"></el-input>
        </el-form-item>

        <!-- 支付金额 -->
        <el-form-item label="存款金额：" prop="amount">
          <el-input class="amount_input" v-model="submitData.amount" :placeholder="placeholder"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="paybtn" @click="depositPost">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="active==1">
      <el-alert title="温馨提示" type="success" :closable="false">
        请您点击【确认】，方可生成订单，并将该笔金额存入指定的银行卡(务必按系统制指定的银行卡存款) 您需要存入的金额为:{{submitData.amount}}元
        <br/> 请您存入该金额，否则存款无法到账，本订单有效时间{{help_time.min}}:{{help_time.sec}}
      </el-alert>
      <el-form ref="form" :model="submitData" label-width="110px" :label-position="'left'" class="deposit-form">
        <!-- 支付银行，某些网银支付需要，动态读取接口 -->
        <!-- 支付金额 -->
        <el-form-item label="存款金额：" prop="amount">
          <el-input v-model="submitData.amount" readonly></el-input>
        </el-form-item>
        <!-- 协议 -->
        <el-form-item label="协议1">
          <el-checkbox-group v-model="agree_1">
            <el-checkbox :label="`我已明白需要转账${submitData.amount}元`"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
          <el-button @click="wxSecCheck" class="paybtn">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row v-if="active==2" :gutter="40">
      <el-col :span="12">
        <div class="mc-title">我们的存款账户</div>
        <el-form abel-width="80px" :model="orderData">
          <el-form-item label="类别">
            <el-input v-model="orderData.bank" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.bank" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="开户地址" v-if="orderData.accountOpenAddr">
            <el-input v-model="orderData.accountOpenAddr" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.accountOpenAddr" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="卡号">
            <el-input v-model="orderData.bankno" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.bankno" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="orderData.accountname" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.accountname" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="active=0" type="primary">已完成支付</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="mc-title">您的存款信息</div>
        <el-form abel-width="80px" :model="orderData">
          <el-form-item label="存款姓名">
            <el-input v-model="orderData.uaccountname" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.uaccountname" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="存款金额">
            <el-input v-model="orderData.amount" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.amount" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="存款方式">
            <el-input v-model="mcTypech[orderData.payBy]" readonly></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-if="orderData.payBy=='wechat'" @click="dialogVisible=true">查看微信支付教程</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-dialog
      title="微信秒存教程"
      :visible.sync="dialogVisible"
      width="410px">
      <tips-mcpay></tips-mcpay>
    </el-dialog>
  </div>
</template>
<script>
  import {
    createDepositeOrder,
    getWxZzQuota,
    getZfbZzQuota
  } from "@/api/payment"

  import {    mcTypech  } from '@/assets/data/deposit.js'
  import check from '@/util/RegExp'
  import tipsMcpay from './tips-mcpay'
  export default {
    data() {
      return {
        mcTypech,
        active: 0,
        dialogVisible:false,
        submitData: {
          accountName: "",
          payBy: '',
          amount: '',
          discard: false
        },
        help_time: {
          Interval: null,
          init: 0, //分钟整数，接口获取
          min: 0, //显示的分钟
          sec: '00', //显示的秒
        },
        agree_1: false,
        orderData: {},
      }
    },
    methods: {
      onCopy(){
        window.toast('复制成功')
      },
      // 检查
      depositCheck() {
        // 需要添加数字为整数
        if (!this.submitData.payBy) {
          window.toast('请选择存款方式');
          return false
        } else if (!this.submitData.accountName) {
          window.toast('请输入存款人姓名');
          return false
        } else if (!this.submitData.amount) {
          window.toast('请输入存款金额');
          return false
        } else if (this.payItem.lowerlimit && this.submitData.amount*1 < this.payItem.lowerlimit) {
          window.toast('最低存款' + this.payItem.lowerlimit + '元');
          return false
        } else if (this.payItem.upperlimit && this.submitData.amount*1 > this.payItem.upperlimit) {
          window.toast('最高存款' + this.payItem.upperlimit + '元');
          return false
        } else if(this.submitData.order_amount<=~~this.submitData.order_amount&&this.submitItem.customParams&&this.submitItem.customParams.enterMode) { 
          if (item.customParams.depositLimitOfDay) {
            let msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。<br>每日存款次数限制为：${item.customParams.depositLimitOfDay}次`
          } else {
            let msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。`
          }
          // 风控 要加小数点
          // $alert({
          //   dangerouslyUseHTMLString: true,
          //   message:msg
          // }) 
          $alert(msg);
        } else {
          return true;
        }
      },
      // 如果已存在订单
      showExist() {
        $confirm("<p>1. 如果您已经支付且超过10分钟，请联系在线客服处理该笔订单 <br> 2. 如果未支付，请您先支付该笔订单或者选择废弃该订单</p>", "提示：您存在未处理的订单", {
          confirmText: "废弃并生成新订单",
          cancelText: "查看订单"
        }).then(() => {
          // 确认，废弃并生成新订单
          this.mcSubmit(this.submitData, true)
        }, () => {
          // 取消，查看订单
          this.active = 2;
        });
      },
      // 确认按钮
      depositPost(e) {
        this.submitData.payBy = this.payItem.payBy
        // 赋值当前支付的id
        if (this.depositCheck()) {
          // 是否是微信秒存
          if (this.submitData.payBy == 'wechat') {
            this.getWxZzQuota();
          } else if(this.submitData.payBy == 'new_zfb'){
            this.getZfbZzQuota();
          }else {
            this.mcSubmit(this.submitData);
          }
          // 先检查
        } else {
          e.stopPropagation()
          e.preventDefault()
        }
      },
      //提交订单
      mcSubmit(data, discard) {
        if (discard) {
          data.discard = true;
        } else {
          data.discard = false;
        }
        createDepositeOrder(data).then((res) => {
          if (res.success) {
            let type = res.data.type;
            this.orderData = res.data;
            if ('UNPAID_ORDER' == type) {
              // 到第二步
              this.showExist();
            } else if ('NEW_ORDER' == type) {
              // 到第三步
              this.active = 2;
            } else if ('BANKCARD_NOTAVAILABLE' == type) {
              $alert('通道维护中，请选择其他存款方式');
            }
          } else {
            $alert(res.message);
          }
        });
      },
      // 微信随机数
      getWxZzQuota() {
        getWxZzQuota({
          amount: this.submitData.amount
        }).then((result) => {
          $load.close();
          if (result.success) {
            this.active = 1;
            this.submitData.amount = result.data.amount;
            this.timer(result.data.min);
          } else {
            window.toast(result.message)
          }
        }).catch((err) => {

        })
      },
      // 支付宝随机数
      getZfbZzQuota() {
        getZfbZzQuota({
          amount: this.submitData.amount
        }).then((result) => {
          $load.close();
          if (result.success) {

            this.active = 1;
            this.submitData.amount = result.data.amount;
            this.timer(result.data.min);
          } else {
            window.toast(result.message)
          }
        }).catch((err) => {

        })
      },
      // 计时器
      timer(min) {
        this.help_time.init = min;
        this.help_time.min = min;
        this.help_time.sec = 0;
        window.clearInterval(this.help_time.Interval);
        this.help_time.Interval = window.setInterval(() => {
          if (this.help_time.min == 0 && this.help_time.sec == 0) {
            // 倒计时结束，返回第一个tab
            window.clearInterval(this.help_time.Interval);
            this.active = 0;
          } else {
            if (this.help_time.sec > 0) {
              this.help_time.sec--;
            } else if (this.help_time.sec <= 0) {
              this.help_time.min--;
              this.help_time.sec = 59;
            }
            this.help_time.sec < 10 ? this.help_time.sec = '0' + parseInt(this.help_time.sec) : this.help_time.sec;
            this.help_time.min < 10 ? this.help_time.min = '0' + parseInt(this.help_time.min) : this.help_time.min;
          }
        }, 1000)
      },
      // 微信秒存协议确认
      wxSecCheck() {
        if (this.agree_1) {
          this.mcSubmit(this.submitData);
        } else {
          window.toast("请同意协议")
        }
      },
    },
    props: {
      payItem: {
        type: Object
      }
    },
    computed: {
      placeholder() {
        if (this.payItem && this.payItem.lowerlimit) {
          return "最少" + this.payItem.lowerlimit + "元，最多" + this.payItem.upperlimit + "元";
        } else {
          return "请输入存款金额";
        }
      }
    },
    components:{tipsMcpay}
  };

</script>
<style lang="scss" scoped>
.mcpay{
  margin-top: 30px;
  .amount_input{
    width: 250px;
  }
  .paybtn{
    // width: 350px;
    background: #8d3e3c;
    background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: linear-gradient(to right,#8d3e3c,#bb4e49);
    border: 1px solid #8d3e3c;
    width: 200px;
    color: #fff;
  }
  .mc-title{
    background: rgb(255, 236, 183);
    /* Old browsers */
    background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
    /* IE6-9 */
    text-align:center;
    font-size:16px;
    line-height:3;
    margin:30px 0;
  }
}
</style>
