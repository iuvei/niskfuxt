<template>
  <div class="sport-view">
    <div class="sport-main content">
    <el-row>
      <el-col :span="12" class="sport-box">
        <a >
          <img src="./images/img1.jpg">
          <div class="master"></div>
          <a class="btn" @click="open(Games.href_sb_pc, '沙巴体育', 900, 640, true, islogin)">进入游戏</a>
        </a>
      </el-col>
      <!-- <el-col :span="12" class="sport-box">
        <a>
          <img src="./images/img2.jpg">
          <div class="master"></div>
          <a class="btn" @click="open(Games.href_pbsport, '平博体育', 900, 640, true, islogin)">进入游戏</a>
        </a>
      </el-col> -->
    </el-row>
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
    padding:445px 0;
    .sport-main{
      background:#292929;
      padding:10px;
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