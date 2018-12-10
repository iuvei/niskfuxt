<template>
  <div class="agent-account-top">
      <div class="account-img">
        <!--<i class="iconfont icon-zhanghu"></i>-->
        <div><img src="./img/user-avatar.png"></div>
        <router-link class="personal" :to="{name:'personal'}">个人资料&nbsp;&nbsp;></router-link>
      </div>
      <div class="account-name">{{userData.loginname}},你好！</div>
      <div class="agent-account-info-money">
        <div class="agent-account-info-money-half">
          <span class="agent-account-info-money-text">{{userData.slotAccount}}</span><br>
          <span class="agent-account-info-money-text1">老虎机账户（元）</span>
        </div>
        <div class="agent-account-info-money-half">
          <span class="agent-account-info-money-text">{{userData.liveAccount}}</span><br>
          <span class="agent-account-info-money-text1">其他账户（元）</span>
        </div>
      </div>
      <!-- <div class="level-sign">
        <div class="level-info"><i class="iconfont icon-crown"></i>金牌VIP{{userData.levelNumber + 1}}</div>
        <div class="sign-info" @click="doSignRecord">签到</div>
      </div> -->
    <!-- <div class="flex money-list">
      <div class="flex-1">老虎机佣金&nbsp;&nbsp;{{userData.slotAccount + userData.liveAccount}}</div>
       <div class="flex-1">其他佣金&nbsp;&nbsp;{{userData.liveAccount}}</div>
    </div> -->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getGuestbookCountNew} from "@/api/show"
  import {doSignRecord} from "@/api/user"
  export default {
    data() {
      return {
        newMsg: false,
      };
    },
    props: {
      value: {
        default: false
      }
    },
    watch: {
      value(val) {
        this.showSheet = val;
      },
      showSheet(val) {
        this.$emit("input", val)
      }
    },
    methods: {
      loadData() {
        getGuestbookCountNew().then(res => {  //未读消息
          this.newMsg = res.data > 0;
        })
      },
      doSignRecord(){
        doSignRecord().then(res=>{
          window.toast(res.message)
        })
      }
    },
    created() {
//      this.loadData();
    },
    computed: {
      ...mapGetters(["userData", "isAgent"])
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .agent-account-top{
    overflow: hidden;
    background:#fff url("./img/agent-bg.png") no-repeat top center/100% 100%;
    .account-img{
      @include  f(100px);
      margin: r(38) auto 0;
      // width: r(164);
      width: 100%;
      height: r(164);
      text-align: center;
      div{
        width: 60%;
        display: inline-block;
        text-align: right;
        img{
          width:40%;
        }
      }
      .personal{
        @include f(30px);
        color: #fff;
        float: right;
        margin-top: 5vh;
        width: 40%;
        text-align: right;
      }
    }
    .account-name{
      text-align: center;
      @include f(34px);
      margin: r(28) 0;
      color:#fff;
    }
    .agent-account-info-money{
      text-align: center;
      color: #fff;
      margin-bottom: r(60);
      display: flex;
      .agent-account-info-money-half{
        flex: 1;
      }
      .agent-account-info-money-text{
        @include f(60px);
      }
      .agent-account-info-money-text1{
        @include f(24px);
        line-height: r(50);
      }
    }
    .level-sign{
      text-align: center;
      line-height: r(44);
      div{
        display: inline-block;
        background-color: #fcb712;
        padding: 0 r(16);
        border-radius:r(30);
        color: #6d091c;
        min-width:r(128);
      }
      .icon-crown{
        @include f(34px);
        margin-right:4px;
      }
    }
    .money-list{
      @include f(36px);
      color: #fced54;
      text-align: center;
      line-height:r(88);
    }
  }
  .account-top{
    overflow: hidden;
    background:#fff url("./img/user-bg.jpg") no-repeat top center/100% 100%;
    .account-img{
      @include  f(100px);
      margin: r(38) auto 0;
      width: r(164);
      height: r(164);
      text-align: center;
      img{
        width:100%;
        display:block;
      }
    }
    .account-name{
      text-align: center;
      @include f(44px);
      margin: r(8) 0;
      color:#fff;
    }
    .level-sign{
      text-align: center;
      line-height: r(44);
      div{
        display: inline-block;
        background-color: #fcb712;
        padding: 0 r(16);
        border-radius:r(30);
        color: #6d091c;
        min-width:r(128);
      }
      .icon-crown{
        @include f(34px);
        margin-right:4px;
      }
    }
    .money-list{
      @include f(36px);
      color: #fced54;
      text-align: center;
      line-height:r(88);
    }
  }
</style>
