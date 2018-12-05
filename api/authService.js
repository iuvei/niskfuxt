import ajax from '@@/utils/request.js' // 引入axios

const $login = '/index/login.php' // 登入
const $ajaxGetSessionPersonalData = '/user/ajaxGetSessionPersonalData.php' // 该接口用于获取用户信息
const $logout = '/index/logout.php' // 登出
const $register = '/mobi/register.php' // 注册
const $addAgent = '/mobi/addAgent.php' // 代理注册
const $checkWithdrawPwd = '/asp/checkWithdrawPwd.php' // 确认用户是否设置支付密码
const $getMessageByUser = '/index/getMessageByUser.php' // 获取用户站内信列表

/**
 * 用户相关API
 */
export function ajaxGetSessionPersonalData() {
  return ajax.get($ajaxGetSessionPersonalData)
}
export function login(userData) {
  $load.open('登录中...')
  return ajax.post($login, userData)
}
export function logOut() {
  $load.open('正在退出...')
  return ajax.get($logout)
}
export function getAuthImg() {
  return '/mobi/validateImage.php?random=' + Math.random() // 验证码
}
export function register(data) {
  $load.open('正在注册...')
  return ajax.post($register, data)
}
export function registerAgent(data) {
  $load.open('正在注册...')
  return ajax.post($addAgent, data)
}
export function checkWithdrawPwd(data) {
  return ajax.get($checkWithdrawPwd, data)
}
export function getMessageByUser(data) {
  return ajax.get($getMessageByUser, data)
}