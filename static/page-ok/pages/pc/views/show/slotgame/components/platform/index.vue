<template>
  <ul class="tas-fixed-width tabs">
    <li v-for="(item,i) in platformData" :key="item.name + i" 
      class="tab col" :class="{active:active==item.value}">
      <a href="javascript:void(0);" :class="{active:active==item.value}" @click="chooseType(item)">{{item.name}}</a>
    </li>
    <!-- <li class="tab col" @click="open(Games.href_bbslot, 'BBIN老虎机', 900, 640, true)">
      <a href="javascript:void(0);">BBIN平台</a>
    </li> -->
  </ul>
</template>
<script>
  import { Games } from "@/assets/data";
  import {platformData} from "@/assets/data/index"
  import openWindow from "@/util/openWindow";
  export default {
    data() {
      return {
        Games,
        active: "PT2TIGER",
        platformData,
        inputVal: '',
        platformData1:[],
        gameMinIndex:0,
        gameMaxIndex:5,
        gamelen:"",
      }
    },
    methods:{
      chooseType(item){
        // PT特殊处理
        if(item.value == 'PT2TIGER'){
          this.active = 'PT2TIGER'
          this.$bus.$emit('serachGame', 'category', 'PT');
        }else{
          this.active = item.value
          this.$bus.$emit('serachGame', 'category', item.value);
        }
        
      },
      open(url, title, w, h, needLogin) {
        if (needLogin) {
          if (!this.islogin) {
            window.toast("请先登录!");
            return;
          }
        }
        openWindow(url, title, w, h);
      }
    },
    created() {
      
    },
  }

</script>
<style lang="scss" scoped>
.tas-fixed-width{
  display: flex;
  padding-left: 0;
  list-style-type: none;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  height: 48px;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  white-space: nowrap;
  .tab{
    display: inline-block;
    text-align:center;
    line-height: 48px;
    padding: 0;
    margin: 0;
    text-transform:uppercase;
    flex:1;
    &.active{
      border-bottom: 2px solid #2293fc;
    }
  }
}
</style>
