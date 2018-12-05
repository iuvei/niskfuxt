<template>
  <div class="home-page">
    <Button>默认按钮</Button>
    <input class="login-input" 
      v-model="loginData.account" 
      type="text" 
      name="account_user" 
      placeholder="游戏帐号">
    <input class="login-input" 
      v-model="loginData.password" 
      ref="pwd" 
      name="pwd_user" 
      type="password" 
      placeholder="游戏密码">
    <input class="login-input" 
      v-model="loginData.imageCode" 
      name="imageCode" 
      type="text" 
      placeholder="验证码">
      <img src="/proxy/mobi/validateImage.php?random=234">
    <!-- <a @click="login">登陆-{{$store.getters.userInfo.name}}--PC</a>  -->
    <img v-lazy="'https://avatar-static.segmentfault.com/122/290/1222908597-5692044f6b297_big64'">
    <div style="height:5px;clear:both" />
    <div class="swiper">
    </div>
    <div style="height:10px;clear:both" />
  </div>
</template>

<script>

  import config from '~~/config';
  import {
    getHomeData,
    checkLogin,
    ipapi
  } from "~/assets/services/common";
  import {
    loginApi
  } from "~/assets/services/user";
  export default {
    components: {
      // Tabbar,
      // ShopList
    },
    data() {
      return {
        loginData: {
          account: 'woodytest',
          password: 'b2b123456',
          imageCode: ''
        },
        data: "静安区",
        navList: [],
        show1: `${config.IMG_URL}show1.png`,
        show2: `${config.IMG_URL}show2.png`,
        bannerList: [
          `${config.IMG_URL}banner/4a6f8262a2a006c0bd6ba31b137c4jpeg.png`,
          `${config.IMG_URL}banner/146be328e7121c456ac67f54b59fbjpeg.png`,
          `${config.IMG_URL}banner/b28f567a846a21f01aa39a55d6facjpeg.png`,
        ],
      };
    },
    mounted() {
      // checkLogin().then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      ipapi().then(res => {

      }).catch(err => {

      })

    },
    methods:{
      login(){
        loginApi(this.loginData).then(res => {
          console.log(window)
        }).then(err => {

        })
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
