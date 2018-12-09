import { AUTH_NAME } from '@/store/types'
import master from 'pc/views/common/master' // 模板
// import agent from './agent'

// let index = () =>
//   import(/* webpackChunkName: "userpcindex" */ 'pc/views/user/index') //用户首页
const datum = () =>
  import(/* webpackChunkName: "userpcinfo" */ 'pc/views/user/datum') // 个人资料
const setting = () =>
  import(/* webpackChunkName: "settingpcsetting" */ 'pc/views/user/setting') // 用户设置
const banks = () =>
  import(/* webpackChunkName: "bankspcbank" */ 'pc/views/user/banks') // banks设置
const password = () =>
  import(/* webpackChunkName: "passwordpcpwd" */ 'pc/views/user/pwd/password') // password
const payword = () =>
  import(/* webpackChunkName: "passwordpcpaypwd" */ 'pc/views/user/pwd/payword') // pwdword
import discount from 'pc/views/user/discount'
const tech = () =>
  import(/* webpackChunkName: "tech" */ 'pc/views/show/deposit-tech') // tech
// import finance from 'pc/views/user/finance' // 财务服务

// import finance from 'pc/views/user/finance' // 财务服务

const log = () =>
  import(/* webpackChunkName: "userlog" */ 'pc/views/user/log') // 记录查询
const message = () =>
  import(/* webpackChunkName: "usermessage" */ 'pc/views/user/message') // 站内消息

export default [{
  path: '/user',
  name: 'user',
  component: master,
  redirect: '/user/setting',
  meta: {
    auth: [AUTH_NAME.USER]
  },
  children: [
    {
      path: 'setting',
      component: setting,
      name: 'user_setting',
      redirect: 'setting/datum',
      meta: {
        auth: [AUTH_NAME.USER]
      },
      children: [
        {
          path: 'datum',
          component: datum,
          name: 'user_datum',
          meta: {
            auth: [AUTH_NAME.USER]
          }
        },
        {
          path: 'banks',
          component: banks,
          name: 'user_banks',
          meta: {
            auth: [AUTH_NAME.USER]
          }
        },
        {
          path: 'password',
          component: password,
          name: 'user_password',
          meta: {
            auth: [AUTH_NAME.USER]
          }
        },
        {
          path: 'payword',
          component: payword,
          name: 'user_payword',
          meta: {
            auth: [AUTH_NAME.USER]
          }
        }
      ]
    },
    // {
    //   path: 'datum',
    //   name: 'user_datum',
    //   component: datum,
    //   meta: {
    //     auth: [AUTH_NAME.USER, AUTH_NAME.AGENT]
    //   }
    // },
    {
      // 仅普通用户领取优惠
      path: 'discount',
      name: 'user_discount',
      component: discount,
      redirect: 'discount/savesend',
      meta: {
        auth: [AUTH_NAME.USER]
      },
      children: [
      //   {
      //   path: 'experience',
      //   name: 'discount_experience',
      //   component() {
      //     return import(/* webpackChunkName: "discountpcexpergold" */ 'pc/views/user/discount/components/experience-gold')
      //   },
      //   meta: {
      //     auth: [AUTH_NAME.USER]
      //   }
      // },
      {
        path: 'savesend',
        name: 'discount_savesend',
        component() {
          return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/user/discount/components/save-send')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'redenvelope',
        name: 'discount_redenvelope',
        component() {
          return import(/* webpackChunkName: "discountpcredcode" */ 'pc/views/user/discount/components/red-envelope')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'washcode',
        name: 'discount_washcode',
        component() {
          return import(/* webpackChunkName: "discountpcwashcode" */ 'pc/views/user/discount/components/wash-code')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'coupon',
        name: 'discount_coupon',
        component() {
          return import(/* webpackChunkName: "discountpcdiscount" */ 'pc/views/user/discount/components/discount-code')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'help',
        name: 'discount_help',
        component() {
          return import(/* webpackChunkName: "discountpchelpgode" */ 'pc/views/user/discount/components//help-gold')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'vip',
        name: 'discount_vip',
        component() {
          return import(/* webpackChunkName: "discountpcvip" */ 'pc/views/user/discount/components/vip-gold')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'birthday',
        name: 'discount_birthday',
        component() {
          return import(/* webpackChunkName: "discountpcbirthday" */ 'pc/views/user/discount/components/birthday-gold')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      },
      {
        path: 'recommend',
        name: 'discount_recommend',
        component() {
          return import(/* webpackChunkName: "discountpcfriend" */ 'pc/views/user/discount/components/recommend-firend')
        },
        meta: {
          auth: [AUTH_NAME.USER]
        }
      }
      ]
    },
    {
      // 仅普通用户存款
      path: 'deposit',
      name: 'finance_deposit',
      component() {
        return import(/* webpackChunkName: "pcdeposit" */ 'pc/views/money/deposit')
      },
      meta: {
        auth: [AUTH_NAME.USER]
      }
    },
    {
      // 提款
      path: 'drawmoney',
      name: 'finance_drawmoney',
      component() {
        return import(/* webpackChunkName: "pcdrawmoney" */ 'pc/views/money/drawmoney')
      },
      meta: {
        // 代理可以提款
        auth: [AUTH_NAME.USER]
      }
    },
    {
      // 仅普通用户转账
      path: 'transfer',
      name: 'finance_transfer',
      component() {
        return import(/* webpackChunkName: "pctransfer" */ 'pc/views/money/transfer')
      },
      meta: {
        auth: [AUTH_NAME.USER]
      }
    },
    {
      // 查询记录
      path: 'log',
      name: 'user_log',
      component: log,
      meta: {
        auth: [AUTH_NAME.USER]
      }
    }, {
      // 站内信
      path: 'message',
      name: 'user_message',
      component: message,
      meta: {
        // 代理可以查看站内信
        auth: [AUTH_NAME.USER]
      }
    },
    {
      // 存款教程
      path: 'tech/:type?',
      name: 'user_tech',
      component: tech,
      meta: {
        auth: [AUTH_NAME.USER]
      }
    },
    // 挂载代理相关页面
    // ...agent
  ]
}]
