<template>
  <div class="index-hots content">
    <p class="title">热门游戏</p>
    <div class="items">
      <a class="item" @click="open(Games.href_ag, 'AG', 900, 640, true)">
        <img src="./images/game1.jpg">
      </a>
      <a class="item" @click="open(Games.href_bbin, 'BBIN', 900, 640, true)">
        <img src="./images/game2.jpg">
      </a>
      <a class="item" @click="open(Games.href_sunbet, 'SUNBET', 900, 640, true)">
        <img src="./images/game3.png">
      </a>
      <a class="item" @click="open(Games.href_og, 'OG', 900, 640, true)">
        <img src="./images/game5.jpg">
      </a>
      <a class="item" @click="open(Games.href_sb_pc, 'SB', 900, 640, true)">
        <img src="./images/game4.jpg">
      </a>
      <a class="item" @click="open(Games.href_ug_pc, 'UG', 900, 640, true)">
        <img src="./images/game8.png">
      </a>
    </div>
  </div>
</template>
<script>
  import { Games } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {mapGetters} from 'vuex'

    export default {
        name: "",
        data() {
            return {
              Games
            }
        },
        computed: {
          ...mapGetters(["islogin"])
        },
        methods:{
          open(url, title, w, h, needLogin){
            if(needLogin){
              if(!this.islogin){
                window.toast('请先登录!')
                return
              }
            }
            openWindow(url, title, w, h)
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
      cursor:pointer;
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
