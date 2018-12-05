import Vue from 'vue'
import * as CONFIG from '@@/assets/data/config.json'
import * as CONTACT from '@@/assets/data/contact.json'
import * as DOWNLOAD from '@@/assets/data/download.json'
// 网站配置
Vue.prototype.$CONFIG = CONFIG
// 网站下载
Vue.prototype.$DOWNLOAD = DOWNLOAD
// 网站联系方式
Vue.prototype.$CONTACT = CONTACT
