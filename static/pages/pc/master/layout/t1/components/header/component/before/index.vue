<template>
  <div class="login-form">
    <a href="javascript:;" class="btn002" @click="$bus.$emit('showRegister',true)">
      快速注册
    </a>
    <a href="javascript:;" class="btn001" @click="$bus.$emit('showLogin',true)">
      登录
    </a>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.login-form {
  display: inline-block;
  margin-top: 6px;
  a{
    float: right;
    margin-left: 5px;
    height: 30px;
    line-height: 30px;
  }
  .btn001 {
    color: #fff;
    display: inline-block;
    text-align: center;
    width: 100px;
    border-radius: 5px;
    background-color: #386be6;
    margin-left: 0;
  }

  .btn002 {
    color: #fff;
    display: inline-block;
    text-align: center;
    width: 100px;
    background: #df3531;
    border-radius: 5px;
  }
}
</style>
