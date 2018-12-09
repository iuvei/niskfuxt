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
      <Table :data="listData" border style="width: 100%">
        <TableColumn prop="pno" label="编号" align="center" width="230">
        </TableColumn>
        <TableColumn prop="promo" label="金额" align="center" width="100">
        </TableColumn>
        <TableColumn prop="tempCreateTime" align="center" width="180" label="发放时间">
        </TableColumn>
        <TableColumn prop="remark" align="center" label="备注">
        </TableColumn>
        <TableColumn label="操作" width="100">
          <template slot-scope="scope">
            <Button @click="handleClick(scope.row)" size="small" type="primary" v-if="scope.row.status=='0'">可领取</Button>
            <Button size="small" type="info" v-else disabled>已领取</Button>
          </template>
        </TableColumn>
      </Table>
      <!-- 表格分页 -->
      <div v-if="listData.length>0">
        <Pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchLogData.pageIndex"
          :page-sizes="[10, 20, 50, 100]" :page-size="searchLogData.size" layout="total, sizes, prev, pager, next" :total="searchLogData.totalRecords">
        </Pagination>
      </div>
      <!--领取救援金的确认框-->
      <Dialog title="领取救援金" :visible.sync="dialogVisible" width="380px">
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
          <Button @click="dialogVisible = false">取 消</Button>
          <Button class="submitbtn" @click="submitForm">确 定</Button>
        </span>
      </Dialog>
      <div class="tipsDiv">
          <p class="tipsTitle">温馨提示：</p>
          <p class="tipsBox">救援金有效时间为{{expriedDay}}天 (从派发当天开始计算)规定时间内未领取将自动取消。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    slot
  } from "@@/assets/data/games.json"
  import {
    helpGold
  } from '@@/controls/discount/helpGold'
  export default {
    mixins: [helpGold],
    data() {
      return {
        platformData:slot, // 游戏平台
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
    mounted() {
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
    //background: url(./images/discount-bg.png) center top no-repeat;
    min-height: 500px;
    text-align: center;
    .help-tips-text{
      display: block;
      padding-top: 30%;
    }
  }

  .discount-form {
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
  }
</style>
