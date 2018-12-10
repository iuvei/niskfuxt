<template>
    <div class="agent_step">
        <div class="container">
            <ul>
                <li>
                    <div class="step_icon">
                    <img src="../../images/cooperation_icon.png" >
                    </div>
                    <h1>提交申请</h1>
                    <p>
                    10秒快速填写申请表，立即成为{{WEBCONFIG.title}}的合营伙伴，共同成长。
                    </p>
                </li>
                <li>
                    <div class="step_icon">
                    <img src="../../images/promotion_icon.png" >
                    </div>
                    <h1>顶级的服务</h1>
                    <p>
                    {{WEBCONFIG.title}}可通过电话、邮件或在线沟通工具（QQ、Skype等）等途径，为合作伙伴提供全天24小时的服务和支持。
                    </p>
                </li>
                <li>
                    <div class="step_icon">
                    <img src="../../images/make_money.png" >
                    </div>
                    <h1>共赢</h1>
                    <p>
                    业界首创日结/周结,佣金50%超高比例，即时收益,佣金100即可提款，超低门槛。
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
 import {
    WEBCONFIG
  } from "@/assets/data"
export default {
    data() {
      return {
        WEBCONFIG
      }
    },
}
</script>
<style lang="scss" scoped>
.agent_step{
    height: 527px;
    background: #EAEAEA;
    .container{
        padding-top: 42px;
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
    }
    ul{
        li{
            width: 380px;
            float: left;
            margin: 0 10px;
            h1{
                font-size: 48px;
                color: #3f3f3f;
                text-align: center;
                line-height: 80px;
            }
            p{
                font-size: 20px;
                color: #3f3f3f;
                line-height: 30px;
                text-align: center;
            }
        }
    }
    .step_icon{
        text-align: center;
        img{
            width: 213px;
            height: 264px;
        }
    }
}
</style>
