<template>
  <div class="user-page">
    <div class="user-top">
      <user-top></user-top>
    </div>
    <div class="user-content content">
      <v-menu></v-menu>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
//  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import vMenu from "./components/menu-user/"
  import userTop from "./components/user-top/"
  export default {
    data() {
      return {};
    },
    props: {},
    methods: {},
    computed: {
//      ...mapGetters(["userData", "islogin", "isAgent", 'isUser', 'showLogin'])
    },
    created() {
    },
    components: {
      vMenu,userTop
    } 
  };
</script>
<style lang="scss">
  .user-page{
    padding:40px 0;
    background:#202020;
    .user-content{
      padding:20px;
      background:#fff;
      min-height:800px;
      display:flex;
      justify-content: space-between;
    }
  .u-c-shows{
    width:910px;
    .u-c-menu{
      display:flex;
      justify-content:space-between;
      .u-c-router{
        border:solid 2px #c7e9fd;
        border-bottom:none!important;
        padding:0 60px;
        font-size:14px;
        color:#343434;
        position:relative;
        cursor:pointer;
          &:before{
            content:'';
            width:100%;
            background:none;
            height:5px;
            position:absolute;
            bottom:-4px;
            left:0;
          }
        &:hover,&.active{
          border:solid 2px #27b9fe;
          &:before{
            background:#fff;
          }
        }
        .icobjh{
          color:#27b9fe;
          margin-right:10px;
          font-size:26px;
          vertical-align:middle;
          height:40px;
          line-height:40px;
        }
      }
    }
    .u-c-box{
      min-height:700px;
      border:solid 2px #27b9fe;
      padding:20px;
    }
  }
  }

</style>

