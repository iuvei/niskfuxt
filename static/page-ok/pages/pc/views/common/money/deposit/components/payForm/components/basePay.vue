<template>
  <el-form ref="form" :model="submitData" label-width="100px" :label-position="'left'" class="deposit-form">
    <!-- 支付银行，某些网银支付需要，动态读取接口 -->
    <el-form-item label="支付银行：" v-if="bankCodeData.length>0">
      <el-select v-model="submitData.bankCode" placeholder="请选择支付银行">
        <el-option :label="item.name" v-for='(item,i) in bankCodeData' :value="item.value" :key="i+item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="存款金额：" prop="order_amount">
      <el-input v-model="submitData.order_amount" :placeholder="placeholder"></el-input>
    </el-form-item>

    <el-form-item label="存款金额：" prop="order_amount" v-if="payItem.customParams&&payItem.customParams.enterMode=='FIXED_AMOUNT'">
      <div class="selectItems">
        <div class="selectItem" @click="another(item)" :class="{active:submitData.order_amount==item}" v-for="item in payItem.customParams.defaultAmounts"
          :key="item">
          {{item}}元
        </div>
      </div>
    </el-form-item>
    <el-form-item v-else>
      <div class="selectItems">
        <span class="selectItem" v-for="(item,key,i) in moneys" :key="i" @click="submitData.order_amount=item.value"
          :class="{active:submitData.order_amount==item.value}" v-if="item.value>=payItem.lowerlimit && item.value<=payItem.upperlimit">
          {{item.name}}
        </span>
      </div>
    </el-form-item>
    <el-form-item label="实际到账：" v-if="payItem.customParams&&payItem.customParams.showRate4player&&payItem.rate4player>0">
      <p class="amountMoneyTips" style="font-size:18px;"><span style="color:red;">{{playerRate||0}}</span>元</p>
      <p class="amountTips" style="margin-left: -100px;" v-show="payItem.type=='alipay'||payItem.payMethod=='ebank'||payItem.payMethod=='unionpay'||payItem.type=='jdpay'">使用此通道，须承担{{payItem.rate4player*100}}%的手续费由第三方收取，若选择的通道无法存款，请点选其他支付通道。</p>
      <p class="amountTips" style="margin-left: -100px;" v-show="payItem.type=='wechat'">使用此方式将收取1%-4.5%手续费；不同存款通道，收取的手续费不一样，具体手续费请以第三方为准。</p>
    </el-form-item>
    <el-form-item>
      <el-button @click="depositPost" class="paybtn">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import check from '@/util/RegExp'
  import {
    basePay
  } from '@/controls/money/basePay'
  export default {
    mixins: [basePay],
    data() {
      return {
        active: 0,
        moneys: [{
          name: '50元',
          value: 50
        }, {
          name: '100元',
          value: 100
        }, {
          name: '200元',
          value: 200
        }, {
          name: '500元',
          value: 500
        }, {
          name: '1000元',
          value: 1000
        }, {
          name: '2000元',
          value: 2000
        }, {
          name: '3000元',
          value: 3000
        }, {
          name: '5000元',
          value: 5000
        }],
        playerRate: null
      }
    },
    watch: {
      payItem(val) {
        // 变化后去请求获取银行卡
        this.getBankList(val)
        if (val.customParams && val.customParams.enterMode == 'FIXED_AMOUNT') {
          this.submitData.order_amount = val.customParams.defaultAmounts[0]
        }
      },
      'submitData.order_amount'(val) {
        // let x = new Big(val || 0)
        // let y = new Big(1 - this.payItem.rate4player)
        // this.playerRate = parseFloat(x.times(y).toFixed(2))
        let x = val || 0,
            y = 1 - this.payItem.rate4player
        this.playerRate = x*y
        this.playerRate = this.playerRate.toFixed(2)
      }
    },
    methods: {
      depositPost(e) {
        this.submitData.id = this.payItem.id // 赋值当前支付的id
        // 提交表单
        this.depositPostSubmit(this.submitData, this.payItem).then(res => {
          window.toast('充值成功，如2分钟未到账，请准备支付截图与客服联系')
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      another(value) {
        if (value !== '') {
          this.submitData.order_amount = value;
        } else {
          this.submitData.order_amount = '';
        }
      }
    },
    props: {
      payItem: {
        type: Object
      }
    },
    computed: {
      placeholder() {
        // 判断最高或最低提款
        if (this.payItem && (this.payItem.lowerlimit || this.payItem.upperlimit)) {
          return "最少" + this.payItem.lowerlimit + "元，最多" + this.payItem.upperlimit + "元";
        } else {
          return "请输入存款金额";
        }
      }
    },
    created() {
      if (this.payItem.type == 'ebank') {
        this.getBankList(this.payItem)
      }
      if (this.payItem.customParams && this.payItem.customParams.enterMode == 'FIXED_AMOUNT') {
        this.submitData.order_amount = this.payItem.customParams.defaultAmounts[0]
      }
    }
  };

</script>

<style lang="scss" scoped>
  .paybtn {
    // width:350px;
    background: #e2b85a;
    background: -moz-linear-gradient(to right, #e2b85a, #b99548);
    background: -webkit-linear-gradient(to right, #e2b85a, #b99548);
    background: -o-linear-gradient(to right, #e2b85a, #b99548);
    background: linear-gradient(to right, #e2b85a, #b99548);
    border: 1px solid #e2b85a;
    color: #fff;
    width: 300px;
  }

  .btn-money {
    display: inline-block;
    border: solid 1px transparent;
    background: #ececec;
    min-width: 60px;
    text-align: left;
    border-radius: 5px;
    height: 34px;
    line-height: 34px;
    margin: 0 10px 4px 0;
    padding: 0 10px;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;
    font-size: 16px;

    &:hover,
    &.active {
      // background: url(./images/active.png) right bottom no-repeat #dcf0fa / auto 50%;
      background: #e2b85a;
      background: -moz-linear-gradient(to right, #e2b85a, #b99548);
      background: -webkit-linear-gradient(to right, #e2b85a, #b99548);
      background: -o-linear-gradient(to right, #e2b85a, #b99548);
      background: linear-gradient(to right, #e2b85a, #b99548);
      border: 1px solid #e2b85a;
      color: #fff;
    }
  }
  .amountMoneyTips{
    color: #fff;
  }
  .amountTips{
    color: #fff;
  }
  .deposit-form {
    width: 100%;

    .el-input {
      width: 20%;
    }

    .selectItems {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      .selectItem {
        padding: 2px 5px;
        color: #fff;
        width: 100px;
        margin: 0 10px 10px 0;
        text-align: center;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: 10px;

        &.active,&:hover {
          border: 1px solid #e2b85a;
          color: #e2b85a;
        }
      }
    }
  }

</style>
