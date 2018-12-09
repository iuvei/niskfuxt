<template>
  <div class="u-c-shows">
    <div class="u-c-menu">
      <a class="u-c-router active">
        <span class="icobjh bjh-zhuanzhang"></span>转账</a>
    </div>
    <div class="u-c-box">
      <div class="transfer-info">
        <el-alert title="" :closable="false">
          <!-- 也可能会显示代理提款 -->
          <div class="transact_top">
            <p class="col1">主账户总余额：
              <span class="">{{wallet['MAIN']}}</span>
              <span class="transferAll" @click="transferAll">资金一键归户</span>
            </p>
            <p class="col1">副账户总彩金余额：
              <span class="">{{wallet['DEPUTY']}}</span>
            </p>
          </div>
        </el-alert>

        <el-form :model="data" ref="transferForm" label-width="100px" class="draw-form">

          <!-- 转出账户 -->
          <el-form-item label="转出账户" prod="transferGameOut">
            <el-select v-model="data.transferGameOut" placeholder="请选择需要转出的账户">
              <el-option :label="item.name" v-for="item  in Money" :value="item.value" :key="item.value"></el-option>
            </el-select>
            <span class="tips">{{wallet[data.transferGameOut]}}</span>
          </el-form-item>
          <!-- </div> -->

          <!-- 转入的账户 -->
          <el-form-item label="转入账户" prod="transferGameIn">
            <el-select v-model="data.transferGameIn" placeholder="请选择需要转入的账户">
              <el-option :label="item.name" v-for="item  in Money" :value="item.value" :key="item.value" v-if="item.value!=data.transferGameOut"></el-option>
            </el-select>
            <span class="tips">{{wallet[data.transferGameIn]}}</span>
          </el-form-item>

          <!-- 转账金额 -->
          <el-form-item label="转账金额：" prop="transferGameMoney">
            <el-input v-model.number="data.transferGameMoney" type="number" placeholder="请输入转账金额"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('transferForm')">提交</el-button>
            <el-button @click="resetForm('transferForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="trans-tips" style="padding-top:100px;">
          <h3>温馨提示：</h3>
            <p>1.请在户内转账前进行<span>平台激活</span>方可成功转账。<span>进入游戏平台后任意选择游戏进入即可激活</span></p>
            <p>2.户内转账只支持<span>整数转账</span>，主账户最低转账金额为<span>1元；副账户彩金最低转账金额为5元；</span></p>
            <p>3.进行户内转账时，请您先关闭正在进行的游戏页面，避免出现错误；</p>
            <p>4.如无法顺利转账，请及时联系在线客服。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Money } from "@/assets/data";
import { transfer } from "@/controls/money/transfer";
import { updateGameMoney } from "@/api/payment";
export default {
  mixins: [transfer],
  data() {
    return {
      Money,
      showProcessBtn: false,
      dialogVisible: false,
      tableData: []
    };
  },
  computed: {
    ...mapGetters(["userData", "wallet"])
  },
  methods: {
    closeDetail() {
      this.dialogVisible = false;
      this.getGameMoney("MAIN");
      this.getGameMoney(this.data.transferGameOut);
      this.getGameMoney(this.data.transferGameIn);
    },
    transferAll() {
      window.$confirm(
        '<p style="text-align:left;">1.游戏平台余额只会回收整数部分。<br/>2.领取优惠但未完成流水的游戏余额不会被归集。<br/>3.资金归集可能需要较长时间，请耐心等待。</p>',
        "温馨提示",
        {
          confirmText: "确认",
          cancelText: "取消"
        }
      ).then(
        () => {
        // 确认，发出归集请求
        window.setTimeout(()=>{
          const postData = {
            transferGameOut: "ALL_V2",
            transferGameIn: "MAIN",
            transferGameMoney: 0
          };
          // 查看进度按钮
            updateGameMoney(postData).then(res => {
                if (res.success) {
                  this.$bus.$emit('showTransferProce',true)
                  window.toast(res.message)
                } else {
                  window.toast(res.message)
                }
              })
              .catch(err => {
                window.toast(err.message)
              });
          },300)
        },
        () => {

          // 取消，查看订单
        });

    },
    submitForm(formName) {
      this.drawSuccess = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.transferSubmit(this.data)
            .then(res => {
              window.toast(res.message);
              this.resetForm("transferForm");
            })
            .catch(err => {
              window.toast(err.message);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.transact_top {
  height: 70px;
  line-height: 35px;
  width: 800px;
  text-align: center;
  font-size: 24px;
  .transferAll {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    position: absolute;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    color: #343434;
    background: #ffecb7;
    box-shadow: 0 0 3px 1px #ccc;
    transition: all 0.3s;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ffecb7),
      to(#ffd178)
    );
    background: linear-gradient(to bottom, #ffecb7 0%, #ffd178 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
    &:hover {
      transform: scale(1.1);
    }
  }
}

.draw-form {
  margin-top: 30px;
  width: 500px;
  .el-select {
    display: block !important;
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
.trans-tips {
  clear: both;
  h3 {
  }
  p {
    line-height: 2;
    span {
      color: red;
    }
  }
}
</style>
