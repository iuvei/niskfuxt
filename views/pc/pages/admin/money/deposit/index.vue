<template>
  <div class="deposit-page">
    <depositForm></depositForm>
  </div>
</template>

<script>

  import depositForm from '@/components/admin/money/deposit/t1';
  export default {
    layout: "admin", // 布局文件
    components: {
      depositForm,
      // ShopList
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
