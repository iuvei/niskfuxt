const express = require('express')
const consola = require('consola')
const proxy = require('express-http-proxy')
const {
  Nuxt,
  Builder
} = require('nuxt')
const ifaces = require('os').networkInterfaces();
const net = require('net')
const app = new express()
const config = require('../nuxt.config.js')

let port = process.env.PORT || 8527
portIsOccupied(port) // 判断端口
// 获取局域网ip
function getIp() {
  return [].concat.apply([], Object.values(ifaces))
    .filter(details => details.family === 'IPv4' && !details.internal)
    .shift().address;
}
// 检测端口是否被占用
function portIsOccupied(port) {
  // 创建服务并监听该端口
  var server = new net.createServer().listen(port)
  server.on('listening', function () {
    // 执行这块代码说明端口未被占用，可以正常使用
    // console.log('lisitening')
    server.close() // 关闭服务
    port = port

    start(port)
  })
  server.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      // 端口已经被使用
      console.log(`端口【${port}】 被占用, 自动更换为【${port+1}】.`)
      portIsOccupied(port + 1)
    }
  })
}


function start(port) {
  app.set('port', port)
  // Set Nuxt.js options
  config.dev = !(process.env.NODE_ENV === 'production')
  app.use('/proxy', proxy(config.proxy.url));
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port)
  consola.ready({
    message: `项目启动成功，\n接口反向代理地址: ${config.proxy.url}\n本机访问地址: http://localhost:${port}\n局域网访问地址: http://${getIp()}:${port}`,
    badge: true
  })
}
