<template>
  <div class="promo-menu content">
    <div class="tab-menu-item" @click="setMenu('')" :class="{active:filter==''}"><span class="icobjh bjh-tubiaozhizuomoban"></span>全部优惠</div>
    <div v-for="(item,i) in menuData" @click="setMenu(item.typeId)" :class="['tab-menu-item',{active:filter==item.typeId}]" :key="i">
      <span class="icobjh" :class="typeIco[item.typeId]"></span>{{ item.typeName }}
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        filter: "",
        // 设置对于的icon图标
        typeIco:{
          '001':'bjh-qianbao',
          '002':'bjh-youhui',
          '003':'bjh-time',
          '004':'bjh-rili'
        },
        menuData:[]
      }
    },
    computed: {},
    watch: {},
    methods: {
      setMenu(type){
        this.filter=type;
        this.$bus.$emit('filtPros',type);
      }
    },
    mounted() {
      this.$bus.$on('setProMenu',eventData=>{
        this.menuData=eventData;
      })
    },
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
.promo-menu{
  margin-top:40px;
  display:flex;
  padding:20px;
  border-radius:10px;
  background:#373738;
  .tab-menu-item{
    background:#202020;
    line-height:50px;
    border-radius:6px;
    color:#fff;
    margin-right:20px;
    padding:0 20px;
    font-size:16px;
    cursor:pointer;
    &:hover,&.active{
      background: rgb(255, 236, 183);
        /* Old browsers */
      background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
        /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
        /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
        /* IE6-9 */
      color:#343434;
      .icobjh{
        color:#f37230;
      }
    }
    .icobjh{
      font-size:30px;
      margin-right:20px;
      vertical-align:middle;
    }
  }
}

</style>
