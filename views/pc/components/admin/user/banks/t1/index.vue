<template>
  <div class="wrapcards agent-index">
    <div  v-for="item in list" class="box" :key="item.bankno">
      <div class='bank_card_info'>
        <h2 class="bankname">{{item.bankname}}</h2><span
        class="acctnumber">**** **** **** {{item.bankno}}</span><span
        class="acctname">持卡人：{{userData.accountName}}</span></div>
    </div>
    <div class="box" @click="add" v-if="list.length<3">
      <div class="add">
        <p class="text"><Icon type="ios-add-circle-outline" />添加银行卡</p>
      </div>
    </div>

    <Dialog
      title="绑定银行卡"
      :visible.sync="dialogVisible"
      width="500px">
    </Dialog>
  </div>
</template>
<script>
  import {findUserBankList, validateBankNo, bindBankNo} from "@@/api/payment"
  import {mapGetters} from 'vuex'
  import  check from "@@/utils/RegExp"
  import {bank} from "@@/mixins/common/bank"
  export default {
    mixins:[bank],
    data() {
      return {
        loadding: false,
        validateBankNo: false,
        showAdd: false,
        list: [],
        dialogVisible:false
      }
    },
    props: {
      text: {
        type: String,
        default: ""
      }
    },
    methods: {
      add(){
        if(!this.userData.accountName) {
          window.toast('请先完善个人资料!')
        }
        else {
          this.dialogVisible=true
        }
      },
    },
    computed: {
      ...mapGetters(["userData"])
    },
    mounted(){
      this.getBankList()
    },
    components:{
    }
  }
</script>
<style lang="scss" scoped>
  .wrapcards {
    overflow: hidden;
    width: 100%;
    margin: 0 auto 40px;
    padding-bottom: 40px;
    .box {
      width:50%;
      float:left;
      margin-bottom:30px;
      text-align:center;
      .bank_card_info{
        background:rgba(256,256,256,0.3);
        border-radius:6px;
        height: 188px;
        width:320px;
        display:inline-block;
        vertical-align: top;
        h2 {
          margin: 18px auto 20px;
          font-weight: normal;
          color: #FFFFFF;
          font-size: 16px;
          padding: 15px 20px;
          border-bottom: solid 1px #fff;
          display: block;
          font-size: bold;
        }
        .acctnumber, .acctname {
          font-weight: normal;
          color: #fff;
          font-size: 16px;
          margin-left: 18px;
          display: block;
          margin-top: 20px;
        }
      }
      .add{
        height: 188px;
        width:320px;
        display:inline-block;
        border: solid 1px #ccc!important;
        cursor: pointer;
        background:rgba(256,256,256,0.3);
        border-radius: 18px;
        color:#a8a8a8;
        .text{
          margin-top:22%;
          font-size:16px;
          .iconyg{
            display:inline-block;
            // margin-top:20px;
            font-size:30px;
            color: #ed7e12;
            margin-right: 10px;
          }
        }
      }

    }
  }

</style>
