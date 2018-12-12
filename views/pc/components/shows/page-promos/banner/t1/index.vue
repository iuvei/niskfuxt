<template>
  <div class="banner t1">
      <swiper style="height:100%;" :options="swiperOption">
        <swiper-slide >
          <a class="banner-item">
            <img v-lazy="require('./images/banner.jpg')" class="swiper-lazy">
          </a>
        </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
</template>
<script>
  export default {
    data() {
      return {
        bannerList:[],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          // notNextTick: true,
          lazy: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          // swiper configs 所有的配置同swiper官方api配置
          // autoplay: 3000,
          // direction : 'vertical',
          // effect: "coverflow",
          // grabCursor: true,
          slidesPerView:1,
          setWrapperSize: true,
          observer:true,
          // autoHeight: true,
          paginationType: "bullets",
          pagination: {
            el: '.swiper-pagination'
          },
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },
      };
    }
  };
</script>