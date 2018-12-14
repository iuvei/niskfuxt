<template>
    <div class="other-game-list cfx">
        <a v-for="(item,i) in items" class="gameImg" :key="i+item.name" @click="open(item.href, item.name, 900, 640, true, islogin)">
            <img :src="item.imgsrc" :alt="item.name">
            <div class="div-text cfx">
                <span class="span-text fl">{{item.name}}</span>
                <span class="span-btn fr">进入游戏</span>
            </div>
        </a>
        <router-link :to="{name:'chessHall',params:{type:'MWQP'}}" class="gameImg" v-if="this.value == 'chess'">
            <img src="./images/mwchess.png" alt="">
            <div class="div-text cfx">
                <span class="span-text fl">大满贯棋牌</span>
                <span class="span-btn fr">进入游戏</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import openWindow from '@/util/openWindow'
import {mapGetters} from 'vuex'
import {Games} from "@/assets/data"

const real = [
    {name: "AG真人", href: Games.href_ag, imgsrc:require('./images/ag.png')},
    {name: "BBIN真人", href: Games.href_bbin, imgsrc:require('./images/bbin.png')},
    {name: "申博真人", href: Games.href_sunbetH5, imgsrc:require('./images/sunbet.png')},
    // {name: "OG真人", href: Games.href_og, imgsrc:require('./images/og.png')},
    {name: "AG捕鱼", href: Games.href_fish_ag, imgsrc:require('./images/agfish.png')},
    {name: "大满贯捕鱼", href: Games.href_fish_mw_mobile, imgsrc:require('./images/mwfish.png')},
]
const sport = [
    {name: "沙巴体育", href: Games.href_sb_mobile, imgsrc:require('./images/sbsport.png')},
    // {name: "新皇冠体育", href: Games.href_ug_mobile, imgsrc:require('./images/ugsport.png')},
    // {name: "BTI体育", href: Games.href_bti, imgsrc:require('./images/btisport.png')},
    {name: "泛亚电竞", href: Games.href_avia, imgsrc:require('./images/fanya.png')},
]
const chess = [
    {name: "开元棋牌", href: Games.href_kyqp, imgsrc:require('./images/kyqp.png')},
    {name: "761棋牌", href: Games.href_city761, imgsrc:require('./images/761qp.png')},
]
const lottery = [
    {name: "VR彩票", href: Games.href_vr, imgsrc:require('./images/vrcp.png')},
    {name: "BBIN彩票", href: Games.href_bbcp, imgsrc:require('./images/bbincp.png')},
    // {name: "IG时时彩", href: Games.href_ig_ssc_mobile, imgsrc:require('./images/ig1.png')},
    // {name: "IG香港彩", href: Games.href_ig_hk_mobile, imgsrc:require('./images/ig2.png')},
]
export default {
    data(){
        return{
            items:[]
        }
    },
    methods: {
        open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState)
        },
    },
    computed: {
        ...mapGetters(["islogin"])
    },
    props:{
        value:String
    },
    watch:{
        value(val){
            switch (val) {
            case 'real':
                this.items = real;
                break;
            case 'sport':
                this.items = sport;
                break;
            case 'chess':
                this.items = chess;
                break;
            default:
                this.items = lottery;
            }
        }
    }
}
</script>

<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.other-game-list{
    display: flex;
    flex-flow: row wrap;
    padding: 0 r(20);
    border-radius:r(25); 
    .gameImg{
        width: 46%;
        display: block;
        margin: r(20) 2%;
        background: $main-bg;
        img{
            width: 100%;
        }
    }
    .div-text {
        padding: r(20) r(10);
        .span-text {
            @include f(28px);
            color: #ffffff;
            display: inline-block;
            height: r(50);
            line-height: r(50);
        }
        .span-btn {
             @include f(28px);
             color: $iconcl;
             background:#f4faff;
             border-radius: r(25);
             padding: r(8) r(16);
        }
    }
}
</style>

