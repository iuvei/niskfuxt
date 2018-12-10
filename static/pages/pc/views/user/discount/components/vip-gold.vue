<template>
  <div class="vip-gold">
      <div class="vip-tips">
        总投注额{{tips.allbet}}元
      </div>
      <el-table
        :data="level"
        border
        :row-class-name="tableRowClassName"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="levelName"
          label="等级"
          width="180">
        </el-table-column>
        <el-table-column
          prop="upgradeprize"
          label="晋级礼金">
        </el-table-column>
        <el-table-column
          prop="upgradethreshold"
          label="晋级要求">
        </el-table-column>
      </el-table>
      <div style="margin:20px 0">
        <el-button class="submitbtn" @click="submit" :loading="loading" :disabled="!canUpgrade">检测升级</el-button>
      </div>
      <div class="tips">
        <p>温馨提示：</p>
        <p>1.月初3号后开放领取，领取时需当月有过100元存款，否则活跃度不足无法领取，提款需1倍流水，礼金不可累积，每月刷新</p>
        <p>2.达到晋级标准即可自助晋级，或系统每月3号自动晋级。</p>
        <p>3.计算所有澳盈娱乐提供的真人、老虎机、彩票、棋牌、体育、捕鱼等游戏平台上的游戏投注。</p>
        <p>4.会员晋级后，级别会调整到晋级后的级别，晋级礼金会自动派发至用户的礼金账户。</p>
      </div>
  </div>
</template>
<script>
  import {checkUpgrade} from "@/api/preferential-terms"
  import {vipGold} from '@/controls/discount/vipGold'
  export default {
    mixins:[vipGold],
    data() {
      return {
        // disabled:false
        loading:false
      };
    },
    methods: {
      submit() {
        this.loading=true
        this.checkUpgrade().then(res=>{
          window.toast(res.message)
          this.loading=false
        }).catch(err=>{
          window.toast(err.message)
          this.loading=false
        })
      },
      tableRowClassName({row, rowIndex}) {
        if(row.level==this.userData.levelNumber){
          return 'active-row';
        }
        return '';
      }
    },
    components: {
      // vipStep
    },
    activated(){
      this.getVipInfo()
    },
    watch:{
      level(arr){
        if (arr[0].level == 0) {
          arr.shift()
        }
      }
    }
  };
</script>
<style lang="scss">
.submitbtn{
  background: #8d3e3c;
  background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: linear-gradient(to right,#8d3e3c,#bb4e49);
  border: 1px solid #8d3e3c;
  color: #fff;
}
  .vip-gold {
    .tips{
      font-size: 15px;
      line-height: 30px;
      color: #d7b26c;
      padding: 0 0 20px 7px;
    }
    .vip-tips {
      color: #09affe;
      font-size: 30px;
      margin-bottom: 20px;
        line-height:1.5;
      
    }
    .active-row{
      background:#c7e9fd!important;
    }
    .formbtn{
      margin-top: 24px;
    }
    .disablebtn{
      background-color: #ccc!important;
      cursor: not-allowed!important;
    }
  }
</style>
