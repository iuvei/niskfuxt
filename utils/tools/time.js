let time = {
  getMillisecond:function (num, type) {
    switch (type) {
      case 'day':
        return num * 24 * 60 * 60 * 1000
        break
      case 'hour':
        return num * 60 * 60 * 1000
        break
      case 'minute':
        return num * 60 * 1000
        break
      case 'second':
        return num * 1000
        break
    }
  },
  formatMillisecond:function (num, to) {
    switch (to) {
      case 'day':
        return num / 24 / 60 / 60 / 1000
        break
      case 'hour':
        return num / 60 / 60 / 1000
        break
      case 'minute':
        return num / 60 / 1000
        break
      case 'second':
        return num / 1000
        break
    }
  }
}

export default time
