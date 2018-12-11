/**
 * 代理注册的逻辑
 * 1、提交代理注册表单
 */

import {
  registerAgent
} from '@@/api/authService'
import {
  getDomainName
} from '@@/api/show'
import check from '@@/utils/RegExp'
import { mapMutations } from 'vuex'

export const AgentRegisterControl = {
  data() {
    return {
      domainName: '代理域名', // 代理域名，从接口获取
      // 乐通特殊处理
      registerForm: {
        phone: '', // 手机号码，必填
        email: '', // 邮箱，必填
        accountName: '', // 真实姓名，必填
        loginname: '', // 用户名，必填
        validateCode: '', // 验证码，必填
        password: '', // 密码，必填
        confirmPassword: '', // 确认密码，非必填
        qq: '', // qq，必填
        partner: '', // 推荐人，非必填
        wechat: '', // 微信，必填
        referWebsite: '', // 代理网址，必填
        birthday:'',// 生日，必填
        agentAgree: 'on' // 同意协议 ，因为接口特殊必须为on
      }
    }
  },
  methods: {
    ...mapMutations(['GET_VALIDATE']),
    // 检查表单
    checked(obj) {
      if (!check.agent_account.test(obj.loginname)) return "代理账号(以a_(下划线)开头，3-15个数字或字母)"
      else if (!obj.password || !check.password.test(obj.password)) return "密码(6-16位数字和字母)"
      else if (confirmPassword&&obj.password != obj.confirmPassword) return "二次密码不一致"
      else if (!obj.accountName || !check.name.test(obj.accountName)) return "请输入正确的中文名字，需与银行卡账户名一致"
      else if (!obj.birthday) return "请输入生日"
      else if (!obj.referWebsite) return "请正确输入加盟地址"
      else if (!obj.email || !check.email.test(obj.email)) return "请输入电子邮箱地址"
      else if (!obj.phone || !check.phone.test(obj.phone)) return "请正确输入手机号码"
      else if (!obj.qq || !check.qq.test(obj.qq)) return "请正确输入QQ号码"
      else if (!obj.wechat) return "请输入微信号码"
      else if (!obj.validateCode) return "请输入验证码"
      else if (!obj.agentAgree) return "请选择同意代理加盟合作协议"
      else {
        return false
      }
    },
    // 代理加盟注册提交
    registerSubmit(obj,needCheck=true) {
      return new Promise((resolve, reject) => {
        let obj=JSON.parse(JSON.stringify(data))
        // 返回异步函数
        if(needCheck){
          const unChecked = this.checked(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 特殊化处理，同意协议改为'on',这是个遗留问题。。。
        if (obj.agentAgree && obj.agentAgree !== 'on') {
          obj.agentAgree = 'on'
        }
        // post表单
        registerAgent(obj).then((res) => {
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
    },
    // 自动获取代理域名
    getDomain() {
      getDomainName().then((res) => {
        this.domainName = res.data
      })
    }
  },
  created(){
    this.getDomain()
  }
}
