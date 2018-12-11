<template>

  <div class="user-log">
    <div class="log-info">
      <div class="form-box">

        <div class="inputbox">
          <DatePicker v-model="searchData.starttime" type="datetime" placeholder="选择开始日期" :picker-options="pickerOptions"
            format="yyyy-MM-dd HH:mm" :default-value="new Date()">
          </DatePicker>
        </div>

        <div class="inputbox">
          <DatePicker v-model="searchData.endtime" align="right" type="datetime" placeholder="选择结束日期" :picker-options="pickerOptions"
            format="yyyy-MM-dd HH:mm" :default-value="new Date()">
          </DatePicker>
        </div>

        <Button :loading="loading" type="warning" @click="search(1)">查询
        </Button>

      </div>
      <!-- 表格数据显示区域 -->
      <Table :data="pageContents" style="width: 100%" :columns="columns">
      </Table>
      <!-- 表格分页 -->
      <div v-if="pageContents.length>0" style="margin-top:10px;">
        <Page @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchData.pageIndex"
          :page-sizes="[10, 20, 50, 100]" :page-size="searchData.size" layout="total, sizes, prev, pager, next" :total="searchData.totalRecords">
        </Page>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    userLog
  } from '@@/mixins/logs/userLog'
  export default {
    mixins: [userLog],
    data() {
      return {
        searchData: {
          // 记录类型
          historyType: 'deputyRecords',
          // 开始时间
          starttime: '',
          // 结束时间
          endtime: '',
          // 页数
          pageIndex: 1,
          // 每页显示条数
          size: 10,
          // 总记录(非必须提交)
          totalRecords: 0
        },
        loading: false,
        columns: [{
              title: '编号',
              key: 'referenceNo'
            },
            {
              title: '账户',
              key: 'loginname'
            },
            {
              title: '类型',
              key: 'typeString'
            },
            {
              title: '存款金额',
              key: 'remit'
            },
            {
              title: '账户余额',
              key: 'newCredit'
            },
            {
              title: '执行时间',
              key: 'tempCreateTime'
            }
          ],
        // 日期控件配置
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      };
    },
    methods: {
      handleSizeChange(val) {
        // 每页条数触发函数
        this.searchData.size = val;
        this.search();
      },
      handleCurrentChange(val) {
        // 翻页触发函数
        this.searchData.pageIndex = val;
        this.search(val);
      },
      search(index) {
        // 查询按钮触发函数
        if (!isNaN(index)) {
          this.searchData.pageIndex = index;
        }
        this.getLog(this.searchData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          window.toast(err.message)
        })
      }
    }
  };

</script>
<style lang="scss" scoped>
  .user-log {
    .form-box {
      margin-bottom:10px;
      .row-group {
        padding: 14px 0 5px 0;
      }

      .inputbox {
        display: inline-block;
        margin: 5px 16px 5px 0;
      }

    }

  }

</style>
