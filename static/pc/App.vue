<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <!-- 导航条 -->
    <nav-menu></nav-menu>
      <!-- 需要缓存的页面 -->
      <keep-alive v-if="!$route.meta.noCache">
        <router-view >
          <!-- 页面内容可视部分 -->
        </router-view>
      </keep-alive>
      <router-view v-else>
          <!-- 页面内容可视部分 -->
      </router-view>
    <!-- 注册弹框 -->
    <vRigester></vRigester>
    <!-- 右侧工具栏 -->
    <right-server></right-server>
    <!-- 底部 -->
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import navMenu from 'pc/components/nav'
  import rightServer from 'pc/components/right-server'
  import vFooter from 'pc/components/footer'
  import vHeader from 'pc/components/header'
  import vRigester from 'pc/views/common/auth/register'

  export default {
    data() {
      return {
      }
    },
    components: {
      navMenu,
      vFooter,
      vHeader,
      rightServer,
      vRigester
    }
  }

</script>
