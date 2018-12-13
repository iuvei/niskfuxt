<template>
  <div id="deposit" class="collapse-group tab-pane active">
          <ul ref="parentNode">
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('澳盈娱乐提供什么类型游戏？')>-1}">
              <p>澳盈娱乐提供什么类型游戏？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>真人娱乐：</p>
                <p>美女荷官，在线发牌！实时直播！无与伦比的感官刺激，犹如亲临现场博弈！</p>
                <p>AG国际厅/AG旗舰厅</p>
                <p>OG真人娱乐</p>
                <p>申博真人娱乐</p>
                <p>BBIN真人娱乐</p>
                <p></p>
                <p>老虎机游戏：</p>
                <p>{{WEBCONFIG.title}}娱乐收集全球2000多款最热门的电子游戏，且不断上架最新游戏！打老虎，来{{WEBCONFIG.title}}！</p>
                <p>目前老虎机游戏平台已涵盖：PT/SW/DT/MG/PNG/QT/NT/TTG/XIN</p>
                <p></p>
                <p>棋牌游戏：</p>
                <p>体验千人在线牛牛，扎金花，斗地主，麻将……等各类棋牌游戏！</p>
                <p>开元棋牌</p>
                <p>761棋乐游</p>
                <p></p>
                <p>体育游戏：</p>
                <p>提供全球最全玩法最多的体育赛事投注，与您共同为体育赛事喝彩！</p>
                <p>沙巴体育</p>
                <p>新皇冠体育</p>
                <p></p>
                <p>彩票游戏：</p>
                <p>高画质专业VR，彩票互动平台，让您随时随地极速游玩；彩种多，赔率高！</p>
                <p>VR彩票</p>
                <p></p>
                <p>捕鱼游戏：</p>
                <p>AG捕鱼</p>
                <p></p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('最近有什么出分游戏？')>-1}">
              <p>最近有什么出分游戏？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>遗憾我们无法直接告诉您玩什么游戏出分，原因是我们也不能确切肯定某款游戏一定出分。而且游戏是随机的，如果能确定某款游戏一定出分也不合理。但是我们时常会根据最近中到大奖的游戏，整理成帖子发布在客服朋友圈、官方公告等渠道，让您对出分游戏有一定了解，而且是您自己的了解。我们保证宣传真实性，是否借鉴建议您个人判断。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么查看游戏记录？')>-1}">
              <p>怎么查看游戏记录？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>PT手机网页、客户端：请您先进入到游戏页面，点击左上角的圆形图案(三条杠)后，选择(游戏历史)记录即可查询游戏记录。</p>
                <p>PT电脑网页、客户端：请您先进入到游戏页面，查找游戏界面的“小扳手”图标，点击出现“游戏记录”即可查询。</p>
                <p>DT网页：请您进入游戏后，点击右上角的 齿轮 图示，再点击记录，就可以查询到您的游戏记录。</p>
                <p>DT客户端：客户端登录帐号后点击左侧账单，选择游戏记录即可查看到投注记录。（无法查到游戏局号）</p>
                <p>SW手机网页：进入游戏后点击屏幕左上角的三条横岗，选择点击历史记录后就可以查看到记录。</p>
                <p>TTG电脑网页：进入游戏，点击 左下方设置 — 游戏历史记录，就可以查询到您的游戏记录。（仅支持Pragmatic游戏记录查询）</p>
                <p>TTG手机网页：进入游戏，点击 左下方三横杠 — 游戏历史记录，就可以查询到您的游戏记录。您可以查询到您最近45日的投注记录（仅支持PP游戏记录查询）</p>
                <p>PNG：请您进入游戏后，点击游戏页面右下方三横杠图示—再点击游戏历史，就可以查询到您的游戏记录。您可以查询到您最近20笔的投注记录。</p>
                <p>AG手机网页：请您登入ag网页版之后，点击右上方的下注记录，这样就可以查询您的投注记录，您可以查询到您最近100笔的投注记录。</p>
                <p>AG手机客户端：请您登入手机AG客户端后，点击右上方三横杠，点击记录-下注记录，这样就可以查询您的投注记录了，您可以查询到您最近7天的投注记录。</p>
                <p>AG电脑网页：请您登入AG页面后，点击左边的(记录)这样就可以查询您的下注记录了，您可以查询到您最近7天的投注记录。</p>
                <p>EBET：您登入游戏大厅界面后，点击左上方齿轮图示，之后选择资产明细，就可以看到您的游戏记录，您可以查询到您最近14天的投注记录。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('怎么查看流水（投注额）？')>-1}">
              <p>怎么查看流水（投注额）？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>自助洗码流水查询：前往个人中心（我的）>自助优惠>自助洗码，选择游戏平台后会显示您当前的洗码流水和洗码金额。支持自助洗码的平台：PT/TTG/NT/QT/DT/MG/PNG/SW（PT其他类游戏除外）</p>
                <p>户内转账流水查询：在您申请存送优惠时，如果需要知道您目前的流水，可以操作一下户内转账（游戏平台>主账户），若没有达到流水要求，系统会提示您目前的流水以及还差多少流水。（可能出现的意外情况是流水更新延迟，此时系统提示不准确的情况请咨询24小时在线客服）</p>
                <p>VIP晋级流水查询：前往个人中心（我的）>自助优惠>自助晋级，到达页面后会显示您当月的晋级流水。（当天投注的在次日18点前全部更新完毕）</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('游戏途中掉线怎么办？')>-1}">
              <p>游戏途中掉线怎么办？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>尽管您在网络连接稳定、正常的情况下很少会出现游戏掉线的情况，但难免遇到意外。不过所有游戏掉线后您都可以尝试自助重新连回，操作方式为：关闭所有游戏页面 > 重新打开掉线游戏。</p>
                <p>如果您在自助连回过程中遇到困难，请您根据以下方式提高重连成功率。</p>
                <p>1：清除浏览器缓存</p>
                <p>2：退出账号并重新登录</p>
                <p>3：尝试切换WIFI/4G网络</p>
                <p>4：彻底删除浏览器，重新安装浏览器登录或更换浏览器</p>
                <p>5：尝试更换不同的设备登录</p>
                <p>注意：手机掉线时请只用手机自助连回，电脑掉线时也请只用电脑自助连回。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('体验金不可以玩哪些游戏？')>-1}">
              <p>体验金不可以玩哪些游戏？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>体验金只限游玩PT/TTG/综合老虎机的游戏。所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏及刮刮乐游戏等，多旋转老虎机和老虎机奖金翻倍投注将不计算在内。若发现玩家在其他区域游戏，我们将取消体验金及用体验金获得的利润，且取消被随机抽取中奖的机会。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('登录PT客户端时账号需要加前缀？')>-1}">
              <p>登录PT客户端时账号需要加前缀？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>PT客户端登陆，必须在游戏账号前面加上大写字母“{{WEBCONFIG.PtBefore}}＂，登录手机app和官网不用加前缀。</p>
                <p>例如：{{WEBCONFIG.title}}娱乐登录账号为：owin888 则PT客户端登录账号极为：{{WEBCONFIG.PtBefore}}owin888。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('PT平台被锁住？')>-1}">
              <p>PT平台被锁住？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>PT后台被锁的情况可能是您多次登录PT游戏未成功，系统为了游戏资金安全自动冻结，不用担心，只需要您联系我们在线客服解冻即可。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('长时间无法进入游戏？')>-1}">
              <p>长时间无法进入游戏？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>如果您在某个游戏页面一直处于加载状态，建议您关闭游戏后清除缓存再重新打开。</p>
                <p>同时我们推荐用：谷歌浏览器（Chrome）、火狐浏览器（Firefox）进行游戏。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('游戏时遇到错误代码？')>-1}">
              <p>游戏时遇到错误代码？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>以下为各个错误代码的处理方式。</p>
                <p>安卓手机或电脑出现错误代码3</p>
                <p>出现“错误代码3”的提示，请您关闭安全卫士以及安全管家、腾讯管家等等会【阻止弹窗或是提示诈骗网站】的相关软件，再重新启动浏览器并且清除缓存后，即可进行游戏。</p>
                <p>PT苹果手机出现错误代码3</p>
                <p>苹果（IOS）如果进行PT网页游戏出现错误代码3，请您进入设置->safari->"阻止弹窗进行关闭"及"阻止COOKIE调整为永远允许"及"诈骗网站警告关闭"，您再重启浏览器登入即可正常访问游戏。</p>
                <p>TTG游戏错误代码0</p>
                <p>TTG游戏中出现错误代码0，有可能是伺服器连接超时，请您先关闭游戏稍候五分钟再进行游戏，或是先尝试其他游戏。</p>
                <p>TTG错误代码11</p>
                <p>TTG错误代码11是临时性发生的问题，如果您短时间还有持续发生该问题，请联系我们的24小时在线客服。</p>
                <p>TTG错误代码212</p>
                <p>TTG错误代码212这有可能是短暂的网站错误，请您重启游戏后再尝试看看，如果在短时间出现相同错误代码多次的话，请联系我们的24小时在线客服。</p>
                <p>MG错误代码4</p>
                <p>MG出现错误代码4，代表您的余额不足，建议您先存款转入综合老虎机游戏平台，再进行游戏谢谢。</p>
                <p>MG错误代码107</p>
                <p>MG出现错误代码107，代表您现在使用的IP是禁止游戏的国家或地区，请您使用国内IP 进行游戏。</p>
                <p>MG错误代码212</p>
                <p>您好，若是出现错误代码212，代表您在查询余额时出现错误，建议您清除您的缓存，并且完整退出游戏，保持网络稳定在重新登入试试看，谢谢您的理解。</p>
                <p>MG错误代码11</p>
                <p>您好，若是出现错误代码11，代表系统发生未知错误，建议您清除您的缓存，并且完整退出游戏，保持网络稳定在重新登入试试看，谢谢您的理解。祝您游戏愉快</p>
                <p>MG错误代码211</p>
                <p>您好，若是出现错误代码211，代表查询玩家余额超时。 （自玩家开始进入游戏开始，MG每间隔一会就会请求查询玩家的余额） 建议您清除您的缓存，并且完整退出游戏，保持网络稳定在重新登入试试看，谢谢您的理解。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('进入游戏显示黑屏？')>-1}">
              <p>进入游戏显示黑屏？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>建议您清除您的缓存，并且完整退出游戏，保持网络稳定在重新登入。依然遇到同样问题的话请即时咨询24小时在线客服。</p>
              </div>
            </li>
            <li @click="showMsg($event)" :class="{active:isShowMsg.indexOf('游戏出现卡顿问题？')>-1}">
              <p>游戏出现卡顿问题？</p>
              <span class="iconay ay-xiangyou"></span>
              <div class="collapse light">
                <p>如果您进入游戏时遇到卡顿，或者游戏过程中突然卡顿，请您参考以下方式进行优化。</p>
                <p>1、请先确保网络稳定。您可以观察主流视频网站、直播网站是否卡顿，来判断您的网络是否稳定。</p>
                <p>2、请清除设备的缓存数据（电脑、手机、平板），这样可以让您的设备留出更多空间给游戏提供好的环境。</p>
                <p>3、更换其他官方网址。</p>
                <p>备用网址：</p>
                <p>www.ow808.com</p>
                <p>www.ow888.com</p>
                <p>同时我们推荐用：谷歌浏览器（Chrome）、火狐浏览器（Firefox）进行游戏。</p>
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
