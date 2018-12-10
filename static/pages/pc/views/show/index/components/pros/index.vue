<template>
  <div class="index-pros content">
    <p class="title">资讯优惠</p>
    <div class="box">
      <div class="pros">
        <div class="p-items">
          <p class="p-title">客户端下载 ></p>
          <img class="p-img" src="./images/pro1.jpg">
        </div>
        <div class="p-items">
          <p class="p-title">优惠活动 ></p>
          <img class="p-img" src="./images/pro2.jpg">
        </div>
        <div class="p-items">
          <p class="p-title">VIP俱乐部 ></p>
          <img class="p-img" src="./images/pro3.jpg">
        </div>
      </div>
      <div class="ads">
        <div class="a-item">
          <img src="./images/ad1.jpg">
        </div>
        <div class="a-item">
          <img src="./images/ad2.jpg">
        </div>
      </div>
    </div>
    <jackpot class="jackpot"></jackpot>
  </div>
</template>
<script>
  import jackpot from 'pc/components/jackpot'
  export default {
    mixins:[jackpot],
    name: "",
    data() {
      return {}
    },
    components: {
      jackpot
    }
  }

</script>
<style spcoed lang="scss">
  .index-pros {
    margin: 60px auto;
    background: #373738;
    padding: 20px;
    border-radius: 10px;
    position:relative;
    .title {
      color: #ffdc98;
      font-size: 24px;
      margin-bottom: 10px; // padding:20px;
    }
    .box {
      display: flex;
      justify-content: space-between;
      .pros {
        display: flex;
        justify-content: space-between;
        .p-items {
          margin: 0 4px;
          text-align: center;
          background: #000;
          position: relative;
          width: 280px;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.02);
          }
          .p-title {
            background: rgb(255, 236, 183);
            background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
            background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
            background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
            text-align: center;
            border-radius: 6px;
            padding: 10px;
            font-size: 18px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
          .p-img {
            display: block;
            width: 100%;
            height: 100%;

          }
        }
      }
      .ads {
        width: 300px;
        text-align: center;
        display: flex;
        flex-direction: column;
        .a-item {
          display: block;
          margin-bottom: 10px;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.02);
          }
          &:last-child {
            margin-bottom: 0 !important;
          }
          img {
            border-radius: 8px;
            overflow: hidden;
          }
        }
      }
    }
    .award-money{
      position: absolute;
      top: 168px;
      right: 62px;
      font-size: 28px;
    }
  }

</style>
