<template>
  <div id="deposit" class="collapse-group tab-pane active">
          <ul ref="parentNode">
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('存款方式有哪些？')>-1}">
              <p>存款方式有哪些？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>
                  您好，目前我们支持微信转账，支付宝转账，网银转帐，手机银行扫码，银联扫码，支付宝扫码，微信扫码、QQ扫码、第三方在线支付网银存款。都是非常方便和快捷的哦，如果在充值过程遇到任何问题，可以随时联系我们在线客服协助您！
                </p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('你们支持信用卡存款吗？')>-1}">
              <p>你们支持信用卡存款吗？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>
                  您好，如果您想使用信用卡支付的话建议您使用银联扫码，目前这个方式是支持信用卡存款的。
                </p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何户内转账？')>-1}">
              <p>如何户内转账？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>
                  您好，请您登陆游戏账号成功之后在个人中心（我），选择户内转账，选择来源账户与目标账户，目标账户为您想要转进去的游戏平台【平台之间是无法互转的，必须通过主账户才可以实现平台间的互转】
                </p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('户内转账系统繁忙怎么办？')>-1}">
              <p>户内转账系统繁忙怎么办？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>
                  您好，一般有3种情况。
                </p>
                <p>1.从主账户转入游戏平台账户时，提示系统繁忙，请您先确认已经激活游戏平台，激活方式：在官网登陆您的游戏账号，然后选择您想玩的平台的任意一款游戏，进入真钱游戏后等候游戏界面完全加载出来就自动激活了。</p>
                <p>2.从PT账户转出主账户时，提示系统繁忙，这可能因为您的PT平台内有卡线游戏，需要您联系人工客服帮您查看处理。</p>
                <p>3.游戏平台方维护，可先查看官网公告，或联系客服咨询。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('微信如何转账存款？')>-1}">
              <p>微信如何转账存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>首先在官网下单，点击存款里的【微信转账】，填写姓名和存款金额，接着获取收款帐号，前往微信里面操作转账。</p>
                <p>微信里操作转账的方法：微信右上角+号处打开“收付款”，向下滑动，选择“转账到银行卡”，然后向方才在官网下单获取到的收款帐号转账，您在微信里"转账金额"的地方，填写官网订单上提示的附带两位小数的金额（xx.xx），等待微信支付状态处理完毕，即可自动到帐。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('微信转账存款为什么不到帐？')>-1}">
              <p>微信转账存款为什么不到帐？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，微信转账存款未自动到帐，一般有以下几种原因，您可以参考注意一下：</p>
                <p>1. 金额不对：微信转账时的金额，未按照官网订单提示的金额转账</p>
                <p>2. 未先下单：直接转账到历史收款账户，没有先在官网下单获取最新收款账户账</p>
                <p>3. 方式不对：交叉使用方式存款，比如官网上在支付宝转账下单，获取了收款账户，然后实际使用微信转账支付</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('微信转账手续费的问题？')>-1}">
              <p>微信转账手续费的问题？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，只要您在微信里"转账金额"的地方，填写系统生成的金额，就可以自动到账。比如系统生成10.1，那么您在转账金额处，输入10.1完成转账即可。（对于转账时，微信官方会收取0.1%手续费，是我们无法涉及的，但我们这个存款方式每笔送1%，对于您来说是稳赚不亏的哦）</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('支付宝如何存款？')>-1}">
              <p>支付宝如何存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>首先在官网下单，点击存款里的【支付宝转账】，填写存款姓名（使用支付宝实名认证的真实姓名）及金额，下一步获取收款帐号，前往支付宝里面操作转账。</p>
                <p>温馨提示：每次存款要先在官网下单哦，不可以直接转账到历史交易账户中。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('支付宝转账存款为什么不到帐？')>-1}">
              <p>支付宝转账存款为什么不到帐？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，支付宝转账存款不到帐一般有以下几种原因，您可以参考注意一下：</p>
                <p>1. 金额不对：官网订单填写的存款金额，和实际转账金额不一样</p>
                <p>2. 姓名不对：官网订单填写存款姓名，不是付款支付宝的真实姓名</p>
                <p>3. 未先下单：直接转账到历史交易的收款账户，没有先在官网下单获取最新收款人</p>
                <p>4. 作废订单：支付宝中转帐后，又在官网重新生成订单，导致上笔实际订单被作废</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('网银转账如何存款？')>-1}">
              <p>网银转账如何存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，点击我要存款选择快捷网银，手机/网银转账输入存款人姓名，以及存款金额 ，点击下一步将获取到我们的收款信息，以及您填写的信息。以便您核对（收款信息以您获取的为准），登录您的网银进行转账支付，填写您获取的收款信息。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('网银转账存款为什么不到帐？')>-1}">
              <p>网银转账存款为什么不到帐？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，网银转账存款不到帐一般有以下几种原因，您可以参考注意一下：</p>
                <p>1. 金额不对：官网订单填写的存款金额，和实际转账金额不一样</p>
                <p>2. 姓名不对：官网订单填写存款姓名，不是付款银行卡的姓名</p>
                <p>3. 未先下单：直接转账到历史交易的收款账户，没有先在官网下单获取最新收款人</p>
                <p>4. 作废订单：支付宝中转帐后，又在官网重新生成订单，导致上笔实际订单被作废</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('京东如何存款？')>-1}">
              <p>京东如何存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登录官网，点击存款选择【京东支付】输入金额后获取二维码，然后打开您的京东app扫描二维码支付即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('QQ钱包如何存款？')>-1}">
              <p>QQ钱包如何存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登录官网，点击存款，选择【QQ钱包】输入金额后获取二维码，然后打开您的手机QQ扫描二维码支付即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('快捷支付如何存款？')>-1}">
              <p>快捷支付如何存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登录官网，点击存款，选择【快捷网银】输入金额点击去支付，跳转网页内输入您的支付银行卡卡号，输入您银行卡支付密码和银行预留手机号码，获取验证码后即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('点卡如何存款？')>-1}">
              <p>点卡如何存款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登录官网，点击存款，选择【点卡】，点击选择您的点卡类型和面值，输入点卡卡号和点卡密码，点击确认支付即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('如何提款？')>-1}">
              <p>如何提款？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登录账户至个人中心，把游戏平台的额度转到主账户中，然后点击提款，选择您的绑定银行卡进行提款操作即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('提款卡如何绑定？')>-1}">
              <p>提款卡如何绑定？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登录账号后，点击【个人中心（我的）】，进入【账户设置】里可以看到“提款卡绑定”按钮，操作绑定您平日所使用的银行卡号，之后提款时无须再绑定，选择银行后就会出现对应卡号。每位玩家可以绑定3张不同的银行的卡号，如需更换银行账号，可在账户设置中自助解绑，或联系客服。</p>
                <p>注：不可绑定他人的银行卡，您银行卡的开户姓名需游戏账号注册姓名一致，否则无法提款成功。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('提款卡如何解绑？')>-1}">
              <p>提款卡如何解绑？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，解绑银行卡请您点击个人中心（我），点击帐户，选择设置提款卡解绑，输入您的注册姓名、邮箱、电话即可解绑。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金可以提款吗？')>-1}">
              <p>体验金可以提款吗？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，我们的注册体验金满100元即可提款，最高提款888元，无需流水。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('密保忘记？')>-1}">
              <p>密保忘记？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，需要您提供游戏账号，注册姓名、手机、邮箱。我们核实以后为您清除旧的密保问题，您再去个人中心(我的)，选择个人钱包我要提款，点击密保，设置新的密保问题即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('提款需要多久？')>-1}">
              <p>提款需要多久？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，首次提款时我们财务核对您的提款卡一些信息，确保钱款安全到账，提款时间延长一些，大概需要15分钟左右，之后的提款就都是3分钟内到账</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('提款历史记录查询？')>-1}">
              <p>提款历史记录查询？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>您好，请您登陆账号后，点击个人中心，账户清单查看提款记录。为了保证了玩家的信息安全，技术工程师会定期的清理数据，如有数据显示不完全，完全不用担心，更不会对您的账号造成任何影响。谢谢理解！</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('提款规则')>-1}">
              <p>提款规则</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>提款须知：</p>
                <p>1. 为了资金安全，提款仅支持银行卡提款，无法提款至支付宝或微信。</p>
                <p>2. 银行卡的开户姓名，必须与{{$SITE.config.title}}账号的注册姓名一致。</p>
                <p>3. 提款前请先绑定提款卡，并设置密保问题。</p>
                <p>4. 极速提款服务，提款无次数限制。</p>
                <p>5. 若不参与存送优惠，只要达到存款量的一倍流水即可申请提款。</p>
                <p>6. 若需取消提款，或遇到提款被取消，请联系在线客服协助。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('奖池中奖平台费收取规则？')>-1}">
              <p>奖池中奖平台费收取规则？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>关于老虎机平台费收取，若您中奖池在人民币5万以上，平台方将收取您20%的平台费用于平台建设，若中奖池在50万以上，平台方将收取30%的平台费，百万大额中奖另算，最低30%。</p>
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
    transition: all .3s ease-in;
    transform: rotate(90deg);
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
