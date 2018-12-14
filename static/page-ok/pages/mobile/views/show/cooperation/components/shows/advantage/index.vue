<template>
  <div class="agent-advantage-content">
    <!-- <div v-for="item in items" :key="item.title">
      <span>{{item.title}}</span>
      <p class="content-color"></p>
      <p class="content-p">{{item.content}}</p>
    </div> -->
    <span>平台介绍</span>
    <p class="content-color"></p>
    <p class="content-p">新九州国际娱乐城，是于菲律宾合法注册之博彩公司。拥有多元化的产品，使用最公平、公正、公开的系统，在市场上的众多博彩网站中，我们自豪地提供会员高优惠的回馈，给予合作伙伴具优势的营利回报! 无论您拥有的是网络资源，或是人脉资源，都欢迎您来加入新九州娱乐城合作伙伴的行列，无须负担任何费用，就可以开始无上限的收入，低投入高报酬! 新九州国际娱乐城，绝对是您最聪明的合作选择!</p>
  
    <span>品牌代理优势</span>
    <p class="content-color"></p>
    <p class="content-p">新九州国际娱乐城作为知名的在线博彩公司，提供最广范围并最具竞争力的产品。我们真诚为您打造最高档次合作平台，最好的代理加盟方案！</p>
    <p class="content-p">
      一、最高达50%的代理佣金，只要您擅长运用网络及人脉资源，轻松月入百万不是梦！<br>
      二、零风险，高回报，每月准时出佣<br>
      三、全年度优惠不断，满足各种类型玩家需求<br>
      四、提款快速金额不封顶，实力雄厚资金有保障<br>
      五、营运多年，深受众多玩家信赖<br>
      六、拥有体育博彩与线上赌场执照，信誉保证<br>
      七、多年大力推广，品牌热度十足，代理可坐享广告品牌效应<br>
      八、数据信息详尽，可查阅下线投注记录。<br>
      您可以直接使用微信、ＱＱ通讯，或是透过QQ动态、空间、微信朋友圈、微聊、微博、51、新浪、等各大知名论坛，及邮箱等各式网络资源媒介进行简简单单推广，轻轻松松赚钱，月入百万绝非梦想！<br>
    </p>
    <p class="cl-tips">【温馨提示：推广时，必须提供对方您注册时所获取之代理推广专用链接，会员必须凭该链接注册成功才能成为您的线下会员，该会员的游戏过程将纳入拥金计算基础，您只需等待领取佣金！】</p>
  
  </div>
</template>
<script>
    export default {
        data() {
          return{}
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
    @include f(20px);
    line-height: r(50);
    color: #ffffff;
    span{
      @include f(30px);
      color: $cl6;
      margin: r(20) auto;
      display: block;
      text-align: center;
    }
    .content-color{
      border-color: #c3c3c3;
      border-width: 1.5px 3px;
      border-style: solid;
      width: 8%;
      margin: -5px auto 5px;
    }
    .content-p{
      text-align: justify;
      @include f(20px);
    }
    .cl-tips {
      color: #e2b85a;
    }
    .cl-red {
      color: red;
    }
  }
</style>
