// 配置全局方法
import Vue from 'vue'
import openWindow from "~~/utils/openWindow"
import axios from '../utils/request'
import localStorage from '@@/utils/localStorage.js'
import sessionStorage from '@@/utils/sessionStorage.js'
import * as WALLET from '@@/assets/data/walletData.json'

const $METHODS = {
  openWindow: openWindow,
  axios: axios,
  localStorage: localStorage,
  sessionStorage: sessionStorage,
  getName:getName
  // imageToBase64:imageToBase64
}
// 挂载数据
window.$METHODS = $METHODS
Vue.prototype.$METHODS = $METHODS

function getName(key,lang='zh-cn'){
	console.log(key)
	console.log("====")
	const _data = WALLET.find(item=>{
		console.log(item.value,key)
		return item.value.toUpperCase()==key.toUpperCase()
	})
	console.log(_data);
	if(_data){
		return _data.name
	}else{
		return ''
	}
}