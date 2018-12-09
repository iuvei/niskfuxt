<template>
  <div>
    <!-- 系统发送验证码给手机 -->
    <el-form ref="infoForm" label-width="100px" class="info-form" v-show="model=='0'">
      <el-form-item label="验证码">
        <el-input v-model="code" placeholder="点击获取手机短信验证码">
          <el-button slot="append" icon="el-icon-loading" v-if="forbidtime">{{forbidtime}}秒</el-button>
          <el-button slot="append" icon="el-icon-message" @click="getCode" v-else>获取验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="verify">立即验证</el-button>
      </el-form-item>
    </el-form>
    <!-- 手机发送指定验证码给系统 -->
    <div v-show="model=='1'">
      <el-alert :title="`发送短信${reverse.code}到${reverse.showGet}`" :description="`请使用${phone}手机号码，发送短信“${reverse.code}到${reverse.showGet}”。发生成功15秒后，点击“立即验证”按钮`"
        type="success" show-icon>
      </el-alert>
      <div style="padding:20px 100px;">
        <el-button type="primary" @click="verifyTo">立即验证</el-button>
      </div>
    </div>

  </div>
</template>
<script>
import { sendSms4TYJ, checkPhoneCode } from "@/api/user";

export default {
  data() {
    return {
      forbidtime: 0,
      interval: null,
      code: "",
      reverse: {
        code: "0000",
        showGet: "xxx-xxx-xxx"
      },
      showVerify: false,
      isSendMsg: false,
      myData: {
        sid: "", //true string
        check_address: "", //true string
        check_key: "" //true string
      }
    };
  },
  props: ["data", "phone"],
  methods: {
    verify() {
      if (!this.isSendMsg) return window.toast("请先获取验证码");
      if (this.code == "") return window.toast("请填写验证码");
      checkPhoneCode({
        code: this.code
      })
        .then(res => {
          window.toast(res.message);
          if (res.success) {
            this.$store.commit("SET_USERDATA", {
              phoneValidStatus: 1
            });
            this.$emit("input", false);
          }
        })
        .catch(err => {
          window.toast("验证失败");
        });
    },
    verifyTo() {
      checkPhoneCode()
        .then(res => {
          window.toast(res.message);
        })
        .catch(err => {
          window.toast("验证失败");
        });
    },
    getCode(obj) {
      sendSms4TYJ(this.myData)
        .then(res => {
          window.toast(res.message);
          this.isSendMsg = res.success;
          this.forbidtime = 120;

          let self = this;
          this.interval = setInterval(function() {
            self.forbidtime--;
            if (self.forbidtime == 0) {
              clearInterval(self.interval);
            }
          }, 1000);
        })
        .catch(err => {
          window.toast("发送失败");
        });
    }
  },
  computed: {
    model() {
      switch (this.data.type) {
        case "sms":
          return "0";
        case "reverse-sms":
          this.reverse.showGet = this.data.phone;
          this.reverse.code = this.data.code;
          return "1";
        default:
          return "0";
      }
    }
  },
  created() {},
  beforeDestroy() {
    window.clearInterval(this.interval);
  }
};
</script>
<style>
</style>
