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
const $getPaymentConfigInfo = '/onlinepayment/getPaymentConfigInfo.php' // 充值方式配置  0 1 2 分别是PC/WAP/APP
const $mobilePayByEbank = '/onlinepayment/mobilePayByEbank.php' // 存款时，根据支付类型，动态获取网银银行卡列表

const $onlinePayDispathcer = '/onlinepayment/onlinePayDispathcer.php' // 提交普通存款订单
const $createDepositeOrder = '/asp/createDepositeOrder.php' // 创建秒存订单
const $getWxZzQuota = '/asp/getWxZzQuotaV2.php' // 微信秒存随机数
const $getZfbZzQuota = '/asp/getZfbZzQuota.php' // 支付宝秒存随机数
const $createOrderForYsfpay = '/asp/createOrderForYsfpay.php' // 云闪付
const $showApplyWithdrawMsg = '/asp/showApplyWithdrawMsg.php' // 存款提示
const $getTransferOnceProgress = '/asp/getTransferOnceProgress.php'
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
export function createDepositeOrder(data) {
  return ajax.post($createDepositeOrder, data)
}
export function getPaymentConfigInfo(params) {
  return request({
    url: `${baseURL}/onlinepayment/getPaymentConfigInfo.php`,
    method: 'GET',
    data: params,
  })
}
export function mobilePayByEbank(data) {
  return ajax.post($mobilePayByEbank, data)
}
export function createOrderForYsfpay(data) {
  return ajax.post($createOrderForYsfpay, data)
}
export function onlinePayDispathcer(data) {
  const $form = document.createElement('form')
  const $_target = (new Date()).getTime()
  window.open('/static/page/payment', $_target)
  $form.target = $_target
  $form.method = 'POST'
  $form.action = $onlinePayDispathcer
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
export function updateGameMoney(data) {
  window.$load.open('正在发送...')
  return ajax.post($updateGameMoney, data)
}
export function checkWithdrawPwd(data) {
  return ajax.get($checkWithdrawPwd, data)
}
export function changepws(data) {
  window.$load.open('正在发送...')
  return ajax.post($change_pws, data)
}
export function modifyWithdrawPwd(data) {
  window.$load.open('正在发送...')
  return ajax.post($modifyWithdrawPwd, data)
}
export function bindWithdrawPwd(data) {
  window.$load.open('正在发送...')
  return ajax.post($bindWithdrawPwd, data)
}
export function findUserBankList(data) {
  return ajax.get($findUserBankList, data)
}
export function withdraw_new(data) {
  window.$load.open('正在发送...')
  return ajax.post($withdraw_new, data)
}
export function validateBankNo(data) {
  return ajax.get($validateBankNo, data)
}
export function bindBankNo(data) {
  window.$load.open('正在发送...')
  return ajax.get($bindBankNo, data)
}
export function getWxZzQuota(data) {
  window.$load.open('正在发送...')
  return ajax.post($getWxZzQuota, data)
}
export function getZfbZzQuota(data) {
  window.$load.open('正在发送...')
  return ajax.post($getZfbZzQuota, data)
}
export function showApplyWithdrawMsg(data) {
  window.$load.open('正在查询...')
  console.log(data)
  return ajax.get($showApplyWithdrawMsg, data)
}
export function getTransferOnceProgress(data) {
  return ajax.post($getTransferOnceProgress, data)
}
