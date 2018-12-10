<template>
  <div class="feature">
    <div class="content pos">
      <div class="col col1">
        <div class="prize">
          CNY
          <span class="jackpot-count" data-provider="AG">{{total2|stringSplit}}</span>
        </div>
        <p>AG电游总奖池</p>
      </div>
      <div class="col ">
        <div class="prize">
          CNY
          <span class="jackpot-count" data-provider="PT">{{total|stringSplit}}</span>
        </div>
        <p>总奖池</p>
      </div>
      <div class="col col3">
        <div class="prize">
          CNY
          <span class="jackpot-count" data-provider="MG">{{total3|stringSplit}}</span>
        </div>
        <p>MG电游总奖池</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    jackpot
  } from '@/controls/shows/jackpot'
  export default {
    data() {
      return {
        total: 0,
        total2:0,
        total3:0,
        tickerStartTime: (new Date()).getTime(),
        startNum: 0,
        step: 0.1,
        interval: null
      };
    },
    beforeDestroy() {
      window.clearInterval(this.interval)
    },
    methods: {
      randomMoney() {
        let _this = this;
        let x = _this.startNum * 1 + ((((new Date()).getTime() - _this.tickerStartTime) / 2689) * _this.step);
        _this.total = x.toString().$toFixed().strSplit();
        _this.total2 = (x*0.68).toString().$toFixed().strSplit();
        _this.total3 = (x*0.56).toString().$toFixed().strSplit();

      },
      Start() {
        let _this = this;
        _this.interval = setInterval(() => {
          _this.randomMoney();
        }, 199)
      }
    },
    created() {
      // if (!window.xmlstring || !window.xmlstring.jpxml) {
      //   let _this = this;
      //   window.xmlstring = {}
      //   let _script = document.createElement('script');
      //   _script.src = '//tickers.playtech.com/jpdata/datalink/playtech.xml.js';
      //   _script.onload = function () {
      //     let xmldoc = {};
      //     if (typeof (DOMParser) != "undefined") {
      //       var parser = new DOMParser();
      //       xmldoc = parser.parseFromString(xmlstring.jpxml, "text/xml");
      //     } else {
      //       try {
      //         xmldoc = new ActiveXObject("Microsoft.XMLDOM");
      //         xmldoc.async = false;
      //         xmldoc.loadXML(xmlstring.jpxml);
      //       } catch (e) {}
      //     }
      //     var a = xmldoc.querySelector('amount[currency="cny"]');
      //     xmlstring.jpxml = '1';
      //     _this.startNum = xmlstring.startNum = Number(a.firstChild.nodeValue);
      //     _this.step = xmlstring.step = Number(a.getAttribute("step"));
      //     _this.Start();
      //   }
      //   document.body.appendChild(_script)
      // } else {
      //   this.startNum = window.xmlstring.startNum || 552568331.52;
      //   this.step = window.xmlstring.step || 40.10874;
      //   this.Start();
      // }
      this.startNum = 740252258.64;
      this.step = 40.10874;
      this.Start();
    }
  }

</script>
<style lang="scss" scoped>
  .feature {
    background: url("./images/feature.jpg") no-repeat center top #1e1e1e;
    width: 100%;
    height: 120px;
    .pos{
      position: relative;
    }
    .col {
      float: left;
      // position: absolute;
      // left: 50%;
      // transform: translateX(-50%);
      width: 312px;
      text-align: center;
      padding-top: 27px;
    }
    .col1 {
      margin-left: 104px;
    }
    .col2 {
      margin-left: 36px;
    }
    .col3 {
      margin-left: 22px;
    }
  }


  .feature .col {
    .prize {
      height: 24px;
      text-align: center;
      color: #999;
      font-size: 26px;
      text-shadow: 2px 6px 5px #000;
      span {
        color: #fff;
        font-size: 26px;
      }
    }
    p {
      font-size: 16px;
      color: #ffcc66;
      margin: 15px 0 0;
      text-shadow: 2px 6px 5px #000;
    }
  }

</style>
