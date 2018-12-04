import ajax from '@@/utils/request.js' // 引入axios

const $login = '/index/login.php' // 登入
const $checkLogin = '/user/ajaxGetSessionPersonalData.php' // 该接口用于获取用户信息
const $logout = '/index/logout.php' // 登出
const $register = '/mobi/register.php' // 注册
const $addAgent = '/mobi/addAgent.php' // 代理注册

/**
 * 用户相关API
 */
export function checkLogin() {
  return ajax.get($checkLogin)
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
