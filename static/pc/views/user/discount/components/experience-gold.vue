<template>
  <div class="experience-gold">
    <!-- 是否可以领取体验金 -->
    <div v-if="canExp">
      <div class="exp-tips">
        可领取体验金{{amount}}元
        <br/> 无投注额要求,游戏账户达到{{limitAmount}}元即可提款
      </div>
      <el-form ref="transferForm" label-width="100px" class="discount-form">

        <el-form-item label="游戏平台" prop="platform">
          <el-select v-model="expData.platform" placeholder="选择游戏平台">
            <el-option v-for="item in platformData" :key="item.value" :label="`${item.name}`" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('transferForm')">提交</el-button>
          <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="!userData.accountName">
            <el-button type="text">去完善个人信息</el-button>
          </router-link>
          <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="userData.phoneValidStatus=='0'">
            <el-button type="text">去验证手机</el-button>
          </router-link>
        </el-form-item>
        
      </el-form>
    </div>
    <div v-else>
      <div class="exp-tips">
        {{msg}}
      </div>
    </div>
  </div>
</template>
<script>
  // import {
  //   platformData
  // } from "@/assets/data"
  import {
    mapGetters
  } from 'vuex'
  import {
    experience
  } from '@/controls/discount/experience'
  export default {
    mixins: [experience],
    data() {
      return {
        platformData:[]
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
    activated() {
      this.checkCoupon()
    }
  };

</script>
<style lang="scss" scoped>
  .experience-gold {
    background: url(./images/birthday.jpg) center top no-repeat;
    min-height: 500px;
    text-align: center;
    padding: 280px 50px 20px;
    .exp-tips {
      color: #09affe;
      font-size: 30px;
      margin: 20px 0;
        line-height:1.5;
      
    }
  }

  .discount-form {
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }

</style>
