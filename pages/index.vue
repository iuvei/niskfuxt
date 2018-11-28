<template>
  <div class="home-page">
    <p class="shoplist-title">—— INDEX ——</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    mounted() {
      console.log('isCreated')
      console.log(window)

    }
  };

</script>

<style lang="scss">
  @import "~assets/styles/mixin";

  .home-page {
    background-color: #fff;
    padding: px2rem(88px) 0 53px 0;

    .nav-container {
      @include fj();
      flex-wrap: wrap;
      margin-bottom: px2rem(30px);

      .nav-item {
        @include wh(20%, 80px);
        text-align: center;
        color: #666;
        font-size: px2rem(24px);
        padding-top: px2rem(10px);

        img {
          display: block;
          margin: 0 auto;
          @include wh(50px, 50px);
        }
      }
    }

    .swiper {
      padding: 0 0.4rem;
    }

    .shoplist-title {
      @include fj(center);
      font-size: px2rem(30px);
      margin-bottom: px2rem(20px);
    }

    .show-list {
      padding: 0 0.4rem;

      a {
        display: inline-block;
        width: 49%;
        height: auto;
        float: left;

        &:nth-last-of-type(1) {
          float: right;
        }
      }
    }
  }

</style>
