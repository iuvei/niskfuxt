<template>
<div>
  <header class="header-back">
    <a @click="doClick" class="back-link"><i class="iconfont icon-arrow_l"></i></a>
      <slot>
        {{$route.meta.headName||$route.meta.title}}
      </slot>
  </header>
  <div class="padding-top"></div>
  </div>
</template>
<script>
  export default {
    props: {
      back: {
        type: Function
      }
    },
    methods: {
      doClick(){
        if (this.back && typeof this.back == 'function') {
          this.back();
        } else {
          console.log('go-back')
          this.$router.go(-1);
          console.log('=-=-=-=-=-=')
        }
      }
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .padding-top{
    height:r(100);
    background:none;
  }
  .header-back{
    position: fixed;
    top:0;
    width:100%;
    z-index: 999;
    background:$herder-bg;
    color: $main-cl;
    height: r(100);
    text-align: center;
    line-height: r(100);
    @include  f(36px);
    .back-link{
      position: absolute;
      height: 100%;
      left:0;
      width:r(88);
      top:50%;
      transform:translateY(-50%);
      text-align: center;
    }
    .icon-arrow_l{
      @include f(44px)
    }
  }
</style>
