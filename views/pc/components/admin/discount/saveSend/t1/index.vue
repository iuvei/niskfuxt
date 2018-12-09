<template>
  <div class="save-send">
    <Form :model="submitData" ref="transferForm" :rules="saveSendRules" :label-width="110" class="discount-form">
      <!-- 游戏平台 -->
      <br/>
      <FormItem label="游戏平台">
        <Select v-model="Type" placeholder="请选择需要转入的游戏平台">
          <Option :label="item.name" v-for="(item,i)  in platformData" :value="item.value" :key="i"></Option>
        </Select>
      </FormItem>
      <!-- 优惠幅度 -->
      <FormItem label="优惠幅度" prop="youhuiConfigId">
        <Select v-model="submitData.youhuiConfigId" placeholder="请先选择转入的游戏平台">
          <Option :label="item.name" v-for="item  in listData" :value="item.id" :key="item.id" v-if="item.platform==Type"></Option>
        </Select>
      </FormItem>
      <!-- 转入金额 -->
      <FormItem label="转入金额" prop="remit">
        <Input v-model.number="submitData.remit" placeholder="请输入转入金额"></Input>
      </FormItem>

      <!-- 可获得红利 -->
      <FormItem label="可获得红利">
        <Input v-model.number="percentMoney" readonly placeholder="选择优惠幅度后自动计算"></Input>
      </FormItem>

      <!-- 倍数 -->
      <FormItem label="流水倍数">
        <Input v-model="betMultiples" readonly placeholder="选择优惠幅度后自动计算"></Input>
      </FormItem>

      <!-- 取款流水要求 -->
      <FormItem label="取款流水要求">
        <Input v-model.number="limitMoney" readonly placeholder="选择优惠幅度后自动计算"></Input>
      </FormItem>

      <FormItem>
        <Button type="warning" @click="submitForm('transferForm')">提交</Button>
        <!--Button @click="resetForm('transferForm')">重置</Button-->
        <nuxt-link class="formbtn btn-reset" :to="{name:'user_datum'}" v-if="userData.phoneValidStatus=='0'">
          <Button type="text">验证手机号码</Button>
        </nuxt-link>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {    mapGetters  } from "vuex"
  import {saveSend} from '@@/controls/discount/saveSend'
  export default {
    mixins:[saveSend],
    data() {
      const youhuiConfigId_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请选择优惠方案'));
        } else {
          callback();
        }
      };
      const remit_check = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入转入金额'));
        } else if (!/^\d+$/.test(value)) {
          return callback(new Error('请输入整数金额'));
        } else {
          callback();
        }
      };
      return {
        // 规则
        saveSendRules: {
          youhuiConfigId: [{
            validator: youhuiConfigId_check,
            trigger: 'blur'
          }],
          remit: [{
            validator: remit_check,
            trigger: 'blur'
          }],

        },
      }
    },

    methods: {
      submitForm(formName) {
        this.drawSuccess = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.saveSendSubmit(this.submitData).then(res=>{
              window.toast(res.message)
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
    },
    computed: {
      ...mapGetters(["userData"]),
      // betMultiples(){
      //   this.listData.filter(item=>{
      //     return item.id=this.submitData.youhuiConfigId
      //   })
      // }
    },
    mounted() {
      this.getYouHui().then(res=>{

      }).catch(err=>{
        window.toast(err.message)
      })
      // this.phoneCheck();
    }
  };

</script>
<style lang="scss" scoped>
  .discount-form {
    margin-top: 30px;
    width: 500px;
    .Select {
      display: block !important;
    }
  }
</style>
