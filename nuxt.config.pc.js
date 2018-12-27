module.exports = {
  /**
   * 配置head的头部，会在每个页面嵌入，
   * 
   */
  head: {
    title: 'itgo-模版',
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
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap-grid.min.css'
      }
    ],
    script: [
      // { src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js' },
    ],
  },

  loading: {
    color: '#3B8070'
  },
  /**
   * PC项目的pages地址
   * https://zh.nuxtjs.org/api/configuration-srcdir/
   */
  srcDir: 'views/pc',
  /**
   * router 属性让你可以个性化配置 Nuxt.js 应用的路由
   */
  router: {
    // base: '/app/',
    // linkActiveClass: 'active',
    // linkExactActiveClass: 'active',
    // middleware: 'user-agent',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'views/pc/pages/show/home/index.vue')
      })
    }

  },
  build: {
    vendor: [{
      src: '~plugins/iview',
      ssr: false
    }, {
      src: '~plugins/common',
      ssr: false
    }, {
      src: '~plugins/swiper',
      ssr: false
    }],
    // analyze: true,
    extend(config, {
      isDev,
      isClient
    }) {
      // if (isDev && isClient) {
      config.module.rules.push({
          test: /\.vue$/,
          loader: 'iview-loader',
          options: {
            prefix: false
          },
          exclude: /(node_modules)/
        }
        //     {
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // }
      )
      // }
    }
  },
  //设置缓存
  cache: true,
  //禁止预加载效果
  performance: {
    prefetch: true
  },
  plugins: [{
      src: '~plugins/iview',
      // ssr: false
    },
    {
      src: '~plugins/common',
      ssr: false
    },
    {
      src: '~plugins/swiper',
      ssr: false
    },
    {
      src: '~assets/styles/base.scss'
    }
  ]
}
