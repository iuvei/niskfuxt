<template>
  <!-- <div class="promotion">
    <ul>
      <li v-for="item in  allData" :key="item.id"  v-if="!filtType || item.type == filtType">
        <img v-lazy="item.activityImageUrl"  :alt="item.activitySummary" :title="item.activitySummary">
        <p><button @click="itemClk(item)">点击查看<span>&gt;</span></button></p>
      </li>
    </ul>
  </div> -->
  <ul class="promo-body cfx">
    <li v-for="item in  allData" :key="item.id"  v-if="!filtType || item.type == filtType" @click="itemClk(item)">
      <div class="img-warp">
        <img v-lazy="item.activityImageUrl"  :alt="item.activitySummary" :title="item.activitySummary">
      </div>
      <div class="txt-info">
        <h3>
          <a href="javascript:void(0);">{{item.activityTitle}}</a>
          <div class="type">{{item.typeName}}</div>
          <a href="javascript:void(0);" class="item-clk">查看详情>></a>
        </h3>
      </div>
    </li>
  </ul>
</template>
<script>
  import {promos} from '@/controls/shows/promos'
  import {queryLatestPreferential} from '@/api/show'
  export default {
    name: "promos-c",
    mixins:[promos],
    data() {
      return {
        cur: {},
        show: false,
        filter: "",
        myData: {
          types: [],
          records: []
        }
      }
    },
    methods: {
      itemClk(item, i) {
        if (item.activityUrl) {
          window.open(item.activityUrl)
        }else{
          this.readPros(item.id).then(res=>{
          this.$bus.$emit('showProDetail',res)

          }).catch(err=>{
            console.log(err)
            window.toast(err.message)
          })
        }
      }
    },
    created(){
      // 筛选事件监听
      this.$bus.$on('filtPros',eventData=>{
        this.filtType=eventData
      })
      this.getPromos('pc').then(res=>{
        // 设置菜单
        this.$bus.$emit('setProMenu',res.data.types)
      }).catch(err=>{
        window.toast(err.message)
      })
    }
  }

</script>
<style lang="scss" scoped>
.promo-body {
    padding-bottom: 24px;
    display:flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    li {
      margin: 0 0 40px 72px;
      padding: 10px;
      width: 352px;
      font-size: 16px;
      background-color: #fff;
      cursor: pointer;
      &:nth-child(3n+1) {
        margin: 0 0 40px;
      }
      &:hover {
        -webkit-box-shadow: 0 5px 10px #d4d4d4;
        -moz-box-shadow: 0 5px 10px #d4d4d4;
        box-shadow: 0 5px 10px #d4d4d4;
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
      }
      .img-warp img {
        width: 332px;
        height: 214px;
      }
    }
    .txt-info {
      padding: 24px 0 8px;
      h3 {
        line-height: 26px;
        height: 26px;
        font-size: 16px;
        color: #666;
      }
      .type {
        font-size: 12px;
        height: 26px;
        color: #fff;
        text-align: center;
        float: right;
        width: 60px;
        background-color: #eb5650;
      }
      p {
        &:first-of-type {
          margin-top: 3px;
        }
        line-height: 26px;
        height: 26px;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #333;
      }
    }
    .item-clk {
      text-align: center;
      display: inline-block;
      font-size: 16px;
      color: #d1222f;
      font-weight: 400;
      float: right;
    }
  }
.cfx{
  clear: both;
    zoom: 1;
    &::after{
          display: block;
    visibility: hidden;
    clear: both;
    overflow: hidden;
    height: 0;
    content: ".";
    }
}
</style>
