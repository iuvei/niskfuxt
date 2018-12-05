$(function () {
  // 平台类型，必填
  var obj = {}
  obj.category = getQueryString("category") ? getQueryString("category").toUpperCase() : '';
  // 当前网站的,必填,获取方式，window.location.origin eg:https://www.baidu.com
  obj.origin = getQueryString("origin") ? getQueryString("origin") : '';
  // 终端类型，必填
  obj.deviceType = getQueryString("deviceType") ? getQueryString("deviceType").toUpperCase() : 'H5';
  // 游戏id，必填
  obj.gameId = getQueryString("gameId") ? getQueryString("gameId") : 0;
  // 游戏code，非必填
  obj.gameCode = getQueryString("gameCode") == '1' ? '1' : '0';
  // 是否试玩  1-0
  obj.isfun = getQueryString("isfun") ? getQueryString("isfun") : '';
  // moduleid,非必填，MGS专有
  obj.moduleId = getQueryString("moduleId") ? getQueryString("moduleId") : '';
  // 当前游戏大厅地址，可以从APP中返回
  obj.lobbyUrl = getQueryString("lobbyUrl") ? getQueryString("lobbyUrl") : ''
  // 下方选择icon的url地址,
  obj.iconUrl = getQueryString('iconUrl')
  // 设置返回按钮
  $("#link-btn").attr("href", obj.lobbyUrl)
  // 设置iconurl
  if (obj.iconUrl) {
    $("#iconUrl").attr("src", obj.iconUrl)
  } else if (origin) {
    $("#iconUrl").attr("src", obj.origin + '/favicon.ico')
  }
  // 进入游戏
  getUrl(obj)
})

// 获取游戏链接
function getUrl(obj) {
  $.get('https://www.staticsources.com/service/data/gameurl.json?v=' + new Date().getTime(), function (response) {
    if (response) {
      var urlTemp = response[obj.category][obj.deviceType]
      urlTemp = urlTemp.replace(/\{\{origin\}\}/g, obj.origin)
        .replace(/\{\{gameId\}\}/g, obj.gameId)
        .replace(/\{\{gameCode\}\}/g, obj.gameCode)
        .replace(/\{\{deviceType\}\}/g, obj.deviceType)
        .replace(/\{\{isfun\}\}/g, obj.isfun)
        .replace(/\{\{moduleId\}\}/g, obj.moduleId)
        .replace(/\{\{lobbyUrl\}\}/g, obj.lobbyUrl)
      console.log(urlTemp)
      window.location.href = urlTemp
    } else {
      alert('获取链接失败，将返回游戏大厅!')
      window.location.href = ob.lobbyUrl
    }
  })

}
// 获取url带过来的参数
function getQueryString(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var results = regex.exec(url);
  if (!results) {
    return null
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
