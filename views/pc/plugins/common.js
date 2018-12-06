
import { Message, confirm,Spin,conFirm } from 'iview'
import openWin from '@@/utils/openWindow'

window.toast = showToast
window.$load = SpinLoad
window.$open = openWin
console.log(Message)
function showToast(msg,type){
    console.log(msg,type)
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