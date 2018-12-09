// 代理 路由
import {
  AUTH_NAME
} from '@/store/types' // 权限名称
const summary = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/summary') // 数据汇总
const ptcommission = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/ptcommission') // 佣金报表
const memberlist = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/member-list') // 会员列表
const creditlog = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/credit-log') // 额度记录
const memberbill = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/member-bill') // 会员账户

export default [{
  path: 'summary',
  name: 'agent_summary',
  component: summary,
  meta: {
    auth: [AUTH_NAME.AGENT]
  }
},
{
  path: 'ptcommission',
  name: 'agent_ptcommission',
  component: ptcommission,
  meta: {
    auth: [AUTH_NAME.AGENT]
  }
},
{
  path: 'memberList',
  name: 'agent_memberlist',
  component: memberlist,
  meta: {
    auth: [AUTH_NAME.AGENT]
  }
},
{
  path: 'creditlog',
  name: 'agent_creditlog',
  component: creditlog,
  meta: {
    auth: [AUTH_NAME.AGENT]
  }
},
{
  path: 'memberbill',
  name: 'agent_memberbill',
  component: memberbill,
  meta: {
    auth: [AUTH_NAME.AGENT]
  },
  children:[{
    path:'deposit',
    name:'agent_deposit',
    component() {
      return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/deposit')
    },
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },{
    path:'withdraw',
    name:'agent_withdraw',
    component() {
      return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/withdraw')
    },
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },{
    path:'feedback',
    name:'agent_feedback',
    component() {
      return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/feedback')
    },
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },{
    path:'promo',
    name:'agent_promo',
    component() {
      return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/promo')
    },
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },{
    path:'winlost',
    name:'agent_winlose',
    component() {
      return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/winlose')
    },
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  }]
}
]
