<template>
  <div class="layout-default">
      <slot>
        <nuxt keep-alive/>
      </slot>
  </div>
</template>

<script>
export default {
  middleware: "route",
  created() {
    // 拉取用户信息
  },
};
</script>
