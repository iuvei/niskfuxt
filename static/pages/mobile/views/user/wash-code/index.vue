<template>
  <div class="user-wash-code">
    <div class="layout_form no_padding with_last_border">
      <!-- 游戏平台 -->
      <v-input select="1">
        <select class="j-plat" v-model="type" @change="search(type)">
          <option value="">选择游戏平台</option>
          <option v-for="item in platformData" :value="item.value" :key="item.value">{{item.name}}</option>
        </select>
      </v-input>

      <!-- 开始时间 -->
      <v-input>
        <p class="text">开始时间</p>
        <input v-model="data.startDate" readonly placeholder="请选择游戏平台">
      </v-input>

      <!-- 结束时间 -->
      <v-input>
        <p class="text">结束时间</p>
        <input v-model="data.endDate" readonly placeholder="请选择游戏平台">
      </v-input>

      <!-- 总有效投注额 -->
      <v-input>
        <p class="text">总有效投注额</p>
        <input v-model="data.validAmount" readonly placeholder="无投注记录">
      </v-input>

      <!-- 洗码比率 -->
      <v-input>
        <p class="text">洗码比率</p>
        <input v-model="data.rate" readonly placeholder="无投注记录">
      </v-input>

      <!-- 返水金额 -->
      <v-input>
        <p class="text">返水金额</p>
        <input v-model="data.ximaAmount" readonly placeholder="无投注记录">
      </v-input>

      <v-button @click="doXima" v-if="show">洗码</v-button>

    </div>
    <form-tip>
      <p>1.自助返水暂仅支持老虎机平台（且不包括捕鱼游戏）。</p>
      <p>2.自助返水最低金额为10元，每个平台结算的是有效投注额，若没达到最低10的返水金额，将无法操作成功。</p>
      <p>3.每天00点—03点，PT和TTG平台自助洗码例行维护，其他老虎机平台可使用。未自助返水的投注额，将次日由系统返水自动结算派发到主账户。</p>
      <p>4.自助返水无次数限制，自助返水申请提交后，会在5分钟内通过审核，返水金额会自动添加到您的澳盈娱乐主账户余额内。</p>
      <p>5.若提示您“上一笔洗码审核中”，或投注15分钟后仍提示“无投注记录”，请联系在线客服。 </p>
    </form-tip>
  </div>
</template>

<script>
  import vButton from "mobile/components/form/button"
  import vInput from "mobile/components/form"
  import {    platformData  } from "@/assets/data"
  import {    washCode  } from '@/controls/discount/washCode'
  import formTip from "mobile/components/form-tip"
  export default {
    mixins: [washCode],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      search(type) {
        
      },
      doXima() {
        if(!this.show){
          return
        }
        this.doXimaSubmit({
          gameId: this.type
        }).then(res => {
          if (res.code != '20000') {
            window.toast(res.message)
          }
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    watch:{
      type(val){
        if(val) {
          this.searchSubmit({gameId:val}).then(res => {
          // window.toast(res.message)
          }).catch(err => {
            console.log(err)
            window.toast(err.message)
          })
        }       
      }
    },
    components: {
      vInput,
      vButton,
      formTip
    }
  };

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .user-wash-code {
    padding: r(30);
    .text{
      display: inline-block
    }
    input{
      width: 60%;
    }
  }

</style>
