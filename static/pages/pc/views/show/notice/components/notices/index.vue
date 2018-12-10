<template>
  <div class="item">
    <div class="left">
      <dl>
        <dt>联系方式：</dt>
        <dd class="email">邮箱：{{SETTING.email}}</dd>
        <dd style="padding-left:0;">投诉邮箱：{{SETTING.SuggessEmail}}</dd>
      </dl>
    </div>
    <div class="items news-right">
      <h2>公告</h2>
      <div class="container">
        <dl id="newsBox">
          <dd v-for="(item,i) in data" :key="i" @click="isShowBox = i" >
            <div class="title clearfix">
              <p class="fl news-title">{{item.title}}</p>
              <em>{{item.createtime}}</em>
            </div>
            <div class="box" v-show="isShowBox == i">
              <span>{{item.content}}</span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>

</template>
<script>
  import Tips from "./tips";
  import {
    getNewAnnouncement
  } from "@/api/show";
  import {
    SETTING
  } from "@/assets/data"
  // 这里需要添加一个功能，点击进来后自动打开某个公告的详情
  export default {
    data() {
      return {
        cur: {},
        show: false,
        SETTING,
        isShowBox:'-1',
        data: [] //records
      };
    },
    components: {
      Tips
    },
    methods: {
      itemClk(item, i) {
        this.show = true;
        this.cur = item;
      },
      checkOpen() {
        // 看下是否有带参数过来，自动展开对应的的详情
        // if (this.$route.params && this.$route.params.id) {
        //   const _index = this.data.findIndex(item => {
        //     return item.id == this.$route.params.id
        //   })
        //   console.log(_index)
        //   if (_index >= 0) {
        //     this.itemClk(this.data[_index])
        //   }
        // }
      }
    },
    created() {
      //加载数据
      getNewAnnouncement().then(res => {
        if (res.success) {
          this.data = res.data.map(item => {
            item.already = false;
            return item;
          });
          this.checkOpen()
          console.log(this.$route)
        } else {
          toast(data.message);
        }
      })
    },
    activated() {
      this.checkOpen()
    }
  }

</script>
<style lang="scss" scoped>
  #newsBox {
    .box {
      margin-top: 20px;
      text-indent: 2em;
      color: #fede9a;
      transition: all 1s;
      opacity: 1;
    }
    .title {
      cursor: pointer;
    }
  }
  .news-title {
    color: #e7c16a;
  }

  h2 {
    line-height: 61px;
    text-align: center;
    font-size: 21px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #6d572b;
    color: #fede9a;
  }

  .news-right {
    float: left;
    margin-left: 20px;
    border: 1px solid #6d572b;
    width: 911px;
    background: #282624;
  }

  .right {
    width: 700px;
    min-height: 750px;
    overflow: hidden;
    float: left;
  }

  .left {
    border: 1px solid #6d572b;
    padding: 20px 0 0 20px;
    position: relative;
    width: 245px;
    float: left;
    background: #282624;
    min-height: 300px;
    color: #fede9a;
    dl {
      margin-bottom: 20px;
      
      dt {
        font-size: 18px;
      }

      dd {
        line-height: 30px;
        padding-left: 30px;
        &.email {
          background: url(./images/email.png) no-repeat left center;
        }
      }
    }

    .pic {
      padding-bottom: 130px;
      width: 230px;
      overflow: hidden;
      margin-top: 29px;
    }
  }

  .items dl {
    margin-top: 32px;
    padding-bottom: 30px;
  }

  .items .container dl dd {
    line-height: 30px;
    padding-left: 30px;
    border-bottom: 1px solid rgba(191, 155, 83, 0.3);
    margin: 0 14px;
    padding: 5px 15px;

    em {
      float: right;
      color: #e7c16a;
      margin-left: 100px;
    }
  }
  .container {
    display: table;
    width: 100%;
    border-collapse: collapse;
    min-height: 600px;
}
.clearfix{
    zoom: 1;
    &::before,&::after{
      content: '';
      display: table;
    }
    &::after{
      clear: both;
      height: 0;
      visibility: hidden;
      overflow: hidden;
    }
  }
</style>
