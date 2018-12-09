<template>
  <div class="u-c-shows tech">
    <div class="u-c-menu">
      <a class="u-c-router" @click="techActive='alipay'" :class="{active:techActive=='alipay'}"><img src="./images/ico-alipay.png">支付宝转账教程</a>
      <a class="u-c-router" @click="techActive='wechat'" :class="{active:techActive=='wechat'}"><img src="./images/ico-wechat.png">微信转银行卡教程</a>
      <a class="u-c-router" @click="techActive='ebank'" :class="{active:techActive=='ebank'}"><img src="./images/ico-ebank.png">手机银行与网银转账教程</a>
    </div>
    <div class="u-c-box">
      <tech1 v-if="techActive=='alipay'"></tech1>
      <tech2 v-if="techActive=='wechat'"></tech2>
      <tech3 v-if="techActive=='ebank'"></tech3>
    </div>
  </div>
</template>
<script>
  import tech1 from './tech1.vue'
  import tech2 from './tech2.vue'
  import tech3 from './tech3.vue'
  export default {
    data() {
      return {
        techActive: 'alipay'
      };
    },
    methods: {},
    components: {tech1,tech2,tech3},
    created() {
      console.log(this.$route)
      if(this.$route.params&&this.$route.params.type){
        this.techActive=this.$route.params.type
      }
    },
  };

</script>
<style lang="scss" scoped>
  .tech {
    .u-c-menu{
      justify-content: start!important;
    }
    .u-c-router {
      padding:8px 20px!important;
      margin-right:20px;
      img{
        margin-right:10px;
      }
      .icos {
        display: inline-block;
        height: 40px;
        width: 30px;
        margin-right:10px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }

</style>
