<template>
  <div class="user-page">
    <banner></banner>
    <div class="user-top">
      <info>
        <!-- 用户信息模块 -->
      </info>
    </div>
    <div class="user-content content">
      <div class="u-c-menu">
        <user-menus>
          <!-- 左边的菜单内容 -->
        </user-menus>
      </div>
      <div class="u-c-shows">
        <p class="u-c-title">{{$route.meta.headName||$route.meta.title}}</p>
        <router-view>
          <!-- 路由内容区域 -->
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import info from "./components/info"; // 用户信息栏目
// import games from './components/games' // 用户钱包数据
import userMenus from "./components/user-menus"; // 用户菜单
import banner from "./components/banner/"; //个人中心banner
export default {
  name: "userMaster",
  data() {
    return {
      myData: []
    };
  },
  components: {
    info,
    // games,
    userMenus,
    banner
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
<style lang="scss">
.user-page {
  // background:#202020;
  background-image: url("./images/bg1.jpg");
  background-color: #000;
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-top: 100px;
  padding-bottom: 40px;
  // .user-content{
  //   // background:#202020;
  //   /*min-height:800px;
  //   display:flex;
  //   justify-content: space-between;*/
  // }
  .user-content {
    display: flex;
    min-height: 600px;
    justify-content: space-between;
    margin-top: 20px;
    .u-c-menu {
      width: 280px;
      margin-right: 20px;
    }
  }
  .u-c-shows {
    width: 100%;
    .u-c-title {
      background: #151515;
      color: #fff;
      padding: 20px 10px;
      font-size: 16px;
    }
  }
}

.userSet {
  display: flex;
  justify-content: space-between;
  .u-c-box {
    width: 100%;
    background-color: #232323;
    min-height: 500px;
    // border: 1px solid #303030;
    padding: 20px;
  }
}
/* 更改ui默认样式 */
.search .el-input__inner {
  border: none !important;
  background-color: #fff !important;
  color: #000 !important;
}
.el-input-group__append {
  background: #8b3e3a !important;
  border: none !important;
  span {
    color: #fff !important;
  }
  i {
    color: #fff !important;
  }
}
.u-c-box .el-input__inner {
  border: none !important;
  background-color: #202020 !important;
  color: #fff !important;
}
.user-log .el-table th,
.user-log .el-table tr,
.user-log .el-table,
.user-log .el-table__expanded-cell {
  background-color: #202020;
}
.vip-gold .el-table th,
.vip-gold .el-table tr,
.vip-gold .el-table,
.vip-gold .el-table__expanded-cell {
  background-color: #202020;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #c0c4cc;
}
.el-button--primary {
  background-color: #d66d2e !important;
  border-color: #d66d2e !important;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #e2b85a !important;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #e2b85a !important;
  background: #e2b85a !important;
}
.el-radio.is-bordered.is-checked {
  border-color: #e2b85a !important;
}
.u-c-box .el-form-item__label {
  color: #fff !important;
}
.el-button--text {
  color: #f6d48d !important;
}
.el-carousel__mask,
.el-cascader-menu,
.el-cascader-menu__item.is-disabled:hover,
.el-collapse-item__header {
  background-color: #202020 !important;
}
.el-collapse-item__wrap {
  background-color: #232323 !important;
  .el-collapse-item__content {
    padding-bottom: 0 !important;
    .letter-content {
      border: none !important;
      color: #fff !important;
      .html {
        border: none !important;
      }
    }
  }
}
.el-collapse-item__header {
  color: #fff !important;
}
.user-message .message-item .u-m-head .date {
  color: #fff !important;
}
.el-step__title.is-process {
  color: #fff !important;
}
</style>
