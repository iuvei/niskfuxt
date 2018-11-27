import request from '../utils/request';

const prefix = '/common';
// const proxy = '/proxy';

export const getHomeData = (params) => {
  return request({
    url: `${prefix}/getHomeData`,
    method: 'GET',
    data: params,
  })
}
export const checkLogin = (params) => {
  return request({
    url: `/user/ajaxGetSessionPersonalData.php`,
    method: 'GET',
    data: params,
  })
}
export const ipapi = (params) => {
  return request({
    url: `https://ipapi.co/json/`,
    method: 'GET',
    data: params,
  })
}