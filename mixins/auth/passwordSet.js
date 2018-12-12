/**
 * 修改用户登陆密码逻辑
 * 1、修改用户登录密码
 */
import {
  changepws
} from '@@/api/payment'
import check from '@@/utils/RegExp'

export const passwordSet = {
  data() {
    return {
      formData: {
        password: '', // 旧登陆密码
        confirm_password: '', // 新登陆密码
        new_password: '', // 新登陆密码
      }
    }
  },
  props: {},
  methods: {
    checked(obj) {
      if (!obj.password) {
        return '请输入原密码'
      } else if (!obj.new_password || !check.password.test(obj.new_password)) {
        return '密码需为6-16位，包含数字和字母'
      } else if (obj.new_password != obj.confirm_password) {
        return '二次密码不一致'
      } else if (obj.password == obj.new_password) {
        return '新密码不能与旧密码相同'
      } else {
        return false
      }
    },
    // 提交表单
    submitPwd(data, needCheck = true) {
      return new Promise((resolve, reject) => {
        let obj = _. cloneDeep(data)
        // 数据验证
        if (needCheck) {
          const unChecked = this.checked(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // post数据
        changepws(obj).then((res) => {
          if (res.code == '10000') {
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch((err) => {
          return reject(err)
        })
      })
    }
  }
}
