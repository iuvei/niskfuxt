<template>
  <div class="listSummary-page">
    <listSummary></listSummary>
  </div>
</template>

<script>
import listSummary from "@/components/admin/agentLogs/summary/t1/index.vue";
export default {
  layout: "admin", // 布局文件
  components: {
    listSummary
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
