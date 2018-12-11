// 存送优惠券
import {
  transferInforHongBao,
  enablePlatform
} from '@@/api/preferential-terms'

export const couponRed = {
  data() {
    return {
      platformData:[],
      data: {
        couponType: '', // true string
        couponCode: '' // true string
      }
    }
  },
  watch: {
    'data.couponRemit' (val) {
      if (/[^\d]/g.test(val)) {
        this.data.couponRemit = this.data.couponRemit.toString().replace(/[^\d]/g, '')
      }
    }
  },
  methods: {
    checkCoupon(obj) {
      if (!obj.couponType) {
        return '请选择游戏平台'
      } else if (!obj.couponCode) {
        return '请输入优惠代码'
      } else {
        return false
      }
    },
    couponSubmit(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证
        if(needCheck){
          const unChecked = this.checkCoupon(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // post表单
        transferInforHongBao(obj).then((res) => {
          if (res.success) {
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch((err) => {
          return reject(err)
          // toast('请重新尝试');
        })
      })
    },
    // 获取红包优惠券平台
    getPlatform() {
      enablePlatform({
        youhuiType: 'HONGBAO'
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
