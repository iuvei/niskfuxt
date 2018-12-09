<template>
  <div class="red-envelope">
    <!-- <div class="enve-tips">
      红包代码会以站内信形式发送给您,请注意查看站内信通知。
    </div> -->

    <Form :model="data" :rules="discountRuleRed" ref="transferFormRed" :label-width="110" class="discount-form">
      <!-- 游戏平台 -->
      <FormItem label="游戏平台" prop="couponType">
        <Select v-model="data.couponType" placeholder="请选择需要转入的游戏平台">
          <Option v-for="(item,key)  in platformData" :value="item.value" :key="key">{{item.name}}</Option>
        </Select>
      </FormItem>

      <!-- 优惠代码 -->
      <FormItem label="优惠代码" prop="couponCode" >
        <Input v-model="data.couponCode" type="text" placeholder="请填写红包优惠代码"></Input>
      </FormItem>

      <FormItem>
        <Button type="warning" @click="submitForm('transferFormRed')">提交</Button>
        <!--Button @click="resetForm('transferFormRed')">重置</Button-->
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {couponRed} from "@@/controls/discount/couponRed"
  export default {
    mixins:[couponRed],
    data() {
      const couponType_check_red=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请选择游戏平台'))
        }else{
          callback();
        }
      }
      const couponCode_check_red=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入红包优惠代码'))
        }else{
          callback();
        }
      }
      return {
        data: {
          couponType: "", // 转入平台类型
          couponCode: ""// 红包代码
        },
        discountRuleRed:{ 
          // 验证规则配置
          couponType:[{validator:couponType_check_red,trigger:'blur'}],
          couponCode:[{validator:couponCode_check_red,trigger:'blur'}],
        }, 
        tips:[
          "红包代码会以站内信形式发送给您,请注意查看站内信通知。"
        ]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.couponSubmit(this.data).then(res=>{
              window.toast(res.message)
            }).catch(err=>{
              console.log(err)
              window.toast(err.message)
            })
            // this.submit(this.data)
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
.enve-tips{
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