<template>
      <div class="marquee-info">
        <div class="mar-ico">
          <img src="./images/announce.png" alt="">
        </div>
        <marquee ref="mq" class="marquee-content" behavior="scroll" direction="left" loop="infinite" scrollamount="3">
          <router-link v-for="(item,i) in announcement" :key="i" :to="{name:'notice'}">
            [{{item.createtime}}]&nbsp;<span style="margin-right:0.3rem">{{item.title}}</span>
          </router-link>
        </marquee>
      </div>
</template>
<script>
  import { getNewAnnouncement} from "@/api/show"

  export default {
    data() {
      return {
        announcement:[]
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      getAnnounce(){
        getNewAnnouncement().then(res => {
          this.announcement = res.data;
          // this.$refs.mq.start();
        })
      }
    },
    created() {
      this.getAnnounce({bannerType:1})
    }
  }
</script>
<style spcoed lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
    .marquee-info {
      position: relative;
      height: r(60);
      line-height: r(60);
      width: 100%;
      z-index: 1;
      padding-left: r(100);
      background:#000c3b;
      color:#ffffff;
      overflow: hidden;
      white-space: nowrap;
      border-top: 1px solid #31537b;
      border-bottom: 1px solid #31537b;
      @include f(30px);
      .mar-ico {
        position: absolute;
        top: 0;
        left: r(22);
        width:r(80);
        text-align: center;
        img {
          width: 55%;
          margin-top: r(-5);
        }
      }
    }
</style>
