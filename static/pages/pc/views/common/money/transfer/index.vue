<template>
  <div class="u-c-shows">
    <div class="transfer-info">
        <el-form :model="data" ref="transferForm" label-width="140px" class="draw-form">
          <!-- 转出账户 -->
          <el-row>
            <el-col :span="8">
              <el-form-item label="转出账户：" prod="transferGameOut">
                <el-select v-model="data.transferGameOut" placeholder="请选择需要转出的账户">
                  <el-option :label="item.name" v-for="item  in Money" :value="item.value" :key="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8"><span class="tips">{{wallet[data.transferGameOut]}}</span></el-col>
          </el-row>
          <!-- </div> -->

          <!-- 转入的账户 -->
          <el-row>
            <el-col :span="8">
              <el-form-item label="转入账户：" prod="transferGameIn">
                <el-select v-model="data.transferGameIn" placeholder="请选择需要转入的账户">
                  <el-option :label="item.name" v-for="item  in Money" :value="item.value" :key="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8"><span class="tips">{{wallet[data.transferGameIn]}}</span></el-col>
          </el-row>


          <!-- 转账金额 -->
          <el-form-item label="转账金额：" prop="transferGameMoney">
            <el-input v-model.number="data.transferGameMoney" type="number" placeholder="请输入转账金额"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="submitbtn" @click="submitForm('transferForm')">提交</el-button>
            <el-button @click="resetForm('transferForm')">重置</el-button>
          </el-form-item>

        </el-form>
      <tips></tips>
      </div>
    </div>
</template>
<script>
  import {    mapGetters  } from 'vuex'
  import {    Money  } from "@/assets/data"
  import {transfer} from '@/controls/money/transfer'
  import tips from './components/tips'
  export default {
    mixins:[transfer],
    data() {
      return {
        Money,
      };
    },

    computed: {
      ...mapGetters(["userData","wallet"])
    },
    methods: {
      submitForm(formName) {
        this.drawSuccess = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.transferSubmit(this.data).then(res=>{
              window.toast(res.message)
              this.resetForm('transferForm')
            }).catch(err=>{
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
    components:{
      tips
    }
  }

</script>
<style lang="scss" scoped>
.transfer-info{
  background-color: rgba(0, 0, 0, 0.70);
  border: 1px solid #333333;
  .el-alert--info {
    background-color: #121013;
    color: #f6d48d;
    .colMoney {
      color: #ffcf32;
    }
  }
  .el-input{
    width: 250px;
  }
  .transact_top {
    height: 70px;
    line-height: 35px;
    width: 800px;
    text-align: center;
    font-size: 24px;
  }

  .draw-form {
    margin-top: 30px;
    .gameOutZone{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 0 0 20px 20px;
      .gameOut{
        cursor: pointer;
        width: 170px;
        padding: 20px 10px;
        background: rgba(64,59,58,0.55);
        position: relative;
        margin: 5px 25px 5px 0;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        border: 1px solid transparent;
        .gameOutName{
          color: #fff;
          flex: 1;
          text-align: left;
          font-size: 15px;
        }
        .gameOutMoney{
          color: #8d3e3c;
          font-size: 15px;
        }
        .iconyg{
          color: #8d3e3c;
        }
        .checked{
          display: none;
          border-width: 10px;
          border-color: transparent #8d3e3c #8d3e3c transparent;
          border-style: solid;
          width: 0;
          height: 0;
          position: absolute;
          right: 0;
          bottom: 0;
          .gouzi{
            color: #fff;
          }
        }
        &.active{
          border: 1px solid #8d3e3c;
          .checked{
            display: block;
          }
          .xuanzhuan{
            &.yg-f14:before{
              -webkit-animation:rotateImg 1s linear infinite;
              animation: rotateImg 1s linear infinite;
              display: inline-block;
            }
          }
        }
      }
    }
    .gameInZone{
      width: 100%;
      padding-left: 20px;
    }
    .tips{
      font-size: 16px;
      line-height: 33px;
      padding-left: 5px; 
      color: #fff;
      
    }
  }

  .transfer-info {
    .tips {
      position: absolute;
      left: 105%;
      top: 0;
      word-break: keep-all;
    }
  }
  .submitbtn{
    background: #8d3e3c;
    background: -moz-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: -webkit-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: -o-linear-gradient(to right,#8d3e3c,#bb4e49);
    background: linear-gradient(to right,#8d3e3c,#bb4e49);
    border: 1px solid #8d3e3c;
    color: #fff;
  }
}
  @keyframes rotateImg {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes rotateImg {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
</style>
