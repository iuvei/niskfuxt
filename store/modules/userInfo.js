/**
 * 用户模块
 */
import cookies from "js-cookie";
import {  ajaxGetSessionPersonalData} from '@@/assets/services/user'
import {
  LOGIN,
  OUT_LOGIN,
  USER_INFO_UPDATA,
  UPDATE_USERDATA,
  SET_USERDATA,
  IS_LOGIN,
  SET_AUTH
} from '../types.js';
const state = {
  userInfo: {
    "name":"namesss"
  },
  test:'test',
  isLogin:false,
  authList:[]
}

const getters = {
  userInfo(state) {
    if (typeof window !== "undefined" && JSON.stringify(state.userInfo) === '{}' && cookies.get('userInfo')) {
      state.userInfo = JSON.parse(cookies.get('userInfo'));
    }
    return state.userInfo;
  },
  isLogin(state){
      // 这里逻辑有问题，需要再做调整
      if (cookies.get(IS_LOGIN) === 'true') {
        // 先查sessionStorage
        if (state.authList.length == 0) {
          // 浏览器刷新 authList肯定没有 没有就查一次后台
          state.isLogin = false
        }
        state.isLogin = true
      }
      if (state.authList.length > 0) { 
        // sessionStorage
        cookies.set(IS_LOGIN, true)
        state.isLogin = true
      }
      return state.isLogin
  }
}

const actions = {
  login({
    commit
  }, value) {
    commit(LOGIN, value);
  },
  outLogin({
    commit
  }) {
    commit(OUT_LOGIN);
  },
  update({
    commit
  }, value) {
    commit(USER_INFO_UPDATA, value);
  },
    // 更新用户数据
    [UPDATE_USERDATA]({
      commit
    }, val) { // 获取 初始化信息
      return ajaxGetSessionPersonalData().then(res => {
        if (res.success) {
          commit(SET_USERDATA, res.data)
          commit(SET_AUTH, res.data.role)
          return Promise.resolve(res)
        } else {
          return Promise.reject(res)
        }
      }).catch(err => {
        return Promise.reject(err)
      })
    }
}

const mutations = {
  [LOGIN](state, value) {
    cookies.set('userInfo', {
      avatar: value.avatar,
      // create_time: value.create_time,
      mobile: value.mobile,
      user_id: value.user_id,
      username: value.username
    });
    state.userInfo = value;
  },
  [OUT_LOGIN](state) {
    cookies.remove('userInfo');
    state.userInfo = {};
  },
  [USER_INFO_UPDATA](state, value) {
    state.userInfo = Object.assign(state.userInfo, value);
    cookies.set('userInfo', state.userInfo);
  },
  [SET_USERDATA](state, value) {
    // cookies.set(IS_LOGIN, true);
    state.userInfo = Object.assign(state.userInfo, value);
  },
    // 设置权限
    [SET_AUTH](state, val) {
      // 设置权限
      if (typeof val === 'string') {
        state.authList = [val]
      } else if (Array.isArray(val)) {
        state.authList = val
      } else {
        state.authList = []
      }
    },
}

export default {
  state,
  actions,
  getters,
  mutations
}
