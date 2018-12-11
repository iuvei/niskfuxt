<template>
<div>
  <div class="u-level-box" v-for="(item,i) in level" :key="i">
    <p class="u-l-label">{{item.levelName}}</p>
    <span class="u-l-meter" :class="{active:userData.levelNumber>i}"></span>
    <span class="u-l-dot" :class="{active:userData.levelNumber>=i}"></span>
  </div>
</div>
</template>
<script>
  import {
    vipGold
  } from "@@/mixins/discount/vipGold";
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    mixins: [vipGold],
    data() {
      return {};
    },
    computed: {
      ...mapGetters(['validateImage', 'isLogin', 'isUser', 'isAgent', 'userData', 'wallet'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      getGameMoney() {

      },
      login() {
        this.loginSubmit(this.loginData).then(res => {
          // window.toast(res.message)
          this.$Message.success({
            content: res.message,
            closable: true
          })
        }).catch(err => {
          this.$Message.error({
            content: err.message,
            closable: true
          })
        })
        console.log('login')
      }
    },
    created() {
      this.getVipInfo(this.userData);
    },
    watch: {
      level(arr) {
        if (arr[0].level != 0) {
          arr.unshift({
            level: 0,
            levelName: "新会员",
            retainthreshold: 0,
            upgradeprize: 0,
            upgradethreshold: 0
          });
        }
      }
    },
  };

</script>
<style lang="scss" scoped>
  .u-level-box {
    display: inline-block;
    width: 100px;
    text-align: center;
    z-index: 333;
    cursor: pointer;
    position: relative;

    .u-l-label {
      font-size: 16px;
    }

    .u-l-dot {
      display: inline-block;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background: #b0b0b0;
      margin-top: 10px;
      border: 2px solid #fff;
      position: relative;

      &.active {
        background: #e07c03;
        border: 2px solid #f9d091;
      }
    }

    .u-l-meter {
      position: absolute;
      bottom: 9px;
      left: 50%;
      display: block;
      height: 10px;
      width: 100%;
      background: #292724;

      &.active {
        background: #867761;
      }
    }

    &:last-child {
      .u-l-meter {
        display: none;
      }
    }
  }

</style>
