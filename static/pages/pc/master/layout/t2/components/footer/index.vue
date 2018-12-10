<template>
  <!--底部内容-->
  <footer>
    <div class="footer-bar">
      <div class="container">
        <div class="footer-top">
          <div class="col-3-1">
            <h5>赞助</h5>
            <a href="javascript:;" class="footer-icon ac"></a>
            <a href="javascript:;" class="footer-icon jj"></a>
          </div>
          <div class="col-3-2">
            <h5>存款</h5>
            <a href="javascript:;" class="footer-icon vs"></a>
            <a href="javascript:;" class="footer-icon mc"></a>
            <a href="javascript:;" class="footer-icon up"></a>
            <a href="javascript:;" class="footer-icon wc"></a>
            <a href="javascript:;" class="footer-icon ap"></a>
            <a href="javascript:;" class="footer-icon bit"></a>
          </div>
          <div class="col-12-8">
            <h5>合作伙伴</h5>
            <a href="javascript:;" class="footer-icon ow"></a>
            <a href="javascript:;" class="footer-icon ag"></a>
            <a href="javascript:;" class="footer-icon pt"></a>
            <a href="javascript:;" class="footer-icon et"></a>
            <a href="javascript:;" class="footer-icon hkc"></a>
            <a href="javascript:;" class="footer-icon ssc"></a>
          </div>
          <div class="col-12-2">
            <h5>博彩责任</h5>
            <a href="javascript:;" class="footer-icon gc"></a>
            <a href="javascript:;" class="footer-icon age"></a>
            <a href="javascript:;" class="footer-icon sp"></a>
          </div>
          <div class="col-12-2">
            <h5>信息安全</h5>
            <a href="javascript:;" class="footer-icon io"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="col-3-2">
            <div class="col-5-1">
              <h5>产品下载</h5>
              <ul>
                <li>
                  <router-link class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" :to="{name:'downloadIndex'}">PT小游戏PC端</router-link>
                </li>
                <li>
                  <router-link class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" :to="{name:'downloadIndex'}">DT手机客户端</router-link>
                </li>
                <li>
                  <router-link class="_vr_mt_check _vr_mt_gray _vr_mt_slogan" :to="{name:'downloadIndex'}">PT手机客户端</router-link>
                </li>
              </ul>
            </div>
            <div class="col-5-1">
              <h5>关于我们</h5>
              <ul>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">关于{{WEBCONFIG.title}}</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">品牌介绍</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">监管牌照</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">理性博彩</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">免责声明</router-link>
                </li>
              </ul>
            </div>
            <div class="col-5-1">
              <h5>使用帮助</h5>
              <ul>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">存款流程</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">提款流程</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">账户问题</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">如何注册</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">忘记密码</router-link>
                </li>
              </ul>
            </div>
            <div class="col-5-1">
              <h5>游戏问题</h5>
              <ul>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">查看游戏记录</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">游戏错误代码</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">游戏卡顿问题</router-link>
                </li>
                <li>
                  <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">澳盈游戏平台</router-link>
                </li>
              </ul>
            </div>
            <div class="col-5-1">
              <h5>关注我们</h5>
              <ul>
                <li class="col-2-1">
                  <a href="javascrit:;" class="wechatShow">
                    <span class="icon wechat"></span>
                    <p>微信</p>
                    <img src="./images/wechatqr.jpg" alt="">
                  </a>
                </li>
                <li class="col-2-1">
                  <a href="https://weibo.com/ow8asia" target="_blank">
                    <span class="icon weibo"></span>
                    <p>微博</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3-1 footer-agent pull-right">
            <h5>加盟合作</h5>
            <ul>
              <li>
                <router-link :to="{name:'cooperationIndex'}"><span class="icon-shake"></span>代理合作共创辉煌</router-link>
              </li>
              <li>
                <a href="javascript:;">
                  <span class="icon-call"></span>
                  <div class="footer-contact">
                    <h3>{{SETTING.Tel}}</h3>
                    <p>国内24小时服务电话</p>
                  </div>
                </a>
              </li>
              <li>
                <span>当前在线人数</span>
                <div class="visitor-num1">
                  <span v-for="(num,i) in items" :key="i">{{num}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2018 澳盈OW8.COM 版权所有. All rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import {
    WEBCONFIG,SETTING
  } from "@/assets/data"
  export default {
    data() {
      return {
        WEBCONFIG,
        SETTING,
        items: ['1','2','3','4','5','6'],
        timer:null
      };
    },
    props: {},
    methods: {
      showerr(){
        window.toast('敬请期待')
      }
    },
    computed: {},
    created() {

      const $this=this
      this.timer=setInterval(()=>{
      var num1 = Math.floor(Math.random()*10)*1000
      var num2 = Math.floor(Math.random()*10)*100
      var num3 = Math.floor(Math.random()*10)*10
      var num4 = Math.floor(Math.random()*10)*1
        $this.items=(150000+num1+num2+num3+num4).toString().split('');
      },3000)
    },
    beforeDestroy(){
      clearInterval(this.timer)
    },
    components: {}
  };

</script>
<style lang="scss" scoped>
/* footer */
.col-1-1, .col-2-1, .col-2-2, .col-3-1, .col-3-2, .col-3-3, .col-4-1, .col-4-2, .col-4-3, .col-4-4, .col-5-1, .col-5-2, .col-5-3, .col-5-4, .col-5-5, .col-7-1, .col-7-2, .col-7-3, .col-7-4, .col-7-5, .col-7-6, .col-7-7, .col-8-1, .col-8-2, .col-8-3, .col-8-4, .col-8-5, .col-8-6, .col-8-7, .col-8-8, .col-12-1, .col-6-1, .col-12-2, .col-12-3, .col-12-4, .col-12-5, .col-12-6, .col-12-7, .col-12-8, .col-12-9, .col-12-10, .col-12-11, .col-12-12 {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    float: left;
}
.col-3-1, .col-12-4 {
    width: 33.33333%;
}
.col-3-2, .col-12-8 {
    width: 66.66667%;
}
.col-12-2, .col-6-1 {
    width: 16.66667%;
}
.col-5-1 {
    width: 20%;
}
.col-5-2 {
    width: 40%;
}
.col-2-1, .col-4-2, .col-8-4, .col-12-6 {
    width: 50%;
}
.wechatShow{
  img{
    opacity: 0;
    transition: all .5s;
    width: 0;
    position: absolute;
    top: -40px;
    right: 80px;
  }
  &:hover{
    img{
      opacity: 1;
      width: 250px;
    }
  }
}
footer {
  overflow: hidden;
  background-color: #232526;
  text-align: center;
  .container {
    width: 1200px;
    padding: 0;
    position: relative;
    overflow: visible;
    margin-right: auto;
margin-left: auto;
color: #fff;
}
}

.footer-top {
  text-align: left;
  border-bottom: 1px dashed #545556;
  padding-top: 40px;
  height: 318px;
  margin-bottom:20px;
  > div {
    padding: 0;
  }
  a {
    margin: 15px 16px 10px 0;
    height: 50px;
    width: 150px;
    vertical-align: middle;
    display: inline-block;
    transition: all .2s linear;
    -webkit-filter: grayscale(1) opacity(0.5);
    -moz-filter: grayscale(1) opacity(0.5);
    -ms-filter: grayscale(1) opacity(0.5);
    -o-filter: grayscale(1) opacity(0.5);
    filter: grayscale(1) opacity(0.5);
    background: url(./images/footer-icon.png);
    &.ac {
      background-position: 0 0;
    }
    &.jj {
      background-position: -150px 0;
    }
    &.vs {
      background-position: -300px 0;
      width: 80px;
    }
    &.mc {
      background-position: -450px 0;
      width: 70px;
    }
    &.up {
      background-position: -600px 0;
      width: 130px;
    }
    &.wc {
      background-position: -750px 0;
      width: 130px;
    }
    &.ap {
      background-position: -900px 0;
      width: 90px;
    }
    &.bit {
      background-position: -1050px 0;
      width: 130px;
    }
    &.ow {
      background-position: -1200px 0;
      width: 120px;
    }
    &.ag {
      background-position: -1350px 0;
      width: 92px;
    }
    &.pt {
      background-position: -1500px 0;
    }
    &.et {
      background-position: -1650px 0;
    }
    &.hkc {
      background-position: -1800px 0;
    }
    &.ssc {
      background-position: -1950px 0;
      width: 74px;
    }
    &.gc {
      background-position: -2100px 0;
      width: 40px;
    }
    &.age {
      background-position: -2250px 0;
      width: 42px;
    }
    &.sp {
      background-position: -2400px 0;
      width: 40px;
    }
    &.io {
      background-position: -2550px 0;
    }
    &:hover {
      -webkit-filter: grayscale(0);
      -moz-filter: grayscale(0);
      -ms-filter: grayscale(0);
      -o-filter: grayscale(0);
      filter: grayscale(0);
    }
  }
}

.footer-bottom {
  text-align: left;
  h5 {
    padding-bottom: 10px;
    color: #fff;
    font-weight: 400;
  }
  ul li {
    color: #fff;
    padding-bottom: 11px;
    line-height: 19px;
    padding-left: 0;
  }
  li {
    a {
      color: #717171;
      display: inline;
      transition: color .2s linear;
      &:hover {
        color: #fff;
      }
      span {
        &.icon {
          width: 27px;
          height: 27px;
          display: block;
          background: url(./images/footer-icon-02.png);
        }
        &.wechat {
          background-position: 0 0;
        }
        &.weibo {
          background-position: -30px 0;
        }
        &.youku {
          background-position: -60px 0;
        }
      }
    }
    &:hover a span {
      &.wechat {
        background-position: 0 -30px;
      }
      &.weibo {
        background-position: -30px -30px;
      }
      &.youku {
        background-position: -60px -30px;
      }
    }
  }
}

.footer-agent {
  padding-left: 120px;
  ul li {
    padding: 10px 0px;
    background-color: #545556;
    border-radius: 5px;
    border: 2px solid #545556;
    box-sizing: border-box;
    width: 304px;
    height: 67px;
    margin-bottom: 11px;
    text-align: center;
    line-height: 47px;
    &:nth-child(2) {
      background-color: transparent;
    }
    &:last-child {
      padding: 0;
      background: transparent;
      border: none;
      text-align: left;
    }
    &:first-child:hover {
      background-color: #98171a;
      border-color: #98171a;
    }
    a {
      font-weight: 400;
      letter-spacing: 1px;
      color: #fff;
      display:block;
      height:100%;
    }
  }
}

.icon-call, .icon-shake {
  width: 34px;
  height: 34px;
  background-image: url(./images/icon-shake.png);
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  animation: .8s ease-in-out infinite alternate move;
}

.icon-call {
  background-image: url(./images/icon-call.png);
  animation: none;
  vertical-align: 0px;
}

.footer-contact {
  display: inline-block;
  color: #666;
  h3 {
    font-weight: 400;
    letter-spacing: 3px;
    margin: 0;
    font-size: 20px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  p {
    color: #666;
    line-height: 24px;
  }
}

.footer-agent ul li > span {
  vertical-align: 11px;
}

.visitor-num {
  width: 140px;
  height: 28px;
  background: url(./images/visitor-icon.png) center bottom;
  display: inline-block;
  span {
    text-align: center;
    color: #232526;
    font-size: 20px;
    line-height: 26px;
    vertical-align: 8px;
    letter-spacing: 13px;
    margin-left: 4px;
  }
}
.visitor-num1{
  width: 140px;
  height: 28px;
  display: inline-block;
  span{
    background: #fff;
    color: #232526;
    font-size: 20px;
    line-height: 26px;
    vertical-align: 8px;
    margin-left: 4px;
    text-align: center;
    padding:0 6px;
  }
}
footer .copyright {
  width: 100%;
  line-height: 24px;
  color: #8e8e8e;
  border-top: 1px dashed #545556;
  display: block;
  clear: both;
  padding: 20px 0;
}
@keyframes move{
	0%{-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-webkit-transform:translateY(-2px);transform:translateY(-2px)}
	50%{-moz-transform:translateY(2px);-ms-transform:translateY(2px);-webkit-transform:translateY(2px);transform:translateY(2px)}
	100%,70%{-moz-transform:translateY(0);-ms-transform:translateY(0);-webkit-transform:translateY(0);transform:translateY(0)}
	0{left:-200px}
	100%{left:100%}
}
</style>
