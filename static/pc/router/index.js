import Vue from 'vue'
import VueRouter from 'vue-router'
import show from './map/show'
import user from './map/user'
import error from './map/error'
import { BeforeEach, AfterEach } from '@/util/permission'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash', // require service support
  // base: "/",
  'linkActiveClass': 'active',
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
  },
  routes: [
    ...show,
    ...user,
    ...error
  ]
})
router.beforeEach(BeforeEach)
router.afterEach(AfterEach)
export default router
