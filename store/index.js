import Vue from 'vue';
import Vuex from 'vuex';

import userInfo from './modules/userInfo';
import siteInfo from './modules/siteInfo';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    userInfo,
    siteInfo
  },
  actions: {
  }
})

export default store;
