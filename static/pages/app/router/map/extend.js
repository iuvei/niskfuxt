// const index = () => import(/* webpackChunkName: "showh5index" */'mobile/views/show/index')// 首页
// 客服中心
const serviceCenter = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter')
//资金问题
const financial_problems = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter/components/financial-problems')
const account_problems = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter/components/account-problems')
const discount_problems = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter/components/discount-problems')
const game_problems = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter/components/game-problems')
const aboutUs = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter/components/aboutUs')
const other_problems = () =>
  import(/* webpackChunkName: "appserviceCenter" */ 'mobile/views/show/serviceCenter/components/other-problems')
const sports_triplegift = () => import(/* webpackChunkName: "commonh5sports_triplegift" */'mobile/views/extend/promoteTriple')// 体育优惠专题
const promoPage = () => import(/* webpackChunkName: "commonh5promoPage" */'mobile/views/extend/promoPage')// 其他优惠专题
export default [
  // {
    // path: '',
    // component: index,
    // redirect:'/index',
    // meta: {
      // noCache: true, // 是否不缓存改组件,
      // meta: {
        // title: '首页'
      // }
    // }
  // }
  {
    path: '/sports_triplegift',
    component: sports_triplegift,
    name:'sports_triplegift',
    meta: {
      noCache: true, // 是否不缓存改组件,
      meta: {
        // title: '沙巴体育'
      }
    }
  },
  {
    path: '/promoPage',
    component: promoPage,
    name:'promoPage',
    meta: {
      noCache: true, // 是否不缓存改组件,
      meta: {
        title: '存款5重好礼',
        headName: '存款5重好礼',

      }
    }
  },
  //客服中心
  {
    path: '/serviceCenter',
    component: {template:'<router-view></router-view>'},
    children:[
      {
        path: '/',
        name: 'SCindex',
        redirect: '/serviceCenter/index'
      },
      {
        path: 'index',
        component: serviceCenter,
        name: 'serviceCenter',
        meta: {
          title: '客服中心'
        }
      },
      {
        path: 'financial_problems/:id?',
        component: financial_problems,
        name: 'financial_problems',
        meta: {
          title: '资金问题'
        }
      },
      {
        path: 'account_problems/:id?',
        component: account_problems,
        name: 'account_problems',
        meta: {
          title: '账号问题'
        }
      },
      {
        path: 'discount_problems/:id?',
        component: discount_problems,
        name: 'discount_problems',
        meta: {
          title: '优惠问题'
        }
      },
      {
        path: 'game_problems/:id?',
        component: game_problems,
        name: 'game_problems',
        meta: {
          title: '游戏问题'
        }
      },
      {
        path: 'aboutUs',
        component: aboutUs,
        name: 'aboutUs',
        meta: {
          title: '关于我们'
        }
      },
      {
        path: 'other_problems',
        component: other_problems,
        name: 'other_problems',
        meta: {
          title: '其他问题'
        }
      }
    ]
  }
]
