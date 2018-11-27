export default {
  IS_RELEASE: false, // true线上，false测试
  BASE_URL: '/proxy', // 用于设定需要反向代理的链接，不需要做修改
  IMG_URL: 'https://easytuan.gitee.io/node-elm-api/public/', // 生产（使用码云Gitee Pages 服务）
  HEADERS: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  TIMEOUT: 12000, // api超时时间
};
