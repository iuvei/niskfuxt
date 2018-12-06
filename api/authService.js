import ajax from '@@/utils/request.js' // 引入axios
import request from '@@/utils/request.js'
import config from '~~/config';
const  baseURL = config.BASE_URL?config.BASE_URL:'' // api的base_url

/**
 * 用户相关API
 */
// 获取用户数据
export function ajaxGetSessionPersonalData(params) {
  return request({
    url: `${baseURL}/user/ajaxGetSessionPersonalData.php`,
    method: 'GET',
    data: params,
  })
}
// 登陆
export function login(params) {
  return request({
    url: `${baseURL}/index/login.php`,
    method: 'POST',
    data: params,
  })
}
// 登出
export function logOut(params) {
  return request({
    url: `${baseURL}/index/logout.php`,
    method: 'GET',
    data: params,
  })
}
// 验证码
export function getAuthImg() {
  return `${baseURL}/mobi/validateImage.php?random=  ${Math.random()}` // 验证码
}
// 普通用户注册
export function register(params) {
  return request({
    url: `${baseURL}/mobi/register.php`,
    method: 'POST',
    data: params,
  })
}
// 代理注册
export function registerAgent(params) {
  return request({
    url: `${baseURL}/mobi/addAgent.php`,
    method: 'POST',
    data: params,
  })
}
// 检查是否设置支付密码
export function checkWithdrawPwd(params) {
  return request({
    url: `${baseURL}/asp/checkWithdrawPwd.php`,
    method: 'GET',
    data: params,
  })
}
// 读取用户站内信
export function getMessageByUser(params) {
  return request({
    url: `${baseURL}/index/getMessageByUser.php`,
    method: 'GET',
    data: params,
  })
}