<template>
  <div class="page">
	<div class="content container register-content">
		<div class="register-title-wrapper container">
			<div class="register-title">澳盈极速开户</div>
			<div class="title-info">如开户遇到问题，请联系<a  target="_blank" :href="SETTING.live800" class="open-online-chat">在线客服</a></div>
		</div><!-- end div.register-title-wrapper -->
		<div class="fast-register-wrapper container">
			<div class="fast-register-panel container fast-register-panel4">
				<div id="ordinary-account" class="account-type">
						<input name="operate" value="1" type="hidden">
						<input name="prefix" value="c" type="hidden">
						<div class="form-wrapper">
							<div class="form-label">登录账号</div>
							<div class="form-input-wrapper">
								<input class="account" name="loginname" v-model="registerForm.account" placeholder="用户名(6-10位数字或字母)" maxlength="11" type="text">
							</div><!-- end div.form-input-wrapper -->
							<div class="form-label">登录密码</div>
							<div class="form-input-wrapper" id="passwordfield-wrapper">
								<span id="passwordfield-input-wrapper"><input name="passwordfield" class="register-password" v-model="registerForm.password" placeholder="密   码(6-16位数字和字母）" type="password"></span>
							</div>
							<div class="form-label">手机号码</div>
							<div class="form-input-wrapper container">
                <input type="text" class="register-password" v-model="registerForm.phone" placeholder="取款唯一凭证，请正确填写手机号" maxlength="11">
							</div>

							<div class="form-label">验证码</div>
							<div class="form-input-wrapper container">
                <input type="text" class="captcha-input" v-model="registerForm.imageCode" placeholder="验证码" maxlength="4">
                <img :src="validateImage" @click="GET_VALIDATE" class="capthca_img" height="37px">
							</div>
							<div class="input-group clearfix">
                <div class="sign-up-input">
                    <div>
                    <input id="agreement" type="checkbox" v-model="agree">
                    我已阅读并同意接受所有 <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">《规则》与《条款》</router-link>
                    <!-- <a href="/aboutus/home/tab6" target="_blank"></a> -->
                    </div>
                    <p class="tip-text"></p>
                </div>
              </div>
              <input type="submit" class="submit_register" @click.prevent="registerClick" id="submit_user" value="立即开户">
						</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import {
    register
  } from '@/api/authService';
  import eyes from "pc/components/eyes"
  import check from "@/util/RegExp"
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'

  import {
    registerControl
  } from "@/controls/auth/registerControl" // 引入公共业务逻辑

import {    SETTING  } from '@/assets/data'

  export default {
    mixins: [registerControl],
    data() {
      return {
        SETTING,
        agree:true,
        showRegister: false,
      }
    },
    created() {
      this.$bus.$on('showRegister', eventData => {
        console.log('showRegisterGet');
        this.showRegister = eventData
      })
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      registerClick() {
        if(!this.agree){
          window.toast('请同意规则条款')
          return 
        }

        this.register(this.registerForm).then(res => {
          // this.showRegister = false
          // window.toast(res.message)
          this.$router.push({name:'registerSuccessIndex'})
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    components: {
      eyes
    }
  }

</script>
<style lang="scss" scoped>
  /*====== fast register start ======*/
.input-group{
    zoom: 1;
    *{
        float: left;
    }
    &::before{
        content: '';
        display: table;
    }
    &::after{
        clear: both;
        content: '';
        display: table;
        height: 0;
        visibility: hidden;
        overflow: hidden;
    }
    label{
        width: 90px;
        text-align: right;
        margin-right: 10px;
    }
    .sign-up-input{
        #agreement{
            width: 20px;
            height: 20px;
            background: #c5a665;
        }
        input{
            font-size: 16px;
            width: 500px;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
            text-indent: 1em;
        }
        .tip-text{
            font-size: 14px;
            height: 32px;
            line-height: 32px;
        }
    }
}
.page {
  background: #1E1E1E;
  color: #999999;
  font-size: 16px;
  .register-content{
    padding: 30px 0 60px;
  }
}

.register-title-wrapper {
  background: #141414;
  // margin-top: 40px;
  padding: 25px 60px 55px;
}

.register-title {
  color: #cca353;
  font-size: 22px;
  float: left;
}

.title-info {
  float: right;
}

.page a {
  color: #cca352;
  &.gold-button {
    color: #ffffff;
  }
}

.fast-register-wrapper {
  background: #181818;
  // margin-bottom: 60px;
  padding-top: 55px;
  padding-bottom: 95px;
}


.fast-register-panel {
    position: relative;
    width: 910px;
    height: 575px;
    margin-left: 150px;
}

.fast-register-panel4 {
  background: url('./images/fast_register_panel4.png') no-repeat;
}

.register-info {
  text-align: center;
  font-size: 13px;
  margin: 35px auto;
}

.form-wrapper {
//   margin-top: 40px;
  margin-left: 70px;
  padding: 20px 0;
}

.form-label {
  font-size: 16px;
  color: #696969;
  margin-bottom: 6px;
}

.form-input-wrapper {
  position: relative;
  margin-bottom: 15px;
}

.form-wrapper input {
  &[type=text], &[type=password] {
    border: 1px solid #DBDBDB;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  &:focus {
    outline: none;
    border: 1px solid #b79675;
  }
}

.account {
  padding-left: 12px;
  width: 261px;
}

.account-c {
  position: absolute;
  left: 12px;
  top: 11px;
}

.register-password {
  padding-left: 12px;
  padding-right: 12px;
  width: 270px;
}

.eye_position {
  position: absolute;
  left: 262px;
  top: 14px;
}

.captcha-input {
  padding-left: 12px;
  width: 186px;
  float: left;
}

.register-captcha {
  display: block;
  float: left;
  width: 103px;
  height: 41px;
  cursor: pointer;
}

.submit_register {
  background: url('./images/submit_register1.png') no-repeat;
  width: 302px;
  height: 46px;
  outline: 0;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 32px;
  &:hover {
    background: url('./images/submit_register2.png');
  }
}

.form-wrapper .submit_register:focus {
  border: none;
}


.check2 {
  position: absolute;
  top: 15px;
  left: 306px;
}

.check3 {
  position: absolute;
  top: 0;
  left: 296px;
}

.close_eyes.eye_position, .close_eyes2.eye_position {
  top: 17px;
}

.form-input-wrapper input.input-error {
  background: #FFE5E6;
  border: 1px solid #EB4B4B;
}

.incorrect {
  float: left;
  margin-left: 2px;
  margin-right: 4px;
}

.error-message {
  color: #eb4b4b;
  font-size: 11px;
  line-height: 15px;
  margin-top: 5px;
}

.fast-register-panel .btn {
  width: 78px;
  height: 24px;
  position: absolute;
  display: block;
  bottom: 190px;
  right: 60px;
}

/*====== fast register end ======*/

/*====== register success start ======*/

.register-success-wrapper {
  background: #181818;
  padding: 30px 0;
  margin-bottom: 40px;
}

.register-success-panel {
  width: 848px;
  margin: 0 auto;
  text-align: center;
}

.congrats-wrapper {
  overflow: hidden;
  display: inline-block;
}

.new-big-check {
  float: left;
  margin: 7px 10px 0 0;
}


.congrats {
  font-size: 26px;
  float: left;
  line-height: 53px;
}

.congrats-tips {
  font-size: 14px;
  padding-bottom: 35px;
  border-bottom: 1px solid #292929;
  a {
    color: #fff;
    text-decoration: underline;
  }
}

.info {
  border-bottom: 1px solid #292929;
  padding: 27px 0;
}

.member-balance {
  display: inline-block;
}

.gold-button {
  margin-left: 84px;
  display: inline-block;
  position: relative;
  top: -5px;
}

.info-gold {
  color: #cca353;
  font-size: 24px;
}

.payment-wrapper {
  padding: 15px 0;
  border-bottom: 1px solid #292929;
  .cell {
    display: block;
    float: left;
    margin-left: 8px;
    width: 160px;
    height: 146px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    padding-top: 18px;
    &:hover {
      background: #1f1f1f;
    }
  }
}

.payment-gold {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 8px;
}

.payment-gray {
  font-size: 13px;
  color: #828282;
  line-height: 20px;
}

.new-online-payment {
  margin: 0 auto;
}

.new-barcode-payment {
  margin: 5.5px auto;
  display: inline-block;
}

.new-point-payment {
  margin: 10px auto;
  display: inline-block;
}

.new-complete-profile {
  margin: 5.5px auto;
  display: inline-block;
}

.content-link-wrapper {
  width: 566px;
  margin: 0 auto;
  margin-top: 12px;
}

a.content-link {
  color: #828282;
  font-size: 15px;
  margin-left: 60px;
  text-decoration: underline;
  &:hover {
    color: #cccccc;
  }
}

.content-link:first-child {
  margin-left: 0;
}

.row-1 {
  margin-top: 40px;
}

.row-1-title {
  color: #cca353;
  font-size: 22px;
}

.row-1-text {
  color: #cccccc;
  margin-top: 8px;
  font-size: 16px;
}

.row-2 {
  overflow: hidden;
  padding-top: 30px;
  border-bottom: 1px solid #292929;
  padding-bottom: 28px;
}

.cell-2 {
  float: left;
  margin-left: 77px;
  &:first-child {
    margin-left: 36px;
  }
}

.cell-2-text {
  color: #929292;
  font-size: 13px;
  margin-top: 30px;
}

#registerok-cs {
  text-decoration: underline;
}

.register-title-wrapper p.pull-right {
  float: right;
  font-size: 13px;
  color: #999;
  margin: 0;
  line-height: 28px;
  a {
    color: #cca353;
    text-decoration: underline;
  }
}

.info .info-text {
  width: 250px;
  margin: 0 auto;
}

.info-text {
  .info-group {
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #ccc;
    text-align: left;
    span {
      color: #fff;
    }
  }
  .info-link {
    float: right;
    font-size: 14px;
    color: #cca353;
    text-decoration: underline;
  }
}

.info .info-text2 {
  width: 295px;
  line-height: 25px;
  .info-group {
    margin-bottom: 5px;
    height: auto;
  }
}

.info-text {
  .form-group {
    .check3 {
      left: 220px;
      margin-top: 5px;
    }
    .error-message span {
      color: #eb4b4b;
      font-size: 12px;
    }
    display: inline-block;
    width: 220px;
    min-height: 25px;
    position: relative;
    vertical-align: middle;
    #prefix {
      padding: 0;
      background: #fff;
      width: 22px;
      border: 0;
      line-height: 25px;
      height: 25px;
      font-size: 14px;
      color: #313030;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
    }
    .form-input {
      outline: 0;
      width: 176px;
      height: 25px;
      padding: 0 22px;
      border: 0;
      background: #fff;
      line-height: 25px;
      font-size: 13px;
      color: #828282;
    }
  }
  .info-btn {
    background: url("./images/btn2.png") no-repeat;
    width: 100px;
    height: 27px;
    font-size: 13px;
    color: #fff;
    text-align: center;
    line-height: 27px;
    margin: 18px 0 0 98px;
    display: block;
    &:hover {
      background: url("./images/btn2h.png") no-repeat;
    }
  }
  .form-group {
    .value {
      color: #c5c5c5;
      background: transparent;
      line-height: 25px;
      padding: 0;
      width: 220px;
      text-align: left;
      height: 25px;
      font-size: 14px;
    }
    .check3 {
      left: 220px;
      margin-top: 5px;
    }
    .error-message span {
      color: #eb4b4b;
      font-size: 12px;
    }
  }
}

.info-text2 {
  .form-group {
    float: left;
  }
  .info-group label {
    float: left;
    height: 25px;
    line-height: 25px;
  }
}

/*====== register success end ======*/

/*REGISTER SUCCESS*/

.register_success {
  padding: 36px 0 60px;
  background: #1e1e1e;
  ul, li, dl, dt, dd, ol, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h4 {
    font-size: 16px;
    color: #989898;
    font-weight: normal;
    margin-bottom: 15px;
  }
  .box {
    background: #181818;
    margin-bottom: 35px;
    .t {
      height: 44px;
      line-height: 44px;
      padding: 0 20px;
      background: #141414;
      font-size: 14px;
      color: #989898;
    }
    .c {
      padding: 0 20px;
      height: 76px;
      line-height: 76px;
      p {
        display: inline-block;
        line-height: 76px;
        font-size: 14px;
        color: #ccc;
        margin-right: 25px;
        span {
          color: #cca353;
        }
        &.pull-right {
          float: right;
          margin: 0;
        }
        a {
          color: #cca353;
          text-decoration: underline;
          margin-left: 20px;
        }
      }
    }
  }
  .games .group {
    margin-bottom: 20px;
  }
  .group {
    .t {
      height: 35px;
      border-bottom: 1px solid #323232;
      font-size: 16px;
      color: #fff;
      margin-bottom: 20px;
      span {
        display: block;
        float: left;
        border-bottom: 2px solid #cc2944;
        height: 34px;
      }
    }
    .c {
      margin-left: -12px;
    }
    .game {
      position: relative;
      height: 230px;
      margin-left: 12px;
      width: 272px;
      float: left;
    }
    .game1 {
      width: 348px;
    }
    .game .game-t {
      font-size: 18px;
      color: #ccc;
      position: absolute;
      top: 22px;
      left: 20px;
      z-index: 100;
    }
    .gameh {
      display: none;
      background: url("./images/trans1.png") repeat;
      width: 270px;
      height: 228px;
      border: 1px solid #996b3d;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
    .game1 .gameh {
      width: 346px;
    }
    .gameh {
      .gh-t {
        font-size: 18px;
        color: #fff;
        text-align: center;
        padding-top: 70px;
        display: block;
      }
      .line {
        width: 27px;
        height: 2px;
        background: #d7a647;
        display: block;
        margin: 6px auto 20px;
      }
      .btn {
        width: 120px;
        height: 37px;
        background: url("./images/trial-button.png");
        display: block;
        text-decoration: none;
        line-height: 35px;
        color: #fff;
        margin: 0 auto;
        text-align: center;
      }
    }
    .game:hover {
      .gameh {
        display: block;
      }
      .game-t {
        display: none;
      }
    }
    .game2 {
      width: 291px;
      height: 180px;
      .gameh {
        width: 289px;
        height: 178px;
        .gh-t {
          padding-top: 50px;
        }
      }
    }
  }
  .games .group2 {
    margin-bottom: 0;
  }
  .game-more a {
    float: right;
    font-size: 14px;
    color: #989898;
    &:hover {
      color: #cccccc;
    }
  }
}

.fast-register-panel {
  .register-tab {
    height: 25px;
    border-bottom: 1px solid #dbdbdb;
    width: 198px;
    margin: 40px 0 0 117px;
  }
  .register-tab2 {
    margin-left: 125px;
  }
  .register-tab a {
    font-size: 16px;
    color: #b0b0b0;
    float: left;
    display: block;
    border-bottom: 3px solid transparent;
    height: 23px;
    &.pull-right {
      float: right;
    }
    &:hover, &.active {
      border-bottom: 3px solid #cc2944;
      color: #696969;
    }
  }
}

.register-captcha {
  position: absolute;
  top: 0;
  left: 196px;
  background: url("./images/captcha.png") no-repeat;
}

.form-select {
  height: 20px;
  margin-bottom: 15px;
  .select-col {
    width: 126px;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #686868;
    display: block;
    float: left;
    position: relative;
    &.pull-right {
      margin-left: 48px;
    }
  }
}

.select-col input[type=radio]:not(old) {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  cursor: pointer;
  width: 19px;
  height: 19px;
  margin: 0;
  padding: 0;
  opacity: 0;
  filter: alpha(opacity = 0);
  + label {
    padding-left: 24px;
    i {
      background: url("./images/radio-checkboxes.jpg") no-repeat 0 0;
      width: 19px;
      height: 19px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &:checked + label i {
    background: url("./images/radio-checkboxes.jpg") no-repeat -19px 0;
  }
}

.custom-account {
  display: block;
  .form-group1 {
    display: none;
  }
  .submit_register {
    margin: 5px 0 0;
  }
}

#mobile-account {
  .form-wrapper {
    margin-top: 20px;
  }
  #account2 .submit_register {
    margin-top: 10px;
  }
}

.account-type {
  display: none;
}

#ordinary-account {
  display: block;
  padding-top: 66px;
}

/*#ordinary-account .submit_register {margin-top: 55px;}*/

#mobile-account .form-wrapper {
  margin-left: 70px;
}

.form-wrapper .form-group {
  min-height: 38px;
  margin-bottom: 15px;
}

.form-group {
  .form-label {
    float: left;
    line-height: 38px;
    margin: 0 15px 0 0;
    width: 70px;
    text-align: right;
  }
  .form-input-wrapper {
    float: left;
    width: 296px;
    margin-bottom: 0;
  }
}

.form-select {
  margin-left: 0;
  width: 310px;
}

.form-group {
  .captcha-phone {
    float: left;
    width: 101px;
    height: 36px;
    cursor: pointer;
    border: 1px solid #dbdbdb;
    text-align: center;
    line-height: 36px;
    color: #999;
    font-size: 14px;
  }
  a.captcha-phone:hover {
    color: #c08103;
    text-decoration: underline;
  }
  .form-inpt1 {
    float: left;
    width: 160px;
    margin-right: 6px;
  }
}

.fast-payment {
  background: url("./images/icon-card.png") no-repeat center center;
  width: 50px;
  height: 53px;
  display: block;
  margin: 0 auto;
}

.info {
  .group {
    margin-bottom: 15px;
    padding-left: 292px;
  }
  p {
    font-size: 14px;
    color: #ccc;
    text-align: left;
    margin: 0;
    float: left;
    &.member-info {
      width: 195px;
    }
    &.txt-gray {
      color: #808080;
    }
  }
  .group a {
    font-size: 14px;
    color: #cca353;
    text-decoration: underline;
    float: left;
  }
  .member-balance {
    margin-top: 30px;
  }
}

.title-info a.open-online-chat:hover {
  color: #c08103;
  text-decoration: underline;
}

.form-input-wrapper {
  .form-inpt1 {
    float: left;
    width: 160px;
    margin-right: 6px;
  }
  .captcha-phone {
    float: left;
    width: 101px;
    height: 36px;
    cursor: pointer;
    border: 1px solid #dbdbdb;
    text-align: center;
    line-height: 36px;
    color: #999;
    font-size: 14px;
  }
  a.captcha-phone:hover {
    color: #c08103;
    text-decoration: underline;
  }
}

.custom-account .submit_register2 {
  margin-top: 40px;
}

/*modifyaccount*/

.modifyaccount {
  background: #1e1e1e;
  padding: 40px 0;
  .t {
    height: 90px;
    background: #101010;
    padding: 0 60px;
    line-height: 90px;
    font-size: 24px;
    color: #cca353;
    span {
      color: #999;
      font-size: 16px;
      float: right;
    }
    a {
      color: #cca353;
      text-decoration: underline;
    }
  }
  .c {
    background: #181818;
    padding: 120px 0;
    min-height: 350px;
  }
  .form-holder {
    padding-left: 336px;
  }
  .form-group {
    min-height: 41px;
    margin-bottom: 16px;
    line-height: 41px;
  }
  label {
    width: 94px;
    float: left;
    font-size: 13px;
    color: #fff;
    line-height: 41px;
    margin-right: 10px;
    text-align: right;
  }
  .input-group {
    float: left;
    position: relative;
  }
  .readonly {
    width: 30px;
    height: 39px;
    border: 0;
    background: #323232;
    outline: 0;
    text-align: center;
    line-height: 41px;
    color: #666;
    font-size: 13px;
    float: left;
    margin-right: 5px;
  }
  .form-input {
    width: 220px;
    height: 39px;
    border: 1px solid #6e6e6e;
    padding: 0 18px;
    outline: 0;
    background: transparent;
    font-size: 13px;
    color: #666;
  }
  .form-input1 {
    width: 205px;
    padding: 0 8px;
    float: left;
  }
  .form-buttons {
    margin: 20px 0 0 104px;
    .submit {
      background: url("./images/btn10.png") no-repeat;
      width: 258px;
      height: 41px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      line-height: 41px;
      display: block;
      &:hover {
        background: url("./images/btn10h.png") no-repeat;
      }
      &.disabled {
        color: #909090;
        background: #555;
        border-radius: 5px;
      }
    }
  }
}

::-webkit-input-placeholder {
  color: #999;
  opacity: 0.8;
}

.modifyaccount .check3 {
  position: relative;
  left: auto;
}

.popmodifysuccess_backdrop {
  position: fixed;
  z-index: 88888;
  background: #000000;
  opacity: 0.6;
  filter: alpha(opacity = 60);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.pop-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 200px;
  left: 0;
  z-index: 88888;
}

.popmodifysuccess {
  width: 422px;
  height: 290px;
  background: #fff;
  border: 6px solid #333;
  margin: 0 auto;
  position: relative;
  .pop-head {
    height: 63px;
    background: url("./images/lightbox-title-bg.jpg") no-repeat center #1e1e1e;
    color: #cca352;
    line-height: 63px;
    position: relative;
    text-align: center;
    font-size: 18px;
  }
  .pop-close {
    position: absolute;
    right: 10px;
    top: 3px;
    line-height: normal;
    cursor: pointer;
    color: #cca353;
  }
  .success-msg {
    padding: 27px 0;
    text-align: center;
  }
  .success {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto 25px;
    background: url("./images/icon-success.png") no-repeat;
  }
  p {
    font-size: 13px;
    color: #666;
  }
  .button {
    background: url("./images/lightbox-button.png") no-repeat;
    width: 156px;
    height: 37px;
    font-size: 16px;
    color: #fff;
    display: block;
    margin: 30px auto 0;
    line-height: 37px;
    &:hover {
      background: url("./images/lightbox-buttonh.png") no-repeat;
    }
  }
}

.partner_icon {
  background: url("./images/icon1.png") no-repeat;
  width: 42px;
  height: 48px;
  display: block;
  margin: 5.5px auto;
}
</style>
