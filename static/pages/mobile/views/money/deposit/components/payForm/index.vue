<template>
  <div class="payform" v-if="payItem">
    <mcPay :payItem="payItem" v-if="payItem.platformtype=='mcpay'"></mcPay>
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
    },
    components:{basePay,mcPay}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .deposit-form{
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
  .payform{
    padding-bottom: r(100);
  }
</style>