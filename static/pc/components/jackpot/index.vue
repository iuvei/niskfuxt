<template>
  <div class="award-money">
    <div class="money-view">
      <span v-for="(num,i) in total" :key="i" :class="toClass(num)">{{num}}</span>
    </div>
  </div>
</template>
<script>
  import {jackpot} from '@/controls/shows/jackpot'
  export default {
    mixins:[jackpot],
    data() {
      return {
      };
    },

    created() {
      this.getjackpot('cny').then(res=>{
        console.log(res)
      }).catch(err=>[
        console.log(err)
      ])
    }
  }
</script>
<style>
  .award .award-money {
    width: 318px;
    text-align: center;
    color: #ed7e12;
    float: left;
  }

  .award .award-money h1 {
    line-height: 50px;
    font-size: 21px;
  }

  .award .award-money p {
    font-size: 17px;
    color: #5e5e5e;
    margin: 0 0 22px 0;
  }

  .award .award-money .money-view {
    font-size: 38px;;
  }
</style>
