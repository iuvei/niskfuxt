<template>
    <Form ref="form" :model="submitData" :label-width="100" :label-position="'left'" class="deposit-form">
      <!-- 支付银行，某些网银支付需要，动态读取接口 -->
      <FormItem label="支付银行：" v-if="bankCodeData.length>0">
        <Select v-model="submitData.bankCode" placeholder="请选择支付银行">
          <Option :label="item.name" v-for='(item,i) in bankCodeData' :value="item.value" :key="i+item.value"></Option>
        </Select>
      </FormItem>

      <FormItem label="存款金额：" prop="order_amount">
          <Input v-model="submitData.order_amount" :placeholder="placeholder"></Input>
      </FormItem>
      <FormItem>
          <Button @click="depositPost" class="paybtn" type="warning">提交</Button>
      </FormItem>
    </Form> 
</template> 
<script>
  import check from '@@/utils/RegExp'
  import {basePay} from '@@/controls/money/basePay'
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
        console.log(this.submitData)
        this.depositPostSubmit(this.submitData,this.payItem).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
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
  .deposit-form{
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
</style>

