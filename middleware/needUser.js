
export default function ({ store, error, redirect, req }) {
  // 没有登陆状态
  if (!store.state.isUser) {
    console.log("no-isUser")
    redirect('/sign-in')
  }
}
