<template>
  <div class="index-menus content">
    <router-link tag="a" to="/real" class="item">
      <img src="./images/ico2.png">
      <div class="text">
        <p class="zh">真人娱乐</p>
        <p class="en">LIVE</p>
      </div>
    </router-link>
    <router-link tag="a" to="/sport" class="item">
      <img src="./images/ico3.png">
      <div class="text">
        <p class="zh">体育赛事</p>
        <p class="en">SPORT</p>
      </div>
    </router-link>
    <router-link tag="a" to="/fish" class="item">
      <img src="./images/ico1.png">
      <div class="text">
        <p class="zh">捕鱼游戏</p>
        <p class="en">FISHING</p>
      </div>
    </router-link>
    <router-link tag="a" to="/slotgame/PT" class="item">
      <img src="./images/ico4.png">
      <div class="text">
        <p class="zh">电子游艺</p>
        <p class="en">GAME</p>
      </div>
    </router-link>
  </div>

</template>
<script>
    export default {
        name: "",
        data() {
            return {
            }
        }
    }
</script>
<style spcoed lang="scss">
  .index-menus{
    display:flex;
    justify-content: flex-start;
    background:#373738;
    border-radius:10px 10px 0 0 ;
    position: relative;
    margin-top: -80px;
    z-index:9;
    .item{
      background: rgb(255, 236, 183);
      background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
      background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
      background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
      margin:20px;
      border-radius:10px;
      height:80px;
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      transition:all 0.3s;
      &:hover{
        transform:scale(1.02);
      }
      .text{
        margin-left:30px;
        line-height:1.3;
        .zh{
          font-size:24px;
        }
        .en{
          font-size:18px;
        }
      }
    }
  }
</style>
