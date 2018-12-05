import Vue from 'vue'
import * as filters from '@@/utils/filters' // 引入全局过滤器
// 注册过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
