<template>
  <div class="filter">
    <div class="filter-group" v-for="(filter,i) in data" :key="filter.title + i">
      <label>{{filter.title}}</label>
      <a href="javascript:void(0)" :class="{actived:item.value==filter.active}" v-for="(item,i) in filter.data" :key="item.name" @click="search(item,i,filter)">
         {{item.name}}
      </a>
    </div>
  </div>
</template>
<script>
import { platformData } from "@/assets/data/index";
import fliterInput from "./fliter-input";
const line = {
  title: "赔付线数：",
  filter: "line",
  active: "",
  data: [
    {
      name: "全部",
      value: ""
    },
    {
      name: "全赔",
      value: "100-1024"
    },
    {
      name: "1-15",
      value: "1-15"
    },
    {
      name: "16-40",
      value: "16-40"
    },
    {
      name: "41-100",
      value: "41-100"
    },
    {
      name: "其它",
      value: "1025-2048"
    }
  ]
};
const category = {
  title: "游戏平台：",
  filter: "category",
  active: "",
  data: [
    {
      name: "全部",
      value: ""
    }
  ]
};
const tag = {
  title: "游戏类型：",
  filter: "tag",
  active: "",
  data: [
    {
      name: "全部",
      value: ""
    },

    {
      name: "经典游戏",
      value: "CLA"
    },
    {
      name: "电动吃角子",
      value: "ELE"
    },
    {
      name: "消消乐游戏",
      value: "ETL"
    },
    {
      name: "累积奖池",
      value: "AMA"
    },
    {
      name: "多旋转",
      value: "CIR"
    },

    {
      name: "其他游戏",
      value: "OTH"
    }
  ]
};
const types = {
  title: "游戏分类：",
  filter: "tag",
  active: "",
  data: [
    {
      name: "全部",
      value: ""
    },
    {
      name: "热门游戏",
      value: "HOT"
    },
    {
      name: "最新游戏",
      value: "NEW"
    }
  ]
};
// const history = {
//   title:'历史纪录：',
//   filter:'his',
//   active:'',
//   data:[{
//     name:'全部',
//     value:''
//   },{
//     name:'玩过',
//     value:'yes'
//   },{
//     name:'未玩过',
//     value:'no'
//   }]
// }
const users = {
  title: "收藏记录：",
  filter: "fav",
  active: "",
  data: [
    {
      name: "全部",
      value: ""
    },
    {
      name: "已收藏",
      value: "yew"
    },
    {
      name: "未收藏",
      value: "no"
    }
  ]
};

export default {
  data() {
    return {
      data: [category, types, line, tag],
      platformData,
      tabs: ""
    };
  },
  methods: {
    search(item, i, filter) {
      // console.log(filter);
      // 当前tag点击事件
      if (filter.active == item.value) return;
      filter.active = item.value;
      this.$bus.$emit("serachGame", filter.filter, item.value);
    }
  },
  components: {
    fliterInput
  },
  watch: {
    $route(val) {
      // 根据路由params来筛选平台
      if (val.params && val.params.type) {
        console.log(val);
        // this.tabs = val.params.type
        this.data[0].active = val.params.type;
      }
    }
  },
  created() {
    this.tabs = this.$route.params.type;
    if (this.data[0].data.length < 2) {
      this.data[0].data = this.data[0].data.concat(platformData);
    }
    if (this.$route.params && this.$route.params.type) {
      console.log(this.$route);
      this.data[0].active = this.$route.params.type;
    }
  }
};
</script>
<style lang="scss" scoped>
.filter {
  margin: 22px 0 0 8px;
}
.filter .filter-group {
  height: 28px;
  line-height: 28px;
  margin-bottom: 8px;
  label {
    float: left;
    font-size: 14px;
    color: #999;
    width: 94px;
  }
  a {
    border-radius: 3px;
    height: 26px;
    line-height: 26px;
    float: left;
    padding: 0 12px;
    display: block;
    line-height: 26px;
    font-size: 14px;
    color: #999;
    margin-right: 10px;
    border: 1px solid transparent;
    &:hover,
    &.actived {
      border: 1px solid #c1974d;
      color: #cca352;
    }
  }
}
</style>
