<template>
  <!--底部内容-->
  <div class="footer">
    <div class="footer-website">
      <div class="content">
        <div class="website-link">
          <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}" class="bdnone">关于我们</router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">专业团队</router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">利益保障</router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">公司宗旨</router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab5'}}">客户至上</router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">公司责任</router-link>
          <router-link :to="{name:'aboutIndex',params:{tab:'tab7'}}">用户协议</router-link>
        </div>
      </div>
    </div>
    <div class="footer-btm">
      <div class="content">
        <div class="friend-link">
          <div v-for="(item,i) in items" :key="i">
            <a href="javascript:void(0);" class="f-l-item" :class="item.className"></a>
          </div>
        </div>
        <div class="footer-tips">
            <div class="left">
                Copyright Reserved 2018 {{WEBCONFIG.name}}.All Rights Reserved
            </div>
            <div class="paytype">
              <a href="javascript:;" class="p1"></a>
              <a href="javascript:;" class="p2"></a>
              <a href="javascript:;" class="p3"></a>
            </div>
            <div class="right">
                <span>推荐浏览器</span>
                <a href="javascript:;" class="c1"></a>
                <a href="javascript:;" class="c2"></a>
                <a href="javascript:;" class="c3"></a>
                <a href="javascript:;" class="c4"></a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    WEBCONFIG
  } from "@/assets/data"
  export default {
    data() {
      return {
        WEBCONFIG,
        items:[
          {className:'DT'},
          {className:'AG'},
          {className:'PT'},
          {className:'BBIN'},
          {className:'MG'},
          {className:'SUNBET'},
          {className:'PNG'},
          {className:'OG'},
          // {className:'QT'},
          {className:'CQ9'},
          {className:'VR'},
          {className:'QP761'},
          {className:'TGP'},
          {className:'PIN'},
          {className:'SHABA'},
          {className:'NT'},
          {className:'KYQP'}
        ]
      };
    },
    props: {},
    methods: {},
    computed: {},
    created() {},
    components: {}
  };

</script>
<style lang="scss">
  .footer {
    padding-top:20px;
    padding-bottom:20px;
    background:#141415;
    .footer-website{
      border-bottom:solid 2px #2c2c2c;
      .content{
        padding-bottom: 0; 
      } 
    }
    .website-link {
      display:flex;
      color: #fff;
      justify-content: space-between;
      padding:30px 0;
      a {
        font-size:14px;
        justify-content: center;
        text-align:center;
        display:flex;
        flex:1;
        border-left: #5e5e5e solid 1px;
        &.bdnone {
          border: none
        }
      }
      img {
        margin-top: -35px;
      }
    }

    .footer-btm {
      .content{
        padding-bottom: 0px;
      }
    }
    .friend-link {
      line-height: 37px;
      margin:24px auto;
      width: 100%;
      text-align: center;
      justify-content: space-between;
      div{
        display: inline-block;
        width: 150px;
      }
      .f-l-item {
        flex:1;
        display:inline-block;
        height:36px;
        width:120px;
        border-radius:6px;
        padding: 2px;
        transition:all 0.4s;
        background-color:#333336;
        background-repeat:no-repeat;
        background-size: 100% 100%;
        background-position:center bottom;
        &.DT{
          background-image:url(./images/footlogo-dt1.png);
          &:hover{
            background-image:url(./images/footlogo-dt.png);
          }
        }
        &.AG{
          background-image:url(./images/footlogo-ag1.png);
          &:hover{
            background-image:url(./images/footlogo-ag.png);
          }
        }
        &.PT{
          background-image:url(./images/footlogo-pt1.png);
          &:hover{
            background-image:url(./images/footlogo-pt.png);
          }
        }
        &.BBIN{
          background-image:url(./images/footlogo-bbin1.png);
          &:hover{
            background-image:url(./images/footlogo-bbin.png);
          }
        }
        &.MG{
          background-image:url(./images/footlogo-mg1.png);
          &:hover{
            background-image:url(./images/footlogo-mg.png);
          }
        }
        &.SUNBET{
          background-image:url(./images/footlogo-sunbet1.png);
          &:hover{
            background-image:url(./images/footlogo-sunbet.png);
          }
        }
        &.PNG{
          background-image:url(./images/footlogo-png1.png);
          &:hover{
            background-image:url(./images/footlogo-png.png);
          }
        }
        &.OG{
          background-image:url(./images/footlogo-og1.png);
          &:hover{
            background-image:url(./images/footlogo-og.png);
          }
        }
        &.CQ9{
          background-image:url(./images/footlogo-cq91.png);
          &:hover{
            background-image:url(./images/footlogo-cq9.png);
          }
        }
        &.VR{
          background-image:url(./images/footlogo-vr1.png);
          &:hover{
            background-image:url(./images/footlogo-vr.png);
          }
        }
        &.QP761{
          background-image:url(./images/footlogo-7611.png);
          &:hover{
            background-image:url(./images/footlogo-761.png);
          }
        }
        &.TGP{
          background-image:url(./images/footlogo-tgp1.png);
          &:hover{
            background-image:url(./images/footlogo-tgp.png);
          }
        }
        &.PIN{
          background-image:url(./images/footlogo-pin1.png);
          &:hover{
            background-image:url(./images/footlogo-pin.png);
          }
        }
        &.SHABA{
          background-image:url(./images/footlogo-shaba1.png);
          &:hover{
            background-image:url(./images/footlogo-shaba.png);
          }
        }
        &.NT{
          background-image:url(./images/footlogo-nt1.png);
          &:hover{
            background-image:url(./images/footlogo-nt.png);
          }
        }
        &.KYQP{
          background-image:url(./images/footlogo-kyqp1.png);
          &:hover{
            background-image:url(./images/footlogo-kyqp.png);
          }
        }
        // &:hover{
        //   background-color:#000;
        //   background-position:center top!important;
        // }
      }
    }
    .footer-tips {
      color: #757576;
      line-height: 30px;
      display: flex;
        .left{
            font-size: 12px;
            width: 300px;
        }
        .paytype{
          width: 600px;
          text-align: center;
          a{
            display: inline-block;
            width: 100px;
            height: 30px;
            margin-right: 5px;
          }
          .p1{
            background: url(./images/ico_alipay.png) no-repeat center;
          }
          .p2{
            background: url(./images/ico_dream.png) no-repeat center;
          }
          .p3{
            background: url(./images/ico_visa.png) no-repeat center;
          }
        }
        .right{
            width: 300px;
            text-align: right;
            span{
                position: relative;
                top: -10px;
                display: inline-block;
                margin-right: 5px;
            }

            a{
                display: inline-block;
                width: 30px;
                height: 30px;
                margin-right: 5px;
            }
            
            
            .c1{
                background: url(./images/c1.png) no-repeat center;

                &:hover{
                    background: url(./images/c1s.png) no-repeat center;
                }
            }
            .c2{
                background: url(./images/c2.png) no-repeat center;

                &:hover{
                    background: url(./images/c2s.png) no-repeat center;
                }
            }
            .c3{
                background: url(./images/c3.png) no-repeat center;

                &:hover{
                    background: url(./images/c3s.png) no-repeat center;
                }
            }
            .c4{
                background: url(./images/c4.png) no-repeat center;

                &:hover{
                    background: url(./images/c4s.png) no-repeat center;
                }
            }
        }
    }
  }

</style>
