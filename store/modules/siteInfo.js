 /**
 * 用户模块
 */
import { getAuthImg } from '@@/api/authService' 
import util from '@@/utils/util'

const state = {
    validateImage: null, // 验证码
}

const getters = {
    validateImage(state) {
        if (state.validateImage == null) {
          const imgSrc = getAuthImg()
          util.ImgToBase64(imgSrc).then(res => {
            state.validateImage = res
          })
        }
        return state.validateImage
      }
}

const actions = {
 
}
const mutations={
    // 更新验证码
    [types.GET_VALIDATE](state) {
        const imgSrc = getAuthImg()
        util.ImgToBase64(imgSrc).then(res => {
          state.validateImage = res
        })
      },
}
export default {
  state,
  actions,
  getters,
  mutations
}