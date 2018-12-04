/**
 * 用户登陆逻辑
 * 1、提交登陆表单
 * 2、是否记住账户名的功能
 */

import {
  getAuthImg,
  login
} from '@@/api/authService'
// locastorage操作
// import {
//   $localStorage
// } from '@@/utils/storage'
// import {
//   WEBCONFIG
// } from '@/assets/data/index'
export const loginControl = {
  data() {
    return {
      // 图片验证码地址
      ImgCode: '', // 图片验证码地址
      // 是否是代理？好像没用的
      isRemember: false, // 是否要记住账户
      loginData: { // 需要提交的数据
        account: '', // 用户名
        password: '', // 密码
        imageCode: '' // 验证码
      },
      placeholder: {
        account: '用户名', // 用户名
        password: '密码', // 密码
        imageCode: '验证码' // 二维码
      }
    }
  },

  methods: {
    /**
     * GET
     * 获取验证码
     */
    getimg() {
      // 获取验证码
      this.ImgCode = getAuthImg()
    },

    /**
     * 表单验证规则
     * parma {object} // json对象
     * 对应的key对照data的loginData
     */
    checkLogin(obj) {
      // 代理账户是否禁止登陆
      if (!obj.account) {
        // 用户名必填
        return '用户名不能为空'
      } else if (!obj.password) {
        // 密码必填
        return '密码不能为空'
      } else if (!obj.imageCode) {
        // 验证码必填
        return '验证码不能为空'
      } else {
        return false
      }
    },
    /**
     * POST
     * 提交登陆表单
     * parma {object} // json对象
     * 对应的key对照data的loginData
     */
    loginSubmit(obj) {
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 先判断表单
        const unChecked = this.checkLogin(obj)
        if (unChecked) {
          // 表单判断不通过，返回错误
          return reject({
            success: false,
            message: unChecked
          })
        }
        // 提交post表单
        login(this.loginData).then(res => {
          if (res.success) {
            // 登陆成功，代理是不是不允许登陆
            // if (WEBCONFIG.onlyUser && res.data.role.toUpperCase()=='AGENT') {
            //   console.log('代理不允许登陆')
            //   this.$store.dispatch('LOGIN_OUT') // 更新用户信息
            //   return reject({
            //     success: false,
            //     message: '不存在此账户!'
            //   })
            // }
            // if (this.isRemember) {
            //   // 是否要记住登陆密码
            //   $localStorage.set('isRememberAccount', this.loginData.account)
            // } else {
            //   $localStorage.remove('isRememberAccount')
            // }
            // 重新更新store里的用户信息
            this.$store.dispatch('UPDATE_USERDATA') // 更新用户信息
            return resolve(res)
          } else {
            // 自动刷新二维码
            this.getimg()
            // 返回错误
            return reject(res)
          }
        }).catch(err => {
          // this.getimg()
          // 返回错误
          return reject(err)
        })
      })
    },
    getRememberData() {
      // 读取之前记住的用户名
      // if ($localStorage.get('isRememberAccount')) {
      //   this.isRemember = true
      //   this.loginData.account = $localStorage.get('isRememberAccount')
      // }
    }
  },
  created() {
    this.getRememberData()
  }
}
