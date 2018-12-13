<template>
      <div class="self-content fl">
        <div class="self-tit clearfix">
          <p class="fl">
            <router-link :to="{name:'home'}"> 首页</router-link> &gt;
            <router-link :to="{name:'customServiceIndex'}">客服中心</router-link> &gt;
            <span class="title light">{{title}}</span>
          </p>
          <a class="fr" :href="$SITE.contact.live800" target="_blank"><img class="t-icon" src="./images/service.jpg" alt=""></a>
        </div>
        <h3 class="title t-tit">{{title}}</h3>
        <div class="tab-content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
</template>
<script>

  export default {
    name: "",
    data() {
      return {
        title:'测试'
      }
    },
  }

</script>
<style lang="scss" scoped>
.self-content {
  background: #fff;
  margin-left: 20px;
  width: 960px;
}
.clearfix{
    zoom: 1;
    &::before,&::after{
      content: '';
      display: table;
    }
    &::after{
      clear: both;
      height: 0;
      visibility: hidden;
      overflow: hidden;
    }
  }
.self-tit {
  line-height: 60px;
  padding: 0 20px;
  background: #f4f4f4;
  font-size: 16px;
}
.light {
  opacity: .7;
}
.t-icon {
  margin-top: 15px;
}

.t-tit {
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  margin: 30px 0 0;
  padding-bottom: 20px;
}
.tab-content{
  padding: 7px 35px 30px;
}
</style>
