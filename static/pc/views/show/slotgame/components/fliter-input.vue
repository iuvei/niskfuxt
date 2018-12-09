<template>
  <div class="fliter-input">
    <input  v-model="inputVal" placeholder="通过游戏名搜索" type="text">
    <span class="iconfont icon-sousuo"></span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputVal: '',
        inputData: [],
        showList:false,
      }
    },
    watch:{
      inputVal(val){
        this.search(val);
      }
    },
    methods: {
      search() {
        // if (this.inputVal == "") return;//没有数据不查询
        // 调用列表组件的查询事件
        this.$bus.$emit('searchByInput',this.inputVal);
      },
    }
  }
</script>
<style lang="scss">
  .fliter-input {
    display: inline-block;
    padding: 0 20px;
    border-radius: 15px;
    background: #d7d7d7;
    font-size: 15px;
    color: #999999;
    width:220px;
    padding-right: 40px;
    position: relative;
    span {
      cursor: pointer;
      position: absolute;
      width: 40px;
      height: 30px;
      top: 0;
      right: 0;
      text-align: center;
      font-size: 25px;
    }
    input {
      display: block;
      width: 170px;
      background: transparent;
      outline: none;
      line-height: normal;
      height: 30px;

    }
  }
</style>
