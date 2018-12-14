<template>
  <div class="tab-block">
    <div class="container">
      <ul class="tabs-fixed-width ng-isolate-scope tabs" tabs="">
        <li class="tab col ng-scope">
          <a href="javascript:void(0);" @click="setMenu('')" class="ng-binding" :class="{active:filter==''}"><i class="icon xjzico-quanbu-"></i>全部活动</a>
        </li>
        <li class="tab col ng-scope" v-for="(item,i) in menuData" :key="item.typeId + i">
          <a href="javascript:void(0);" @click="setMenu(item.typeId)" :class="{active:filter==item.typeId}" class="ng-binding "><i class="icon" :class="item.ico"></i>{{ item.typeName }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        filter: "",
        myData: {
          types: [],
        },
        menuData: []
      }
    },
    computed: {
      filterData() {
        if (this.filter == '') {
          return this.myData.records;
        }
        return this.myData.records.filter((item, i) => {
          return item.type == this.filter;
        })
      }
    },
    watch: {},
    methods: {
      setMenu(type) {
        this.filter = type;
        this.$bus.$emit('filtPros', type);
      }
    },
    created() {
      this.$bus.$on('setProMenu', eventData => {
        for (let i = 0; i < eventData.length; i++) {
          switch (eventData[i].typeId) {
            case '001':
              eventData[i].ico = 'xjzico-shouji'
              break;
            case '002':
              eventData[i].ico = 'xjzico-changqi'
              break;
            case '003':
              eventData[i].ico = 'xjzico-xianshi'
              break;
            default:
              eventData[i].ico = 'xjzico-cun'
              break;
          }
        }
        this.menuData = eventData;
      })
    },
  }

</script>
<style lang="scss" scoped>
  .tab-block {
    background: transparent;
    padding-top: 10px;
    .tabs {
      background: transparent;
      font-size: 14px;
      li a {
        color: #b7b7b7;
        width: 160px;
        height: 42px;
        line-height: 42px;
          font-size: 18px;
          vertical-align: middle;
        .icon{
          font-size: 22px;
        }
        &.active, &:hover {
          // color: #2293fc;
          // border-bottom: 4px solid #2293fc;
          background-image: -moz-linear-gradient( 90deg, rgb(217,142,23) 0%, rgb(248,191,102) 30%, rgb(249,217,160) 84%);
          background-image: -webkit-linear-gradient( 90deg, rgb(217,142,23) 0%, rgb(248,191,102) 30%, rgb(249,217,160) 84%);
          background-image: -ms-linear-gradient( 90deg, rgb(217,142,23) 0%, rgb(248,191,102) 30%, rgb(249,217,160) 84%);
          background-image: linear-gradient( 90deg, rgb(217,142,23) 0%, rgb(248,191,102) 30%, rgb(249,217,160) 84%);
          box-shadow: 0px 3px 3px 0px rgba(66, 41, 3, 0.75),inset 0px 5px 4px 0px rgba(255, 254, 207, 0.004);
          border-radius: 20px;
          color: #000;
  

        }
      }
      .indicator {
        // background-color: #2293fc;
        height: 4px;
      }
    }
  }

</style>
