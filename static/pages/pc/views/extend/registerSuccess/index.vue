<template>
    <div class="sign-up-wrapper clearfix">
        <div class="sign-up-success">
            <div class="success-tit">
                <h2><i class="iconfont icon-duigou11"></i>恭喜您，成为{{WEBCONFIG.title}}尊贵的会员！</h2>
                <p>
                    您的账号为：{{userData.loginname}}&nbsp; 账户余额：{{wallet['MAIN']}}元 <router-link :to="{name:'deposit'}">立即存款</router-link>
                </p>
            </div>

            <div class="promotion-list">
                <div class="item" v-for="item in items" :key="item.id">
                    <router-link :to="{name:'promosIndex'}">
                        <p>
                            <img v-lazy="item.activityImageUrl"  :alt="item.activitySummary" :title="item.activitySummary">
                        </p>
                        <div class="promotion-desc">
                            <h1 class="promotion-tit">{{item.activityTitle}}</h1>
                            <button class="btn-info">显示详情</button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {promos} from '@/controls/shows/promos'
import {queryLatestPreferential} from '@/api/show'
import { mapGetters,mapActions } from 'vuex'
import {    SETTING,WEBCONFIG  } from '@/assets/data'
export default {
    mixins:[promos],
    data(){
        return{
            SETTING,
            WEBCONFIG,
            items:[],
        }
    },
    computed: {
        ...mapGetters(['userData',"wallet"])
    },
    methods: {
        ...mapActions(['UPDATE_MONEY']),
    },
    created() {
        this.getPromos('pc').then(res=>{
            // 设置菜单
            // this.$bus.$emit('setProMenu',res.data.types)
            this.items = res.data.records.slice(0,3)
        }).catch(err=>{
            window.toast(err.message)
        })
    },
}
</script>

<style lang="scss" scoped>
a {
    color: #ddd;
}

.sign-up-wrapper {
    color: #ddd;
    height: 1026px;
    background: url("./images/sign-up-bg.jpg?v2") no-repeat center;
}


/*注册成功页面*/
.sign-up-success{
    width:1000px;
    margin:0 auto;
    color:#fff;
    padding-top:120px;
}
.success-tit{
    background:#1d1f21;
    padding:40px 0;
    text-align: center;
}
.success-tit h2{
    font-size:20px;
}
.success-tit i{
    font-size:50px;
    display: inline-block;
    vertical-align: middle;
    margin-right:15px;
    color: #09bb07;
}
.success-tit p{
    font-size:18px;
    margin-top:30px;
}
.success-tit p a{
    color:#fede9a;
    margin-left:10px;
    transition:.3s;
    -webkit-transition:.3s;
}

.success-tit p a:hover{
    text-decoration: underline;
    opacity: .9;
}

.promotion-list{
    background:#1d1f21;
    padding:30px;
    overflow: hidden;
    margin-top:30px;
}
.promotion-list .item{
    float: left;
    height:240px;
    margin-right:20px;
    position: relative;
    overflow: hidden;
}
.promotion-list img{
    transition: .3s;
    -webkit-transition: .3s;
}
.promotion-list .item:hover img{
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
}
.promotion-list .item:last-child{
    margin:0;
}
.promotion-desc {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 50px;
    background: #313337;
}
.promotion-tit {
    float: left;
    padding-left: 10px;
    color: #fff;
    width: 190px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.btn-info {
    float: right;
    width: 80px;
    line-height: 30px;
    background: #d3b066;
    color: #333;
    margin: 10px;
    border-radius: 3px;
    font-size: 15px;
}
</style>

