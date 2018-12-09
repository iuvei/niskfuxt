<template>
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
</template>
<script>
  export default {
    name: "userMenu",
    data() {
      return {
        menus: [{
            title: "我的钱包",
            children: [{
                name: "快速存款",
                router: {
                  name: "admin-money-deposit"
                }
              },
              {
                name: "快速提款",
                router: {
                  name: "admin-money-withdraw"
                }
              },
              {
                name: "户内转账",
                router: {
                  name: "admin-money-transfer"
                }
              }
            ]
          },
          {
            title: "自助优惠",
            children: [{
                name: "体验金",
                router: {
                  name: "admin-discount-experience"
                }
              },
              {
                name: "存送优惠",
                router: {
                  name: "admin-discount-savesend"
                }
              },
              {
                name: "自助洗码",
                router: {
                  name: "admin-discount-washing"
                }
              },
              {
                name: "救援金",
                router: {
                  name: "admin-discount-rescue"
                }
              },
              {
                name: "优惠券",
                router: {
                  name: "admin-discount-coupon"
                }
              },
              {
                name: "红包券",
                router: {
                  name: "admin-discount-envelope"
                }
              },
              {
                name: "VIP自助晋级",
                router: {
                  name: "admin-discount-vip"
                }
              },
              {
                name: "生日礼金",
                router: {
                  name: "admin-discount-birthday"
                }
              },
              {
                name: "推荐好友",
                router: {
                  name: "admin-discount-friends"
                }
              }
            ]
          },
          {
            title: "账户设置",
            children: [{
                name: "个人信息",
                router: {
                  name: "admin-setting-information"
                }
              },
              {
                name: "银行卡列表",
                router: {
                  name: "admin-setting-banks"
                }
              },
              {
                name: "登陆密码",
                router: {
                  name: "admin-setting-password"
                }
              },
              {
                name: "支付密码",
                router: {
                  name: "admin-setting-payword"
                }
              }
            ]
          },
          {
            title: "账户清单",
            children: [{
                name: "存款记录",
                router: {
                  name: "admin-logs-user-deposit"
                }
              },
              {
                name: "提款记录",
                router: {
                  name: "admin-logs-user-withdraw"
                }
              },
              {
                name: "户内转账",
                router: {
                  name: "admin-logs-user-transfer"
                }
              },
              {
                name: "优惠领取",
                router: {
                  name: "admin-logs-user-promos"
                }
              },
              {
                name: "自助优惠",
                router: {
                  name: "admin-logs-user-coupon"
                }
              },
              {
                name: "自助返水",
                router: {
                  name: "admin-logs-user-washing"
                }
              },
              {
                name: "副账户优惠",
                router: {
                  name: "admin-logs-user-deputy"
                }
              },
              {
                name: "好友推荐",
                router: {
                  name: "admin-logs-user-friends"
                }
              }
            ]
          },
          {
            title: "站内信",
            children: [{
              name: "站内信息",
              router: {
                name: "admin-message"
              }
            }]
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
    mounted() {
      this.findRouter();
    }
  }

</script>
<style spcoed lang="scss">
  .sider-menu {
    border: solid 1px #2b2b2b;
    background: #131313;
    color: #fff;
    width:230px;
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
</style>
