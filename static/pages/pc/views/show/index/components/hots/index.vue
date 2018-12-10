<template>
  <div class="index-hots content">
    <p class="title">热门游戏</p>
    <div class="items">
      <a class="item" :href="Games.href_ag">
        <img src="./images/game1.jpg">
      </a>
      <a class="item" :href="Games.href_bbin">
        <img src="./images/game2.jpg">
      </a>
      <a class="item" :href="Games.href_sunbet">
        <img src="./images/game3.png">
      </a>
      <a class="item" :href="Games.href_og">
        <img src="./images/game5.jpg">
      </a>
      <a class="item" :href="Games.href_sb_pc">
        <img src="./images/game4.jpg">
      </a>
      <!-- <a class="item" :href="Games.href_pbsport">
        <img src="./images/game6.jpg">
      </a> -->
    </div>
  </div>
</template>
<script>
  import { Games } from "@/assets/data"

    export default {
        name: "",
        data() {
            return {
              Games
            }
        }
    }
</script>
<style spcoed lang="scss">
.index-hots{
  background:#373738;
    padding:20px;
    border-radius:0 0 10px 10px;
  .title{
    color:#ffdc98;
    font-size:24px;
    // padding:20px;
  }
  .items{
    display:flex;
    justify-content: flex-start;
    z-index:99;
    flex-wrap: wrap;
    width:100%;
    .item{
      width:33.33%;
      display: inline-block;
      justify-content: center;
      align-items: center;
      border-radius:10px;
      overflow:hidden;
      text-align:center;
      margin:10px 0;
      transition:all 0.3s;
      &:hover{
        transform:scale(1.02);
      }
      img{
        display:inline-block;
        border-radius:10px;
        display:block;
        width:380px;
        height:190px;
      }
    }
  }
}
  
</style>
