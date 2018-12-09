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

    transferSubmit(obj) {
      return new Promise((resolve, reject) => {
        const unChecked = this.checkTransfer(obj)
        if (unChecked) {
          return reject({
            success: false,
            message: unChecked
          })
        }
        updateGameMoney(obj).then(res => {
          if (res.success) {
            this.getGameMoney(this.data.transferGameOut)
            this.getGameMoney(this.data.transferGameIn)
            this.$store.dispatch('UPDATE_USERDATA')
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    },
    getGameMoney(val) {
      this.UPDATE_MONEY(val).then(res => {
        if (res.success) {
          // window.toast(res.message)
        }
        else {
          // window.toast(res.message)
        }
      })
    }
  }
}
