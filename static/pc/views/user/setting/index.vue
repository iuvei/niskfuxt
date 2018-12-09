<template>
    <div class="u-c-shows">
      <div class="u-c-menu">
        <router-link  :to="{name: 'user_datum'}" class="u-c-router"><span class="icobjh bjh-Management"></span>个人中心</router-link>
        <router-link  :to="{name: 'user_banks'}" class="u-c-router"><span class="icobjh bjh-qianbao"></span>银行卡管理</router-link>
        <router-link  :to="{name: 'user_password'}" class="u-c-router"><span class="icobjh bjh-suo1"></span>登录密码</router-link>
        <!-- <router-link  :to="{name: 'user_payword'}" class="u-c-router"><span class="icobjh bjh-suo1"></span>支付密码</router-link> -->
      </div>
      <div class="u-c-box">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
    computed: {
    },
    created() {
    },
  };
</script>
<style lang="scss">

</style>
