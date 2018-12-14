<template>
  <header class="index-top">
    <img class="iconclass left-icon" src="./images/left-icon.png" alt="" @click="value=true">
    <a href="/" class="link_logo">
      <img src="/static/images/base/logo.png">
    </a>
    <a class="item-href" target="_blank" :href="SETTING.live800">
      <img class="iconclass right-icon" src="./images/right-icon.png" alt="">
    </a>
    <tool-bar v-model="value"></tool-bar>
  </header>
</template>
<script>
import toolBar from "../tool-bar";
import toolBarright from "../tool-bar-right";
import callBack from "mobile/views/common/back-Call";
import { SETTING } from "@/assets/data";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      SETTING,
      value: false,
      showHead: true,
      sheetData: [
        {
          name: "在线客服",
          target: "_blank",
          href: SETTING.live800
        },
        { name: "电话回拨", to: { path: "/common/backCall" } },
        { name: SETTING.telAgent, href: "tel:" + SETTING.telAgent }
      ],
      showSheet: false,
      valueRight: false
    };
  },
  created() {
    // 监听header控制事件
    this.$bus.$on("setHeader", eventData => {
      this.showHead = eventData;
    });
  },
  components: {
    toolBar,
    toolBarright
  },
  computed: {
    ...mapGetters(["isAgent", "islogin"])
  }
};
</script>
<style lang="scss" scoped>
@import "~mobile/assets/scss/mixin.scss";
header.index-top {
  height: r(100);
  width: 100%;
  line-height: r(100);
  background: #001243; /* Old browsers */
  background: -moz-linear-gradient(top, #001243 0%, #00285e 30%, #004e8c 60%, #0066a9 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #001243 0%,#00285e 30%,#004e8c 60%,#0066a9 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #001243 0%,#00285e 30%,#004e8c 60%,#0066a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001243', endColorstr='#0066a9',GradientType=0 ); /* IE6-9 */;
  position: fixed;
  top: 0;
  border: none;
  text-align: center;
  z-index: 999;
  .iconclass {
    @include f(48px);
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    vertical-align: middle;
  }
  .left-icon {
    left: r(16);
    height: r(40);
  }
  .right-icon {
    right: r(16);
    height: r(55);
  }
  .link_logo {
    display: inline-block;
    height: 80%;
    img {
      height: 90%;
    }
  }
}
</style>
