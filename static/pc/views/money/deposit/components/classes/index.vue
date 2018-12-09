<template>
<div v-if="classes">
  <!-- 特殊处理，mfb的支付宝下边，再出个通道一和通道二 -->
  <el-row class="dep_type" v-show="classes.type=='qqpay'||classes.type=='ebank'||classes.type=='wechat'||classes.type=='alipay'||classes.type=='unionpay'||(hasTranferChecked&&hasSM)">
    <el-col :span="3">
    <span class="dep_title">
      存款方式：
    </span>
    </el-col>
    <el-col :span="21" v-show="classes.type=='qqpay'">
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        QQ转账
        <span class="rate4deputy" v-if="tranferRate4deputy">加赠{{rate4deputyTranferValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        QQ扫码
        <span class="rate4deputy" v-if="smRate4deputy">加赠{{rate4deputySMValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="21" v-show="classes.type=='ebank'">
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        网银转账
        <span class="rate4deputy" v-if="tranferRate4deputy">加赠{{rate4deputyTranferValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasspeedPay" @click="selectPayMethod('speedPay')" :class="{active:payMethod=='speedPay'}">
        网银快捷支付
        <span class="rate4deputy" v-if="speedRate4deputy">加赠{{rate4deputySpeedValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasebank" @click="selectPayMethod('ebank')" :class="{active:payMethod=='ebank'}">
        在线网银支付
        <span class="rate4deputy" v-if="ebankRate4deputy">加赠{{rate4deputyEbankValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasoffbank" @click="selectPayMethod('offbank')" :class="{active:payMethod=='offbank'}">
        线下银行卡存款
        <span class="rate4deputy" v-if="offbankRate4deputy">加赠{{rate4deputyOffbankValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="21" v-show="classes.type=='unionpay'">
      <span class="dep_item" v-if="hasysfpay" @click="selectPayMethod('ysfpay')" :class="{active:payMethod=='ysfpay'}">
        云闪付
        <span class="rate4deputy" v-if="ysfRate4deputy">加赠{{rate4deputyYSFValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasunionpay" @click="selectPayMethod('unionpay')" :class="{active:payMethod=='unionpay'}">
        银联扫码
        <span class="rate4deputy" v-if="unionRate4deputy">加赠{{rate4deputyUnionValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="21" v-show="classes.type=='wechat'">
      <span class="dep_item" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        微信支付
        <span class="rate4deputy" v-if="smRate4deputy">加赠{{rate4deputySMValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        微信转银行卡
        <span class="rate4deputy" v-if="tranferRate4deputy">加赠{{rate4deputyTranferValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
    <el-col :span="21" v-show="classes.type=='alipay'">
      <span class="dep_item" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        支付宝快捷
        <span class="rate4deputy" v-if="smRate4deputy">加赠{{rate4deputySMValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        支付宝转账
        <span class="rate4deputy" v-if="tranferRate4deputy">加赠{{rate4deputyTranferValue.rate4deputy}}%</span>
      </span>
      <span class="dep_item" v-show="!classes">请先选择支付方式</span>
    </el-col>
  </el-row>
  <el-row class="dep_type" v-show="showMenu.length>1">
    <el-col :span="3">
    <span class="dep_title">
      存款通道：
    </span>
    </el-col>
    <el-col :span="21">
      <span @click="selectPayInfo(item)" :class="{active:item==infoSelect}" v-for="(item,key,i) in showMenu" :key="i" class="dep_item">
        {{item.remark}}
        <span class="rate4deputy" v-if="item.rate4deputy">加赠{{item.rate4deputy}}%</span>
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
        infoSelect: null,
        payMethod: 'SM',
        hasSM: false, // 是否有扫码
        hasTranferChecked: false, // 是否有转账
        hasspeedPay: false,
        hasunionpay: false,
        hasebank: false,
        hasysfpay: false,
        hasoffbank:false,
        classes: null, // 当前的class
        tranferRate4deputy:false,
        smRate4deputy:false,
        unionRate4deputy:false,
        ebankRate4deputy:false,
        speedRate4deputy:false,
        ysfRate4deputy:false,
        offbankRate4deputy:false,
        rate4deputyTranferValue:null,
        rate4deputySMValue:null,
        rate4deputyEbankValue:null,
        rate4deputyUnionValue:null,
        rate4deputyYSFValue:null,
        rate4deputySpeedValue:null,
        rate4deputyOffbankValue:null,
      }
    },
    methods: {
      // 选择其他支付方式
      selectPayInfo(info){
        if(!info){
          info=this.classes.data[0]
        }
        this.infoSelect=info;
        console.log(info)
        this.$emit('selectPayInfo',info)
        if (info.payBy && (info.payBy == 'zfb' || info.payBy == 'new_zfb')) {
          window.$alert(`1.支付宝转账到银行卡23：00-凌晨01：00有延迟到帐现象，具体到账时间由银行方而定，建议使用其他存款方式。<br>2.温馨提示：<span style="color:red;">我方收款账户不定时更新</span>，请您每次存款务必登入官网查看【最新银行卡】；<span style="color:red;">若存入已关闭的银行卡，我方一概不负责</span>，请您谅解！`)
        }else if(info.payBy && (info.payBy == 'bank_phone' || info.payBy == 'bank_web' || info.payBy == 'wechat')) {
          window.$alert(`<span style="color:red;">我方收款账户不定时更新</span>，请您每次存款务必登入官网查看【最新银行卡】；<span style="color:red;">若存入已关闭的银行卡，我方一概不负责</span>，请您谅解！！`)
        }
        if(info.customParams && info.customParams.showBankCardWarn) {
          window.$alert(`收款账户不定时更新，请您每次存款时，务必登入官网获取<span style="color:red;">【我方最新收款账户】</span>，切勿根据历史转账记录直接付款，<span style="color:red;">如存入我方已关闭账户</span>，一概不负责！`)
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
        return this.classes.data.filter(item=>{
          return item.payMethod==this.payMethod
        })
      }
    },
    watch:{
      classes(val){
        console.log(val.type);
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
          // 在线支付
          _this.hasoffbank=val.data.some(item => {
            if (item.payMethod) {
              return item.payMethod == 'offbank'
            }
          })
          
        // hasysfpay
        _this.hasysfpay = val.data.some(item => {
          if (item.payMethod) {
            return item.payMethod == 'ysfpay'
          }
        })
           // 扫码支付有优惠
        _this.smRate4deputy = val.data.some(item => {
          return item.payMethod == 'SM' && item.rate4deputy>0
        })
        // 转账支付方式是否有优惠
        _this.tranferRate4deputy = val.data.some(item => {
          return item.payMethod == 'TRANFER_BANK_CARD' && item.rate4deputy>0
        })
        // 银联扫码是否有优惠
        _this.unionRate4deputy = val.data.some(item => {
          return item.payMethod == 'unionpay' && item.rate4deputy>0
        })
        // 网银-在线网银是否有优惠
        _this.ebankRate4deputy = val.data.some(item => {
          return item.payMethod == 'ebank' && item.rate4deputy>0
        })
        // 网银快捷方式是否有优惠
        _this.speedRate4deputy = val.data.some(item => {
          return item.payMethod == 'speedPay' && item.rate4deputy>0
        })
        // offbank是否有优惠
        _this.offbankRate4deputy = val.data.some(item => {
          return item.payMethod == 'offbank' && item.rate4deputy>0
        })// offbank是否有优惠
        _this.ysfRate4deputy = val.data.some(item => {
          return item.payMethod == 'ysfpay' && item.rate4deputy>0
        })
        // 如有优惠，默认取第一个有优惠信息的优惠值，显示在存款方式，PS：商家要求
        _this.rate4deputyTranferValue = val.data.find(item => { 
          return item.payMethod == 'TRANFER_BANK_CARD' && item.rate4deputy>0
        })
        _this.rate4deputySMValue = val.data.find(item => { 
          return item.payMethod == 'SM' && item.rate4deputy>0
        })
        _this.rate4deputyUnionValue = val.data.find(item => { 
          return item.payMethod == 'unionpay' && item.rate4deputy>0
        })
        _this.rate4deputyYSFValue = val.data.find(item => { 
          return item.payMethod == 'ysfpay' && item.rate4deputy>0
        })
        _this.rate4deputyEbankValue = val.data.find(item => { 
          return item.payMethod == 'ebank' && item.rate4deputy>0
        })
        _this.rate4deputySpeedValue = val.data.find(item => { 
          return item.payMethod == 'speedPay' && item.rate4deputy>0
        })
        _this.rate4deputyOffbankValue = val.data.find(item => { 
          return item.payMethod == 'offbank' && item.rate4deputy>0
        })
        // 如有优惠，默认取第一个有优惠信息的优惠值，显示在存款方式，PS：商家要求
        _this.rate4deputyValue = val.data.find(item => { 
          return item.payMethod == 'TRANFER_BANK_CARD' && item.rate4deputy>0
        })
        // 有转账，默认选中
        if (_this.hasSM) {
          _this.selectPayMethod('SM')
        }else if(_this.hasspeedPay){
          _this.selectPayMethod('speedPay')
        }else if(_this.hasebank){
          _this.selectPayMethod('ebank')
        }else if(_this.hasTranferChecked){
          _this.selectPayMethod('TRANFER_BANK_CARD')
        }else if (_this.hasysfpay) {
          _this.selectPayMethod('ysfpay')
        }else if(_this.hasunionpay){
          _this.selectPayMethod('unionpay')
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
  .dep_type{
    .dep_title{
      color:#343434;
    }
    .dep_item{
      display:inline-block;
      border:solid 2px #efefef;
      border-radius:5px;
      background:#f8f8f8;
      min-width:100px;
      text-align:center;
      height:40px;
      line-height:40px;
      margin:0 10px 4px 0;
      padding:0 10px;
      margin-bottom:20px;
      cursor:pointer;
      position:relative;
      &:hover,&.active{
        border:solid 2px #8bd5ff;
      }
      .dep_selected{
        line-height:1;
        position:absolute;
        color:#39b6fe;
        top:-6px;
        right:-8px;
        font-size:16px;
      }
      .rate4deputy{
        position:absolute;
        top:-10px;
        right:-10px;
        font-size:12px;
        border:solid 1px #f24408;
        background:#fce36e;
        color:#f24408;
        padding:2px 3px;
        line-height:1;
        border-radius:5px;
        z-index:2;
      }
    }
  }
.icos{
        position:absolute;
        top:-10px;
        z-index:9;
        right:-25px;
        font-size:12px;
        animation: start .4s;
        animation-iteration-count: 999999999;
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
