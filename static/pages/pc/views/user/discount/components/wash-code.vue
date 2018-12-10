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
    <div class="tips">
      <p>温馨提示：</p>
      <p>1.自助返水暂仅支持老虎机平台（且不包括捕鱼游戏）。</p>
      <p>2.自助返水最低金额为10元，每个平台结算的是有效投注额，若没达到最低10的返水金额，将无法操作成功。</p>
      <p>3.每天00点—03点，PT和TTG平台自助洗码例行维护，其他老虎机平台可使用。未自助返水的投注额，将次日由系统返水自动结算派发到主账户。</p>
      <p>4.自助返水无次数限制，自助返水申请提交后，会在5分钟内通过审核，返水金额会自动添加到您的澳盈娱乐主账户余额内。</p>
      <p>5.若提示您“上一笔洗码审核中”，或投注15分钟后仍提示“无投注记录”，请联系在线客服。 </p>
    </div>
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
          // window.toast(res.message)
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
    // margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
  .wash-code{
    .tips{
      font-size: 15px;
      line-height: 30px;
      color: #d7b26c;
      padding: 0 0 20px 7px;
    }
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