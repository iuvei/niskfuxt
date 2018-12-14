<template>
  <div class="winning-box">
    <div class="contain">
      <div class="item-box" :class="{animates:myData.length>5}" :style="animation">
        <div v-for="item in myData" :key="item.id" class="item">
          <img :src="item.link" alt="">
          <div class="rightItem">
            <p>恭喜玩家 <span class="username">{{item.userName}}</span></p>
            <p>刚刚赢取 <span class="money">{{item.prize}}元</span></p>
            <p><span class="gameName">{{item.gameName}}</span></p>
          </div>
        </div>     
      
        <div v-for="item in myData" :key="item.id" class="item">
          <img :src="item.link" alt="">
          <div class="rightItem">
            <p>恭喜玩家 <span class="username">{{item.userName}}</span></p>
            <p>刚刚赢取 <span class="money">{{item.prize}}元</span></p>
            <p><span class="gameName">{{item.gameName}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCarouselListAll } from "@/api/show";
export default {
  data() {
    return {
      myData: [],
      id: 0,
      animation: {}
    };
  },
  watch: {
    myData(val) {
      this.animation = {
        "animation-duration": val.length * 2.5 + 's',
        "-webkit-animation-duration": val.length *2.5 + 's'
      }
    }
  },
  methods: {},
  beforeDestroy() {},
  created() {
    getCarouselListAll().then(res => {
      if (res.success) {
        this.myData = res.data;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.winning-box {
  width: 100%;
  // height: 107px;
  background: #101010;
  .contain {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 20px 0;
    overflow: hidden;
    .item-box {
      display: flex;
    }
    .item {
      display: inline-flex;
      min-width: 210px;
      padding-right: 30px;
      align-items: center;
      img {
        width: 67px;
        height: 67px;
        margin-right: 10px;
      }
      .rightItem {
        color: #939393;
        .username {
          color: #fff;
        }
        .money {
          color: #ea0f26;
        }
        .gameName {
          color: #f2a50f;
        }
      }
    }
  }
  .animates {
    position: relative;
    animation: animations 20s linear infinite;
  }
}
@keyframes animations {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
