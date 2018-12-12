<template>
  <div class="listDeposit-page">
    <listDeposit></listDeposit>
  </div>
</template>

<script>
import listDeposit from "@/components/admin/agentLogs/deposits/t1/index.vue";
export default {
  layout: "admin", // 布局文件
  components: {
    listDeposit
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
</style>
