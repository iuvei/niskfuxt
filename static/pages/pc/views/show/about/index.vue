<template>
  <div class="service">
    <div class="self-main clearfix wr">
      <menus></menus>
      <!-- <component :is="showTab[showKey]"></component> -->
      <div class="self-content fl">
        <div class="self-tit clearfix">
          <p class="fl">
            <router-link :to="{name:'home'}"> 首页</router-link> &gt;
            <router-link :to="{name:'customServiceIndex'}">客服中心</router-link> &gt;
            <span class="title light">{{title}}</span>
          </p>
          <a class="fr" :href="SETTING.live800" target="_blank">
            <i class="iconay ay-xiaotuziCduan-"></i>
          </a>
        </div>
        <h3 class="title t-tit">{{title}}</h3>
        <div class="tab-content">
          <component :is="showTab[showKey]"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import menus from './components/menus'
  import tab1 from './pages/aboutus-tab1'
  import tab2 from './pages/aboutus-tab2'
  import tab3 from './pages/aboutus-tab3'
  import tab4 from './pages/aboutus-tab4'
  import tab5 from './pages/aboutus-tab5'
  import tab6 from './pages/aboutus-tab6'
  import tab7 from './pages/aboutus-tab7'
  import {
    SETTING
  } from "@/assets/data"
  export default {
    name: "",
    data() {
      return {
        showKey: 'tab1',
        SETTING,
        showTab: {
          'tab1': tab1,
          'tab2': tab2,
          'tab3': tab3,
          'tab4': tab4,
          'tab5': tab5,
          'tab6': tab6,
          'tab7': tab7
        },
        title: ''
      }
    },
    props: {},
    computed: {},
    watch: {
      '$route' (val) {
        // 监听路由，根据params切换显示选项
        if (this.$route.params && this.$route.params.tab) {
          this.showKey = this.$route.params.tab
          switch (this.$route.params.tab) {
            case 'tab1':
              this.title = '资金问题'
              break;
            case 'tab2':
              this.title = '账户问题'
              break;
            case 'tab3':
              this.title = '优惠问题'
              break;
            case 'tab4':
              this.title = '游戏问题'
              break;
            case 'tab5':
              this.title = '常见问题'
              break;
            default:
              this.title = '关于我们'
              break;
          }
        } else {
          this.showKey = 'tab1'
        }
      }
    },
    components: {
      menus
    },
    created() {
      if (this.$route.params && this.$route.params.tab) {
        this.showKey = this.$route.params.tab
        switch (this.$route.params.tab) {
          case 'tab1':
            this.title = '资金问题'
            break;
          case 'tab2':
            this.title = '账户问题'
            break;
          case 'tab3':
            this.title = '优惠问题'
            break;
          case 'tab4':
            this.title = '游戏问题'
            break;
          case 'tab5':
            this.title = '常见问题'
            break;
          default:
            this.title = '关于我们'
            break;
        }
      }
    },
  }

</script>
<style lang="scss" scoped>
  .service {
    background: #eee;
    color: #666;
    line-height: 24px;
    .self-main {
      padding: 30px 0;
    }
    .wr {
      width: 1200px;
      margin: 0 auto;
    }
    .clearfix {
      zoom: 1;
      &::before,
      &::after {
        content: '';
        display: table;
      }
      &::after {
        clear: both;
        height: 0;
        visibility: hidden;
        overflow: hidden;
      }
    }
    .self-content {
      background: #fff;
      margin-left: 20px;
      width: 960px;
      .self-tit {
        line-height: 60px;
        padding: 0 20px;
        background: #f4f4f4;
        font-size: 16px;
        height: 60px;
        .iconay {
          font-size: 42px;
          color: #b58f53;
        }
      }
      .light {
        opacity: .7;
      }
      .t-icon {
        margin-top: 15px;
      }

      .t-tit {
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ccc;
        margin: 30px 0 0;
        padding-bottom: 20px;
        font-weight: normal;
      }
      .tab-content {
        padding: 7px 35px 30px;
      }
    }
  }

</style>
