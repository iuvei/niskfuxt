<template>

  <header class="header">
    <div class="content">
      <div class="links">
        <div class="showUser" v-if="islogin">
            <p class="title1">官网在线人数</p>
            <p class="title2">{{number}}</p>
        </div>
        <!-- <a class="link" @click="toCs">在线客服</a> -->
        <!-- <a class="link red" @click="$bus.$emit('showRegister',true)" v-if="!islogin">注册领奖金</a> -->
      </div>
      <a class="logo" href="/">
        <img src="~@/assets/images/logo.gif">
      </a>
      <div class="input">
        <haslogin v-if="islogin"></haslogin>
        <login v-else></login>
      </div>
    </div>
  </header>

</template>
<script>
  import login from 'pc/views/common/auth/login'
  import haslogin from 'pc/views/common/auth/haslogin'
  import {mapGetters, mapActions} from 'vuex'
  import {SETTING} from '@/assets/data/index'
  import openWindow from '@/util/openWindow'
  
  export default {
    data() {
      return {
        number:2168+Math.floor(Math.random()*10)*100+Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10)*1,
        timer:null
      };
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    methods: {
      ...mapActions(["UPDATE_USERDATA"]),
      toCs(){
        openWindow(SETTING.live800, '在线客服', 700, 640)
      },
      beginNum(){
      const $this=this
      this.timer=setInterval(()=>{
      var num2 = Math.floor(Math.random()*10)*100
      var num3 = Math.floor(Math.random()*10)*10
      var num4 = Math.floor(Math.random()*10)*1
        $this.number=2000+num2+num3+num4
      },60000)
      }
    },
    created(){
      // 更新一次用户信息
      this.UPDATE_USERDATA().then(res=>{

      }).catch(err=>{
        console.log(err)
      })
      this.beginNum()
    },
    beforeDestroy(){
      clearInterval(this.timer)
    },
    components:{login,haslogin}
  };
</script>
<style lang="scss" scoped>
.header{
  padding:10px 0;
  background:#1b1b1c;
  .content{
    width:1200px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    font-size:14px;
    height:100px;
    position:relative;
    .links{
      margin-top:15px;
      color:#fff;
      .link{
        margin-right:10px;
        cursor:pointer;
        &.red{
          animation: color 0.6s;
          animation-iteration-count: 999;
        }
      }
    }
    .logo{
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%,-50%);
      transition:all 0.4s;
      &:hover{
        transform:translate(-50%,-50%) scale(1.05);
      }
    }
  }
  .showUser{
    padding-top:20px;
    background:url(./icos.png) left 30px bottom no-repeat;
    padding-left:100px;
    text-align:center;
  }
  .title1{
    font-size:16px;
    letter-spacing: 1px;

  }
  .title2{
    margin-top:10px;
    font-size:24px;
    color:#fad07c;
  }
}
  @keyframes color {
    from {
      color:#ffd177;
      transform: scale(1)
      
    }
    to {
      color:#fff;
      transform: scale(1.05)
      
    }
  }
</style>
