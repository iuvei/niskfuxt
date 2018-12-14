<template>
  <div class="wash-code">
    <el-form :model="data" ref="transferForm" label-width="100px" class="discount-form">
      <!-- 游戏平台 -->
      <el-form-item label="游戏平台">
        <el-select v-model="type" placeholder="请选择游戏平台" @change="search(type)">
          <el-option :label="item.name" v-for="item  in platformData" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <!-- 开始时间 -->
      <el-form-item label="开始时间" prop="data">
        <el-input v-model.number="data.startDate" readonly placeholder="请选择游戏平台"></el-input>
      </el-form-item>

      <!-- 结束时间 -->
      <el-form-item label="结束时间" prop="data">
        <el-input v-model.number="data.endDate" readonly placeholder="请选择游戏平台"></el-input>
      </el-form-item>

      <!-- 总有效投注额 -->
      <el-form-item label="总有效投注额" prop="data">
        <el-input v-model.number="data.validAmount" readonly placeholder='无投注记录'></el-input>
      </el-form-item>

      <!-- 洗码比率 -->
      <el-form-item label="洗码比率" prop="data">
        <el-input v-model.number="data.rate" readonly placeholder='无投注记录'></el-input>
      </el-form-item>

      <!-- 返水金额 -->
      <el-form-item label="返水金额" prop="data">
        <el-input v-model.number="data.ximaAmount" readonly placeholder='无投注记录'></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="submitbtn" @click="doXima" :disabled="!show">确定洗码</el-button>
      </el-form-item>
    </el-form>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox">1、自助返水不限平台，最低金额为10元（要是您没有达到自助返水的最低金额是不能自助返水的）。 </p>
        <p class="tipsBox">2、每天的23:00-01:00为系统结算时间，暂时不能使用自助返水。每个平台自助结算的是有效投注，未自助返水的投注将通过系统进行返水。</p>
        <p class="tipsBox">3、自助返水无次数限制，自助返水申请提交后，会在5分钟内通过审核，返水金额会自动添加到您的游戏账号中。</p>
    </div>
  </div>
</template>

<script>
  import {
    platformData
  } from "@/assets/data"
  import {
    washCode
  } from '@/controls/discount/washCode'
  export default {
    mixins: [washCode],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      // 查询洗码结果
      search(type) {
        this.searchSubmit({
          gameId: type
        }).then(res => {
          // window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      // 确认洗码
      doXima() {
        this.doXimaSubmit({
          gameId: this.type
        }).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    components: {}
  };

</script>
<style lang="scss" scoped>
  .discount-form {
    margin-top: 30px;
    width: 500px;

    .el-select {
      display: block !important;
    }
  }
  .tipsDiv {
    font-size: 15px;
    line-height: 30px;
    width: 800px;

    .tipsTitle {
      color: #fff;
    }

    .tipsBox {
      color: #b5b5b5;
    }
  }
  .submitbtn {
    background: #e2b85a;
    background: -moz-linear-gradient(to right, #e2b85a, #b99548);
    background: -webkit-linear-gradient(to right, #e2b85a, #b99548);
    background: -o-linear-gradient(to right, #e2b85a, #b99548);
    background: linear-gradient(to right, #e2b85a, #b99548);
    border: 1px solid #e2b85a;
    color: #fff;
  }

</style>
