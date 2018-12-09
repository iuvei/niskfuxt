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
          label="序号">
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
          label="晋级流水">
        </el-table-column>
      </el-table>
      <div style="margin:20px 0">
        <el-button type="primary" @click="submit" :loading="loading" :disabled="!canUpgrade">检测升级</el-button>
      </div>
        <div class="tips" style="padding-top:100px;">
          <h3>温馨提示：</h3>
          <p>1.会员每月只享有一次晋级机会，且各等级晋级礼金每位玩家只可以获得一次。</p>
          <p>2.如会员自助/系统晋级成功，晋级礼金将派发至【副账户彩金】；完成10倍流水方可提款。</p>
          <p>3.系统将在每月5号自动审核晋级。</p>
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
          window.toast(res.toast)
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
    }
  };
</script>
<style lang="scss">
  .vip-gold {
    .vip-tips {
      color: #09affe;
      font-size: 30px;
      margin: 20px 0;
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
  .tips{
      clear:both;
      h3{

      }
      p{
        line-height:2;
        span{
          color:red;
        }
      }
    }
  }

</style>
