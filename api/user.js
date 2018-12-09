import ajax from '@@/utils/request.js' // 引入axios
import request from '@@/utils/request.js'
import config from '~~/config';
const  baseURL = config.BASE_URL?config.BASE_URL:'' // api的base_url

const $doSignRecord = '/asp/doSignRecord.php' // 签到
const $queryGameStatus = '/user/queryGameStatus.php' // 查询用户收藏的游戏

const $getGameMoney = '/cash/getGameMoney.php' // 获取金钱接口
const $change_info = '/user/change_info.php' // 修改用户信息

const $modifyCustomerSocialInfo = '/user/modifyCustomerSocialInfo.php' // 修改用户qq，微信，邮箱
const $completeUserInfo = '/user/completeUserInfo.php' // 完善用户信息
const $ajaxGetSessionPersonalData = '/user/ajaxGetSessionPersonalData.php' /** *获取用户资料*/

const $getPhoneAndCode = '/youhui/getPhoneAndCode.php' /** *获取手机验证方式*/ // 获取验证码，还是发送到指定手机号
const $sendSms4TYJ = '/asp/sendSms4TYJ.php' // 体验金：发送短信到玩家的注册手机号
const $checkPhoneCode = '/youhui/checkPhoneCode.php' // 校验短信校验码

// 报表相关
const $queryCreditlogs = '/mobi/queryCreditlogs.php' // 额度记录查询
const $queryHistory = '/user/queryHistory.php' // 记录查询

const $getbackPwdByEmail = '/index/getbackPwdByEmail.php' // 邮箱找回
const $getWithdrawPW = '/onlinepayment/getWithdrawPW.php' // 手机短信或邮件找回支付密码
// 手机短信或邮件找回支付密码
export function getWithdrawPW(params) {
  return request({
    url: `${baseURL}/onlinepayment/getWithdrawPW.php`,
    method: 'POST',
    data: params,
  })
}

export function getPhoneAndCode(params) {
  // 获取验证手机端方式
  return request({
    url: `${baseURL}/youhui/getPhoneAndCode.php`,
    method: 'GET',
    data: params,
  })
}

// 签到
export function doSignRecord(params) {
  return request({
    url: `${baseURL}/asp/doSignRecord.php`,
    method: 'GET',
    data: params,
  })
}
// 获取用户收藏的游戏列表
export function queryGameStatus(params) {
    return request({
    url: `${baseURL}/user/queryGameStatus.php`,
    method: 'GET',
    data: params,
  })
}
export function checkPhoneCode(params) {
  return request({
    url: `${baseURL}/youhui/checkPhoneCode.php`,
    method: 'GET',
    data: params,
  })
}
// 发送短信到玩家的手机号
export function sendSms4TYJ(params) {
  return request({
    url: `${baseURL}/asp/sendSms4TYJ.php`,
    method: 'POST',
    data: params,
  })
}

// 邮箱找回密码
export function getbackPwdByEmail(params) {
  return request({
    url: `${baseURL}/index/getbackPwdByEmail.php`,
    method: 'POST',
    data: params,
  })
}
// 查询历史记录
export function queryHistory(params) {
  return request({
    url: `${baseURL}/user/queryHistory.php`,
    method: 'GET',
    data: params,
  })
}
// 额度记录
export function queryCreditlogs(params) {
  return request({
    url: `${baseURL}/mobi/queryCreditlogs.php`,
    method: 'GET',
    data: params,
  })
}
export function ajaxGetSessionPersonalData(params) {
  return request({
    url: `${baseURL}/user/ajaxGetSessionPersonalData.php`,
    method: 'GET',
    data: params,
  })
}

// 好像废弃了
export function change_info(data) {
  return ajax.post($change_info, data)

}
// 修改个人信息
export function modifyCustomerSocialInfo(params) {
  return request({
    url: `${baseURL}/user/modifyCustomerSocialInfo.php`,
    method: 'POST',
    data: params,
  })
}
// 新用户完善个人信息
export function completeUserInfo(params) {
  return request({
    url: `${baseURL}/user/completeUserInfo.php`,
    method: 'POST',
    data: params,
  })
}

// 获取单个直接传入 eg:"PT"
export function getGameMoney(params) {
  return request({
    url: `${baseURL}/cash/getGameMoney.php`,
    method: 'GET',
    data: params,
  })
}
