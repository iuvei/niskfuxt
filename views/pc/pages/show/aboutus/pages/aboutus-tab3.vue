<template>
  <div id="deposit" class="collapse-group tab-pane active">
          <ul ref="parentNode">
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金在哪领取？')>-1}">
              <p>体验金在哪领取？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>成功注册后，下载手机APP，进入“我的——账户设置——提款卡绑定”，先绑定提款卡。绑定后进入“我的——自助优惠——自助体验金”界面自助操作申请即可。</p>
                <p>App下载地址：打开手机浏览器，在地址栏中输入【{{$SITE.download.app}}】即可下载。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金申请过程中，为什么无法绑定银行卡？')>-1}">
              <p>体验金申请过程中，为什么无法绑定银行卡？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>如遇到此类情况，请先到帐户设置>提款卡折号绑定，先绑定提款卡后再进行体验金的申请，提醒您第三步骤请选择您绑定的银行卡别后直接点击下一步即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金申请提示信息重复？')>-1}">
              <p>体验金申请提示信息重复？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>若出现“信息重复”提示，这个说明您的注册信息与其他游戏账号是有重复的，如姓名、手机号、邮箱、最后登录IP、注册ip、提款卡等信息，根据体验金活动规则，只要有一个资料与其他游戏账号重复，均无法领取体验金（但不会影响账号正常游戏，包括参加其他优惠、存提款、投注等），建议参考其他官方优惠。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金申请提示银行卡信息重复？')>-1}">
              <p>体验金申请提示银行卡信息重复？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>若出现“银行卡信息重复”提示，说明该申请账号所绑定的提款卡信息，在其他账号存在绑定记录，该情况是无法申请体验金活动彩金的。建议参考其他官方优惠。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金申请为什么无法收到验证短信？')>-1}">
              <p>体验金申请为什么无法收到验证短信？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>必须使用注册手机号码才能申请。</p>
                <p>短信验证码收不到有以下四种情况：</p>
                <p>一、请确认您的电话有无设置拦截功能；</p>
                <p>二、请确认您的短信有无被运营商屏蔽；</p>
                <p>三、虚拟手机号码或者虚拟运营商暂时收不到短信；</p>
                <p>四、手机信号不稳定或者网络延迟也会造成收不到短信。</p>
                <p>若您确认没有以上问题，还是无法收到，建议您参考其他官网优惠。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金不可以玩哪些游戏？')>-1}">
              <p>体验金不可以玩哪些游戏？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>体验金只限游玩PT/TTG/综合老虎机的游戏。所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏及刮刮乐游戏等，多旋转老虎机和老虎机奖金翻倍投注将不计算在内。若发现玩家在其他区域游戏，我们将取消体验金及用体验金获得的利润，且取消被随机抽取中奖的机会。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金提款为什么还没通过审核？')>-1}">
              <p>体验金提款为什么还没通过审核？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>领取体验金提款，如有以下任何一个情况，提款将暂时无法通过：</p>
                <p>1、使用体验金提款，须工作人员核实注册电话，申请提款后请保持手机畅通，若因为客户设置的电话拦截，或无效电话号码，造成无法核实的情况，将立即取消并扣除款项。</p>
                <p>2、体验金提款金额大于888元。</p>
                <p>3、致电核实通过后，由于提款卡卡号或者开户姓名有误。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('什么是澳盈VIP会所？')>-1}">
              <p>什么是澳盈VIP会所？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>{{$SITE.config.title}}作为游戏产业旗舰品牌，离不开广大玩家的大力支持，为了更好的回馈玩家，特设{{$SITE.config.title}}VIP会所。会员等级越高，享受的洗码、返水、返赠彩金、生日彩金、节日彩金、每月回馈彩金等多项活动的红利金额就会越高，最重要的是您的每一次存款资金就会更有机会打出巨额大奖。您达到晋级要求后，可以主动使用“自助晋级”或者等待每月2号“系统晋级”为您提升VIP级别并派发对应晋级彩金红利，成功晋升{{$SITE.config.title}}VIP将永不降级。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('晋级澳盈VIP需要什么条件？')>-1}">
              <p>晋级澳盈VIP需要什么条件？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>{{$SITE.config.title}}VIP晋级分有“自助晋级”和“系统晋级”。</p>
                <p>1、自助晋级：个人中心（我的） > 自助优惠 > 自助晋级，查看当月投注总额（当天投注额次日更新），进行检测、晋级。每月只能自助晋级一次。</p>
                <p>例如：刘先生1月1号打了500万流水，当天无法晋级，须等待次日系统返水完毕，再自助检测晋级。</p>
                <p>2、系统晋级：每个月初1-2号系统自动晋级，计算每位会员上个月的投注额。若会员在上个月已经提前自助晋级，则系统晋级不会再计算该会员的投注额。</p>
                <p>例如：刘先生1月15号投注30万提前自助晋级成白银VIP，1月15号后又投注100万，将无法再次晋级，自助晋级过的会员系统升降级不再计算投注额。 所以务必根据自身投注额情况决定是否提前自助晋级。</p>
                <p>具体晋级条件可以进入官网/App活动页面查询。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何领取首次存款送彩金活动？')>-1}">
              <p>如何领取首次存款送彩金活动？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>老虎机首存活动申请方式：</p>
                <p>步骤一：会员首先登陆PT/SW/TTG/NT/QT/DT/MG/PNG游戏进行激活。（激活方式：点击游戏平台，任选一款游戏进入）</p>
                <p>步骤二：在个人中心—自助优惠—自助存送—首存100%优惠，填写完毕点击提交。若未申请优惠，先将钱转入游戏平台即视为放弃</p>
                <p>老虎机首存优惠流水倍数：25倍。</p>
                <p>注：申请首存的彩金无法进行PT“古怪猴子”和“黄金之旅”两款游戏。PT游戏只限经典老虎机、电动吃角子游戏，SW/TTG/NT/QT/DT/MG/PNG戏只限老虎机游戏，所有21点游戏，所有轮盘游戏，所百家乐游戏，所有骰宝游戏， 所有视频扑克游戏及刮刮乐游戏等，多旋转老虎机和老虎机奖金翻倍投注将不计算在内。其他纸牌游戏，桌面游戏，电子扑克都不计算在内。若彩金投注于被限制的游戏中，{{$SITE.config.title}}有权收回红利和非法盈利额。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('AG百家乐首存活动申请方式：')>-1}">
              <p>AG百家乐首存活动申请方式：</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>登录官网/App> 个人中心（我的）> 自助优惠> 选择AG真人存送优惠。</p>
                <p>百家乐首存优惠流水倍数：15倍起。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何参与、领取每日限时存送优惠？')>-1}">
              <p>如何参与、领取每日限时存送优惠？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>每日限时存送优惠均不相同，更新及开启时间，每日00:00:00。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('老虎机限时存送活动申请方式：')>-1}">
              <p>老虎机限时存送活动申请方式：</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>在个人中心（我的）—自助优惠—自助存送—当日限时优惠，填写完毕点击提交。流水倍数25倍。</p>
                <p>注：此优惠彩金禁止玩PT“古怪猴子”和“疯狂7”两款游戏。彩金只限游玩PT/TTG/NT/QT/MG/DT/PNG经典老虎机、电动吃角子老虎机。所有21点游戏、轮盘游戏、百家乐游戏、骰宝游戏、视频扑克、及刮刮乐游戏等，多旋转老虎机和老虎机奖金翻倍投注将不计算在内。若彩金投注于被限制的游戏中，{{$SITE.config.title}}有权收回红利和非法盈利额。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何参与、领取每日次存优惠？')>-1}">
              <p>如何参与、领取每日次存优惠？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>老虎机限时存送活动申请方式：</p>
                <p>在个人中心（我的）—自助优惠—自助存送—每日次存优惠，填写完毕点击提交。若未申请优惠，先将钱转入游戏平台即视为放弃。</p>
                <p>流水倍数：15倍。</p>
                <p>注：红利只限游玩PT“经典老虎机”、“电动吃角子老虎机,SW/TTG/NT/QT/DT/MG/PNG游戏只限老虎机游戏”。所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏及刮刮乐游戏等，多旋转老虎机和老虎机奖金翻倍投注将不计算在内。其他纸牌游戏，桌面游戏，电子扑克都不计算在内。若发现不正当投注{{$SITE.config.title}}有权收回红利和非法盈利额。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('我为什么没有获得救援金活动彩金？')>-1}">
              <p>我为什么没有获得救援金活动彩金？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>救援金结算的是前一天0点至24点的数据，若次日无救援金派发，则主要因为以下情况之一：</p>
                <p>1、计算日累计存款未满100元；（如6号派发5号的救援金，5号需存款满100元）</p>
                <p>2、老虎机负盈利≥10；</p>
                <p>负盈利的定义：老虎机平台输值减去红利（红利包含洗码、存送优惠红利、以及当天领取的所有优惠彩金）</p>
                <p>计算方式：负盈利=老虎机平台输值-红利，计算结果正数则代表负盈利，负数代表盈利则无救援金</p>
                <p>【红利】包含洗码、存送优惠红利、以及当天所有领取的优惠彩金。</p>
                <p>【老虎机输赢值】当天老虎机“投注总额”减去“中奖总额”所得出的差额。</p>
                <p>【输赢值结算时间】计算老虎机平台（PT、DT、MG、QT、TTG、NT、SW、PNG）前一天0:00:00-23:59:59秒的输赢值。</p>
                <p>【派发条件】当天存款100元以上，且负盈利10元以上。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何申请或提前领取救援金活动彩金？')>-1}">
              <p>如何申请或提前领取救援金活动彩金？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>反水分为自助反水与系统反水，自助反水是提前领取反水金额，若当天产生的反水，没有自助领取，则次日系统反水会全部派发</p>
                <p>例如：5号产生反水100元，自助领取50元，则次日系统反水会派发50元</p>
                <p>系统返水时间（24小时制）：</p>
                <p>05:00-07:00结算：DT、PT、NT、QT、MG、HYG平台。</p>
                <p>08:00-10:00结算：SW、TTG老虎机平台。</p>
                <p>12:00之前结算 ：PNG老虎机平台。</p>
                <p>16:00之前结算 ：AGIN老虎机平台、AG真人平台、体育平台。</p>
                <p>系统返水无需申请，系统自动结算上一天00:00-23:59:59的有效投注额，结算后自动派发至会员主账户内。</p>
                <p>个人中心>账户清单>优惠活动记录，可以自助查询系统返水的时间与金额。若因不可抗拒的因素延迟派发，官网将以公告形式通知您。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何查看最新澳盈优惠活动？')>-1}">
              <p>如何查看最新澳盈优惠活动？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>{{$SITE.config.title}}优惠活动举办频繁，您可以通过浏览器访问{{$SITE.config.title}}官网，或者通过{{$SITE.config.title}}App点击“优惠活动”查询最新优惠活动，您还可以通过24小时在线客服为您提供最新的活动资讯。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('每月回馈礼金怎么领取？')>-1}">
              <p>每月回馈礼金怎么领取？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，每月回馈礼金是白银VIP以上每月3号后可自助领取一次，需当月存款100元，1倍流水，下月不累积，逾期则无法领取或补发。</p>
                <p>领取方式请登入官网，点击个人中心>自助优惠>VIP每月礼金>选择平台转入</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('生日礼金怎么领取？')>-1}">
              <p>生日礼金怎么领取？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，生日礼金是白银VIP以上每年可在注册生日前后三天内，自助领取一次，需当月存款100元，1倍流水，逾期则无法领取或补发。</p>
                <p>领取方式请登入官网，点击个人中心>自助优惠>VIP生日礼金>选择平台转入，{{$SITE.config.title}}预祝您生日快乐，心想事成。</p>
              </div>
            </li>
          </ul>
        </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        Download,
        idx:'',
        isShowMsg:[]
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      showMsg(e){
        let idx = this.isShowMsg.indexOf(e.target.innerText)
        if (idx >= 0) {
          this.isShowMsg.splice(idx,1)
        }else{
          this.isShowMsg.push(e.target.innerText)
        }
      }
    },
    created() {},
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  .tab-pane {
    display: none;
    &.active {
      display: block;
    }
  }
  .tab-pane li {
  position: relative;
  line-height: 50px;
  border-bottom: 1px dashed #ddd;
  font-size: 16px;
  cursor: pointer;
  .iconay {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(90deg);
    transition: all .3s ease-in;
  }
  &.active {
    .collapse {
      display: block;
    }
    .iconay {
      transform: rotate(-90deg);
    }
  }
}

.collapse {
  display: none;
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 30px;
  margin-left: 15px;
}
</style>
