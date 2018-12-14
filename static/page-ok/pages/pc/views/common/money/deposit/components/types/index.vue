<template>
  <div class="mainDev">
      <div class="next posl" @click="pregame()"><span class=" ico-pre"></span></div>
      <div class="payBox">
        <div class="gameDev" v-for="item in newPayMenus" :class="{active:active==item.name}" :key="item.name" @click="setPaytype(item)">
            <div class="name">
              <i :class="item.ico" class="iconyg"></i> {{item.name}}
              <span class="rate4deputy" v-for="num in maxNum(item.data)" :key="num.rate4deputy" v-if="num.rate4deputy>0">最多加送{{num.rate4deputy}}%</span>
            </div>
        </div>
      </div>
      <div class="next posl" @click="nextgame()"><i class=" ico-next"></i></div>
  </div>
</template>
<script>

  import {depositMenu} from '@/controls/money/deposit'
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
      },
      maxNum(item){
        let rate4deputy = item[0].rate4deputy
        let j = 0;
        for (let i = 0; i < item.length; i++) {
          if (rate4deputy < item[i].rate4deputy) {
            rate4deputy = item[i].rate4deputy
            j = i
          }
        }
        return [item[j]]
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
              border-bottom: 2px solid #e2b85a;
              color: #e2b85a;
              .name{
                color: #e2b85a;
              }
            }
            .name{
                font-size: 17px;
                color: #666;
                position: relative;
                .iconyg{
                  font-size: 24px;
                  color: #e2b85a;
                }
                .rate4deputy{
                  position: absolute;
                  top: -10px;
                  right: -10px;
                  font-size: 12px;
                  border: solid 1px #e2b85a;
                  background: #e2b85a;
                  color: #fff;
                  padding: 2px 3px;
                  line-height: 1;
                  border-radius: 5px;
                  z-index: 2;
                }
            }
            .money{
                color: #ecf4f2;
                font-size: 16px;
                margin-top: 12px;
            }
            .iconfont{
              color: #e2b85a;
            }
          } 

        }
        .posl{
          position: relative;
          left: -29px;
        }
        .next{
            background: #e2b85a;
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
              border-color: transparent #e2b85a transparent transparent;
            }
            .ico-next{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              top: 50%;
              transform: translate(0,-50%);
              border-color: transparent transparent transparent #e2b85a;
              margin-left: 10px;
              left: 27px;
            }
        }
    }
</style>
