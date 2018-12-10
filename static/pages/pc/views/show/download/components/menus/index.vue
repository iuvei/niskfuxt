<template>
  <div class="select">
    <img src="./images/download.png" alt="">
    <div :class="['mail',{active:cur==item.typeId}]" v-for="(item,i) in data" @click="setMenu(item.typeId)" :key="item.typeId+i">{{ item.name }}</div>
  </div>
</template>
<script>
  import {
    generateQRCode
  } from "@/api/show"
  import {
    SETTING,
    WEBCONFIG,
    Download
  } from "@/assets/data"
  export default {
    name: "",
    data() {
      return {
        SETTING,
        WEBCONFIG,
        Download,
        cur: "PT",
        data: [
          // {typeId:'APP',name:'APP官网下载'},
          {
            typeId: 'PT',
            name: 'PT电脑客户端下载'
          },
          {
            typeId: 'DT',
            name: 'DT手机客户端下载'
          },
          {
            typeId: 'PTAPP',
            name: 'PT手机客户端下载'
          }
        ],
      }
    },
    computed: {
      filterData() {
        if (this.filter == '') {
          return this.myData.records;
        }
        return this.myData.records.filter((item, i) => {
          return item.type == this.filter;
        })
      }
    },
    watch: {},
    methods: {
      generateQRCode(url, size) {
        return generateQRCode(url, size)
      },
      setMenu(type) {
        this.cur = type;
        this.$bus.$emit('getDownloadPage', type)
      }
    },
    created() {
      this.generateQRCode("text")
    },
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  .select {
    width: 228px;
    float: left;
    img {
      display: block;
      margin-bottom: 18px;
    }
    .mail {
      cursor: pointer;
      color: #FFFFFF;
      text-align: center;
      height: 38px;
      line-height: 38px;
      font-size: 15px;
      margin: 15px 0;
      &.active {
        border: 1px solid #993839;
        color: #993839;
      }
      .slider {
        display: inline-block;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        white-space: nowrap;
        letter-spacing: -1em;
        text-indent: -99em;
        color: transparent;
        vertical-align: text-bottom;
        /* IE7 */
        *text-indent: 0;
        *zoom: expression( this.runtimeStyle['zoom']='1', this.innerHTML='\3000');
        &:before {
          content: '\3000'
        }
      }
      .slider0 {
        background-image: url('./images/slider1.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }
      .slider1 {
        background-image: url('./images/slider2.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }
      .slider2 {
        background-image: url('./images/slider3.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }
      .slider3 {
        background-image: url('./images/slider4.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }
      .slider4 {
        background-image: url('./images/slider5.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }

    }
    span {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      text-align: center;
      padding: 0 30px;
      border-radius: 16px;
      background: #d7d7d7;
      color: #333333;
      margin: 0 15px;
      margin-bottom: 10px;
      font-size: 16px;

      &:hover,
      &.active {
        background: #ed7e12;
        color: #fff;
      }
    }
  }

</style>
