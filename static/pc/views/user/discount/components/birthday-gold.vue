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
      <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-show="userData.birthday==''">
        <el-button type="text">去设置生日</el-button>
      </router-link>
    </div>
        <div class="tips" style="padding-top:100px;">
          <h3>温馨提示：</h3>
            <p>1.申请生日礼金需在青铜VIP及以上会员等级方可申请。</p>
            <p>2.符合要求的会员每年只能申请一次。</p>
            <p>3.生日礼金无需流水要求。</p>
            <p>4.生日礼金将根据您填写的生日日期，在当天即可进行自助领取，彩金将派发至您的主账户内。</p>
            <p>5.如符合要求无法进行领取生日礼金，请及时联系在线客服咨询。</p>
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
    background: url(./images/birthday.jpg) center top no-repeat;
    min-height: 500px;
    text-align: center;
    padding: 280px 50px 20px;
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
      margin: 20px 0;
        line-height:1.5;
      
    }
  .tips{
      clear:both;
      text-align:left;
      h3{

      }
      p{
        line-height:2;
        span{
          color:red;
        }
      }
    }
  }

</style>
