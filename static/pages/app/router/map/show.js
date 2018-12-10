/**
 * 说明，show文档里的都是展示有关的页面，功能页面不要放这里，例如个人中心
 * / * webpackChunkName: "commonh5deposit" * /  是chunk打包后的文件名
 */
// import Layout from 'mobile/master/t1/show' // 基础外框

// 游戏大厅
const slotgame = () =>
  import(/* webpackChunkName: "showappslotgame" */ 'mobile/views/show/slotgame/index')
// 代理加盟页面
const cooperation = () => import(/* webpackChunkName: "agentapp" */'mobile/views/show/cooperation/index')// 代理加盟
const advantage = () => import(/* webpackChunkName: "agentapp" */'mobile/views/show/cooperation/advantage')// 代理加盟
const proce = () => import(/* webpackChunkName: "agentapp" */'mobile/views/show/cooperation/proce')// 代理加盟
const question = () => import(/* webpackChunkName: "agentapp" */'mobile/views/show/cooperation/question')// 代理加盟
const contact = () => import(/* webpackChunkName: "agentapp" */'mobile/views/show/cooperation/contact')// 代理加盟
// 代理注册页面
const agent_register = () =>
  import(/* webpackChunkName: "showappagentRegister" */ 'mobile/views/show/register-agent')



export default [
  // 配置根路径重定向
  // {
  //   path: '',
  //   redirect: '/slotgame'
  // },
  // 配置index重定向
  {
    path: '/index',
    redirect: '/slotgame'
  },
  // 配置index重定向
  {
    path: '/',
    redirect: '/index'
  },
  // 游戏大厅
  {
    path: '/slotgame/:type?',
    component: slotgame,
      name: 'slotgame',
      meta: {
      noCache: true, // 是否不缓存改组件,
      isAPP:true
    }
  },
  // // 代理注册
  // {
  //   path: '/registeragent',
  //     path: 'index',
  //     component: agent_register,
  //     name: 'agentregister',
  //     meta: {
  //       title: '代理注册'
  //     }
  // },
  // 代理加盟介绍
  {
    path: '/cooperation',
    component: {template:'<router-view></router-view>'},
    children: [{
      path: '/',
      name: 'cooperation',
      component: cooperation,
      redirect: '/cooperation/advantage',
      children:[
        {
          path: 'advantage',
          name: 'agent_advantage',
          component: advantage,
          meta: {
            headName: '品牌介绍'
          }
        },
        {
          path: 'proce',
          name: 'agent_proce',
          component: proce,
          meta: {
            headName: '代理制度'
          }
        },
        {
          path: 'question',
          name: 'agent_question',
          component: question,
          meta: {
            headName: '常见问题'
          }
        },
        {
          path: 'contact',
          name: 'agent_contact',
          component: contact,
          meta: {
            headName: '联系我们'
          }
        },
        {
          path: 'register',
          name: 'agentregister',
          component: agent_register,
          meta: {
            headName: '代理注册'
          }
        }
      ]
    }
    ]
  },
  
]
