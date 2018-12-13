<template>
  <div class="register-page">
    <div class="win-content">
    <div class="reg-top">
      <img src="./img/header.jpg">
    </div>
    <registerFormAgent></registerFormAgent>
    </div>
  </div>
</template>

<script>

  import registerFormAgent from '@/components/common/registerFormAgent/t2/index.vue';
  export default {
    head() {
      return {
        title: '用户注册'
      };
    },
    components: {
      registerFormAgent,
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
    width:760px; 
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
