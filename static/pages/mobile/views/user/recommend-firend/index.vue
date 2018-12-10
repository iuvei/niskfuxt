<template>
  <div class="recommend-firend">

    <div v-show="step==1">
      <div class="link-box" v-clipboard:copy="friendLink" v-clipboard:success="onCopy">
        您的专属推荐链接 (点击可复制)
        <div class="link-href" ref="linkurl">{{friendLink}}</div>
      </div>
      <div class="item-list  iconfont icon-arrow_r" @click="step=2">
        推荐奖金
        <div class="item-list-money">{{money}}</div>
      </div>
    </div>

    <div v-show="step==2">
      <v-input select="1">
        <select v-model="myData.platform">
          <option value="">请选择转入平台</option>
          <option v-for="item in platformData" :value="item.value" :key="item.value">
            {{item.name}}
          </option>
        </select>
      </v-input>
      <v-input>
        <input v-model.number="myData.money" type="text" placeholder="请填写转入金额">
        <span class="right-info">元</span>
      </v-input>
      <v-button @click="submit">确定转入</v-button>
    </div>
    <form-tip>
      <p>1.通过您的专属推荐链接推荐好友，好友成功领取体验金后，您即将获得推荐奖金。</p>
      <p>2.如果您好友在注册当日投注游戏产生亏损，那您即将得到他当日亏损礼金。</p>
      <p>3.好友推荐金=好友正/负盈利*输赢比例。即好友输赢的金额按照输赢比例进行统计派发。所以好友推荐金有正有负。其中输赢金额还需扣除派发当天的红利，其中输赢值只计算老虎机的输赢，不包括真人的输赢。</p>
      <p>4.好友推荐金需达到5元才能转入到游戏平台。</p>
      <p>*例如：小刘是至尊VIP邀请了小明来澳盈娱乐进行游戏，除红利外亏损了500元，那么在次日小刘就可以领取小明亏损500的30%彩金，即150元。</p>
      <p>5.彩金需达到有效投注8倍即可转到主账户。</p>
    </form-tip>
  </div>
</template>
<script>
  import vButton from "mobile/components/form/button"
  import vInput from "mobile/components/form"
  import formTip from "mobile/components/form-tip"
  import {platformData} from "@/assets/data"
  import {recommendFriend} from '@/controls/discount/recommendFriend'
  export default {
    mixins: [recommendFriend],
    data() {
      return {
        platformData,
        step: 1
      };
    },
    methods: {
      onCopy() {
        window.toast("复制成功")
      },
      submit() {
        this.friendSubmit(this.myData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created() {
      this.getFriendBonue()
    },
    activated(){
      this.step=1;
    },
    components: {
      formTip,
      vInput,
      vButton
    }
  };

</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .recommend-firend {
    padding: r(30);
    @include f(28px);
    .link-box,
    .item-list {
      margin-bottom: r(30);
      padding: r(30);
      border: 1px dashed $cl1;
      border-radius: r(10);
      line-height: r(48);
      color: #999;
    }
    .link-href {
      @include f(32px);
      color: $cl7;
    }

    .item-list {
      position: relative;
      margin-bottom: r(20);
      padding: r(30);
      border: 1px solid #ddd;
      border-radius: r(20);
      background-repeat: no-repeat;
      background-size: 7px 12px;
      &::before {
        position: absolute;
        right: r(30);
        top: 50%;
        transform: translateY(-50%);
      }
      .item-list-money {
        @include f(40px);
        line-height: 1.8;
        color: $cl3;
      }
    }
  }

</style>
