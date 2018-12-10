<template>
  <div class="user-index">
    <account-top>头部内容</account-top>
    <account-menu>头部菜单</account-menu>
    <account-list>头部列表</account-list>
  </div>
</template>
<script>
  import accountTop from "./components/account-top"
  import accountMenu from "./components/account-menu"
  import accountList from "./components/account-list"
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        Deputy: 0
      };
    },
    components: {
      accountTop,
      accountMenu,
      accountList
    },
    // mounted(){
    //   this.$bus.$emit('setHeader',false)
    // },
    // activated(){
    //   this.$bus.$emit('setHeader',false)
    // },
    // deactivated(){
    //   this.$bus.$emit('setHeader',true)
    // },
    // beforeDestroy(){
    //   this.$bus.$emit('setHeader',true)
    // },
  };
</script>
<style lang="scss" scoped="">
  @import "~mobile/assets/scss/mixin.scss";
  .user-index {
    padding-bottom: r(20);
    background-color: #f5f5f5;
    .tab-list{
      flex-wrap: wrap;
      @include  f(32px);
      text-align: center;
      .tab-item{
        width: 25%;
        padding-top: r(20);
      }
    }
    .iconfont{
      @include  f(128px);
    }
  }
</style>
