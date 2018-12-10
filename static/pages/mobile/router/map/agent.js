// 代理 路由
import { AUTH_NAME } from '@/store/types' // 权限名称
import Layout from 'mobile/master/t1/show' // 基础外框
import Layout2 from 'mobile/master/t1/page-in' // 二级路由模板页

const index = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/index/index') // 代理中心首页
const ptcommission = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/ptcommission') // 代理佣金报表
const memberlist = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/member-list')// 代理会员列表
const memberbill = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/member-bill')// 代理会员账务
const creditlog = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/credit-log')// 代理额度记录

export default [
  // 代理中心首页
  {
    path: '/agentcenter',
    component: Layout,
    name:'agentcenterLayout',
    children: [{
      path: '/',
      redirect: '/agentcenter/index'
    },
    {
      path: 'index',
      component: index,
      name: 'agentcenter',
      meta: {
        auth: [AUTH_NAME.AGENT]
      }
    }
    ]
  },  
  // 代理用户专有页面
  {
    path: '/agent',
    name: 'agent',
    component: Layout2, // 一级路由版
    meta: {
      auth: [AUTH_NAME.AGENT]// 需要是代理
    },
    children: [
      {
        // 佣金报表
        path: 'ptcommission',
        name: 'agent_ptcommission',
        component: ptcommission,
        meta: {
          headName: '佣金报表'
        }
      },
      // 会员列表
      {
        path: 'memberlist',
        name: 'agent_memberlist',
        component: memberlist,
        meta: {
          headName: '会员列表'
        }
      },
      // 会员账务
      {
        path: 'memberbill',
        name: 'agent_memberbill',
        component: memberbill,
        meta: {
          headName: '会员账务'
        }
      },
      // 额度记录
      {
        path: 'creditlog',
        name: 'agent_creditlog',
        component: creditlog,
        meta: {
          headName: '额度记录'
        }
      }
    ]
  }
]
