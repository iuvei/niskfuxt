<template>
  <div class="register-page">
    <div class="win-content">
    <div class="reg-top">
      <img src="./img/header.jpg">
    </div>
    <Steps :current="1">
        <Step title="填写资料" icon="ios-person"></Step>
        <Step title="完善信息" icon="ios-camera"></Step>
        <Step title="开始游戏" icon="ios-mail"></Step>
    </Steps>
    <registerFormUser></registerFormUser>
    </div>
  </div>
</template>

<script>

  import registerFormUser from '@/components/common/registerFormUser/t2/index.vue';
  export default {
    head() {
      return {
        title: '用户注册'
      };
    },
    components: {
      registerFormUser,
    },

    data() {
      return {

      };
    },
    mounted() {


    },
    methods:{

    }

};
</script>

<style lang="scss">
body{
  background:#f7f8fb!important;
}
.register-page{
  min-height:100vh;
  .win-content{
    background:#fff;
    margin:0 auto;
    width:500px; 
    padding:20px;
  }
  .reg-top{
    img{
      width:100%;
      display:block;
    }
  }
}
</style>
