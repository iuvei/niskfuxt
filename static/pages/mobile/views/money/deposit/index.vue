<template>
  <div class="page_content_wrap thirdPay_type" style="padding-top: 0;">
    <!-- <vHeader v-if="!isAPP"></vHeader> -->
    <!-- <types @setClasses="setClasses"></types> -->
    <header class="header-back" v-if="!isApp">
        <a @click="doClick" class="back-link"><i class="iconfont icon-arrow_l"></i></a>
        <slot>
            {{$route.meta.headName||$route.meta.title}}
        </slot>
    </header>
    <classes @selectPayInfo="selectPayInfo" :classes="classesSelect" :class="{notappclass:!isApp}"></classes>
    <payForm :payItem='infoSelect'></payForm>
    <!-- <v-footer></v-footer> -->
  </div>
</template>
<script>
  import types from './components/types'
  import classes from './components/classes'
  import payForm from './components/payForm'
  import vHeader from 'mobile/master/t1/page-in/components/header-back'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        classesSelect: [],
        infoSelect: {},
        paySelect: 'wechat',
        isApp:false
      }
    },
    methods: {
      // setClasses(data) {
      //   this.classesSelect = data;
      //   this.infoSelect = {};
      // },
      selectPayInfo(info) {
        this.infoSelect = info
      },
      doClick(){
        if (this.back && typeof this.back == 'function') {
          this.back();
        } else {
          this.$router.back();
        }
      }
    },
    created() {
      this.$bus.$on('setClasses',eventData=>{
        this.classesSelect = eventData;
        this.infoSelect = {};
      })
      console.log(this.$route.meta.isApp)
      if (this.$route.meta.isApp) {
          console.log('app')
          this.isApp = true
      }else{
          console.log('mobile')
          this.isApp = false
      }
    },
    components: {types,classes,payForm,vHeader}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .header-back{
        position: fixed;
        top:0;
        width:100%;
        z-index: 99;
        background:$herder-bg;
        color: $main-cl;
        height: r(100);
        text-align: center;
        line-height: r(100);
        @include  f(36px);
        .back-link{
        position: absolute;
        height: 100%;
        left:0;
        width:r(88);
        top:50%;
        transform:translateY(-50%);
        text-align: center;
        }
        .icon-arrow_l{
        @include f(44px)
        }
    }
    .notappclass{
      padding-top: r(100);
    }
</style>
