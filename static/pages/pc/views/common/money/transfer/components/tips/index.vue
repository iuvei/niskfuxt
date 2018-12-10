<template>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tips:[
                "请在户内转账前进行平台激活，激活后方可转账。",
                "激活方法：登入官网>进入需要激活的游戏平台>选择游戏>加载游戏完成后退出即可。",
                "户内转账只支持整数转账，最低转账金额为1元。",
                "进行户内转账时，请先关闭正在进行的游戏页面，避免出现错误。",
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.tipsDiv{
    padding: 0 0 20px 55px;
    font-size: 15px;
    line-height: 30px;
    width: 800px;
    color: #d7b26c;
}
</style>

