<template>
  <div class="alert-tips" v-show="show" @click.self="close">
    <div class="alert-tips-content">
      <i class="iconay ay-guanbi iclose" @click="close"></i>
      <div class="content-info">
        <div class="conent" v-html="conent"></div>
      </div>
      <div class="wechatTips">
        <div v-for="text in title" :key="text" class="title">{{text}}</div>
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
    z-index: 10000;
    text-align: center;
    .alert-tips-content {
      background: url("./images/bg.png");
      width: 800px;
      height: 500px;
      display: inline-block;
      border-radius: 15px;
      background-size: 100% 100%;
      color: #000;
      padding: 15px 76px 157px 64px;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      .iclose {
        position: absolute;
        right:36px;
        top: 18px;
        font-size:30px;
        color: #fff;
        cursor: pointer;
        transform: rotate(0deg);
        transition: all 0.5s;
        &:hover{
          transform: rotate(180deg);
          transition: all 0.5s;
        }
      }
      .content-info {
        .title {
          text-align: center;
          font-size: 19px;
          color: #ffe72b;
          white-space: nowrap;
        }
        .conent{
          font-size: 16px;
          color:#ed7e12;
          line-height: 24px;
          text-align: left;
          margin: 42px 0 0 0;
          overflow: hidden;
          height: 258px;
          &:hover{
            overflow-y: scroll;
          }
        }
      }
      .wechatTips{
        position: absolute;
        color: #ffdd8c;
        bottom: 80px;    
        right: 52%;
        width: 44%;
        .title {
          text-align: center;
          font-size: 19px;
          white-space: nowrap;
        }
      }
    }
  }
</style>
