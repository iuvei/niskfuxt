/**
 * 支付密码相关逻辑
 * 1、第一次绑定支付密码
 * 2、修改支付密码
 */

import {
  modifyWithdrawPwd,
  bindWithdrawPwd
} from '@@/api/payment'
import md5 from 'MD5' // 密码加密后传给后台
import check from '@@/utils/RegExp'

export const payword = {
  data() {
    return {
      formData: {
        confirm_password: '', // 新支付密码确认
        new_password: '', // 新支付密码
        password: '' // *非必填，旧支付密码/登陆密码
      }
    }
  },
  props: {},
  methods: {
    // 修改支付密码表单检查
    checkupdate(obj) {
      if (!obj.password) {
        return '请输入旧支付密码'
      } else if (!obj.new_password || !check.pay_password.test(obj.new_password)) {
        return '新支付密码必须6位纯数字'
      } else if (obj.password == obj.new_password) {
        return '新支付密码不能与旧密码相同'
      } else if (obj.new_password != obj.confirm_password) {
        return '两次输入支付密码不一致'
      } else {
        return false
      }
    },
    // 初次设置支付密码，表单检查
    checkbind(obj) {
      if (!obj.password) {
        return '请输入登陆密码'
      } else if (!obj.new_password || !check.pay_password.test(obj.new_password)) {
        return '新支付密码必须6位纯数字'
      } else if (obj.password == obj.new_password) {
        return '新支付密码不能与登陆密码相同'
      } else if (obj.new_password != obj.confirm_password) {
        return '两次输入支付密码不一致'
      } else {
        return false
      }
    },
    // 修改支付密码
    changePwd(data,needCheck=true) {
      let obj=_. cloneDeep(data)
      // 返回异步函数
      return new Promise((resolve, reject) => {
        if(needCheck){
          const unChecked = this.checkupdate(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 支付密码要二次md5加密
        modifyWithdrawPwd({
          originalPwd: md5(md5(obj.password)),
          newPwd: md5(md5(obj.confirm_password))
        }).then(res => {
          if (res.success) {
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          console.log(err)
          return reject(err)
        })
      })
    },
    // 初次绑定支付密码
    bindPwd(data,needCheck=true) {
      let obj=_. cloneDeep(data)
      // 返回异步函数
      return new Promise((resolve, reject) => {
        if(needCheck){
          const unChecked = this.checkbind(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // md5二次加密
        // post表单
        bindWithdrawPwd({
          withdrawPwd: md5(md5(obj.confirm_password)), // 支付密码二次md5加密
          loginPwd: obj.password // 传入登陆密码
        }).then((res) => {
          if (res.success) {
            // 更新store的值,已经设置过表单
            this.$store.commit('SET_PAYPWD', true)
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    }
  }
}
