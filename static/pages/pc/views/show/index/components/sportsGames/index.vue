<template>
  <div class="col-5-3 index-item index-sports">
    <div class="index-img">
      <img src="./images/index-sports.png">
    </div>
    <div class="cover-bg"></div>
    <div class="index-text">
      <h4>
        <span></span>澳盈体育</h4>
      <p>更全面的投注玩法，更简洁的投注体验，覆盖世界各地体育赛事。</p>
      <router-link class="btn-play" :to="{name:'sportNew'}">立即投注</router-link>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>
  /*index-sports*/

  .index-item {
    .index-text {
        position: absolute;
top: 0;
padding: 15px 30px 10px 40px;
      h4 {
        color: #f7e6b0;
        margin-bottom: 5px;
        position: relative;
        font-size: 16px;
        font-weight: bold;
        span {
          background-image: url(./images/icon-index-1.png);
          width: 19px;
          height: 19px;
          display: inline-block;
          left: -25px;
          top: -1px;
          position: absolute;
        }
      }
      p {
        line-height: 20px;
        letter-spacing: .5px;
        color: #fff;
      }
      .btn-play {
        display: none;
        padding: 0 20px;
        text-align: center;
        border-radius: 20px;
        box-sizing: border-box;
        color: #fff;
        background: linear-gradient(#c74546, #a92c2d);
        background-color: #b83537 \9;
        opacity: 1;
        -o-transition: all .3s linear;
        -webkit-transition: all .3s linear;
        -ms-transition: all .3s linear;
        -moz-transition: all .3s linear;
        transition: all .3s linear;
        z-index: 100;
        margin-top: 6px;
        width: 100px;
        height: 30px;
        line-height: 30px;
      }
    }
    &:hover .index-text .btn-play {
      display: inline-block;
    }
    .index-text .btn-play:hover {
      background: -webkit-linear-gradient(#a41c1d, #7c1212);
      background: -o-linear-gradient(#a41c1d, #7c1212);
      background: -moz-linear-gradient(#a41c1d, #7c1212);
      background: linear-gradient(#a41c1d, #7c1212);
      background-color: #7c1212 \9;
    }
    .cover-bg {
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 300px;
      position: absolute;
      top: 0;
      border-radius: 8px;
      overflow: hidden;
    }
    .index-img {
      height: 300px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
    .col-5-3 {
      width: 60%;
      position: relative;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      float: left;
    }
    .index-sports {
      width: 360px;
      padding: 0;
      margin-right: 15px;
      border-radius: 8px;
      overflow: hidden;
      background: url(./images/index-shadow-02.png) center bottom no-repeat;
      &:hover .index-img>img {
        transform: scale(1.2, 1.2);
        -o-transition: all .1s linear;
        -webkit-transition: all .1s linear;
        -ms-transition: all .1s linear;
        -moz-transition: all .1s linear;
        transition: all .1s linear;
      }
      .index-text {
        width: 70%;
      }
    }
</style>
