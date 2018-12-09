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
        <el-button type="primary" @click="doXima" :disabled="!show">确定洗码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    platformData
  } from "@/assets/data"
  import {washCode} from '@/controls/discount/washCode'
  export default {
    mixins:[washCode],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      // 查询洗码结果
      search(type) {
        this.searchSubmit({gameId:type}).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      },
      // 确认洗码
      doXima() {
        this.doXimaSubmit({gameId: this.type}).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    components: {
    }
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
</style>