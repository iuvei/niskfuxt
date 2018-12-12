import Vue from 'vue'
import sessionStorage from '@@/utils/sessionStorage.js'
// 注册事件总线
window.$sessionStorage = sessionStorage
Vue.prototype.$sessionStorage = sessionStorage
