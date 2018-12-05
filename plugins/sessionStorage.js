import Vue from 'vue'
import sessionStorage from '@@/utils/sessionStorage.js'
// 注册事件总线
console.log(sessionStorage)
Vue.prototype.$sessionStorage = sessionStorage
