import Vue from 'vue'
import * as CONFIG from '@@/assets/data/config.json'
import * as DOWNLOAD from '@@/assets/data/download.json'
import * as CONTACT from '@@/assets/data/contact.json'
import * as WALLET from '@@/assets/data/walletData.json'
import * as GAMES from '@@/assets/data/games.json'

const $SITE={
	config:CONFIG,
	download:DOWNLOAD,
	contact:CONTACT,
	wallet:WALLET,
	games:GAMES
}
// 挂载数据
window.$SITE=$SITE
Vue.prototype.$SITE = $SITE 

