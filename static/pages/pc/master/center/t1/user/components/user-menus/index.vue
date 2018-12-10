<template>
  <div class="sidebar">
    <div class="sidenav">
      <router-link class="sidenav1-item" :to="{name: 'user_wallet'}">
        <div class="sidenav1-item-dev">
          <div class="iconyg yg-qianbao"></div>
          <div class="side-text">我的钱包</div>
        </div>
        <div class="triangle-right"></div>
      </router-link>
      <router-link class="sidenav1-item" :to="{name: 'user_discount'}">
        <div class="sidenav1-item-dev">
          <div class="iconyg yg-youhuiquan"></div>
          <div class="side-text">自助优惠</div>
        </div>
        <div class="triangle-right"></div>
      </router-link>
      <router-link class="sidenav1-item" :to="{name: 'user_log'}">
        <div class="sidenav1-item-dev">
          <div class="iconyg yg-jilu"></div>
          <div class="side-text">记录查询</div>
        </div>
        <div class="triangle-right"></div>
      </router-link>
      <router-link class="sidenav1-item" :to="{name: 'user_setting'}">
        <div class="sidenav1-item-dev">
          <div class="iconyg yg-shezhi1"></div>
          <div class="side-text">账户设置</div>
        </div>
        <div class="triangle-right"></div>
      </router-link>
      <router-link class="sidenav1-item" :to="{name: 'message'}">
        <div class="sidenav1-item-dev">
          <div class="iconyg yg-xiaoxi"></div>
          <div class="side-text">站内消息</div>
        </div>
        <div class="triangle-right"></div>
      </router-link>
    </div>
    <!-- <div class="sidenav">
      <router-link class="sidenav-item" :to="{name: 'user_setting'}" style="background:#09affe;">
        <span class="icobjh bjh-Management"></span>
        <span class="side-text">我的钱包</span>
      </router-link>

      <router-link class="sidenav-item" :to="{name: 'user_setting'}" style="background:#09affe;">
        <span class="icobjh bjh-Management"></span>
        <span class="side-text">个人中心</span>
        <span class="iconfont icon-arrow-right"></span>
      </router-link>

      <router-link class="sidenav-item" :to="{name: 'finance_deposit'}" style="background:#df5555;">
        <span class="icobjh bjh-chongzhi"></span>
        <span class="side-text">充值</span>
        <span class="iconfont icon-arrow-right"></span>
      </router-link>

      <router-link class="sidenav-item" :to="{name: 'finance_drawmoney'}" style="background:#7087c3;">
        <span class="icobjh bjh-tikuan"></span>
        <span class="side-text">提款</span>
        <span class="iconfont icon-arrow-right"></span>
      </router-link>

      <router-link class="sidenav-item" :to="{name: 'finance_transfer'}" style="background:#5cb4c8;">
        <span class="icobjh bjh-zhuanzhang"></span>
        <span class="side-text">转账</span>
        <span class="iconfont icon-arrow-right"></span>
      </router-link>

      <div class="menu-grid">

        <router-link class="m-g-item" :to="{name: 'user_discount'}">
          <span class="icobjh bjh-liwu"></span>
          <span class="side-text">自助优惠</span>
        </router-link>

        <router-link class="m-g-item" :to="{name: 'user_log'}">
          <span class="icobjh bjh-yewubaobiao"></span>
          <span class="side-text">记录查询</span>
        </router-link>
        <router-link class="m-g-item" :to="{name: 'user_message'}">
          <el-badge :value="unread?unread:''" :max="50">
              <span class="icobjh bjh-email"></span>
              <span class="side-text">站内消息</span>
          </el-badge>
        </router-link>

      </div>

    </div> -->
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {

      };
    },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    methods: {

    },
    computed: {
      ...mapGetters(["userData","unread","isUser"]),
    },
    created() {}
  };

</script>
<style lang="scss" scoped="">
  .sidebar {
    width: 225px;
    min-height: 800px;
    position: relative;
    z-index: 10;
    text-align: center;
    // background: #f2f2f2;
    .userbox {
      width: 100%;
      text-align: center;
    }
    .sidenav1 {
      font-weight: normal;
      position: relative;
      background: #fff;
    }
    .sidenav {
      font-weight: normal;
      position: relative;
      .sidenav1-item{
        text-align: center;
        .icobjh {
          font-size: 20px;
          vertical-align: middle;
          color: #353f8d;
        }
        .iconyg{
          font-size: 30px;
          vertical-align: middle;
          color: #353f8d;
        }
        .sidenav1-item-dev {
          text-align: center;
          border: 1px solid #ccc;
          padding: 15px 10px;
          border-radius: 5px;
          font-size: 1.1rem;
          background: #fff;
          color: #969696;
          margin-bottom: 14px;
          line-height: 30px;
        }
        &.active {
          .sidenav1-item-dev{
            background: #ed7e12;
            color: #fff;
            .icobjh {
              font-size: 20px;
              vertical-align: middle;
              color: #fff;
            }
            .iconyg{
              font-size: 27px;
              vertical-align: middle;
              color: #fff;
            }
          }
          .triangle-right{
            position: relative;
            right: -224px;
            top: -65px;
            width: 0;
            height: 0;
            border: 10px solid;
            border-color: transparent transparent transparent #ed7e12;
          }
        }
      }
    }
    .menu-grid {
      .m-g-item {
        display: block;
        padding: 20px 10px;
        border: solid 1px #eee;
        font-size: 14px;
        border-bottom: none;
        color: #343434;
        .icobjh {
          margin-right: 10px;
          font-size: 24px;
          vertical-align: middle;
        }
        &:hover,
        &.active {
          background: #eee;
        }
        &:last-child {
          border-bottom: solid 1px #eee;
        }
      }
    }
  }

</style>
