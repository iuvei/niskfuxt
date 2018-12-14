<template>
  <div class="tutorials_right">
    <div class="tutorials_right_row">
      <p class="title">用户隐私</p>
      <p class="des">新九州娱乐城采用了128位SSL标准加密技术，其安全级别已经超越国内大多数银行，并配合专业技术人员精密设计的安全管理系统，所有客户资料都在极其安全机密的情况下处理，任何情况，新九州娱乐城都不会向任何第三方透露客户资料。</p>
    </div>
  </div>
</template>
<script>
  import {
    SETTING
  } from "@/assets/data"
  export default {
    name: "",
    data() {
      return {
        SETTING
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  .tutorials_right {
    background: #282828;
    border: #cdbe67 1px solid;
    width: 767px;
    color: #fff;
    padding: 20px;

    .tutorials_right_row {
      .title {
        font-size: 22px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
        color: #fcfc87;
        margin-bottom: 10px;
      }

      .des {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        line-height: 1.7;
        color: #dde0e9;
        margin-bottom: 30px;

        strong {
          font-weight: bold;
          color: #cce63b;
        }
      }
    }

  }

</style>
