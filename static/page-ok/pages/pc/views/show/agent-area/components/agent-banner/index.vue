<template>
    <div class="agent_banner">
        <div class="container">
            <div class="banner_btngroup">
                <a href="#agentarea" class="apply_now">立即申请</a>
                <!-- <a href="#" class="login">登入</a> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.agent_banner{
    height: 474px;
    background:#000 url(../../images/daili_banner.png) no-repeat bottom center;
    padding-top: 74px;
    .container{
        position: relative;
        height: 400px;
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
    }
    .banner_btngroup{
        position: absolute;
        left: 228px;
        bottom: 57px;
        a{
            height: 60px;
            line-height: 60px;
            display: inline-block;
            margin-right: 28px;
            font-size: 30px;
            color: #ffffff;
            text-align: center;
        }
        .apply_now{
            width: 310px;
            background: #ed7e12;
        }
        .apply_now:hover{
            background: #ff8000;
        }
        .login{
            width: 200px;
            background: #2D2D2D;
        }
        .login:hover{
            background: #200005;
        }
    }
}
</style>
