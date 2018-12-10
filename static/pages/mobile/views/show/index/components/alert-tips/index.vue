<template>
  <transition enter-active-class="animated pulse" leave-active-class="animated zoomOut">
  <div class="alert-tips dialog_wrap" v-show="show" @click.self="close">
    <div class="alert_content" v-show="show" @click.self="close">
      <div class="alert_title">
        <span>{{title}}</span>
      </div>
      <div class="alert_tipcontent" v-html="conent"></div>
      <div class="btns">
        <button class="btn" @click.self="close">我知道了</button>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
  import {checkConfigSystem} from "@/api/show"
  import {$localStorage,$sessionStorage} from "@/util/storage"

  export default {
    data() {
      return {
        myData: {
          itemNo: "type002", //true string
          typeNo: "001",
        },
        title: "",
        conent: "",
        show: false,
        items:[
          "1.如何申请：注册后先绑定银行卡，下载手机APP，登录自主优惠>自主体验金>成功后立即转入游戏平台.",
          "2.注意事项：体验金优惠限定一账号一次，请先确认转入游戏平台，如有转入错误情形，恕不补偿.",
          "3.体验金无需流水限制，提款需电话核实，若联系不上或核实不上，将扣除盈利及红利额度，根据转入游戏平台不同，最低提款金额也会有所不同.",
          "本活动不与任何存送优惠共存."
        ]
      };
    },
    watch: {},
    props: {},
    activated() {

    },
    methods: {
      close() {
        this.show = false;
        $sessionStorage.set("mobile_index_tip", true)
      }
    },
    computed: {},
    created() {
      if(!$sessionStorage.get('mobile_index_tip')) {
        checkConfigSystem(this.$data).then(res => {
          console.log(res)
          if (res.success) {
            var arydata = res.data.split('#');
            this.title = arydata[0];
            this.conent = arydata[1];
            this.show = true;
          }
        }).catch(err => {
        })
      }
    },
    components: {}
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  
  .dialog_wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 100;
  .alert_content{
    width: 100%;
    min-height: r(900);
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    background: url(./images/bg2.png) no-repeat center center/cover;
    padding-top: r(280);
    .alert_title{
      @include f(32px);
      padding-left: r(40);
      padding-bottom: r(40);
      color: #f1d299;
      width: 75%;
      margin: 0 auto;
    }
    .alert_tipcontent{
      padding-left: r(40);
      padding-right: r(20);
      max-height:r(330);
      overflow-y:scroll;
      line-height:1.5;
      text-align:left;
      color: #f1d299;
      width: 75%;
      margin: 0 auto;
      p{
        margin-bottom: r(20);
        text-align: left;
        color: rgba(73,76,79,1);
        line-height: r(30)
      }
    }
    .alert_line {
      position: absolute;
      bottom: r(-40);
      left: 50%;
      transform: translateX(-50%);
      background-color: #ffffff;
      width: r(2);
      height: r(50);
    }
    .alert_close{
      position: absolute;
      bottom: r(-100);
      width: 100%;
      img{
        width: 13%;
        cursor: pointer;
      }
    }
    .btns{
      width: 100%;
      margin-top: r(30);
      .btn{
        background: #efdaa7;
        background: -webkit-linear-gradient(bottom,#efdaa7,#a48048);
        background: -moz-linear-gradient(bottom,#efdaa7,#a48048);
        background: -o-linear-gradient(bottom,#efdaa7,#a48048);
        background: linear-gradient(bottom,#efdaa7,#a48048);
        color: #303030;
        text-align: center;
        @include f(24px);
        padding: r(10) r(100);
        border-radius: 50px;
      }
    }
  }
}
  
</style>
