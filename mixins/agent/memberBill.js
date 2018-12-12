import {
  searchsubuserProposalData
} from "@@/api/agent";
import dateUtil from 'iview/src/utils/date'

export const memberBill = {
  data() {
    return {
      pageContents: [],
      totalPages:0,
      totalRecords:0,
      formData: {
        loginname: "",
        tail: "",
        total: 0,
        starttime: "",
        endtime: "",
        proposalType: "", // 不同的报表类型，这个值不同,-1:输赢,1:优惠,2:洗码,1000:存款,503:提款,
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
        searchsubuserProposalData(obj).then(res => {
          if (res.success) {
            // 保存数据
            this.pageContents = res.data.pageContents
            // 保存查询条件
            this.totalPages = res.data.totalPages
            this.totalRecords = res.data.totalRecords
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
