/**
 * 找回支付密码逻辑
 * 1、找回支付密码，PHONE/EMAIL 通过手机找回或通过邮箱找回
 */
import {
  getWithdrawPW
} from '@@/api/user'
import check from '@@/utils/RegExp'
import {mapMutations} from 'vuex'

export const payForgot = {
  data() {
    return {
      formData: {
        phone: '', // 手机
        email: '', // email
        code: '', // 验证码
        pipe: '' // 找回方式：PHONE/EMAIL
      }
    }
  },
  methods: {
    ...mapMutations(['GET_VALIDATE']),
    /**
     * 通过手机找回，表单验证规则
    */
    checkSms(obj) {
      if (!check.phone.test(obj.phone)) {
        return '请输入正确的手机号码'
      } else if (!obj.code) {
        return '请输入验证码'
      } else {
        return false
      }
    },
    /**
     * 通过邮件找回，表单验证规则
    */
    checkEmail(obj) {
      if (!check.email.test(obj.email)) {
        return '请输入正确的邮箱地址'
      } else if (!obj.code) {
        return '请输入验证码'
      } else {
        return false
      }
    },
    /**
     * 通过邮件找回
     * obj{
     * pipe:"PHONE"
     * phone:""
     * code:""
     * }
    */
    findBySms(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      return new Promise((resolve, reject) => {
        // 对传入的表单数据验证一次
        if(needCheck){
          const unChecked = this.checkSms(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        getWithdrawPW(obj).then(res => {
          if (res.success) {
            return resolve(res)
          } else {
            // 找回失败，刷新一次验证码
            this.GET_VALIDATE()
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    },
    /**
     * 通过邮件找回
     * obj{
     * pipe:"EMAIL"
     * email:""
     * code:""
     * }
    */
    findByEmail(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 对传入的表单数据验证一次
        if(needCheck){
          const unChecked = this.checkEmail(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        getWithdrawPW(obj).then(res => {
          if (res.success) {
            return resolve(res)
          } else {
            // 找回失败，刷新一次验证码
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
