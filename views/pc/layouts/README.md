---
layout: "API: layout 属性"
description: 为页面指定使用哪一个布局文件
---

# layout 属性

- 类型： `String`
  - 数组元素类型： `String`

为页面指定使用哪一个布局文件

例子：

`pages/secret.vue` 
```html
<template>
  <h1>Secret page</h1>
</template>

<script>
export default {
  layout: 'blog',
  // 或
  layout (context) {
    return 'blog'
  }
}
</script>

想了解更多关于使用中间件的信息，请移步 [中间件指引](https://zh.nuxtjs.org/api/pages-layout/)。