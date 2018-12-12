<template>
  <div class="listAmount-page">
    <listAmount></listAmount>
  </div>
</template>

<script>
import listAmount from "@/components/admin/agentLogs/amounts/t1/index.vue";
export default {
  layout: "admin", // 布局文件
  components: {
    listAmount
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
