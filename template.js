/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');
const path = require("path");  
const dirName = process.argv[2];

const pages= require("./page.json")

//递归创建目录 同步方法  
function mkdirsSync(dirname) {
  //console.log(dirname);  
  if (fs.existsSync(dirname)) {
      return true;  
  } else {  
      if (mkdirsSync(path.dirname(dirname))) {  
          fs.mkdirSync(dirname);  
          return true;  
      }  
  }  
}  

  pages.forEach(page=>{
  const _filePath="./itgo/"+page.path
  // 先创建目录
  mkdirsSync(_filePath)

  const _id=(new Date()).getTime()
  let htmlTemp=`
  <template>
    <div class="page-${_id}">`
    page.datas.forEach(block=>{
      htmlTemp+=`
      <div :style='${JSON.stringify(block.style)}' class="block">`
      block.rows.forEach(row=>{
        htmlTemp+=`
        <div :style='${JSON.stringify(row.style)}' class="row">`
        row.cols.forEach(col=>{
          htmlTemp+=`
          <div class="col${col.width}">`
          col.components.forEach(component=>{
            htmlTemp+=`
            <sync-component url="${component.path}"></sync-component>`
          })
          htmlTemp+=`
          </div>`
        })
        htmlTemp+=`
        </div>`
      })
      htmlTemp+=`
      </div>`
    })
    htmlTemp+=`
    </div>
  </template>`
  htmlTemp+=`
  <script>
  export default {
    head: {
      title: '${page.title}',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '${page.description}' }
      ],
      link: [`
      page.styleList.forEach(style=>{
          htmlTemp+=`{
            rel: 'stylesheet',
            href: '${style}'
          },`
        })
      htmlTemp+=`
      ],
      script: [`
      page.scriptList.forEach(script=>{
        htmlTemp+=`{ src: '${script}',type: 'text/javascript',body: true },`
      })
      htmlTemp+=`
      {
        innerHTML: "document.querySelector('head').innerHTML+='${page.scriptText}'", 
        type: 'text/javascript', 
        body: true 
      }],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
  </script>
  <style lang="scss" scoped>
    .page-${_id} {
      ${page.styleText}
    }
  </style>`
  console.log(htmlTemp)
  fs.writeFileSync(_filePath+"/index.vue",htmlTemp)
  })

return;





if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run create test');
  process.exit(0);
}



// 页面模版
const indexTep = `<template>
  <div class="${dirName}-page">

  </div>
</template>

<script>
  export default {
    head: {
      title: '${title}'，
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '${description}' }
        { hid: 'description', name: 'description', content: '${description}' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '${style}'
        }
      ],
      script: [
        { innerHTML: '${script}', type: 'text/javascript', body: true }
      ]
    },
    
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/mixin';
  .${dirName}-page {
    ${pageStyle}
  }
</style>
`;


process.chdir(`./pages`); // cd $1

fs.writeFileSync(`${dirName}.vue`, indexTep);

console.log(`模版${dirName}已创建`);

process.exit(0);
