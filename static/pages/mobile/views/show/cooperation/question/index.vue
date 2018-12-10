<template>
  <div class="agent-question-content" v-once>
    <span>Q1:为什么要加盟本网站？</span>
    <p class="content-p">
      高收入，零投入！澳盈娱乐首创日结、周结佣金结算 <br>
      【共赢】始终是我们澳盈娱乐的经营理念，伴随澳盈娛樂十四年的成长，玩家已经看到了澳盈娱乐的实力！现在加盟到澳盈娱乐来，让我们共同成长，共同受益。只需要简单的一步注册，就可以让你轻松获得高额回报。
    </p>
    <span>Q2:如何加盟本网站？</span>
    <p class="content-p">
      点击“加盟注册”并填写真实完整的注册资料，认真阅读本站的相关规则条款，并同意确认“合作协议”，然后提交“申请”，审查通过后，您就可以正式成为本站的代理商成员之一，迈出您成功的第一步！
    </p>
    <span>Q3:佣金待遇如何？</span>
    <p class="content-p">
      业界首创日结/周结,佣金50%超高比例，即时收益,佣金100即可提款，超低门槛 
    </p>
    <span>Q4:我想问的问题上面都没有怎么办？</span>
    <p class="content-p">
    马上联络24小时客服，给您最专业的1：1解答。
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    props: {},
    methods: {},
    computed: {},
    created() {
    },
    components: {}
  };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .agent-question-content{
    padding: 0 r(30);
    @include f(24px);
    line-height: r(50);
    color: #ffffff;
    span{
      @include f(30px);
      color: $cl6;
      margin: r(20) auto;
      display: block;
    }
    .content-p{
      text-align: justify;
      @include f(24px);
    }
  }
</style>
