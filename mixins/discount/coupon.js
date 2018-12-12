/**
 * 存送优惠券相关逻辑
 * 1、使用存送优惠券
 */
import { 
  transferInforCoupon,
  enablePlatform
 } from '@@/api/preferential-terms'
import check from '@@/utils/RegExp'

export const coupon = {
  data() {
    return {
      platformData:[],
      // 使用存送优惠券许提交的表单
      data: {
        couponType: '', // 使用的游戏平台
        couponRemit: '', // 存的金额
        couponCode: '' // 优惠券ID
      }
    }
  },
  watch: {
    'data.couponRemit'(val) {
      // 去空格
      if (/[^\d]/g.test(val)) {
        this.data.couponRemit = this.data.couponRemit.toString().replace(/[^\d]/g, '')
      }
    }
  },
  methods: {
    checkCoupon(obj) {
      if (!obj.couponType) {
        return '请选择游戏平台'
      } else if (!check.initNum.test(obj.couponRemit)) {
        return '请输入整数金额'
      } else if (!obj.couponCode) {
        return '请输入优惠代码'
      } else {
        return false
      }
    },
    // 提交优惠券领取
    couponSubmit(data,needCheck=true) {
      let obj=_. cloneDeep(data)
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证表单
        if(needCheck){
          const unChecked = this.checkCoupon(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        transferInforCoupon(obj).then((res) => {
          if (res.success) {
            this.data.couponCode = ''
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch((err) => {
          return reject(err)
        })
      })
    },
    // 获取优惠券平台信息
    getPlatform() {
      enablePlatform({
        youhuiType: 'COUPON'
      }).then(res => {
        if (res.success) {
          this.platformData = res.data
        }
      }).catch(err => {
        window.toast(err.message)
      })
    }
  },
  mounted() {
    this.getPlatform()
  }
}
