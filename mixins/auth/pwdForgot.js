/**
 * 忘记登陆密码逻辑
 * 1、手机找回
 * 2、邮箱找回
 */
import {
  getbackPwdByDx_dc,
  getbackPwdByEmail
} from '@@/api/show'
import {
  getAuthImg
} from '@@/api/authService'

import check from '@@/utils/RegExp'
import {mapMutations} from 'vuex'

export const pwdForgot = {
  data() {
    return {
    authImg: '', // 验证码
      phone: {
        // 手机找回，提交内容
        // sid: '9d154e5f-4f65-4b6d-9201-632adcdba1b7', // true string
        phone: '', // 手机号码
        // check_address: 'sverify-5-2-0', // true string
        // token: '99da842a-40d4-4f10-9a221499131241289', // true string
        name: '' // 用户名
        // check_key: ''
      },
      email: { // 邮箱找回，提交内容
        yxdz: '', // 邮箱地址
        name: '', // 用户名
        code: ''
      }
    }
  },
  methods: {
    ...mapMutations(['GET_VALIDATE']),
    // 手机找回，表单验证
    checkPhone(obj) {
      if (!obj.name) {
        return '请输入登陆用户名'
      } else if (!obj.phone || !check.phone.test(obj.phone)) {
        return '请输入正确的手机号码'
      } else {
        return false
      }
    },
    // 邮箱找回，表单验证
    checkEmail(obj) {
      if (!obj.name) {
        return '请输入登陆用户名'
      } else if (!obj.yxdz || !check.email.test(obj.yxdz)) {
        return '请输入正确的邮箱地址'
      } else if (!obj.code) {
        return '请输入验证码'
      } else {
        return false
      }
    },
    getbackPwdByDx_dc(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      // 手机号码找回，提交
      return new Promise((resolve, reject) => {
        // 表单验证
        if(needCheck){
          const unChecked = this.checkPhone(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        getbackPwdByDx_dc(obj).then(res => {
          if (res.success) {
            return resolve(res)
          } else {
            // 错误后，自动load验证码
            this.GET_VALIDATE()
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    },
    getbackPwdByEmail(data,needCheck=true) {
      // 邮箱找回，提交
      let obj=JSON.parse(JSON.stringify(data))
      return new Promise((resolve, reject) => {
        // 表单验证
        if(needCheck){
          const unChecked = this.checkEmail(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // post表单
        getbackPwdByEmail(obj).then(res => {
          if (res.success) {
            return resolve(res)
          } else {
            this.GET_VALIDATE()
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    }
  }
}
