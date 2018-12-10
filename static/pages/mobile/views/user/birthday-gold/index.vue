<template>
  <div class="birthday-gold">
    <!-- 判断有无设置生日 -->
    <img src="./images/birthday.png" style="width:60%;">
    <div v-if="userData.birthday!=''">
      <!-- 可以领取生日礼金 -->
      <div v-if="isBirthday">
        <div class="bir-text">
          在您注册生日当天，即可申请生日礼金，祝您生日快乐，多多盈利！
          <p class="txtct">
            <v-button v-show="userData.birthday!=''" @click="submit" :disabled="!isBirthday">领取生日礼金</v-button>
            <!-- <el-button type="primary" :disabled="!isBirthday" @click="submit">领取礼金</el-button> -->
          </p>
        </div>
      </div>
      <!-- 不可以领取生日,礼金 -->
      <div class="bir-tips" v-else>
        {{message}}
      </div>
    </div>
    <!-- 未设置生日 -->
    <div v-else>
      <div class="bir-tips">
        请先完善个人信息
      </div>
      <router-link class="bir-reset" :to="{name:'personal'}" v-show="userData.birthday==''">
        去设置生日
      </router-link>
    </div>
    <form-tip>
      <p>1.以您填写的注册生日为准，生日填写后无法修改。</p>
      <p>2.新会员无生日礼金福利，忠实VIP以上每年可在注册生日，前后三天内自助领取一次，需1倍流水，逾期则无法领取或补发。</p>
      <p>3.例如：李先生填写的注册生日为5月20日，那么在每年的5月17日至5月23日，这七天期间，皆可自助领取。</p>
    </form-tip>
  </div>
</template>

<script>
  import formTip from "mobile/components/form-tip"
  import vButton from "mobile/components/form/button"
  import {mapGetters} from 'vuex'
  import {
    birthday
  } from '@/controls/discount/birthday'
  export default {
    mixins: [birthday],
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(["userData"])
    },
    methods: {
      submit() {
        if (!this.isBirthday) return;
        this.birthSubmit().then(res => {
          window.toast(res.message)
        }).then(err => {
          window.toast(err.message)
        })
      }
    },
    created() {
      this.checkBirthCoupon().then(res => {}).catch(err => {
        console.log(err)
      })
    },
    components: {
      formTip, vButton
    }
  };
</script>

<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .birthday-gold {
    // background:#fff url(./images/birthday.jpg) center r(30) no-repeat;
    min-height: 100vh;
    text-align: center;
    padding:r(20)!important;
    color:#666;
    @include f(30px);
    .bir-text{
      color:#666;
    }
    .bir-reset{
      @include f(26px);
    }
  }
</style>
