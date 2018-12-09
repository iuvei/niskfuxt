
import { Message,Spin,conFirm } from 'iview'
import openWin from '@@/utils/openWindow'

window.toast = showToast
window.$load = SpinLoad
window.$open = openWin
window.$conFirm = conFirm
function showToast(msg,type){
    Message.warning(msg)
    // ({
    //     message:msg,
    //     showClose:true,
    //     type:type?type:"warning"
    // })
}
function SpinLoad(){
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