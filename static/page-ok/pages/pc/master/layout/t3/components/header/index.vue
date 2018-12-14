<template>
  <header class="header">
    <div class="top-navbar">
      <div class="container">
        <div class="leftItem">
          <!-- <span class="line">线路检测|</span> -->
          <!-- <span class="setIndex" @click="setIndex">设为首页|</span> -->
          <router-link class="mobile" :to="{name:'downloadIndex'}">手机投注</router-link> |
          <a class="online" :href="SETTING.live800" target="_blank">在线客服</a> |
          <router-link class="line" :to="{name:'agentarea'}">代理加盟</router-link> |
          <span class="persons">在线人数：{{personNum}}</span>
        </div>
        <before v-if="!islogin"></before>
        <after v-if="islogin"></after>
      </div>
    </div>
  </header>
</template>
<script>
  import before from "./component/before";
  import after from "./component/after";
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from "vuex";
  import {
    SETTING,
    Download
  } from "@/assets/data";
  import openWindow from "@/util/openWindow";
  import {
    getNewAnnouncement
  } from "@/api/show";
  import {
    getGameMoney
  } from "@/api/user";
  import {
    generateQRCode
  } from "@/api/show"
  export default {
    data() {
      return {
        SETTING,
        Download,
        showPass: false,
        showQRcode: false,
        isShowLoginModal: false,
        nowTime: '',
        personNum: null
      };
    },
    computed: {
      ...mapGetters(["userData", "islogin", "isAgent", "isUser", "showLogin"])
    },
    methods: {
      ...mapActions(["UPDATE_USERDATA"]),
      toCs() {
        openWindow(SETTING.live800, "在线客服", 700, 640);
      },
      generateQRCode(url, size) {
        return generateQRCode(url, size)
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
      },
      registerIt() {
        this.$bus.$emit('showRegister', true)
        console.log('ToshowRegister');
      },
      showQR() {
        this.showQRcode = true;
      },
      hideQR() {
        this.showQRcode = false;
      },
      showTime() {
        let _this = this
        setInterval(function () {
          let today = new Date();
          let yyyy = today.getFullYear();
          let MM = today.getMonth() + 1;
          let dd = today.getDate();
          let hh = today.getHours();
          let mm = today.getMinutes();
          let ss = today.getSeconds();
          let shiqu = -today.getTimezoneOffset() / 60;
          if (shiqu > 0) {
            shiqu = '+' + shiqu
          }
          MM = _this.checkTime(MM)
          dd = _this.checkTime(dd)
          mm = _this.checkTime(mm)
          ss = _this.checkTime(ss)
          let day;
          if (today.getDay() == 0) day = "星期日"
          if (today.getDay() == 1) day = "星期一"
          if (today.getDay() == 2) day = "星期二"
          if (today.getDay() == 3) day = "星期三"
          if (today.getDay() == 4) day = "星期四"
          if (today.getDay() == 5) day = "星期五"
          if (today.getDay() == 6) day = "星期六"
          _this.nowTime = 'GMT' + shiqu + "  " + yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  "
        }, 1000);
      },
      checkTime(val) {
        if (val < 10) {
          val = "0" + val;
        }
        return val
      }
    },
    created() {
      // 更新一次用户信息
      this.UPDATE_USERDATA()
        .then(res => {})
        .catch(err => {});
      this.showTime()
      this.generateQRCode("text")
      const $this=this
      this.timer=setInterval(()=>{
      var num1 = Math.floor(Math.random()*5)*1000
      var num2 = Math.floor(Math.random()*10)*100
      var num3 = Math.floor(Math.random()*10)*10
      var num4 = Math.floor(Math.random()*10)*1
        $this.personNum=(18000+num1+num2+num3+num4).toString();
      },3000)
    },
    components: {
      before,
      after
    }
  };

</script>
<style lang="scss" scoped>

  .top-navbar {
    background-color: #000;
    position: relative;
    height: 91px;;
    z-index: 99;

    .container {
      height: 40px;
      line-height: 25px;
      position: relative;
      display: flex;
      padding-top: 10px;

      .leftItem {
        flex: 5;
        color: #909399;
        .line {
          font-size: 14px;
          font-family: "PingFangSC";
          color: rgb(231, 48, 38);
          line-height: 1.2;
        }

        .setIndex {
          font-size: 14px;
          font-family: "PingFangSC";
          color: rgb(118, 118, 118);
          line-height: 1.2;
        }

        .mobile {
          font-size: 14px;
          font-family: "PingFangSC";
          color: rgb(255, 180, 0);
          line-height: 1.2;
        }

        .online {
          font-size: 14px;
          font-family: "PingFangSC";
          color: rgb(32, 199, 27);
          line-height: 1.2;
        }

        .persons{
          font-size: 14px;
          font-family: "PingFangSC";
          color: #33b8ce;
        }
      }
    }
  }

</style>
