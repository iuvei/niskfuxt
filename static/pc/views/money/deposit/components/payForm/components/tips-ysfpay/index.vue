
<template>
    <el-carousel height="600px" :autoplay="false" arrow="always">
      <el-carousel-item v-for="item in helps" :key="item">
        <img v-lazy="getHelp(item)">
      </el-carousel-item>
    </el-carousel>
</template> 
<script>

  export default {
    data() {
      return {
        helps:[
          "yun-01.jpg",
          "yun-02.jpg",
          "yun-03.gif",
          "yun-04.jpg",
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
<style lang="scss" scoped>
  .el-carousel__container{
    text-align:center;
    img{
      display:inline-block;
      width:80%;
      margin:0 10%;
    }
  }
</style>