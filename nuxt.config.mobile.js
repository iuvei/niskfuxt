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
    script: [],
  },

  loading: {
    color: '#3B8070'
  },
  srcDir: 'views/mobile',
  router: {
    // base: '',
    // linkActiveClass: 'active',
    // linkExactActiveClass: 'active',
    // middleware: 'user-agent',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'views/mobile/pages/show/index/index.vue')
      })
    }

  },
  cache: true,

  build: {
    vendor: [{
      src: '~plugins/mint-ui',
      ssr: false
    },{
      src: '~plugins/fastClick',
      ssr: false
    }],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push(
      {
        test: /\.(vue)$/,
        loader:'px2vw-view-loader',
          query:{
            viewportWidth: 750,
            viewportUnit: 'vw',
            minPixelValue:1,
            decimal:3
          }
      // {
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
        })
      }
    }
  },
  //设置缓存
  cache: true,
  //禁止预加载效果
  performance: {
    prefetch: false
  },
  plugins: [{
      src: '~plugins/mint-ui'
    },{
      src: '~plugins/fastClick',
      ssr:false
    },
    {
      src: '~assets/styles/base.scss'
    },
  ]
}
