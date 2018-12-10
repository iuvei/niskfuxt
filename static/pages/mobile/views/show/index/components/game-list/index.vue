<template>
  <div class="soltmenubox">
    <!-- tab栏 -->
    <div class="slot-btns cfx">
      <div class="btn_content fl" v-for="(item,i) in tabData" :key="i" @click="gametype=i">
        <span :class="gametype==i?'active':''"><i :class="['iconay', item.icon]"></i>{{item.name}}</span>
      </div>
    </div>
    <!-- 游戏框  -->
    <div class="slot-menu" v-show="gametype==i" v-for="(list,i) in allData" :key="i">
      <div class="slot-menu-item"  v-for="(item,j) in list" :key="j">
        <router-link  v-if="item.to" :to="item.to">
          <img v-lazy="getimg(item)" :alt="item.name">         
          <div class="img_text">{{item.name}}</div>
        </router-link> 
        <a :href="'javascript:void(0);'" :target="item.target||'_self'" @click="agClick(item,$event)" v-else>
          <img v-lazy="getimg(item)" :alt="item.name"> 
          <div class="img_text">{{item.name}}</div>
        </a>           
      </div>
    </div>
    <!-- 真人/体育 -->
    <!-- <div class="slot-menu" v-show="gametype==0">
      <div class="slot-menu-item"  v-for="(item,i) in agData" :key="i">
        <a :href="'javascript:void(0);'"  :target="item.target||'_self'" @click="agClick(item,$event)">
          <img v-lazy="getimg(item)" :alt="item.name"> 
          <div class="img_text">{{item.name}}</div>
        </a>       
      </div>
    </div> -->
    <!-- 老虎机 -->
    <!-- <div class="slot-menu" v-show="gametype==1">
      <div class="slot-menu-item"  v-for="(item,i) in slotData" :key="i">
        <router-link  v-if="item.to" :to="item.to">
          <img v-lazy="getimg(item)" :alt="item.name">         
          <div class="img_text">{{item.name}}</div>
        </router-link>        
      </div>
    </div> -->
    <!-- 捕鱼/棋牌 -->
    <!-- <div class="slot-menu" v-show="gametype==2">
      <div class="slot-menu-item" v-for="(item,i) in fishData" :key="i">
        <a :href="'javascript:void(0);'" :target="item.target||'_self'"  @click="agClick(item,$event)">
          <img v-lazy="getimg(item)" :alt="item.name">       
          <div class="img_text">{{item.name}}</div>
        </a>     
      </div>
    </div> -->
    <!-- 彩票 -->
    <!-- <div class="slot-menu" v-show="gametype==3">
      <div class="slot-menu-item" v-for="(item,i) in lotteryData" :key="i">
        <a :href="'javascript:void(0);'" :target="item.target||'_self'"  @click="agClick(item,$event)">
          <img v-lazy="getimg(item)" :alt="item.name">       
          <div class="img_text">{{item.name}}</div>
        </a>     
      </div>
    </div> -->
  </div>
</template>
<script>
  import  {Games} from "@/assets/data"
  import {mapGetters} from 'vuex'

  let tabData= [
    {name:"老虎机",icon:"ay-laohuji"},
    {name:"真人娱乐",icon:"ay-shexiangtou"},
    {name:"体育",icon:"ay-zuqiu1"},
    {name:"捕鱼",icon:"ay-yu"},
    {name:"棋牌",icon:"ay-qipaishi"},
    {name:"彩票",icon:"ay-B-tiyucaipiao"},
  ];
  let agData=[
    {name:"AG真人",href:Games.href_ag,target:"_blank",img:"ag.png"},
    {name:"BBIN真人",href:Games.href_bbin,target:"_blank",img:"bbin.png"},
    {name:"OG真人",href:Games.href_og,target:"_blank",img:"og.png"},
    {name:"SUNBET真人",href:Games.href_sunbetH5,target:"_blank",img:"sunbet.png"},
  ];
  let sportData = [
    {name:"沙巴体育",href:Games.href_sb_mobile,target:"_blank",img:"sba.png"},
    // {name:"平博体育",href:Games.href_pbsport,target:"_blank",img:"pbsport.png"},
    {name:"新皇冠体育",href:Games.href_ug_mobile,target:"_blank",img:"ug.jpg"}
  ];
  let slotData=[
    {name:"PT老虎机",to:{name:"slotgame",params:{type:"PT"}},img:"pt.png"},
    {name:"MG老虎机",to:{name:"slotgame",params:{type:"MGS"}},img:"mg.png"},
    {name:"PNG老虎机",to:{name:"slotgame",params:{type:"PNG"}},img:"png.png"},
    {name:"CQ9老虎机",to:{name:"slotgame",params:{type:"CQ9"}},img:"cq9.png"},
    {name:"DT老虎机",to:{name:"slotgame",params:{type:"DT"}},img:"dt.png"},
    {name:"NT老虎机",to:{name:"slotgame",params:{type:"NT"}},img:"nt.png"},
    {name:"RTG老虎机",to:{name:"slotgame",params:{type:"RTG"}},img:"rtg.png"},
    {name:"AMEBA老虎机",to:{name:"slotgame",params:{type:"AMEBA"}},img:"ameba.png"},
    {name:"TGP老虎机",to:{name:"slotgame",params:{type:"TGP"}},img:"tgp.png"},
    {name:"BB老虎机",to:{name:"slotgame",params:{type:"BBSLOT"}},img:"bbslot.jpg"},
  ];
  let fishData=[
  	{name:"AG捕鱼",href:Games.href_fish,target:"_blank",img:"buyu.png"}, 	
  ];
  let chessData= [
    {name:"761棋牌",href:Games.href_city761,target:"_blank",img:"761.png"},
  	{name:"开元棋牌",href:Games.href_kyqp,target:"_blank",img:"kyqp.png"}
  ];
  let lotteryData=[
  	{name:"VR彩票",href:Games.href_vr,target:"_blank",img:"vr.png"},
  	{name:"BB彩票",href:Games.href_bbcp,target:"_blank",img:"BBCP.png"},
  	{name:"IG时时彩",href:Games.href_ig_ssc_mobile,target:"_blank",img:"IG_SS.png"},
  	{name:"IG香港彩",href:Games.href_ig_hk_mobile,target:"_blank",img:"IG_HK.png"}
  ];
  
    export default {
        data() {
            return {
              tabData,
              allData:[slotData,agData,sportData,fishData,chessData,lotteryData],                         
              gametype:0,
              recommandData: [],
              curItem: {},
              showModel: false,         
            };
        },
        props:{
          data:Array
        },
        methods:{
          tickGanme(item) {
            this.curItem = {
              "eName": item.eName,
              "name": item.name,
              "id": item.id,
              "code": item.code,
              "category": item.category,
              "type":item.type,
              "line": item.line,
              "subType":item.subType,
              "state": item.state,
              "pic": item.picPath,
              "tag": item.tag
            };
            this.showModel = true;
          },
          getimg(item){
            return require(`./images/${item.img}`)
          },
          agClick(item,e){
            if(this.islogin){
              if(this.isAgent){
                $alert("代理不能游戏！")
              }else{
                  window.open(item.href);
              }
            }else{
              toast("请先登录！")
            }
            //  return item.method&&item.method(e,item,this)
          }
        },
        created(){
          console.log(this.allData)
        },
        computed:{
          ...mapGetters([ "isAgent","islogin"]),
          islogin(){
            return this.$store.getters.islogin;
          }
        },
        components:{}
    };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .soltmenubox {
  	background-color:$body-bg;
    color:#fff;
    margin-bottom: r(10);
  .slot-btns{
  	background-color: #323235;
    .btn_content{
      width:33.3%;
      text-align:center;
      .iconay {
      	margin-right:r(10);
      	vertical-align:middle;
      	@include f(32px);        
      }
      span{
        display:inline-block;
        width:100%;
        height:r(90);
        line-height:r(90);
        @include  f(32px);       
        &.active{
          color:#bda059;
          border-bottom: r(6) solid #bda059;
        }
      }

    }

  }
  .slot-menu{
  	background-color: #424245;
  	padding: r(20) r(10) 0;  	
  	@include  f(28px);
    display:flex;
    flex-flow: row wrap;
    .slot-menu-item{
      border-radius: r(10);
      width: 33.3%;
      display: block;
      text-align: center;
      margin-bottom:r(20);
      a{
      	position: relative;
      	display: inline-block;
      	width: 100%;
      	overflow: hidden;
			  width: 100%;
			  img{
		      border-radius: r(10);    
		      width: 90%; 
		    }
		    .img_text {
		    	position: absolute;
		    	bottom:r(5);
		    	left: r(25);
		    }
      }
    }
    
  }
  }
</style>
