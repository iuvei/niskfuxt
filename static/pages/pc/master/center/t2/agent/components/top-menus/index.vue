<template>
  <div v-if="isAgent" class="mainDev content">
      <router-link class="gameDev" v-for="item in gamebox" :key="item.name" :to="{name: item.routerName}">
            <div class="name">{{item.name}}</div>
            <div class="triangle-right"></div>
      </router-link>
  </div>
</template>
<script>
  import {    mapGetters,    mapActions  } from 'vuex'

  export default {
    data() {
      return {
        searchMoney:'',
        showMoney:'刷新余额',
        gamebox:[
            {name:'数据汇总',routerName:'agent_summary'},
            {name:'佣金报表',routerName:'agent_ptcommission'},
            {name:'会员列表',routerName:'agent_memberlist'},
            {name:'会员帐务',routerName:'agent_memberbill'},
            {name:'额度记录',routerName:'agent_creditlog'},
            {name:'个人中心',routerName:'agentDetail'},
            {name:'申请提款',routerName:'agent_drawmoney'},
            {name:'站内信',routerName:'agent_message'},
            // {name:'绑定银行卡/折号',routerName:'agent_banks'},
        ],
      };
    },
    props: {},
    methods: {
      ...mapActions(["LOGIN_OUT"]),
    },
    computed: {
      ...mapGetters(["userData","isAgent","unread"]),
    },
    created() {
    },
    components: {},
    watch: {

    }
  };

</script>
<style lang="scss" scoped>
    .mainDev{
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        height: 60px;
        // overflow: hidden;
        margin-bottom: 20px;
        display: flex;
        margin-top: 20px;
        .gameDev{
            border-right: 1px solid #303030;
            position: relative;
            // width: 11%;
            flex: 1;
            flex-wrap: wrap;
            justify-content: flex-start;
            display: inline-block;
            text-align: center;
            .name{
                font-size: 17px;
                top: 50%;
                position: absolute;
                width: 100%;
                transform: translateY(-50%);
            }
            .money{
                color: #ecf4f2;
                font-size: 16px;
                margin-top: 12px;
            }
            &.active {
                border-bottom: 3px solid #a54643;
                // background: #8d3e3c; /* Old browsers */
                // background: -moz-linear-gradient(left,  #8d3e3c 0%, #bb4e49 100%); /* FF3.6-15 */
                // background: -webkit-linear-gradient(left,  #8d3e3c 0%,#bb4e49 100%); /* Chrome10-25,Safari5.1-6 */
                // background: linear-gradient(to right,  #8d3e3c 0%,#bb4e49 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8d3e3c', endColorstr='#bb4e49',GradientType=1 ); /* IE6-9 */
                color: #973f3d;
                .triangle-right{
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -20px;
                    width: 0;
                    height: 0;
                    border: 10px solid;
                    border-color: #a54643 transparent transparent transparent;
                }
            }
        }
        .gameDev:nth-child(9){
            border-right: none;
        }
        .next{
            width: 2.5%;
            background: #8d3e3c;
            display: inline-block;
            height: 80px;
            vertical-align: top;
            .ico-pre{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              border-color: transparent #8d3e3c transparent transparent;
              /* top: 40px; */
              margin-top: 30px;
            }
            .ico-next{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              border-color: transparent transparent transparent #8d3e3c;
              margin-left: 10px;
              /* top: 40px; */
              margin-top: 30px;
            }
        }
    }
</style>
