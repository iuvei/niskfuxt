require('~~/assets/styles/lazy-load.scss') // 引入图片懒加载样式

import Vue from 'vue'
import VueLazyload from 'vue-lazyload' // 图片懒加载
// 注册图片懒加载插件
// * 如果引用的是本项目的依赖图片 v-lazy="require(url)"
// * 正常使用 v-lazy="url"
Vue.use(VueLazyload, {
    preLoad: 1.3, // 预加载图片宽高比例
    attempt: 2, // 失败尝试次数
    filter: {
      // 设置支持webp图片，减少带宽压力，加快预览速度
      webp(listener, options) {
        // 确认平台支持webp
        if (!options.supportWebp) return
        // 目前仅游戏大厅的图片托管在7牛CDN
        const isCDN = /staticsources.com\/images/
        if (isCDN.test(listener.src)) {
          // 图片更改为webp，
          listener.src += '?imageView2/2/format/webp'
        }
      }
    }
  })