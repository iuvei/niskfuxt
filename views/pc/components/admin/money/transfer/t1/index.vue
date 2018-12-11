<template>
    <div class="transfer-info">
      <div class="transfer-main">
        <div class="transfer-p">
          <p>主账户余额：<span style="color:red;">{{wallet['MAIN']}}</span>元</p>
          <Button @click="transferAll_Modal=true" type="warning">资金一键归回主账户</Button>
        </div>
        <div class="transfer-list">
          <ul class="platforms cfx">
            <li @click="setItem(item)" v-for="item in Money" :key="item.key" :class="{active:item.value==selectPlatform.value}">
              <p>{{item.name}}</p>
              <p>余额：
                <span class="red" v-if="wallet[item.value]&&wallet[item.value].toString()">{{wallet[item.value]}}<i>元</i></span>
                <span v-else-if="loading[item.value]">查询中...</span>
                <span v-else>点击查询</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="cfx"></div>
        <Form :model="data" ref="transferForm" :label-width="110" class="transfer-form" v-if="selectPlatform.value!='DEPUTY'">
          <!-- 转账金额 -->
          <FormItem label="选择转账平台：" prop="transferGameMoney" style="font-size: 20px;">
            <h2 class="blue">{{selectPlatform.name}}</h2>
          </FormItem>
          <!-- 转账金额 -->
          <FormItem label="输入转账金额：" prop="transferGameMoney">
            <Input v-model.number="data.transferGameMoney" placeholder="请输入转账金额，最少1元，只能整数"></Input>
          </FormItem>
          <!-- 按钮 -->
          <FormItem>
            <Button type="warning" @click="transfer(1)">从主账户转入</Button>
            <Button type="info" @click="transfer(2)">转出至主账户</Button>
          </FormItem>
        </Form>

        <Form :model="data" ref="transferForm" :label-width="110" class="transfer-form" v-if="selectPlatform.value=='DEPUTY'">
          <!-- 转账金额 -->
          <FormItem label="输入转账金额：" prop="transferGameMoney">
            <Input v-model.number="data.transferGameMoney" placeholder="请输入转账金额,最低3元"></Input>
          </FormItem>
          <!-- 转入的账户 -->

          <FormItem label="选择转入平台：" prod="transferGameIn">
            <Select v-model="data.transferGameIn" placeholder="请选择需要转入的游戏平台">
              <Option :label="item.name" v-for="item  in deputyMoney" :value="item.value" :key="item.value"></Option>
            </Select>
          </FormItem>
          <!-- 按钮 -->
          <FormItem>
            <Button type="warning" @click="transfer(3)">确认转入</Button>
          </FormItem>
        </Form>

      </div>
      <Modal v-model="transferAll_Modal" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>温馨提示</span>
        </p>
        <div style="text-align:center">
          <p style="text-align:left;font-size:14px;">1，游戏平台余额只会回收整数部分。</p>
          <p style="text-align:left;font-size:14px;">2，领取优惠但未完成流水的游戏余额不会被归集。</p>
          <p style="text-align:left;font-size:14px;">3，资金归集可能需要较长时间，请耐心等待。</p>,
        </div>
        <div slot="footer">
          <Button type="warning" size="large" long :loading="transferAll_Post" @click="transferAll">提交</Button>
        </div>
      </Modal>
    </div>
</template>
<script>
  import {
    getGameMoney,
    getMoneyAll
  } from "@@/api/user";
  import openWindow from "@@/utils/openWindow";
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from "vuex";
  import GAMES from '@@/assets/data/gamesData.json'

  import {
    transfer
  } from "@@/mixins/money/transfer";
  import {
    updateGameMoney
  } from "@@/api/payment";
  export default {
    mixins: [transfer],
    data() {
      return {
        Money: GAMES.filter(item => {
          return item.value != "MAIN" && item.value != "SLOT" && item.value != "LIVEALL";
        }),
        deputyMoney: GAMES.filter(item => {
          return item.value != "MAIN" && item.value != "SLOT" && item.value != "LIVEALL";
        }),
        loading: {},
        transferAll_Modal: false,
        transferAll_Post: false,
        selectPlatform: {
          name: "",
          value: ""
        }
      };
    },

    computed: {
      ...mapGetters(["userData", "wallet"])
    },
    methods: {
      ...mapActions(["UPDATE_MONEY"]),
      setItem(item) {
        this.getGameMoney(item.value);
        this.selectPlatform = item;
      },
      getGameMoney(val) {
        this.loading[val] = true;
        this.UPDATE_MONEY(val)
          .then(res => {
            this.loading[val] = false;
          })
          .catch(err => {
            this.loading[val] = false;
          });
      },
      transferAll() {
        // 确认，发出归集请求
        const postData = {
          transferGameOut: "ALL_V2",
          transferGameIn: "MAIN",
          transferGameMoney: 0
        };
        // 查看进度按钮
        this.transferAll_Post = true
        updateGameMoney(postData).then(res => {
            if (res.success) {
              this.$bus.$emit('showTransferProce', true)
              window.toast(res.message)
            } else {
              window.toast(res.message)
            }
            this.transferAll_Post = false
          })
          .catch(err => {
            window.toast(err.message)
            this.transferAll_Post = false
          });

      },
      transfer(n) {
        switch (n) {
          case 1:
            this.data.transferGameOut = "MAIN";
            this.data.transferGameIn = this.selectPlatform.value;
            break;
          case 2:
            this.data.transferGameOut = this.selectPlatform.value;
            this.data.transferGameIn = "MAIN";
            break;
          case 3:
            this.data.transferGameOut = this.selectPlatform.value;
            break;
          default:
            return toast("请重新选择");
        }
        // =============================================================================== //
        if (
          this.GameOutMoney != "" &&
          this.data.transferGameMoney - this.GameOutMoney > 0
        ) {
          return toast("转出金额不足");
        } else if (!this.data.transferGameOut) return toast("请选择转出账户");
        else if (!this.data.transferGameIn) return toast("请选择转入账户");
        else if (
          !this.data.transferGameMoney ||
          !/^[0-9]*$/.test(this.data.transferGameMoney)
        )
          return toast("请正确输入转账金额");
        // 提交表单
        updateGameMoney(this.data)
          .then(res => {
            if (res.success) {
              window.$toast(res.message)
            } else {
              window.$toast(res.message);
            }
          })
          .catch(err => {
            console.log(err);
            // toast("转入失败");
          });
      }
    },
    components: {}
  };

</script>
<style lang="scss" scoped>
    .transfer-info {
      height: 1130px;

      .transfer-main {
        .transfer-p {
          font-size: 17px;
          line-height: 38px;
          margin-top: 10px;

          p {
            padding-left: 10px;
            display: inline-block;

            span {
              color: #bb4e49;
            }
          }
        }

        .transfer-list {
          width: 100%;
          height: 385px;

          ul {
            li {
              border: 1px solid #b5b5b5;
              border-radius: 5px;
              font-size: 18px;
              width: 138px;
              height: 55px;
              text-align: left;
              float: left;
              margin: 10px;
              cursor: pointer;
              padding-left: 15px;
              transition: all 0.5s;

              p {
                &:nth-child(2) {
                  font-size: 14px;
                  padding-top: 5px;

                  span {
                    color: #009fe1;
                  }

                  .red {
                    color: #e80505;

                    i {
                      font-style: normal;
                      color: #333;
                    }
                  }
                }
              }

              &:hover,
              &.active {
                border: 1px solid #e58f0b;
              }
            }
          }
        }

        .transfer-form {
          width: 500px;
        }
      }
    }

</style>
