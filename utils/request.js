import axios from 'axios';
import store from '@/store';
import qs from 'qs';

// 创建axios实例
const service = axios.create({
  timeout: 5000, // 请求超时时间
  responseType:'json'
})
// 设置为formData形式提交
service.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 设置返回的数据格式
service.defaults.responseType = 'json'
// 发送请求前的拦截
service.interceptors.request.use(function(config) {
  if(config.method.toUpperCase()=='POST'){
    // form-data形式
    config.data = qs.stringify(config.data)
  }else if(config.method.toUpperCase()=='GET'){
    // 拼接get参数
    config.url=`${config.url}?${qs.stringify(config.data)}&v=${(new Date()).getTime()}`
  }
  return config
}, function(error) {
  // console.log('发送请求失败,' + error)
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use((response) => {
  // 接口正常返回
  // 关闭loading窗
  // window.$load.close()
  // 没有返回data
  if (response.status === 200 && response.data == undefined) {
    // 接口可能把值放在request.response里
    const olddata = response.request.responseText || response.request.response
    // 针对可能返回结果全为字符串的情况
    if (typeof olddata === 'string') {
      try {
        // 尝试转换成json格式
        response.data = JSON.parse(olddata)
      } catch (e) {
        // 直接返回该字符串
        response.data = {
          message: olddata,
          olddata: olddata,
          success: false
        }
      }
    } else {
      // 直接返回
      response.data = olddata
    }
  }
  // 没有success状态
  if (!response.data.hasOwnProperty('success')) {
    response.data.success = response.data.code == '10000'
  }
  // 40001， 登陆过期
  if (response.status === 200 && /40001/.test(response.data.code)) {
    // 初始化用户信息
    console.log(store)
    // store.dispatch('INIT_INFO')
    // 返回首页
    // 可以直接reload就可以，具体页面设置middleeware
    // location.reload()
    // vueRouter.push({
    // path: '/'
    // })
  }
  if (response.status === 200 && /55555/.test(response.data.code)) {
    // 系统维护代码
  }  
    // 返回ajax的内容

  return response.status === 200 ? response.data : response
},
(err) => {
  // console.log(err)
  // 接口报错
  // 获取错误信息
  if (err && err.response) {
    switch (err.response.status) {
      // 根据错位信息，是否要跳转到对应的错误页,错误页面，PC/MOBILE/APP共用
      // case 500:
      // window.location.href='/page/error/500.html'
      // break
      // ip限制
      case 403:
        // window.location.href='/static/page/error/403.html'
        break
    }
  }
  return Promise.reject(err)
}
)
// window.$ajax = service
export default service