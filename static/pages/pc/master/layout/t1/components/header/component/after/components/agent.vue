<template>
  <div class="loged" v-if="isAgent">
    <div class="line1">
      <div class="info">
        Hi,&nbsp;&nbsp;{{userData.loginname}}&nbsp;&nbsp;老虎机余额:&nbsp;&nbsp;{{userData.slotAccount}}&nbsp;&nbsp;其他余额:&nbsp;&nbsp;{{userData.liveAccount}}
        <!-- <span class="icobjh bjh-shuaxin" @click="getGameMoney('MAIN')"></span> -->
        <!-- <span class="icobjh bjh-shuaxin" @click="getGameMoney('MAIN')"></span> -->
      </div>
      <div class="btns">
        <el-badge :value="unread?unread:''" :max="50">
          <router-link class="m-btn" :to="{name:'user_message'}">站内信</router-link>
        </el-badge>
        <router-link class="m-btn" :to="{name:'finance_drawmoney'}">提款</router-link>
      </div>
    </div>
    <div class="line2">
      <router-link class="l-btn" :to="{name:'agent_summary'}">
        <span class="icobjh bjh-z-user"></span>代理中心
      </router-link>
      <span class="l-btn" @click="$store.dispatch('LOGIN_OUT')">
        <span class="icobjh bjh-dianyuan"></span>退出
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { getGameMoney, doSignRecord } from "@/api/user";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userData", "isAgent", "unread"])
  },
  methods: {
    ...mapActions(["LOGIN_OUT"]),
    doSignRecord() {
      doSignRecord().then(res => {
        toast(res.message);
      });
    },
    getGameMoney(val) {
      this.userData.accountMoney = "正在查询..";
      getGameMoney({ gameCode: val }).then(res => {
        if (res.success) {
          this.userData.accountMoney = res.data;
        } else {
          toast(res.message);
          this.userData.accountMoney = "查询失败";
        }
      });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.loged {
  color: #fff;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: right;
  overflow: hidden;
  .line1 {
    display: inline-block;
    .info {
      display: inline-block;
      .icobjh {
        display: inline-block;
        margin-left: 10px;
        font-size: 22px;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          transform: rotate(180deg);
        }
      }
    }
    .btns {
      display: inline-block;
      .m-btn {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        width: 62px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 12px;
        color: #fff;
        background: #f40c0c;
      }
    }
  }
  .line2 {
    display: inline-block;
    text-align: right;
    .l-btn {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      width: 110px;
      text-align: center;
      border-radius: 5px;
      margin-left: 12px;
      font-size: 14px;
      cursor: pointer;
      color: #000000;
      background: #ffed23; 
      .icobjh {
        margin-right: 10px;
        font-size: 18px;
        vertical-align: middle;
      }
      &.sign {
        border-radius: 20em;
      }
    }
  }
}
</style>
