
<template>
    <Carousel :height="300" :autoplay="false">
      <CarouselItem v-for="item in helps" :key="item">
        <img v-lazy="getHelp(item)">
      </CarouselItem>
    </Carousel>
</template> 
<script>

  export default {
    data() {
      return {
        helps:[
          "01.jpg",
          "02.jpg",
          "03.jpg",
          "04.jpg",
          "05.jpg",
        ]
      }
    },
    methods:{
      getHelp(url){
        return require(`./images/${url}`)
      }
    }
  };

</script>
