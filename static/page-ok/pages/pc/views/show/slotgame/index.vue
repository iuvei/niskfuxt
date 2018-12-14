<template>
  <div class="slots">
    <banner></banner>
    <div class="line"></div>
    <winningList></winningList>
    <div class="slotBox">
      <filterInput></filterInput>
      <dataList></dataList>
    </div>
  </div>
</template>
<script>
  import winningList from './components/winning-list'
  import filterInput from "./components/filter-input"
  import dataList from "./components/games"
  import banner from "./components/banner"
  import {
    getAllGames
  } from "@/api/show"
  import {
    queryGameStatus
  } from "@/api/user"
  export default {
    data() {
      return {
        showloadding: false, //加载中... 相反的 false=显示
        showNoData: false, //是否显示空数据
        allGames: [], //所有的数据
        fillterData: [], //过滤后 的数据
        filter: { //过滤条件
          category: '', //老虎机平台类型
          type: '', //老虎机类型 :经典,电动吃角子
          line: '', // 老虎机线性类型
          subType: '', // 第二种类型类型
          tag: '' //热门 最新等
        },
        statusData: []
      };
    },
    components: {
      winningList,
      dataList,
      banner,
      filterInput,
    },
    methods: {

    },
    watch: {
      'this.$route'(val){
      }
    },
    computed: {

    },
    created() {
    },
  };

</script>
<style lang='scss' scoped>
  .slots {
    background: #191919;
    .line{
      background: url('./images/line.png') no-repeat;
      background-position: center;
      background: cover;
      height: 20px;
      width: 100%;
      margin-bottom: 20px;
    }
    .slotBox{
      width: 1200px;
      margin: 10px auto 0;
      background: #141414;
      min-height: 800px;
    }
  }

</style>
