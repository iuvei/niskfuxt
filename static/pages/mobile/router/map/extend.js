import {
  AUTH_NAME
} from '@/store/types' // 权限名称
import layout3 from 'mobile/master/t1/page-foot'  //去掉顶部的 留有底部
import layout2 from 'mobile/master/t1/page-in'  //去掉顶部的 留有底部
const sport = () => import(/* webpackChunkName: "showh5sport" */'mobile/views/extend/sport')// 体育
const depositMenu = () => import(/* webpackChunkName: "commonh5depositMenu" */'mobile/views/extend/depositMenu')// 存款页面菜单
const sports_triplegift = () => import(/* webpackChunkName: "commonh5sports_triplegift" */'mobile/views/extend/promoteTriple')// 体育优惠专题
const promoPage = () => import(/* webpackChunkName: "commonh5promoPage" */'mobile/views/extend/promoPage')// 其他优惠专题
export default [
   {
     path: '/sport',
     component: sport,
     name:'sport',
     meta: {
       noCache: true, // 是否不缓存改组件,
       meta: {
         title: '沙巴体育'
       }
     }
   },
  // 存款页面菜单
  {
    path: '/depositMenu',
    component: layout3,
    redirect:'/depositMenu/index',
    children:[{
      path: 'index',
      name: 'money_depositMenu',
      component: depositMenu,
      meta: {
        auth: [AUTH_NAME.USER],
        noCache: true, // 不缓存该组件
        headName: '充值',
        isApp: false
      }
    }
    ]
  },
  {
    path: '/sports_triplegift',
    component: layout2,
    redirect:'/sports_triplegift/index',
    children:[{
      path: 'index',
      name: 'sports_triplegift',
      component: sports_triplegift,
      meta: {
        noCache: true, // 是否不缓存改组件,
        headName: '体育三重大礼',
      }
    }
    ]
  },
  {
    path: '/promoPage',
    component: layout2,
    redirect:'/promoPage/index',
    children:[{
      path: 'index',
      name: 'promoPage',
      component: promoPage,
      meta: {
        noCache: true, // 是否不缓存改组件,
        headName: '存款5重好礼',
      }
    }
    ]
  },
]
