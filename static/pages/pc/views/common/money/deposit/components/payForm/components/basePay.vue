<template>
    <el-form ref="form" :model="submitData" label-width="100px" :label-position="'left'" class="deposit-form">
      <!-- 支付银行，某些网银支付需要，动态读取接口 -->
      <el-form-item label="支付银行：" v-if="bankCodeData.length>0">
        <el-select v-model="submitData.bankCode" placeholder="请选择支付银行">
          <el-option :label="item.name" v-for='(item,i) in bankCodeData' :value="item.value" :key="i+item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="存款金额：" prop="order_amount">
          <el-input class="amount_input" v-model="submitData.order_amount" :placeholder="placeholder"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button @click="depositPost" class="paybtn">提交</el-button>
      </el-form-item>
    </el-form> 
</template> 
<script>
  import check from '@/util/RegExp'
  import {basePay} from '@/controls/money/basePay'
  export default {
    mixins:[basePay],
    data() {
      return {
        active:0,
      }
    },
    watch: {
      payItem(val){
        // 变化后去请求获取银行卡
        this.getBankList(val)
      },
    },
    methods: {
      depositPost(e) {
        this.submitData.id=this.payItem.id // 赋值当前支付的id
        // 提交表单
        this.depositPostSubmit(this.submitData,this.payItem).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          window.toast(err.message)
        })
      }
    },
    props:{
      payItem:{
        type:Object
      }
    },
    computed: {
      placeholder() {
        // 判断最高或最低提款
        if (this.payItem&&(this.payItem.lowerlimit||this.payItem.upperlimit)) {
          return "最少" + this.payItem.lowerlimit + "元，最多" + this.payItem.upperlimit + "元";
        } else {
          return "请输入存款金额";
        }
      }
    },
    created(){
      if(this.payItem.type == 'ebank') {
        this.getBankList(this.payItem)
      }
    }
  };

</script>

<style lang="scss" scoped>
.amount_input{
    width: 250px;
  }
  .paybtn{
    // width:350px;
    background: #8d3e3c;
    background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: linear-gradient(to right,#8d3e3c,#bb4e49);
    border: 1px solid #8d3e3c;
    color: #fff;
    width: 200px;
  }
</style>

