import md5 from 'MD5'
import {
  findUserBankList,
  withdraw_new
} from '@@/api/payment'
import {
  mapGetters,
  mapActions
} from 'vuex'

export const withdraw = {
  data() {
    return {
      bankList: [],
      bankText: '',
      showSetPay: true,
      canAddcard: false, 
      // 判断是否需要显示添加银行卡按钮
      // 取款类型，只有代理账户才会用到
      drawType: [ 
        {
          name: '老虎机',
          value: 'slotmachine'
        },
        {
          name: '其他',
          value: 'liveall'
        }
      ],
      sumitData: {
        amount: '',
        id: '',
        password: '',
        tkType: '' // false string 若是代理提款，必填输入代理提款类型，提款类型，slotmachine-老虎机，liveall-其他部分
      }
    }
  },
  watch: {

  },
  computed: {
    ...mapGetters(['userData', 'isSetPayPwd', 'isAgent', 'isUser'])
  },
  methods: {
    ...mapActions([ "UPDATE_MONEY"]),
    checkDraw(obj) {
      if (obj.id == '') {
        return '请选择取款银行卡!'
      } else if (obj.amount == '') {
        return '请输入取款金额!'
      }
       else if (obj.password == '') {
        return '请输入支付密码!'
      } 
      else {
        return false
      }
    },
    // 提款提交
    drawSubmit(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证表单
        if(needCheck){
          const unChecked = this.checkDraw(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 密码2次MD5加密
       obj.password = md5(md5(obj.password))
      //  提交表单
        withdraw_new(obj).then(res => {
          // 清除提款密码
          if (res.success) {
            // 提款成功后，更新账户余额
            if(obj.tkType){
              if(obj.tkType=='slotmachine'){
                this.UPDATE_MONEY('SLOT')
              }else if(obj.tkType=='liveall'){
                this.UPDATE_MONEY('LIVE')
              }
            }else{
              this.UPDATE_MONEY('MAIN')
            }
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch((err) => {
          // 清除提款密码
          this.sumitData.password = ''
          return reject(err)
        })
      })
    },
    getBankList() {
      return new Promise((resolve, reject) => {
        findUserBankList().then((res) => {
          if (res.success) {
            this.bankList = res.data
          } else {
            return reject(res)
          }
        }).catch((err) => {
          console.log(err)
          return reject(err)
        })
      })
    }
  }
}
