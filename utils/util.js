const util = {
  htmlEncode(html) {
    return document.createElement('a').appendChild(
      document.createTextNode(html)).parentNode.innerHTML
  },
  htmlDecode(html) {
    var a = document.createElement('a')
    a.innerHTML = html
    return a.textContent
  },
  htmlEscape(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  },
  htmlUnescape(str) {
    return str
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
  },
  // 获取url的search参数
  getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }
}

export default util
