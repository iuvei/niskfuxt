const util = {
  // 获取设备类型
  getMobileKind() {
    if (navigator.userAgent.match(/Android/i)) {
      return 'Android'
    }
    if (navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i)) {
      return 'IOS'
    }
    if (navigator.userAgent.match(/Windows Phone/i)) {
      return 'Windows Phone'
    }
    return 'other'
  },
  /**
   *
   * @param {*} url
   * @param {*} callback
   * @param {*} outputFormat
   */
  ImgToBase64(url, outputFormat) {
      return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()
        // 图片必须设置，才会带cookie过去，否则验证码不起作用
        img.crossOrigin = 'use-credentials'
        img.onload = () => {
          canvas.height = img.height
          canvas.width = img.width
          ctx.drawImage(img, 0, 0)
          const dataURL = canvas.toDataURL(outputFormat || 'image/png')
          canvas = null
          // 返回字符串化的数据
          return resolve(dataURL)
        }
        img.onerror = (err) => {
          return reject(err)
        }
        // 设置链接
        img.src = url
      })
  }
}

export default util
