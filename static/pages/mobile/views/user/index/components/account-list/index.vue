<template>
  <div>
    <div class="flex menu-list-box">
      <!-- <router-link class="flex menu-list-item" :to="{name:'user_experiencegold'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="download">
        <span class="main-ico tiyanjin"></span>
        <span class="menu-text">自助体验金</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link>
      <router-link class="flex menu-list-item" :to="{name:'user_savesend'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="gotoPreferential('user_savesend')">
        <span class="main-ico cunsongyouhui"></span>
        <span class="menu-text">自助存送</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link>
      <router-link class="flex menu-list-item" :to="{name:'user_washcode'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="gotoPreferential('user_washcode')">
        <span class="main-ico washcode"></span>
        <span class="menu-text">自助返水</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link>
      <router-link class="flex menu-list-item" :to="{name:'user_helpgold'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="gotoPreferential('user_helpgold')">
        <span class="main-ico jiuyuanjin"></span>
        <span class="menu-text">自助救援金</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link> -->
    </div>
    <div class="flex menu-list-box">
      <!-- <router-link class="flex menu-list-item" :to="{name:'user_discountcode'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="gotoPreferential('user_discountcode')">
        <span class="main-ico savesend"></span>
        <span class="menu-text">存送优惠券</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link>
      <router-link class="flex menu-list-item" :to="{name:'red_envelope'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="gotoPreferential('red_envelope')">
        <span class="main-ico redenvelope"></span>
        <span class="menu-text">红包优惠券</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link> -->
      <router-link class="flex menu-list-item" :to="{name:'user_vipgold'}">
        <span class="main-ico helpself"></span>
        <span class="menu-text">自助晋级</span>
        <span class="iconyg yg-jiantou"></span>
      </router-link>
      <!-- <router-link class="flex menu-list-item" :to="{name:'user_birthdaygold'}"> -->
      <a href="javascript:void(0);" class="flex menu-list-item" @click="gotoPreferential('user_birthdaygold')">
        <span class="main-ico birthday"></span>
        <span class="menu-text">生日礼金</span>
        <span class="iconyg yg-jiantou"></span>
      </a>
      <!-- </router-link> -->
    </div>
    <div class="flex menu-list-box">
      <router-link class="flex menu-list-item" :to="{name:'user_recommendfirend'}">
        <span class="main-ico friends"></span>
        <span class="menu-text">推荐好友</span>
        <span class="iconyg yg-jiantou"></span>
      </router-link>
      <router-link class="flex menu-list-item" :to="{name:'user_log'}">
        <span class="main-ico logs"></span>
        <span class="menu-text">记录查询</span>
        <span class="iconyg yg-jiantou"></span>
      </router-link>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Download} from "@/assets/data"
  export default {
    data() {
      return {
        Download
      };
    },
    props: {
      value: {}
    },
    watch: {

    },
    methods: {
      gotoPreferential(url){
        if (!this.userData.accountName) {
          $confirm("<p>请您先在账户设置里完善个人资料或完成手机号码验证。</p>"
            ,  {
              cancelText: "取消",
              confirmText: "确定"
            }).then(() => {
            // 确认 废弃并生成新订单
              this.$router.push({name:'personal'})
            }, () => {
              // 取消  查看订单
              return false
          });
        } else if (this.userData.phoneValidStatus == '0') { // 存在数据库是‘0’，后期要调整成BOOLEAN
          $confirm("<p>请您先在账户设置里完善个人资料或完成手机号码验证。</p>"
            ,  {
              cancelText: "取消",
              confirmText: "确定"
            }).then(() => {
            // 确认 废弃并生成新订单
              this.$router.push({name:'personal'})
            }, () => {
              // 取消  查看订单
              return false
          });
        }  else {
          this.$router.push({name:url})
        }
      },
      download(){
        window.$alert ("请下载澳盈APP进行申请！","提示",{
          confirmText:"下载"
        }).then(()=>{
        	window.open(Download.app);
        })
      }
    },
    created() {},
    computed: {...mapGetters(['userData'])}
  }

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .menu-list-box {
    background: #fff;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: r(30);
    .menu-list-item {
      border-bottom: 1px solid #e4e4e4;
      @include f(30px);
      justify-content: space-between;
      align-items: center;
      text-align: center;
      width: 100%;
      height: r(96);
      .menu-ico {
        color: $iconcl;
        @include f(46px);
        flex: 1;
      }
      .menu-text {
        flex: 5;
        text-align: left;
      }
      .yg-jiantou {
        color: #333;
        @include f(40px);
        flex: 1;
      }
      .main-ico{
        width: r(50);
        height: r(50);
        flex: 1;
      }
      .tiyanjin{
        background: url('./images/ico_mine_money@2x.png') no-repeat ;
        background-size: 38% 89%;
        background-position: center;
      }
      .washcode{
        background: url('./images/ico_mine_chips@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
      .jiuyuanjin{
        background: url('./images/ico_mine_save@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
      .helpself{
        background: url('./images/ico_mine_update@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
      .birthday{
        background: url('./images/ico_mine_birthday@2x.png') no-repeat ;
        background-size: 43% 75%;
        background-position: center;
      }
      .friends{
        background: url('./images/ico_mine_invite@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
      .savesend{
        background: url('./images/ico_mine_deposit_pro.png') no-repeat ;
        background-size: 43% 75%;
        background-position: center;
      }
      .logs{
        background: url('./images/ico_mine_bill@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
      .cunsongyouhui{
        background: url('./images/ico_mine_deposit_pro@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
      .redenvelope{
        background: url('./images/ico_mine_pro@2x.png') no-repeat ;
        background-size: 43% 89%;
        background-position: center;
      }
    }
  }

</style>
