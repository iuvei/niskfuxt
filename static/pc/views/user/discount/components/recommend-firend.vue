<template>
  <div class="recommend-firend">
      <div class="friend-tips">
        好友成功领取体验金，您即获得推荐奖金，其当日30%的负盈利彩金也会在次日派发给您！
      </div>

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
        <el-button type="primary" @click="submitForm('friendForm')">提交</el-button>
        <el-button @click="resetForm('friendForm')">重置</el-button>
      </el-form-item>
    </el-form>

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
        }
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
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }

</style>
