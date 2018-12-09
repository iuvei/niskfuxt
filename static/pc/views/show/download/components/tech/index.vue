<template>
  <div class="tech" v-if="showTech">

    <div class="tech-content">
      <span class="btn-close" @click="showTech=false">
          <img v-lazy="require('./images/close.png')">
      </span>
      <img v-lazy="require('./images/bg.jpg')">
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        showTech:false
      }
    },
    created(){
      this.$bus.$on('setTech',eventData=>{
        this.showTech=eventData
      })
    }

  }
</script>
<style lang="scss" scoped>
.tech{
  background:rgba(0,0,0,0.6);
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  .tech-content{
    width:750px;
    position:absolute;
    text-align:center;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    .btn-close{
      display:inline-block;
      position:absolute;
      top:10px;
      right:10px;
      transition:all 0.5s;
      cursor:pointer;
      &:hover{
        transform:scale(1.05);
      }
    }
  }
}

</style>
