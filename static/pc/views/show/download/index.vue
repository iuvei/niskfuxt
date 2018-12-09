<template>
<div class="down-page">
  <banner></banner>
  <lists></lists>
  <tech></tech>
</div>
</template>
<script>
  import banner from "./components/banner"
  import lists from "./components/lists"
  import tech from "./components/tech"

  export default {
    name: "",
    data() {
      return {

      }
    },

    components:{
      banner,lists,tech
    }
  }
</script>
<style lang="scss" spcoed>
  .down-page{
    background:#202020;

  }
</style>
