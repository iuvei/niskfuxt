<template>
  <div class="col-3-1 index-item index-bank">
    <p class="title">服务优势</p>
    <div class="timeText">
      <div class="des">
        <p class="desp1">存款</p>
        <p class="desp2">平均时间</p>
      </div>
      <div class="time">
        <span class="num">{{depositTime}}</span><span class="min">分钟</span>
      </div>
    </div>
    <div class="main">
      <div class="progress-bar" :style="{width:depositWidth}"></div>
    </div>
    <div class="timeText">
      <div class="des">
        <p class="desp1">提款</p>
        <p class="desp2">平均时间</p>
      </div>
      <div class="time">
        <span class="num">{{drawmoneyTime}}</span><span class="min">分钟</span>
      </div>
    </div>
    <div class="main">
    <div class="progress-bar1" :style="{width:drawmoneyWidth}"></div>
    </div>
    <div class="tipsItem">
      <p>*以上存款提款平均时间仅供参考。</p>
      <p>*银行维护期间除外，详情请咨询在线客服。</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        depositTime: null,
        drawmoneyTime: null,
        depositWidth: 8,
        drawmoneyWidth: 20
      }
    },
    methods:{
      // 随机数
      randomNum(){
        this.depositTime = (Math.random()*(3-0.1)+0.1).toFixed(1)*1;
        let num = this.depositTime
        let step = this.depositTime * 16 / 2000
        let start = 0
        let old = 0
        let $this = this
        let interval = setInterval(function(){
          start = start + step
          if (start >= num) {
            clearInterval(interval)
            interval = undefined
            start = num
          }
          let t = start.toFixed(1)*1
          if (t == old) {
            return
          }
          old = t
          $this.depositTime = old
        },16)
      },
      randomNum1(){
        this.drawmoneyTime = (Math.random()*(10-2)+2).toFixed(1)*1;
        let num = this.drawmoneyTime
        let step = this.drawmoneyTime * 16 / 2000
        let start = 0
        let old = 0
        let $this = this
        let interval = setInterval(function(){
          start = start + step
          if (start >= num) {
            clearInterval(interval)
            interval = undefined
            start = num
          }
          let t = start.toFixed(1)*1
          if (t == old) {
            return
          }
          old = t
          $this.drawmoneyTime = old
        },16)
      },
      randomNum2(){
        let num = this.depositWidth
        let step = this.depositWidth * 16 / 2000
        let start = 0
        let old = 0
        let $this = this
        let interval = setInterval(function(){
          start = start + step
          if (start >= num) {
            clearInterval(interval)
            interval = undefined
            start = num
          }
          let t = start.toFixed(1)*1
          if (t == old) {
            return
          }
          old = t
          $this.depositWidth = old+'%'
        },16)
      },
      randomNum3(){
        let num = this.drawmoneyWidth
        let step = this.drawmoneyWidth * 16 / 2000
        let start = 0
        let old = 0
        let $this = this
        let interval = setInterval(function(){
          start = start + step
          if (start >= num) {
            clearInterval(interval)
            interval = undefined
            start = num
          }
          let t = start.toFixed(1)*1
          if (t == old) {
            return
          }
          old = t
          $this.drawmoneyWidth = old+'%'
        },16)
      },
    },
    created() {
      this.randomNum()
      this.randomNum1()
      this.randomNum2()
      this.randomNum3()
    },
  }

</script>
<style scoped lang="scss">
  .index-item {
    height: 310px;
    margin-bottom: 10px;
    position: relative;
    .tipsItem{
      p{
        color: #fff;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  .col-3-1 {
    width: 33.333333%;
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    float: left;
  }
  .index-bank {
    background: #282828;
    height: 300px;
    border-radius: 8px;
    width: 234px;
    padding: 10px;
    .title{
      color: #f7e6b0;
      font-size: 18px;
      margin-bottom: 22px;
    }
    .timeText{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .des{
        flex: 1;
        text-align: left;
        .desp1{
          color: #fff;
          font-size: 18px;
        }
        .desp2{
          color: #fff;
          font-size: 14px;
          line-height: 30px;
        }
      }
      .time{
        flex: 1;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: center;
        .num{
          font-size: 22px;
          color: #fff;
        }
        .min{
          font-size: 14px;
          color: #fff;
          padding-top: 5px;
        }
      }
    }
    .main{
      background: rgba(255,255,255,.2);
      border-radius:  50px;
      margin-bottom: 20px;
        position: relative;
        height: 16px;
        width: 100%;
    }
    .progress-bar {
        height: 16px;
        width: 8%;
        background: #c83434;
        position: relative;
        border-radius:  50px 0 0 50px;
        margin-bottom: 20px;
        // &:before {
        //   content: '';
        //   position: absolute;
        //   height: 16px;
        //   left: 0;
        //   top: 0;
        //   opacity: 1;
        //   -webkit-transition: all 5s;
        //   transition: all 5s;
        //   border-radius: 50px 0 0 50px;
        // }
      }
      .progress-bar1 {
        height: 16px;
          width: 20%;
          background: #c83434;
        position: relative;
        border-radius:  50px 0 0 50px;
        margin-bottom: 20px;
        // &:before {
        //   content: '';
        //   position: absolute;
        //   height: 16px;
        //   left: 0;
        //   top: 0;
        //   width: 20%;
        //   background: #c83434;
        //   opacity: 1;
        //   -webkit-transition: all 5s;
        //   transition: all 5s;
        //   border-radius: 50px 0 0 50px;
        // }
      }
  }

  

</style>
