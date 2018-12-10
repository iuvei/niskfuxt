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
    <div class="tips">
      <p>温馨提示：</p>
      <p>1.以您填写的注册生日为准，生日填写后无法修改。</p>
      <p>2.新会员无生日礼金福利，忠实VIP以上每年可在注册生日，前后三天内自助领取一次，需1倍流水，逾期则无法领取或补发。</p>
      <p>3.例如：李先生填写的注册生日为5月20日，那么在每年的5月17日至5月23日，这七天期间，皆可自助领取。</p>
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
    text-align: center;
    padding: 280px 50px 20px;
    .tips{
      font-size: 15px;
      line-height: 30px;
      color: #d7b26c;
      text-align: left;
      padding: 0 0 20px 7px;
    }
    .tbrithday {
      font-size: 24px;
      color: #ffecb7;
      text-align: center;
      width: 100%;
        line-height:1.5;
      
    }
    .bir-text {
      font-size: 24px;
      color: #ccc;
      line-height: 2;
        line-height:1.5;
      

    }
    .bir-tips {
      color: #09affe;
      font-size: 30px;
      // margin: 20px 0;
      line-height:1.5;
      
    }
  }

</style>
