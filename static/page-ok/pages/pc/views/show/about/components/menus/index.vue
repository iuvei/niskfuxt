<template>
  <div class="tutorials_left">
    <ul class="tutorials_left_ul">
      <li v-for="(menu,i) in menus" :key="i">
        <a href="javascript:void(0);" @click="setRouter(menu)" :class="{active:isShowChild == menu.title}">
          <div class="tutorials_level">
            <img :src="getImg(menu.ico)" alt="">
            <span>{{menu.title}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShowChild: '',
        menus: [{
            title: '关于我们',
            ico: 'icon1',
            key: 'tab1'
          },
          {
            title: '用户协议',
            ico: 'icon2',
            key: 'tab2'
          },
          {
            title: '博彩责任',
            ico: 'icon3',
            key: 'tab3'
          },
          {
            title: '免责条款',
            ico: 'icon4',
            key: 'tab4'
          },
          {
            title: '联系我们',
            ico: 'icon5',
            key: 'tab5'
          },
          {
            title: '用户隐私',
            ico: 'icon6',
            key: 'tab6'
          },
          {
            title: '牌照展示',
            ico: 'icon7',
            key: 'tab7'
          },
        ]
      };
    },
    methods:{
      setRouter(menu){
        this.isShowChild = menu.title
        this.$router.push({name:'aboutIndex',params:{'tab':menu.key}})
      },
      getImg(ico){
        return require(`./images/${ico}.png`)
      }
    }
  }

</script>
<style lang="scss" scoped>
  // 如无特殊需求，必须加scoped，
.tutorials_left {
    margin: 0;
    padding: 0;
    width: 300px;
    height: 680px;
    display: block;
    float: left;
    background: url('./images/bg.png') no-repeat;
    background-size: contain;

    .tutorials_defaultImg {
      cursor: pointer;
    }
    ul.tutorials_left_ul {
      position: relative;
      z-index: 2;
      top: 32%;
      width: 77%;
      li {
        text-align: left;
        margin: 0;
        position: relative;
        margin-top: 15px;
        a {
          cursor: pointer;
          text-decoration: none;
          font-size: 16px;
          color: #787878;
          .tutorials_level{
            width: 180px;
            margin: 0 auto;
            text-align: center;
            border-radius: 4px;
            background-image: -moz-linear-gradient( 0deg, rgb(164,121,41) 0%, rgb(243,230,172) 100%);
            background-image: -webkit-linear-gradient( 0deg, rgb(164,121,41) 0%, rgb(243,230,172) 100%);
            background-image: -ms-linear-gradient( 0deg, rgb(164,121,41) 0%, rgb(243,230,172) 100%);
            background-image: linear-gradient( 0deg, rgb(164,121,41) 0%, rgb(243,230,172) 100%);
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.33),inset 0px 2px 1px 0px rgba(255, 255, 255, 0.35);
            height: 40px;
            font-size: 20px;
            font-family: "Microsoft YaHei";
            font-weight: bold;
            text-shadow: 0px 1px 0px rgba(255, 218, 114, 0.004);
            color: #1a160a;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              margin-right: 5px;
            }
          }
          .tutorials_icon01 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
          .tutorials_icon02 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
          .tutorials_icon03 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
          .tutorials_icon04 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
          .tutorials_icon05 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
          .tutorials_icon06 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
          .tutorials_icon07 {
            height: 60px;
            position: relative;
            z-index: 2;
            vertical-align: middle;
            line-height: 60px;
            padding-left: 60px;
            background-position: left center;
          }
        }
        img {
          vertical-align: middle;
          position: relative;
          z-index: 2;
        }
        // &:before {
        //   content: "";
        //   position: absolute;
        //   top: -5em;
        //   left: 2em;
        //   width: .1em;
        //   height: 8em;
        //   background: #e7e7e7;
        //   z-index: 1;
        // }
        &:first-child:before {
          display: none;
        }
      }
    }
  }
</style>
