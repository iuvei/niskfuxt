<template>
  <div class="content-info" v-once>
    <h3 class="about-title">利益保障</h3>
    <p class="about-text">
      {{WEBCONFIG.title}}所有的游戏皆有共同的优点，无须耗时下载，操作接口简单明了、功能齐全、画面精致，游戏从每一局的开始至结束皆秉持着公平、公正、公开的原则。政府有严格的博彩守则规定，即：公司必需拥有雄厚的经济实力、保证游戏绝对公平、公正、信誉100%，经过严格审核符合政府规定博彩守则的公司，方可授予博彩运营执照，以保证玩家可以完全放心地在北京会进行博弈。北京会以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，北京会绝对是玩家最明智的选择！
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
