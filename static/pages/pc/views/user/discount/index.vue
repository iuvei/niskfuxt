<template>
  <div class="u-c-shows">
    <div class="u-c-box">
        <div class="wallet-menus">
            <!-- <router-link class="wallet-menus-item" v-for="item in menuList" :to="{name:item.to}" :key="item.name" > -->
            <a href="jacascript:void(0);"
              class="wallet-menus-item" 
              v-for="item in menuList" 
              @click="gotoPreferential(item.to)" 
              :key="item.name" 
              v-if="item.to != 'discount_recommend' && item.to != 'discount_vip'">
              <i :class="item.ico"></i>
              {{item.name}}
            </a>
            <router-link class="wallet-menus-item" 
              v-for="item in menuList" 
              :to="{name:item.to}" 
              :key="item.name" 
              v-if="item.to == 'discount_recommend' || item.to == 'discount_vip'">
              <i :class="item.ico"></i>
              {{item.name}}
            </router-link>
        </div>
        <div class="discount_content">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        menuList: [
          {name: "自助体验金", to: "discount_experience",ico:'iconay ay-tiyanjin'},
          {name: "自助存送", to: "discount_savesend",ico:'iconay ay-cunqianguan'},
          {name: "自助返水", to: "discount_washcode",ico:'iconyg yg-chouma'},
          {name: "自助救援金", to: "discount_help",ico:'iconyg yg-jinbi'},
          {name: "存送优惠券", to: "discount_coupon",ico:'iconay ay-youhui2'},
          {name: "红包优惠券", to: "discount_redenvelope",ico:'iconay ay-hongbaoyouhui-copy'},
          {name: "自助晋级", to: "discount_vip",ico:'iconyg yg-crown'},
          {name: "生日礼金", to: "discount_birthday",ico:'iconyg yg-iconshengrilipin'},
          {name: "推荐好友", to: "discount_recommend",ico:'iconyg yg--tuijianhaoyou'}
        ]
      };
    },
    methods:{
      gotoPreferential(url){
        if (!this.userData.accountName) {
          $confirm("<p>请您先在账户设置里完善个人资料或完成手机号码验证。</p>"
            ,  {
              cancelText: "取消",
              confirmText: "确定"
            }).then(() => {
            // 确认 废弃并生成新订单
              this.$router.push({name:'user_setting'})
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
              this.$router.push({name:'user_setting'})
            }, () => {
              // 取消  查看订单
              return false
          });
        }  else {
          this.$router.push({name:url})
        }
      }
    },
    computed: {...mapGetters(['userData'])}
  };
</script>
<style lang="scss" scoped>
.u-c-shows{
  .u-c-box{
    // background-image: url('components/images/discount-bg.png');
    // background-repeat: no-repeat;
    // background-position: right;
    min-height: 700px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .discount_content{
      padding: 20px;
      min-height: 400px;
      background-color: rgba(0, 0, 0, 0.7);
      border: 1px solid #333333;
      width: 100%;
    }
    .wallet-menus{
        // width: 100%;
        // padding: 0 3%;
        // margin-bottom: 20px;
        margin-right: 20px;
        .wallet-menus-item{
          // background-color: rgba(0, 0, 0, 0.7);
          background-color: rgba(0, 0, 0, 0.7);
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
          &.active{
            background: #8d3e3c;
            background: -webkit-gradient(linear, left top, right top, from(#8d3e3c), to(#bb4e49));
            background: linear-gradient(to right, #8d3e3c 0%, #bb4e49 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49',GradientType=1 );
          }
          .iconay{
            font-size: 26px;
            vertical-align: middle;
          }
          .iconyg{
            font-size: 26px;
            vertical-align: middle;
          }
        }
        .u-c-router{
            padding: 6px 20px;
            font-size: 16px;
            width: 146px;
            height: 33px;
            line-height: 30px;
            color: #666;
            margin-right: 15px;
            text-align: center;
            background: #ebebeb;
            display: inline-block;
        }
        .active{
            .u-c-router{
              background: #8d3e3c; /* Old browsers */
              background: -moz-linear-gradient(left,  #8d3e3c 0%, #bb4e49 100%); /* FF3.6-15 */
              background: -webkit-linear-gradient(left,  #8d3e3c 0%,#bb4e49 100%); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(to right,  #8d3e3c 0%,#bb4e49 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49',GradientType=1 ); /* IE6-9 */
              color: #fff;
            }
        }
    }
  }
}
  .u-c-router{
    .icos{
      display:inline-block;
      height:40px;
      width:30px;
      vertical-align:middle;
      background-repeat:no-repeat;
      background-position:center center;
      &.experience{
        background-image:url(./components/images/experience.png)
      }
      &.savesend{
        background-image:url(./components/images/savesend.png)
      }
      &.washcode{
        background-image:url(./components/images/washcode.png)
      }
      &.coupon{
        background-image:url(./components/images/coupon.png)
      }
      &.redenvelope{
        background-image:url(./components/images/redenvelope.png)
      }
      &.help{
        background-image:url(./components/images/help.png)
      }
      &.vip{
        background-image:url(./components/images/vip.png)
      }
      &.birthday{
        background-image:url(./components/images/birthday.png)
      }
      &.recommend{
        background-image:url(./components/images/recommend.png)
      }
    }
  }
  .user-discount {
    .discount-content {
      padding: 50px 30px 30px;
    }
    .title-tip{
      color: #666;
      font-size: 18px;
      text-align: center;
      margin: 0 0 20px;
      font-weight: bold;
      line-height: 1.5;
    }
    .bottom-tip{
      color: #ffecb7;
      text-align: center;
      width: 100%;
      line-height: 1.5;
    }
  }
  .u-c-router{
    padding:0 20px!important;
  }
</style>
