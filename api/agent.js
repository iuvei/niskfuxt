
import ajax from '@/utils/request.js' // 引入axios

const $agentReport = '/agent/agentReport.php' // 数据汇总（代理首屏页）
const $searchagprofitData = '/agent/searchagprofitData.php' // 会员输赢查询
const $getAgentQueryType = '/agent/getAgentQueryType.php' // 提案类型值
const $queryAgentSubUserInfoData = '/agent/queryAgentSubUserInfoData.php' // 查询代理下子用户信息
const $getXimaSelectItems = '/agent/getXimaSelectItems.php' // 洗码选项
const $searchPtCommissionsData = '/agent/searchPtCommissionsData.php' // 老虎机日结佣金记录
const $searchsubuserProposalData = '/agent/searchsubuserProposalData.php' // 查询下线账务
const $getProposalYouHuiTypeSelectionData = '/agent/getProposalYouHuiTypeSelectionData.php' // 获取优惠类型下拉数据

export function agentReport(data) {
  return ajax.get($agentReport, data)
}
export function searchagprofitData(data) {
  return ajax.get($searchagprofitData, data)
}
export function getAgentQueryType(data) {
  return ajax.get($getAgentQueryType, data)
}
export function queryAgentSubUserInfoData(data) {
  return ajax.get($queryAgentSubUserInfoData, data)
}
export function getXimaSelectItems(data) {
  return ajax.get($getXimaSelectItems, data)
}
export function searchPtCommissionsData(data) {
  return ajax.get($searchPtCommissionsData, data)
}
export function searchsubuserProposalData(data) {
  return ajax.get($searchsubuserProposalData, data)
}
export function getProposalYouHuiTypeSelectionData(data) {
  return ajax.get($getProposalYouHuiTypeSelectionData, data)
}
