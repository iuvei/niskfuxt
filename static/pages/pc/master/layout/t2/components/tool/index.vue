<template>
  <transition name="fade">
    <div class="right-nav" ref="rightTool" :style="{top:topDistance+'px'}">
      <ul>
        <li>
          <a target="_blank" :href="SETTING.live800">
            <i class="iconay ay-ziyuan8"></i>
            <div>
              <p>在线客服</p>
              <p class="settingText">7x24小时</p>
            </div>
          </a>
        </li>
        <li>
          <i class="iconay ay-ziyuan7"></i>
          <div>
            <p>客服QQ</p>
            <p class="settingText">{{SETTING.qq}}</p>
          </div>
        </li>
        <li>
          <i class="iconay ay-ziyuan5"></i>
          <div>
            <p>客服热线</p>
          </div>
          <p>{{SETTING.Tel}}</p>
        </li>
        <li>
          <i class="iconay ay-ziyuan6"></i>
          <div>
            <p>客服邮箱</p>
          </div>
          <p class="mail">{{SETTING.email}}</p>
        </li>
        <li class="qrcode">
          <div class="qrcode_dev">
            <img :src="generateQRCode(Download.app,140)">
          </div>
          <p>扫描二维码</p>
          <p>下载澳盈APP</p>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
  import {
    SETTING,
    Download
  } from "@/assets/data"
  import check from "@/util/RegExp"
  import {
    scrolltool
  } from "@/vue-extend/scrolltool"
  import {
    backCall
  } from "@/controls/common/backCall"
  import {
    generateQRCode
  } from "@/api/show"
  export default {
    mixins: [scrolltool, backCall],
    name: "",
    data() {
      return {
        SETTING,
        Download,
        showMyself: true,
        topDistance: '',
        timer: null
      }
    },
    created() {
      this.generateQRCode("text")
    },
    methods: {
      backToTop() {
        this.scrollTo(0);
      },
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      },
      showBackCall() {
        // 弹窗回拨
        this.$prompt('请输入手机号码', '电话回拨', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: check.phone,
          inputErrorMessage: '手机号码格式不正确'
        }).then((confirm) => {
          // 提交弹窗
          this.backCall({
            phone: confirm.value
          }).then(res => {
            window.toast(res.message)
          }).catch(err => {
            window.toast(err.message)
          })
        }).catch((err) => {
          console.log(err)
        });
      },
      // 侧边栏滚动事件
      scrollTop() {
        // 获取滚动条滚动距离，Chrome为documentElement，其他浏览器为body
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 侧边栏距浏览器顶部的高度，因为样式中有transform: translateY(-50%)，因此不除以2即可居中，document.documentElement.clientHeight为浏览器高度，this.$refs.rightTool.offsetHeight为侧边栏本身高度
        let distance = (document.documentElement.clientHeight - this.$refs.rightTool.offsetHeight)/2;
        // 侧边栏移动距离为scrollTop + distance
        this.startMover(parseInt(distance + scrollTop))
      },
      startMover(val) {
        let _this = this
        // 初始化定时器
        clearInterval(_this.timer);
        _this.timer = setInterval(function () {
          // 侧边栏动画速度，逐渐减小
          let ispeed = (val - _this.$refs.rightTool.offsetTop) / 8
          // 去掉小数点
          ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed)
          // 判断侧边栏距浏览器顶部高度与移动距离是否相等，若不等则将值赋给topDistance,通过:style绑定到侧边栏的top，ispeed为二者之差
          if (_this.$refs.rightTool.offsetTop == val) {
            clearInterval(_this.timer);
          } else {
            _this.topDistance = _this.$refs.rightTool.offsetTop + ispeed
          }
        }, 30)
      }
    },
    mounted() {
      // 监听滚动事件
      window.addEventListener('scroll', this.scrollTop)
    },
    destroyed() {
      // 移除监听事件
      window.removeEventListener('scroll', this.scrollTop)
    },
  }

</script>
<style lang="scss" spcoed>
  .right-nav {
    background: #181415;
    position: absolute;
    z-index: 100;
    right: 10px;
    // top: 50%;
    // transform: translateY(-50%);
    width: 146px;
    height: 440px;
    padding: 10px 13px;
    border-radius: 20px;
    top: 50%;
    ul {
      li {
        border-bottom: 1px solid #fff;
        padding: 10px 0;

        &:nth-child(4),
        &:nth-child(5) {
          border: none;
        }

        .iconay {
          font-size: 36px;
          color: #c49c4e;
          vertical-align: middle;
        }

        .ziyuan6 {
          font-size: 30px;
        }

        div {
          display: inline-block;
          vertical-align: middle;
        }

        p {
          color: #fff;
          font-size: 14px;
          line-height: 19px;
        }

        .settingText {
          font-size: 13px;
        }

        .mail {
          font-size: 15px;
          text-align: center;
        }
      }

      .qrcode {
        text-align: center;

        .qrcode_dev {
          background: #fff;
          border: 1px solid red;
          width: 100px;
          height: 100px;

          img {
            margin-top: 6px;
          }
        }
      }
    }
  }

</style>
