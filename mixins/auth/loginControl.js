/**
 * 用户登陆逻辑
 * 1、提交登陆表单
 * 2、是否记住账户名的功能
 */
// 引入api
import CryptoJS from "crypto-js"; // 记住的用户密码要加密
import {login} from '@@/api/authService'
import {mapMutations} from 'vuex'

export const loginControl = {
  data() {
    return {
      // 是否是代理？好像没用的
      isRemember: false, // 是否要记住账户/密码
      // 表单数据
      formData:{
        account: '', // true string 用户名
        password: '', // true string 密码
        imageCode: '' // true string 验证码
      }
    }
  },

  methods: {
    ...mapMutations(['GET_VALIDATE']),
    /**
     * 表单验证规则
     * parma {object} // json对象
     * 对应的key对照data的formData
     */
    checkLogin(obj) {
      // 代理账户是否禁止登陆
      if (obj.onlyUser) {
        if (obj.account.indexOf('a_') > -1) {
          return '代理账户不允许登陆'
        }
      } else if (!obj.account) {
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
     * 对应的key对照data的formData
     */
    loginSubmit(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      // 返回异步函数
      return new Promise((resolve, reject) => {
        if(needCheck){
          // 先判断表单
          const unChecked = this.checkLogin(obj)
          if (unChecked) {
            // 表单判断不通过，返回错误
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交post表单
        login(obj).then(res => {
          if (res.success) {
            // 登陆成功
            // 是否要记住用户密码
            if (this.isRemember) {
              obj.account = CryptoJS.AES.encrypt(obj.account,'login').toString();
              obj.password = CryptoJS.AES.encrypt(obj.password,'login').toString();
              this.$localStorage.set('isRememberAccount', obj)
            } else {
              this.$localStorage.remove('isRememberAccount')
            }
            // 重新更新store里的用户信息
            this.$store.dispatch('UPDATE_USERDATA') // 更新用户信息
            return resolve(res)
          } else {
            // 登陆失败的情况下自动刷新二维码
            this.GET_VALIDATE()
            // 返回错误
            return reject(res)
          }
        }).catch(err => {
          // 返回错误
          return reject(err)
        })
      })
    },
    // 读取记录的账户信息
    getRememberData() {
      // 读取localStorage之前是否记住用户名
      if (this.$localStorage.get('isRememberAccount')) {
        this.isRemember = true
        let _loginData=this.$localStorage.get('isRememberAccount')
        // 解密
        this.formData.account = CryptoJS.AES.decrypt(_loginData.account, "login").toString(CryptoJS.enc.Utf8)
        this.formData.password = CryptoJS.AES.decrypt(_loginData.password, "login").toString(CryptoJS.enc.Utf8)
      }
    }
  },
  mounted() {
    this.getRememberData();
  }
}