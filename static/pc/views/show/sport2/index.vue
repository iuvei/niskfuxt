<template>
  <div class="sport-view">
    <div class="sport-main content">
      <div class="sport-item cfx">
        <img src="./images/imgs_1.png" alt="">
        <div class="sport-item-right fr">
          <h2>沙巴体育</h2>
          <p>让球、大小、半全场、波胆、单双、总入球、混合过关等多元竞猜。 每月超过1500场滚球赛事：足球、篮球、橄榄球、网球等赛事应有！</p>
          <a class="btn" @click="open(Games.href_sb_pc, '沙巴体育', 900, 640, true, islogin)">进入游戏</a>
        </div>
      </div>
      <div class="sport-item cfx">
        <img src="./images/imgs_3.png" alt="">
        <div class="sport-item-right fr">
          <h2>新皇冠体育</h2>
          <p>亚洲首创快速市场平台，下注结算秒速完成。提前兑现、部分兑现， 你说了算。滚球独立页面更有参与感！</p>
          <a class="btn" @click="open(Games.href_ug_pc, '新皇冠体育', 900, 640, true, islogin)">进入游戏</a>
        </div>
      </div>
      <div class="sport-item cfx">
        <img src="./images/imgs_4.png" alt="">
        <div class="sport-item-right fr">
          <h2>BTI体育</h2>
          <p>我们为全球50多个合作伙伴提供体育博彩解决方案和全方位的管理服务。凭借卓越的技术和深厚的市场知识，我们的创新解决方案为所有客户提供竞争优势和快速增长。</p>
          <a class="btn" @click="open(Games.href_sbtech, 'SBTECH体育', 900, 640, true, islogin)">进入游戏</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Games } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        Games
      };
    },
    props: {},
    methods: {
      open(url, title, w, h, needLogin, loginState){
        if(!loginState){
          if(!this.islogin){
            window.toast('请先登录!')
            return
          }
        }
        openWindow(url, title, w, h, needLogin, loginState)
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
  .sport-view{
    background:#131313 url(./images/sport-bg.jpg) top center no-repeat;
    background-size:100% auto;
    padding:440px 0 0 0;
    .sport-main{
      // background:#292929;
      padding:10px;
      .sport-item {
        background:#292929;
        margin-bottom: 27px;
        .sport-item-right {
          width: 500px;
          height: 300px;
          padding: 40px;
          h2 {
            font-size: 48px;
            color: #ffffff;
            font-weight: normal;
          }
          p {
            font-size: 16px;
            color: #cccccc;
            padding: 10px 0;
            line-height: 28px;
          }
          .btn {
            cursor: pointer;
            float: right;
            margin-top: 20px;
            width: 190px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            color: #fff;
            font-size: 30px;
            border-radius: 5px;
            background: #d3563d; /* Old browsers */
            background: -moz-linear-gradient(-45deg,  #d3563d 0%, #e0714e 50%, #f79d6a 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(-45deg,  #d3563d 0%,#e0714e 50%,#f79d6a 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(135deg,  #d3563d 0%,#e0714e 50%,#f79d6a 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d3563d', endColorstr='#f79d6a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
          }
        }
      }
      .sport-box{
        position:relative;
        &:hover{
          .master{
            opacity:1;
          }
          .btn{
            opacity:1;
            transfrom:scale(1);
          }
        }
        img{
          display:block;
          width:100%;
        }
        .master{
          transition:all 0.4s;
          opacity:0;
          position: absolute;
          top: 0;
          right: 48px;
          height: 828px;
          border: solid 1px #a5836a;
          background:rgba(0,0,0,0.4);
          width: 490px;
          transform: skew(-6.5deg,0deg);
        }
        .btn{
          position:absolute;
          transition:all 0.4s;
          opacity:0;
          transfrom:scale(0);
          top:300px;
          left:50%;
          transform:translateX(-50%);
          cursor:pointer;
          display: inline-block;
          width: 290px;
          height: 50px;
          line-height: 50px;
          color: #343434;
          font-size: 25px;
          margin: 0 auto 20px;
          text-align: center;
          border-radius:6px;
          background: rgb(255, 236, 183);
          /* Old browsers */
          background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
          /* FF3.6-15 */
          background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
          /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
          /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
          /* IE6-9 */
        }
      }

    }
  }
</style>