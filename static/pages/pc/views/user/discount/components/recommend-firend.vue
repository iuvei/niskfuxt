<template>
  <div class="recommend-firend">
      <!-- <div class="friend-tips">
        好友成功领取体验金，您即获得推荐奖金，其当日30%的负盈利彩金也会在次日派发给您！
      </div> -->

    <el-form :model="myData" :rules="friendRule" ref="friendForm" label-width="100px" class="discount-form">
      <!-- 专属推荐 -->
      <el-form-item label="推荐链接">
        <el-input v-model="friendLink" readonly>
          <el-button slot="append" icon="el-icon-document" v-clipboard:copy="friendLink" v-clipboard:success="onCopy">复制</el-button>
        </el-input>
      </el-form-item>

      <!-- 推荐礼金 -->
      <el-form-item label="推荐礼金">
        <el-input v-model="money" readonly></el-input>
      </el-form-item>

      <!-- 游戏平台 -->
      <el-form-item label="游戏平台" prop="platform">
        <el-select v-model="myData.platform" placeholder="请选择需要转入的游戏平台">
          <el-option :label="item.name" v-for="item  in platformData" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <!-- 转入金额 -->
      <el-form-item label="转入金额" prop="money">
        <el-input v-model="myData.money" type="number" placeholder="请填写转入金额"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="submitbtn" @click="submitForm('friendForm')">提交</el-button>
        <el-button @click="resetForm('friendForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
    </div>

  </div>
</template>
<script>
  import {    platformData  } from "@/assets/data"
  import {    recommendFriend  } from '@/controls/discount/recommendFriend'
  export default {
    mixins: [recommendFriend],
    data() {
      const platform_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请选择游戏平台'))
        } else {
          callback();
        }
      }
      const money_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入转入金额'));
        } else if (!/^\d+$/.test(value)) {
          return callback(new Error('请输入整数金额'));
        } else if (value - this.money > 0) {
          return callback(new Error('可转入余额不足'));
        } else {
          callback();
        }
      }
      return {
        platformData,
        friendRule: {
          platform: [{
            validator: platform_check,
            trigger: 'blur'
          }],
          money: [{
            validator: money_check,
            trigger: 'blur'
          }]
        }, 
        tips:[
          "1.通过您的专属推荐链接推荐好友，好友成功领取体验金后，您即将获得推荐奖金。",
          "2.如果您好友在注册当日投注游戏产生亏损，那您即将得到他当日亏损礼金。",
          "3.好友推荐金=好友正/负盈利*输赢比例。即好友输赢的金额按照输赢比例进行统计派发。所以好友推荐金有正有负。其中输赢金额还需扣除派发当天的红利，其中输赢值只计算老虎机的输赢，不包括真人的输赢。",
          "4.好友推荐金需达到5元才能转入到游戏平台。",
          "*例如：小刘是至尊VIP邀请了小明来澳盈娱乐进行游戏，除红利外亏损了500元，那么在次日小刘就可以领取小明亏损500的30%彩金，即150元。",
          "5.彩金需达到有效投注8倍即可转到主账户。",
        ]
      };
    },
    methods: {
      onCopy() {
        window.toast('复制成功')
      },
      submitForm(formName) {
        this.drawSuccess = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.friendSubmit(this.myData).then(res => {
              console.log(res)
              window.toast(res.message)
              this.resetForm('friendForm')
            }).catch(err => {
              console.log(err)
              window.toast(err.message)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    created() {
      this.getFriendBonue()
    }
  };

</script>

<style lang="scss" scoped>
  .friend-tips{
        color: #09affe;
        font-size: 30px;
        margin: 20px 0;
        line-height:1.5;
  }
  .discount-form {
    // margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
.tipsDiv{
    font-size: 15px;
    line-height: 30px;
    color: #d7b26c;
    text-align: left;
    padding: 0 0 20px 28px;
}
.submitbtn{
  background: #8d3e3c;
  background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: linear-gradient(to right,#8d3e3c,#bb4e49);
  border: 1px solid #8d3e3c;
  color: #fff;
}
</style>
