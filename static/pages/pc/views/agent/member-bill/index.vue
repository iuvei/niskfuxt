<template>
  <div class="mainAgentDiv">
    <div class="userSet">
      <div class="u-c-menu">
        <router-link class="u-c-router" v-for="item in Menus" :to="{name:item.to,params:{'proposalType':item.proposalType}}" :key="item.to">
          <span class="iconay" :class="item.ico"></span>{{item.name}}
        </router-link>
      </div>
      <div class="u-c-box">
        <!-- 需要缓存的页面 -->
        <keep-alive v-if="!$route.meta.noCache">
          <router-view>
            <!-- 页面内容可视部分 -->
          </router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getAgentQueryType
  } from "@/api/agent";
  export default {
    data() {
      return {
        Menus: {
          "1000": {
            to: 'agent_deposit',
            name: '',
            ico: 'ay-cunkuanlicairenminbi',
            proposalType: ''
          },
          "503": {
            to: 'agent_withdraw',
            name: '',
            ico: 'ay-tikuan',
            proposalType: ''
          },
          "2": {
            to: 'agent_feedback',
            name: '',
            ico: 'ay-tiyanjin',
            proposalType: ''
          },
          "1": {
            to: 'agent_promo',
            name: '',
            ico: 'ay-youhui2',
            proposalType: ''
          },
          "-1": {
            to: 'agent_winlose',
            name: '会员输赢',
            ico: 'ay-zhangdan',
            proposalType: ''
          }
        }
      }
    },
    created() {
      // 读取账户类型
      getAgentQueryType().then(res => {
        if (res.success) {
          for (let i = 0; i < res.data.length; i++) {
            if (!this.Menus[res.data[i].value]) {
              this.Menus[res.data[i].value] = {};
            }
            console.log(this.Menus[res.data[i].value])
            Object.assign(this.Menus[res.data[i].value], res.data[i] || {})
          }
        } else {
          window.toast(res.message)
        }
      }).catch(err => {
        window.toast("类型加载失败")
      })
    },
  }

</script>
<style lang='scss' scoped>
  .mainAgentDiv {
    width: 100%;
    .sidebar {
      display: inline-block;
    }
    .user-page {

      background: #000;
      padding: 40px 0;
      border: 1px solid #303030;
      color: #fff; // display: inline-block;
      float: right;
      .u-c-shows {
        padding: 0 20px;
        width: 930px !important;
      }
    }
    .u-c-menu {
      margin-right: 20px;
      /*display:flex;
      justify-content:space-between;*/
      .u-c-router {
        padding: 0 30px !important;
        background-color: rgba(0, 0, 0, 0.705);
        display: block;
        width: 140px;
        height: 60px;
        line-height: 60px;
        border: 1px solid #303030;
        font-size: 16px;
        color: #fff;
        padding-left: 30px;
        position: relative;
        cursor: pointer;
        &:before {
          content: '';
          width: 100%;
          background: none;
          height: 5px;
          position: absolute;
          bottom: -4px;
          left: 0;
        }
        &:hover,
        &.active {
          color: #fff;
          background: #8d3e3c;
          /* Old browsers */
          background: -moz-linear-gradient(left, #8d3e3c 0%, #bb4e49 100%);
          /* FF3.6-15 */
          background: -webkit-linear-gradient(left, #8d3e3c 0%, #bb4e49 100%);
          /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right, #8d3e3c 0%, #bb4e49 100%);
          /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49', GradientType=1);
          /* IE6-9 */
          .iconay {
            color: #fff;
          }
        }
        .iconay {
          color: #fff;
          margin-right: 10px;
          font-size: 26px;
          vertical-align: middle;
          height: 40px;
          line-height: 40px;
        }
      }
    }

  }

</style>
