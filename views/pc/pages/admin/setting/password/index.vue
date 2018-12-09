<template>
  <div class="passwordSet-page">
    <passwordSet></passwordSet>
  </div>
</template>

<script>

  import passwordSet from '@/components/passwordSet/t1/index.vue';
  export default {
    layout: "admin", // 布局文件
    components: {
      passwordSet,
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
