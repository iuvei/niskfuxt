<template>
  <Row class="userInfo t1">
    <Col span="3">
      <div class="user-avator">
        <img class="u-avator" v-lazy="userData.avator">
        <p class="u-name">{{userData.loginname}}</p>
        <p class="u-level">合作代理</p>
        <p></p>
      </div>
    </Col>
    <Col span="18">
      <Row>
        <Col span="5" style="margin-top:10px;">
          <div class="u-money">
            <p>
              <i class="icons icobjh bjh-Management"></i>老虎机佣金：
              <span class="u-yellow">{{wallet['SLOT']}}元</span>
            </p>
            <p>
              其他佣金：
              <span class="u-yellow">{{wallet['LIVE']}}元</span>
            </p>
          </div>
        </Col>
        <Col span="19" style="margin-top:10px;">
          <!-- <leverMeter></leverMeter> -->
        </Col>
        <Col span="24">
          <moneyList></moneyList>
        </Col>
      </Row>
    </Col>
    <Col span="3">
      <div class="user-cs">
        <p>专属客服二维码</p>
        <p>工作时间：</p>
        <p>周一至周五 09:00-18:00</p>
        <vue-qr text="$CONTACT.live800" :size="100" class="qr-code"></vue-qr>
      </div>
    </Col>
  </Row>
</template>
<script>
import { loginControl } from "@@/mixins/auth/loginControl"; // 引入公共业务逻辑
import { mapGetters, mapActions, mapMutations } from "vuex";
import leverMeter from "@/components/admin/user/leverMeter/t1";
import moneyList from "@/components/admin/agent/summary/t1";

export default {
  mixins: [loginControl], // 混合
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userData", "wallet"])
  },
  methods: {
    generateQRCode() {},
    login() {
      this.loginSubmit(this.loginData)
        .then(res => {
          this.$Message.success({
            content: res.message,
            closable: true
          });
        })
        .catch(err => {
          this.$Message.error({
            content: err.message,
            closable: true
          });
        });
    }
  },
  components: { leverMeter, moneyList }
};
</script>
<style lang="scss">
.userInfo.t1 {
  background: rgba(0, 0, 0, 0.6);
  color: #dcdcdc;
  border: solid 1px #aaa;
  display: flex;
  > div {
    border-left: solid 1px #aaa;
    &:first-child {
      border-left: none;
    }
  }
  .user-avator {
    padding-top: 4px;
    width: 140px;
    text-align: center;
    height: 100%;
    .u-avator {
      width: 90px;
      height: 90px;
      display: inline-block;
      border: solid 1px #2b2b2b;
      padding: 10px;
      border-radius: 20em;
      margin-bottom: 10px;
    }

    p {
      line-height: 2;
    }
  }

  .u-money {
    width: 200px;
    padding-left: 10px;

    p {
      font-size: 16px;
    }

    .icons {
      font-size: 18px;
      margin: 0 4px;
      color: #fca00d;
    }

    .u-yellow {
      color: #fca00d;
    }
  }

  .user-cs {
    width: 150px;
    text-align: center;
    color: #cf3302;
    padding: 10px 4px;
    height: 100%;
    p {
      font-size: 12px;
      line-height: 1.5;
    }

    .u-code {
      margin-top: 5px;
      background: #fff;
      padding: 8px;
      width: 90px;
    }
    .qr-code {
      img {
        display: inline-block;
        // max-width:80%;
      }
    }
  }
}
</style>
