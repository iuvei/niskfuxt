<template>
  <div class="search">

    <div class="searchbox">
      <span class="searchTag" @click="search(1)"><i class="icon xjzico-quanbu-"></i>全部游戏</span>
      <span class="searchTag" @click="search(2)"><i class="icon xjzico-xing"></i>最新游戏</span>
      <span class="searchTag" @click="search(3)"><i class="icon xjzico-huo"></i>最热游戏</span>
      <span class="searchTag"></span>
      <span class="searchTag"></span>
      <!-- <span class="searchTag" @click="search(4)"><i class="icon xjzico-youxi"></i>最近玩过的游戏</span>
      <span class="searchTag" @click="search(5)"><i class="icon xjzico-guanggaozhu"></i>我收藏的游戏</span> -->
      <div class="searchInput">
        <input v-model="inputVal" placeholder="搜索游戏" type="text">
        <span @click="itemClick">
          <img src="./images/search_ico.png?v=1705bdd7f4">
        </span>
      </div>
    </div>
    <div class="selectItem">
      <select name="platform" v-model="searchData.platform">
        <option value="">全部平台</option>
        <option v-for="item in platformData" :key="item.value" :value="item.value">{{item.name}}</option>
      </select>
      <select name="tag" v-model="searchData.tag">
        <option value="">全部种类</option>
        <option v-for="item in tag" :key="item.value" :value="item.value">{{item.name}}</option>
      </select>
      <select name="line" v-model="searchData.line">
        <option value="">全部赔付</option>
        <option v-for="item in line" :key="item.value" :value="item.value">{{item.name}}</option>
      </select>
      <button class="resetBtn" @click="reset">重置</button>
    </div>
  </div>
</template>
<script>
  import {
    Games
  } from "@/assets/data";
  import {
    platformData
  } from "@/assets/data/index"
  export default {
    data() {
      return {
        Games,
        platformData,
        inputVal: '',
        inputData: [],
        search_result: false,
        searchData: {
          platform: '',
          tag: '',
          line: ''
        },
        line: [ {
            name: "全赔",
            value: "100-1024"
          }, {
            name: "1-15",
            value: "1-15"
          }, {
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
        tag: [ {
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
    },
    props: {
      data: {
        // type: Array,
        // required: true
      }
    },
    computed: {},
    watch: {
      inputVal(val) {
        this.$bus.$emit('searchByInput', val);
      },
      'searchData.platform'(val){
        this.$bus.$emit('serachGame','category', val)
      },
      'searchData.tag'(val){
        this.$bus.$emit('serachGame','tag', val)
      },
      'searchData.line'(val){
        this.$bus.$emit('serachGame','line', val)
      },
      '$route'(val){
        this.searchData.platform = val.params.type
      }
    },
    methods: {
      search(val) {
        // 当前tag点击事件
        switch (val) {
          case 1:
            this.$bus.$emit('serachGame', 'category', '');
            break;
          case 2:
            this.$bus.$emit('serachGame', 'tag', 'NEW');
            break;
          case 3:
            this.$bus.$emit('serachGame', 'tag', 'HOT');
            break;
          case 4:
            // this.$bus.$emit('serachGame', 'tag', 'NEW');
            window.toast('敬请期待!')
            break;
          case 5:
            // this.$bus.$emit('serachGame', 'tag', 'NEW');
            window.toast('敬请期待!')
            break;
          default:
            break;
        }
      },
      itemClick(item) {
        this.$bus.$emit('searchByInput', val);
      },
      reset(){
        this.searchData.platform ="";
        this.searchData.tag ="";
        this.searchData.line ="";
      }
    },
    components: {},
    created() {
      if (this.$route&&this.$route.params.type) {
        this.searchData.platform = this.$route.params.type
      }
    },
  }

</script>
<style lang="scss" scoped>
  .search {
    width: 100%;
    padding: 5px 10px;

    .searchbox {
      // background: #d7d7d7;
      // border-radius: 4px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;

      .searchTag {
        color: #d7d7d7;
        cursor: pointer;      
        font-size: 16px;
        .icon {
          vertical-align: baseline;
        }
        &:hover {
          color: #e2b85a;
        }
      }

      .searchInput {
        position: relative;

        input {
          box-sizing: border-box;
          width: 200px;
          height: 30px;
          padding: 0 12px;
          color: #f5f5f5;
          border: 0;
          outline: 0;
          background: none;
          border: 1px solid #757575;
          border-radius: 15px;
        }

        span {
          position: absolute;
          right: 3px;
          top: 0;

          img {
            padding: 4px 5px;
          }
        }

      }
    }
    .selectItem{
      margin-bottom: 12px;
        select{
          display: inline-block;
          width: 150px;
          height: 30px;
          background: #111;
          color: #b2b2b2;
          border: 1px solid #202020;
          outline: none;
          margin-right: 15px;
        }
        .resetBtn {
          width: 100px;
          height: 28px;
          background: #fdebc4; /* Old browsers */
          background: -moz-linear-gradient(top, #fdebc4 1%, #fcd189 52%, #fdbb53 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(top, #fdebc4 1%,#fcd189 52%,#fdbb53 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to bottom, #fdebc4 1%,#fcd189 52%,#fdbb53 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdebc4', endColorstr='#fdbb53',GradientType=0 ); /* IE6-9 */
        }
      }
  }

</style>
