// 拓展
import Vue from 'vue'
import dom from '@@/utils/dom.js' // 加载原型方法
import prototype from '@@/utils/prototype' // 加载原型扩展.
// 注册事件总线
Vue.prototype.$bus = new Vue()
// 引用lodash工具库
import lodash from 'lodash'
window._=lodash
Vue.prototype._ = lodash