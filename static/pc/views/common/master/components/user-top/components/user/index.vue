<template>
  <div class="user-top content" v-if="isUser">
    <div class="avtar">
      <div class="logos" :class="`logo${userData.levelNumber}`"></div>
    </div>
    <div class="infos">
      <div>
        <div class="texts">
          <span class="icobjh bjh-smile"></span>
          <span class="red">{{userData.loginname}}</span>欢迎回来</div>
        <div class="texts">
          <span class="icobjh bjh-huangguan"></span>会员等级：
          <span class="red">{{userData.level}}</span>
        </div>
        <div class="texts">
          <span class="icobjh bjh-msg"></span>
          <span class="red">{{unread}}条</span>消息未读</div>
      </div>
      <div>
        <div class="texts">
          <span class="icobjh bjh-qianbao1"></span>主账户余额：
          <span class="red">{{userData.accountMoney}}</span>
        </div>
        <div class="texts">
          <span class="icobjh bjh-qianbao1"></span>副账户彩金余额：
          <span class="red">{{userData.deputyCredit}}</span>
        </div>
      </div>
    </div>
    <div class="control">
      <div class="search">
        余额查询：
        <el-select 
        placeholder="请选择查询类型" 
        v-model="searchMoney"
        width=700
        @change="getGameMoney(searchMoney)"
        >
          <el-option 
          v-for="item in Money" 
          :key="item.value" 
          :label="item.name" 
          :value="item.value">
          </el-option>
        </el-select>
        <span class="money">{{showMoney}}</span>
      </div>
      <div class="btns">
        <router-link :to="{name: 'finance_deposit'}" class="item" style="background:#df5555">
          <span class="icobjh bjh-chongzhi"></span>充值
        </router-link>
        <router-link :to="{name: 'finance_drawmoney'}" class="item" style="background:#7087c3">
          <span class="icobjh bjh-tikuan"></span>提款
        </router-link>
        <router-link :to="{name: 'finance_transfer'}" class="item" style="background:#5cb4c8">
          <span class="icobjh bjh-zhuanzhang"></span>转账
        </router-link>
        <span class="item" style="background:#cda149" @click="$store.dispatch('LOGIN_OUT')">
          <span class="icobjh bjh-dianyuan"></span>退出账户
          </span>
      </div>
    </div>
  </div>
</template>
<script>
  import {    mapGetters,    mapActions  } from 'vuex'
  import {    Money  } from '@/assets/data'
  import {getGameMoney} from '@/api/user'

  export default {
    data() {
      return {
        Money,
        searchMoney:'',
        showMoney:''
      };
    },
    props: {},
    methods: {
      ...mapActions(["LOGIN_OUT"]),
      getGameMoney(val) {
        this.showMoney = "正在查询.."
        getGameMoney({gameCode: val}).then(res => {
          if (res.success) {
            this.showMoney = `${res.data} 元`;
          }
          else {
            toast(res.message)
            this.showMoney = '查询失败'
          }
        })
      },
    },
    computed: {
      ...mapGetters(["userData","isUser","unread"]),
    },
    created() {
    },
    components: {}
  };

</script>
<style lang="scss" scoped>
  .user-top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    background: rgb(255, 236, 183);
    /* Old browsers */
    background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
    /* IE6-9 */
    padding: 20px 0;
    .logos {
      background-image: url(./images/logo.png);
      background-position:center center;
      background-repeat: no-repeat;
      background-size: contain!important;
      height: 80px;
      width: 120px;
      border-right: solid 1px #ffb92d;
      &.logo0{
        // 新会员
        background-image: url(./images/0.png);
      }
      &.logo1{
        // 青铜
        background-image: url(./images/1.png);
      }
      &.logo2{
        // 白银
        background-image: url(./images/2.png);
      }
      &.logo3{
        // 黄金
        background-image: url(./images/3.png);
      }
      &.logo4{
        // 钻石
        background-image: url(./images/4.png);
      }
      &.logo5{
        // 至尊
        background-image: url(./images/5.png);
      }
      &.logo6{
        // 王者
        background-image: url(./images/6.png);
      }
    }
    .infos {
      display: flex;
      width: 590px;
      border-right: solid 1px #ffb92d;
      height: 80px;
      .texts {
        margin-left: 30px;
        line-height: 1.8;
        .icobjh {
          font-size: 18px;
          margin-right: 20px;
          vertical-align: middle;
        }
        .red {
          color: red;
          font-size: 110%;
          font-weight: bold;
        }
      }
    }
    .control {
      width: 480px;
      padding-left: 30px;
      .inputs {
        width: 320px;
        background: #fff;
        border-radius: 6px;
        color: red;
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        select {
          display: block;
          height: 100%;
          width: 100%;
          background: 0;
          border: 0;
          outline: 0;
          color: red;
        }
      }
      .btns {
        margin-top: 20px;
        .item {
          display: inline-block;
          height: 34px;
          line-height: 34px;
          width: 90px;
          margin-right: 3px;
          text-align: center;
          background: #7087c3;
          border-radius: 6px;
          color: #fff;
          cursor:pointer;
          .icobjh {
            font-size: 18px;
            margin-right: 5px;
            vertical-align: middle;
          }
        }
      }
    }
  }

</style>
