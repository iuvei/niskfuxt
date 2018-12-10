<template>
  <main class="main-live">
    <section class="page-ban" style="">
      <div class="live-top container">
        <h3>AG旗舰厅
          <span>澳盈推荐
            <i></i>
          </span>
        </h3>
        <div class="borter-live"></div>
        <div class="banner-text">
          <span>澳盈95%百家乐客户力荐平台</span>
          <br>全球首创，6张牌先发
          <br>6大特点：好路提示，赢钱机会绝不错过
        </div>
        <div class="banner-button-wrapper">
          <router-link class="red-button" :to="{name:'registerIndex'}">立即开户</router-link>
          <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:void(0);" data-api="9" data-apitype="1" starttime="1484390977000"
            endtime="1484409599000" @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">开始游戏</a>
        </div>
      </div>
    </section>
    <section class="main live-list">
      <div class="container">
        <div class="row">
          <div class="col-12-6">
            <div class="live-item">
              <img src="./images/live-ag.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">百家乐
                  </a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000"
                    endtime="1525231800000" @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">骰宝</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">龙虎斗</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">牛牛</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">无限21点</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">番摊</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">三公</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">二八杠</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">轮盘</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">色碟</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">德州扑克</a>
                  <a class="btn-live _vr_mt_check" href="javascript:void(0);" data-api="10" data-apitype="1" starttime="1525222800000" endtime="1525231800000"
                     @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">温州牌九</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">AG女优厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">囊括AG旗舰厅、
                <br> AG贵宾厅
                <br> 及多款热门电子游戏</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:void(0);" data-api="9" data-apitype="1" starttime="1525060200000"
                  endtime="1525060800000" @click="open(Games.href_ag, 'AG真人', 900, 640, true, islogin)">开始游戏 &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-12-6">
            <div class="live-item">
              <img src="./images/live-bbin.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">旗舰厅</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">国际厅</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">贵宾厅</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">龙虎斗</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">轮盘</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="9" data-apitype="1" starttime="1525060200000" endtime="1525060800000"
                    @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">骰宝</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">BB富贵厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">最老牌的博彩平台
                <br> 独创多台下注、金臂下注等
                <br> 特殊玩法</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="10" data-apitype="1" starttime="1525222800000"
                  endtime="1525231800000" @click="open(Games.href_bbin, 'BBIN真人', 900, 640, true, islogin)">开始游戏 &gt;</a>
              </div>
            </div>
          </div>
          <!-- <div class="col-12-6">
            <div class="live-item">
              <img src="https://tbxz553.sr111222.com/ftl/owin553/images/live-ebet.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="16" data-apitype="1" starttime="1525329000000" endtime="1525330800000"
                    onclick="apiLogin(16,'',1)">竞咪百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="16" data-apitype="1" starttime="1525329000000" endtime="1525330800000"
                    onclick="apiLogin(16,'',1)">龙虎</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="16" data-apitype="1" starttime="1525329000000" endtime="1525330800000"
                    onclick="apiLogin(16,'',1)">百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="16" data-apitype="1" starttime="1525329000000" endtime="1525330800000"
                    onclick="apiLogin(16,'',1)">轮盘</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="16" data-apitype="1" starttime="1525329000000" endtime="1525330800000"
                    onclick="apiLogin(16,'',1)">骰宝</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">EBET如意厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">游戏品种多，
                <br> 玩家可听到荷官对话，
                <br> 画面贴近实地赌场</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="16" data-apitype="1" starttime="1525329000000"
                  endtime="1525330800000" onclick="apiLogin(16,'',1)">开始游戏 &gt;</a>
              </div>
            </div>
          </div> -->
          <!-- <div class="col-12-6">
            <div class="live-item">
              <img src="https://tbxz553.sr111222.com/ftl/owin553/images/live-opus.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="24" data-apitype="1" starttime="" endtime="" onclick="apiLogin(24,'',1)">七喜百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="24" data-apitype="1" starttime="" endtime="" onclick="apiLogin(24,'',1)">骰宝</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="24" data-apitype="1" starttime="" endtime="" onclick="apiLogin(24,'',1)">龙虎</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="24" data-apitype="1" starttime="" endtime="" onclick="apiLogin(24,'',1)">轮盘</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">OPUS幸运厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">特有的PLAYBOY真人系统，
                <br> 深受欧美玩家喜欢</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="24" data-apitype="1" starttime=""
                  endtime="" onclick="apiLogin(24,'',1)">开始游戏 &gt;</a>
              </div>
            </div>
          </div> -->
          <div class="col-12-6">
            <div class="live-item">
              <img src="./images/live-og.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000" endtime="1525201200000"
                     @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">连环百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000" endtime="1525201200000"
                    @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000" endtime="1525201200000"
                   @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">龙虎斗</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000" endtime="1525201200000"
                   @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">骰宝</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000" endtime="1525201200000"
                   @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">番摊</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000" endtime="1525201200000"
                   @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">轮盘</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">OG东方厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">实时荷官互动
                <br> 360度旋转咪牌</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="7" data-apitype="1" starttime="1525191927000"
                  endtime="1525201200000" @click="open(Games.href_og, 'OG真人', 900, 640, true, islogin)">开始游戏 &gt;</a>
              </div>
            </div>
          </div>
          <!-- <div class="col-12-6">
            <div class="live-item">
              <img src="https://tbxz553.sr111222.com/ftl/owin553/images/live-sa.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="17" data-apitype="1" starttime="1525057200000" endtime="1525066200000"
                    onclick="apiLogin(17,'',1)">百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="17" data-apitype="1" starttime="1525057200000" endtime="1525066200000"
                    onclick="apiLogin(17,'',1)">龙虎</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="17" data-apitype="1" starttime="1525057200000" endtime="1525066200000"
                    onclick="apiLogin(17,'',1)">轮盘</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="17" data-apitype="1" starttime="1525057200000" endtime="1525066200000"
                    onclick="apiLogin(17,'',1)">骰宝</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="17" data-apitype="1" starttime="1525057200000" endtime="1525066200000"
                    onclick="apiLogin(17,'',1)">番摊</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">SA澳门厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">极富现场感的操作体验及
                <br> 娱乐环境，
                <br>独创免佣点数玩法</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="17" data-apitype="1" starttime="1525057200000"
                  endtime="1525066200000" onclick="apiLogin(17,'',1)">开始游戏 &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-12-6">
            <div class="live-item">
              <img src="https://tbxz553.sr111222.com/ftl/owin553/images/live-gd.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="5" data-apitype="1" starttime="1524547334000" endtime="1524556800000"
                    onclick="apiLogin(5,'',1)">3D百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="5" data-apitype="1" starttime="1524547334000" endtime="1524556800000"
                    onclick="apiLogin(5,'',1)">多台百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="5" data-apitype="1" starttime="1524547334000" endtime="1524556800000"
                    onclick="apiLogin(5,'',1)">多彩百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="5" data-apitype="1" starttime="1524547334000" endtime="1524556800000"
                    onclick="apiLogin(5,'',1)">轮盘</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">GD锦绣厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">2D+迷你游戏、
                <br> 3D不同效果真人体验，
                <br>平台画面清晰</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="5" data-apitype="1" starttime="1524547334000"
                  endtime="1524556800000" onclick="apiLogin(5,'',1)">开始游戏 &gt;</a>
              </div>
            </div>
          </div>
          <div class="col-12-6">
            <div class="live-item">
              <img src="https://tbxz553.sr111222.com/ftl/owin553/images/live-ds.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="1" data-apitype="1" starttime="1519765200000" endtime="1519768800000"
                    onclick="apiLogin(1,'',1)">百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="1" data-apitype="1" starttime="1519765200000" endtime="1519768800000"
                    onclick="apiLogin(1,'',1)">轮盘</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="1" data-apitype="1" starttime="1519765200000" endtime="1519768800000"
                    onclick="apiLogin(1,'',1)">龙虎</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="1" data-apitype="1" starttime="1519765200000" endtime="1519768800000"
                    onclick="apiLogin(1,'',1)">骰宝</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="1" data-apitype="1" starttime="1519765200000" endtime="1519768800000"
                    onclick="apiLogin(1,'',1)">斗牛</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">DS贵宾厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">来自菲律宾最大赌场的
                <br> 视频直播，专业电投手，
                <br>呐喊助威</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="1" data-apitype="1" starttime="1519765200000"
                  endtime="1519768800000" onclick="apiLogin(1,'',1)">开始游戏 &gt;</a>
              </div>
            </div>
          </div> -->
          <div class="col-12-6">
            <div class="live-item">
              <img src="./images/live-shenbo.jpg" alt="" style="position: absolute;">
              <div class="cover" style="position: absolute;">
                <div class="blur">
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                     @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                    @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">星级百家乐</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                    @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">互动多合一</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                    @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">龙虎</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                    @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">轮盘</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                    @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">三公</a>
                  <a class="btn-live _vr_mt_check" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000" endtime="1525066200000"
                    @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">骰宝</a>
                </div>
              </div>
            </div>
            <div class="cell-text-wrapper">
              <div class="cell-title">SUN太阳厅</div>
              <div class="redpink-line"></div>
              <div class="cell-text">服务至上的亚洲线上赌场
                <br> 全球口碑最好之一</div>
              <div class="cell-more">
                <a class="start-game _vr_mt_check _vr_mt_slogan" href="javascript:" data-api="33" data-apitype="1" starttime="1525050000000"
                  endtime="1525066200000" @click="open(Games.href_sunbet, 'SUNBET真人', 900, 640, true, islogin)">开始游戏 &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
  import {
    Games,
    Download
  } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        Games,
        Download,
        href: window.location.href
      };
    },
    props: {},
    methods: {
      open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState)
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    created() {},
    components: {}
  };

</script>
<style lang="scss" scoped>
  /*=========== live ====================*/

  .main-live {
    min-height: 900px;
    .container{
      width: 1280px;
      // padding: 0;
      // padding-left: 0px;
      position: relative;
      overflow: visible;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .live-top {
    display: block;
    margin: 0 auto;
    padding-left: 650px;
    h3 {
      font-size: 24px;
      color: #fff;
      margin-top: 70px;
      span {
        font-size: 14px;
        color: #d33442;
        margin-left: 10px;
        i {
          display: inline-block;
          background: url(./images/icon-like.png) no-repeat;
          width: 22px;
          height: 23px;
          position: relative;
          top: 2px;
          right: -5px;
        }
      }
    }
    .borter-live {
      border-bottom: 2px solid #cc2944;
      width: 37px;
      margin-top: 10px;
      margin-bottom: 17px;
    }
    .banner-text {
      font-size: 14px;
      color: #b0b0b0;
      line-height: 20px;
      span {
        color: #d33442;
        font-size: 14px;
      }
    }
    >a {
      color: #cca352;
      text-decoration: none;
      font-size: 14px;
      margin-top: 10px;
    }
    .banner-button-wrapper {
      margin-top: 22px;
      .red-button {
        background: url(./images/red-button.png);
        width: 120px;
        height: 37px;
        text-align: center;
        line-height: 37px;
        color: #ffffff;
        text-decoration: none;
        display: inline-block;
      }
      .start-game {
        border: 1px solid #cca352;
        color: #cca352;
        text-align: center;
        width: 118px;
        height: 35px;
        display: inline-block;
        line-height: 35px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  .page-ban{
    height: 300px;
    overflow: hidden;
    background:url('./images/live-banner.jpg') no-repeat center;
  }
  .main.live-list {
    background: #222;
    padding: 30px 0;
    min-height: 600px;
    .col-12-6 {
      height: 225px;
      margin: 14px 0;
    }
    .live-item,
    .cell-text-wrapper {
      float: left;
    }
    .live-item {
      .cover {
        width: 364px;
        height: 225px;
        text-align: center;
        opacity: 0;
        transition: all .3s;
        &:hover {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
          opacity: 1;
        }
      }
      .blur {
        margin-top: 110px;
      }
      .btn-live {
        display: inline-block;
        border-radius: 3px;
        color: #ffffff;
        height: 30px;
        line-height: 30px;
        padding: 0 12px;
        font-size: 14px;
        text-align: center;
        margin: 3px;
      }
      .blur a {
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(5),
        &:nth-child(7),
        &:nth-child(9),
        &:nth-child(11),
        &:nth-child(13),
        &:nth-child(15) {
          border: 1px solid #bf5ef9;
        }
        &:nth-child(1):hover,
        &:nth-child(3):hover,
        &:nth-child(5):hover,
        &:nth-child(7):hover,
        &:nth-child(9):hover,
        &:nth-child(11):hover,
        &:nth-child(13):hover,
        &:nth-child(15):hover {
          background: #bf5ef9;
        }
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(6),
        &:nth-child(8),
        &:nth-child(10),
        &:nth-child(12),
        &:nth-child(14),
        &:nth-child(16) {
          border: 1px solid #33bafe;
        }
        &:nth-child(2):hover,
        &:nth-child(4):hover,
        &:nth-child(6):hover,
        &:nth-child(8):hover,
        &:nth-child(10):hover,
        &:nth-child(12):hover,
        &:nth-child(14):hover,
        &:nth-child(16):hover {
          background: #33bafe;
        }
      }
    }
    .cell-text-wrapper {
      float: left;
      width: 260px;
      background: #181818;
      height: 226px;
      overflow: hidden;
      padding: 22px 33px 0;
      margin-left: 364px;
      .cell-rule {
        float: right;
        color: #828282;
        font-size: 13px;
        text-decoration: none;
        border-bottom: 1px solid #828282;
      }
      .cell-title {
        font-size: 22px;
        color: #ffffff;
        line-height: 24px;
      }
      .cell-text {
        color: #828282;
        font-size: 12px;
        line-height: 20px;
      }
      .redpink-line {
        border-bottom: 2px solid #cc2944;
        width: 37px;
        margin-top: 10px;
        margin-bottom: 17px;
      }
      .start-game {
        font-size: 13px;
        color: #cca352;
        text-decoration: none;
        line-height: 26px;
        margin-top: 20px;
        display: block;
        width: 90px;
        height: 26px;
        text-align: center;
        border: 1px solid;
        border-radius: 3px;
        &:hover {
          color: red;
        }
      }
    }
  }
  .row {
    margin-left: -10px;
    margin-right: -10px;
}
</style>
