<template>
  <div class="experience-gold">
    <!-- 是否可以领取体验金 -->
    <!-- <div v-if="canExp">
      <el-form ref="transferForm" label-width="100px" class="discount-form">

        <el-form-item label="游戏平台" prop="platform">
          <el-select v-model="expData.platform" placeholder="选择游戏平台">
            <el-option v-for="item in platformData" :key="item.value" :label="`${item.name}`" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item class="experience-btn">
          <el-button class="submitbtn" @click="submitForm('transferForm')">提交</el-button>
          <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="!userData.accountName">
            <el-button type="text">去完善个人信息</el-button>
          </router-link>
          <router-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="userData.phoneValidStatus=='0'">
            <el-button type="text">去验证手机</el-button>
          </router-link>
        </el-form-item>
        
      </el-form>
      <div class="tipsDiv">
          <p class="tipsTitle">温馨提示：</p>
          <p class="tipsBox">1.用户申请自助体验金转入的游戏账户余额需低于1元才能成功转入。</p>
          <p class="tipsBox">2.用户在申请自助体验金时，需先验证手机号码、绑定银行卡信息。</p>
          <p class="tipsTitle">体验金的领取要求：</p>
          <p class="tipsBox">1.三个月内出现同姓名或同注册IP领取过体验金的无法重复领取；</p>
          <p class="tipsBox">2.玩家绑定的银行卡除最后两位不同，其他的都相同的银行卡超过2张，不能领取；</p>
          <p class="tipsBox">3.注册手机号码没有验证的不能领取；</p>
          <p class="tipsBox">4.如发现有恶意多次注册申请体验金的用户，澳盈娱乐有权取消该账号享受的优惠权利。</p>
      </div>
    </div>
    <div v-else>
      <div class="exp-tips">
        <span class="exp-tips-text">{{msg}}</span>
      </div>
    </div> -->
    <p class="p-title">下载澳盈APP--自助领取体验金</p>
    <ul class="cssNav">
      <li v-for="(item,i) in list" :key="i" :class="[num==i?'active':'']" @click="tab(i)">{{item}}</li>
    </ul>
    <div class="qrBox">
      <img :src="generateQRCode(Download.app,300)" class="qrcode">
      <p>支持系统: <i class="iconay ay-ios"></i> <i class="iconay ay-anzhuo"></i></p>
      <p>使用手机浏览器输入网址</p>
      <p class="website">{{Download.app}}</p>
    </div>
  </div>
</template>
<script>
import {Download} from "@/assets/data"
import {generateQRCode} from "@/api/show"
import { platformData } from "@/assets/data";
import { mapGetters } from "vuex";
import { experience } from "@/controls/discount/experience";
export default {
  mixins: [experience],
  data() {
    return {
      Download,
      platformData,
      tips: ["部分厅NT需进入游戏激活，方可转入使用（点击游戏名称进入激活）。"],
      num: 0,
      list: ["1.下载APP", "2.账户中心-自助优惠", "3.自助体验金"]
    };
  },
  methods: {
    submitForm(formName) {
      this.CouponSubmit(this.expData)
        .then(res => {
          window.toast(res.message);
        })
        .catch(err => {
          console.log(err);
          window.toast(err.message);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    tab: function(i) {
      this.num = i;
    },
    generateQRCode(url, size) {
      return generateQRCode(url, size)
    }
  },
  computed: {
    ...mapGetters(["userData"])
  },
  activated() {
    this.checkCoupon();
  }
};
</script>
<style lang="scss" scoped>
// .experience-gold {
//   min-height: 500px;
//   text-align: center;
// .exp-tips {
//   color: #09affe;
//   font-size: 30px;
//   margin: 20px 0;
//   line-height:1.5;
//   background: url(./images/birthday.jpg) center top no-repeat;
//   min-height: 500px;
//   text-align: center;
//   .exp-tips-text{
//     display: block;
//     padding-top: 30%;
//   }
// }

//   .discount-form {
//     width: 500px;
//     .el-select {
//       display: block !important;
//     }
//     .experience-btn{
//       text-align: left;
//     }
//   }
// .tipsDiv{
//     font-size: 15px;
//     line-height: 30px;
//     width: 800px;
//     text-align: justify;
//     .tipsTitle{
//         color: #fff;
//     }
//     .tipsBox{
//         color:#b5b5b5;
//     }
// }
// .submitbtn{
//   background: #8d3e3c;
//   background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
//   background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
//   background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
//   background: linear-gradient(to right,#8d3e3c,#bb4e49);
//   border: 1px solid #8d3e3c;
//   color: #fff;
// }

.experience-gold {
  min-height: 500px;
  text-align: center;
  .p-title {
    color: #ffffff;
    font-size: 16px;
  }
  .cssNav {
    margin: 20px auto 50px;
    width: 800px;
  }
  .cssNav li {
    padding: 0 50px;
    line-height: 40px;
    background-color: #dddddd;
    display: inline-block;
    color: #000;
    position: relative;
    margin-right: 4px;
  }
  .cssNav li:after {
    content: "";
    display: block;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #dddddd;
    position: absolute;
    right: -20px;
    top: 0;
    z-index: 10;
  }
  .cssNav li:before {
    content: "";
    display: block;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #000;
    position: absolute;
    left: 0px;
    top: 0;
  }

  .cssNav li:first-child {
    border-radius: 4px 0 0 4px;
    padding-left: 25px;
  }
  .cssNav li:last-child,
  .cssNavEnd {
    border-radius: 0 4px 4px 0;
    padding-right: 25px;
  }
  .cssNav li:first-child:before {
    display: none;
  }
  .cssNav li:last-child:after,
  .cssNavEnd:after {
    display: none;
  }
  .cssNav li.active {
    background-color: #d7b26c;
  }
  .cssNav li.active:after {
    border-left-color: #d7b26c;
  }

  .qrBox {
    width: 500px;
    margin: 0 auto;
    border: 1px solid #dddddd;
    padding-top: 20px;
    padding-bottom: 40px; 
    .qrcode {
      margin: 10px;
      border: 1px solid #ffffff;
    }
    p {
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
      .iconay {
        font-size: 24px;
      }
      &.website {
        background: #dddddd;
        padding: 10px;
        display: inline-block;
        color: #000;
        line-height: 1;
      }
    }
  }
}
</style>
