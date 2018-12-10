<template>
  <div class="u-c-shows-log">
    <div class="u-c-box"> 
      <div class="wallet-menus">
          <a v-for="item in filterMenu" :class="{active:searchData.historyType==item.value}" class="u-c-router" :key="item.value" @click="searchData.historyType=item.value">
              <i class="iconay" :class="item.ico"></i>{{item.name}}
          </a>
      </div>
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

            <el-button :loading="loading" class='searchbtn' icon="el-icon-search" @click="search(1)">查询
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
        this.getLog(this.searchData).then(res => {
          // window.toast(res.message)
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
.u-c-shows-log{
  .u-c-box{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    // padding: 20px;
    // background-color: rgba(0, 0, 0, 0.7);
    // border: 1px solid #303030;
    // min-height: 400px;
    .wallet-menus{
        // width: 100%;
        // padding: 0 3%;
        // margin-bottom: 20px;
        margin-right: 20px;
        .u-c-router{
          background-color: rgba(0, 0, 0, 0.7);
          display: block;
          width: 140px;
          height: 60px;
          line-height: 60px;
          border: 1px solid #303030;
          font-size: 16px;
          color: #fff;
          padding-left: 30px;
          position: relative;
          cursor: pointer;
          &.active{
            background: #8d3e3c;
            background: -webkit-gradient(linear, left top, right top, from(#8d3e3c), to(#bb4e49));
            background: linear-gradient(to right, #8d3e3c 0%, #bb4e49 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49',GradientType=1 );
          }
          .iconay{
            font-size: 26px;
            color: #fff;
            padding-right: 5px;
            vertical-align: middle;
          }
        }
      }
    }
}

  .user-log {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #303030;
    padding: 20px;
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
.searchbtn{
  background: #8d3e3c;
  background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
  background: linear-gradient(to right,#8d3e3c,#bb4e49);
  border: 1px solid #8d3e3c;
  color: #fff;
}
</style>
