<template>
  <div class="user-experience-gold">
    <!-- 是否可以领取体验金 -->
    <div v-if="canExp">
      <span class="amount">可领取体验金{{amount}}元</span>
        <input-inline label="选择游戏平台" select="1">
          <select v-model="expData.platform">
            <option value="">选择游戏平台</option>
            <option v-for="item in platformData" :value="item.value" :key="item.value">
              {{item.name}}
            </option>
          </select>
        </input-inline>
          <v-button @click="submit">提交</v-button>
          <v-button v-if="!userData.accountName">
            <router-link :to="{name:'personal'}" class="link">
              去完善个人信息
            </router-link>
          </v-button>
          <v-button v-if="userData.phoneValidStatus=='0'">
            <router-link :to="{name:'personal'}" class="link">
              去验证手机
            </router-link>
          </v-button>
          <form-tip>
            <p>1.用户申请自助体验金转入的游戏账户余额需低于1元才能成功转入。</p>
            <p>2.用户在申请自助体验金时，需先验证手机号码、绑定银行卡信息。</p>
            <p style="text-align:center;">体验金的领取要求</p>
            <p>1.三个月内出现同姓名或同注册IP领取过体验金的无法重复领取；</p>
            <p>2.玩家绑定的银行卡除最后两位不同，其他的都相同的银行卡超过2张，不能领取；</p>
            <p>3.注册手机号码没有验证的不能领取；</p>
            <p>4.如发现有恶意多次注册申请体验金的用户，澳盈娱乐有权取消该账号享受的优惠权利。</p>
          </form-tip>
    </div>
    <div v-else>
      <form-tip style="text-align: center">
        {{msg}}
      </form-tip>
    </div>
  </div>
</template>
<script>
  import formTip from "mobile/components/form-tip"
  import {platformData} from "@/assets/data"
  import {mapGetters} from 'vuex'
  import {
    experience
  } from '@/controls/discount/experience'
  export default {
    mixins: [experience],
    data() {
      return {
        platformData
      };
    },
    methods: {
      submit() {
        this.CouponSubmit(this.expData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    computed: {
      ...mapGetters(["userData"])
    },
    created() {
      this.checkCoupon()
    },
    components: {formTip}
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .user-experience-gold {
    padding: r(30);
    .amount{
      width: 100%;
      @include f(36px);
      color: #fff;
      text-align: center;
      margin: r(30) 0;
      display: inline-block;
    }
    .text_red{
      color:$cl3;
    }
  }
</style>
