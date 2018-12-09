import Vue from 'vue'
import * as CONFIG from '@@/assets/data/config.json'
import * as CONTACT from '@@/assets/data/contact.json'
import * as DOWNLOAD from '@@/assets/data/download.json'
Vue.prototype.$siteInfo={
    // 网站配置信息
    config:CONFIG,
    // 相关app下载地址
    download:DOWNLOAD,
    // 相关联系方式
    contact:CONTACT
}