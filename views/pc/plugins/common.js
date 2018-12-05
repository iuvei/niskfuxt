
import { Message, confirm,Spin,conFirm } from 'iview'
import openWin from '@@/utils/openWindow'

window.toast = showToast
window.$load = Spin
window.$open = openWin

function showToast(msg,type){
    Message({
        message:msg,
        showClose:true,
        type:type?type:"warning"
    })
}
function Spin(){
    Spin.show({
        render: (h) => {
            return h('div', [
                h('Icon', {
                    props: {
                        type: 'ios-loading',
                        size: 18
                    }
                }),
                h('div', 'Loading')
            ])
        }
    })
}