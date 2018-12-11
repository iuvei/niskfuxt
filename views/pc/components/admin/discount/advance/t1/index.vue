<template>
  <div class="vip-gold">
    <div class="vip-tips">
      总投注额{{tips.allbet}}元
    </div>
    <Table :data="betList" :columns="columnsBetList" border style="width: 100%">
    </Table>
    <Modal title="晋级标准" width="640px" v-model="showUpgrade">
      <Table :data="level" :columns="columnsLevel" :row-class-name="rowClassName" border style="width: 100%">
      </Table>
    </Modal>
    <div style="margin:20px 0">
      <Button type="warning" @click="submit" :loading="loading" :disabled="!canUpgrade">检测升级</Button>
      <Button @click="showUpgrade=true" :loading="loading" >查看晋级标准</Button>
    </div>
  </div>
</template>
<script>
  import {
    checkUpgrade
  } from "@@/api/preferential-terms"
  import {
    vipGold
  } from '@@/mixins/discount/vipGold'
  export default {
    mixins: [vipGold],
    data() {
      return {
        // disabled:false
        showUpgrade: false,
        loading: false
      };
    },
    methods: {
      submit() {
        this.loading = true
        this.checkUpgrade().then(res => {
          window.toast(res.message)
          this.loading = false
        }).catch(err => {
          window.toast(err.message)
          this.loading = false
        })
      },
      rowClassName(row, rowIndex) {
        console.log(row, rowIndex)
        console.log(this.userData.levelNumber)
        if (row.level == this.userData.levelNumber) {
          return 'active-row';
        }
        return '';
      }
    },
    components: {
      // vipStep
    },
    mounted() {
      this.getVipInfo()
    },
    watch: {
      // level(arr){
      //   if (arr[0].level == 0) {
      //     arr.shift()
      //   }
      // }
    }
  };

</script>
<style lang="scss">
  .vip-gold {
    .vip-tips {
      color: #09affe;
      font-size: 30px;
      margin: 20px 0;
      line-height: 1.5;

    }

    .ivu-table .active-row td {
      background: #c7e9fd !important;
    }
  }

</style>
