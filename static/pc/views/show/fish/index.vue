<template>
  <div class="fish-container">
    <div class="fish-content">
      <div>
        <div class="set1-bubbles" style="width: 126px;position: relative;float: left;">
          <span class="b1"></span>
          <span class="b2"></span>
          <span class="b3"></span>
        </div>
        <div class="set1-bubbles" style="width: 126px;position: relative;float: right;">
          <span class="b1"></span>
          <span class="b2"></span>
          <span class="b3"></span>
        </div>
      </div>
      <div class="pool content" style="position: relative;height: 200px;">
        <span class="yellowfish"></span>
        <span class="fish2"></span>
      </div>
      <div class="fish-game-item cfx">
        <div class="fish-picpart fl">
            <img src="./images/ag-mainpic.png">
            <div class="fishgame-btns">
              <a class="game-btn play" @click="open(Games.href_fish, 'AG捕鱼', 900, 640, true, islogin)">开始游戏</a>
              <!--<a class="game-btn try" @click="open(Games.href_fish_pt_try, 'PT捕鱼', 900, 640)" >免费试玩</a>-->
            </div>
        </div>
        <div class="fish-infopart fr">
            <h1 class="title">
              <span class="title-icon">
                <img src="./images/ag-logo.png" width="172" >
              </span>
              AG捕鱼
            </h1>
            <p class="infomation">
              支持设备：手机/电脑网页端
            </p>
            <div class="fish-deputypic cfx">
              <img src="./images/ag-deputypic.png" width="291" >
            </div>
        </div>
        
      </div>
      <div class="fish-game-item cfx">
        <div class="fish-picpart fl">
            <img src="./images/mw-mainpic.png">
            <div class="fishgame-btns">
              <a class="game-btn play" @click="open(Games.href_fish_mw, 'AG捕鱼', 900, 640, true, islogin)">开始游戏</a>
              <!--<a class="game-btn try" @click="open(Games.href_fish_pt_try, 'PT捕鱼', 900, 640)" >免费试玩</a>-->
            </div>
        </div>
        <div class="fish-infopart fr">
            <h1 class="title">
              <span class="title-icon">
                <img src="./images/dmg-logo.png" width="172" >
              </span>
              大满贯捕鱼
            </h1>
            <p class="infomation">
              支持设备：手机/电脑网页端
            </p>
            <div class="fish-deputypic cfx">
              <img src="./images/mw-deputypic.png" width="291" >
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
  import { Games,Download } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import  {generateQRCode} from "@/api/show"
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        Games,Download
      };
    },
    props: {},
    methods: {
      open(url, title, w, h, needLogin){
        if(needLogin){
          if(this.islogin){
            openWindow(url, title, w, h)
          }else{
            toast('请先登录')
          }
        }
      },
      generateQRCode(url,size){
        return   generateQRCode(url,size)
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    created() {
    },
    components: {}
  };
</script>
<style lang="scss" scoped>
.fish-container{
  background: #011647 url(./images/fish-bg.jpg) no-repeat center top;
  min-height: 800px;
  .fish-content{
    width: 1145px;
    margin: 0 auto;
    padding: 435px 0 30px;
    // background:url(./images/paopao.gif);
  }
  .set1-bubbles{
    width: 80px;
    span{
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      animation-name: b1move;
      animation-duration: 3s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      &.b1{
        left: 15px;
        width: 48px;
        height: 50px;
        background: url(./images/set2_bub1.png) no-repeat;
      }
      &.b2{
        bottom: 55px;
        left: 0;
        width: 32px;
        height: 32px;
        background: url(./images/set2_bub2.png) no-repeat;
      }
      &.b3{
        bottom: 15px;
        right: 10px;
        width: 24px;
        height: 24px;
        background: url('./images/set2_bub3.png') no-repeat;
      }
    }
  }

  .fish2{
    width:146px;
    height:174px;
    display:block;
    background: url("./images/fish2.png") no-repeat center;
    position:absolute;
    bottom:245px;
    right:-120px;
    -webkit-animation-name:fish2move;
    -webkit-animation-duration:5s;
    -webkit-animation-iteration-count:infinite;
    -webkit-animation-timing-function: ease-in-out;

    -moz-animation-name:fish2move;
    -moz-animation-duration:5s;
    -moz-animation-iteration-count:infinite;
    -moz-animation-timing-function: ease-in-out;

    animation-name:fish2move;
    animation-duration:5s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;

  }
  .yellowfish {
    width: 142px;
    height: 130px;
    display: block;
    background: url(./images/yellowfish.png) no-repeat center;
    position: absolute;
    -webkit-animation-name: swim;
    -webkit-animation-duration: 30s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: swim;
    -moz-animation-duration: 30s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    animation-name: swim;
    animation-duration: 40s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .fish-game-item{
    display:inline-block;
    box-sizing: border-box;
    width: 1145px;
    height: 323px;
    background: url(./images/fish-itembg.png) no-repeat center center;
    margin-bottom: 39px;
    padding: 26px 24px 26px 28px;
  }
  .fish-picpart{
    width: 626px;
    position: relative;
    cursor: pointer;
    &:hover .fishgame-btns {
      opacity: 1;
      transform: scale(1);
    }
  }
  .fishgame-btns{
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s;
    padding-top: 76px;
  }
  .fishgame-btns .game-btn {
      display: block;
      width: 370px;
      height: 58px;
      line-height: 58px;
      color: #ffffff;
      font-size: 25px;
      margin: 0 auto 20px;
      text-align: center;
  }
  .fishgame-btns .game-btn.play {
      background: url(./images/blue-btn.png) no-repeat center center;
      &:hover{
        color: yellow;
      }
  }
  .fishgame-btns .game-btn.try {
      background: url(./images/orange-btn.png) no-repeat center center;
      &:hover{
        color: yellow;
      }
  }

  .fish-infopart{
    width: 445px;
  }
  .fish-infopart .title{
    height: 60px;
    line-height: 60px;
    margin-bottom: 12px;
    font-size: 45px;
    font-weight: normal;
    color: #FFE500;
  }
  .fish-infopart .title-icon{
    display: inline-block;
    width: 198px;
    background: #002FBE;
    text-align: center;
    img{
       vertical-align: middle;
    }
  }
  .fish-infopart .infomation{
     font-size: 18px;
     color: #ffffff;
     height: 54px;
     line-height: 40px;
     border-top: 1px solid #3167D9;
     width: 93%;
  }

}
@keyframes swim {
  from {right:50%;top:5px;}
  20% {right: 0; transform:scaleX(1); -webkit-transform:scaleX(1);}
  20.5% {transform:scaleX(-1); -webkit-transform:scaleX(-1); right: -10px;top:20px;}
  21% {right: 30px}
  42% {right: 60%;}
  50% { right: 75%; transform:scaleX(-1); -webkit-transform:scaleX(-1);}
  50.5% {transform:scaleX(1); -webkit-transform:scaleX(1); right: 72%;top:30px;}
  51% {right: 60%px;}
  60% {right: 30%;}
  64% {right: 10%;}
  66% {right: 80px;}
  69% {right: -50px;}
  70% { right: -30px; transform: scaleX(1); -webkit-transform: scaleX(1);}
  70.5% {transform: scaleX(-1); -webkit-transform: scaleX(-1); right: 30px;}
  71% {right: 60px;}
  80% {right: 60%;}
  81% {right: 65%; }
  82% {right: 70%; transform: scaleX(-1); -webkit-transform: scaleX(-1);}
  82.5% {transform: scaleX(1); -webkit-transform: scaleX(1);  right: 75%;}
  84% { right: 78%;}
  88% { right: 80%;}
  to {right: 50%;}
}

@-webkit-keyframes swim {
  from {right:50%;top:5px;}
  20% {right: 0; transform:scaleX(1); -webkit-transform:scaleX(1);}
  20.5% {transform:scaleX(-1); -webkit-transform:scaleX(-1); right: -10px;top:20px;}
  21% {right: 30px}
  42% {right: 60%;}
  50% { right: 75%; transform:scaleX(-1); -webkit-transform:scaleX(-1);}
  50.5% {transform:scaleX(1); -webkit-transform:scaleX(1); right: 72%;top:30px;}
  51% {right: 60%px;}
  60% {right: 30%;}
  64% {right: 10%;}
  66% {right: 80px;}
  69% {right: -50px;}
  70% { right: -30px; transform: scaleX(1); -webkit-transform: scaleX(1);}
  70.5% {transform: scaleX(-1); -webkit-transform: scaleX(-1); right: 30px;}
  71% {right: 60px;}
  80% {right: 60%;}
  81% {right: 65%; }
  82% {right: 70%; transform: scaleX(-1); -webkit-transform: scaleX(-1);}
  82.5% {transform: scaleX(1); -webkit-transform: scaleX(1);  right: 75%;}
  84% { right: 78%;}
  88% { right: 80%;}
  to {right: 50%;}
}
@-moz-keyframes swim {
  from {right:50%;top:5px;}
  20% {right: 0; transform:scaleX(1); -webkit-transform:scaleX(1);}
  20.5% {transform:scaleX(-1); -webkit-transform:scaleX(-1); right: -10px;top:20px;}
  21% {right: 30px}
  42% {right: 60%;}
  50% { right: 75%; transform:scaleX(-1); -webkit-transform:scaleX(-1);}
  50.5% {transform:scaleX(1); -webkit-transform:scaleX(1); right: 72%;top:30px;}
  51% {right: 60%px;}
  60% {right: 30%;}
  64% {right: 10%;}
  66% {right: 80px;}
  69% {right: -50px;}
  70% { right: -30px; transform: scaleX(1); -webkit-transform: scaleX(1);}
  70.5% {transform: scaleX(-1); -webkit-transform: scaleX(-1); right: 30px;}
  71% {right: 60px;}
  80% {right: 60%;}
  81% {right: 65%; }
  82% {right: 70%; transform: scaleX(-1); -webkit-transform: scaleX(-1);}
  82.5% {transform: scaleX(1); -webkit-transform: scaleX(1);  right: 75%;}
  84% { right: 78%;}
  88% { right: 80%;}
  to {right: 50%;}
}

@keyframes fish2move{
  from{transform:translate(0,0px);}
  65%{transform:translate(0,75px);}
  to{transform:translate(0,-0px);}
}
@-webkit-keyframes fish2move{
  from{transform:translate(0,0px);}
  65%{transform:translate(0,75px);}
  to{transform:translate(0,-0px);}
}
@-moz-keyframes fish2move{
  from{transform:translate(0,0px);}
  65%{transform:translate(0,75px);}
  to{transform:translate(0,-0px);}
}
@keyframes b1move{
  0%{bottom:-5px;}
  25%{bottom:10px;}
  50%{bottom:20px;}
  75%{bottom:30px;}
  100%{bottom:45px;}
}
@-webkit-keyframes b1move{
  0%{bottom:-5px;}
  25%{bottom:10px;}
  50%{bottom:20px;}
  75%{bottom:30px;}
  100%{bottom:45px;}
}
@-moz-keyframes b1move{
  0%{bottom:-5px;}
  25%{bottom:10px;}
  50%{bottom:20px;}
  75%{bottom:30px;}
  100%{bottom:45px;}
}

</style>