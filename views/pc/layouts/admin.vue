<template>
  <layout>
    <div>
      <adminAgent v-if="isAgent"></adminAgent>
      <adminUser v-if="isUser"></adminUser>
    </div>
  </layout>
</template>

<script>
import adminAgent from "./adminAgent";
import adminUser from "./adminUser";
import layout from "./default";
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  middleware:'needLogin',
  data(){
    return{
    }
  },
  components: {
    adminAgent,
    adminUser,
    layout
  },
  computed: {
      ...mapGetters(['isLogin','isUser','isAgent']),
  }
};
</script>

<style>
/* 引用用户中心需用的iconfont */
@import url("//at.alicdn.com/t/font_700045_jfc3obnxxb.css");
</style>
