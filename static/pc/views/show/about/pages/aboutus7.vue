<template>
  <div class="content-info" v-once>
    <h2 class="about-title">博彩自律</h2>
    <p class="about-text">我们为客户在博彩自律方面提供多方面的帮助包括：<br/>
      1、暂时关闭账户<br/>
      2、控制您的投注限额<br/>
      3、问题性博彩问卷调查<br/>
      4、家长控制
    </p>
    <h2 class="about-title">未满博彩年龄</h2>
    <p class="about-text">未满18岁的人士进行博彩属非法行为，会在此方面绝对严格执行。对于选择某种支付方式（如未满18岁人士也可使用）的客户，我们会进行年龄验证。此外，我们也会随机抽取客户进行年龄验证，不管他们使用何种支付方式。 一旦发现使用该网站的客户未满18岁，所有赢取的彩金将被没收并交由相关部门处理。</p>
    <h2 class="about-title">雇员培训</h2>
    <p>我们所有的客户服务人员在问题性博彩这方面都经过严格的培训。</p>
    <h2 class="about-title">查看账户历史</h2>
    <p class="about-text">客户可随时查看账户的交易历史以及存取款记录。账户余额会在登录主页时显示，同时也可在会员部分查看。</p>
    <h2 class="about-title">关于控制您投注的信息</h2>
    <p class="about-text">在人们用他们的方式博彩的同时，博彩成了某些人的问题。以下提示也许能帮助您控制博彩问题：<br/>
      1、博彩只是一种娱乐，不应被视为赚钱的方法<br/>
      2、避免有把输的钱赢回来的想法<br/>
      3、只投注您付得起的金额<br/>
      4、时刻记着花在博彩上的时间和金钱<br/>
      5、如果您暂时不想博彩了，可以选择使用自我控制期的关闭账户
    </p>
    <h2 class="about-title">问题性博彩问卷调查</h2>
    <p class="about-text">如果您担心博彩会占据您的（或他人的）生命，以下提问可以帮您找到答案：<br/>
      您会否因为博彩而不上班或不上学？<br/>
      您博彩是否为了逃避烦闷或不愉快的生活？<br/>
      当您博彩花光钱时，您是否感到失望甚至绝望，并且希望马上能再进行赌博？<br/>
      您会否博彩到最后一分钱彩罢休？<br/>
      您有否曾经用谎言掩饰您花在博彩上的时间和金钱？<br/>
      是否有人批评过您的博彩行为？<br/>
      您是否对您的家人，朋友或爱好失去了兴趣？<br/>
      您输了之后，是否马上想把输的钱赢回来？<br/>
      您博彩是不是因为争执，沮丧或失望？<br/>
      您有没有因为博彩而感到失落甚至轻生？<br/>
      在这些问题中您回答的‘是’越多，您就越接近具备严重博彩问题。
    </p>

    <h2 class="about-title">家长控制</h2>
    <p class="about-text">父母或者监护人可以使用一系列的第三方软件来监控或者限制电脑的互联网使用<br/>
      Net Nanny过滤软件防止儿童浏览不适宜的网站内容: www.netnanny.com<br/>
      CYBERsitter过滤软件允许父母增加自定义过滤网站: www.cybersitter.com
    </p>

  </div>
</template>
<script>
  import {WEBCONFIG} from '@/assets/data/index'
  export default {
    data() {
      return {
        WEBCONFIG
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    activated() {
    },
    components: {}
  }
</script>
<style spcoed lang="scss">
  @import "./style.scss"
</style>
