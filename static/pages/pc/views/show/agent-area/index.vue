<template>
  <div class="show-agent-join">
    <agent-banner></agent-banner>
    <agent-step></agent-step>
    <agent-notice></agent-notice>
    <common-problem></common-problem>
    <agent-detail></agent-detail>
    <agent-register></agent-register>
  </div>
</template>
<script>
  import agentBanner from './components/agent-banner'
  import agentNotice from './components/agent-notice'
  import agentRegister from './components/agent-register'
  import agentStep from './components/agent-step'
  import agentDetail from './components/agent-details'
  import commonProblem from './components/common-problem'
  export default {
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
//      this.$emit('hide', ['nav', 'header'], false);
    },
    beforeDestroy() {
//      this.$emit('hide', ['nav', 'header'], true);
    },
    components: {agentBanner,agentNotice,agentRegister,agentStep,commonProblem,agentDetail}
  }
</script>
<style lang="scss" scoped>
@import "~pc/assets/scss/agentJoin.scss";
  html {
    min-width: 1200px;
    overflow-x: auto;
    margin: 0 auto;
  }
</style>
