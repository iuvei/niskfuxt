<template>
  <div class="payform">
    <mcPay :payItem="payItem" v-if="payItem.type=='mcpay'"></mcPay>
    <basePay :payItem="payItem" v-else></basePay>
  </div>
</template> 
<script>
  import basePay from './components/basePay.vue';
  import mcPay from './components/mcPay.vue';
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
        // console.log(this.payItem);
      }
    },
    components:{basePay,mcPay}
  };
</script>
<style lang="scss">
  .deposit-form{
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
</style>