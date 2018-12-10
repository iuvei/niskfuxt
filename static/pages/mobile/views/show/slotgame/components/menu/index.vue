<template>
<div>
    <div class="slotgameContent" :class="{isApp:$route.meta.isAPP==true}">
        <div class="slotgameBox" v-for="item in Types" :class="{active:cur==item.key}" @click="search(item)" :key="item.key">
            {{item.name}}
        </div>
    </div>
    <div class="padding-top"></div>
</div>
</template>

<script>
import {Games} from "@/assets/data"
export default {
    data() {
        return{
            cur: "slot",
            Types:[
            {
                name:'真人',
                key:'real'
            },
            {
                name:'体育',
                key:'sport'
            },
            {
                name:'棋牌',
                key:'chess'
            },
            {
                name:'捕鱼',
                key:'fish'
            },{
                name:'彩票',
                key:'lottery'
            },
            {
                name:'老虎机',
                key:'slot'
            }
            ],
        }
    },
    methods:{
        search(item){
            this.cur = item.key
            this.$emit('fromMenu',item.key);
        }
    },
    created() {
      if(this.$route.query&&this.$route.query.platType){
        this.cur=this.$route.query.platType.toLowerCase();
        this.$emit('fromMenu',this.cur);
      }
    },
    // created(){
    //     this.search(this.data.category)
    // }
}
</script>

<style lang="scss" scoped>
    @import "~mobile/assets/scss/mixin.scss";
    .slotgameContent{
        width: 100%;
        background-color: #24232b;
        height: r(100);
        line-height: r(74);
        text-align: center;
        position: fixed;
        z-index: 122;
        top: r(100);
        display: flex;
        border-bottom: 1px solid #2b2b2b;
        &.isApp {
            top: r(0);
        }
        .slotgameBox{
            padding: r(10);
            display: block;
            @include f(24px);
            color: rgba(114,114,114,1);
            flex:1;
            &.active{
                color: #e5c77a;
                border-bottom: 3px solid #e5c77a;
            }
        }
    }
        .padding-top{
            height:r(100);
            width:100%;
            display:block;

        }
</style>

