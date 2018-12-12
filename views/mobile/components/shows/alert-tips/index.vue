<template>
  <!-- <div class="alert-tips dialog_wrap " @click.self="close" v-show="show">
    <div class="dialog_main">
      <div class="dialog_content">
        <i class="iconfont icon-close1 close" @click.self="close"></i>
        <h3 v-html="title" class="dialog_title"></h3>
        <div v-html="conent" class="dialog-view">
        </div>
      </div>
    </div>
  </div> -->
  <div class="alert-tips dialog_wrap" v-show="show">
    <div class="alert_content">
      <div class="alert_header"></div>
      <div class="alert_title">
        <span class="dianzui"></span>
        <span class="dianzui"></span>
        <span>{{title}}</span>
        <span class="dianzui"></span>
        <span class="dianzui"></span>
      </div>
      <div class="alert_tipcontent" v-html="conent">
        <!-- <p v-for="item in items" :key="item">{{item}}</p> -->

      </div>
      <!-- <div class="alert_btngroup">
        <button class="alert_btn">查看详情</button>
      </div> -->
      <div class="alert_close">
        <img src="./close.png" alt="" @click.self="close">
      </div>
    </div>
  </div>
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
          "1.如何申请：注册后先绑定银行卡，下载手机APP，登陆自主优惠>自主体验金>成功后立即转入游戏平台.",
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
      // if(!$sessionStorage.get('mobile_index_tip')) {
        checkConfigSystem(this.$data).then(res => {
          if (res.success) {
            var arydata = res.data.split('#');
            this.title = arydata[0];
            this.conent = arydata[1];
            this.show = true;
          }
        }).catch(err => {
        })
      // }
    },
    components: {}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  
  .dialog_wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 999;
  .alert_content{
    width: r(551);
    min-height: r(789);
    background-color: $main-cl;
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    .alert_header{
      background: url(./pic_pop.png)  center  no-repeat;
      background-size: 100%;
      height: r(300);
      position: relative;
      top: r(-80);
      .alert_header_bgcl{
        background-color: #fff;
      }
    }
    .alert_title{
      width: 100%;
      padding: 0 r(30);
      position: relative;
      top: r(-75);
      .dianzui{
        width: r(20);
        height: r(20);
        border-left: 5px solid #ffb688;
        transform:  translateY(-20px)  translateX(5px)  rotate(27deg); 
        position: absolute;
        top: r(17)
      }
      .dianzui:nth-child(1){
          left: r(140);
      }
      .dianzui:nth-child(2){
          left: r(120);
      }
      .dianzui:nth-child(4){
          right: r(120);
      }
      .dianzui:nth-child(5){
          right: r(140);
      }
    }
    .alert_tipcontent{
      padding: r(10);
      
      height:r(360);
      overflow-y:scroll;
      line-height:1.5;
      text-align:left;
      p{
        margin-bottom: r(20);
        text-align: left;
        color: rgba(73,76,79,1);
        line-height: r(30)
      }
    }
    .alert_btngroup{
      margin: r(65) 0 0;
      position: absolute;
      bottom: r(30);
      width: 100%;
      .alert_btn{
        width: 70%;
        margin: 0 auto;
        color: #fff;
        background: #fe8c4e;
        border-radius: r(40);
        height: r(60);
        line-height: r(60);
        @include f(25px);
      }
    }
    .alert_close{
      position: absolute;
      // top: r(80);
      bottom: r(-100);
      width: 100%;
      img{
        width: 13%;
        cursor: pointer;
      }
    }
  }
}
  
</style>
