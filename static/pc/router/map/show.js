const index = () =>
  import(/* webpackChunkName: "index" */ 'pc/views/show/index') // 首页
const slotgame = () =>
  import(/* webpackChunkName: "slotgame" */ 'pc/views/show/slotgame')
const promo = () =>
  import(/* webpackChunkName: "promo" */ 'pc/views/show/promo')
const download = () =>
  import(/* webpackChunkName: "download" */ 'pc/views/show/download')
const notice = () =>
  import(/* webpackChunkName: "notice" */ 'pc/views/show/notice')
const fish = () =>
  import(/* webpackChunkName: "fish" */ 'pc/views/show/fish')
const real = () =>
  import(/* webpackChunkName: "real" */ 'pc/views/show/real')
const sport = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/sport2')
// 关于我们路由
const aboutUs = () =>
  import(/* webpackChunkName: "about" */ 'pc/views/show/about')
const aboutUs_tab1 = () =>
  import(/* webpackChunkName: "aboutpc1" */ 'pc/views/show/about/pages/aboutus1')
const aboutUs_tab2 = () =>
  import(/* webpackChunkName: "aboutpc2" */ 'pc/views/show/about/pages/aboutus2')
const aboutUs_tab3 = () =>
  import(/* webpackChunkName: "aboutpc3" */ 'pc/views/show/about/pages/aboutus3')
const aboutUs_tab4 = () =>
  import(/* webpackChunkName: "aboutpc4" */ 'pc/views/show/about/pages/aboutus4')
const aboutUs_tab5 = () =>
  import(/* webpackChunkName: "aboutpc5" */ 'pc/views/show/about/pages/aboutus5')
const aboutUs_tab6 = () =>
  import(/* webpackChunkName: "aboutpc6" */ 'pc/views/show/about/pages/aboutus6')
const aboutUs_tab7 = () =>
  import(/* webpackChunkName: "aboutpc7" */ 'pc/views/show/about/pages/aboutus7')

export default [{
  path: '/index',
  name: 'index',
  component: index,
  meta: {
    test: 'test'
  }
},
{
  path: '/',
  name: 'aindex',
  redirect: '/index'
},
{
  path: '/notice/:id?',
  name: 'notice',
  component: notice
},
{
  path: '/promo',
  name: 'promo',
  component: promo
}, {
  path: '/download',
  name: 'download',
  component: download
},
{
  path: '/slotgame/:type?',
  name: 'slotgame',
  component: slotgame
},
{
  path: '/fish',
  name: 'fish',
  component: fish
},
{
  path: '/real',
  name: 'real',
  component: real
},
{
  path: '/sport',
  name: 'sport',
  component: sport
},
{
  path: '/aboutus',
  name: 'aboutus',
  component: aboutUs,
  redirect: '/aboutus/aboutustab1',
  children: [{
    path: 'aboutustab1',
    component: aboutUs_tab1
  }, {
    path: 'aboutustab2',
    component: aboutUs_tab2
  }, {
    path: 'aboutustab3',
    component: aboutUs_tab3
  }, {
    path: 'aboutustab4',
    component: aboutUs_tab4
  }, {
    path: 'aboutustab5',
    component: aboutUs_tab5
  }, {
    path: 'aboutustab6',
    component: aboutUs_tab6
  },
  {
    path: 'aboutustab7',
    component: aboutUs_tab7
  }
  ]
}]