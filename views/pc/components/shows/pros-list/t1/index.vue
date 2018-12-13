<template>
  <div class="promo-page content">
    <div v-for="item in  allData" class="p-item" :key="item.id" v-if="!filtType || item.type == filtType">
      <img class="img" v-lazy="item.activityImageUrl" :alt="item.activitySummary" :title="item.activitySummary">
      <p class="p-type">{{item.typeName}}</p>
      <p class="p-title">{{item.activityTitle}}</p>
      <p>
        <a @click="itemClk(item)" class="p-btn">点击查看</a>
      </p>
    </div>
    <detail></detail>
  </div>
</template>
<script>
  import {promos} from '@@/mixins/shows/promos'
  import detail from './detail'
  export default {
    name: "promos-c",
    mixins:[promos],
    data() {
      return {

      }
    },
    methods: {
      itemClk(item, i) {
        this.readPros(item.id).then(res=>{
        this.$bus.$emit('showProDetail',res)
        }).catch(err=>{
          window.toast(err.message)
        })
      }
    },
    mounted(){
      // 筛选事件监听
      this.$bus.$on('filtPros',eventData=>{
        this.filtType=eventData
      })
      // 是否要自动打开某个tab
      this.getPromos('pc').then(res=>{
        // 设置菜单
        this.$bus.$emit('setProMenu',res.data.types)
        const proId=this.$route.query.latestPreferential
        if(proId){
          this.itemClk({id:proId})
        }
      }).catch(err=>{
        window.toast(err.message)
      })
    },
    components:{detail}
  }

</script>
<style lang="scss" scoped>
  .promo-page {
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    .p-item {
      width: 24%;
      padding:4px;
      text-align:center;
      margin-bottom:20px;
      background-image:url(./images/bg.jpg);
      background-size:100% auto;
      background-repeat:no-repeat;
      background-position:center bottom;
      background-color:#373737;
      margin-right:15px;
      &:nth-child(4n){
        margin-right:0!important;
      }
      &:hover{
        .img{
          transform:scale(1.05);
        }
      }
      .img{
          transition:all 0.3s;
          width:100%;
          height:170px;
          display:block;
      }

      .p-type{
        font-size:18px;
        color:#f2e1c6;
        padding:10px 0;
        background-image:url(./images/line.png);
        background-size:100% auto;
        background-repeat:no-repeat;
        background-position:center bottom;
      }
      .p-title{
        color:#f7dc68;
        font-size:26px;
        line-height:26px;
        font-weight:bold;
        padding:25px 0 20px;
        height: 100px;
      }
      .p-btn{
        display:inline-block;
        padding:8px 20px;
        color:#fff;
        background:#d13d4d;
        border-radius:6px;
        font-size:16px;
        margin-bottom: 20px;
        cursor:pointer;
        transition:all 0.3s;
        &:hover{
          opacity:0.9;
          transform:scale(1.1);
        }
      }

    }
  }

</style>
