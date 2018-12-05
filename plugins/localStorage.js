import Vue from 'vue'
import store from 'store'
// 注册事件总线
console.log(store)
const installStore = function (Vue, options) {
  Vue.prototype.$store = store

  //   Vue.prototype.$store = function () {

  // alert('执行成功');
  //   };
};
// 注册事件总线
// Vue.prototype.$store = store
Vue.use(installStore)
console.log("vue-localStorage")
