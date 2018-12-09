<template>
  <div class="recommend-firend">
      <!-- <div class="friend-tips">
        好友成功领取体验金，您即获得推荐奖金，其当日30%的负盈利彩金也会在次日派发给您！
      </div> -->

    <Form :model="myData" :rules="friendRule" ref="friendForm" :label-width="100" class="discount-form">
      <!-- 专属推荐 -->
      <FormItem label="推荐链接">
        <Input v-model="friendLink" readonly>
          <Button slot="append" icon="el-icon-document" v-clipboard:copy="friendLink" v-clipboard:success="onCopy">复制</Button>
        </Input>
      </FormItem>

      <!-- 推荐礼金 -->
      <FormItem label="推荐礼金">
        <Input v-model="money" readonly></Input>
      </FormItem>

      <!-- 游戏平台 -->
      <FormItem label="游戏平台" prop="platform">
        <Select v-model="myData.platform" placeholder="请选择需要转入的游戏平台">
          <Option v-for="(item,key)  in platformData" :value="item" :key="key">{{item}}</Option>
        </Select>
      </FormItem>

      <!-- 转入金额 -->
      <FormItem label="转入金额" prop="money">
        <Input v-model.number="myData.money" type="text" placeholder="请填写转入金额"></Input>
      </FormItem>

      <FormItem>
        <Button type="warning" @click="submitForm('friendForm')">提交</Button>
      </FormItem>
    </Form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
    </div>

  </div>
</template>
<script>
  import {    slot  } from "@@/assets/data/games.json"
  import {    recommendFriend  } from '@@/controls/discount/recommendFriend'
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
        platformData:slot,
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
          "好友成功领取体验金，您即获得推荐奖金，其当日30%的负盈利彩金也会在次日派发给您！"
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
              window.toast(res.message)
              this.resetForm('friendForm')
            }).catch(err => {
              window.toast(err.message)
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    mounted() {
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
    .Select {
      display: block !important;
    }
  }
</style>
