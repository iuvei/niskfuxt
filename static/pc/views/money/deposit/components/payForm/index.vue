<template>
  <div class="payform">
    <mcPay :payItem="payItem" v-if="payItem.platformtype=='mcpay'"></mcPay>
    <ysfPay :payItem="payItem" v-else-if="payItem.platformtype=='ysfpay'"></ysfPay>
    <basePay :payItem="payItem" v-else></basePay>
  </div>
</template> 
<script>
  import basePay from './components/basePay.vue';
  import mcPay from './components/mcPay.vue';
  import ysfPay from './components/ysfPay.vue';
  export default {
    data() {
      return {}
    },
    props:{
      payItem:{
        type:Object
      }
    },

    watch: {
      payItem(){
        
      }
    },
    components:{basePay,mcPay,ysfPay}
  };
</script>
<style lang="scss" >
  .deposit-form{
    margin-top: 30px;
    // width: 500px;
    .el-select {
      display: block !important;
    }
  }
</style>