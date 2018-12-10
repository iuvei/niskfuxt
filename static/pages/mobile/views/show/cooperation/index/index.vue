<template>
  <div class="cooperation">   
    <div class="menu-box">
      <c-menu>菜单</c-menu>
      <c-banner>banner</c-banner>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import cBanner from "./components/banner"
import cMenu from "./components/menu"
import {mapGetters} from 'vuex';

    export default {
        data() {
            return {};
        },
        props:{},
        methods:{},
        computed: {
          ...mapGetters(["showFooter"]),
        },
        created(){
        },
        components:{
          cBanner,
          cMenu
        }
    };
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.cooperation{
  min-height: 70vh;
  overflow: hidden;
}
  
</style>
