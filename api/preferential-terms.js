import ajax from '@@/utils/request.js' // 引入axios
import request from '@@/utils/request.js'
import config from '~~/config';
const  baseURL = config.BASE_URL?config.BASE_URL:'' // api的base_url
// 与用户优惠有关
const $youhui = '/youhui/youhui.php' // 存送优惠
const $getSelfYouHuiObject = '/youhui/getSelfYouHuiObject.php' // 自助优惠

const $getAllAutoXimaObject = '/xima/getAllAutoXimaObject.php' // 取得用户全部平台的洗码资料
const $getXimaData = '/xima/getXimaData.php' // 查询洗码记录 来确认是否能洗码
const $doXima = '/xima/doXima.php' // 确认洗码
const $transferInforHongBao = '/youhui/transferInforHongBao.php' // 红包
const $transferInforCoupon = '/youhui/transferInforCoupon.php' // 优惠券 使用优惠代码转入金额

const $queryPTLosePromo = '/youhui/queryPTLosePromo.php' // 查询pt老虎机救援金记录
const $claimLosePromo = '/youhui/claimLosePromo.php ' // 处理救援金

const $getBetUpgrateVO = '/youhui/getBetUpgrateVO.php' // 自助晋级查询
const $checkUpgrade = '/youhui/checkUpgrade.php' // 自助晋级

const $canClaimBirthdayCoupon = '/youhui/canClaimBirthdayCoupon.php' // 是否可以领取生日礼金
const $claimBirthdayCoupon = '/youhui/claimBirthdayCoupon.php' // 领取生日礼金

const $queryFriendBonue = '/youhui/queryFriendBonue.php' // 查询推荐好友奖金余额
const $transferInforFriend = '/youhui/transferInforFriend.php' // 推荐好友奖金  转入平台

const $commitPT8Self = '/youhui/commitPT8Self.php' // 体验金 领取
const $canGetPt8CouponCheck = '/youhui/canGetPt8CouponCheck.php' // 确认体验金
const $youhuiDisplay = '/youhui/youhuiDisplay.php' // 查询体验金
const $enablePlatform = '/youhui/enablePlatform.php' // 使用平台类型

export function youhuiDisplay(params) {
  return request({
    url: `${baseURL}/youhui/youhuiDisplay.php`,
    method: 'GET',
    data: params,
  })
}

export function commitPT8Self(params) {
  return request({
    url: `${baseURL}/youhui/commitPT8Self.php`,
    method: 'GET',
    data: params,
  })
}

export function canGetPt8CouponCheck(params) {
  return request({
    url: `${baseURL}/youhui/canGetPt8CouponCheck.php`,
    method: 'GET',
    data: params,
  })
}

export function getAllAutoXimaObject(params) {
  return request({
    url: `${baseURL}/xima/getAllAutoXimaObject.php`,
    method: 'GET',
    data: params,
  })
}

export function transferInforFriend(params) {
  return request({
    url: `${baseURL}/youhui/transferInforFriend.php`,
    method: 'POST',
    data: params,
  })
}

export function claimLosePromo(params) {
  return request({
    url: `${baseURL}/youhui/claimLosePromo.php`,
    method: 'POST',
    data: params,
  })
}

export function youhui(params) {
  return request({
    url: `${baseURL}/youhui/youhui.php`,
    method: 'GET',
    data: params,
  })
}

export function getSelfYouHuiObject(params) {
  return request({
    url: `${baseURL}/youhui/getSelfYouHuiObject.php`,
    method: 'POST',
    data: params,
  })
}

export function getXimaData(params) {
  return request({
    url: `${baseURL}/xima/getXimaData.php`,
    method: 'POST',
    data: params,
  })
}

export function doXima(params) {
  return request({
    url: `${baseURL}/xima/doXima.php`,
    method: 'POST',
    data: params,
  })
}

export function transferInforCoupon(params) {
  return request({
    url: `${baseURL}/youhui/transferInforCoupon.php`,
    method: 'POST',
    data: params,
  })
}

export function queryPTLosePromo(params) {
  return request({
    url: `${baseURL}/youhui/queryPTLosePromo.php`,
    method: 'GET',
    data: params,
  })
}

export function getBetUpgrateVO(params) {
  return request({
    url: `${baseURL}/youhui/getBetUpgrateVO.php`,
    method: 'GET',
    data: params,
  })
}

export function checkUpgrade(params) {
  return request({
    url: `${baseURL}/youhui/checkUpgrade.php`,
    method: 'GET',
    data: params,
  })
}

export function canClaimBirthdayCoupon(params) {
  return request({
    url: `${baseURL}/youhui/canClaimBirthdayCoupon.php`,
    method: 'GET',
    data: params,
  })
}

export function claimBirthdayCoupon(params) {
  return request({
    url: `${baseURL}/youhui/claimBirthdayCoupon.php`,
    method: 'GET',
    data: params,
  })
}

export function queryFriendBonue(params) {
  return request({
    url: `${baseURL}/youhui/queryFriendBonue.php`,
    method: 'GET',
    data: params,
  })
}

export function transferInforHongBao(params) {
  return request({
    url: `${baseURL}/youhui/transferInforHongBao.php`,
    method: 'POST',
    data: params,
  })
}
export function enablePlatform(params) {
  return request({
    url: `${baseURL}/youhui/enablePlatform.php`,
    method: 'POST',
    data: params,
  })
}
