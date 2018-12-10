<template>
      <div class="marquee-info">
        <div class="mar-ico">
          <i class="iconay ay-laba"></i>
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
      position: absolute;
      bottom: 0;
      height: r(60);
      line-height: r(60);
      width: 100%;
      z-index: 1;
      padding-left: r(100);
      background:rgba(0,0,0,.65);
      color: #ffffff;
      overflow: hidden;
      white-space: nowrap;
      @include f(30px);
      .mar-ico {
        position: absolute;
        top: 0;
        left: r(22);
        width:r(60);
        .iconay{
          @include f(48px);
          color: $iconcl;
        }
      }
    }
</style>
