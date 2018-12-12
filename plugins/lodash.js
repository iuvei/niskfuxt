import Vue from 'vue'
import lodash from 'lodash'
// 注册事件总线
window._=lodash
Vue.prototype._ = lodash
