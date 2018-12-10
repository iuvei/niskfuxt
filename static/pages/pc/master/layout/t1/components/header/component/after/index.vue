<template>
  <div>
    <agent></agent>
    <user></user>
  </div>
</template>
<script>
  import user from './components/user'
  import agent from './components/agent'
  export default {
    data() {
      return {}
    },
    components:{agent,user}
  };

</script>
<style lang="scss">
.el-badge__content.is-fixed{
  position: absolute !important;
  top: 9px !important;
  right: 10px !important;
}
</style>

