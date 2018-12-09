<template>
  <div class="transfer-page">
    <transferForm></transferForm>
  </div>
</template>

<script>

  import transferForm from '@/components/admin/money/transfer/t1';
  export default {
    layout: "admin", // 布局文件
    components: {
      transferForm,
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
