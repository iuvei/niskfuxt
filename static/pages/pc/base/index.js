
import toast from './toast/toast.js'
import { $alert, $confirm } from './msgbox/msgbox.js'
import * as $loads from './ajax-load/index.js'
import { Message, Alert } from 'element-ui'
function showMessage(val){
    Message({
        dangerouslyUseHTMLString: true,
        showClose: true,
        message: val,
        type: 'warning'
      })
}
// import openWindow from '@/util/openWindow'
window.$alert = showMessage
window.$confirm = $confirm
window.toast = showMessage
window.$load = $loads
// window.$open = $open
