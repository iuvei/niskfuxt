module.exports = {
  /**
   * 配置head的头部，会在每个页面嵌入，
   * 
   */
  head: {
    title: 'itgo-模版',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      // { rel: 'SHORTCUT ICON', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js' },
    ],
  },

  loading: { color: '#3B8070' },
  /**
   * PC项目的pages地址
   * https://zh.nuxtjs.org/api/configuration-srcdir/
   */
  srcDir: 'views/pc', 

  build: {
    vendor: ['axios', 'js-cookie'],
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  //设置缓存
  cache: true,
  //禁止预加载效果
  performance: {
    prefetch: false
  },
  plugins: [
    { src: '~plugins/iview'},
    { src: '~assets/styles/base.scss' },
    { src: '~~plugins/lazy-load'},
    { src: '~~plugins/event-bus'},
  ]
}

