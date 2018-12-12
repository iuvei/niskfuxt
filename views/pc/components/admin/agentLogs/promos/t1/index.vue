<template>
  <div class="discount-content form-rowbox memberlist">
    <div class="form-box agent-credit">
      <div class="inputbox">
        <DatePicker
          v-model="formData.starttime"
          type="datetime"
          placeholder="选择开始日期"
          format="yyyy-MM-dd HH:mm"
          :default-value="new Date()"
        ></DatePicker>
      </div>

      <div class="inputbox">
        <DatePicker
          v-model="formData.endtime"
          align="right"
          type="datetime"
          placeholder="选择结束日期"
          format="yyyy-MM-dd HH:mm"
          :default-value="new Date()"
        ></DatePicker>
      </div>
      <div class="inputbox">
        <Input v-model="formData.loginname" placeholder="会员用户名"></Input>
      </div>
      <Button :loading="loading" type="warning" icon="el-icon-search" @click="search(1)">查询</Button>
    </div>
    <!-- 表格数据显示区域 -->
    <Table :data="pageContents" style="width: 100%">
      <TableColumn label="序号" type="index"></TableColumn>
      <TableColumn prop="loginname" label="会员帐号"></TableColumn>
      <TableColumn label="状态">
        <template slot-scope="scope">
          <div v-if="scope.row.flag === 0">启用</div>
          <div v-else>关闭</div>
        </template>
      </TableColumn>
      <TableColumn prop="credit" label="账户额度"></TableColumn>
      <TableColumn label="开户日期">
        <template slot-scope="scope">{{scope.row.tempCreateTime|Date}}</template>
      </TableColumn>
      <TableColumn prop="howToKnow" label="来源网址"></TableColumn>
    </Table>
    <!-- 表格分页 -->
    <div v-if="pageContents.length>0">
      <Page
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="formData.pageIndex"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="formData.size"
        layout="total, sizes, prev, pager, next"
        :total="formData.totalRecords"
      ></Page>
    </div>
  </div>
</template>
<script>
import { memberBill } from "@@/mixins/agent/memberBill";
export default {
  layout: "admin", // 布局文件
  mixins: [memberBill],
  data() {
    return {
      loading: false,
      formData: {
        loginname: "",
        tail: "",
        total: 0,
        starttime: "",
        endtime: "",
        proposalType: "1",
        size: 10,
        pageIndex: 1,
        totalRecords: 0
      },
      column: [
        {
          title: "序号",
          type: "index"
        },
        {
          title: "会员账号",
          key: "loginname"
        },
        {
          title: "状态",
          key: "flag"
        },
        {
          title: "账户额度",
          key: "credit"
        },
        {
          title: "开户地址",
          key: "tempCreateTime"
        },
        { title: "来源网址", key: "howToKnow" }
      ]
    };
  },
  methods: {
    search(index) {
      if (!isNaN(index)) {
        this.formData.pageIndex = index;
      }
      this.loading = true;
      this.getDatas(this.formData)
        .then(res => {
          window.toast(res.message);
          this.loading = false;
        })
        .catch(err => {
          window.toast(err.message);
          this.loading = false;
        });
    },
    handleSizeChange(val) {
      // 每页条数触发函数
      this.formData.size = val;
      this.search();
    },
    handleCurrentChange(val) {
      // 翻页触发函数
      this.formData.pageIndex = val;
      this.search(val);
    }
  },
  created() {
    // this.formData.starttime = new Date().addDay(-30).format();
    // this.formData.endtime = new Date().format();
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.form-box {
  .row-group {
    padding: 14px 0 5px 0;
  }
  .inputbox {
    display: inline-block;
    margin: 5px 16px 5px 0;
  }
}
</style>
