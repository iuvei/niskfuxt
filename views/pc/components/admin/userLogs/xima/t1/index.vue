<template>

  <div class="user-log">
    <div class="log-info">
      <div class="form-box">

        <div class="inputbox">
          <DatePicker v-model="formData.starttime" type="datetime" placeholder="选择开始日期" :picker-options="pickerOptions"
            format="yyyy-MM-dd HH:mm" :default-value="new Date()">
          </DatePicker>
        </div>

        <div class="inputbox">
          <DatePicker v-model="formData.endtime" align="right" type="datetime" placeholder="选择结束日期" :picker-options="pickerOptions"
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
        <Page 
        @on-page-size-change="handleSizeChange"
        @on-change="handleCurrentChange"
        :current-page="formData.pageIndex"
        :page-size-opts="[10, 20, 50, 100]"
        :page-size="formData.size"
        :total="totalRecords"
        show-sizer          >
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
        formData: {
          // 记录类型
          historyType: 'ximaDetail',
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
              title: 'pno',
              key: '编号'
            },
            {
              key: '有效投注额',
              title: 'validAmount'
            },
            {
              key: '结算金额',
              title: 'ximaAmount'
            },
            {
              title: 'ximaType',
              key: '洗码类型'
            },
            {
              title: 'rate',
              key: '洗码率'
            },
            {
              key: '状态',
              title: 'ximaStatus'
            },
            {
              title: 'statisticsTimeRange',
              key: '统计时间段',
              width: '200'
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
        this.formData.size = val;
        this.search();
      },
      handleCurrentChange(val) {
        // 翻页触发函数
        this.formData.pageIndex = val;
        this.search(val);
      },
      search(index) {
        // 查询按钮触发函数
        if (!isNaN(index)) {
          this.formData.pageIndex = index;
        }
        this.getLog(this.formData).then(res => {
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
