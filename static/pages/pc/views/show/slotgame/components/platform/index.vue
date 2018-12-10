<template>
  <div class="tab">
    <a href='javascript:void(0);' :class="{active:actived==item.value}" v-for="item in tag" :key="item.value" @click="chooseType(item)">{{item.name}}</a>
    <div class="search" id="searchPart1" style="display: block;">
      <input class="search-input" id="searchname" placeholder="搜索游戏" type="text" v-model="inputVal"><!--  id="searchPart1"  -->
      <a href="javascript:void(0);" class="search-btn" @click="searchGameByName()"></a>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tag:[
          {
            name: "全部游戏",
            value: ""
          }, {
            name: "澳盈推荐",
            value: "TUIJIAN"
          }, {
            name: "最新游戏",
            value: "NEW"
          }, {
            name: "彩金池游戏",
            value: "AMA"
          },{
            name: "免费旋转",
            value: "CIR"
          },
        ],
        actived:'',
        inputVal:''
      }
    },
    methods: {
      chooseType(item){
        this.actived = item.value
        if (item.value == 'TUIJIAN') {
          this.$bus.$emit('showTuijian',true);
        }else{
          this.$bus.$emit('showTuijian',false);
        }
        this.$bus.$emit('serachGame', 'tag', item.value);
      },
      searchGameByName() {
        // if (this.inputVal == "") return;//没有数据不查询
        // 调用列表组件的查询事件
        this.$bus.$emit('searchByInput',this.inputVal);
      },
    },
    watch:{
      inputVal(val){
        this.searchGameByName(val);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .tab {
    height: 44px;
    border-bottom: 1px solid #323232;
    a {
      height: 43px;
      line-height: 40px;
      display: block;
      float: left;
      width: 84px;
      border-bottom: 2px solid transparent;
      text-align: center;
      font-size: 16px;
      color: #999;
      margin-right: 46px;
      &:hover, &.active {
        border-bottom: 2px solid #cc2944;
        color: #fff;
      }
    }
    .search {
      float: right;
      width: 240px;
      height: 34px;
      background: url("./images/search.png") no-repeat;
      position: relative;
    }
    .search-input {
      height: 100%;
      width: 190px;
      padding: 0 34px 0 16px;
      font-size: 14px;
      line-height: 34px;
      color: #999;
      background: none;
      border: 0;
      outline: 0;
    }
    a.search-btn {
      display: block;
      background: url("./images/icon-search.png") no-repeat;
      border-bottom: 0;
      width: 18px;
      height: 18px;
      position: absolute;
      top: 8px;
      right: 16px;
      margin: 0;
      &:hover {
        border-bottom: 0;
      }
    }
  }
</style>
