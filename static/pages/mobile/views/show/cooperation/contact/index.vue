<template>
  <div class="agent-contact-content">
    <p class="qq"><i class="iconay ay-QQ"></i><span>{{SETTING.qqAgent}}</span></p>
    <p class="qq"><i class="iconay ay-weixin"></i><span>{{SETTING.wechatAgent}}</span></p>
    <p class="qq"><i class="iconay ay-shouji1"></i><span>{{SETTING.telAgent}}</span></p>
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
       color: $cl6;
      @include f(48px);
      line-height: r(110);
      span{
        padding-left: 5%;       
      }
      .iconay{
        @include f(60px);   
      }
    }
  }
</style>
