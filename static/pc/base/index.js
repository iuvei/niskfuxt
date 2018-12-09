import toast from './toast/toast.js'
import {
  $alert,
  $confirm
} from './msgbox/msgbox.js'
import * as $loads from './ajax-load/index.js'
import {
  Message,
  Alert
} from 'element-ui'

function showMessage(val) {
  const regtest = new RegExp('UG', 'g')
  if (val.indexOf('UG') > -1) {
    val = val.replace(regtest, '新皇冠')
  }
  Message({
    showClose: true,
    message: val,
    type: 'warning'
  })
}
window.$alert = $alert
window.$confirm = $confirm
window.toast = showMessage
window.$load = $loads
// window.Toast=Message.warning // 弹窗配置
