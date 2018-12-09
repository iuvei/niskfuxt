
export default function ({ store, error, redirect, req }) {
  // 没有登陆状态
  console.log("need login")
  // window.alert('lksdfjtewea middleware')
  if (!store.getters.isLogin) {
    // redirect('/')
  }
}
