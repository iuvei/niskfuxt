<template>
<div>
  <!-- 特殊处理，mfb的支付宝下边，再出个通道一和通道二 -->
  <el-row class="dep_type" v-show="classes.type=='qqpay'||classes.type=='ebank'||classes.type=='wechat'||classes.type=='alipay'||(hasTranferChecked&&hasSM)">
    <el-col :span="2">
    <span class="dep_title">
      存款方式：
    </span>
    </el-col>
    <el-col :span="22" v-show="classes.type=='qqpay'">
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        QQ转账
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        QQ扫码
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='SM'">加赠{{infoSelect.rate4deputy}}%</span>x -->
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="22" v-show="classes.type=='ebank'">
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        网银转账
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-if="hasebank" @click="selectPayMethod('ebank')" :class="{active:payMethod=='ebank'}">
        在线网银支付
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='ebank'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-if="hasunionpay" @click="selectPayMethod('unionpay')" :class="{active:payMethod=='unionpay'}">
        银联扫码
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='unionpay'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-if="hasspeedPay" @click="selectPayMethod('speedPay')" :class="{active:payMethod=='speedPay'}">
        网银快捷支付
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='speedPay'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="22" v-show="classes.type=='wechat'">
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        微信转银行卡
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        微信扫码
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='SM'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="22" v-show="classes.type=='alipay'">
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        支付宝转账
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        支付宝扫码
        <!-- <span class="rate4deputy" v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='SM'">加赠{{infoSelect.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
  </el-row>
  <el-row class="dep_type" v-show="showMenu.length>1">
    <el-col :span="2">
    <span class="dep_title">
      存款通道：
    </span>
    </el-col>
    <el-col :span="22">
      <span @click="selectPayInfo(item)" :class="{active:item==infoSelect}" v-for="(item,key,i) in showMenu" :key="i" class="dep_item">
        {{item.remark}}
        <!-- <span class="rate4deputy" v-if="item.rate4deputy">加赠{{item.rate4deputy}}%</span> -->
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
  </el-row>
  </div>
</template>
<script>
  import {
    getPaymentConfigInfo,
  } from "@/api/payment"
  import {    mapGetters  } from 'vuex'
  export default {
    data() {
      return {
        infoSelect:null,
        payMethod:'SM',
        hasspeedPay:false,
        hasunionpay:false,
        hasebank:false,
        hasSM: false,
        hasTranferChecked: false,
        className: '',
        classes:{},
        tranferRate4deputy:false,
        smRate4deputy:false
      }
    },
    methods: {
      // 选择其他支付方式
      selectPayInfo(info){
        if(!info){
          info=this.classes.data[0]
        }
        this.infoSelect=info;
        this.$emit('selectPayInfo',info)
          if(info.payBy&&(info.payBy=='zfb'||info.payBy=='new_zfb')){
            // window.$alert('支付宝转账到银行卡23：00-凌晨01：00有延迟到帐现象，具体到账时间由银行方而定，建议使用其他存款方式。')
          }
      },
      // 选择支付方式
      selectPayMethod(payMethod){
        this.payMethod=payMethod;
        this.selectActive(payMethod)
      },
      // 选择第一个支付
      selectActive(payMethod){
        if(!payMethod){
          return
        }
        this.classes.data.some(item=>{
          if(item.payMethod==payMethod){
            this.selectPayInfo(item)
            return true
          }
        })
      },
    },
    computed: {
      ...mapGetters(["userData"]),
      showMenu(){
        if(!this.classes){
          return []
        }
        if (this.classes.data) {
          return this.classes.data.filter(item=>{
            return item.payMethod==this.payMethod
          })
        }
        
      }
    },
    watch:{
      classes(val){
        let _this = this
          // 是否有转账
          _this.hasTranferChecked = val.data.some(item => {
            if (item.payMethod) {
              return item.payMethod == 'TRANFER_BANK_CARD'
            }
          })
          // 是否有扫码
          _this.hasSM = val.data.some(item => {
            if (item.payMethod) {
              return item.payMethod == 'SM'
            }
          })
          // 快捷支付
          _this.hasspeedPay = val.data.some(item => {
            if (item.payMethod) {
              return item.payMethod == 'speedPay'
            }
          })
          // 银联扫码
          _this.hasunionpay = val.data.some(item => {
            if (item.payMethod) {
              return item.payMethod == 'unionpay'
            }
          })
          // 在线支付
          _this.hasebank=val.data.some(item => {
            if (item.payMethod) {
              return item.payMethod == 'ebank'
            }
          })
          // 扫码支付有优惠
        _this.smRate4deputy = val.data.some(item => {
          if (item.payMethod) {
            return item.payMethod == 'SM' && item.rate4deputy>0
          } else {
            item.rate4deputy>0
          }
        })
        // 转账支付方式是否有优惠
        _this.tranferRate4deputy = val.data.some(item => {
          return item.payMethod == 'TRANFER_BANK_CARD' && item.rate4deputy>0
        })
        // 有转账，默认选中
        if (_this.hasTranferChecked) {
          _this.selectPayMethod('TRANFER_BANK_CARD')
        }else if(_this.hasspeedPay){
          _this.selectPayMethod('speedPay')
        }else if(_this.hasunionpay){
          _this.selectPayMethod('unionpay')
        }else if(_this.hasebank){
          _this.selectPayMethod('ebank')
        }else{
          _this.selectPayMethod('SM')
        }
        switch (val.type) {
          case 'alipay':
            _this.className = '支付宝'
            break;
          case 'wechat':
            _this.className = '微信'
            break;
          case 'qqpay':
            _this.className = 'QQ'
            break;
          case 'ebank':
            _this.className = '网银'
            break;
          case 'jdpay':
            _this.className = '京东'
            break;
          case 'ysfpay':
            _this.className = '云闪付'
            break;
          case 'directpay':
            _this.className = '快速支付'
            break;
          case 'unionpay':
            _this.className = '银联扫码'
            break;
          case 'offbank':
            _this.className = '线下银行转账'
            break;
          case 'speedPay':
            _this.className = '快捷支付'
            break;
        }
      }
    },
    created() {
      this.$bus.$on('setClasses', eventData => {
        this.classes = eventData
      })
    },
  };

</script>
<style lang="scss" scoped>
  .dep_type {
    // margin-top: 20px;
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 20px;
    .test {
      margin: 5px 0 5px 27px;

      &:first-child {
        margin: 5px 0 5px 11px;
      }
    }

    .classTypeItem {
      width: 150px;
      padding: 7px 15px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 5px;
      line-height: 46px;
      cursor: pointer;
      margin-left: 10px;
      &.active {
        border: 1px solid #8d3e3c;
        color: #fff;
        background: #b58f53;
        background-image: -webkit-gradient(linear, left top, right top, from(#b58f53), to(#79512e));
        background-image: linear-gradient(to right, #b58f53, #79512e);
      }
    }

    .dep_title {
      color: #fff;
      line-height: 46px;
    }

    .dep_type_tips {
      color: #fff;
    }

    .dep_item {
      display: inline-block;
      border: solid 1px #efefef;
      border-radius: 5px;
      background: #f8f8f8;
      min-width: 100px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      margin: 0 10px 4px 0;
      padding: 0 10px;
      margin-bottom: 20px;
      cursor: pointer;
      position: relative;

      &:hover,
      &.active {
        // border: solid 2px #8bd5ff;
        border: 1px solid #8d3e3c;
        color: #fff;
        background: #b58f53;
        background-image: -webkit-gradient(linear, left top, right top, from(#b58f53), to(#79512e));
        background-image: linear-gradient(to right, #b58f53, #79512e);
      }

      .dep_selected {
        line-height: 1;
        position: absolute;
        color: #39b6fe;
        top: -6px;
        right: -8px;
        font-size: 16px;
      }
    }
  }

</style>
