<template>
  <div class="slot-main">
    <banner></banner>
    <v-filter></v-filter>
    <dada-list></dada-list>
  </div>
</template>
<script>
  import banner from "@/components/shows/banners/t1"
  import dadaList from "@/components/shows/slots-list/t1"
  import vFilter from "@/components/shows/slots-filter/t1"
  export default {
    layout: "main", // 布局文件
    data() {
      return {

      };
    },
    components: {
      banner,
      vFilter,
      dadaList,
    }
  };

</script>
<style>
  .slot-main {
    background: #202020;
    padding-bottom: 40px;
  }

</style>
