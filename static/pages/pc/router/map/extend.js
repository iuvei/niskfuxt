/**
 * 说明，这里可以放业务扩展的页面
 */
import Layout from 'pc/master/main'
// 以下页面为专题页，可有可无，看需求
// 捕鱼入口
const fish = () =>
  import( /* webpackChunkName: "fish" */ 'pc/views/extend/fish')
// 真人入口页
const real = () =>
  import( /* webpackChunkName: "real" */ 'pc/views/extend/real')
// 体育入口页
const sport = () =>
  import( /* webpackChunkName: "sport" */ 'pc/views/extend/sport')
// 体育入口页new
const sportNew = () =>
  import( /* webpackChunkName: "sportNew" */ 'pc/views/extend/sport1')
// 棋牌入口页
const chess = () =>
  import( /* webpackChunkName: "sport" */ 'pc/views/extend/chess')
// 彩票入口页
const lottery = () =>
  import( /* webpackChunkName: "sport" */ 'pc/views/extend/lottery')
// 注册页面，非弹窗
const registerIndex = () =>
  import( /* webpackChunkName: "registerIndex" */ 'pc/views/extend/registerPage')
// 注册成功页面，非弹窗
const registerSuccess = () =>
  import( /* webpackChunkName: "registerSuccess" */ 'pc/views/extend/registerSuccess')
// 客服中心首页
const customService = () =>
  import( /* webpackChunkName: "customService" */ 'pc/views/extend/customService')
// 下载教程页
const downloadTch = () =>
  import( /* webpackChunkName: "downloadTch" */ 'pc/views/extend/downloadTch')

// 体育活动单页
const sports_triplegift = () =>
  import( /* webpackChunkName: "sports_triplegift" */ 'pc/views/extend/sports_triplegift')

// 优惠活动单页
const promoPage = () =>
  import( /* webpackChunkName: "promoPage" */ 'pc/views/extend/promoPage')
export default [
  // 捕鱼专题页
  {
    path: '/fish',
    component: Layout,
    children: [{
        path: '/',
        name: 'fishindex',
        redirect: '/fish/index'
      },
      {
        path: 'index',
        component: fish,
        name: 'fish'
      }
    ]
  },
  // 真人专题页
  {
    path: '/real',
    component: Layout,
    children: [{
        path: '/',
        name: 'realindex',
        redirect: '/real/index'
      },
      {
        path: 'index',
        component: real,
        name: 'real'
      }
    ]
  },
  // 体育专题页
  {
    path: '/sport',
    component: Layout,
    children: [{
        path: '/',
        name: 'sportindex',
        redirect: '/sport/index'
      },
      {
        path: 'index',
        component: sport,
        name: 'sport'
      }
    ]
  },
  // 体育专题页new
  {
    path: '/sportNew',
    component: Layout,
    children: [{
        path: '/',
        name: 'sportindexnew',
        redirect: '/sportNew/index'
      },
      {
        path: 'index',
        component: sportNew,
        name: 'sportNew'
      }
    ]
  },
  // 彩票专题页new
  {
    path: '/lottery',
    component: Layout,
    children: [{
        path: '/',
        redirect: '/lottery/index'
      },
      {
        path: 'index',
        component: lottery,
        name: 'lottery'
      }
    ]
  },
  // 棋牌专题页
  {
    path: '/chess',
    component: Layout,
    children: [{
        path: '/',
        name: 'chessindex',
        redirect: '/chess/index'
      },
      {
        path: 'index',
        component: chess,
        name: 'chess'
      }
    ]
  },
  // 注册页，非弹窗
  {
    path: '/register',
    component: Layout,
    children: [{
        path: '/',
        name: 'register',
        redirect: '/register/index'
      },
      {
        path: 'index',
        component: registerIndex,
        name: 'registerIndex'
      }
    ]
  },
  // 注册成功页，非弹窗
  {
    path: '/registerSuccess',
    component: Layout,
    children: [{
        path: '/',
        name: 'registerSuccess',
        redirect: '/registerSuccess/index'
      },
      {
        path: 'index',
        component: registerSuccess,
        name: 'registerSuccessIndex'
      }
    ]
  },
  // 客服中心
  {
    path: '/customService',
    component: Layout,
    children: [{
        path: '/',
        name: 'customService',
        redirect: '/customService/index'
      },
      {
        path: 'index',
        component: customService,
        name: 'customServiceIndex'
      }
    ]
  },
  // 下载教程页
  {
    path: '/downloadTch',
    component: Layout,
    children: [{
        path: '/',
        name: 'downloadTchindex',
        redirect: '/real/index'
      },
      {
        path: 'index',
        component: downloadTch,
        name: 'downloadTch'
      }
    ]
  },
  // 体育活动单页
  {
    path: '/sports_triplegift',
    component: Layout,
    children: [{
        path: '/',
        name: 'sports_triplegiftindex',
        redirect: '/sports_triplegift/index'
      },
      {
        path: 'index',
        component: sports_triplegift,
        name: 'sports_triplegift'
      }
    ]
  },
  // 优惠活动单页
  {
    path: '/promoPage',
    component: Layout,
    children: [{
        path: '/',
        name: 'promoPageindex',
        redirect: '/promoPage/index'
      },
      {
        path: 'index',
        component: promoPage,
        name: 'promoPage'
      }
    ]
  },
]
