<template>
  <div class="deposit-page">
    <depositForm></depositForm>
  </div>
</template>

<script>

  import depositForm from '@/components/deposit/t1';
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
  // async asyncData() {
  //   const res = await getHomeData();
  //   res.data.map(item => {
  //     item.imgUrl = config.IMG_URL + item.imgUrl;
  //   });
  //   return {
  //     navList: res.data
  //   };
  // }
};
</script>

<style lang="scss">

</style>
