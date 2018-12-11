 /**
  * 用户模块
  */
 import {
   getAuthImg
 } from '@@/api/authService'
 import util from '@@/utils/util'

 const state = {
   validateImage: null, // 验证码
 }

 const getters = {
   validateImage(state) {
     if (state.validateImage == null) {
       if (process.browser) {
         const imgSrc = getAuthImg()
         util.ImgToBase64(imgSrc).then(res => {
           state.validateImage = res
         })
       }
     }
     return state.validateImage
   }
 }

 const actions = {

 }
 const mutations = {
   // 更新验证码
   GET_VALIDATE(state) {
     if (process.browser) {
       state.validateImage = '/favicon.ico'
       const imgSrc = getAuthImg()
       util.ImgToBase64(imgSrc).then(res => {
         state.validateImage = res
       }).catch(err => {})
     }
   },
 }
 export default {
   state,
   actions,
   getters,
   mutations
 }
