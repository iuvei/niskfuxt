<template>
  <div class="page_content_wrap memberbill">
    <div class="layout_form layout_form04">
      <search-form @search="search" :data="searchData">
        <div class="form-group-inline" slot="form">
          <span class="form-label">账务类型：</span>
          <div class="form-control">
            <select v-model="searchData.proposalType" class="without_style with_arrow">
              <option v-for="item in type" :value="item.value" :key="item.value">{{item.name}}</option>
            </select>
          </div>
        </div>
      </search-form>

      <winlose :searchData='searchData' ref="-1" v-show="searchData.proposalType==-1"></winlose>
      <recharge   v-for="item in type.slice(1)" :searchData="searchData" :key="item.value"
                :ref="item.value" v-show="searchData.proposalType==item.value">
      </recharge>
    </div>
  </div>
</template>
<script>
  import {getAgentQueryType, searchagprofitData, searchsubuserProposalData} from "@/api/agent";
  import tableData from "mobile/components/table-data"
  import searchForm from "mobile/components/search-form"
  import winlose from './components/win-lose';//会员账务  》  输赢
  import recharge from './components/recharge';//会员账务  》  公共页  提款 存款 反水 优惠
  export default {
    data() {
      return {
        type: [{name: "输赢", value: "-1"}],
        searchData: {
          loginname: "",
          tail: "",
          starttime: "",
          endtime: "",
          proposalType: "-1",
          size: 10,
          pageIndex: 1
        }
      }
    },
    methods: {
      search() {
        this.searchData.pageIndex=1
        if (!Array.isArray(this.$refs[this.searchData.proposalType]) ) {
          this.$refs[this.searchData.proposalType].search()
        }
        else {
          this.$refs[this.searchData.proposalType][0].search()
        }
      },
    },
    created() {
      // 读取账户类型
      getAgentQueryType().then(res => {
        if (res.success) {
          this.type.push(...res.data);
        } else {
          window.toast(res.message)
        }
      }).catch(err => {
        window.toast("类型加载失败")
      })
    },
    components: {
      tableData, searchForm, winlose, recharge
    }
  }
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
  .form_field {
      position: relative;
      height: r(42*2);
      line-height: r(42*2);
      border: 1px solid #ccc;
      padding: 0 r(12*2);
      border-radius: 50em;
      margin-bottom: r(16*2);
      background: #fff;
      .form_field_input {
        overflow: hidden;
        margin: 0 0 0 70px;
        height: 100%;
        white-space: nowrap;
        input,select,option {
          padding: 0;
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: none;
          @include f(28px);
          color: #333;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
      }
    }
    &.form_field_cap_code {
        // margin-right: r(110*2);
        .right_label {
          top: r(-4);
          right: r(6);
          height: 100%;
          position: absolute;
          img {
            vertical-align: middle;
            border-radius: 20em;
            height: r(40*2);
            width:auto;
        }
      }
    }
    &.with_right_label {
      position: relative;
    }

  }
  .memberbill{
    margin:0 r(10);
    .total{
      line-height:2;
      color: $cl7;
    }
  }
</style>