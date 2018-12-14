<template>
  <div class="col left platform-box">
    <ul class="platform-box-bar">
      <li v-for="(item,i) in data" @click="setMenu(item.typeId)" :key="item.typeId+i">
        <a href="javascript:void(0);" data-target="ag" :class="[item.typeId,{active:cur==item.typeId}]"></a>
      </li>
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
        cur: "DT",
        data: [
          // {
          //   typeId: 'APP',
          //   name: '官网APP'
          // },
          {
            typeId: 'DT',
            name: 'DT客户端'
          },
          {
            typeId: 'AG',
            name: 'AG客户端'
          },
          {
            typeId: 'PT',
            name: 'PT客户端'
          },
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
  .platform-box {
    margin-top: 110px;
    .platform-box-bar {
      margin-left: 15px;
      display: flex;
      position: absolute;
      justify-content: space-between;
      width: 500px;
      li {
        a {
          display: block;
          width: 100px;
          height: 130px;
          -webkit-transform: scale(1);
          transform: scale(1);
          &.APP {
            background: url(./images/APP.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/APP_hover.png) no-repeat 50%;
            }
          }
          &.AG {
            background: url(./images/AG.png) no-repeat 50%;
            background-size: cover;
            &.active,
            &:hover {
              background: url(./images/AG_hover.png) no-repeat 50%;
            }
          }
          &.PT {
            background: url(./images/PT.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/PT_hover.png) no-repeat 50%;
            }
          }
          &.DT {
            background: url(./images/DT.png) no-repeat 50%;
            &.active,
            &:hover {
              background: url(./images/DT_hover.png) no-repeat 50%;
            }
          }
        }
      }
    }
  }

</style>
