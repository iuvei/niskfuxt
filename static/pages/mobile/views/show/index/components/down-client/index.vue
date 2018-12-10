<template>
	<div class="down-client">
		<div class="section-tit">			
			<span>客户端下载</span>
    </div>
    <a :href="Download.app" target="_blank">
      <img class="down-app" src="./images/app.png" alt="">
    </a>
		<!-- <ul class="down-list">
			<li>
				<a target="_blank" :href="Download.agMobile">
					<img src="./images/dl_ag.png">
					<div class="down-text">AG真人</div>
				</a>
			</li>
			<li>
				<a target="_blank" :href="Download.ag">
					<img src="./images/dl_fish.png">
					<div class="down-text">捕鱼王2</div>
				</a>
			</li>
			<li v-if="isIOS">
				<a target="_blank" :href="Download.dtIos">
					<img src="./images/dl_dt.png">
					<div class="down-text">DT苹果版</div>
				</a>
			</li>
			<li v-else>
				<a target="_blank" :href="Download.dtAndroid">
					<img src="./images/dl_dt.png">
					<div class="down-text">DT安卓版</div>
				</a>
			</li>
			<li v-if="!isIOS">
				<a target="_blank" :href="Download.ptMobile">
					<img src="./images/dl_pt.png">
					<div class="down-text">PT安卓版</div>
				</a>
			</li>
		</ul> -->
	</div>
</template>
<script>
import { Download } from "@/assets/data";

export default {
  data() {
    return {
      Download,
      isIOS: false
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {},
  created() {
    if (window.navigator.userAgent.toString().search(/(iPhone|iPod|ios|iPad)/i) >-1) {
      this.isIOS = true;
    }
  },
  activated() {},
  components: {}
};
</script>
<style spcoed lang="scss" scoped>
@import "~mobile/assets/scss/mixin.scss";
.down-client {
  @include f(28px);
  // padding: r(10) r(30) r(30) r(30);
  background-color: #424245;
  margin-top: r(8);
  text-align: center;
  .section-tit {
    @include f(36px);
	// margin-bottom: r(20);
	padding: r(20) 0;
	color: #bda059;
  }
  .down-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    li {
      margin-right: r(20);
    }
    img {
      width: r(140);
      height: r(140);
    }
    .down-text {
      color: #ffffff;
      margin-top: r(14);
    }
  }
  .down-app {
    width: 100%;
  }
}
</style>