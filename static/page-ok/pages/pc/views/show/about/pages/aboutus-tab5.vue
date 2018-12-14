<template>
  <div class="tutorials_right">
    <div class="tutorials_right_row">
      <p class="title">在线客服</p>
      <p class="des">7*24 在线客服<a style="color: #2293fc;" target="_blank" :href="SETTING.live800">【在线客服】</a></p>
      <p class="title">一般问题咨询</p>
      <p class="des">{{SETTING.email}}<a style="color: #2293fc;" :href="'mailto:'+SETTING.email">【发送邮件】</a></p>
      <p class="title">投诉与反馈</p>
      <p class="des">{{SETTING.SuggessEmail}}<a style="color: #2293fc;" :href="'mailto:'+SETTING.SuggessEmail">【发送邮件】</a></p>
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
