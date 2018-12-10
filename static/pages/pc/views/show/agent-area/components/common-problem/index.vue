<template>
    <div class="common_problem">
        <div class="container">
        <h1 class="agent_txtitle">常见问题</h1>
        <div class="problem_item">
            <h2>为何要加盟本网站？</h2>
            <p>
                高收入，零投入！{{WEBCONFIG.title}}代理计划隆重推出。【共赢】始终是我们{{WEBCONFIG.title}}的经营理念，伴随{{WEBCONFIG.title}}的成长，玩家已经看到了{{WEBCONFIG.title}}的实力！现在加盟到{{WEBCONFIG.title}}来，让我们共同成长，共同受益。只需要简单的一步注册，就可以让你每月轻松获得高额回报。
            </p>
        </div>
        <div class="problem_midcontent clear">
            <div class="left">
                <div class="problem_item">
                    <h2>如何加盟本网站？</h2>
                    <p>
                        点击“立即申请”并填写真实完整的注册资料，认
                        真阅读本站的相关规则条款，并同意确认“合作协
                        议”，然后提交“立即注册”，审查通过后，您就可以正
                        式成为本站的代理商成员之一，迈出您成功的第一步！
                    </p>
                </div>
                <div class="problem_item left_bottom">
                    <h2>活跃会员的定义</h2>
                    <p>
                        佣金结算周期内累计存款500元以上且结算周期内有效投注额1000元以上，才可称作活跃会员。
                    </p>
                </div>
            </div>
            <div class="right">
                <div class="problem_item">
                    <h2>佣金待遇如何？</h2>
                    <p>
                        成为本站代理商是完全免费，无需任何资金投入， 零风险高回报，每月坐享高达50%的佣金。
                    </p>
                </div>
                <div class="problem_item">
                    <h2>有效下线数量是什么？</h2>
                    <p>
                        指线下会员当月累积存款500元以上且有效投注额达1000以上，才可称作有效下线，即活跃会员。
                    </p>
                </div>
                <div class="problem_item">
                    <h2>我想问的问题上面都没有怎么办？</h2>
                    <p>
                        马上联络24 小时客服，给您最专业的 1:1 解答。
                    </p>
                </div>
            </div>
        </div>
        <div class="problem_item">
            <h2>佣金发放时间</h2>
            <p>
                每个月的佣金会在下个月5号北京时间23:59:59前，把上月的佣金添加到代理的合作伙伴账户内，代理通过合作平台可以看见佣金额度。结算后即可申请取款，公司会在48小时内审核通过，通过后会支付到您填写的取款账号内。
            </p>
        </div>
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
.clear::after {
    content: "";
    width: 0px;
    height: 0px;
    display: block;
    visibility: hidden;
    clear: both;
}
.common_problem{
    background: url(../../images/common_problembg.jpg) no-repeat center center;
    min-height: 1080px;
    .container {
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
    }
    .agent_txtitle{
        margin: 25px 0 60px;
        font-size: 40px;
        color: #fff;
    }
    .problem_item{
        border: 1px solid #48BEB4;
        background: rgba(12,20,27,0.5);
        padding: 13px 70px;
        margin-bottom: 12px;
        h2{
            font-size: 20px;
            color: #ed7e12;
            line-height: 50px;
        }
        p{
            font-size: 20px;
            color: #fff;
            line-height: 32px;
        }
    }
    .problem_midcontent{
        .left{
            width: 596px;
            float: left;
            .left_bottom{
                padding: 26px 70px;
            }
        }
        .right{
            width: 594px;
            float: right;
        }
    }
}
</style>
