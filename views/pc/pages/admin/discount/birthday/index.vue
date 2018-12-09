<template>
  <div class="birthday-page">
    <birthday></birthday>
  </div>
</template>

<script>

  import birthday from '@/components/admin/discount/birthday/t1/index.vue';
  export default {
    layout: "admin", // 布局文件
    title: "test-title",
    components: {
      birthday,
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
