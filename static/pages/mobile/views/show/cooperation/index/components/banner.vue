<template>
  <div class='c-banner'>
    <img :src='imgsrc'>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              imgsrc:''
            };
        },
        props:{},
        methods:{},
        computed:{},
        created(){
          this.imgsrc = require(`./images/${this.$route.path.split('/')[2]}.png`)
        },
        components:{},
        watch: {
          '$route'(val) {
            // 根据路由params来筛选平台
            if(val.path.split('/')[1] == "cooperation"){
              this.imgsrc = require(`./images/${val.path.split('/')[2]}.png`)
            }
          }
        }
    };
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
  .c-banner {
    img {
      width: 100%;
      display: block;
      background-color: #ffffff;
    }
  }
</style>
