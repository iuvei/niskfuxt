<template>
  <div class="discount-code">
    <!-- <div class="discount-tips">
      优惠券代码会以站内信形式发送给您,请注意查看站内信通知。
    </div> -->

    <Form :model="data" :rules="discountRule" ref="transferForm" :label-width="110" class="discount-form">
      <!-- 游戏平台 -->
      <FormItem label="游戏平台" prop="couponType">
        <Select v-model="data.couponType" placeholder="请选择需要转入的游戏平台">
          <Option v-for="(item,key)  in platformData" :value="item.value" :key="key">{{item.name}}</Option>
        </Select>
      </FormItem>

      <!-- 转入金额 -->
      <FormItem label="转入金额" prop="couponRemit" >
        <Input v-model="data.couponRemit" type="text" placeholder="请填写转入金额"></Input>
      </FormItem>

      <!-- 优惠代码 -->
      <FormItem label="优惠代码" prop="couponCode" >
        <Input v-model="data.couponCode" type="text" placeholder="请填写优惠代码"></Input>
      </FormItem>
      <FormItem>
        <Button type="warning" @click="submitForm('transferForm')">提交</Button>
        <!--Button @click="resetForm('transferForm')">重置</Button-->
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {coupon} from '@@/controls/discount/coupon'
  export default {
    mixins:[coupon],
    data() {
      const couponType_check=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请选择游戏平台'))
        }else{
          callback();
        }
      }
      const couponRemit_check=(rule,value,callback)=>{
        if (!value) {
          return callback(new Error('请输入转入金额'));
        }else if (!/^\d+$/.test(value)) {
          return callback(new Error('请输入整数金额'));
        }else{
          callback();
        }
      }
      const couponCode_check=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入优惠代码'))
        }else{
          callback();
        }
      }
      return {
        discountRule:{
          couponType:[{validator:couponType_check,trigger:'blur'}],
          couponCode:[{validator:couponCode_check,trigger:'blur'}],
          couponRemit:[{validator:couponRemit_check,trigger:'blur'}]
        },
        tips:[
          "优惠券代码会以站内信形式发送给您,请注意查看站内信通知。"
        ]
      };
    },
    watch: {
      "data.couponRemit" (val) {
        if (/[^\d]/g.test(val)) {
          this.data.couponRemit = this.data.couponRemit.toString().replace(/[^\d]/g, '')
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.couponSubmit(this.data).then(res=>{
              window.toast(res.message)
              this.resetForm('transferForm')
            }).catch(err=>{
              console.log(err)
              window.toast(err.message)
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  };

</script>

<style lang="scss" scoped>
.discount-tips{
        color: #09affe;
        font-size: 30px;
        margin: 20px 0;
        line-height:1.5;
}
  .discount-form {
    margin-top: 30px;
    width: 500px;
    .Select {
      display: block !important;
    }
  }
</style>
