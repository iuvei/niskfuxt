<template>
  <el-row class="dep_menu">
    <el-col :span="3">
    <span class="dep_title">
      支付方式：
    </span>
    </el-col>
    <el-col :span="21">
      <el-row v-if="payMenus.length>0">
        <el-col :span="8" v-for="(item,i) in payMenus" :key="i" >
          <div @click="setPaytype(item)" class="dep_item" :class="{active:paySelect==item}">
            <p class="dep_i_name">{{item.name}}</p>
            
            <img src="./ico1.png" class="icos" v-if="item.rate4deputy">
            <!-- <p class="dep_i_tips" v-if="item.tips">{{item.tips}}</p> -->
            <!-- <span class="dep_selected icobjh bjh-dui-copy" v-show="paySelect==item"></span> -->
          </div>
        </el-col>
      </el-row>
      <el-row v-else>
        <el-col :span="8">
          <div class="dep_item" > 
            <p class="dep_i_name">未设置支付配置</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row> 
</template>
<script>

  import {depositMenu} from '@/controls/money/deposit'
  export default {
    mixins:[depositMenu],
    data() {
      return {
        paySelect: null,
      }
    },
    methods: {
      setPaytype(item){
        if(this.paySelect==item) return
        this.paySelect=item;
        this.$bus.$emit('setClasses',item);
      },
    },
    created() {
      this.getPaymentConfigInfo({terminalType: 0,separateMcpay:1}).then(res=>{
        this.setPaytype(res.data[0])
      })
    },
  };

</script>
<style lang="scss" scoped>
  .dep_menu{
    margin-bottom:50px;
    .dep_title{
      color:#343434;
    }
    .dep_item{
      border:solid 2px #efefef;
      border-radius:5px;
      background:#f8f8f8;
      width:220px;
      height:40px;
      line-height:40px;
      // padding:4px 10px 0;
      margin-bottom:20px;
      cursor:pointer;
      line-height:1;
      position:relative;
      text-align:center;
      &:hover,&.active{
        border:solid 2px #8bd5ff;
      }
      .dep_i_name{
        color:#343434;
        font-size:18px;
        // margin-bottom:2px;
        line-height:40px;
      }
      .dep_i_tips{
        color:#fff;
        font-size:12px;
        position:absolute;
        top:0;
        right:0;
        padding:3px 10px;
        background:#b22222;
      }
      .dep_selected{
        position:absolute;
        color:#39b6fe;
        top:-6px;
        right:-8px;
        font-size:16px;
      }
      .icos{
        position:absolute;
        top:-10px;
        right:-10px;
        font-size:12px;
        animation: start .4s;
        animation-iteration-count: 999999999;
      }
    }
  }
  @keyframes start {
    from {
      transform: scale(1)
    }
    to {
      transform: scale(1.1)
    }
  }
</style>
