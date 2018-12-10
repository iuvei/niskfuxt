<template>
  <div class="agent-advantage-content">
      <span>品牌介绍：</span>
      <p class="content-p">澳盈娱乐创建于2008年，隶属于总公司注册创立于2004年，2008年获得Firstcagayan正规博彩牌照NO.CF-174；2014年澳盈娱乐获得菲律宾PAGCOR颁发的合法博彩牌照，公司历经10年之久，全球领先秒存秒提技术迅速占领亚洲市场份额，凭借雄厚的实力及业界优质的关系网，致力打造亚洲最具信誉实力的在线娱乐平台。</p>

      <span>品牌优势：</span>
      <p class="content-p">业界首创佣金日结，周结，月结。50%超高比例。
                <br>提款：20万以下提款1分钟内到账，200万以上半小时内到账。
                <br>安全：澳盈娱乐采用128位SSL高标准加密技术。
                <br>平台自动化：自动优惠、实时返水、独立研发，快捷享受。
                <br>服务：7*24小时在线客服，提供优质服务。
                <br>加入澳盈，共创双赢；澳盈是您最好的选择</p>
  </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props:{},
        methods:{},
        computed:{},
        created(){
        },
        components:{}
    };
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .agent-advantage-content{
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
