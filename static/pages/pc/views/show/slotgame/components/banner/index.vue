<template>
  <banner :bannerData="bannerData" v-if="bannerData" :showPage="bannerConfig.show" :styleControl="bannerConfig.control" :height="bannerConfig.height"></banner>
</template>
<script>
  import banner from "pc/components/banner";
  import {queryBannerList} from "@/api/show"
  
  export default {
    data() {
      return {
        bannerData:[],
        bannerConfig:{
          show:true,
          height:'360',
          control:{
            top:'330px',
            left:'50%',
            width:"1200px",
            transform:'translateX(-50%)'
          }
        }
      };
    },
    methods: {
      getBannerList(type){
        queryBannerList({bannerType: 0}).then(res => {
          if (res.success) {
            this.bannerData = res.data.filter(item=>{
              return item.describe=='GAME'
            });
          }
        })
      }
    },
    created() {
      this.getBannerList()
    },
    components: {
      banner
    }
  };
</script>