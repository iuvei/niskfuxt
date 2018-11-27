<template>
  <div class="test.vue-page">
    <mt-header fixed title="test.vue"></mt-header>
    test.vue
  </div>
</template>

<script>
  export default {
    head: {
      title: 'test.vue'
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .test.vue-page {
    padding: px2rem(88px) 0 0 0;
  }
</style>
