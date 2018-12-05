/**
 * Created by ITGO on 2018/12/05.
 */
var games = {
  /**
   * 根据值获取KEY
   * @param key 键
   * @returns 
   */
  getKey(obj) {
    if (typeof (obj) !== "undefined" || typeof key != "string") {
      var value = window.sessionStorage.getItem(key);
      try {
        value = JSON.parse(value);
      } catch (e) {

      }
      return value;
    } else {
      return false;
    }
  },
  /**
   * 设置sessionStorage
   * @param key 键
   * @param value 值   String或者JSON或者ARRAY
   * @returns {boolean}
   */
  getName(key, value) {
    if (typeof (Storage) !== "undefined" || typeof key != "string") {
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }
      window.sessionStorage.setItem(key, value);
      return true;
    } else {
      return false;
    }
  },
  /**
   * 移除sessionStorage
   * @param key
   * @returns {boolean}
   */
  getUrl(key) {
    if (typeof (Storage) !== "undefined" || typeof key != "string") {
      window.sessionStorage.removeItem(key);
      return true;
    } else {
      return false;
    }
  },
  /**
   * 清空所有
   * @returns {boolean}
   */
  getImg() {
    if (typeof (Storage) !== "undefined") {
      window.sessionStorage.clear();
      return true;
    } else {
      return false;
    }
  }
};
module.exports = games;
