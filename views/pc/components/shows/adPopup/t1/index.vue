<template>
  <transition enter-active-class="animated pulse" leave-active-class="animated zoomOut" >
    <div class="alert-tips" v-if="show" @click.self="show=false">
      <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutDown">
        <div class="alert-tips-content" @click.self="show=false" v-show="show">
          <span class="iclose" @click="close"><img src="./images/close_pc.png"></span>
          <div class="content-info" @click.self="show=false">
            <div class="url" @click.self="show=false">{{WEBCONFIG.location}}</div>
            <div class="title" @click.self="show=false">{{title}}</div>
            <div class="conent" v-html="conent" @click.self="show=false"></div>
          </div>
        </div>
      </transition>
    </div>
  </transition>

</template>
<script>
  import {
    checkConfigSystem,
    generateQRCode
  } from "@/api/show"
  import {
    $localStorage,
    $sessionStorage
  } from "@/util/storage"
  import {
    SETTING,
    WEBCONFIG
  } from "@/assets/data"
  export default {
    data() {
      return {
        SETTING,
        WEBCONFIG,
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
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      },
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
          this.title = arydata[0];
          this.conent = arydata[1];
          this.show = true;
        }
      }).catch(err => {})
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
    z-index: 99;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right:8px;
    &:hover {
      padding-right:0;
      overflow-y: scroll;
    }

    .alert-tips-content {
      width: 730px;
      height: 720px;
      display: inline-block;
      background: url("./images/bj_pc.png") no-repeat top center;
      ;
      background-size: contain;
      color: #000;
      padding:95px 1px;
      position: relative;

      .iclose {
        position: absolute;
        right: -15px;
        top: -8px;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }
      }

      .content-info {
        .url{
          display:inline-block;
          color:#fff;
          font-size:20px;
          background:#1b1b1c;
          padding:4px 10px;
          border-radius:20em;
        }
        .title {
          line-height:48px;
          margin-top:14px;
          text-align: center;
          font-size: 28px;
          color: #da9800;
          white-space: nowrap;
          padding: 0 85px 0 105px;
          overflow:hidden;
        }

        .conent {
          font-size: 20px;
          line-height: 43px;
          color: #a84e05;
          overflow-x: hidden;
          overflow-y: hidden;
          text-align: left;
          margin: 17px 0 0 0;
          height: 259px;
          padding: 0 133px 0 107px;
          &:hover {
            padding: 0 133px 0 107px;
            overflow-y: scroll;
          }
        }
      }
    }
  }

</style>
