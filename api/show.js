import ajax from '@@/utils/request.js' // 引入axios
import request from '@@/utils/request.js'
import config from '~~/config';
const  baseURL = config.BASE_URL?config.BASE_URL:'' // api的base_url

// 与展示有关
const $getNewAnnouncement = '/index/getNewAnnouncement.php' // 获取公告获取公告 只获取最新15条，时间倒序排列，GET请求，无需参数
const $queryRecommandGamesList = '/index/queryRecommandGamesList.php' // 查询推荐的热门游戏游戏 POST请求，{gameType:0},0:pc,1:mobile,2:app
const $checkConfigSystem = '/index/checkConfigSystem.php' // 弹框内容配置 首页弹窗，GET,无需参数
const $queryBannerList = '/index/queryBannerList.php' //  首页轮播 ，POST请求，{bannerType:0},0:PC,1:MOBILE,2:APP

const $getCarouselListAll = '/index/getCarouselListAll.php' // 中奖信息列表,GET请求，无参数

const $makeCall = '/user/makeCall.php' // 电话回拨接口
const $generateQRCode = '/index/generateQRCode.php' // 返回二维码

const $queryLatestPreferential = '/youhui/queryLatestPreferential.php' // 获取优惠列表 POST,{platformType:'PC'},pc/mobile
const $findLatestPreferentialById = '/youhui/findLatestPreferentialById.php' // 由优惠id，查询优惠详情，返回html{platform:pc/mobile,id:0}
const $allGamesDataPc = 'https://www.staticsources.com/slot/bjh/allGames.json' // 获取游戏大厅列表pc
const $allGamesDataMobile = 'https://www.staticsources.com/slot/bjh/allPhoneGames.json' // 获取游戏大厅列表mobile
const $getTouClickFlag = '/asp/getTouClickFlag.php' // 获取是否开启点触(已经废弃)

// 需要登陆状态
// 后面这些，需要转移
const $saveOrUpdateGameStatus = '/user/saveOrUpdateGameStatus.php' // 保存收藏游戏列表接口
const $getMessageByUser = '/index/getMessageByUser.php' // 获取用户站内信列表

const $readMsg = '/index/readMsg.php' // 获取个人信息详情单个消息的详情页
const $getGuestbookCountNew = '/index/getGuestbookCountNew.php' // 获取未读消息（已废弃，用站内信列表）
const $getbackPwdByDx_dc = '/index/getbackPwdByDx_dc.php' // 手机短信找回密码
const $getbackPwdByEmail = '/index/getbackPwdByEmail.php' // 邮箱找回密码

const $getLoginNameByEmailOrPhone = '/index/getLoginNameByEmailOrPhone.php' // 手机短信或邮件找回账户名（目前好像没有在用）
const $getIp = 'http://ip-api.com/json?lang=zh-CN' // 获取访问者ip

export function getLoginNameByEmailOrPhone(data) {
  return request({
    url: `${baseURL}/index/getLoginNameByEmailOrPhone.php`,
    method: 'post',
    data: params,
  })
}
export function getTouClickFlag(data) {
  return request({
    url: `${baseURL}/asp/getTouClickFlag.php`,
    method: 'GET',
    data: params,
  })
}
export function queryLatestPreferential(params) {
  return request({
    url: `${baseURL}/youhui/queryLatestPreferential.php`,
    method: 'POST',
    data: params,
  })
}
export function findLatestPreferentialById(params) {
  return request({
    url: `${baseURL}/youhui/findLatestPreferentialById.php`,
    method: 'POST',
    data: params,
  })
}
export function getbackPwdByEmail(params) {
  return request({
    url: `${baseURL}/index/getbackPwdByEmail.php`,
    method: 'POST',
    data: params,
  })
}

export function getAllGames(type) {
  if (type == 'pc') {
    return ajax.get($allGamesDataPc)
  } else {
    return ajax.get($allGamesDataMobile)
  }
}
// 可以废弃，用js生成二维码
export function generateQRCode(data, size = 140) {
  return `${baseURL}/index/generateQRCode.php?qrtext=${data}&size=${size}`
}
export function getbackPwdByDx_dc(params) {
  return request({
    url: `${baseURL}/index/getbackPwdByDx_dc.php`,
    method: 'POST',
    data: params,
  })
}
// 有延时，已废弃
export function getGuestbookCountNew(params) {
  return request({
    url: `${baseURL}/index/getGuestbookCountNew.php`,
    method: 'POST',
    data: params,
  })
}
export function makeCall(params) {
  return request({
    url: `${baseURL}/user/makeCall.php`,
    method: 'POST',
    data: params,
  })
}
export function getCarouselListAll(params) {
  return request({
    url: `${baseURL}/index/getCarouselListAll.php`,
    method: 'GET',
    data: params,
  })
}
export function checkConfigSystem(params) {
  return request({
    url: `${baseURL}/index/checkConfigSystem.php`,
    method: 'GET',
    data: params,
  })
}
export function queryBannerList(params) {
  return request({
    url: `${baseURL}/index/queryBannerList.php`,
    method: 'GET',
    data: params,
  })
}
export function getNewAnnouncement(params) {
  return request({
    url: `${baseURL}/index/getNewAnnouncement.php`,
    method: 'GET',
    data: params,
  })
}
export function queryRecommandGamesList(params) {
  return request({
    url: `${baseURL}/index/queryRecommandGamesList.php`,
    method: 'GET',
    data: params,
  })
}

export function saveOrUpdateGameStatus(params) {
  return request({
    url: `${baseURL}/user/saveOrUpdateGameStatus.php`,
    method: 'POST',
    data: params,
  })
}
export function getMessageByUser(params) {
  return request({
    url: `${baseURL}/index/getMessageByUser.php`,
    method: 'GET',
    data: params,
  })
}
export function readMsg(params) {
  return request({
    url: `${baseURL}/index/readMsg.php`,
    method: 'GET',
    data: params,
  })
}
export function getIp(params){
  return request({
    url: `http://ip-api.com/json?lang=zh-CN`,
    method: 'GET',
    data: params,
  })
}
export function getDomainName(params) {
  return request({
    url: `${baseURL}/asp/getDomainName.php`,
    method: 'GET',
    data: params,
  })
}
