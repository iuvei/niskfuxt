import ajax from '@@/utils/request.js' // 引入axios
import request from '@@/utils/request.js'
import config from '~~/config';
const baseURL = config.BASE_URL ? config.BASE_URL : '' // api的base_url

const $agentReport = '/agent/agentReport.php' // 数据汇总（代理首屏页）
const $searchagprofitData = '/agent/searchagprofitData.php' // 会员输赢查询
const $getAgentQueryType = '/agent/getAgentQueryType.php' // 提案类型值
const $queryAgentSubUserInfoData = '/agent/queryAgentSubUserInfoData.php' // 查询代理下子用户信息
const $getXimaSelectItems = '/agent/getXimaSelectItems.php' // 洗码选项
const $searchPtCommissionsData = '/agent/searchPtCommissionsData.php' // 老虎机日结佣金记录
const $searchsubuserProposalData = '/agent/searchsubuserProposalData.php' // 查询下线账务
const $getProposalYouHuiTypeSelectionData = '/agent/getProposalYouHuiTypeSelectionData.php' // 获取优惠类型下拉数据

export function agentReport(params) {
  return request({
    url: `${baseURL}/agent/agentReport.php`,
    method: 'GET',
    data: params,
  })
}
export function searchagprofitData(params) {
  return request({
    url: `${baseURL}/agent/searchagprofitData.php`,
    method: 'GET',
    data: params,
  })
}
export function getAgentQueryType(params) {
  return request({
    url: `${baseURL}/agent/getAgentQueryType.php`,
    method: 'GET',
    data: params,
  })
}
export function queryAgentSubUserInfoData(params) {
  return request({
    url: `${baseURL}/agent/queryAgentSubUserInfoData.php`,
    method: 'GET',
    data: params,
  })
}
export function getXimaSelectItems(params) {
  return request({
    url: `${baseURL}/agent/getXimaSelectItems.php`,
    method: 'GET',
    data: params,
  })
}
export function searchPtCommissionsData(params) {
  return request({
    url: `${baseURL}/agent/searchPtCommissionsData.php`,
    method: 'GET',
    data: params,
  })
}
export function searchsubuserProposalData(params) {
  return request({
    url: `${baseURL}/agent/searchsubuserProposalData.php`,
    method: 'GET',
    data: params,
  })
}
export function getProposalYouHuiTypeSelectionData(params) {
  return request({
    url: `${baseURL}/agent/getProposalYouHuiTypeSelectionData.php`,
    method: 'GET',
    data: params,
  })
}
