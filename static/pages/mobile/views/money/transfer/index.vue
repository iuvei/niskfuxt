<template>
  <div class="transfer">
    <!-- <div class="account-money">主账户余额<span class="account-money-balance">{{userData.totalBalance}}</span><span class="yuan">元</span></div>
    <div class="line"><img src="./images/trans.png" alt=""></div> -->
    <!-- <div class="game-box">
      <div class="game-title">选择游戏钱包：</div>
      <div class="flex game-item">
        <div class="game-item-list" v-for="item in newMoney" :key="item.value" @click="chooseIt(item)">
          <span class="gameOutName">{{item.name}}</span>
          <span class="gameOutMoney" >{{wallet[item.value]}}</span>
        </div>
      </div>
    </div>
    <div class="transfer-btn">
      <button @click="transfer" class="frombtn">确定转入主账户</button> 
    </div> -->
    <!-- <el-form :model="data" ref="transferForm" class="draw-form">
      <div class="game-title">选择游戏钱包：</div> -->
      <!-- 转出账户 -->
      <!-- <div class="game-item">      
        <div 
          v-for="item in newMoney" 
          @click="chooseIt(item)" 
          :key="item.value" 
          class="game-item-list"
          :class="{active:data.transferGameOut == item.value}">
          <div class="gameOutName">{{item.name}}</div>
          <div class="gameOutMoney" v-if="data.transferGameOut == item.value&&isxuanzhuan">正在刷新...</div>
          <div class="gameOutMoney" v-else>{{wallet[item.value]}}</div>
          <i :class="{xuanzhuan:isxuanzhuan}" class="iconay ay-shuaxin"></i> 
        </div>
      </div>
      <div class="gameInZone">
        <el-form-item>
          <el-input v-model.number="data.transferGameMoney" type="number" placeholder="请输入转账金额"></el-input>
          <el-button class="submitbtn" @click="submitForm('transferForm')">转账到主账户</el-button>
        </el-form-item>
      </div>
    </el-form> -->

    <!-- <input-inline label="转出">
      <select ref="transOut" v-model="data.transferGameOut">
        <option value=''>请选择转出钱包</option>
        <option :nameVal="item.name" v-for="item in Money" :value="item.value" :key="item.value">
          {{item.name}}
        </option>
      </select>
      <span class="transfer-tips">{{wallet[data.transferGameOut]}}</span>
    </input-inline>
    <input-inline label="转入">
      <select v-model="data.transferGameIn" ref="transIn">
        <option value=''>请选择转入钱包</option>
        <option :nameVal="item.name" v-for="item in Money" :value="item.value" :key="item.value">
          {{item.name}}
        </option>
      </select>
      <span class="transfer-tips">{{wallet[data.transferGameIn]}}</span>
    </input-inline>
    <input-inline label="金额">
      <input v-model.number="data.transferGameMoney" type="text" placeholder="请输入转账金额">
    </input-inline>
    <vButton @click="transfer" class="frombtn">确定</vButton>
    <form-tip>
      1.请在户内转账前进行平台激活，激活后方可转账 <br>
      2.激活方法：登入官网>进入需要激活的游戏平台>选择游戏>加载游戏完成后退出即可。<br>
      3.户内转账只支持整数转账，最低转账金额为1元。<br>
      4.进行户内转账时，请先关闭正在进行的游戏页面，避免出现错误。
    </form-tip> -->

    <div class="showlist">
      <div class="main">
        <div class="mainmoney">
          <p>主账户余额:</p>
          <p >￥{{wallet.MAIN}}</p>
        </div>
        <div class="mainmoney">
          <p>礼金账户余额:</p>
          <p>￥{{wallet.DEPUTY}}</p>
        </div>
      </div>
      <div class="platform-list">
        <div class="money-item" v-for="(item,key) in Money" :key="key" @click="getGameMoney(item.value)" v-if="item.value!='MAIN' && item.value!='DEPUTY'">
          <span class="label">{{item.name}}</span>
          <span class="nums" v-if="wallet[item.value] || wallet[item.value]==0">{{wallet[item.value]}}元</span>
          <span class="nums" v-else-if="cur ==item.value">正在查询...</span>
          <span class="nums" v-else>点击查询</span>
        </div>
      </div>
    </div>
    <div>
      <label class="t_input">
        <span class="t_label">来源账户 :</span>
        <select  ref="transOut" v-model="data.transferGameOut">
          <option value=''>请选择转出钱包</option>
          <option v-for="item in Money" :key="item.value" :value="item.value">
            {{item.name}}
          </option>
        </select>
      </label>
      </div>
      <div>
        <label class="t_input">
          <span class="t_label">目标账户 :</span>
          <select v-model="data.transferGameIn" ref="transIn">
            <option value=''>请选择转入钱包</option>
            <option v-for="item in Money" :key="item.value" :value="item.value">
              {{item.name}}
            </option>
          </select>
        </label>
      </div>
      <div>
        <label class="t_input">
          <span class="t_label">转账金额 :</span>
          <input v-model.number="data.transferGameMoney" type="text" placeholder="请输入转账金额">
        </label>
      </div>
      <div class="btns">
        <span @click="transfer" class="t_btn">确认转账</span>
        <!-- <router-link to="/slotgame" class="t_btn">前往游戏大厅</router-link> -->
      </div>
  </div>
</template>
<script>
import { updateGameMoney } from "@/api/payment";
import { getGameMoney } from "@/api/user";
import { platformData } from "@/assets/data";
import { Money } from "@/assets/data";
import { transfer } from "@/controls/money/transfer";
import { mapGetters, mapActions, mapMutations } from "vuex";
import formTip from "mobile/components/form-tip"
export default {
  mixins: [transfer],
  data() {
    return {
      Money,
      newMoney: [],
      gamelen: "",
      data: {
        transferGameOut: "",
        transferGameIn: "",
        transferGameMoney: ""
      },
      isxuanzhuan: false,
      cur:1
    };
  },
  methods: {
    ...mapActions(["UPDATE_MONEY"]),
    transfer(){
      this.transferSubmit(this.data).then(res=>{
        window.toast(res.message)
      }).catch(err=>{
        window.toast(err.message)
      })
    },
    chooseIt(item) {
      this.data.transferGameOut = item.value;
      this.isxuanzhuan = true;
    },
    getGameMoney(val) {
      this.cur = val
      this.UPDATE_MONEY(val)
        .then(res => {
          this.cur = 1
        })
        .catch(err => {
          this.cur = 1
        });
    },
  },
  computed: {
    ...mapGetters(["userData", "isUser", "unread", "wallet"])
  },
  created() {},
  watch: {},
  components:{formTip}
};
</script>
<style lang="scss" scoped>
@import "~mobile/assets/scss/mixin.scss";
// .transfer {
//   padding:r(30);
//   .text_red {
//     color: #00baa6;
//   }
//   .text_green {
//     color: #00c755;
//   }
//   .transfer-tips {
//     @include f(28px);
//     position: absolute;
//     right: r(20);
//     word-break: keep-all;
//   }
//   .account-money {
//     @include f(32px);
//     color: #ffffff;
//     text-align: center;
//     .account-money-balance {
//       @include f(56px);
//       color: #bda059;
//       margin-left: r(10);
//     }
//     .yuan {
//       color: #bda059;
//     }
//   }
//   .line {
//     width: 100%;
//     height: r(2);
//     background-color: #37394e;
//     margin: r(100) 0;
//     position: relative;

//     img {
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       width: r(100);
//       height: r(100);
//     }
//   }
//   .game-title {
//     @include f(32px);
//     color: #ffffff;
//     margin-bottom: r(20);
//   }
//   .game-item {
//     display: flex;
//     justify-content: flex-start;
//     flex-wrap: wrap;
//     width: 100%;
//     background-color: #24222b;
//     .game-item-list {
//       color: #ffffff;
//       border: 1px solid #37394e;
//       @include f(30px);
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//       width: 33.3%;
//       padding: r(20) 0;
//       box-sizing: border-box;
//       .iconay{
//         color: #ffffff;
//       }
//       .gameOutMoney {
//         margin: r(5) 0;
//       }
//       &.active {
//         color: #bda059;
//         .iconay {
//           color: #bda059;
//         }
//         .xuanzhuan{        
//           &.ay-shuaxin:before{
//             color: #bda059;
//             -webkit-animation:rotateImg 1s linear infinite;
//             animation: rotateImg 1s linear infinite;
//             display: inline-block;
//           }
//         }
//       }
//     }
//   }
//   .submitbtn {
//     margin-top: r(40);
//     width: 100%;
//     background: #bda059;
//     border-radius: r(10);
//     padding: r(20) 0;
//     color: #ffffff;
//   }
// }
// @keyframes rotateImg {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
// @-webkit-keyframes rotateImg {
//   0% {
//     -webkit-transform: rotate(0deg);
//   }
//   100% {
//     -webkit-transform: rotate(360deg);
//   }
// }
.transfer {
  background: #dfdfdf;
  position: absolute;
  padding-top: r(100);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  padding-bottom: r(50);
}
.showlist {
  background: #dfdfdf;
  .main {
    display: flex;
    background: #f2f2f2;
    padding: r(30) 0;
    .mainmoney {
      width: 50%;
      text-align: center;
      @include f(34px);
      line-height: 2;
    }
  }
  .platform-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    margin: r(26);
    .money-item {
      display: flex;
      width: 25%;
      text-align: center;
      flex-direction: column;
      border-right: solid 2px #f2f2f2;
      border-bottom: solid 2px #f2f2f2;
      padding: r(16) 0 r(10);
      .label {
        @include f(24px);
        line-height: 1.4;
      }
      .nums {
        @include f(28px);
        color: #0088fe;
      }
    }
  }
}
.t_input {
  display: flex;
  padding: r(15) r(30);
  @include f(32px);
  align-items: center;
  justify-content: center;
  .t_label {
    flex: 1;
  }
  input,
  select {
    flex: 3;
    background-color: #fff !important;
    display: block;
    width: auto;
    padding: r(16) r(20);
  }
  select {
    background-image: url(./images/triangle.png);
    background-repeat: no-repeat;
    background-position: right 5% center;
    background-size: auto 30%;
  }
}
.btns {
  margin-top: r(20);
  text-align: center;
  .t_btn {
    padding: r(20);
    @include f(36px);
    border-radius: 6px;
    display: inline-block;
    width: 92%;
    box-sizing: border-box;
    background: #e1c45b;
    color: #fff;
  }
}
</style>
