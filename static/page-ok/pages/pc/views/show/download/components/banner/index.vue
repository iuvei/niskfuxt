<template>
  <div class="bannerItem">
    <div class="main">
      <div class="mainItem">
        <div class="item1"></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: "",
    data() {
      return {
        cur:'OPE'
      }
    },
    created() {
      this.$bus.$on('getDownloadPage', eventData => {
        this.cur = eventData
      })
    },

  }

</script>
<style lang="scss" scoped>
.bannerItem {
    width: 100%;
    background: url('./images/banner.png') no-repeat;
    background-size: cover;
    background-position: top center;
    height: 275px;
  }
</style>
