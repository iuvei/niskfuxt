<template>
  <div class="search-form">
    <div class="form-warp">
      <input-inline label="开始日期：">
        <input v-model="startTime" class="date_picker_value" type="date"
               placeholder="请选择">
      </input-inline>
      <input-inline label="结束日期：">
        <input v-model="endTime" class="date_picker_value" type="date"
               placeholder="请选择">
      </input-inline>
      <slot name="form"></slot>
    </div>
    <div class="search-data">
      <slot></slot>
    </div>
    <div class="search-footer">
      <vButton @click="submit">查询</vButton>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        startTime: "",
        endTime: ""
      }
    },
    props: {
      title: String,
      data: {
        type: Object
      }
    },
    created() {
      this.endTime = this.data.endtime || new Date().addDay(1).format();
      this.startTime = this.data.starttime || new Date().addDay(-30).format();
    },
    methods: {
      submit() {
        if (this.startTime == "")
          return window.toast("请选择开始时间");
        if (this.endTime == "")
          return window.toast("请选择结束时间");
        this.data.starttime = this.startTime;
        this.data.endtime = this.endTime;
        this.$emit("search");
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .search-form {
    .form-warp {
      padding: r(50) r(90) r(30) r(60);
    }
    .search-data {
      padding: 0 r(25) 0 r(21);
      .title {
        color: #fff;
        @include  f(28px);
      }
    }
    .search-footer {
      margin-top: r(30);
      padding-top: r(35);
      border-top: 1px solid #923676;
    }
  }
</style>
