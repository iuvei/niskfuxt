import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  updateGameMoney
} from '@@/api/payment'

export const transfer = {
  data() {
    return {
      money: {
        gameOut: '', // 转出账户余额
        gameIn: '' // 转入账户余额
      },
      data: {
        transferGameOut: '', // 转出账号
        transferGameMoney: '', // 转账金额
        transferGameIn: '' // 转入
      }
    }
  },
  watch: {
    'data.transferGameMoney'(val) {
      if (/[^\d]/g.test(val)) {
        this.data.transferGameMoney = this.data.transferGameMoney.toString().replace(/[^\d]/g, '')
      }
    },
    'data.transferGameOut'(val) {
      this.getGameMoney(val)
    },
    'data.transferGameIn'(val) {
      this.getGameMoney(val)
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions([ "UPDATE_MONEY"]),
    checkTransfer(obj) {
      if (obj.transferGameMoney == '') {
        return '请输入转账金额'
      }
      if (this.data.transferGameIn == '') {
        return '请选择转入平台'
      }
      if (this.data.transferGameOut == '') {
        return '请选择转出平台'
      } else {
        return false
      }
    },

    transferSubmit(data,needCheck=true) {
      let obj=_. cloneDeep(data)
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证表单
        if(needCheck){
          const unChecked = this.checkTransfer(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        updateGameMoney(obj).then(res => {
          if (res.success) {
            // 转账成功后，刷新用户钱包数据
            this.UPDATE_MONEY(this.data.transferGameOut)
            this.UPDATE_MONEY(this.data.transferGameIn)
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
