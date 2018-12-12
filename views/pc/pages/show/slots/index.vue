<template>
  <div class="slot-main">
    <banner></banner>
    <!-- <platform></platform> -->
    <v-filter></v-filter>
    <dada-list></dada-list>
  </div>
</template>
<script>
  import banner from "@/components/shows/page-slots/banner/t1"
  // import platform from "/components/platform"
  import dadaList from "@/components/shows/page-slots/lists/t1"
  import vFilter from "@/components/shows/page-slots/filter/t1"
  export default {
    data() {
      return {

      };
    },
    components: {
      banner,
      // platform,
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
