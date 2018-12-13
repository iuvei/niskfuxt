<template>

      <div class="user-log">
        <div class="log-info">
          <div class="form-box">

            <div class="inputbox">
              <DatePicker v-model="searchData.starttime" type="date" placeholder="选择开始日期" :picker-options="pickerOptions" format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" :default-value="new Date()">
              </DatePicker>
            </div>

            <div class="inputbox">
              <DatePicker v-model="searchData.endtime" align="right" type="date" placeholder="选择结束日期" :picker-options="pickerOptions"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd" :default-value="new Date()">
              </DatePicker>
            </div>

            <div class="inputbox">
              <!--查询推荐好友才会出现-->
              <Select clearable v-model="searchData.friendtype" placeholder="请选择查询类型">
                <Option v-for="item in friendsType" :key="item.value" :label="item.label" :value="item.value">
                </Option>
              </Select>

            </div>

            <Button :loading="loading" type="warning" icon="el-icon-search" @click="search(1)">查询
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
              show-sizer              
              >
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
          historyType: 'friend',
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
        friendsType : [{
            value: '',
            label: '所有'
          },{
            value: '0',
            label: '推荐注册成功玩家'
          },
          {
            value: '1',
            label: '推荐奖金收入'
          },
          {
            value: '2',
            label: '推荐奖金支出'
          }
        ],
        columns: [{
                title: '推荐账号',
                key: 'toplineuser'
              },
              {
                title: '被推荐账号',
                key: 'downlineuser'
              },
              {
                title: '类型',
                key: 'type'
              },
              {
                title: '金额',
                key: 'money'
              },
              {
                title: '详情',
                key: 'remark',
              },
              {
                title: '时间',
                key: 'createtime'
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
          // window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    }
  };

</script>
<style lang="scss" scoped>
  .user-log {
    .form-box {
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
