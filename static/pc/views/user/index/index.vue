<template>
  <div class="user-page">
    <div class="user-top">
      <v-top></v-top>
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
  import vTop from "./components/user-top/"
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
      vMenu,vTop
    }
  };
</script>
<style lang="scss" scoped>
  .user-page{
    padding:40px 0;
    .user-content{
      padding:20px;
      background:#fff;
      min-height:800px;
      display:flex;
      justify-content: space-between;
    }
  }
</style>

