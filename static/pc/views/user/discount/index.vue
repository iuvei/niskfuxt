<template>
  <div class="u-c-shows">
    <div class="u-c-menu">
      <router-link class="u-c-router" v-for="item in menuList" :to="item.to" :key="item.name">
        <span class="icos" :class="item.to"></span>{{item.name}}
      </router-link>
    </div>
    <div class="u-c-box">
      <div class="user-discount">
        <div class="discount-content form-rowbox">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuList: [
          //{name: "体验金", to: "experience"},
          {name: "存送优惠", to: "savesend"},
          //{name: "洗码", to: "washcode"},
          {name: "存送券", to: "coupon"},
          {name: "红包券", to: "redenvelope"},
          {name: "救援金", to: "help"},
          {name: "VIP礼金", to: "vip"},
          {name: "生日礼金", to: "birthday"},
          //{name: "推荐好友", to: "recommend"}
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
  .u-c-router{
    .icos{
      display:inline-block;
      height:40px;
      width:30px;
      vertical-align:middle;
      background-repeat:no-repeat;
      background-position:center center;
      &.experience{
        background-image:url(./components/images/experience.png)
      }
      &.savesend{
        background-image:url(./components/images/savesend.png)
      }
      &.washcode{
        background-image:url(./components/images/washcode.png)
      }
      &.coupon{
        background-image:url(./components/images/coupon.png)
      }
      &.redenvelope{
        background-image:url(./components/images/redenvelope.png)
      }
      &.help{
        background-image:url(./components/images/help.png)
      }
      &.vip{
        background-image:url(./components/images/vip.png)
      }
      &.birthday{
        background-image:url(./components/images/birthday.png)
      }
      &.recommend{
        background-image:url(./components/images/recommend.png)
      }
    }
  }
  .user-discount {
    .discount-content {
      padding: 50px 30px 30px;
    }
    .title-tip{
      color: #666;
      font-size: 18px;
      text-align: center;
      margin: 0 0 20px;
      font-weight: bold;
      line-height: 1.5;
    }
    .bottom-tip{
      color: #ffecb7;
      text-align: center;
      width: 100%;
      line-height: 1.5;
    }
  }
  .u-c-router{
    padding:0 20px!important;
  }
</style>
