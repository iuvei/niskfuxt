<template>
  <div class="page-by" v-show="mydata.totalPages>1">
    <div class="btn-warp">
      <div class="iconfont icon-fenyezuiqianye" @click="pageFun(1)">
      </div>
      <div class="iconfont icon-fenyeshangyiye" @click="prev()"></div>
      <div>
        第 <input type="text" readonly :value="mydata.pageNumber"> 页
      </div>
      <div class="iconfont icon-fenyexiayiye " @click="next()"></div>
      <div class="iconfont icon-last-blue" @click="pageFun(mydata.totalPages)"></div>
    </div>
    <div class="txt-info">
      共{{mydata.totalPages}}页,共{{mydata.totalRecords}}笔
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {pageNumber: 1}
    },
    computed: {
      mydata() {
        let mydateInit = {
          numberOfRecordsShown: 0, //当前页多少条
          pageNumber: 1,//当前页
          size: 0,  //页大小
          totalPages: 0,//总页数，
          totalRecords: 0//总记录条数,
        };
        Object.assign(mydateInit, this.data);
        this.pageNumber = mydateInit.pageNumber;
        return mydateInit;
      }
    },
    methods: {
      pageFun(index) {
        this.$emit("search", index);
      },
      prev() {
        if (this.mydata.pageNumber == 1) return;
        this.pageFun(--this.mydata.pageNumber);
      },
      next() {

        if (this.mydata.pageNumber >= this.mydata.totalPages) return
        this.pageFun(++this.mydata.pageNumber);
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .page-by {
    @include f(26px);
    margin: r(20) auto;
    .btn-warp {
      text-align: center;
      display: flex;
      height: r(47);
      line-height: r(47);
      justify-content: space-between;
      @include f(28px);
      white-space: nowrap;
      color: #ffffff;
      input {
        background: none;
        border: 1px solid #ffffff;
        width: r(63);
        height: r(47);
        text-align: center;
      }
    }
    .iconfont {
      color: #fff;
      @include f(36px);
    }
    .txt-info {
      text-align: right;
      line-height: r(70);
      color: #ffffff;
    }
  }
</style>
