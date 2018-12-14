<template>
  <div class="promoPros">
    <div class="item" :class="{active:item.id == actId}" v-for="item in allData" :key="item.id" v-if="!filtType || item.type == filtType">
      <div class="infoItem" @click="itemClk(item)">
        <div class="leftItem">
          <p class="title">
            {{item.activityTitle}}
          </p>
          <div class="line">
            <img src="./images/line.png" alt="">
          </div>
          <p class="summary">
            {{item.activitySummary}}
          </p>
          <p class="getAll">
            <i class="icon xjzico-xiangyou"></i>查看详情
          </p>
        </div>
        <div class="rightItem">
          <img :src="item.activityImageUrl" alt="">
        </div>
      </div>
      <div class="detailItem" v-html="htmlInfo">

      </div>
    </div>
  </div>
</template>
<script>
import { promos } from "@/controls/shows/promos";
import { queryLatestPreferential } from "@/api/show";
export default {
  name: "promos-c",
  mixins: [promos],
  data() {
    return {
      cur: {},
      show: false,
      filter: "",
      myData: {
        types: [],
        records: []
      },
      actId: "",
      htmlInfo: null
    };
  },
  methods: {
    itemClk(item, i) {
      if (this.actId == item.id) {
        this.actId = null;
      } else {
        this.readPros(item.id)
          .then(res => {
            // this.$bus.$emit('showProDetail', res)
            let reg = /<body[^>]*>([\s\S]*)<\/body>/;
            this.actId = item.id;
            this.htmlInfo = reg.exec(res.data.activityContent)[1];
            // this.htmlInfo = res.data.activityContent
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
    this.getPromos("pc")
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
.promoPros {
  min-height: 800px;

  .item {
    width: 90%;
    margin: 10px auto 0;
    border: 1px solid #a99d56;

    .infoItem {
      display: flex;
      overflow: hidden;
      cursor: pointer;

      .leftItem {
        flex: 2;
        padding: 15px 20px;
        line-height: 1.7;

        .title {
          color: #fff;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .line {
          width: 100%;
        }

        .summary {
          color: #fff;
          font-size: 17px;
        }

        .getAll {
          color: #fff;
          font-size: 17px;
          .icon {
            display: inline-block;
            transition: all 0.3s;
          }
        }
      }

      .rightItem {
        flex: 3;

        img {
          width: 100%;
        }
      }
    }

    .detailItem {
      padding: 10px 30px;
      display: none;
      transition: all 0.5s;
      color: #fff;
    }

    &.active {
      .detailItem {
        display: block;
        transition: all 0.5s;
      }
      .infoItem {
        .leftItem {
          .getAll {
            .icon {
              transform: rotate(90deg);
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
}
</style>
