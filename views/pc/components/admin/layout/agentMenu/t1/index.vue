<template>
  <div class="sider-menu">
    <img src="./img/bg.jpg">
    <div class="s-menu" v-for="(list,i) in menus" :key="i" :class="{active:activeMenu==i}">
      <h3 @click="setMenu(i)">
        {{list.title}}
        <Icon type="ios-arrow-forward" class="s-menu-ico"/>
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
      menus: [
        {
          title: "我的钱包",
          children: [
            {
              name: "快速提款",
              router: {
                name: "admin-money-withdraw"
              }
            }
          ]
        },
        {
          title: "会员报表",
          children: [
            {
              name: "会员列表",
              router: {
                name: "admin-logs-agent-listuser"
              }
            },
            {
              name: "优惠记录",
              router: {
                name: "admin-logs-agent-listpromo"
              }
            },
            {
              name: "洗码记录",
              router: {
                name: "admin-logs-agent-listxima"
              }
            },
            {
              name: "提款记录",
              router: {
                name: "admin-logs-agent-listwithdraw"
              }
            },
            {
              name: "充值记录",
              router: {
                name: "admin-logs-agent-listdeposit"
              }
            },
            {
              name: "输赢记录",
              router: {
                name: "admin-logs-agent-listwin"
              }
            }
          ]
        },
        {
          title: "代理报表",
          children: [
            {
              name: "数据汇总",
              router: {
                name: "admin-logs-agent-listsummary"
              }
            },
            {
              name: "佣金报表",
              router: {
                name: "admin-logs-agent-listcommission"
              }
            },
            {
              name: "额度报表",
              router: {
                name: "admin-logs-agent-listamount"
              }
            }
          ]
        },
        {
          title: "账户设置",
          children: [
            {
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
              name: "提款密码",
              router: {
                name: "admin-setting-payword"
              }
            }
          ]
        },
        {
          title: "站内信",
          children: [
            {
              name: "站内信息",
              router: {
                name: "admin-message"
              }
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
  mounted() {
    this.findRouter();
  }
};
</script>
<style spcoed lang="scss">
.sider-menu {
  border: solid 1px #2b2b2b;
  background: #131313;
  color: #fff;
  width: 230px;
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
        line-height: 52px;
        color: #ddd;
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
