<template>
  <div class="content-info" v-once>
    <h3 class="about-title">公司责任</h3>
    <p class="about-text">{{WEBCONFIG.title}}承诺提供【负责任博彩】，并确保每位客户能与我们一起享受到博彩的乐趣。但是我们也了解到有小部分的人有时候未必能控制自己的投注行为，如遇相关问题，{{WEBCONFIG.title}}会积极鼓励这些用户及时与我们联络，以便尽所能提供相关帮助。</p>

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