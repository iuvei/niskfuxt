/**
 * 银行卡相关逻辑，
 * 1、绑定银行卡
 * 2、判断银行卡的归属行
 * 3、读取银行卡列表
 */
import {
  validateBankNo, // 验证银行卡
  bindBankNo, // 绑定银行卡
  findUserBankList
} from '@@/api/payment'
import {
  mapGetters
} from 'vuex'
import check from '@@/utils/RegExp' // 正则
export const bank = {
  data() {
    return {
      // 绑定银行卡
      bindData: {
        cardNo: '' // 需要绑定的卡号
      },
      // 验证银行卡
      timeOut: null, // 延时器，防止频繁发送请求
      banktxt: '自动识别卡号', // 匹配出来的银行卡所属
      // 用户绑定的，银行卡列表
      list: [] // 银行卡列表
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    // 提交绑定银行卡表单时的判断
    checkBankno(obj) {
      // 必须完善个人信息
      if (!this.userData.accountName) {
        return '请先绑定个人真实姓名'
      }
      if (!check.bank.test(obj.cardNo.replace(/\s+/g, ''))) {
        return '请输入正确格式的银行卡,16或19位'
      } else {
        return false
      }
    },
    // 从api接口匹配银行卡归属行
    verifyBankNumber(data) {
      // 去掉空格
      let val=data.replace(/\s+/g, '')
      // 要加个延时，以免频繁调用接口
      clearTimeout(this.timeOut)
      // 先判断银行卡是否符合规则
      if (check.bank.test(val)) {
        // 延时器
        const $this = this
        this.timeOut = setTimeout(() => {
          $this.banktxt = '正在识别...'
          // 提交表单
          validateBankNo({
            bankno: val
          }).then(res => {
            if (res.success) {
              // 通过验证
              $this.banktxt = res.data
            } else {
              $this.banktxt = '卡号无法识别'
            }
          })
        }, 500)
      } else {
        // 正则未通过
        this.banktxt = '卡号无法识别'
      }
    },
    // 添加银行卡操作
    addBankNo(data,needCheck=true) {
      var obj=JSON.parse(JSON.stringify(data))
      return new Promise((resolve, reject) => {
        // 验证表单规则
        if(needCheck){
          const unChecked = this.checkBankno(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        obj.cardNo = obj.cardNo.replace(/\s+/g, '') // 去除空格
        bindBankNo(obj).then(res => {
          if (res.success) {
            // 刷新银行卡列表，这个有待调整，应该要放到组件部分
            this.$bus.$emit('refreshBankList')
            this.bindData.cardNo = ''
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    },
    // 获取银行卡列表
    getBankList() {
      return new Promise((resolve, reject) => {
        findUserBankList().then(res => {
          if (res.success) {
            this.list = res.data
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
