<template>
  <div class="game-main">
    <banner></banner>
    <slotJackpot></slotJackpot>
    <div class="main">
      <div class="content">
        <platform></platform>
        <tuijian v-show="isTuijian"></tuijian>
        <vFilter v-show="!isTuijian"></vFilter>
        <gamesPlatform v-show="!isTuijian"></gamesPlatform>
      </div>
    </div>
  </div>
</template>
<script>
  import banner from "./components/banner"
  import annunciate from 'pc/components/annunciate'
  import detail from "pc/views/show/index/components/detail"
  import recommandGames from "./components/recommand-games/"
  import filterInput from "./components/filter-input"
  import platform from "./components/platform"
  import dadaList from "./components/games"
  import vFilter from "./components/fliter"
  import tuijian from "./components/tuijian"
  import slotJackpot from "./components/slotJackpot"
  import gamesPlatform from "./components/gamesPlatform"
  import {getAllGames} from "@/api/show"
  import {queryGameStatus} from "@/api/user"
  export default {
    data() {
      return {
        showloadding: false,//加载中... 相反的 false=显示
        showNoData: false,//是否显示空数据
        allGames: [],//所有的数据
        fillterData: [], //过滤后 的数据
        filter: { //过滤条件
          category: '', //老虎机平台类型
          type: '',  //老虎机类型 :经典,电动吃角子
          line: '', // 老虎机线性类型
          subType: '', // 第二种类型类型
          tag: '' //热门 最新等
        },
        statusData: [],
        isTuijian:false
      };
    },
    components: {
      annunciate,banner,detail,platform,vFilter, dadaList,recommandGames,filterInput,tuijian,slotJackpot,gamesPlatform
    },
    methods: {
      
    },
    watch: {
      
    },
    computed: {
      
    },
    created() {
      this.$bus.$on('showTuijian',eventData=>{
        this.isTuijian = eventData
      })
    },
  };
</script>
<style lang='scss' spcoed>
  .game-main{
    overflow: visible;
    .main{
      background: url("./images/bg1.jpg") no-repeat center top #1e1e1e;
      width: 100%;
      padding: 15px 0 40px;
      position: relative;
      min-height: 590px;
      .content{
        width: 1220px;
        margin: 0 auto;
      }
    }
  }
</style>
