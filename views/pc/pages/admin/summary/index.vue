<template>
  <div class="home-page">
    <Button>默认按钮</Button>
  </div>
</template>

<script>
import config from "~~/config";
import { getHomeData, checkLogin, ipapi } from "~/assets/services/common";
import { loginApi } from "~/assets/services/user";
export default {
  layout: "admin", // 布局文件
  components: {
    // Tabbar,
    // ShopList
  },
  data() {
    return {
      loginData: {
        account: "woodytest",
        password: "b2b123456",
        imageCode: ""
      },
      data: "静安区",
      navList: [],
      show1: `${config.IMG_URL}show1.png`,
      show2: `${config.IMG_URL}show2.png`,
      bannerList: [
        `${config.IMG_URL}banner/4a6f8262a2a006c0bd6ba31b137c4jpeg.png`,
        `${config.IMG_URL}banner/146be328e7121c456ac67f54b59fbjpeg.png`,
        `${config.IMG_URL}banner/b28f567a846a21f01aa39a55d6facjpeg.png`
      ]
    };
  },
  mounted() {
    // checkLogin().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    ipapi()
      .then(res => {})
      .catch(err => {});
  },
  methods: {
    login() {
      loginApi(this.loginData)
        .then(res => {
          console.log(window);
        })
        .then(err => {})
        .then(err => {});
    }
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
@import "~assets/styles/mixin";

.home-page {
  // background-color: #fff;
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
