/**
 * 用户报表查询
 */
import {
  queryHistory
} from '@@/api/user'
import dateUtil from 'iview/src/utils/date'
const filterMenu = [{
    name: '在线存款',
    value: 'deposit'
  },
  {
    name: '提款',
    value: 'withdraw'
  },
  {
    name: '户内转账',
    value: 'transfer'
  },
  {
    name: '优惠活动',
    value: 'concessionReccords'
  },
  {
    name: '自助优惠',
    value: 'couponRecords'
  },
  {
    name: '自助返水',
    value: 'ximaDetail'
  },
  {
    name: '副账户优惠',
    value: 'deputyRecords'
  },
  {
    name: '好友推荐',
    value: 'friend'
  }
]
const friends = [{
    value: '0',
    label: '推荐注册成功玩家'
  },
  {
    value: '1',
    label: '推荐奖金收入'
  },
  {
    value: '2',
    label: '推荐奖金支出'
  }
]
export const userLog = {
  data() {
    return {
      filterMenu, // 记录类型菜单
      friends, // 推荐好友类型
      // 表格数据
      pageContents: [],
      thead: [],
      searchData: {
        // 查询的条件
        historyType: 'deposit',
        starttime: '',
        endtime: '',
        pageIndex: 1,
        size: 10,
        friendtype: '0',
        totalRecords: 0
      }
    }
  },
  methods: {
    // 验证表单
    checkLog(obj) {
      // 必须完善个人信息
      if (!obj.starttime) {
        return '请选择开始日期'
      } else if (!obj.endtime) {
        return '请选择结束日期'
      } else if ((new Date(obj.starttime)).getTime() - (new Date(obj.endtime)).getTime() > 0) {
        return '结束日期必须大于开始日期'
      } else {
        return false
      }
    },
    // 查询报表
    getLog(data,needCheck=true) {
      let obj=JSON.parse(JSON.stringify(data))
      // 返回异步函数
      return new Promise((resolve, reject) => {
        // 验证表单
        if(needCheck){
          const unChecked = this.checkLog(obj)
          if (unChecked) {
            return reject({
              success: false,
              message: unChecked
            })
          }
        }
        this.pageContents = []
        // iview特殊，格式化时间
        try{
          obj.starttime=dateUtil.format(obj.starttime, 'yyyy-MM-dd HH:MM')
        }catch{
        }
        try{
          obj.endtime=dateUtil.format(obj.endtime, 'yyyy-MM-dd HH:MM')
        }
        catch{}
        // 提交表单
        queryHistory(obj).then((res) => {
          if (res.success) {
            // 设置表头
            this.changeType(obj.historyType)
            // 需要调整逻辑
            this.pageContents = res.data.pageContents
            this.searchData.pageIndex = res.data.pageNumber
            this.searchData.size = res.data.size
            this.searchData.totalRecords = res.data.totalRecords
            return resolve(res)
          } else {
            return reject(res)
          }
        }).catch(err => {
          return reject(err)
        })
      })
    },
    // 修改表头
    changeType(val) {
      switch (val) {
        case "deposit":
          return this.thead = [{
              name: '编号',
              value: 'billno'
            },
            {
              name: "账户",
              value: "loginname"
            },
            {
              name: "存款金额",
              value: "money"
            },
            {
              name: "状态",
              value: "flag"
            },
            {
              name: "存款时间",
              value: "tempCreateTime"
            }
          ];
        case "withdraw":
          return this.thead = [{
              name: '编号',
              value: 'pno'
            },
            {
              name: "账户",
              value: "loginname"
            },
            {
              name: '申请提款金额',
              value: 'applyAmount'
            },
            {
              name: '提款费率',
              value: 'rate'
            },
            {
              name: '提款手续费',
              value: 'fee'
            },
            {
              name: '提款金额',
              value: 'amount'
            },
            {
              name: '状态',
              value: 'flag'
            },
            {
              name: '提款时间',
              value: 'tempCreateTime'
            }
          ];
        case "transfer":
          return this.thead = [{
              name: '编号',
              value: 'id'
            },
            {
              name: '账户',
              value: 'loginname'
            },
            {
              name: '转账金额',
              value: 'remit'
            },
            {
              name: '转出钱包',
              value: 'source'
            },
            {
              name: '转入钱包',
              value: 'target'
            },
            {
              name: '状态',
              value: 'remark'
            },
            {
              name: '转账时间',
              value: 'tempCreateTime'
            }
          ];
        case "concessionReccords":
          return this.thead = [{
              name: '编号',
              value: 'pno'
            },
            {
              name: '帐户',
              value: 'loginname'
            },
            {
              name: '优惠类型',
              value: 'type'
            },
            {
              name: '赠送金额',
              value: 'amount'
            },
            {
              name: '备注',
              value: 'remark'
            },
            {
              name: '创建时间',
              value: 'tempCreateTime'
            }
          ];
        case "couponRecords":
          return this.thead = [{
              name: '编号',
              value: 'pno'
            },
            {
              name: '帐户',
              value: 'loginname'
            },
            {
              name: '赠送',
              value: 'gifTamount'
            },
            {
              name: '存款',
              value: 'amount'
            },
            {
              name: '类型',
              value: 'type'
            },
            {
              name: '倍数',
              value: 'betMultiples'
            },
            {
              name: '执行时间',
              value: 'tempCreateTime'
            },
          ];
        case "depositOrderRecord": //附言存款
          return this.thead = [{
              name: '附言',
              value: 'depositId'
            },
            {
              name: '银行',
              value: 'bankname'
            },
            {
              name: '状态',
              value: 'status'
            },
            {
              name: '创建时间',
              value: 'tempCreateTime'
            }
          ];
        case "deputyRecords":
          return this.thead = [{
              name: '编号',
              value: 'referenceNo'
            },
            {
              name: '账户',
              value: 'loginname'
            },
            {
              name: '类型',
              value: 'typeString'
            },
            {
              name: '存款金额',
              value: 'remit'
            },
            {
              name: '账户余额',
              value: 'newCredit'
            },
            {
              name: '执行时间',
              value: 'tempCreateTime'
            }
          ];
        case "ximaDetail":
          return this.thead = [{
              value: 'pno',
              name: '编号'
            },
            {
              name: '有效投注额',
              value: 'validAmount'
            },
            {
              name: '结算金额',
              value: 'ximaAmount'
            },
            {
              value: 'ximaType',
              name: '洗码类型'
            },
            {
              value: 'rate',
              name: '洗码率'
            },
            {
              name: '状态',
              value: 'ximaStatus'
            },
            {
              value: 'statisticsTimeRange',
              name: '统计时间段',
              width: '200'
            }
          ];
        case "friend":
          // 这部分可后续调整，去掉该逻辑判断
          if (this.searchData.friendtype == 0) {
            return this.thead = [{
                name: '推荐账号',
                value: 'toplineuser'
              },
              {
                name: '被推荐账号',
                value: 'downlineuser'
              },
              {
                name: '时间',
                value: 'createtime'
              }
            ];
          } else {
            this.thead = [{
                name: '推荐账号',
                value: 'toplineuser'
              },
              {
                name: '被推荐账号',
                value: 'downlineuser'
              },
              {
                name: '类型',
                value: 'type'
              },
              {
                name: '金额',
                value: 'money'
              },
              {
                name: '详情',
                value: 'remark',
                width: '300'
              },
              {
                name: '时间',
                value: 'createtime'
              }
            ];
          }
          break;
        default:
          break;
      }
    },
  },
  created() {
    console.log(this.userData)
  }

}
