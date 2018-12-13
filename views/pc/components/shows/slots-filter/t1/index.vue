<template>
  <div class="fliter content">
    <div class="filter-type" v-for="(filter,i) in data">
      <span>{{filter.title}}</span>
      <div v-for="(item,i) in filter.data" :class="['filter-item',{active:item.value==filter.active}]" @click="search(item,i,filter)">
        {{item.name}}
      </div>
    </div>
  <div class="fliter-input">
    <input  v-model="inputVal" placeholder="通过游戏名搜索" type="text">
    <span class="iconfont icon-sousuo"></span>
  </div>
  </div>
</template>
<script>
  const line = {
    title: "赔付线数：",
    filter: "line",
    active: "",
    data: [{
        name: "全部",
        value: ""
      }, {
        name: "全赔",
        value: "100-1024"
      }, {
        name: "1-15",
        value: "1-15"
      },{
        name: "16-40",
        value: "16-40"
      },
      {
        name: "41-100",
        value: "41-100"
      }, {
        name: "其它",
        value: "1025-2048"
      }
    ],
            inputVal: '',
        inputData: [],
        showList:false,
  }
  const tag = {
    title: "游戏类型：",
    filter: "tag",
    active: "",
    data: [{
        name: "全部",
        value: ""
      }, {
        name: "热门游戏",
        value: "HOT"
      }, {
        name: "最新游戏",
        value: "NEW"
      }, {
        name: "经典游戏",
        value: "CLA"
      },
      {
        name: "彩金池游戏",
        value: "AMA"
      },
      {
        name: "多旋转老虎机",
        value: "CIR"
      },
      {
        name: "消消乐游戏",
        value: "ETL"
      },
      {
        name: "其他游戏",
        value: "OTH"
      }

    ]
  }
  const history = {
    title:'历史纪录：',
    filter:'his',
    active:'',
    data:[{
      name:'全部',
      value:''
    },{
      name:'玩过',
      value:'yes'
    },{
      name:'未玩过',
      value:'no'
    }]
  }
  const users = {
    title: "收藏记录：",
    filter: 'fav',
    active: '',
    data: [{
      name: "全部",
      value: ''
    }, {
      name: "已收藏",
      value: "yew"
    }, {
      name: "未收藏",
      value: "no"
    }]
  }

  export default {
    data() {
      return {
        data: [line, tag]
      }
    },
        watch:{
      inputVal(val){
        this.search(val);
      }
    },
    methods: {
      search(item, i, filter) {
        // 当前tag点击事件
        if (filter.active == item.value) return;
        filter.active = item.value;
        this.$bus.$emit('serachGame', filter.filter, item.value);
      },
            searchInput() {
        // if (this.inputVal == "") return;//没有数据不查询
        // 调用列表组件的查询事件
        this.$bus.$emit('searchByInput',this.inputVal);
      },
    },
    components: {
    }
  };

</script>
<style lang="scss" scoped>
  .fliter {
    padding: 0 20px 20px;
    overflow: hidden;
    line-height: 30px;
    background: #373738;
    border-radius: 0 0 10px 10px;
    margin-bottom: 30px;
    font-size: 14px;
    position:relative;
    .filter-type {
      margin-top: 10px;
      color: #fff;
    }
    .filter-item {
      display: inline-block;
      padding: 0 20px;
      cursor: pointer;
      color: #fff;
      border-radius: 6px;
      margin: 0 4px;
      &.active,
      &:hover {
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
        color: #343434;
      }
    }
    .filter-input{
      position:absolute;
      top:0;
      right:20px;
    }
  }
    .fliter-input {
    display: inline-block;
    padding: 0 20px;
    border-radius: 15px;
    background: #d7d7d7;
    font-size: 15px;
    color: #999999;
    width:220px;
    padding-right: 40px;
    position: relative;
    span {
      cursor: pointer;
      position: absolute;
      width: 40px;
      height: 30px;
      top: 0;
      right: 0;
      text-align: center;
      font-size: 25px;
    }
    input {
      display: block;
      width: 170px;
      background: transparent;
      outline: none;
      line-height: normal;
      height: 30px;

    }
  }

</style>
