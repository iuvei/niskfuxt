<template>
  <div class="user-menu-box">
    <router-link class="user-menu-box-item" :to="{name:'money_depositMenu'}">
      <img src="./img/ico_mine_despoit@2x.png" class="u-m-ico">
      <div class="user-menu-text">存款</div>
    </router-link>
    <router-link class="user-menu-box-item" :to="{name:'money_drawmoney'}">
      <img src="./img/ico_mine_draw@2x.png" class="u-m-ico">
      <div class="user-menu-text">取款</div>
    </router-link>
    <router-link class="user-menu-box-item" :to="{name:'money_transfer'}">
      <img src="./img/ico_mine_tranfer@2x.png" class="u-m-ico">
      <div class="user-menu-text">转账</div>
    </router-link>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {

      };
    },
    props: {
      value: {
      }
    },
    watch: {

    },
    methods: {

    },
    created() {
//      this.loadData();
    },
    computed: {
//      ...mapGetters(["userData", "isAgent"])
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .user-menu-box{
    width: 96%;
    margin: r(-50) auto r(20);
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(174,168,163,0.50), 0 -2px 2px 0 #C8B0AD;
    border-radius: 8px;
    padding: 0;
    height: r(150);    
    display: flex;
    justify-content: space-around;
    .user-menu-box-item{
      height: r(100);
      margin-top: r(23);
      line-height: r(44);
      width: 32%;
      border-right: 1px solid #E4E4E4;
      text-align: center;
      @include f(30px);
      color: #494949;
      &:last-child(3){
        border:none;
      }
      .u-m-ico{
        height:80%;
        padding-bottom:2px;
      }
      span{
        @include f(38px)
      }
    }
  }

</style>
