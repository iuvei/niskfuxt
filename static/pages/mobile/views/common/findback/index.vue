<template>
  <div class="page_content_wrap">
    <div class="main_nav_with_arrow ul_auto_wrap">
      <ul class="cfx">
        <li v-for="item in selectTyle"  :class="{active:type==item.id}" :key="item.id">
          <a href="javascript:void(0)" @click="type=item.id">
            <img v-lazy="getIcon(item.icon)">
            <span class="img_text" v-text="item.name"></span>
          </a>
        </li>
        <li data-href="user_rebate_content">
          <a target="_blank" :href="SETTING.live800">
            <img src="./images/icon_chat03.png" >
            <span class="img_text">联系客服</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="find-email">
      <input-inline label="电子邮箱" v-show="type=='EMAIL'">
        <input  type="text"  v-model="phone.email" placeholder="请输入邮箱" >
      </input-inline>
      <input-inline label="手机号码" v-show="type=='PHONE'">
        <input  type="text"  v-model="phone.phone" placeholder="请输入绑定手机号码">
      </input-inline>

      <input-inline label="验证码">
        <input v-model="phone.code" type="text" placeholder="请输入验证码" maxlength="4">
        <span class="right-info right_label" style="height: 100%">
              <img width="100" :src="validateImage" @click="GET_VALIDATE"/>
            </span>
      </input-inline>
    </div>
    <v-button @click="subimtPay" class="subButton">发送信息</v-button>
  </div>
</template>
<script>
  import check from "@/util/RegExp"
  import {SETTING} from "@/assets/data"
  import {payForgot} from '@/controls/auth/payForgot'
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    mixins:[payForgot],
    data() {
      return {
        SETTING,
        selectTyle:[
          {id:"PHONE",name:"短信重置",icon:"icon_mobile.png"},
          {id:"EMAIL",name:"邮箱重置",icon:"icon_mail02.png"}
        ],
        // 当前选中的找回方式
        type: "PHONE",
      }
    },
    watch:{
    },
    computed:{
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      getIcon(val){
        return require('./images/'+val);
      },
      subimtPay() {
        // 判断当前找回支付密码的方式
        if(this.type == 'PHONE'){
          this.phone.pipe = 'PHONE'; // 设置找回方式
          // 通过手机找回
          this.findBySms(this.phone).then(res=>{
            window.toast(res.message)
          }).catch(err=>{
            console.log(err);
            window.toast(err.message)
          })
        }
        else{
          this.phone.pipe = 'EMAIL'; // 设置找回方式
          // 通过邮件找回
          this.findByEmail(this.phone).then(res=>{
            window.toast(res.message)
          }).catch(err=>{
            console.log(err);
            window.toast(err.message)
          })
        }
      }
    },
    components:{
    }
  }
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
  .main_nav_with_arrow {
    border-bottom: 1px solid #ddd;
    background: #eee;
    ul li {
      display: block;
      float: left;
      position: relative;
      padding-bottom: 6px;
      width: 33.33%;
      text-align: center;
      box-sizing:border-box;
      a{
        display: block;
        padding: 10px 0;
        img{
          display: block;
          width:r(40*2);
          height:auto;
          margin:r(10) auto   r(20);

        }
      }
      &.active{
        a{
          border-color: transparent;
          color: #d03328;
          box-shadow: 0 0 0;
        }
      }
    }
  }
  .layout_form03 {
    padding: r(10) 0 r(20);
    .form_field_warp {
      padding-left: r(15*2);
      padding-right: r(15*2);
    }
  }
  .form_field {
      position: relative;
      height: r(42*2);
      line-height: r(42*2);
      border: 1px solid #ccc;
      padding: 0 r(12*2);
      border-radius: 50em;
      margin-bottom: r(16*2);
      background: #fff;
      .form_field_input {
        overflow: hidden;
        margin: 0 0 0 70px;
        height: 100%;
        white-space: nowrap;
        input,select,option {
          padding: 0;
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: none;
          @include f(28px);
          color: #333;
          appearance: none;
      }
    }
    &.form_field_cap_code {
        // margin-right: r(110*2);
        .right_label {
          top: r(-4);
          right: r(6);
          height: 100%;
          position: absolute;
          img {
            border-radius: 20em;
            height: 100%;
            width:auto;

        }
      }
    }
    &.with_right_label {
      position: relative;
    }
  }
  .btn_wrap {
    padding-left: r(35);
    padding-right: r(45);
    margin-bottom: r(12);
    .btn01, .btn02 {
        display: inline-block;
        text-align: center;
        width: 90%;
        height:r(44*2);
        line-height: r(44*2);
        @include f(30px);
        color: #fff;
        border-radius: 100px;
        font-weight: 700;
        background: $cl1;
        border: none;
    }
  }

.find-email{
  padding:0.5rem;
  .right_label {
    right: 0 !important;
    height: 100%;
    position: absolute;
    img {
      border-radius: 20em;
      height: 100%;
      width: auto;
      vertical-align: sub;
    }
  }
}
.page_content_wrap {
  .subButton {
    width: 90%!important;
  }
}
</style>
