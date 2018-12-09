<template>
  <div class="menu-box">
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab1'}">
      <span class="icobjh bjh-renqun"></span>关于我们</router-link>
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab2'}">
      <span class="icobjh bjh-yewubaobiao"></span>专业团队</router-link>
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab3'}">
      <span class="icobjh bjh-chouma"></span>利益保障</router-link>
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab4'}">
      <span class="icobjh bjh-icon-test"></span>公司宗旨</router-link>
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab5'}">
      <span class="icobjh bjh-service"></span>客户至上</router-link>
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab6'}">
      <span class="icobjh bjh-collect-active"></span>公司责任</router-link>
    <router-link class="m-item" :to="{path:'/aboutus/aboutustab7'}">
      <span class="icobjh bjh-collect-active"></span>理性博彩</router-link>
  </div>
</template>
<script>
  import {
    SETTING
  } from "@/assets/data"
  export default {
    data() {
      return {
        SETTING,
      };
    }
  }

</script>
<style lang="scss" scoped>
  .menu-box {
    width: 260px;
    text-align: center;
    background: #373738;
    border-radius: 10px;
    padding: 30px 0;
    margin-bottom: 10px;
    .m-item {
      display: block;
      width: 100%;
      font-size: 16px;
      color: #ffdc98;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      position: relative;
      margin: 4px 0;
      transition: all 0.4s;
      &:hover,
      &.active {
        background: rgb(255, 236, 183);
        background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
        background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
        background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
        color: #373738;
        &:before {
          border-color: transparent transparent transparent #ffdc98;
        }
      }
      &:before {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 0 8px 10px;
        border-color: transparent transparent transparent transparent;
        transition: all 0.4s;
      }
      .icobjh {
        font-size: 26px;
        vertical-align: middle;
        margin-right: 20px;
      }

    }
    .title {
      font-size: 18px;
      padding: 6px 30px;
      display: inline-block;

    }
  }

</style>
