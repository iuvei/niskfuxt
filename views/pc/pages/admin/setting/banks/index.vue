<template>
  <div class="banks-page">
    <banks></banks>
  </div>
</template>

<script>

  import banks from '@/components/banks/t1/index.vue';
  export default {
    layout: "admin", // 布局文件
    components: {
      banks,
    },
    data() {
      return {

      };
    },
    mounted() {


    },
    methods:{

    }

};
</script>

<style lang="scss">

</style>
