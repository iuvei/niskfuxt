<template>
    <div class="mainbtn">
        <router-link v-for="item in items" :to="{name:item.to}" :key="item.to" class="pointer">
            <div class="btn">
                <i class="mr5" :class="item.ico"></i>{{item.text}}
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {text:'存送优惠',ico:'iconyg yg-youhuiquan1',to:"discount_savesend"},
                {text:'洗码',ico:'iconyg yg-chouma',to:"discount_washcode"},
                {text:'救援金',ico:'iconyg yg-jinbi',to:"discount_help"},
                {text:'自助晋级',ico:'iconyg yg-crown',to:"discount_vip"},
                {text:'推荐好友',ico:'iconyg yg--tuijianhaoyou',to:"discount_recommend"},
                {text:'生日礼金',ico:'iconyg yg-iconshengrilipin',to:"discount_birthday"},
                {text:'存送券',ico:'iconyg yg--tuijianhaoyou',to:"discount_coupon"},
                {text:'红包券',ico:'iconyg yg-iconshengrilipin',to:"discount_redenvelope"},
                {text:'体验金',ico:'iconyg yg-iconshengrilipin',to:"discount_experience"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mainbtn{
    width: 95%;
    text-align: justify;
    background: #fff;
    margin: 0 auto;
    .pointer{
        cursor: pointer;
    }
    .btn{
        width: 15%;
        background: #f7f7f7;
        color: #656565;
        display: inline-block;
        padding: 10px;
        margin: 5px 4px;
        border: 1px solid #ccc;
        text-align: center;
        .iconyg{
            font-size: 24px;
            color: #353f8d;
        }
        .mr5{
            margin-right: 5px;
        }
    }

}
</style>


