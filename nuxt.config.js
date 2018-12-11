var _ = require('lodash');
const config_pc = require('./nuxt.config.pc.js')
const config_mobile = require('./nuxt.config.mobile.js')
// 合并配置
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
/**
 * 根据启动命令，装载PC/MOBILE配置文档
 */
const mergeData = process.env.DEVICE.toUpperCase() == 'MOBILE' ? config_mobile : config_pc
module.exports = _.mergeWith({
  head: {
    title: 'NUXT',
    meta: [{
        charset: 'utf-8'
      },
      {
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
    link: [{
        rel: 'SHORTCUT ICON',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
      }

    ],
    script: [
      // { src: 'https://easytuan.gitee.io/node-elm-api/public/flexible.js' },
    ],
  },
  router: {
    // middleware: {src:'~~plugins/lazyLoad'}
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  },
  /**
   *开启缓存 
   */
  cache: true,
  build: {
    /**
     * 将查看源代码中的css采用外部引入方式
     */
    extractCSS: {
      allChunks: true
    },
    filenames: {
      chunk: ({
        isDev
      }) => isDev ? '[name].js' : '[id].[chunkhash].js'
    },
    filenames: {
      app: ({
        isDev
      }) => isDev ? '[name].js' : 'app_[chunkhash].js',
      chunk: ({
        isDev
      }) => isDev ? '[name].js' : 'chunk_[chunkhash].js',
      css: ({
        isDev
      }) => isDev ? '[name].js' : 'css/[contenthash].css',
      img: ({
        isDev
      }) => isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]',
      font: ({
        isDev
      }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({
        isDev
      }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },
    vendor: [{
        src: '~~plugins/lazyLoad',
        ssr: false
      },
      {
        src: '~~plugins/vueQr',
        ssr: false
      },
      {
        src: '~~plugins/eventBus',
        ssr: false
      },
      {
        src: '~~plugins/localStorage',
        ssr: false
      },
      {
        src: '~~plugins/sessionStorage',
        ssr: false
      },
      {
        src: '~~plugins/clipBoard',
        ssr: false
      },
      {
        src: '~~plugins/axios',
        ssr: false
      },
      {
        src: '~~plugins/filters',
        ssr: false
      },
      {
        src: '~~plugins/extend',
        ssr: false
      },
      {
        src: '~~plugins/config',
        ssr: false
      },
    ],
    // vendor: ['axios', 'mint-ui', 'js-cookie'],
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
            test: /\.less$/,
            loader: "less-loader"
          },
          //   {
          //   enforce: 'pre',
          //   test: /\.(js|vue)$/,
          //   loader: 'eslint-loader',
          //   exclude: /(node_modules)/
          // }
        )
      }
    }
  },
  //禁止预加载效果
  performance: {
    prefetch: false
  },
  modules: ['@nuxtjs/pwa'],
  plugins: [{
      src: '~~plugins/lazyLoad',
      ssr: false
    },
    {
      src: '~~plugins/vueQr',
      ssr: false
    },
    {
      src: '~~plugins/eventBus',
      ssr: false
    },
    {
      src: '~~plugins/localStorage',
      ssr: false
    },
    {
      src: '~~plugins/clipBoard',
      ssr: false
    },
    {
      src: '~~plugins/sessionStorage',
      ssr: false
    },
    {
      src: '~~plugins/axios',
      ssr: false
    },
    {
      src: '~~plugins/filters',
      ssr: false
    },
    {
      src: '~~plugins/extend',
      ssr: false
    },
    {
      src: '~~plugins/config',
      ssr: false
    },
  ],
  proxy: {
    url: 'http://qhc.itgo88.com', // 接口反向代理目标地址
  },
  manifest: {
    name: 'nuxt-cms',
    description: 'A pwa program',
  }
}, mergeData, customizer)
