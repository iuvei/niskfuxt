<template>
  <div class="alert-tips" v-show="show" @click.self="close">
    <div class="alert-tips-content" v-show="show">
      <div class="wechatTips">
        <!-- <vue-qr class="download-Qrcode" :text='Download.app' height="140" :margin="5" width="140"></vue-qr> -->
        <div v-for="text in title" :key="text" class="title">{{text}}</div>
      </div>
      <i class="iconay ay-guanbi iclose" @click="close"></i>
      <div class="content-info">
        <!-- <div v-for="text in title" :key="text" class="title">{{text}}</div> -->
        <div class="conent" v-html="conent"></div>
      </div>
      <div class="btns">
        <button class="btn" @click="close">我知道了</button>
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
        show: false
      };
    },
    watch: {},
    props: {},
    activated() {

    },
    methods: {
      // generateQRCode(url,size){
      //   return   generateQRCode(url,size)
      // },
      close() {
        this.show = false;
        $sessionStorage.set("index_alert", true)
      }
    },
    computed: {},
    created() {
      if (!$sessionStorage.get('index_alert')) {
        checkConfigSystem(this.$data).then(res => {
          if (res.success) {
            var arydata = res.data.split('#');
            this.title = arydata[0].split('，');
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
<style lang="scss" scoped>
  .alert-tips {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .alert-tips-content {
      background: url("./images/bg3.png");
      width: 760px;
      height: 724px;
      display: inline-block;
      border-radius: 15px;
      background-size: 100% 100%;
      color: #000;
      padding: 151px 76px 157px 64px;
      position: relative;
      .iclose {
        position: absolute;
        right:20px;
        top: 115px;
        font-size:30px;
        color: #f1d299;
        cursor: pointer;
      }
      .content-info {
        .title {
          text-align: center;
          font-size: 19px;
          color: #f1d299;
          white-space: nowrap;
        }
        .conent{
          font-size: 16px;
          color:#f1d299;
          line-height: 24px;
          text-align: left;
          margin: 25px 0 0 0;
          overflow: hidden;
          height: 365px;
          &:hover{
            overflow-y: scroll;
          }
        }
      }
      .wechatTips{
        color: #f1d299;
        padding-top: 50px;
        .title {
          text-align: center;
          font-size: 30px;
          white-space: nowrap;
        }
      }
      .btns{
        width: 100%;
        margin-top: 30px;
        .btn{
          background: #efdaa7;
          background: -webkit-linear-gradient(to bottom,#efdaa7,#735526);
          background: -moz-linear-gradient(to bottom,#efdaa7,#735526);
          background: -o-linear-gradient(to bottom,#efdaa7,#735526);
          background: linear-gradient(to bottom,#efdaa7,#735526);
          color: #303030;
          text-align: center;
          font-size: 16px;
          padding: 8px 80px;
          border-radius: 50px;
          cursor: pointer;
        }
      }
    }
  }
</style>
