<template>
  <div class="experience-gold">
    <Alert type="warning" show-icon v-if="!canExp">
      {{msg||'正在获取体验金数据...'}}
    </Alert>
    <!-- 是否可以领取体验金 -->
    <div v-if="canExp">
      <!-- <div class="exp-tips">
        可领取体验金{{amount}}元
        <br/> 无投注额要求,游戏账户达到{{limitAmount}}元即可提款
      </div> -->
      <Form ref="transferForm" :label-width="110" class="discount-form">

        <FormItem label="游戏平台" prop="platform">
          <Select v-model="expData.platform" placeholder="选择游戏平台">
            <Option v-for="item in platformData" :key="item.value" :label="`${item}`" :value="item">
            </Option>
          </Select>
        </FormItem>

        <FormItem class="experience-btn">
          <Button class="submitbtn" @click="submitForm('transferForm')">提交</Button>
          <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="!userData.accountName">
            <Button type="text">去完善个人信息</Button>
          </router-link>
          <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="userData.phoneValidStatus=='0'">
            <Button type="text">去验证手机</Button>
          </router-link>
        </FormItem>

      </Form>
    </div>
  </div>
</template>
<script>
  import {
    slot
  } from "@@/assets/data/games.json"
  import {
    mapGetters
  } from 'vuex'
  import {
    experience
  } from '@@/mixins/discount/experience'
  export default {
    mixins: [experience],
    data() {
      return {
        platformData: slot,
        tips: [
          "部分厅NT需进入游戏激活，方可转入使用（点击游戏名称进入激活）。"
        ]
      };
    },
    methods: {
      submitForm(formName) {
        this.CouponSubmit(this.expData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    },
    computed: {
      ...mapGetters(["userData"])
    },
    mounted() {
      this.checkCoupon().then(res => {

      }).catch(err => {
        window.toast(err.message)
      })
    }
  };

</script>
<style lang="scss" scoped>
  .experience-gold {
    // background: url(./images/birthday.jpg) center top no-repeat;
    min-height: 500px;
    text-align: center;

    // padding: 280px 50px 20px;
    .exp-tips {
      color: #09affe;
      font-size: 30px;
      margin: 20px 0;
      line-height: 1.5;
      // background: url(./images/discount-bg.png) center top no-repeat;
      min-height: 500px;
      text-align: center;

      .exp-tips-text {
        display: block;
        padding-top: 30%;
      }
    }
  }

  .discount-form {
    margin-top: 30px;
    width: 500px;

    .Select {
      display: block !important;
    }

    .experience-btn {
      text-align: left;
    }
  }

  .tipsDiv {
    font-size: 15px;
    line-height: 30px;
    width: 800px;
    text-align: justify;

    .tipsTitle {
      color: #fff;
    }

    .tipsBox {
      color: #b5b5b5;
    }
  }

</style>
