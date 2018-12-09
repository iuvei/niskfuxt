<template>
  <div class="user-security">
     <!-- 先确认是否已经设置过支付密码 -->
     <pay-update ></pay-update>
     <pay-set></pay-set>
    <div class="tips" style="padding-top:100px;">
      <h3>温馨提示：</h3>
      <p>
        1.<span>【重置支付密码】</span>可以使用注册电话短信验证或注册邮箱验证进行更改
      </p>
      <p>
        2.如您“<span>忘记支付密码</span>”，请咨询在线客服，核实相关信息无误后将会为您重置新的支付密码并发送至您的<span>注册邮箱</span>。
      </p>
    </div>
  </div>
</template>
<script>
  import paySet from "pc/views/common/pwd/pay-set" 
  import payUpdate from "pc/views/common/pwd/pay-update"

  export default {
    data() {
      return {
      }
    },
    components: {
      paySet, payUpdate
    },
    computed: {
    },
  };
</script>
<style lang="scss" scoped>
  .tips{
    clear:both;
    h3{

    }
    p{
      line-height:2;
      span{
        color:red;
      }
    }
  }
</style>
