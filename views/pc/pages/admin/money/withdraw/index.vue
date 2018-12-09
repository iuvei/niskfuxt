<template>
  <div class="withdraw-page">
    <withdrawForm></withdrawForm>
  </div>
</template>

<script>

  import withdrawForm from '@/components/withdraw/t1';
  export default {
    layout: "admin", // 布局文件
    components: {
      withdrawForm,
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
