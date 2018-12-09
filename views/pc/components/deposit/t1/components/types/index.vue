<template>
  <div class="mainDev">
      <div class="next posl" @click="pregame()"><span class=" ico-pre"></span></div>
      <div class="payBox">
        <div class="gameDev" v-for="item in newPayMenus" :class="{active:active==item.name}" :key="item.name" @click="setPaytype(item)">
            <div class="name"><i :class="item.ico" class="icos iconyg"></i> {{item.name}}</div>
        </div>
      </div>
      <div class="next posl" @click="nextgame()"><i class=" ico-next"></i></div>
  </div>
</template>
<script>

  import {depositMenu} from '@@/controls/money/deposit'
  export default {
    mixins:[depositMenu],
    data() {
      return {
        paySelect: null,
        active: "",
        newPayMenus:[],
        gameMinIndex:0,
        gameMaxIndex:5,
        gamelen:''
      }
    },
    methods: {
      setPaytype(item){
        if(this.paySelect==item) return
        this.paySelect=item;
        this.$emit('setClasses',item);
        this.active = item.name;
      },
      pregame(){
        if (this.gameMinIndex == 0) {
          window.toast('已无更多')
          return false;
        } else {
          this.gameMinIndex = this.gameMinIndex - 1
          this.gameMaxIndex = this.gameMaxIndex - 1
          this.newPayMenus = this.payMenus.slice(this.gameMinIndex,this.gameMaxIndex)
        }
      },
      nextgame(){
        if (this.gameMaxIndex < 5 || this.gameMaxIndex >= this.gamelen) {
          window.toast('已无更多')
          return false;
        } else {
          this.gameMinIndex = this.gameMinIndex + 1
          this.gameMaxIndex = this.gameMaxIndex + 1
          this.newPayMenus = this.payMenus.slice(this.gameMinIndex,this.gameMaxIndex)
        }
      }
    },
    created() {
      this.getPaymentConfigInfo({terminalType: 0});
    },
    watch:{
      payMenus(item){
        this.active = item[0].name
        this.setPaytype(item[0])
        
        this.gamelen = this.payMenus.length;
        if (this.payMenus.length>5) {
          this.newPayMenus = this.payMenus.slice(0,5)
        }else{
          this.newPayMenus = this.payMenus;
        }
      }
    }
  };

</script>
<style lang="scss" scoped>
    .mainDev{
        color: #b2b2b2;
        width: 100%;
        border-bottom: 1px dotted #cccccc;
        text-align: center;
        .payBox{
          display: inline-block;
          border-left: 1px solid #cccccc;
          border-right: 1px solid #cccccc;
          width: 92%;
          margin: 5px auto;
          .gameDev{
            cursor: pointer;
            padding: 15px 0;
            width: 19%;
            display: inline-block;
            text-align: center;
            &.active{
              border-bottom: 2px solid #ed7e12;
              color: #ed7e12;
            }
            .name{
                font-size: 17px;
                color: #666;
                .icos{
                  font-size: 24px;
                  color: #ed7e12;
                }
            }
            .money{
                color: #ecf4f2;
                font-size: 16px;
                margin-top: 12px;
            }
            .iconfont{
              color: #ed7e12;
            }
          } 

        }
        .posl{
          position: relative;
          left: -29px;
        }
        .next{
            background: #ed7e12;
            display: inline-block;
            height: 20px;
            vertical-align: middle;
            cursor: pointer;
            .ico-pre{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              top: 50%;
              transform: translate(0,-50%);
              border-color: transparent #ed7e12 transparent transparent;
            }
            .ico-next{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              top: 50%;
              transform: translate(0,-50%);
              border-color: transparent transparent transparent #ed7e12;
              margin-left: 10px;
              left: 27px;
            }
        }
    }
</style>
