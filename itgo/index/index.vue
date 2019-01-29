
  <template>
    <div class="page-1547876827944">
      <div :style='{"margin":0,"background":"blue"}' class="block">
        <div :style='{"margin":"10px","background":"red"}' class="row">
          <div class="col24">
            <sync-component url="/static/components/componentA.js"></sync-component>
            <sync-component url="/static/components/componentB.js"></sync-component>
          </div>
          <div class="col24">
            <sync-component url="/static/components/componentFoot.js"></sync-component>
            <sync-component url="/static/components/componentNav.js"></sync-component>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    head: {
      title: 'title1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'description1' }
      ],
      link: [{
            rel: 'stylesheet',
            href: '/static/style1.css'
          },{
            rel: 'stylesheet',
            href: '/static/style2.css'
          },
      ],
      script: [{ src: '/static/js1.js',type: 'text/javascript',body: true },{ src: '/static/js2.js',type: 'text/javascript',body: true },
      {
        innerHTML: "document.querySelector('head').innerHTML+='<style>body{background:blue!important;}</style><script>alert('lsakjfls')</script>'", 
        type: 'text/javascript', 
        body: true 
      }],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
  </script>
  <style lang="scss" scoped>
    .page-1547876827944 {
      body{background:blue;}
    }
  </style>