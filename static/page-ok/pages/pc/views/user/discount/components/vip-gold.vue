<template>
  <div class="vip-gold">
    <div class="vip-tips">
      总投注额{{tips.allbet}}元
    </div>
    <el-table :data="level" border :row-class-name="tableRowClassName" style="width: 100%">
      <el-table-column type="index" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="levelName" label="等级" width="180">
      </el-table-column>
      <el-table-column prop="upgradeprize" label="晋级礼金">
      </el-table-column>
      <el-table-column prop="upgradethreshold" label="晋级要求">
      </el-table-column>
    </el-table>
    <div style="margin:20px 0">
      <!-- <el-button class="submitbtn" @click="submit" :loading="loading" :disabled="!canUpgrade">检测升级</el-button> -->
      <a :href="SETTING.live800" target="_blank" class="submitbtn">在线客服咨询</a>
    </div>
  </div>
</template>
<script>
  import {
    checkUpgrade
  } from "@/api/preferential-terms"
  import {
    vipGold
  } from '@/controls/discount/vipGold'
  import {SETTING} from '@/assets/data'
  export default {
    mixins: [vipGold],
    data() {
      return {
        // disabled:false
        SETTING,
        loading: false
      };
    },
    methods: {
      submit() {
        this.loading = true
        this.checkUpgrade().then(res => {
          window.toast(res.message)
          this.loading = false
        }).catch(err => {
          window.toast(err.message)
          this.loading = false
        })
      },
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (row.level == this.userData.levelNumber) {
          return 'active-row';
        }
        return '';
      }
    },
    components: {
      // vipStep
    },
    activated() {
      this.getVipInfo()
    },
    watch: {
      level(arr) {
        if (arr[0].level == 0) {
          arr.shift()
        }
      }
    }
  };

</script>
<style lang="scss">
  .submitbtn {
    background: #e2b85a;
    background: -moz-linear-gradient(to right, #e2b85a, #b99548);
    background: -webkit-linear-gradient(to right, #e2b85a, #b99548);
    background: -o-linear-gradient(to right, #e2b85a, #b99548);
    background: linear-gradient(to right, #e2b85a, #b99548);
    border: 1px solid #e2b85a;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
  }

  .vip-gold {
    .vip-tips {
      color: #09affe;
      font-size: 30px;
      margin: 20px 0;
      line-height: 1.5;

    }

    .active-row {
      background: #c7e9fd !important;
    }

    .formbtn {
      margin-top: 24px;
    }

    .disablebtn {
      background-color: #ccc !important;
      cursor: not-allowed !important;
    }
  }

</style>
