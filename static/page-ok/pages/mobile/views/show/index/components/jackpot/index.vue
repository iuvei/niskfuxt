<template>
  <div class="jackpot-num cfx">
    <div class="jackpot-nums"> 
      <span class="text">PT <br> 总奖池</span>
      <span class="num" :class="`num${toClass(num)}`" v-for="(num,i) in total" :key="i">{{num}}</span>
    </div>          
  </div>
</template>
<script>
import {jackpot} from '@/controls/shows/jackpot'
  export default {
    mixins:[jackpot],
    data() {
      return {};
    },
    created() {
      this.getjackpot('cny').then(res=>{
      }).catch(err=>[
        console.log(err)
      ])
    },
  }
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
	.jackpot-num{
		position: relative;
    // text-align: center;
    // padding: r(20);
	}
    .jackpot-nums{
      background: url(./images/image.png) no-repeat center center/100% 100%;
      width:100%;
      // text-align:center;
      padding: r(60) 12% r(60) 20.5%;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .text {
      text-align: center;
      position: absolute;
      left: r(50);
      top: 35%;
      @include f(28px);
    }
    .num{
      color: #fff;
      @include f(46px);
      &.numcomma ,&.numdot{
        color: #fff;
        margin: 0 !important;
        padding: 0 !important;

      }
    }
    @for $i from 0 through 9 {
      .num#{$i} {
        // background: url(./images/bg_no.png) no-repeat center center / 100% 100%;
        margin: 0 r(2);
        display:inline-block;
        background: #394D8B;
        width: r(50);
        text-align: center;
        border-radius: r(10);
        box-shadow: 0 0 1px #000;
        padding:  r(10) r(3);
        // padding: r(10) 0;
      }
    }
</style>
