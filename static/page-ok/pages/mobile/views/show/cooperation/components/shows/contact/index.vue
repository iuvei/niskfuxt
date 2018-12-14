<template>
  <div class="agent-contact-content">
    <p class="qq"><i class="iconbolin iconbolin-qq"></i><span>代理专员QQ:{{SETTING.qqAgent}}</span></p>
    <p class="qq"><span>期待与您共创双赢！</span></p>

  </div>
</template>
<script>
  import {SETTING} from "@/assets/data"

  export default {
    data() {
      return {SETTING};
    },
    props: {},
    methods: {},
    computed: {},
    created() {
    },
    components: {}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .agent-contact-content{
    padding: r(30);
    margin: r(30) auto;
    width: 96%;
    min-height: 25.9vh;
    .qq{
      color: #fff;
      @include f(44px);
      line-height: r(110);
      span{
        padding-left: 5%;
      }
      .iconyg{
        vertical-align: top;
      }
    }
  }
</style>
