<template>
  <div class="birthday-gold">
    <!-- 判断有无设置生日 -->
    <div v-if="userData.birthday!=''">
      <!-- 可以领取生日礼金 -->
      <div v-if="isBirthday">
        <div class="bir-text">
          在您注册生日当天，即可申请生日礼金，祝您生日快乐，多多盈利！
          <p class="txtct">
            <el-button type="primary" :disabled="!isBirthday" @click="submit">领取礼金</el-button>
          </p>
        </div>
      </div>
      <!-- 不可以领取生日礼金 -->
      <div class="bir-tips" v-else>
        {{message}}
      </div>
    </div>
    <!-- 未设置生日 -->
    <div v-else>
      <div class="bir-tips">
        请先完善个人信息
      </div>
      <router-link class="formbtn btn-reset" :to="{name:'datum'}" v-show="userData.birthday==''">
        <el-button type="text">去设置生日</el-button>
      </router-link>
    </div>

    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox">1、请您先前往个人资料账户设置中完善生日信息，才能享受该优惠。</p>
        <p class="tipsBox">2、您完善资料后，达到生日礼金的要求，即可自助申请生日礼金。</p>
        <p class="tipsBox">3、当您成功申请生日礼金后，系统将会将礼金派发至您的主账户。</p>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import {
    birthday
  } from '@/controls/discount/birthday'
  export default {
    mixins: [birthday],
    data() {
      return {};
    },
    props: {},
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
    computed: {
      ...mapGetters(["userData"]),
    },
    activated() {
      this.checkBirthCoupon().then(res => {}).catch(err => {
        console.log(err)
      })
    },
    components: {}
  };

</script>

<style lang="scss" scoped>
  .birthday-gold {
    background: url(./images/discount-bg.png) center top no-repeat;
    min-height: 500px;
    // text-align: center;
    padding: 280px 50px 20px;
    .tbrithday {
      font-size: 24px;
      color: #ffecb7;
      text-align: center;
      width: 100%;
        line-height:1.5;
      
    }
    .bir-text {
      text-align: center;
      font-size: 24px;
      color: #ccc;
      line-height: 2;
        line-height:1.5;
      

    }
    .bir-tips {
      text-align: center;
      color: #09affe;
      font-size: 30px;
      // margin: 20px 0;
      line-height:1.5;
      
    }
    .tipsDiv {
      font-size: 15px;
      line-height: 30px;
      width: 800px;

      .tipsTitle {
        color: #fff;
      }

      .tipsBox {
        color: #b5b5b5;
      }
    }
  }

</style>
