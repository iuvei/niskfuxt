
import toast from './toast/toast.js'
import { $alert, $confirm } from './msgbox/msgbox.js'
import * as $loads from './ajax-load/index.js'
import { Message, Alert } from 'element-ui'
function showMessage(val){
    Message({
        dangerouslyUseHTMLString: true,
        showClose: true,
        message: val,
        duration: 1500,
        type: 'warning'
    })
}
function showMessage1(val){
    Message({
        dangerouslyUseHTMLString: true,
        showClose: true,
        message: val,
        duration: 0,
        type: 'warning'
    })
}
window.$alert = $alert
window.$confirm = $confirm
window.toast = showMessage
window.toast1 = showMessage1
window.$load = $loads
// window.$open = $open
