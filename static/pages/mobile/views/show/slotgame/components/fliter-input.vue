<template>
  <div class="fliter-input">
    <!-- <a @click="doClick" class="back-link">
      <i class="iconay ay-zuojiantouxiangzuoxianxing"></i>
    </a> -->
    <div class="input-box">
      <input v-model="inputVal" type="text" placeholder="查找游戏">
      <i class="iconay ay-sousuo"></i>
    </div>
    <div class="filter-btn1" @click="showbox()">
      <span>筛选</span>
      <i class="iconay ay-shaixuan1"></i>
    </div>
    <!-- <a href="javascript:;" v-else class="iconay ay-shaixuan1"></a> -->
  </div>
</template>
<script>
  import vFilter from "./filter"
  export default {
    data() {
      return {
        inputVal: '',
        inputData: [],
        showList:false,
      }
    },
    methods: {
      showbox(){
        this.$bus.$emit('showFilter');
      },
      doClick(){
        this.$router.back();
      }
    },
    props: {
      value: String
    },
    created(){
      // this.getChoosen
    },
    watch: {
      inputVal(val) {
        this.$bus.$emit('searchByInput',this.inputVal);
      }
    },
    components:{vFilter,}
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .fliter-input {
    display: flex;
    @include  f(28px);
    align-items: center;
    justify-content: space-between;
    .back-link{
      position: relative;
      height: 100%;
      left:0;
      width:r(88);
      top:50%;
      transform:translateY(-50%);
      text-align: center;
      .iconay{
        @include f(44px);
        color: #ffffff;
      }
    }
    
    .input-box{
      position: relative;
      height:r(66);
      width: 75%;
      .ay-sousuo {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #ffffff;
         @include  f(36px);
      }
    }
    input {
      margin: 0;
      padding: 0 0 0 r(10);
      vertical-align: top;
      width: 90%;
      height:100%;
      background-color: #24232b;
      border: none;
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
      margin-left: r(50);
    }
    .icon-search {
      color: #ffffff;
      @include  f(54px);
      flex: 1;
      text-align: center;
      position: relative;
      float: right;
      right: r(20);
      top: r(-92);
    }
  }

</style>
