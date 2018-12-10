<template>
    <div class="promotions_content page_content_wrap ">
      <a class="promotion_item " v-for="item in allData" @click="itemClk(item)" :key="item.id" v-if="!filtType || item.type == filtType">
        <h2>{{item.activityTitle}}</h2>
        <img v-lazy="item.activityImageUrl" :alt="item.activitySummary" :title="item.activitySummary">
        <div class="title_wrap">查看详情</div>
      </a>
    </div>
</template>
<script>
import { promos } from "@/controls/shows/promos";
export default {
  name: "promos-c",
  mixins: [promos],
  data() {
    return {};
  },
  methods: {
    itemClk(item, i) {
      if (item.activityUrl) {
        // if (item.activityUrl.indexOf("sports_triplegift") > 0) {
        //   item.activityUrl = "/mobile/sports_triplegift";
        // }
        // console.log(item.activityUrl);
        window.open(item.activityUrl);
      } else {
        this.readPros(item.id)
          .then(res => {
            this.$bus.$emit("showProDetail", res);
          })
          .catch(err => {
            console.log(err);
            window.toast(err.message);
          });
      }
    }
  },
  created() {
    // 筛选事件监听
    this.$bus.$on("filtPros", eventData => {
      this.filtType = eventData;
    });
    this.getPromos("mobile")
      .then(res => {
        // 设置菜单
        this.$bus.$emit("setProMenu", res.data.types);
      })
      .catch(err => {
        window.toast(err.message);
      });
  }
};
</script>
<style lang="scss" scoped>
@import "~mobile/assets/scss/mixin.scss";
.promotion_item {
  display: inline-block;
  width: 46%;
  margin: r(15);
  background: #fff;
  h2 {
    font-size: r(30);
    padding-left: r(20);
    color: #bda059;
    height: r(50);
    line-height: r(50);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    display: block;
    width: 100%;
  }
  .title_wrap {
    background: #bda059;
    height: r(50);
    line-height: r(50);
    color: #ffffff;
    text-align: center;
    font-size: r(28);
  }
  .promotion_content_main {
    background: #fff;
    display: none;
    // padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
  .promotion_toggle {
    background: #fff;
    text-align: center;
    .iconfont {
      width: 100%;
    }
  }
}
</style>
