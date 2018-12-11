export default function ({
  store,
  error,
  redirect,
  req,
  route
}) {
  // 统计分析
  try {
    console.log('route-middleware')
    if (window.ga) {
      window.ga('send', 'pageview', route.fullPath)
    }
    // 百度分析
    if (window._hmt) {
      window._hmt.push(['_trackPageview', route.fullPath])
    }
    // 站长分析
    if (window._czc) {
      window._czc.push(['_trackPageview', route.fullPath])
    }
  } catch (err) {
    console.error(err)
  }
}
