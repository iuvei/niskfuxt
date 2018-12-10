<template>
  <div class="classes" v-if="classes">
    <p class="title" v-show="classes.type=='qqpay'||classes.type=='ebank'||classes.type=='wechat'||classes.type=='alipay'||(hasTranferChecked&&hasSM)">存款方式</p>
    <div class="cfx" v-show="classes.type=='qqpay'">
      <div class="class-items" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        QQ转账
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
      <div class="class-items" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        QQ扫码
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='SM'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
    </div>
    <div class="cfx" v-show="classes.type=='ebank'">
      <div class="class-items" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        网银转账
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
      <div class="class-items" v-if="hasebank" @click="selectPayMethod('ebank')" :class="{active:payMethod=='ebank'}">
        在线网银支付
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='ebank'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
      <div class="class-items" v-if="hasunionpay" @click="selectPayMethod('unionpay')" :class="{active:payMethod=='unionpay'}">
        银联扫码
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='unionpay'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
      <div class="class-items" v-if="hasspeedPay" @click="selectPayMethod('speedPay')" :class="{active:payMethod=='speedPay'}">
        网银快捷支付
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='speedPay'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
    </div>
    <div class="cfx" v-show="classes.type=='wechat'">
      <div class="class-items" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        微信转银行卡
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
      <div class="class-items" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        微信扫码
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='SM'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->
      </div>
    </div>
    <div class="cfx" v-show="classes.type=='alipay'">
      <div class="class-items" v-if="hasTranferChecked" @click="selectPayMethod('TRANFER_BANK_CARD')" :class="{active:payMethod=='TRANFER_BANK_CARD'}">
        支付宝转账
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='TRANFER_BANK_CARD'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->

      </div>
      <div class="class-items" v-if="hasSM" @click="selectPayMethod('SM')" :class="{active:payMethod=='SM'}">
        支付宝扫码
        <!-- <span v-if="infoSelect.rate4deputy&&showMenu.length==1&&payMethod=='SM'" class="rate4deputy">返赠{{infoSelect.rate4deputy}}%</span> -->

      </div>
    </div>
    <p class="title" v-show="showMenu.length>1">存款通道</p>
    <div class="cfx" v-show="showMenu.length>1">
      <div class="class-items types" @click="selectPayInfo(item)" :class="{active:item==infoSelect}" v-for="(item,key,i) in showMenu"
        :key="i">
        {{item.remark}}
        <!-- <span v-if="item.rate4deputy" class="rate4deputy">返赠{{item.rate4deputy}}%</span> -->
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getPaymentConfigInfo,
  } from "@/api/payment"
  import {
    payTypes,
    mcTypech
  } from '@/assets/data/deposit'
  import {
    mapGetters
  } from 'vuex'
  import {
    depositMenu
  } from '@/controls/money/deposit'

  export default {
    mixins: [depositMenu],
    data() {
      return {
        infoSelect: null,
        payMethod: 'SM',
        hasSM: false, // 是否有扫码
        hasTranferChecked: false, // 是否有转账
        hasspeedPay: false,
        hasunionpay: false,
        hasebank: false,
        classes: null, // 当前的class
      }
    },
    methods: {
      // 逻辑有点混乱
      selectPayInfo(info) {
        if (!info) {
          info = this.classes.data[0]
        }
        this.infoSelect = info
        if (info.payBy && (info.payBy == 'zfb' || info.payBy == 'new_zfb')) {
          // window.$alert('支付宝转账到银行卡23：00-凌晨01：00有延迟到帐现象，具体到账时间由银行方而定，建议使用其他存款方式。')
        }
        this.infoSelect = info;
        this.$emit('selectPayInfo', info)
      },
      selectPayMethod(payMethod) {
        this.payMethod = payMethod;
        this.selectActive(payMethod)
      },
      // 选择第一个支付
      selectActive(payMethod) {
        if (!payMethod) {
          return
        }
        this.classes.data.some(item => {
          if (item.payMethod == payMethod) {
            this.selectPayInfo(item)
            return true
          }
        })
      }
    },
    computed: {
      ...mapGetters(["userData"]),
      showMenu() {
        if (!this.classes) {
          return []
        }
        return this.classes.data.filter(item => {
          return item.payMethod == this.payMethod
        })
      }
    },
    watch: {
      '$route'(val) {
        console.log(this.$route)
        if (val.params && val.params.type) {}
      },
      classes(val) {
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
        _this.hasebank = val.data.some(item => {
          if (item.payMethod) {
            return item.payMethod == 'ebank'
          }
        })
        // 有转账，默认选中
        if (_this.hasTranferChecked) {
          _this.selectPayMethod('TRANFER_BANK_CARD')
        } else if (_this.hasspeedPay) {
          _this.selectPayMethod('speedPay')
        } else if (_this.hasunionpay) {
          _this.selectPayMethod('unionpay')
        } else if (_this.hasebank) {
          _this.selectPayMethod('ebank')
        } else {
          _this.selectPayMethod('SM')
        }
        // 菜单名称
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
            _this.className = '快速'
            break;
          case 'unionpay':
            _this.className = '银联'
            break;
          case 'offbank':
            _this.className = '银行'
            break;
          case 'speedPay':
            _this.className = '快捷'
            break;
        }
        _this.$bus.$emit('setBackHeader', _this.className)
      }
    },
    created() {

      if (this.$route.params.setClasses) {
        this.classes = this.$route.params.setClasses
      } else {
        if (this.$route.params.type) {
          this.getPaymentConfigInfo({
            terminalType: 1,
            separateMcpay: 1
          }).then(res => {
            // 默认选中第一个
            res.data.some(item => {
              if (item.type == this.$route.params.type) {
                this.classes = item
                return true
              }
            })
            // this.setPaytype(res.data[0])
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.$router.back();
        }
      }
    },
  };

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";

  .classes {
    margin: r(20);

    .title {
      @include f(32px);
      line-height: 2;
      color: #fff;
    }

    .class-items {
      position: relative;
      display: block;
      float: left;
      width: 45%;
      margin-right: r(20);
      background: #b6b6b6;
      text-align: center;
      padding: r(40) 0;
      border-radius: r(15);
      color: #fff;
      @include f(30px);
      margin-bottom: r(20);

      &.active {
        background: #00a0e9;
      }

      &.types {
        background: #fff;
        color: #333;
        border: solid 1px #666;

        &.active {
          background: #e1c45b;
          color: #fff;
          border: solid 1px transparent;
        }
      }
    }

    .rate4deputy {
      position: absolute;
      top: r(-20);
      word-break: keep-all;
      right: r(-50);
      @include f(24px);
      border: solid 1px #f24408;
      background: #fce36e;
      color: #f24408;
      padding: 2px 3px;
      line-height: 1;
      border-radius: 5px;
      z-index: 2;
    }
  }

</style>
