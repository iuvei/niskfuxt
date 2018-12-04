/**
 * VIP晋级礼金，相关逻辑
 * 1、获取当前投注额度，以及晋级条件
 * 2、查看可否晋级
 */
import {
  getBetUpgrateVO,
  checkUpgrade
} from '@/api/preferential-terms'
import {
  mapGetters
} from 'vuex'

export const vipGold = {
  data() {
    return {
      canUpgrade: true, // 是否可以领取晋级礼金
      // 当前晋级条件，以及投注情况
      data: {
        upgradeThresholdList: [],
        betList: [{
          bet: 0
        }]
      },
      // 未知，好像没用到
      thisMonthMoney: 0, // 本月投注额
      level: [], // 保存对应的等级信息
      // 提示小内容
      tips: {
        allbet: 0,
        target: 0,
        nextLevel: ''
      },
      showTip: false
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  methods: {
    // 获取级别信息
    getVipInfo(obj) {
      return new Promise((resolve, reject) => {
        getBetUpgrateVO(obj).then(res => {
          if (res.success) {
            // 保存当前等级
            this.level = res.data.upgradeThresholdList
            // 计算当月总投注额
            this.tips.allbet = res.data.betList[res.data.betList.length - 1].bet // 总投注额度
            //   如果还没有到顶级
            if (this.userData.levelNumber < 6) {
              this.tips.nextLevel = this.level[this.userData.levelNumber + 1].level // 下一级名字
              this.tips.target = (this.level[this.userData.levelNumber + 1].upgradethreshold - this.tips.allbet).toFixed(2) // 距离下一级
            } else {
              // this.percent.width = '100%'
            }
            // 判断商户是否可以晋级
            this.canUpgrade = res.data.upgradeThresholdList.filter(item => {
              return item.money && res.data.betList[res.data.betList.length - 1].bet >= item.money
            })
            this.level[this.level.length-1].upgradethreshold='特邀玩家'
            return resolve(res)
          } else {
            return reject(res)
            //   toast(res.message)
          }
        }).catch(err => {
          return reject(err)
          // toast('晋级查询失败')
        })
      })

    },
    // 获取当前vip礼金可领取状态
    checkUpgrade() {
      return new Promise((resolve, reject) => {
        if (!this.canUpgrade) {
          return reject({
            success: 'false',
            message: '每月仅可自助申请一次'
          })
        }
        checkUpgrade().then(res => {
          this.canUpgrade = false
          if (res.success) {
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
