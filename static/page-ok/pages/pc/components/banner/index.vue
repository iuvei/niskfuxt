<template>
  <div class="banners" v-if="bannerData" :style="'height:'+height+'px;'">
    <transition-group name="fade" tag="div">
      <a v-for="(item,i) in bannerData" :key="i" :class="['opacity-item',{active:active==i}]" v-show="active==i" ref="i" :href="item.hyperlinkUrl" :style="`background-image:url(${item.showUrl})`"></a>
    </transition-group>
    <div class="banner-page">
      <a v-for="(item,i) in bannerData" :key="i" :class="['ban-btn',{active:active==i}]" href="javascript:void(0);" @click="active=i"></a>
    </div>
  </div>
</template>
<script>
  import {queryBannerList} from "@/api/show"
  export default {
    data() {
      return {
        active: 0,
        id: 0,
        items:[1,2,3,4]
      }
    },
    props:{
      "bannerData":{
        type:Array,
        default:[{
          hyperlinkUrl:'',
          showUrl:''
        }]
      },
      "height":{
        type:String,
        default:"240px"
      },
      "styleControl":{
        type:Object
      }
    },
    computed: {},
    watch: {
      active(cur, old) {
        this.move(cur, old)
      },
      bannerData(){
          let $this = this;
          if (this.bannerData.length > 1) {
            $this.id = window.setInterval(() => {
              $this.next();
            },5000)
          }
      }
    },
    methods: {
      move(cur, old) {
      },
      next() {
        this.active = (this.active + 1) % this.bannerData.length;
      },
      prev() {
        if (this.active == 0) {
          this.active = this.bannerData.length - 1;
        }else{
          this.active--;
        }
      }
    },
    beforeDestroy() {
      window.clearInterval(this.id)
    },
    mounted() {
    },
    components: {}
  }
</script>
<style lang="scss" spcoed>
  .banners {
    max-width: 1920px;
    height: 620px;
    // overflow: hidden;
    position: relative;
    margin: 0 auto;
    .opacity-item {
      position: absolute;
      display:block;
      left: 0;
      top: 0;
      height:100%;
      width:100%;
      background-repeat:no-repeat;
      background-size:cover;
      background-position:center center;
      &.active {
        z-index: 1;
      }
    }
    .banner-page {
      width: 100%;
      text-align: center;
      z-index: 2;
      bottom: 78px;
      left: 0;
      position: absolute;
      > * {
        display: inline-block;
        height:16px;
        width: 16px;
        margin: 0 5px;
        border-radius: 50%;
        background: #3a3a3a;
        &.active {
          background: #ff6e07;
          border-radius:8px;
          width: 40px;
        }
      }
    }
    // 动画
    .fade-enter-active, .fade-leave-active {
      transition: opacity 1.5s
    }
    .fade-enter,.fade-leave-to{
      opacity: 0
    }
  }
</style>
