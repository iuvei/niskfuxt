<template>
    <div class="page-wrap">
        <div class="sports-banner"></div>
        <div class="sports-con">
            <span class="sport-lbl left">VR彩票</span>
            <span class="sport-lbl right">BBIN彩票</span>
            <div class="clear sport-img left" @click="open(Games.href_vr, 'VR彩票', 900, 640, true, islogin)" style="cursor: pointer">
                <img src="./images/pic_vr_keno_1.png">
                <span class="new-sport"></span>
                <div class="sport-hover"></div>
                <a href="javascript:void(0);" class="btn-bet">立即投注</a>
            </div>
            <div class="sport-img right" @click="open(Games.href_bbcp, 'BBIN彩票', 900, 640, true, islogin)" style="cursor: pointer">
                <img src="./images/pic_bbin_keno.png">
                <div class="sport-hover"></div>
                <a href="javascript:void(0);" class="btn-bet">立即投注</a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="sports-con">
            <span class="sport-lbl left">IG时时彩</span>
            <span class="sport-lbl right">IG香港彩</span>
            <div class="clear sport-img left" @click="open(Games.href_ig_ssc, 'IG时时彩', 900, 640, true, islogin)" style="cursor: pointer">
                <img src="./images/pic_IGshishi_keno.png">
                <span class="new-sport"></span>
                <div class="sport-hover"></div>
                <a href="javascript:void(0);" class="btn-bet">立即投注</a>
            </div>
            <div class="sport-img right" @click="open(Games.href_ig_hk, 'IG香港彩', 900, 640, true, islogin)" style="cursor: pointer">
                <img src="./images/pic_IGhong_keno.png">
                <div class="sport-hover"></div>
                <a href="javascript:void(0);" class="btn-bet">立即投注</a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
import { Games } from "@/assets/data";
import openWindow from "@/util/openWindow";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Games
    };
  },
  methods: {
    open(url, title, w, h, needLogin, loginState) {
      openWindow(url, title, w, h, needLogin, loginState);
    },
    showerr() {
      window.toast("敬请期待");
    }
  },
  computed: {
    ...mapGetters(["islogin"])
  }
};
</script>
<style lang="scss" scoped>
.page-wrap {
  min-width: 1200px;
  min-height: 600px;
  background-color: #61564b;
  padding-bottom: 70px;
}
.sports-banner {
  height: 400px;
  margin: 0 auto;
  background: url("./images/img_bj.jpg") no-repeat top center #000;
}
.sports-con {
  width: 1200px;
  height: 399px;
  margin: 0 auto;
  position: relative;
  padding-top: 10px;
  .sport-lbl {
    width: 555px;
    height: 76px;
    line-height: 76px;
    text-align: center;
    display: block;
    font-size: 20px;
    color: #cbb282;
  }
  .sport-img {
    width: 555px;
    height: 300px;
    position: relative;
    overflow: hidden;
  }
  .sport-lbl.left,
  .sport-img.left {
    float: left;
  }
  .sport-lbl.right {
    float: right;
  }
  .sport-img {
    &.right {
      float: right;
    }
    &:hover {
      box-shadow: 0 0 30px 2px #000;
    }
    img {
      display: block;
      width: 100%;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    .sport-hover {
      width: 553px;
      height: 298px;
      position: absolute;
      top: 0;
      left: 0;
      border: solid 1px #6e5725;
      // background: url("./images/trans-bg2.png") repeat;
      display: none;
    }
    &:hover .sport-hover {
      display: block;
    }
  }
}
.btn-bet {
  width: 140px;
  height: 41px;
  display: block;
  margin: 0 auto;
  background: #b58f53;
  background-image: -moz-linear-gradient(to right, #b58f53, #79512e);
  background-image: -o-linear-gradient(to right, #b58f53, #79512e);
  background-image: -webkit-linear-gradient(to right, #b58f53, #79512e);
  background-image: linear-gradient(to right, #b58f53, #79512e);
  line-height: 41px;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 33px;
  border-radius: 10px;
  text-align: center;
}
.clear {
  clear: both;
}
</style>
