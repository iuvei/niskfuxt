/**
 * 自助洗码相关逻辑
 * 1、获取洗码数据
 * 2、提交洗码
 */
import {
  getXimaData,
  doXima
} from '@@/api/preferential-terms'
export const washCode = {
  data() {
    return {
      // 需要查询的洗码平台
      type: '', // 当前平台的类型
      show: false, // 是否可以洗码
      // 查询的洗码数据
      data: {
        startDate: '',
        endDate: '',
        validAmount: '',
        ximaAmount: '',
        rate: ''
      }
    }
  },

  methods: {
    checkWashcode(obj) {
      if (!obj.gameId) {
        return '请选择游戏平台'
      } else {
        return false
      }
    },
    checkWashSubmit(obj) {
      if (!obj.gameId) {
        return '请选择游戏平台'
      } else {
        return false
      }
    },
    // 查询洗码结果
    searchSubmit(data,needCheck=true) {
      let obj=_. cloneDeep(data)
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证表单
        if(needCheck){
          const unChecked = this.checkWashcode(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // 提交表单
        getXimaData(obj).then(res => {
          this.show = res.success // 是否可以洗码
          if (res.success) {
            Object.assign(this.data, res.data)
            return resolve(res)
          } else {
            this.data.startDate = ''
            this.data.endDate = ''
            this.data.validAmount = ''
            this.data.ximaAmount = ''
            this.data.rate = ''
            return reject(res)
          }
        }).catch((err) => {
          this.show = false
          return reject(err)
          // toast("请求错误请稍后重新尝试...");
        })
      })
    },
    // 确认洗码
    doXimaSubmit(data,needCheck=true) {
      let obj=_. cloneDeep(data)
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证表单
        if(needCheck){
          const unChecked = this.checkWashSubmit(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        // post表单
        doXima(obj).then(res => {
          if (res.success) {
            this.show = false
            this.type = ''
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
