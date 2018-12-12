import {
  searchPtCommissionsData
} from '@@/api/agent'
import dateUtil from 'iview/src/utils/date'

export const ptcommission = {
  data() {
    return {
      pageContents: [],
      formData: {
        starttime: '',
        endtime: '',
        size: 10,
        pageIndex: 1,
        totalRecords: 0
      },
      data: {}
    }
  },
  methods: {
    getDatas(data) {
      // 加载数据
      let obj = _.cloneDeep(data)
      // iview特殊，格式化时间
      try {
        obj.starttime = dateUtil.format(obj.starttime, 'yyyy-MM-dd HH:MM')
      } catch (err) {}
      try {
        obj.endtime = dateUtil.format(obj.endtime, 'yyyy-MM-dd HH:MM')
      } catch (err) {}
      return new Promise((resolve, reject) => {
        searchPtCommissionsData(obj).then(res => {
          if (res.success) {
            // 保存数据
            this.data = res.data
            this.pageContents = res.data.pageContents
            // 保存查询条件
            this.formData.totalRecords = res.data.totalRecords
            this.formData.pageIndex = res.data.pageNumber
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    },
    getPlatForm(val) {
      switch (val) {
        case 'slotmachine':
          return '老虎机佣金'
        case 'liveall':
          return '真人'
        case 'sport':
          return '体育'
        case 'lottery':
          return '彩票'
        default:
          return '其他佣金'
      }
    }
  }
}
