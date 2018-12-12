// 配置全局方法
import Vue from 'vue'
import openWindow from "~~/utils/openWindow"
import axios from '../utils/request'
import localStorage from '@@/utils/localStorage.js'
import sessionStorage from '@@/utils/sessionStorage.js'
import imageToBase64 from '@@/utils/imageToBase64.js'

const $METHODS={
	openWindow:openWindow,
	axios:axios,
	localStorage:localStorage,
	sessionStorage:sessionStorage,
	imageToBase64:imageToBase64
}
// 挂载数据
window.$METHODS=$METHODS
Vue.prototype.$METHODS = $METHODS 

