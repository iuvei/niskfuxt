
export default function ({ store, error, redirect, req }) {
  // 没有登陆状态
  if (!store.state.isAgent) {
    console.log("no-isAgent")
    redirect('/')
  }
  console.log(isAgent)
}
