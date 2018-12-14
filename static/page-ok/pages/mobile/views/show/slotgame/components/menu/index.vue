<template>
    <div class="slotgameContent">
        <div class="slotgameBox" v-for="item in data" :class="{active:cur==item.value}" @click="search(item.value)" :key="item.value">
            {{item.name}}
        </div>
    </div>
</template>

<script>
import {Games} from "@/assets/data"
export default {
    data() {
        return{
            cur: "slot",
            data: {
                slot: {
                    name: "老虎机",
                    value: "slot",                  
                },
                real: {
                    name: "真人/捕鱼",
                    value: 'real',                  
                },
                sport:{
                    name: "体育/电竞",
                    value: 'sport',
                },
                chess:{
                    name: "棋牌游戏",
                    value: 'chess',
                },
                lottery:{
                    name: "彩票游戏",
                    value: 'lottery',
                }
            }
        }
    },
    methods:{
        search(item){
            this.cur = item
            this.$emit('fromMenu',item);
        }
    },
    created(){        
        let type = this.data.slot.value ;
        if(this.$route.params.type){
            type = this.$route.params.type
        }
        this.search(type)
    }
}
</script>

<style lang="scss" scoped>
    @import "~mobile/assets/scss/mixin.scss";
    .slotgameContent{
        width: 100%;
        height: r(100);
        text-align: center;
        position: fixed;
        top: r(100);
        z-index: 99;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: r(20);
        background: $body-bg;
        .slotgameBox{
            width: 19%;
            padding:r(15) r(10);
            display: inline-block;
            @include f(24px);
            color:#090e1d;
            background:#f4faff;
            border-radius: r(25);
            &.active{
                color: #f4faff;
                background-color: #ff5544;
                background-image:linear-gradient(-51deg, #ff5544 0%, #ff3751 100%);
            }
        }
    }
</style>

