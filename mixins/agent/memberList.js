import {
  queryAgentSubUserInfoData
} from "@@/api/agent"
import dateUtil from 'iview/src/utils/date'

export const memberList = {
  data() {
    return {
      pageContents: [],
      searchData: {
        starttime: '',
        endtime: '',
        size: 10,
        pageIndex: 1,
        totalRecords: 0
      }
    }
  },
  methods: {
    getDatas(data) {
      // 加载数据
      let obj = JSON.parse(JSON.stringify(data))
      console.log(obj)
      // iview特殊，格式化时间
      try {
        obj.starttime = dateUtil.format(obj.starttime, 'yyyy-MM-dd HH:MM')
      } catch (err) {
        console.log(err)
      }
      try {
        obj.endtime = dateUtil.format(obj.endtime, 'yyyy-MM-dd HH:MM')
      } catch (err) {
        console.log(err)
      }
      console.log(obj)
      return new Promise((resolve, reject) => {
        queryAgentSubUserInfoData(obj).then(res => {
          console.log(res)

          if (res.success) {
            // 保存数据
            this.pageContents = res.data.pageContents
            // 保存查询条件
            this.searchData.totalRecords = res.data.totalRecords
            this.searchData.pageIndex = res.data.pageNumber
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          console.log(err)
          return reject(err)
        })
      })
    }
  }
}
