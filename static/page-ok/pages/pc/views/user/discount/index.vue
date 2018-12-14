<template>
  <div class="u-c-shows">
    <div class="u-c-box">
      <div class="mainContents">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "体验金",
          to: "discount_experience"
        },
        {
          name: "存送优惠",
          to: "discount_savesend"
        },
        // {name: "洗码", to: "discount_washcode"},
        {
          name: "存送券",
          to: "discount_coupon"
        },
        {
          name: "红包券",
          to: "discount_redenvelope"
        },
        {
          name: "救援金",
          to: "discount_help"
        },
        {
          name: "VIP礼金",
          to: "discount_vip"
        },
        {
          name: "生日礼金",
          to: "discount_birthday"
        },
        {
          name: "推荐好友",
          to: "discount_recommend"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.u-c-shows {
  .u-c-box {
    display: flex;
    justify-content: space-between;

    // background-image: url('components/images/discount-bg.png');
    // background-repeat: no-repeat;
    // background-position: right;
    // padding: 20px;
    // background-color: rgba(0, 0, 0, 0.7);
    // border: 1px solid #303030;
    // min-height: 400px;
    .mainContents {
      width: 100%;
      background-color: #232323;
      // border: 1px solid #303030;
      padding: 20px;
    }

    .wallet-menus {
      margin-right: 20px;

      .wallet-menus-item {
        margin: 0 auto;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.7);
        display: block;
        width: 200px;
        height: 60px;
        line-height: 60px;
        border: 1px solid #303030;
        font-size: 16px;
        color: #fff;
        padding-left: 30px;
        position: relative;
        cursor: pointer;

        &:before {
          content: "";
          width: 100%;
          background: none;
          height: 5px;
          position: absolute;
          bottom: -4px;
          left: 0;
        }

        &:hover,
        &.active {
          background: #e2b85a;
          /* Old browsers */
          background: -moz-linear-gradient(left, #e2b85a 0%, #e2b85a 100%);
          /* FF3.6-15 */
          background: -webkit-linear-gradient(left, #e2b85a 0%, #e2b85a 100%);
          /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right, #e2b85a 0%, #e2b85a 100%);
          /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e2b85a', endColorstr='#e2b85a', GradientType=1);
          /* IE6-9 */
        }
      }

      // .u-c-router {
      //   padding: 6px 20px;
      //   font-size: 16px;
      //   width: 129px;
      //   height: 33px;
      //   line-height: 30px;
      //   color: #666;
      //   margin-right: 15px;
      //   text-align: center;
      //   background: #ebebeb;
      //   display: inline-block;
      // }

      // .active {
      //   .u-c-router {
      //     background: #e2b85a;
      //     /* Old browsers */
      //     background: -moz-linear-gradient(left, #e2b85a 0%, #b99548 100%);
      //     /* FF3.6-15 */
      //     background: -webkit-linear-gradient(left, #e2b85a 0%, #b99548 100%);
      //     /* Chrome10-25,Safari5.1-6 */
      //     background: linear-gradient(to right, #e2b85a 0%, #b99548 100%);
      //     /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      //     filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e2b85a', endColorstr='#b99548', GradientType=1);
      //     /* IE6-9 */
      //     color: #fff;
      //   }
      // }
    }
  }
}

.u-c-router {
  .icos {
    display: inline-block;
    height: 40px;
    width: 30px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center center;

    &.experience {
      background-image: url(./components/images/experience.png);
    }

    &.savesend {
      background-image: url(./components/images/savesend.png);
    }

    &.washcode {
      background-image: url(./components/images/washcode.png);
    }

    &.coupon {
      background-image: url(./components/images/coupon.png);
    }

    &.redenvelope {
      background-image: url(./components/images/redenvelope.png);
    }

    &.help {
      background-image: url(./components/images/help.png);
    }

    &.vip {
      background-image: url(./components/images/vip.png);
    }

    &.birthday {
      background-image: url(./components/images/birthday.png);
    }

    &.recommend {
      background-image: url(./components/images/recommend.png);
    }
  }
}

.user-discount {
  .discount-content {
    padding: 50px 30px 30px;
  }

  .title-tip {
    color: #666;
    font-size: 18px;
    text-align: center;
    margin: 0 0 20px;
    font-weight: bold;
    line-height: 1.5;
  }

  .bottom-tip {
    color: #ffecb7;
    text-align: center;
    width: 100%;
    line-height: 1.5;
  }
}

.u-c-router {
  padding: 0 20px !important;
}
</style>
