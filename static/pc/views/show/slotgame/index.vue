<template>
  <div class="slot-main">
    <banner></banner>
    <platform></platform>
    <v-filter></v-filter>
    <dada-list></dada-list>
  </div>
</template>
<script>
  import banner from "./components/banner"
  import platform from "./components/platform"
  import dadaList from "./components/games"
  import vFilter from "./components/fliter"
  export default {
    data() {
      return {

      };
    },
    components: {
      banner,platform,vFilter, dadaList,
    }
  };
</script>
<style>
  .slot-main{
    background:#202020;
    padding-bottom:40px;
  }
</style>
