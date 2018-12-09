<template>
  <div class="content-info" v-once>
    <h3 class="about-title">专业团队</h3>
    <p class="about-text">
      {{WEBCONFIG.title}}提供的网上娱乐系统采用最新先进的IT技术，保证玩家交易数据的安全，保护客户的个人隐私。网站密码专户专用，客户服务电话24小时畅通。公司提供的网络游戏平台，可让身处世界各地的客户，足不出户通过网络所传输的真实赌场影像进行实时投注。
    </p>
  </div>
</template>
<script>
  import {WEBCONFIG} from '@/assets/data/index'
  export default {
    data() {
      return {
        WEBCONFIG
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    activated() {
    },
    components: {}
  }
</script>
<style spcoed lang="scss">
  @import "./style.scss"
</style>