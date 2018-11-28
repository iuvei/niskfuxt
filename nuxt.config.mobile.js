module.exports = {
  head: {
    title: '饿了么--MOBILE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      { rel: 'SHORTCUT ICON', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js' },
    ],
  },

  loading: { color: '#3B8070' },

  cache: true,

  build: {
    /**
     * 将查看源代码中的css采用外部引入方式
     */
    extractCSS: {
      allChunks: true
    },
    vendor: ['axios', 'mint-ui', 'js-cookie'],
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
    { src: '~plugins/mint-ui' ,ssr:false},
    { src: '~assets/styles/base.scss' },
  ],
  proxy:{
    url:'https://qhc16.com', // 接口反向代理目标地址
  }
}

