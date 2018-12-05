module.exports = {
  head: {
    title: 'NUXT--MOBILE',
    meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
    ],
    link: [
      // { rel: 'SHORTCUT ICON', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js'
    }, ],
  },

  loading: {
    color: '#3B8070'
  },
  srcDir: 'views/mobile',
  cache: true,

  build: {
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
    // },

  },
  //设置缓存
  cache: true,
  //禁止预加载效果
  performance: {
    prefetch: false
  },
  plugins: [{
      src: '~plugins/mint-ui'
    },
    {
      src: '~assets/styles/base.scss'
    },
  ]
}
