<template>
  <div class="recomment-list cfx">
  	<router-link class="listLeft fl" :to="{name:'cooperation',params:{type:'register'}}">	    
    	<i class="iconay ay-daili"></i>
    	<div>代理加盟<span class="radiusSpan">火爆</span></div>	   
    </router-link>
    <router-link class="listRight fr" :to="{name:'promo'}">	    
    	<i class="iconay ay-24"></i>
    	<div>优惠活动<span class="radiusSpan">最新</span></div>
    </router-link>
  </div>
</template>
<script>

  export default {
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {

    },
    activated() {
    },
    components: {}
  }
</script>
<style spcoed lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
	.recomment-list {
		background-color: #424245;
		height: r(160);
		>a{
			display:inline-block;
			width:49%;
			height:100%;
			text-align:center;
			color:#fff;
			font-size:r(28);
			padding:r(20) 0 ;
			box-sizing:border-box;
			.iconay {
				font-size:r(60);
				color:#bda059;
			}
			>div{
				margin-top: r(10);
				.radiusSpan {
					display:inline-block;
					border:r(2) solid #bda059;
					color:#bda059;
					padding:r(5) r(10);
					border-radius:r(30);
					margin-left:r(10);
				}
			}
		}
		.listLeft {					
			border-right:1px solid #5e5e61;		
		}
	}
</style>
