import ajax from '@@/utils/request.js' // 引入axios
import request from '@@/utils/request.js'
import config from '~~/config';
const  baseURL = config.BASE_URL?config.BASE_URL:'' // api的base_url

// 与金流有关的
const $change_pws = '/asp/change_pws.php' // 修改登录密码
const $checkWithdrawPwd = '/asp/checkWithdrawPwd.php' // 确认用户是否设置支付密码
const $bindWithdrawPwd = '/asp/bindWithdrawPwd.php' // 设置支付密码
const $modifyWithdrawPwd = '/asp/modifyWithdrawPwd.php' // 修改支付密码

const $findUserBankList = '/asp/findUserBankList.php' // 获取银行卡列表
const $bindBankNo = '/mobi/bindBankNo.php' // 绑定银行卡
const $validateBankNo = '/asp/validateBankNo.php' // 校验银行卡号

const $withdraw_new = '/asp/withdraw_new.php' // 取款提交
const $updateGameMoney = '/asp/updateGameMoney.php' // 转账
// const $getPaymentConfigInfo = '/onlinepayment/getPaymentConfigInfo.php' // 充值方式配置  0 1 2 分别是PC/WAP/APP
const $mobilePayByEbank = '/onlinepayment/mobilePayByEbank.php' // 存款时，根据支付类型，动态获取网银银行卡列表

const $createDepositeOrder = '/asp/createDepositeOrder.php' // 创建秒存订单
const $getWxZzQuota = '/asp/getWxZzQuotaV2.php' // 微信秒存随机数
const $getZfbZzQuota = '/asp/getZfbZzQuota.php' // 支付宝秒存随机数
const $createOrderForYsfpay = '/asp/createOrderForYsfpay.php' // 云闪付
const $showApplyWithdrawMsg = '/asp/showApplyWithdrawMsg.php' // 存款提示
const $getTransferOnceProgress = '/asp/getTransferOnceProgress.php' // 
// const post = function (URL, PARAMS) {
//   var temp = document.createElement('form')
//   temp.action = URL
//   temp.method = 'post';
//   temp.style.display = 'none';
//   for (var x in PARAMS) {
//     var opt = document.createElement('textarea')
//     opt.name = x
//     opt.value = PARAMS[x]
//     // alert(opt.name)
//     temp.appendChild(opt)
//   }
//   document.body.appendChild(temp)
//   temp.submit()
//   document.body.removeChild(temp)
//   return temp
// }
// 调用方法 如
export function createDepositeOrder(params) {
  return request({
    url: `${baseURL}/asp/createDepositeOrder.php`,
    method: 'POST',
    data: params,
  })
}
export function getPaymentConfigInfo(params) {
  //  充值方式配置terminalType：  0 1 2 分别是PC/WAP/APP
  return request({
    url: `${baseURL}/onlinepayment/getPaymentConfigInfo.php`,
    method: 'GET',
    data: params,
  })
}
export function mobilePayByEbank(params) {
  return request({
    url: `${baseURL}/onlinepayment/mobilePayByEbank.php`,
    method: 'GET',
    data: params,
  })
}
export function createOrderForYsfpay(params) {
  return request({
    url: `${baseURL}/asp/createOrderForYsfpay.php`,
    method: 'POST',
    data: params,
  })
}
export function onlinePayDispathcer(data) {
  const $form = document.createElement('form')
  // 解决safari打不开form表单的bug
  const $_target = (new Date()).getTime()
  window.open('/static/page/payment', $_target)
  $form.target = $_target
  $form.method = 'POST'
  $form.action = `${baseURL}/onlinepayment/onlinePayDispathcer.php`
  for (const item in data) {
    const inputVal = document.createElement('input')
    inputVal.type = 'hidden'
    inputVal.value = data[item]
    inputVal.name = item
    $form.appendChild(inputVal)
  }
  document.querySelector('body').appendChild($form)
  $form.submit()
  setTimeout(() => {
    document.querySelector('body').removeChild($form)
  }, 0)
}
export function updateGameMoney(params) {
  return request({
    url: `${baseURL}/asp/updateGameMoney.php`,
    method: 'POST',
    data: params,
  })
}
export function checkWithdrawPwd(params) {
  return request({
    url: `${baseURL}/asp/checkWithdrawPwd.php`,
    method: 'GET',
    data: params,
  })
}
export function changepws(data) {
  return request({
    url: `${baseURL}/asp/change_pws.php`,
    method: 'POST',
    data: params,
  })
}
export function modifyWithdrawPwd(params) {
  return request({
    url: `${baseURL}/asp/modifyWithdrawPwd.php`,
    method: 'POST',
    data: params,
  })
}
export function bindWithdrawPwd(params) {
  return request({
    url: `${baseURL}/asp/bindWithdrawPwd.php`,
    method: 'POST',
    data: params,
  })
}
export function findUserBankList(params) {
  return request({
    url: `${baseURL}/asp/findUserBankList.php`,
    method: 'POST',
    data: params,
  })
}
export function withdraw_new(params) {
  return request({
    url: `${baseURL}/asp/withdraw_new.php`,
    method: 'POST',
    data: params,
  })
}
export function validateBankNo(params) {
  return request({
    url: `${baseURL}/asp/validateBankNo.php`,
    method: 'GET',
    data: params,
  })
}
export function bindBankNo(params) {
  return request({
    url: `${baseURL}/mobi/bindBankNo.php`,
    method: 'POST',
    data: params,
  })
}
export function getWxZzQuota(params) {
  return request({
    url: `${baseURL}/asp/getWxZzQuotaV2.php`,
    method: 'POST',
    data: params,
  })
}
export function getZfbZzQuota(params) {
  return request({
    url: `${baseURL}/asp/getZfbZzQuota.php`,
    method: 'POST',
    data: params,
  })
}
export function showApplyWithdrawMsg(params) {
  return request({
    url: `${baseURL}/asp/showApplyWithdrawMsg.php`,
    method: 'POST',
    data: params,
  })
}
export function getTransferOnceProgress(params) {
  return request({
    url: `${baseURL}/asp/getTransferOnceProgress.php`,
    method: 'GET',
    data: params,
  })
}
