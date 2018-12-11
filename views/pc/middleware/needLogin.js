
export default function ({ store, error, redirect, req }) {
  // 没有登陆状态
  // window.alert('lksdfjtewea middleware')
  if (!store.getters.isLogin) {
    console.log("need login")
    // redirect('/')
  }
}
