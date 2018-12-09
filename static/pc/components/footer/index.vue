<template>
  <!--底部内容-->
  <div class="footer">
    <div class="footer-website">
      <div class="content">
        <div class="website-link">
          <router-link :to="{path:'/aboutus/aboutustab1'}" class="bdnone">关于我们</router-link>
          <router-link :to="{path:'/aboutus/aboutustab2'}">专业团队</router-link>
          <router-link :to="{path:'/aboutus/aboutustab3'}">利益保障</router-link>
          <router-link :to="{path:'/aboutus/aboutustab4'}">公司宗旨</router-link>
          <router-link :to="{path:'/aboutus/aboutustab5'}">客户至上</router-link>
          <router-link :to="{path:'/aboutus/aboutustab6'}">公司责任</router-link>
          <router-link :to="{path:'/aboutus/aboutustab7'}">理性博彩</router-link>
        </div>
      </div>
    </div>
    <div class="footer-btm">
      <div class="content">
        <div class="friend-link">
          <a href="javascript:void(0);" class="f-l-item DT">
          </a>
          <a href="javascript:void(0);" class="f-l-item PT">
          </a>
          <a href="javascript:void(0);" class="f-l-item PNG">
          </a>
          <a href="javascript:void(0);" class="f-l-item MG">
          </a>
          <a href="javascript:void(0);" class="f-l-item NT">
          </a>
          <a href="javascript:void(0);" class="f-l-item QT">
          </a>
        </div>
        <div class="footer-tips">
            <div class="left">
                Copyright Reserved 2017 BJH.All Rights Reserved
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
  export default {
    data() {
      return {};
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
      height: 140px;
    }
    .friend-link {
      line-height: 87px;
      display:flex;
      margin:24px 0;
      justify-content: space-between;
      .f-l-item {
        // flex:1;
        display:inline-block;
        height:36px;
        width:132px;
        border-radius:6px;
        transition:all 0.4s;
        background-color:#2c2c2c;
        background-repeat:no-repeat;
        background-size: cover;
        background-position:center bottom;
        &.PT{
          background-image:url(./images/foot-pt.png);
        }
        &.DT{
          background-image:url(./images/foot-dt.png);
        }
        &.MG{
          background-image:url(./images/foot-mg.png);
        }
        &.QT{
          background-image:url(./images/foot-qt.png);
        }
        &.PNG{
          background-image:url(./images/foot-png.png);
        }
        &.NT{
          background-image:url(./images/foot-nt.png);
        }
        &:hover{
          background-color:#000;
          background-position:center top!important;
        }
      }
    }
    .footer-tips {
      color: #757576;
      line-height: 30px;
        .left{
            font-size: 12px;
            float:left;
            width: 300px;
        }

        .right{
            float: right;
            width: 300px;

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
