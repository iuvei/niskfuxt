/**
 * 代理注册的逻辑
 * 1、提交代理注册表单
 */
import {
  getAuthImg,
  registerAgent
} from '@@/api/authService'
import check from '@@/utils/RegExp'

export default {
  data() {
    return {
      authImg: '', // 验证码
      agentAgree: false,
      data: {
        phone: '', // 手机号码
        email: '', // 邮箱
        accountName: '', // 真实姓名
        loginname: '', // 用户名
        validateCode: '', // 验证码
        password: '', // 密码
        qq: '', // qq
        partner: '', // 推荐人
        wechat: '', // 微信
        referWebsite: '', // 代理网址
        agentAgree: 'on' // 同意协议 ，特殊必须为on
      }
    }
  },
  methods: {
    checked(obj) {
      // 检查表单
      console.log(obj)
      if (!obj.login || !check.agent_account.test(obj.loginname)) {
        return '账号(以a_(下划线)开头，3-15个数字或字母)'
      } else if (!check.password || !check.password.test(obj.password)) {
        return '密码需为6-16位，包含数字和字母'
      } else if (!obj.accountName) {
        return '请输入中文姓名'
      } else if (!obj.accountName || !check.name.test(obj.accountName)) {
        return '请输入正确的中文姓名'
      } else if (!obj.referWebsite) {
        return '请输入加盟网址'
      } else if (!obj.email || !check.email.test(obj.email)) {
        return '请输入正确的电子邮箱'
      } else if (!obj.phone || !check.phone.test(obj.phone)) {
        return '请输入正确格式的手机号码'
      } else if (!obj.validateCode) {
        return '请输入验证码'
      } else if (!this.agentAgree) {
        return '请同意用户协议'
      } else {
        return false
      }
    },
    register(obj) {
      return new Promise((resolve, reject) => {
        // 表单验证
        const unChecked = this.checked(obj)
        if (unChecked) {
          return reject({
            success: false,
            message: unChecked
          })
        }
        // 特殊化处理，同意协议改为'on'
        if (obj.agentAgree && obj.agentAgree !== 'on') {
          obj.agentAgree = 'on'
        }
        registerAgent(this.data).then((res) => {
          if (res.success) {
            return resolve(res)
          } else {
            this.getimg()
            return reject(res)
          }
        }).catch(err => {
          console.log(err)
          return reject(err)
        })
      })
    },
    getimg(e) {
      this.authImg = getAuthImg()
    }
  }
  // created() {
  //   this.getimg()
  // }
}
