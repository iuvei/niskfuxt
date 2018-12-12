import {
  queryCreditlogs
} from "@@/api/user"

import dateUtil from 'iview/src/utils/date'

export const creditLog = {
  data() {
    return {
      pageContents: [],
      totalPages:0,
      totalRecords:0,
      formData: {
        starttime: '',
        endtime: '',
        size: 10,
        pageIndex: 1,
      }
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
        queryCreditlogs(obj).then(res => {
          if (res.success) {
            // 保存数据
            this.pageContents = res.data.pageContents
            // 保存查询条件
            this.totalRecords = res.data.totalRecords
            this.totalPages = res.data.totalPages
            this.formData.pageIndex = res.data.pageNumber
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
