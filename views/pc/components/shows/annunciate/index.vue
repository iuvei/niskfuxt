<template>
  <div class="tips-circular">
    <div class="content">
      <Icon type="md-notifications" />
      <marquee style="vertical-align: middle;">
        <router-link v-for="item in myData" :key="item.id" :to="{name:'newsIndex',params:{id:item.id}}">
          {{item.title}}&nbsp;[{{item.createtime|Date}}]&nbsp;&nbsp;&nbsp;
        </router-link>
      </marquee>
    </div>
  </div>
</template>
<script>
  import  {getNewAnnouncement} from '@@/api/show';
  export default {
    name: "",
    data() {
      return {
        myData:[]
      }
    },
    props: {},
    created() {
      getNewAnnouncement().then(res=>{
        res.success&&(this.myData=res.data);
      })
    },
  }
</script>
<style scoped lang="scss">
  .tips-circular {
    height: 40px;
    background: #202020;
    color: #ffd177;
    line-height: 40px;
    font-size:14px;
    .content {
      display:flex;
      box-sizing: border-box;
    }
  }
</style>
