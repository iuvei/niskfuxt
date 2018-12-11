<template>
  <div class="listUser-page">
    <listUser></listUser>
  </div>
</template>

<script>
import listUser from "@/components/admin/agentLogs/users/t1/index.vue";
export default {
  layout: "admin", // 布局文件
  components: {
    listUser
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
