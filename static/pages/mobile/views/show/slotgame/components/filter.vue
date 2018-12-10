<template>
  <transition name="fade">
    <div class="slotgame-filter" v-show="showFilter">
      <!-- <div class="filter-category">
        <div v-for="item in data" :key="item.value" :class="{active:cur==item.value}" @click="cur=item.value">
        	<i class="iconay" :class="item.icon"></i>
        	<div>{{item.name}}</div>          
        </div>
      </div> -->
      <div class="filter-btn" v-for="(mydata,i) in data[cur].data" :key="i">
        <h3>{{mydata.title}}</h3>
        <ul class="filter_item_content cfx">
          <li v-for="(item,i) in mydata.data" :class="[{active:item.value==mydata.active},'filter_item']" :key="item.value">
            <a href="javascript:;" target="_blank" v-if="!item.href" @click="search(item,i,mydata)"><i class="iconay ay-danxuanxuanzhong"></i>{{item.name}}</a>
            <a v-else @click="open(item.href, item.name, 900, 640, true, islogin)"><i class="iconay ay-danxuanxuanzhong"></i>{{item.name}}</a>
          </li>
        </ul>
        <div class="space_border_wrap">
          <div class="space_border"></div>
        </div>
      </div>
      <vButton @click="searching">完成</vButton>
    </div>
  </transition>
</template>
<script>
import { Games } from "@/assets/data";
import vButton from "mobile/components/form/button";
import openWindow from "@/util/openWindow";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cur: "category",
      showFilter: false,
      data: {
        category: {
          name: "游戏平台",
          icon: "ay-laohuji",
          value: "category",
          data: {
            platform: {
              title: "游戏平台",
              filter: "category",
              active: "",
              data: [
                { name: "全部平台", value: "" },
                { name: "PT平台", value: "PT" },
                { name: "MG平台", value: "MGS" },
                { name: "PNG平台", value: "PNG" },
                { name: "CQ9平台", value: "CQ9" },
                { name: "DT平台", value: "DT" },
                { name: "NT平台", value: "NT" },
                { name: "RTG平台", value: "RTG" },
                { name: "AMEBA平台", value: "AMEBA" },
                { name: "TGP平台", value: "TGP" }
              ]
            },
            types: {
              title: "游戏分类",
              filter: "tag",
              active: "",
              data: [
                { name: "全部", value: "" },
                { name: "热门", value: "HOT" },
                { name: "最新", value: "NEW" }
              ]
            },
            line: {
              title: "赔付线数",
              filter: "line",
              active: "",
              data: [
                { name: "全部", value: "" },
                { name: "全赔", value: "100-1024" },
                { name: "1-15", value: "1-15" },
                { name: "16-40", value: "16-140" },
                { name: "41-100", value: "41-100" },
                { name: "其它", value: "1025-2048" }
              ]
            },
            tag: {
              title: "游戏类型",
              filter: "tag",
              active: "",
              data: [
                { name: "全部", value: "" },
                { name: "经典", value: "CLA" },
                { name: "电动", value: "ELE" },
                { name: "消消乐", value: "ETL" },
                { name: "累积奖池", value: "AMA" },
                { name: "多旋转", value: "CIR" },
                { name: "其他", value: "OTH" }
              ]
            }
          }
        },
        reality: {
          name: "真人/体育",
          icon: "ay-shexiangtou",
          value: "reality",
          data: {
            platform1: {
              title: "真人游戏",
              active: "",
              data: [
                { name: "AG真人", href: Games.href_ag },
                { name: "BBIN真人", href: Games.href_bbin },
                { name: "OG真人", href: Games.href_og },
                { name: "SUNBET真人", href: Games.href_sunbetH5 }
              ]
            },
            platform2: {
              title: "体育竞技",
              active: "",
              data: [
                { name: "沙巴体育", href: Games.href_sb_mobile },
                // { name: "平博体育", href: Games.href_pbsport }
              ]
            }
          }
        },
        catchfish: {
          name: "捕鱼/棋牌",
          icon: "ay-yu",
          value: "catchfish",
          data: {
            platform1: {
              title: "捕鱼游戏",
              active: "",
              data: [{ name: "AG捕鱼", href: Games.href_fish }]
            },
            platform2: {
              title: "棋牌游戏",
              active: "",
              data: [
                { name: "761棋牌", href: Games.href_city761 },
                { name: "开元棋牌", href: Games.href_kyqp }
              ]
            }
          }
        },
        lottery: {
          name: "彩票",
          icon: "ay-B-tiyucaipiao",
          value: "lottery",
          data: {
            platform: {
              title: "彩票",
              active: "",
              data: [{ name: "VR彩票", href: Games.href_vr }]
            }
          }
        }
      }
    };
  },
  methods: {
    search(item, i, filter) {
      if (filter.active == item.value) return;
      filter.active = item.value;
      this.$bus.$emit("serachGame", filter.filter, item.value);
    },
    open(url, title, w, h, needLogin, loginState) {
      openWindow(url, title, w, h, needLogin, loginState);
    },
    searching() {
      this.showFilter = false;
    }
  },
  computed: {
    ...mapGetters(["islogin"])
  },
  created() {
    this.showFilter = false;
    if (this.$parent.$route.params.type) {
      this.data.category.data.platform.active = this.$route.params.type;
    }
    this.$bus.$on("showFilter", EventData => {
      this.showFilter = !this.showFilter;
    });
  },
  components: {
    vButton
  }
};
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";

.slotgame-filter {
  padding-bottom: r($footer-h);
  position: absolute;
  top: r(86);
  left: 0;
  z-index: 99;
  width: 100%;
  background: #fff;
  color: #b9b9b9;
  .filter-category {
    display: flex;
    text-align: center;
    @include f(28px);
    margin: 0 0 r(20) 0;
    > div {
      flex: 1;
      line-height: r(60);
      @include f(30px);
      border-bottom: 3px solid #d4d0d0;
      padding-bottom: r(10);
      &.active {
        color: #bda059;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: r(5);
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-style: solid;
          border-width: r(12) r(12) 0 r(12);
          border-color: #bda059 transparent transparent transparent;
        }
      }
      &.active .iconay {
        border: 1px solid #bda059;
      }
      > .iconay {
        display: inline-block;
        margin-top: r(10);
        width: r(80);
        height: r(80);
        line-height: r(80);
        border: 1px solid #ccc;
        border-radius: 50%;
        @include f(46px);
      }
    }
  }
  h3 {
    margin-bottom: r(20);
    padding-left: r(30);
    @include f(28px);
    line-height: 1.3;
    color: #777;
    font-weight: normal;

    &:before {
      content: "";
      display: inline-block;
      width: 6px;
      height: r(30);
      background: $cl1;
      margin-right: 6px;
      vertical-align: middle;
    }
  }
  .filter_item_content {
    padding: 0 r(14);
  }
  .filter_item_content .filter_item {
    float: left;
    margin: 0 0 r(10) 0;
    padding: 0 r(14);
    width: 33.33%;
    box-sizing: border-box;
    height: r(52);
    line-height: r(52);
  }
  .filter_item_content .filter_item a {
    display: block;
    background: #fff;
    /*border: 1px solid #b3b3b3;*/
    text-align: left;
    color: #666;
    @include f(24px);
    border-radius: 5px;
    .iconay {
      margin-right: r(20);
      @include f(36px);
    }
  }
  .filter_item_content .filter_item a:active,
  .filter_item_content .filter_item.active a {
    /*background: #eee;*/
    color: #bda059;
  }

  .space_border {
    margin: r(20) 0;
    height: 1px;
    width: 100%;
    background: #ccc;
  }
}
</style>
