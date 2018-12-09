<template>
  <div>
    <div class="sider-menu">
      <img src="./img/bg.jpg">
      <div class="s-menu" v-for="(list,i) in menus" :key="i" :class="{active:activeMenu==i}">
        <h3 @click="setMenu(i)">
          {{list.title}}
          <span class="s-menu-ico">></span>
        </h3>
        <ul>
          <li v-for="(menu,j) in list.children" :key="j">
            <router-link class="s-menu-item" :to="menu.router">{{menu.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menus: [
        {
          title: "我的钱包",
          children: [
            {
              name: "快速存款",
              router: { name: "deposit" }
            },
            {
              name: "快速提款",
              router: { name: "drawmoney" }
            },
            {
              name: "户内转账",
              router: { name: "transfer" }
            }
          ]
        },
        {
          title: "自助优惠",
          children: [
            {
              name: "体验金",
              router: { name: "discount_experience" }
            },
            {
              name: "存送优惠",
              router: { name: "discount_savesend" }
            },
            {
              name: "自助洗码",
              router: { name: "discount_washcode" }
            },
            {
              name: "救援金",
              router: { name: "discount_help" }
            },
            {
              name: "优惠券",
              router: { name: "discount_coupon" }
            },
            {
              name: "红包券",
              router: { name: "discount_redenvelope" }
            },
            {
              name: "VIP自助晋级",
              router: { name: "discount_vip" }
            },
            {
              name: "生日礼金",
              router: { name: "discount_birthday" }
            },
            {
              name: "推荐好友",
              router: { name: "discount_recommend" }
            }
          ]
        },
        {
          title: "账户设置",
          children: [
            {
              name: "个人信息",
              router: { name: "datum" }
            },
            {
              name: "银行卡列表",
              router: { name: "banks" }
            },
            {
              name: "登陆密码",
              router: { name: "password" }
            },
            {
              name: "支付密码",
              router: { name: "payword" }
            }
          ]
        },
        {
          title: "账户清单",
          children: [
            {
              name: "存款记录",
              router: { name: "user_log", params: { type: "deposit" } }
            },
            {
              name: "提款记录",
              router: { name: "user_log", params: { type: "withdraw" } }
            },
            {
              name: "户内转账",
              router: { name: "user_log", params: { type: "transfer" } }
            },
            {
              name: "优惠领取",
              router: {
                name: "user_log",
                params: { type: "concessionReccords" }
              }
            },
            {
              name: "自助优惠",
              router: { name: "user_log", params: { type: "couponRecords" } }
            },
            {
              name: "红利账户优惠",
              router: { name: "user_log", params: { type: "deputyRecords" } }
            },
            {
              name: "好友推荐",
              router: { name: "user_log", params: { type: "friend" } }
            }
          ]
        },
        {
          title: "站内信",
          children: [
            {
              name: "站内信息",
              router: { name: "message" }
            }
          ]
        }
      ],
      activeMenu: null // 当前展开的菜单
    };
  },
  methods: {
    // 查找当前的路由，设置菜单的展开状态
    findRouter() {
      for (let i = 0; i < this.menus.length; i++) {
        const _activeRoute = this.menus[i].children.some(item => {
          return item.router.name == this.$route.name;
        });
        if (_activeRoute) {
          this.activeMenu = i;
        }
      }
    },
    // 点击菜单操作
    setMenu(i) {
      if (this.activeMenu == i) {
        this.activeMenu = null;
      } else {
        this.activeMenu = i;
      }
    }
  },
  // computed: {
  //   ...mapGetters(["userData", "unread", "isUser"])
  // },
  created() {
    this.findRouter();
  }
};
</script>
<style lang="scss" scoped="">
.sider-menu {
  border: solid 1px #2b2b2b;
  background: #131313;
  color: #fff;
  .s-menu {
    h3 {
      font-size: 18px;
      background: #282828;
      line-height: 50px;
      padding-left: 40px;
      cursor: pointer;
      border-bottom: solid 2px #000;
      .s-menu-ico {
        display: inline-block;
        float: right;
        margin-right: 20px;
        transition: all 0.4s;
      }
    }
    .s-menu-item {
      display: block;
      line-height: 0;
      padding-left: 50px;
      height: 0;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        background: #000;
        color: #fb9b08;
        padding-left: 50px;
      }
    }
    &.active {
      padding-bottom: 40px;
      .s-menu-ico {
        transform: rotate(90deg);
      }
      .s-menu-item {
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
.sidebar {
  width: 100%;
  position: relative;
  z-index: 10;
  text-align: center;
  border: 1px solid #303030;
  margin-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  .userbox {
    width: 100%;
    text-align: center;
  }
  .sidenav {
    font-weight: normal;
    position: relative;
    display: flex;
    justify-content: flex-start;
    .noborder {
      border: none !important;
    }
    .sidenav-item {
      background-repeat: no-repeat;
      background-position: right 30px center;
      position: relative;
      display: block;
      text-align: center;
      color: #fff;
      font-size: 16px;
      letter-spacing: 2px;
      height: 50px;
      line-height: 50px;
      width: 14.28%;
      border-right: 1px solid #303030;
      &:hover,
      &.active {
        background: #e2b85a; /* Old browsers */
        background: -moz-linear-gradient(
          left,
          #e2b85a 0%,
          #e2b85a 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          #e2b85a 0%,
          #e2b85a 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          #e2b85a 0%,
          #e2b85a 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2b85a', endColorstr='#e2b85a',GradientType=1 ); /* IE6-9 */
        color: #ffffff;
        &::before {
          transition: border-color 0.5s;
          position: absolute;
          content: "";
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0px;
          height: 0px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 16px solid #e2b85a;
        }
      }
      .icobjh {
        font-size: 20px;
        vertical-align: middle;
      }
      .icon-arrow-right {
        position: absolute;
        right: 30px;
        font-size: 20px;
      }
    }
  }
}
</style>
