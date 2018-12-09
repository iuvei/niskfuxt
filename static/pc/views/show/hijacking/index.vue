<template>
  <div>
    <!-- <back-header></back-header> -->
    <header>
      <div class="content">
        <img class="fl" src="~@/assets/images/logo.gif">
        <span class="fr">返回首页></span>
      </div>
    </header>
    <div class="content">
      <div class="menu fl">
        <h2>电脑端</h2>
        <p>Win8/Win7/Vista&nbsp;&nbsp;></p>
        <p>Linux系统&nbsp;&nbsp;></p>
        <p>苹果系统&nbsp;&nbsp;></p>
        <h2>电脑端</h2>
        <p>安卓手机&nbsp;&nbsp;></p>
        <p>苹果手机&nbsp;&nbsp;></p>
      </div>
      <div class="shows fr">
        <div class="title"></div>
        <div class="box">       </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      cur: "苹果手机",
      data: ["苹果手机", "安卓手机"]
    };
  },
  components: {
    // 'back-header': require("components/header-back"),
  }
};
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";

.hijacking {
  width: 100%;
  height: 100%;
  background: url(./images/bg.png) no-repeat center top;
  background-size: 100% 100%;
  padding: r(25) r(20);
  display: flex;
  .hijacking-bg {
    background: url(./images/bg2.png) no-repeat center;
    background-size: 100% 100%;
    padding: r(40);
    .hijacking-title {
      @include f(30px);
      color: #fafc45;
      text-align: left;
      height: r(40);
      margin: r(60) r(0) r(0) r(0);
      .icot {
        display: inline-block;
        width: r(20);
        height: r(20);
        background: url(./images/dian.png) no-repeat;
        background-size: 100%;
      }
    }
    .grunt {
      line-height: r(40);
      color: #68f968;
      @include f(27px);
      text-align: left;
    }
    .white {
      color: #fff;
      line-height: r(40);
      @include f(28px);
      text-align: left;
      text-indent: r(50);
    }
    .hijacking-tabs {
      width: 100%;
      height: r(180);
      display: flex;
      font-size: r(40);
      span {
        color: #fff;
        display: block;
        background: url(./images/bot.png) no-repeat;
        background-size: 100% 100%;
        margin: r(50) r(20) r(50) r(20);
        width: 47%;
        padding-top: r(20);
        text-align: center;
        &.active {
          background: url(./images/hove.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .content-info img {
      width: 100%;
    }
  }
}
</style>
