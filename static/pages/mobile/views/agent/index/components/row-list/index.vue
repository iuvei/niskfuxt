<template>
  <div :class="['grid-row',className]">
    <div v-for="(item,i) in data"
         :class="['grid-row-item',{active:i==index},item.className||'']"
         @click="clickMetod(item,i,$event)"
         :key="i">
      <i class="icontest" :class="item.ico"></i>
      <slot>{{item.name}}</slot>
      <i class="iconfont icon-arrow_r"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        index: 0
      }
    },
    methods: {
      clickMetod(item, i, e) {
        this.index = i;
        if (item.to) {
          this.$router.push(item.to);
        }
        else if (item.params) {
          this.$emit("roulist", item, i, e)
        }
      }
    },
    props: {
      data: {
        type: Array
      }
      ,
      className: {
        type: String
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .grid-row {
    background: #fff;
    .grid-row-item {
      &:last-child {
        border-bottom: none;
      }
      display: block;
      height: r(50*2);
      margin: 0 r(15);
      cursor: pointer;
      line-height: r(50*2);
      border-bottom: 1px solid #ddd;
      background-size: 7px 12px;
      color: #666;
      @include f(28px);
      .icon-arrow_r {
        float: right;
        margin-right: r(36);
      }
      .icontest{
        // @include f(50px);
        // margin: 0 auto;
        margin-right: 7px;
        display: inline-block; 
        width:r(52); 
        height:r(52); 
        white-space:nowrap; 
        letter-spacing: -1em; 
        text-indent: -99em; 
        color: transparent;
        vertical-align: middle;
        &:before{
          content: '\3000'
        }
      }
      .yongjin{
        background: url('./images/ico_agent_commission.png') no-repeat;
        background-size: 100% 100%;
      }
      .liebiao{
        background: url('./images/ico_agent_vip.png') no-repeat;
        background-size: 100% 100%;
      }
      .zhangwu{
        background: url('./images/ico_agent_acount.png') no-repeat;
        background-size: 100% 100%;
      }
      .edujilu{
        background: url('./images/ico_agent_record.png') no-repeat;
        background-size: 100% 100%;
      }
      .tikuan{
        background: url('./images/ico_agent_apply.png') no-repeat;
        background-size: 100% 100%;
      }
      .zhanneixin{
        background: url('./images/ico_agent_message.png') no-repeat;
        background-size: 100% 100%;
      }
      .yinhangka{
        background: url('./images/ico_agent_bankcard@2x.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
