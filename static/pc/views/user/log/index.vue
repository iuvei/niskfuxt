<template>
  <div class="u-c-shows">
    <div class="u-c-menu">
      <a :class="['u-c-router',{active:searchData.historyType==item.value}]" v-for="item in filterMenu" @click="searchData.historyType=item.value"
        :key="item.value">
        <span class="icos" :class="item.value"></span>{{item.name}}</a>
    </div>
    <div class="u-c-box">
      <div class="user-log">
        <div class="log-info">
          <div class="form-box">

            <div class="inputbox">
              <el-date-picker v-model="searchData.starttime" type="date" placeholder="选择开始日期" :picker-options="pickerOptions" format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" :default-value="new Date()">
              </el-date-picker>
            </div>

            <div class="inputbox">
              <el-date-picker v-model="searchData.endtime" align="right" type="date" placeholder="选择结束日期" :picker-options="pickerOptions"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd" :default-value="new Date()">
              </el-date-picker>
            </div>

            <div class="inputbox" v-show="searchData.historyType=='friend'">
              <!--查询推荐好友才会出现-->
              <el-select clearable v-model="searchData.friendtype" placeholder="请选择查询类型">
                <el-option v-for="item in friends" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>

            </div>

            <el-button :loading="loading" type="primary" icon="el-icon-search" @click="search(1)">查询
            </el-button>

          </div>
          <!-- 表格数据显示区域 -->
          <el-table :data="pageContents" style="width: 100%" v-loading="loading">

            <el-table-column v-for="col in thead" :key="col.value" :label="col.name" :width="col.width">
              <template slot-scope="scope">
                {{scope.row[col.value]}}
              </template>
            </el-table-column>

          </el-table>
          <!-- 表格分页 -->
          <div v-if="pageContents.length>0">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchData.pageIndex"
              :page-sizes="[10, 20, 50, 100]" :page-size="searchData.size" layout="total, sizes, prev, pager, next" :total="searchData.totalRecords">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    userLog
  } from '@/controls/logs/userLog'
  export default {
    mixins: [userLog],
    data() {
      return {
        loading: false,
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
        console.log('search')
        this.getLog(this.searchData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },

    },
    created() {
      // 初始化，默认查询一周的数据
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      this.searchData.starttime = date.format()
      this.searchData.endtime = (new Date()).format()
      if (this.$route.params.type) {
        // 可能根据路由直接查询某个表
        this.searchData.historyType = this.$route.params.type;
      }
    }
  };

</script>
<style lang="scss" scoped>
  .u-c-router {
    .icos {
      display: inline-block;
      height: 40px;
      width: 30px;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center center;
      &.deposit {
        background-image: url(./images/deposit.png)
      }
      &.withdraw {
        background-image: url(./images/withdraw.png)
      }
      &.transfer {
        background-image: url(./images/transfer.png)
      }
      &.concessionReccords {
        background-image: url(./images/concessionReccords.png)
      }
      &.couponRecords {
        background-image: url(./images/couponRecords.png)
      }
      &.ximaDetail {
        background-image: url(./images/ximaDetail.png)
      }
      &.deputyRecords {
        background-image: url(./images/deputyRecords.png)
      }
      &.friend {
        background-image: url(./images/friend.png)
      }
    }
  }

  .user-log {
    .form-box {
      .row-group {
        padding: 14px 0 5px 0;
      }
      .inputbox {
        display: inline-block;
        margin: 5px 16px 5px 0;
        line-height: 32px;
        font-size: 12px !important;
        .label,
        label {
          line-height: 30px;
          font-size: 16px;
          float: left;
          font-weight: bold;
        }
        input,
        select,
        .input {
          display: inline-block;
          float: left;
          width: 158px !important;
          background: #fff;
          vertical-align: top !important;
          border: solid 1px #bfbfbf;
          height: 32px;
          font-size: 12px;
          color: #313131;
          border-radius: 4px;
          padding: 0 8px;
        }
      }
      .btn-box {
        padding: 15px 0 0 128px;
      }
      .btn {
        background: #ffecb7;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        padding: 3px 25px;
        border-radius: 3px;
        color: #fff;
        line-height: 24px;
        font-size: 14px;
        margin-top: 6px;
        transition: all .1s;
      }
    }

  }

  .u-c-router {
    padding: 0 15px !important;
  }

</style>
