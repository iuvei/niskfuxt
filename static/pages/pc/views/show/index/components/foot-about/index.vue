<template>
    <div class="foot-wr">
        <div class="foot-main cl tip">
            <div class="tit-main fl">
                <p class="title"><img src="./images/icon04.png">关于娱乐城<span>About {{WEBCONFIG.name}}</span></p>
                <p class="tit2">注册账户 <span>register account</span></p>
                <p class="tit3">开设一个账户即可享受{{WEBCONFIG.name}}娱乐城的真人娱乐和所有的精彩游戏，享受我们高品质、高赔率、多元化的娱乐游戏，更有机会获取我们多项优惠和开户红利。</p>
                <p class="tit2">合作伙伴 <span>Partner</span></p>
                <p class="tit3">现在开始加入的联盟合作伙伴项目，您可以利用我们娱乐平台，通过介绍新客户加入{{WEBCONFIG.name}}娱乐城，坐享高额佣金。</p>
                <p class="tit2">责任博彩 <span>Responsible casino</span></p>
                <p class="tit3">作为一个信誉极好和富有强烈社会责任感的博彩红色，{{WEBCONFIG.name}}娱乐城致力将博彩游戏带来的负面影响降至最低。我们的游戏规则不允许未满18岁的人投注博彩游戏。</p>
                <p class="tit2">安全保密 <span>Security and confidentiality</span></p>
                <p class="tit3">我们采用国际最先进的娱乐城博彩系统，信息保密安全稳定。保证让每位玩家放心游戏。</p>
            </div>
            <div class="tit-main fl">
                <p class="title"><img src="./images/icon05.png">全新产品<span>New product</span></p>
                <p class="tit2">运动博弈 <span>Sports</span></p>
                <p class="tit3">我们提供您最爱投注的体育赛事。如足球五大联赛、世界杯、欧洲冠军杯、各大洲际杯赛和其他所有球类赛事，我们也提供其他的博彩项目。</p>
                <p class="tit2">真人娱乐 <span>Live entertainment</span></p>
                <p class="tit3">我们的真人娱乐玩法众多。如百家乐，骼宝，龙虎以及轮盘。您可以畅游真人娱乐的精彩世界。当然，您也可以选择容易上手的线上老虎机或小游戏消遣时光</p>
                <p class="tit2">电子游艺 <span>Electronic games</span></p>
                <p class="tit3">我们的游戏包括轮盘、电子扑克、老虎机等在线娱乐场游戏。此外您更有机会赢得累积超级奖金。</p>
                <p class="tit2">彩票游戏 <span>Lottery game</span></p>
                <p class="tit3">彩票游戏玩法简单、赔率多样化、福彩3D、体彩排列三、各地区时时彩及香港特区六合彩，连线同步即时开奖。</p>
            </div>
            <div class="tit-main fl">
                <p class="title"><img src="./images/icon06.png">全新产品<span>New product</span></p>
                <p class="tit2">优惠活动 <span>Promotions</span></p>
                <p class="tit3 tp">新用户享有首次存款红利及开户礼品，高额返水，银行卡划款优惠，多重优惠任君选择。老客户可享有更多优惠服务。</p>
                <p class="tit2">帮助中心<span>Help Center</span></p>
                <p class="tit3 tp">您可以通过新手指引和常见问题栏目获得有关免费开户、存款、提款、玩法及其他问题的解答和帮助。</p>
                <p class="tit2">支付方式 <span>Payment method</span></p>
                <p class="tit3">{{WEBCONFIG.name}}娱乐城为客户提供众多的存取款方式并保障您存取过程顺利及时，使资金安全快捷到达。</p>
                <p class="tit2">联系我们<span>Contact us</span></p>
                <p class="tit3">如果您有任何关于体育及娱乐场遇到的所有问题，可通过在线客服、电话及电邮方式于我们取得联系获取帮助。</p>
            </div>
        </div>
    </div>
</template>
<script>
  import {
    WEBCONFIG
  } from "@/assets/data"
export default {
    data(){
        return{
            WEBCONFIG,
        }
    }
}
</script>
<style lang="scss" scoped>
.foot-wr {
    min-width: 1110px;
    background: #2b2a26;
    position: relative;
    .tip{
        padding: 50px 0 105px 0;
    }
    .foot-main{
        width: 1200px;
        color: #6b6b6b;
        margin: 0 auto;
        display: flex;
        font-size: 14px;
        .tit-main {
            margin-left: 55px;
            .fl{
                flex: 1;
            }
            .title {
                font-size: 20px;
                font-weight: bold;
                position: relative;
                img {
                    vertical-align: -20px;
                    display: inline-block;
                    margin-right: 5px;
                }
                span {
                    font-size: 12px;
                    font-weight: normal;
                    position: relative;
                    top: -23px;
                    left: 52px;
                }
            }
            .tit2 {
                width: 285px;
                line-height: 25px;
                border-bottom: 1px dashed #6b6b6b;
                span {
                    font-size: 12px;
                }
            }
            .tit3 {
                width: 275px;
                margin: 10px 0 20px 0;
                line-height: 21px;
            }
            .tp {
                margin-bottom: 38px;
            }
        }
    }
    
}
</style>
