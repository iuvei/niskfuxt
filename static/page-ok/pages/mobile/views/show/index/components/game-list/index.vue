<template>
  <div class="soltmenubox">
    <div class="titleBox">
      <div class="titleText">游戏平台</div>     	
    </div>
    <!-- 游戏框  -->
    <div class="slot-menu cfx">
      <div class="slot-menu-item"  v-for="(item,i) in allData" :key="i" :class="item.type">
        <router-link  :to="{name:'slotgame',params:{type:item.value}}">
          <img v-lazy="getimg(item)">  
          <p class="texttype">{{item.name}}</p>
        </router-link>          
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      allData: [
        {type: "chess",value:'chess',name: "棋牌游戏",img: "chess.png"},
        {type: "slot",value:'slot',name: "电子游戏",img: "slot.png"},
        {type: "real",value:'real',name: "真人娱乐",img: "real.png"},
        {type: "esport",value:'sport',name: "电竞",img: "eSport.png"},
        {type: "sport",value:'sport',name: "体育",img: "sport.png"},
        {type: "lottery",value:'lottery',name: "彩票",img: "lottery.png"},
        {type: "fish",value:'real',name: "捕鱼",img: "fish.png"},
      ],
    };
  },
  methods: {
    getimg(item) {
      return require(`./images/${item.img}`);
    },
    agClick(item, e) {
      if (this.islogin) {
        if (this.isAgent) {
          $alert("代理不能游戏！");
        } else {
          window.open(item.href);
        }
      } else {
        toast("请先登录！");
      }
      //  return item.method&&item.method(e,item,this)
    }
  },
  created() {
  },
  computed: {
    ...mapGetters(["isAgent", "islogin"]),
    islogin() {
      return this.$store.getters.islogin;
    }
  },
  components: {}
};
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.soltmenubox {
  background: $main-bg;
  margin-bottom: r(10);
  border-bottom: 1px solid #31537b;
  .titleBox{
    padding:r(20);
    text-align: left;
    @include f(32px);
    // margin-bottom: r(20);
    color: #00c5ff;
    position: relative;
    .titleText {
      padding-left: r(20);
      position: relative;
      letter-spacing: 1px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: r(6);
        height: r(26);
        background: #00c5ff;
        box-shadow: 0 0 10px 0px #26a2ff;
      }
    }
  }
  .slot-menu {
    // display:flex;
    // flex-wrap: wrap;
    padding: r(10) r(14) 0;
    @include f(28px);
    .slot-menu-item {
      width: 49%;
      text-align: center;
      margin-bottom: r(10);
      height: r(150);
      position: relative;
      float: left;
      &.chess {
        height: r(310);
      }
      &.slot {
        float: right;
      }
      &.real {
        float: right;
      }
      &.esport {
        width: 24%;
      }
      &.sport  ,&.lottery {
        width: 24%;
        margin: 0 1%;
      }
      &.fish {
        float: right;
        width: 24%;
      }
    } 
    img {
      width: 100%;
    }
    .texttype {
      color: #fff;
      position: absolute;
      left: r(15);
      top: r(15);
    }
  }
}
</style>
