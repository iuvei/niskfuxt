<template>
  <div class="user-top content" v-if="isAgent">
    <div class="avtar">
      <div class="logos"></div>
      <div>
        <p class="info-text">
          代理账户：<span class="red">{{userData.loginname}}</span>
        </p>
        <p class="btns">
          <span class="btn btn1"><span class="icobjh bjh-wechat"></span>编辑资料</span>
          <span class="btn btn2"><span class="icobjh bjh-wechat"></span>银行卡</span>
        </p>
      </div>
    </div>
    <div class="slot-money">
        <p class="info-text">
          老虎机佣金：<span class="red">{{userData.slotAccount}}</span>
        </p>
        <p class="btns">
          <span class="btn"><span class="icobjh bjh-wechat"></span>提款</span>
        </p>
    </div>
    <div class="live-money">
        <p class="info-text">
          其他佣金：<span class="red">{{userData.liveAccount}}</span>
        </p>
        <p class="email-text">
          站内信：&nbsp;&nbsp;&nbsp;&nbsp;
          <el-badge :value="unread?unread:''" :max="50">
            <span class="btn">消息</span>
          </el-badge>
        </p>
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
      ...mapGetters(["userData","isAgent","unread"]),
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
    font-size:16px;
    .info-text{
      font-size:16px;
      margin-bottom:30px;
      .red{
        color:#ff0e0b;
        font-weight:bold;
      }
    }
    .avtar{
      display: flex;
      border-right: solid 1px #ffb92d;
      width:530px;
      .logos {
        background-image: url(./images/logo.png);
        background-position:center center;
        background-repeat: no-repeat;
        background-size: contain!important;
        // height: 80px;
        width: 120px;
      }
      .btns{
        .btn{
          color:#fff;
          font-size:16px;
          // background:blue;
          border-radius:4px;
          display:inline-block;
          line-height:30px;
          margin-right:10px;
          height:30px;
          width:110px;
          &.btn1{
            background:#df5555;
          }
          &.btn2{
            background:#7087c3;
          }
          .icobjh{
            margin:0 6px;
            font-size:20px;
            vertical-align:middle;
          }
        }
      }

    }

    .slot-money {
      width: 400px;
      border-right: solid 1px #ffb92d;
      // height: 80px;
      padding-left:30px;
      .btns{
        .btn{
          color:#fff;
          font-size:16px;
          border-radius:4px;
          display:inline-block;
          line-height:30px;
          margin-right:10px;
          height:30px;
          width:90px;
          background: rgb(248,123,45); /* Old browsers */
          background: -moz-linear-gradient(left, rgba(248,123,45,1) 0%, rgba(206,50,70,1) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(left, rgba(248,123,45,1) 0%,rgba(206,50,70,1) 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right, rgba(248,123,45,1) 0%,rgba(206,50,70,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f87b2d', endColorstr='#ce3246',GradientType=1 ); /* IE6-9 */
          .icobjh{
            margin:0 6px;
            font-size:20px;
            vertical-align:middle;
          }
        }
      }
    }

    .live-money {
      width: 310px;
      padding-left: 30px;
        .btn{
          color:#fff;
          font-size:16px;
          border-radius:4px;
          display:inline-block;
          line-height:30px;
          margin-right:10px;
          height:30px;
          padding:0 8px;
          background:#7087c3;
        }
    }

  }

</style>
