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
      <Button :loading="loading" type="warning" icon="el-icon-search" @click="search(1)">查询</Button>
    </div>
    <!-- 表格数据显示区域 -->
    <Table :data="pageContents" style="width: 100%" :columns="column"></Table>
    <!-- 表格分页 -->
    <div v-if="totalPages>1" style="margin-top:10px;">
      <Page
        @on-page-size-change="handleSizeChange"
        @on-change="handleCurrentChange"
        :current-page="formData.pageIndex"
        :page-size-opts="[10, 20, 50, 100]"
        :page-size="formData.size"
        :total="totalRecords"
        show-sizer
      ></Page>
    </div>
  </div>
</template>
<script>
import { creditLog } from "@@/mixins/agent/creditLog";
export default {
  layout: "admin", // 布局文件
  mixins: [creditLog],
  data() {
    return {
      loading: false,
      column: [
        {
          title: "序号",
          type: "index"
        },
        {
          title: "操作类型",
          key: "type"
        },
        {
          title: "额度变量",
          key: "remit"
        },
        {
          title: "改变前额度",
          key: "credit"
        },
        {
          title: "改变后额度",
          key: "newCredit"
        },
        { title: "加入时间", key: "tempCreateTime" }
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
