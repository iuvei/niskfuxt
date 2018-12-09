<template>
  <div class="content-info" v-once>
    <h3 class="about-title">公司宗旨</h3>
    <p class="about-text">
      {{WEBCONFIG.title}}的经营一直秉持著服务与诚信的宗旨，10年多用心的努力，在网路博彩市场上，虽无响亮的知名度，但对客户的热诚与一诺千金的信用，早已深植人心。尤以24小时的客户服务，以及快速的出款服务，更是北京会会员有目共睹。在市场上林林总总水准参差不一的网站中，您加入北京会，将会是最明智的选择。

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
