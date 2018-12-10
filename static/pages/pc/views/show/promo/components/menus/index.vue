<template>
  <!-- <div class="select">
    <img src="./images/save.png" alt="">
    <div class="mail" @click="setMenu('')" :class="{active:filter==''}"><i class="slider slider0"></i>全部优惠</div>
    <div :class="['mail',{active:filter==item.typeId}]" v-for="(item,i) in menuData" @click="setMenu(item.typeId)" :key="item.typeId"><i class="slider" :class="`slider${i+1}`"></i>{{ item.typeName }}</div>

  </div> -->
  <div class="promo-menu">
    <div class="bg0" @click="setMenu('')" :class="{active:filter==''}"> 全部优惠</div>
    <div :class="[{active:filter==item.typeId}]" v-for="(item,i) in menuData" @click="setMenu(item.typeId)" :key="item.typeId + i">{{ item.typeName }}</div>
  </div>
</template>
<script>
  import {
    queryLatestPreferential
  } from '@/api/show'
  export default {
    name: "",
    data() {
      return {
        filter: "",
        myData: {
          types: [],
        },
        menuData: []
      }
    },
    computed: {
      filterData() {
        if (this.filter == '') {
          return this.myData.records;
        }
        return this.myData.records.filter((item, i) => {
          return item.type == this.filter;
        })
      }
    },
    watch: {},
    methods: {
      setMenu(type) {
        this.filter = type;
        this.$bus.$emit('filtPros', type);
      }
    },
    created() {
      this.$bus.$on('setProMenu', eventData => {
        this.menuData = eventData;
      })
      console.log(this.menus);
    },
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
.promo-menu {
    height: 90px;
    background: #fff url(./images/menu-bg.8686eee.png) no-repeat bottom;
    color: #333;
    font-size: 18px;
    padding-top: 15px;
    position: relative;
    margin-bottom: 15px;
    div {
      height: 48px;
      cursor: pointer;
      line-height: 48px;
      text-align: center;
      display: inline-block;
      margin: 0 33px;
      &.active, &:hover {
        color: #cf1133;
        border-bottom: 2px solid #cf1133;
      }
    }
  }
</style>
