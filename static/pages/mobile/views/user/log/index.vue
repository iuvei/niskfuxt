<template>
  <div class="user-log">
    <div class="form-box">
      <input-inline label="记录类型" select="1">
        <select v-model="searchData.historyType">
          <option v-for="item in filterMenu" :value="item.value" :key="item.value">{{item.name}}</option>
        </select>
      </input-inline>
      <input-inline v-show="searchData.historyType=='friend'" label="推荐类型" select="1">
        <select v-model="searchData.friendtype">
          <option value="0">推荐注册成功玩家</option>
          <option value="1">推荐奖金收入</option>
          <option value="2">推荐奖金支出</option>
        </select>
      </input-inline>
      <input-inline label="开始时间">
        <input type="date" v-model="searchData.starttime" placeholder="选择开始日期">
      </input-inline>
      <input-inline label="结束时间" > 
        <input type="date" v-model="searchData.endtime" placeholder="选择结束日期">
      </input-inline>
    </div>
    <v-button @click="search(1)">查询</v-button>

    <table-data :thead="thead" @search="search" :data="tableDatas">
      <tbody v-for="(item,i) in pageContents||[]" :key="i">
        <tr @click="curItem=i">
          <td v-for="one in thead" :key="one.value">
            {{!one.filter ? item[one.value] : one.filter(item[one.value], item)}}
          </td>
        </tr>
        <tr v-if='even.length>0' v-show="curItem==i">
          <td :colspan="thead.length">
            <div v-for="twig in even" class="grid-item" :key="twig.value">
              <label>{{twig.name}}</label>
              {{!twig.filter ? item[twig.value] : twig.filter(item[twig.value], item)}}
            </div>
          </td>
        </tr>
      </tbody>
    </table-data>
  </div>
</template>
<script>
  import {
    queryHistory
  } from "@/api/user";
  import tableData from "mobile/components/table-data"
  import {
    userLog
  } from '@/controls/logs/userLog'
  export default {
    mixins: [userLog],
    data() {
      return {
        thead: [], //数据的标题头
        even: [], //数据行 点击显示的数据
        curItem: -1,
        tableDatas:{}
      };
    },
    methods: {
      search(index) {
        // 查询按钮触发函数
        if (!isNaN(index)) {
          this.searchData.pageIndex = index;
        }
        this.getLog(this.searchData).then(res => {
          // window.toast(res.message)
          this.tableDatas=res.data
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
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
    },
    components: {
      tableData
    }
  };

</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .user-log {
    @include f(32px);
    .form-box {
      padding: r(30) r(30) 0;
    }
    .grid-item {
      text-align: left;
      label {
        display: inline-block;
        min-width: 5em;
        text-align: right;
      }
    }
  }

</style>
