<template>
  <!-- <div class="select">
    <img src="./images/download.png" alt="">
    <div :class="['mail',{active:cur==item.typeId}]" v-for="(item,i) in data" @click="setMenu(item.typeId)" :key="item.typeId+i">{{ item.name }}</div>
  </div> -->
  <div class="col left platform-box">
    <ul class="platform-box-bar">
      <li v-for="(item,i) in data" @click="setMenu(item.typeId)" :key="item.typeId+i">
        <a href="javascript:void(0);" data-target="ag" :class="[item.typeId,{active:cur==item.typeId}]"></a>
      </li>
      <!-- <li>
            <a href="#" data-target="pt" class="pt">
            </a>
          </li> -->
    </ul>
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
        cur: "APP",
        data: [
          {
            typeId: 'APP',
            name: 'OW8手机APP下载'
          },{
            typeId: 'DT',
            name: 'DT客户端下载'
          },
          {
            typeId: 'PT',
            name: 'PT客户端下载'
          }
          // {
          //   typeId: 'PT',
          //   name: 'PT电脑客户端下载'
          // },
          // {
          //   typeId: 'DT',
          //   name: 'DT手机客户端下载'
          // },
          // {
          //   typeId: 'PTAPP',
          //   name: 'PT手机客户端下载'
          // }
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
<style lang="scss" >
  .platform-box {
    margin-top: 75px;
    .platform-box-bar {
      margin-left: 15px;
      height: 385px;
      display: block;
      background: url(./images/line.png) no-repeat;
      position: absolute;
      li {
        margin-left: -28px;
        &:first-child {
          padding-top: 50px;
        }
        &:not(:first-child) {
          margin-top: 10px;
        }
        a {
          display: block;
          width: 85px;
          height: 90px;
          -webkit-transform: scale(1);
          transform: scale(1);
          &.active,
          &:hover {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            transition: -webkit-transform .3s;
            transition: transform .3s;
            transition: transform 0.3s, -webkit-transform 0.3s;
          }
          &.OPE {
            background: url(./images/ope.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/ope_01.png) no-repeat 50%;
              background-size: 85% 85%;
            }
          }
          &.AG {
            background: url(./images/ag.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/ag.png) no-repeat 50%;
              background-size: 85% 85%;
            }
          }
          &.EBET {
            margin-top: 105px;
            background: url(./images/ebet.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/ebet_01.png) no-repeat 50%;
              background-size: 85% 85%;
            }
          }
          &.PT {
            background: url(./images/pt.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/pt_hover.png) no-repeat 50%;
              background-size: 85% 85%;
            }
          }
          &.APP {
            background: url(./images/app.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/app_hover.png) no-repeat 50%;
              background-size: 85% 85%;
            }
          }
          &.DT {
            background: url(./images/dt.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/dt_hover.png) no-repeat 50%;
              background-size: 85% 85%;
            }
          }
        }
      }
    }
  }

</style>
