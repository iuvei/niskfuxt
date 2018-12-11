/**
 * 普通用户注册的逻辑，
 * 1、提交不同用户注册表单
 */
import {
  register
} from '@@/api/authService'
import check from '@@/utils/RegExp'
import {
  mapMutations
} from 'vuex'

export const registerControl = {
  data() {
    return {
      formData: {
        // 注册的数据
        accountName: '', // 真实姓名，已取消验证
        phone: '', // 手机号码 *必填
        password: '', // 密码 *必填
        confirmPassword: '', // 重复密码
        email: '', // 邮箱
        name: '', // 名字
        account: '', // 用户名 *必填
        birthDate: '', // 生日
        imageCode: '', // 验证码 *必填
        qq: '', // qq
        intro: '', // 推荐人 根据url?读取
        friendcode: '' // 推荐码 根据url？读取
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
    checked(obj) {
      if (!check.account.test(obj.account)) {
        return '登入账号的长度请介于6-10字符之间！'
      } else if (!check.password.test(obj.password)) {
        return '密码需为6-16位，包含数字和字母'
      } else if (confirmPassword&&confirmPassword!=obj.password) {
        return '两次密码输入不一致'
      }else if (!check.phone.test(obj.phone)) {
        return '手机号格式不正确'
      } else if (obj.imageCode == '') {
        return '请输入验证码'
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
    registerSubmit(data, needCheck = true) {
      let obj = JSON.parse(JSON.stringify(data))
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 表单验证
        if (needCheck) {
          const unChecked = this.checked(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // url是否有推荐人信息
        obj.intro = obj.friendcode = this.$route.query.friendcode || '' // 推荐人
        // 提交表单
        register(obj).then((res) => {
          if (res.success) {
            // 注册成功后，服务器会自动登陆，这里出发，刷新网页的用户数据
            this.$store.dispatch('UPDATE_USERDATA')
            return resolve(res)
          } else {
          this.GET_VALIDATE()
          return reject(res)
          }
        }).catch((err) => {
          return reject(err)
        })
      })
    }
  }
}
