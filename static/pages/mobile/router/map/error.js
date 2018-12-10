/**
 * 说明，这里是错误页面
 * 不要随便改动
 * 不要随便改动
 * 不要随便改动
 * 不要随便改动
 */
// error
const error = () =>
  import(/* webpackChunkName: "error" */ 'mobile/views/common/error/404.vue')
export default [
  {
    path: '*',
    component:error
  }
]
