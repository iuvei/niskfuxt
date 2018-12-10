<template>
  <div class="help-gold">
    <div class="help-tips" v-if="listData.length==0">
      <span class="help-tips-text">没有可领取的救援金</span>
    </div>
    <div class="v-align " v-else>
      <!-- <div class="help-tips">
        救援金有效时间为{{expriedDay}}天 (从派发当天开始计算)规定时间内未领取将自动取消。
      </div> -->
      <!--救援金列表-->
      <el-table :data="listData" border style="width: 100%">
        <el-table-column prop="pno" label="编号" align="center" width="230">
        </el-table-column>
        <el-table-column prop="promo" label="金额" align="center" width="100">
        </el-table-column>
        <el-table-column prop="tempCreateTime" align="center" width="180" label="发放时间">
        </el-table-column>
        <el-table-column prop="remark" align="center" label="备注">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small" type="primary" v-if="scope.row.status=='0'">可领取</el-button>
            <el-button size="small" type="info" v-else disabled>已领取</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格分页 -->
      <div v-if="listData.length>0">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchLogData.pageIndex"
          :page-sizes="[10, 20, 50, 100]" :page-size="searchLogData.size" layout="total, sizes, prev, pager, next" :total="searchLogData.totalRecords">
        </el-pagination>
      </div>
      <!--领取救援金的确认框-->
      <el-dialog title="领取救援金" :visible.sync="dialogVisible" width="380px">
        <div>
          救援金：{{selected.promo}}
        </div>
        <div>
          <el-select v-model="submitData.platform" placeholder="请选择游戏平台">
            <el-option v-for="item in platformData" :key="item.value" :label="`${item.name}`" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button class="submitbtn" @click="submitForm">确 定</el-button>
        </span>
      </el-dialog>
      <div class="tipsDiv">
          <p class="tipsTitle">温馨提示：</p>
          <p class="tipsBox">1.救援金仅支持老虎机平台。</p>
          <p class="tipsBox">2.救援金=（输赢值-红利）*返还比例。其中输赢值是指玩家输钱的情况，同时需达到最低存款和最低负盈利要求，其中输赢值只计算老虎机的部分。</p>
          <p class="tipsBox">3.当日派发昨日的救援金，扣除的红利包括昨日00:00:00到23:59:59这个时间段的红利。</p>
          <p class="tipsBox">4.救援金派发完成后需用户自己领取，领取成功后，需达到救援金的流水倍数才能实现救援金的提取转出操作。</p>
          <p class="tipsBox">5.救援金领取后，不支持重新领取。</p>
          <p class="tipsBox">6.领取救援金的有效期为30天，从派发的当天开始算，逾期不补发。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    platformData
  } from "@/assets/data"
  import {
    helpGold
  } from '@/controls/discount/helpGold'
  export default {
    mixins: [helpGold],
    data() {
      return {
        platformData, // 游戏平台
        dialogVisible: false, // 确认弹窗
        selected: {}, // 当前选择的救援金
      };
    },
    methods: {
      handleSizeChange(val) {
        this.searchLogData.size = val
        this.getHelpGold(this.searchLogData);
      },
      handleCurrentChange(val) {
        this.searchLogData.pageIndex = val
        this.getHelpGold(this.searchLogData);
      },
      handleClick(val) {
        this.selected = val
        this.submitData.pno = val.pno
        this.dialogVisible = true;
      },
      submitForm(formName) {
        // 提交表单
        this.helpGoldSubmit(this.submitData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    },
    activated() {
      this.getHelpGold(this.searchLogData);
    },
    components: {}
  };

</script>
<style lang="scss" scoped>
  .help-tips {
    color: #09affe;
    font-size: 30px;
    margin: 20px 0;
    line-height: 1.5;
    background: url(./images/discount-bg.png) center top no-repeat;
    min-height: 500px;
    text-align: center;
    .help-tips-text{
      display: block;
      padding-top: 30%;
    }
  }

  .discount-form {
    // margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
.tipsDiv{
    font-size: 15px;
    line-height: 30px;
    width: 800px;
    color: #d7b26c;
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
