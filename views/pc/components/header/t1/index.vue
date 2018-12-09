<template>
  <header class="header">
    <!-- <div class="content"> -->
    <Row type="flex" class="content" justify="space-between">
      <Col :span="6">
        <!-- 左边在线人数 -->
        <div class="links">
          <div class="showUser" v-if="!$store.getters.isLogin">
            <p class="title1">官网在线人数</p>
            <p class="title2">{{number}}</p>
          </div>
        </div>
      </Col>
      <Col :span="8">
        <!-- 中间logo -->
        <a class="logo" href="/">
          <img src="@@/assets/images/base/logo.gif">
        </a>
      </Col>
      <Col :span="10">
        <!-- 右侧登陆表单 -->
        <div class="input">
          <loginSuccess v-if="isLogin"></loginSuccess>
          <loginForm v-else></loginForm>
        </div>
      </Col>
    </Row>
    <!-- </div> -->
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import loginForm from "@/components/loginForm/t1";
import loginSuccess from "@/components/loginSuccess/t1";
import openWindow from "~~/utils/openWindow";

export default {
  data() {
    return {
      number:
        2168 +
        Math.floor(Math.random() * 10) * 100 +
        Math.floor(Math.random() * 10) * 10 +
        Math.floor(Math.random() * 10) * 1,
      timer: null
    };
  },
  methods: {
    toCs() {
      openWindow("SETTING.live800", "在线客服", 700, 640);
    },
    beginNum() {
      // 到访人数倒计时
      const $this = this;
      this.timer = setInterval(() => {
        var num2 = Math.floor(Math.random() * 10) * 100;
        var num3 = Math.floor(Math.random() * 10) * 10;
        var num4 = Math.floor(Math.random() * 10) * 1;
        $this.number = 2000 + num2 + num3 + num4;
      }, 60000);
    }
  },
  computed: {
      ...mapGetters(['isLogin']),
  },
  mounted() {
    // 到访人数倒计时
    this.beginNum();
  },
  beforeDestroy() {
    // 删除定时器
    clearInterval(this.timer);
  },
  components: { loginForm,loginSuccess }
};
</script>
<style lang="scss" scoped>
.header {
  padding: 10px 0;
  background: #1b1b1c;
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 100px;
    position: relative;
    .links {
      margin-top: 15px;
      color: #fff;
      float: left;
      .link {
        margin-right: 10px;
        cursor: pointer;
        &.red {
          animation: color 0.6s;
          animation-iteration-count: 999;
        }
      }
    }
    .logo {
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      transition: all 0.4s;
      &:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }
  }
  .showUser {
    padding-top: 20px;
    background: url(./images/icos.png) left 30px bottom no-repeat;
    padding-left: 100px;
    text-align: left;
    line-height: 1;
  }
  .title1 {
    font-size: 16px;
    letter-spacing: 1px;
  }
  .title2 {
    margin-top: 10px;
    font-size: 24px;
    color: #fad07c;
  }
}
@keyframes color {
  from {
    color: #ffd177;
    transform: scale(1);
  }
  to {
    color: #fff;
    transform: scale(1.05);
  }
}
</style>
