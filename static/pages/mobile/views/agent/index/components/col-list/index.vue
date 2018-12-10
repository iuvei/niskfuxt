<template>
  <div  :class="['grid-col-new',className]">
    <div v-for="(item,i) in data" :key="item.name+i" @click="item.method||null" class="grid-col-item">
      <div class="iconyg" :class="item.ico"></div>
      <span class="col-item-red ">{{item.view}}</span>
      <span class="col-item-name">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
  export  default {
    props: {
      data: {
        type: Array
      },
      className:{
        type:String
      }
    },
    data(){
      return {}
    },
  }
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
  .grid-col-new {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    margin:r(20) auto;
    .iconyg{
        // @include f(50px);
        width: r(60);
        height: r(50);
        margin: 0 auto;
      }
      .tongqian{
        background: url('./images/ico_agent_win@2x.png') no-repeat;
        background-size: 100% 100%;
      }
      .qianbao{
        background: url('./images/ico_agent_wallet@2x.png') no-repeat;
        background-size: 100% 100%;
        width: r(65);
        height: r(45);
      }
      .youhuiquan1{
        background: url('./images/ico_agent_pro@2x.png') no-repeat;
        background-size: 100% 100%;
      }
      .renshu{
        background: url('./images/ico_agent_vip@2x.png') no-repeat;
        background-size: 100% 100%;
      }
      .zhuceliangtongji{
        background: url('./images/ico_agent_login@2x.png') no-repeat;
        background-size: 100% 100%;
      }
      .meihua{
        background: url('./images/ico_agent_cath@2x.png') no-repeat;
        background-size: 100% 100%;
      }
    .grid-col-item {
      &:nth-child(3n) {
        border-right: none;
      }
      width: 33.33%;
      padding:r(20*2);
      /*flex:1;*/
      box-sizing: border-box;;
      border-right: 1px #e4e4e4 solid;
      border-bottom: 1px #e4e4e4 solid;
      display: flex;
      flex-direction: column;
      text-align: center;
      color: #3f3f3f;
      .col-item-red {
        color: #3f3f3f;
        line-height: r(50);
        @include f(30px);
        margin-top: 10px;
      }
      .col-item-name{
        @include f(22px);
      }
    }
  }
  .grid-col {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top:r(20);
    .grid-col-item {
      &:nth-child(3n) {
        border-right: none;
      }
      width: 33.33%;
      padding:r(15*2);
      /*flex:1;*/
      box-sizing: border-box;;
      border-right: 1px #ccc solid;
      border-bottom: 1px #ccc solid;
      display: flex;
      flex-direction: column;
      text-align: center;
      .col-item-red {
        color: #f66;
      }
    }
  }
</style>
