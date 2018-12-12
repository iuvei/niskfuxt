<template>
  <div class="listCommission-page">
    <listCommission></listCommission>
  </div>
</template>

<script>
import listCommission from "@/components/admin/agentLogs/commissions/t1/index.vue";
export default {
  layout: "admin", // 布局文件
  components: {
    listCommission
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
