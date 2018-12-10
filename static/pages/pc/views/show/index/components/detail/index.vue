<template>
  <div class="col-2-1 index-item index-jackpot">
    <div class="index-img">
      <img src="./images/index-jackpot.png">
    </div>
    <div class="jackpot-text">
      <p>CNY</p>
      <jackpot class="jackpot-num runNum"></jackpot>
      <!-- <span class="jackpot-num runNum" id="test"><li style="width:50px;left:0px;top: -50px;height:500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width:50px;left:50px;top: 0px;height:500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width:50px;left:100px;top: -200px;height:500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 150px; top: -200px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 200px; top: -200px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 250px; top: -200px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 300px; top: -392.969px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 350px; top: -100px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 400px; top: -357.031px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li><li style="width: 50px; left: 450px; top: -357.031px; height: 500px;"><div style="height:50px;line-height:50px;">0</div><div style="height:50px;line-height:50px;">1</div><div style="height:50px;line-height:50px;">2</div><div style="height:50px;line-height:50px;">3</div><div style="height:50px;line-height:50px;">4</div><div style="height:50px;line-height:50px;">5</div><div style="height:50px;line-height:50px;">6</div><div style="height:50px;line-height:50px;">7</div><div style="height:50px;line-height:50px;">8</div><div style="height:50px;line-height:50px;">9</div></li></span><em class="rn1"></em><em class="rn2"></em><em class="rn3"></em> -->
    </div>
  </div>
</template>
<script>
  import winningList from "./components/winning-list/"
  import jackpot from "pc/components/jackpot/"
  export default {
    data() {
      return {}
    },
    components: {
      jackpot,
      winningList
    }
  }

</script>
<style lang="scss" scoped>
  .index-jackpot {
    background: url(./images/index-shadow-01.png) center bottom no-repeat;
    padding-right: 0;
    border-radius: 8px;
    .jackpot-text {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      text-align: center;
      padding-left: 10px;
    }
    h3 {
      font-size: 24px;
      text-transform: uppercase;
      margin: 20px;
    }
    p {
      text-align: left;
      padding-left: 80px;
      font-size: 18px;
      color: #fff;
    }
    .jackpot-num {
      font-size: 36px;
      margin: 10px auto;
      width: 80%;
      letter-spacing: 20px;
      position: relative;
      display: inherit;
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;
    }
    .runNum {
      margin: 10px auto;
      padding: 0;
      overflow: hidden;
      height: 50px;
      line-height: 50px;
      border-top: #CCCCCC solid 1px;
      border-bottom: #CCCCCC solid 1px;
      text-align: center;
      font-weight: bold;
      position: relative;
    }
  }

  .index-item {
    height: 310px;
    margin-bottom: 10px;
    position: relative;
    .index-img {
      height: 300px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }

  }

</style>
