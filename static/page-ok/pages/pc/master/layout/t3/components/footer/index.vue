<template>
  <!--底部内容-->
  <div class="footer">
    <img src="./images/bg.png" alt="">
    <div class="footer-website">
      <div class="content-warp">
        <div class="row tutorial-links">
          <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}" class="bdnone">
            用户协议 
          </router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">
            关于我们 
          </router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">
            博彩责任 
          </router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">
            免责条款 
          </router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab5'}}">
            联系我们
          </router-link>
          <router-link :to="{name:'agentarea'}">
            代理加盟
          </router-link>
        </div>
        <div class="tips">
          <p>Copyright © 2006-2018 {{WEBCONFIG.title}}官方网站.All rights reserved </p>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
  import {
    WEBCONFIG,SETTING
  } from "@/assets/data"
  export default {
    data() {
      return {
        WEBCONFIG,
        SETTING
      };
    },
    props: {},
    methods: {},
    computed: {},
    created() {},
    components: {}
  };

</script>
<style lang="scss" scoped>
 .footer {
    background: #0d1012;
    img{
      width: 100%;
    }
    .tips{
      line-height: 1.7;
      margin: -20px auto 20px;
      color: #5f5f5f;
    }
    .footer-website {
      text-align: center;
      // height: 79px;
      line-height: 79px;
      color: #fff;
      border-bottom: 2px solid #2c2c30;
    }
    .footer-website a {
      color: #bfbfbf;
      font-size: 14px;
      padding: 0 40px;
      border-left: #5e5e5e solid 1px;
    }
    .footer-website a.bdnone {
      border: none
    }
    .footer-website img {
      margin-top: -5px;
      width: 94px;
    }
    .footer-btm {
      padding-top: 10px;
    }
    .friend-link {
      text-align: center;
      line-height: 87px;
    }
    .friend-link a {
      margin: 0 5px;
    }
    .footer-tips {
      color: #bfbfbf;
      line-height: 31px;
      width: 1200px;
      margin: 0 auto;
      padding: 20px 0 50px 0px;
    }
    .footer-tips p {
      display: inline-block;
    }
    .footer-contact{
      height: 66px;
      line-height: 66px;
      background: #19191c;
      a{
        display: inline-block;
        text-align: center;
        padding:0 10px 0 40px;
        margin-left: 30px;
        color: #868c97;
        position:relative; 
        &:first-child{
          margin-left: 0;
        }

        strong{
          color: #968e64;
        }
      }
    }
  }
  
  .footerimg {
    img {
      margin-bottom: 10px;
    }
  }

</style>
