<template>
  <div class="content-info" v-once>
    <h3 class="about-title">客户至上</h3>
    <p class="about-text">1.{{WEBCONFIG.title}}提供7×24小时专业的客户服务，随时解决客户的咨询及问题； </p>
    <p class="about-text">2.多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议； </p>
    <p class="about-text">3.举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。</p>

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
