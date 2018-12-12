import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from '~~/store/modules/userInfo';
import siteInfo from '~~/store/modules/siteInfo';
Vue.use(Vuex)
const store = () => new Vuex.Store({
  modules: {
    userInfo,
    siteInfo
  }
})

export default store;
