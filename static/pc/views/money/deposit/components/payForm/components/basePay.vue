<template>
    <el-form ref="form" :model="submitData" label-width="100px" :label-position="'left'" class="deposit-form" v-if="payItem" :class="{'wt-form':payItem.platformtype=='wtwx' || payItem.platformtype=='wtzfb'}">
      <!-- 支付银行，某些网银支付需要，动态读取接口 -->
      <el-form-item label="支付银行：" v-show="bankCodeData.length>0">
        <el-select v-model="submitData.bankCode" placeholder="请选择支付银行">
          <el-option :label="item.name" v-for='(item,i) in bankCodeData' :value="item.value" :key="i+item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="存款金额：" prop="order_amount" v-if="payItem.customParams&&payItem.customParams.enterMode=='FIXED_AMOUNT'">
        <span @click="submitData.order_amount=item" 
          v-for="(item,key,i) in payItem.customParams.defaultAmounts" 
          class="dep_item" :key="i" :class="{active:submitData.order_amount==item}" 
          v-if="item>=payItem.lowerlimit && item<=payItem.upperlimit">
        {{item}}元
          <span class="dep_selected icobjh bjh-dui-copy" v-show="submitData.order_amount==item"></span>
        </span>
      </el-form-item>

      <el-form-item label="存款金额：" prop="order_amount" v-else>
          <el-input class="depositInput" v-model="submitData.order_amount" :placeholder="placeholder"></el-input>
      </el-form-item>

      <el-form-item>
          <el-button @click="depositPost" type="primary">提交</el-button>
      </el-form-item>
      <el-form-item>
        <div class="tips" style="padding-top:100px;" v-if="payItem.platformtype=='wtwx' || payItem.platformtype=='wtzfb'">
          <h3>温馨提示：</h3>
            <p>1、此通道单笔最低存款要求<span style="color:red;">{{payItem.lowerlimit}}元</span>，最高<span style="color:red;">{{payItem.upperlimit}}元</span>。</p>
            <p>2、此通道必须输入指定的金额才能成功扫码存款，否则无法查看收款码，指定金额有：</p>
            <p style="color:red;">【10,20,50,100,300,500,600,800,1000,1500,3000,5000】</p>
            <p>3、存款过程中如有遇到任何问题，请及时联系24小时在线客服。</p>
        </div>
      </el-form-item>
    </el-form> 
</template> 
<script>
  import check from '@/util/RegExp'
  import {basePay} from '@/controls/money/basePay'
  export default {
    mixins:[basePay],
    data() {
      return {
        active:0,
        moneys:[10,20,50,100,300,500,600,800,1000,1500,3000,5000],
      }
    },
    watch: {
      payItem(val){
        // 变化后去请求获取银行卡
        console.log(val)
        this.getBankList(val)
        // 针对万通支付
        if(this.payItem&&(this.payItem.platformtype=='wtwx' || this.payItem.platformtype=='wtzfb')){
          this.submitData.order_amount=''
        }
      },
    },
    methods: {
      depositPost(e) {
        this.submitData.id=this.payItem.id // 赋值当前支付的id
        // 提交表单
        this.depositPostSubmit(this.submitData,this.payItem).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          window.toast(err.message)
        })
      }
    },
    props:{
      payItem:{
        type:Object,
        default:{
          platformtype:''
        }
      }
    },
    computed: {
      placeholder() {
        // 判断最高或最低提款
        if (this.payItem&&(this.payItem.lowerlimit||this.payItem.upperlimit)) {
          return "最少" + this.payItem.lowerlimit + "元，最多" + this.payItem.upperlimit + "元";
        } else {
          return "请输入存款金额";
        }
      }
    },
    created() {
      this.getBankList(this.payItem)
    },
  };

</script>
<style lang="scss" scoped>
  .wt-form{
    width:100%!important;
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
    }
  }
  .tips{
    clear:both;
    h3{

    }
    p{
      line-height:2;
      span{
        color:red;
      }
    }
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
    .depositInput{
      width: 250px;
    }
</style>