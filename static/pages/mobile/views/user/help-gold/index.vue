<template>
  <div class="help-gold">

      <v-input select="1">
        <select v-model="submitData.pno">
          <option value="">选择救援金</option>
          <option v-for="item in listData" :value="item.pno" :key="item.value" v-if="item.status==0">
            {{item.promo}}元-(截止{{getUom(item)}})
          </option>
        </select>
      </v-input>

      <v-input select="1">
        <select v-model="submitData.platform">
          <option value="">选择游戏平台</option>
          <option v-for="item in platformData" :value="item.value" :key="item.value">
            {{item.name}}
          </option>
        </select>
      </v-input>

      <v-button @click="submit">
        确定转入
      </v-button>
    <form-tip>
      <p>1.救援金仅支持老虎机平台。</p>
      <p>2.救援金=（输赢值-红利）*返还比例。其中输赢值是指玩家输钱的情况，同时需达到最低存款和最低负盈利要求，其中输赢值只计算老虎机的部分。</p>
      <p>3.当日派发昨日的救援金，扣除的红利包括昨日00:00:00到23:59:59这个时间段的红利。</p>
      <p>4.救援金派发完成后需用户自己领取，领取成功后，需达到救援金的流水倍数才能实现救援金的提取转出操作。</p>
      <p>5.救援金领取后，不支持重新领取。</p>
      <p>6.领取救援金的有效期为30天，从派发的当天开始算，逾期不补发。</p>
    </form-tip>
  </div>
</template>

<script>
  import formTip from "mobile/components/form-tip"
  import vInput from "mobile/components/form"
  import vButton from "mobile/components/form/button"
  import {platformData} from "@/assets/data"
  import {helpGold} from '@/controls/discount/helpGold'
  export default {
    mixins: [helpGold],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      submit() {
        // 提交表单
        this.helpGoldSubmit(this.submitData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created() {
      this.getHelpGold(this.searchLogData);
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
  .help-gold {
    padding: r(30);
    @include f(28px);
    .item-list {
      position: relative;
      margin-bottom: r(20);
      padding: r(30);
      border: 1px solid #ddd;
      border-radius: r(20);
      background-repeat: no-repeat;
      line-height: r(60);
      &::before {
        position: absolute;
        right: r(30);
        top: 50%;
        transform: translateY(-50%);
      }
      .item-list-money {
        @include f(40px);
        color: $cl3;
      }
      .item-list-text {
        color: $cl4;
      }
    }

  }

</style>
