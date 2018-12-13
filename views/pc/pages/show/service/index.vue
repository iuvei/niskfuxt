<template>
  <div class="service">
    <div class="banner"></div>
    <div class="s-main clearfix wr">
      <div class="self_answer">
        <h3 class="s-tit">自助解答服务
          <router-link class="offen-link" :to="{name:'aboutIndex',params:{tab:'tab5'}}">常见问题</router-link>
        </h3>
        <div class="m-list clearfix">
          <div class="item">
            <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}" class="tit">
              <img src="./img/item-01.jpg" alt="">
              <h4>资金问题</h4>
            </router-link>
            <div class="q-list">
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">存款方式有哪些?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">支持信用卡存款吗?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">微信转账存款为什么不到帐?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">支付宝如何存款?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">支付宝转账存款为什么不到帐?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">网银转账如何存款?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">京东如何存款?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">如何提款?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">提款卡如何绑定?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab1'}}">户内转账系统繁忙怎么办?</router-link>
              </p>
            </div>
          </div>
          <div class="item">
            <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}" class="tit">
              <img src="./img/item-02.jpg" alt="">
              <h4>账户问题</h4>
            </router-link>
            <div class="q-list">
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">如何注册?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">我可以注册多个账号吗?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">账号被锁?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">怎么更改注册姓名?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">怎么解绑已经绑定的银行卡?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">忘记登录密码怎么办?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">怎么看我的存款记录?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">怎么看我的提款记录?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">我得到了什么优惠了?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab2'}}">如何完善个人信息?</router-link>
              </p>
            </div>
          </div>
          <div class="item">
            <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}" class="tit">
              <img src="./img/item-03.jpg" alt="">
              <h4>优惠问题</h4>
            </router-link>
            <div class="q-list">
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">体验金在哪领取?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">体验金申请提示信息重复?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">晋级澳盈VIP需要什么条件?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">如何领取首次存款送彩金活动?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">如何参与、领取每日限时存送优惠?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">我为什么没有获得救援金活动彩金?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">老虎机限时存送活动申请方式?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">AG百家乐首存活动申请方式?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">每月回馈礼金怎么领取?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab3'}}">生日礼金怎么领取?</router-link>
              </p>
            </div>
          </div>
          <div class="item">
            <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}" class="tit">
              <img src="./img/item-04.jpg" alt="">
              <h4>游戏问题</h4>
            </router-link>
            <div class="q-list">
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">你们都有什么类型的游戏?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">最近有什么出分游戏?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">怎么查看游戏记录?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">怎么查看流水（投注额）?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">登录PT客户端时账号需要加前缀?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">游戏时遇到错误代码?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">进入游戏显示黑屏?</router-link>
              </p>
              <p>
                <router-link :to="{name:'aboutIndex',params:{tab:'tab4'}}">游戏卡顿?</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="people-service">
        <h3 class="s-tit">人工服务</h3>
        <div class="tel-list">
          <p>
            <a  target="_blank" :href="$SITE.contact.live800">
              <img src="./img/side-01.jpg" alt="">
						</a>
          </p>
          <p>
            <a @click="showBackCall" href="javascript:void(0);" id="phone_in">
              <img src="./img/side-02.jpg" alt="">
            </a>
          </p>
        </div>
        <div class="suggest clearfix">
          <div class="fl">
            <a :href="$SITE.contact.live800" target="_blank" class="icon">
              <img style="transform: scale(.85)" src="./img/Suggestion.png" alt="">
              <p>投诉建议</p>
            </a>
            <p class="light">
              <a :href="$SITE.contact.live800" target="_blank">认真对待您的每次反馈</a>
            </p>
          </div>
          <div class="fl ">
            <router-link :to="{name:'downloadIndex'}" class="icon">
              <!-- <img src="./img/icon-02.jpg" alt=""> -->
              <i class="iconay ay-xiazai_fuzhi"></i>
              <p>下载中心</p>
            </router-link>
            <p class="light">
              <router-link :to="{name:'downloadIndex'}">下载APP游戏客户端</router-link>
            </p>
          </div>
        </div>
        <p class="bottom-link">
          <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">规则与条款</router-link> |
          <router-link :to="{name:'aboutIndex',params:{tab:'tab6'}}">商务合作</router-link>
        </p>

      </div>
    </div>
  </div>
</template>
<script>
	// import {
    // SETTING
  // } from "@/assets/data"
  // import {backCall} from "@/controls/common/backCall"
  // import  check from "@/util/RegExp"
  export default {
    // mixins: [backCall],
		data(){
			return{
				// SETTING
			}
		},
		methods:{
			showBackCall(){
          // 弹窗回拨
          // this.$prompt('请输入手机号码', '电话回拨', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   inputPattern: check.phone,
          //   inputErrorMessage: '手机号码格式不正确'
          // }).then((confirm) => {
          //   // 提交弹窗
          //   this.backCall({phone:confirm.value}).then(res=>{
          //     window.toast(res.message)
          //   }).catch(err=>{
          //     window.toast(err.message)
          //   })
          // }).catch((err) => {
          //   console.log(err)
          // });
      }
		}
  }

</script>
<style lang="scss" scoped>
.clearfix{
	zoom:1;
	&::before,&::after{
		content: '';
		display: table;
	}
	&::after{
		clear: both;
		height: 0;
		visibility: hidden;
		overflow: hidden;
	}
}
.fl {
    float: left;
}
.wr {
  width: 1320px;
  margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	.self_answer{
		flex: 3;
	}
	.people-service{
		flex: 1;
	}
}

  .service {
    background: #eee;
    color: #666;
    line-height: 24px;
  }

  a {
    color: #666;
  }

  .banner {
    height: 180px;
    background: url(./img/banner1.jpg) no-repeat center;
  }

  .s-main {
    background: #fff;
    margin: 20px auto;
    padding: 30px 60px;
  }

  .s-tit {
    font-size: 24px;
    margin-bottom: 20px;
    &:before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 26px;
      background: #ffa60a;
      vertical-align: middle;
      margin-right: 10px;
      border-radius: 5px;
    }
  }

  .m-list .item {
    float: left;
    margin-right: 30px;
  }

  .item .tit {
    width: 160px;
    height: 160px;
    background: #f4f4f4;
    text-align: center;
    display: block;
  }

  .q-list p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 145px;
  }

  .tit {
    img {
      padding-top: 20px;
      padding-bottom: 12px;
    }
    h4 {
      font-size: 16px;
    }
  }

  .q-list {
    background: #f4f4f4;
    margin-top: 20px;
    padding-top: 20px;
    padding-left: 15px;
    height: 400px;
    line-height: 32px;
    a:hover {
      color: #ffa60a;
      text-decoration: underline;
    }
  }

  .suggest a:hover,
  .bottom-link a:hover,
  .tit:hover,
  .self-tit a:hover {
    color: #ffa60a;
    text-decoration: underline;
  }

  .offen-link {
    float: right;
    font-size: 15px;
    text-decoration: underline;
    color: #666;
    &:hover {
      color: #ffb623;
      text-decoration: underline;
    }
  }

  .people-service {
    border-left: 1px solid #ddd;
    padding-left: 70px;
    height: 100%;
    margin-left: 45px;
  }

  .tel-list {
    border-bottom: 1px dashed #ddd;
    p {
      margin-bottom: 20px;
    }
  }

  .suggest {
    padding-top: 30px;
    display: flex;
    >div {
      width: 140px;
      text-align: center;
      &:first-child {
        margin-right: 20px;
      }
    }
  }

  .s-btn {
    line-height: 30px;
    color: #fff;
    background: #ffa60a;
    border-radius: 4px;
    display: block;
  }

  .suggest {
    .tip {
      font-size: 12px;
      margin: 5px 0 10px;
    }
    .icon {
      display: block;
      background: #b58f53;
      background-image: -moz-linear-gradient(to bottom, #b58f53, #79512e);
      background-image: -o-linear-gradient(to bottom, #b58f53, #79512e);
      background-image: -webkit-linear-gradient(to bottom, #b58f53, #79512e);
      background-image: linear-gradient(to bottom, #b58f53, #79512e);
      padding: 15px 0;
      border-radius: 5px;
      color: #fff;
      &:hover {
        // color: #fff;
				opacity: .8;
      }
      img {
        height:42px;
      }
      i {
        display: block;
        height:44px;
        line-height:42px;
        font-size:40px;
      }
    }
    .s-btn:hover {
      color: #fff;
    }
  }

  .icon {
    p,
    +p {
      margin-top: 10px;
    }
  }

  .bottom-link {
    margin-top: 30px;
    text-align: right;
  }

  .light {
    opacity: .7;
  }

</style>
