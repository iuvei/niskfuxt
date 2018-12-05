/**
 * 用户模块
 */
import {  ajaxGetSessionPersonalData,checkWithdrawPwd,getMessageByUser,logOut} from '@@/api/authService'
const state = {
  userData: {
    // 基本信息
    loginname: '', // true string
    accountName: '', // t true string 姓名，通过该字段是否有值可判断是否已设置过用户信息
    role: '', // true string 角色
    level: '', // true string 用户等级
    levelNumber: '', // true number 等级（数字）
    avator:'/images/level/default.png',// 等级图标，手动配置
    birthday: '', // false string 生日
    // 其他信息
    referWebsite: '', // true string 注册来源网站
    phoneValidStatus: '0', // true string 手机号是否验证
    isSetPayPwd:null, // 是否设置支付密码
    unReadMessage:null, // 未读站内信
    // 联系方式
    phone: '', // true string//手机号码
    wechat: '', // 微信
    qq: '', // true string
    email: '', // false string 邮件
    mobileNum: '', // true string 手机号,废弃

  },
  wallet: {
    // 用户钱包数据;

  },
}

const getters = {
  // 用户数据
  userData(state) {
    return state.userData
  },
  // 钱包数据
  wallet(state) {
    return state.wallet
  },
  // 未读站内信，可以删除
  unread(state) {
    if (state.userData.unread == null) {
      // 异步的一种获取
      getMessageByUser({
        size: 1,
        pageIndex: 1
      }).then(res => {
        if (res.success) {
          state.userData.unread = res.data.unreadCount ? res.data.unreadCount : 0
        }
      })
    }
    return state.userData.unread
  },
  // 是否配置钱包密码，可以删除
  isSetPayPwd(state) {
    if (state.userData.isSetPayPwd == null) { // 异步的一种获取
      checkWithdrawPwd().then(res => {
        if (res.success) {
          state.userData.isSetPayPwd = res.data == '1'
        }
      })
    }
    return state.userData.isSetPayPwd
  },
  // 是否登陆状态，可以删除
  isLogin(state){
        if (state.userData.loginname) {
          state.isLogin = true
        }else{
          state.isLogin = false

        }
      return state.isLogin
  },
  // 是否是普通用户，可以删除
  isUser(state) { // 用户角色是普通用户
    return state.userData.role=='MONEY_CUSTOMER'
  },
  // 是否是代理，可以删除
  isAgent(state) { // 用户角色是代理
    return state.userData.role=='AGENT'
  },
}

const actions = {
    // 拉取用户数据
    UPDATE_USERDATA({
      commit
    }) { // 获取 初始化信息
      return ajaxGetSessionPersonalData().then(res => {
        if (res.success) {
          if(res.data.role.toUpperCase()=='AGENT'){
            // 设置代理头像
            res.data.avator=`/images/level/agent.png`
          }else{
            // 设置用户头像
            res.data.avator=`/images/level/${res.data.levelNumber}.png`
          }
          commit('SET_USERDATA', res.data)
          // 初次初始化信息时
          commit('UPDATE_MONEY', {key:'SLOT', val:res.data.slotAccount||'0'})
          commit('UPDATE_MONEY', {key:'LIVE', val:res.data.liveAccount||'0'})
          commit('UPDATE_MONEY', {key:'MAIN', val:res.data.accountMoney||'0'})
          commit('UPDATE_MONEY', {key:'DEPUTY', val:res.data.deputyCredit||'0'})
          return Promise.resolve(res)
        } else {
          return Promise.reject(res)
        }
      }).catch(err => {
        return Promise.reject(err)
      })
    },
   // 初始化用户数据
   INIT_INFO({
    commit
  }) {
    // 清空用户数据
    commit('SET_USERDATA', {
      // 基本信息
      loginname: '', // true string
      accountName: '', // t true string 姓名，通过该字段是否有值可判断是否已设置过用户信息
      role: '', // true string 角色
      level: '', // true string 用户等级
      levelNumber: '', // true number 等级（数字）
      avator:'/images/level/default.png',// 等级图标，手动配置
      birthday: '', // false string 生日
      // 其他信息
      referWebsite: '', // true string 注册来源网站
      phoneValidStatus: '0', // true string 手机号是否验证
      isSetPayPwd:null, // 是否设置支付密码
      unReadMessage:null, // 未读站内信
      // 联系方式
      phone: '', // true string//手机号码
      wechat: '', // 微信
      qq: '', // true string
      email: '', // false string 邮件
      mobileNum: '', // true string 手机号,废弃
    })
  },
    // 退出登陆
    LOGIN_OUT({
      dispatch
    }) { // 退出登录
      logOut().then(res => {
        // 退出成功后，清除store
        dispatch('INIT_INFO')
        window.location.reload();
        // return Promise.resolve(res)
      }).catch(err => {
        return Promise.reject(err)
      })
    },
    // 更新用户钱包
    UPDATE_MONEY({
      commit
    }, val) {
      if (val == 'SLOT' || val == 'LIVE') {
        // 查询代理钱包，SLOT->老虎机佣金，LIVE->其他佣金
        return ajaxGetSessionPersonalData().then(res => { 
          if (res.success) {
            // 更新钱包数据
            commit('UPDATE_MONEY', {'key':'SLOT', 'val':res.data.slotAccount})
            commit('UPDATE_MONEY', {'key':'LIVE', 'val':res.data.liveAccount})
            return Promise.resolve({
              success: true,
              message: res.message,
              data: val == 'SLOT' ? res.data.slotAccount : res.data.liveAccount
            })
          } else {
            return Promise.reject(res)
          }
        }).catch(err => {
          return Promise.reject(err)
        })
      } else {
        // 查询普通用户
        return getGameMoney({
          gameCode: val
        }).then(res => {
          if (res.success) {
            // 更新钱包数据
            commit('UPDATE_MONEY', {'key':val, 'val':res.data})
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        }).catch(err => {
          return Promise.reject(err)
        })
      }
    },
}

const mutations = {
  SET_USERDATA(state, val) {
    state.userData = Object.assign(state.userData, val||{});
  },
    // 设置用户钱包数据
    UPDATE_MONEY(state, data) {
      if(data.key){
        if (!state.wallet[data.key]) {
          // 必须要用set才会实时监控新添加的对象
          Vue.set(state.wallet, data.key, data.val.toString());
        }else{
          state.wallet[data.key] = data.val
        }
      }
    },
    // 设置未读站内信
    SET_UNREAD(state, val) {
      state.userData.unread = val
    },
    // 读取一条站内信
    READ_MESSAGE(state) {
      if (state.unread > 0) {
        state.userData.unread--
      } else {
        state.userData.unread = 0
      }
    },
    // 设置密码
    SET_PAYPWD(state, val) {
      state.userData.isSetPayPwd = val
    },
}

export default {
  state,
  actions,
  getters,
  mutations
}
