<template>
  <div class="content-info" v-once>
    <h3  class="about-title">关于我们</h3>
    <p class="about-text">
      {{WEBCONFIG.title}}与{{WEBCONFIG.games}}平台进行合作，共同打造稳定、优质、高端的线上娱乐平台。公司拥有雄厚的经济实力和精英团队，通过自主高效研发，提供稳定，高速，安全的网络游戏平台，为亚洲用户提供最安全最公平的网上投注平台，给客户带来更全面更高质量的游戏体验！</p>
    <p class="about-text">
      {{WEBCONFIG.title}}拥有最丰富的AG视讯直播、电子游艺、体育投注等游戏！游戏项目更多元化，游戏平台更齐全，力求为广大客户提供尽善尽美的服务。北京会一直致力于通过网络与新加坡、中国、泰国、韩国的同行建立广泛的合作伙伴关系，让身处世界各地的客户通过网络所传输的真实赌场映像进行实时投注，拥有全天24小时的专业客服队伍，竭诚欢迎您的到来！
    </p>

    <h3 class="about-title">保密制度</h3>
    <p class="about-text">每位客户信息的保密性对我们来说是至关重要的，我们采用由Thawte提供的128位加密技术来确保数据的安全性。我们承诺，将继续不遗余力地坚持严格实行保密和隐私制度，确保您个人资料的安全，并保证决不将您的资料泄露给任何第三方包括政府，银行等机构。</p>

    <h3  class="about-title">选择{{WEBCONFIG.title}}，十大放心理由</h3>
  <ol class="about-text">
    <li>
    一、平台足够权威 {{WEBCONFIG.title}}与{{WEBCONFIG.games}}平台进行技术合作，并获得GEOTRUST国际认证，确保网站公平、公正、公开。
    </li> 
    <li>
    二、排名足够靠前 {{WEBCONFIG.title}}作为亚洲最具公信力品牌之一，信誉领先排名，在海量娱乐城信息中独占前茅。
    </li>
    <li>
    三、资金足够安全 {{WEBCONFIG.title}}雄厚的资金链信誉良好，大额存款无忧，资金安全有保障，免去您一切后顾之忧。
    </li>
    <li>
    四、取款足够自由 {{WEBCONFIG.title}}24小时不限次数自由取款1-10分钟火速到帐。
    </li>
    <li>
    五、活动足够给力 {{WEBCONFIG.title}}时时推出各项给力活动，优惠送不停，让您真正赚翻天。
    </li>
    <li>
    六、安全足够保障 {{WEBCONFIG.title}}采用128位SSL加密技术和严格的安全管理体系，确保客户资料安全得到最完善的保障。
    </li>
    <li>
    七、服务足够贴心 {{WEBCONFIG.title}}提供7X24小时客服贴心的服务，温馨的呵护每一位玩家。
    </li>
    <li>
    八、营业足够合法 {{WEBCONFIG.title}}是政府认证的大型合法互联网博彩公司。
    </li>
    <li>
    九、操作足够简单 {{WEBCONFIG.title}}秉承以客户为中心的宗旨，在开发之初就设计了诸多人性化的功能和特性，省去繁琐的麻烦，让您轻松操作。
    </li>
    <li>
    十、VIP足够优越 {{WEBCONFIG.title}}VIP尊享贵宾级的专属服务让您享有宾至如归般的帝王享受</li>

  </ol>

    <p class="about-text"> ●{{WEBCONFIG.title}} {{WEBCONFIG.location}} 您的娱乐首选●</p>
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