<template>
  <div class="ysfpay">
    <!--el-steps :active="active" finish-status="success" align-center>
      <el-step title="填写订单"></el-step>
      <el-step title="查看订单"></el-step>
    </el-steps-->
    <div v-if="active==0">
      <el-form ref="form" :model="submitData" label-width="110px" :label-position="'left'" class="deposit-form">
        <!-- 支付人姓名 -->
        <el-form-item label="存款卡号：" prop="bankno">
          <el-input class="depositInput" v-model="submitData.bankno" placeholder="请输入您要付款的银行卡号后四位" maxlength="4"></el-input>
        </el-form-item>

        <!-- 支付金额 -->
        <el-form-item label="存款金额：" prop="amount">
          <el-input class="depositInput" v-model="submitData.amount" :placeholder="placeholder"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="depositPost" type="primary">提交</el-button>
        </el-form-item>

      </el-form>
    </div>

    <el-row v-if="active==1" :gutter="40">
      <el-col :span="12">
        <div class="ysf-title">您的存款信息</div>
        <el-form abel-width="80px" :model="orderData">
          <el-form-item label="银行卡号末4位">
            <el-input v-model="orderData.ubankno" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.ubankno" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="存款金额">
            <el-input v-model="orderData.amount" readonly>
              <el-button slot="append" icon="el-icon-document" v-clipboard:copy="orderData.amount" v-clipboard:success="onCopy">复制</el-button>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="dialogVisible=true">查看云闪付教程</el-button>
            <el-button @click="active=0" type="primary">已完成支付</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="ysf-title">我们的收款码</div>
        <el-form abel-width="80px" :model="orderData">
          <el-form-item style="text-align:center">
            <p style="color:red;">(仅本次有效，下次存款请重新获取)</p>
            <img :src="orderData.qrcodeUrl" class="ysf_qr">
            <p style="color:red;">(请务必保存存款成功截图，未到账可提供在线客服上分)</p>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    
    <el-dialog
      title="云闪付教程"
      :visible.sync="dialogVisible"
      width="410px">
      <tips-ysfpay></tips-ysfpay>
    </el-dialog>

  </div>
</template>
<script>
  import { createOrderForYsfpay  } from "@/api/payment"
  import check from '@/util/RegExp'
  import tipsYsfpay from './tips-ysfpay'
  export default {
    data() {
      return {
        active: 0,
        dialogVisible:false,
        submitData: {
          bankno: "",
          amount: '',
          discard: false
        },
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
        if (!this.submitData.bankno) {
          window.toast('请输入银行卡号后4位');
          return false
        } else if (!this.submitData.amount) {
          window.toast('请输入存款金额');
          return false
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

          this.ysfSubmit(this.submitData, true)

        }, () => {
          // 取消，查看订单
          this.active = 1;
        });
      },
      // 确认按钮
      depositPost(e) {
        // this.submitData.payBy = this.payItem.id
        // 赋值当前支付的id
        if (this.depositCheck()) {
          // 先检查
          this.ysfSubmit(this.submitData,false)
        } else {
          e.stopPropagation()
          e.preventDefault()
        }
      },
      //提交订单
      ysfSubmit(data, discard) {
        if (discard) {
          data.discard = true;
        } else {
          data.discard = false;
        }
        createOrderForYsfpay(data).then((res) => {
          if (res.success) {
            let type = res.data.type;
            this.orderData = res.data;
            if ('UNPAID_ORDER' == type) {
              // 到第二步
              this.showExist();
            } else if ('NEW_ORDER' == type) {
              // 到第三步
              this.active = 1;
            } else if ('BANKCARD_NOTAVAILABLE' == type) {
              $alert('通道维护中，请选择其他存款方式');
            }
          } else {
            $alert(res.message);
          }
        });
      }
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
    components:{tipsYsfpay}
  };
</script>
<style lang="scss" scoped>
  .ysfpay{
    .ysf-title{
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
  .depositInput{
      width: 250px;
    }
</style>
