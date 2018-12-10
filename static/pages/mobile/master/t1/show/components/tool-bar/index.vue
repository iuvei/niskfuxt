<template>
	<div>
  	<transition name="fade">
		<div class="tool-warp" v-show="myValue" @click.self="myValue=false">
			<transition name="slideLeft">
				<div v-show="myValue" class="tool-bar">
					<div @click="myValue=false" class="tool-user-info" v-if="!islogin">
						<div class="account-img">
							<img src="./images/logo1.png" alt="">
						</div>
						<router-link class="user-name" :to="{name:'login'}">登录/注册</router-link>
					</div>
					<router-link class="tool-user-info-login cfx" :to="{name:'usercenter'}" @click.native="myValue=false" v-else>
						<div class="account-img-login fl">
							<img src="./images/logo1.png" alt="">
						</div>
						<div class="account-info-login fl">
							<p class="info-name">{{userData.loginname}}</p>
							<p class="info-money">{{userData.accountMoney}}</p>
						</div>
						<i class="iconay ay-xiangyou fr"></i>
					</router-link>
					<div class="money-item" v-if="islogin">
						<router-link :to="{name:'money_depositMenu'}"><img src="./images/c1.png" alt="">存款</router-link>
						<router-link :to="{name:'money_drawmoney'}"><img src="./images/c2.png" alt="">取款</router-link>
					</div>					
					<div @click="myValue=false">
						<router-link class="tool-item-href" :to="{name:'home'}">
							<i class="iconay ay-shouye34"></i>首页
						</router-link>
						<router-link class="tool-item-href" :to="{name:'promo'}">
							<i class="iconay ay-xin1"></i>优惠活动
						</router-link>						
						<a :href="Download.app" target="_blank" class="tool-item-href">
							<i class="iconay ay-xiazai"></i> APP下载
						</a>
						<router-link class="tool-item-href" :to="{name:'agentregister',params:{type:'register'}}">
							<i class="iconay ay-hezuo"></i> 合作加盟
						</router-link>						
						<router-link class="tool-item-href" :to="{name:'serviceCenter'}">
							<i class="iconay ay-wenti"></i> 常见问题
						</router-link>
						<router-link class="tool-item-href" :to="{name:'security'}" v-if="islogin">
							<i class="iconay ay-zhanghuanquan-"></i> 账户安全
						</router-link>
						<router-link class="tool-item-href" :to="{name:'personal'}" v-if="islogin">
							<i class="iconay ay-zhanghushezhi"></i> 账户设置
						</router-link>
						<router-link class="tool-item-href" :to="{name:'message'}" v-if="islogin">
							<i class="iconay ay-mail"></i> 站内信
							<span class="unread" v-if="unread">{{unread}}</span>
						</router-link>
						<div  v-if="islogin" class="tool-item-href" @click="$store.dispatch('LOGIN_OUT')">
							<i class="iconay ay-tuichu2"></i> 退出
						</div>
					</div>
					<div class="contack_btn">
						<!-- <router-link :to="{name:'backCall'}">免费电话</router-link> -->
						<a @click="showWindow=true;myValue=false">免费电话</a>
						<a :href="SETTING.live800" target="_blank">在线客服</a>
					</div>
				</div>
			</transition>
			
		</div>
	</transition>
	<call-back :showWindow=showWindow @closeBox="closeBox"></call-back>
	</div>
</template>
<script>
  import {SETTING ,Download} from "@/assets/data"
  import {mapGetters} from 'vuex'
	import callBack from 'mobile/views/common/back-Call'

  export default {
    data() {
      return {
		SETTING,
		Download,
		myValue:false,
		showWindow:false
      }
    },
    props: ["value"],
    computed: {
      ...mapGetters(["userData", 'islogin', 'isUser', 'unread'])

	},
	methods:{
		closeBox(){
			this.showWindow =false;
		}
	},
    created(){
      // 监听setToolBar控制事件
      // this.$bus.$on('setToolBar',eventData=>{
      //   this.myValue=eventData
      // })
	},
	watch: {
		value(val) {
			this.myValue = val;
		},
		myValue(val) {
			this.$emit("input", val);
		}
	},
	components:{
		callBack
	}
  }

</script>
<style lang="scss" scoped>
	@import "~mobile/assets/scss/mixin.scss";
	.tool-warp {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		.tool-bar {
			@include f(30px);
			transition: transform 0.5s;
			top: 0;
			left: 0;
			text-align: left;
			height: 100%;
			width: 70%;
			background-color: #17171b;
			padding-top:r(20);
			&.active {
				display: block;
				transform: translateX(0);
			}
			.unread {
				margin-left: r(20);
				background: #FF7E28;
				border-radius: 20em;
				display: inline-block;
				padding: r(6);
				line-height: 1;
				color: #ffffff;
			}
			.tool-close {
				height: r(120);
				line-height: r(120);
				text-align: right;
				.iconay {
					@include f(72px);
					margin-right: r(32);
				}
			}
			.tool-user-info {
				text-align: center;
				margin-bottom: r(40);
				.user-level{
					height: r(40);
					line-height: r(40);
				}
				.user-name {
					display: inline-block;
					width: 173px;
					height: 35px;
					line-height: 35px;
					border: 1px solid #996b3d;
					color: #cca352;
					border-radius: 5px;
				}
			}
			.account-img {
				width: r(150);
				margin: 0 auto;
				height: r(200);
				text-align: center;
				line-height: r(140);
				img {
					width: 100%;
				}
			}
			.tool-item-href {
				display: block;
				padding: r(16) 0 r(16) r(80) ;
				line-height: 1;
				color: #999;
				position: relative;
				@include f(32px);
				.iconay {
					@include f(60px);
					margin-right: r(20);
				}
			}
			.tool-item-href.active {
				background-color: #2c2e36;
				color: #ffffff;
				.iconay {
					color: #996b3d;
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 0;
					height: 100%;
					width: r(8);
					background-color: #996b3d;
				}
			}

			.contack_btn {
				display: flex;
				justify-content: space-between;
				padding: 0 r(40);
				margin-top: r(20);
				a {
					display: block;
					border: 1px solid #996b3d;
					border-radius: 5px;
					text-align: center;
					height: 35px;
					line-height: 35px;
					width:100px;
					color: #cca352;
				}
			}
			
			.tool-user-info-login {
				display: block;
				padding-left: r(40);
				.account-info-login {
					display: inline-block;
					color: #ffffff;
					padding-top: r(40);
					padding-left: r(20);
					p {
						line-height: 2;
					}					
					.info-money {
						color:#cca352; 
					}
				}
				.ay-xiangyou {
					color:#cca352; 
					font-weight: bolder;
					margin-top: r(50);
					margin-right: r(30);
				}
			}
			.money-item {
				display: flex;
				justify-content: space-between;
				padding: r(40) r(40) 0;
				border-top: 1px solid #3a342e;
				margin: r(20) 0 r(40) 0;
				
				a {
					display: block;
					background-color: #2c2e36;
					border-radius: 5px;
					padding: r(10) r(30);
					color: #cca352; 
					line-height: 2;
					img {
						width: r(60);
						margin-right: r(10);
					}
				}
			}
		}
	}

</style>
