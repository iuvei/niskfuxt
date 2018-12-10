<template>
  <header class="header">
    <div class="content-warp top cfx">
      <div class="left">
        <a href="javascript:void(0);" @click="AddFavorite()">收藏本站<i></i></a>
        <router-link :to="{name:'cooperationIndex'}">代理合作<i></i></router-link>
        <a href="https://www.ow8001.com/" target="_blank">备用网址</a>
        <!-- <a :href="SETTING.live800" target="_blank" >在线客服</a> -->
        <!-- <a href="javascript:;">24小时客服热线：{{SETTING.Tel}}</a> -->
      </div>
      <div class="right">
        <before v-if="!islogin" ></before>
        <after v-if="islogin"></after>
      </div>
  </div>
  </header>
</template>
<script>
import before from "./component/before";
import after from "./component/after";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { SETTING } from "@/assets/data";
import openWindow from "@/util/openWindow";
import { getNewAnnouncement } from "@/api/show";
import { getGameMoney } from "@/api/user";

export default {
  data() {
    return {
      SETTING,
      showPass: false
    };
  },
  computed: {
    ...mapGetters(["userData", "islogin", "isAgent", "isUser", "showLogin"])
  },
  methods: {
    ...mapActions(["UPDATE_USERDATA"]),
     AddFavorite() {
       let title = '澳盈娱乐'
       let url = location.href
        try {
          console.log('1');
          window.external.addFavorite(url, title);
        }
        catch (e) {
            try {
                console.log('2');
                window.sidebar.addPanel(title, url, "");
            }
            catch (e) {
          console.log('3');
                window.toast("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    },
    toCs() {
      openWindow(SETTING.live800, "在线客服", 700, 640);
    },
    setIndex(e) {
      let obj = e.target,
        url = window.location.origin;
      try {
        obj.style.behavior = "url(#default#homepage)";
        obj.setHomePage(url);
      } catch (e) {
        if (window.netscape) {
          try {
            netscape.security.PrivilegeManager.enablePrivilege(
              "UniversalXPConnect"
            );
          } catch (e) {
            window.toast(
              "抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'"
            );
          }
        } else {
          window.toast(
            "抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" +
              url +
              "】设置为首页。"
          );
        }
      }
    }
  },
  created() {
    // 更新一次用户信息
    this.UPDATE_USERDATA()
      .then(res => {})
      .catch(err => {});
  },
  components: { before, after }
};
</script>
<style lang="scss" scoped>
.z999 {
  z-index: 999;
}
.header {
  height: 40px;
  line-height:40px;
  background: rgba($color: #000000, $alpha: 0.9);
  border-bottom: 1px solid #000;
  overflow: hidden;
    position: sticky;
    top: 0;
    z-index: 999;
  .top {
    font-size: 14px;
    overflow: hidden;
    width: 1200px;
    height: 44px;
    margin: 0 auto;
    color: #fff;
    line-height: 44px;
    .left{
      float: left;
      a{
        padding: 0 10px 0 0;
        color: #72716d;
        text-align: center;
        i{
          display: inline-block;
          height: 10px;
          width: 1px;
          border-left: 1px solid #72716d;
          margin-left: 15px;
        }
      }
    }
    .right {
      float: right;
    }
  }
}
</style>
