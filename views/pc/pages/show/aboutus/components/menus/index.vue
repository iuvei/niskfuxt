<template>
  <!-- <div class="tab-menu">
    <router-link class="tab-menu-item" v-for="(menu,i) in menus" :key="i" :to="{name:'aboutIndex',params:{'tab':menu.key}}">
      <i :class="menu.ico"></i>{{menu.title}}
    </router-link>
  </div> -->
    <!-- <img src="./images/about.png" alt="">
    <router-link class="mail" v-for="(menu,i) in menus" :key="i" :to="{name:'aboutIndex',params:{'tab':menu.key}}">
      <i :class="menu.ico"></i>{{menu.title}}
    </router-link>
  </div> -->
  <div class="self-nav fl">
      <h3>自助服务</h3>
      <ul>
        <li v-for="(menu,i) in menus" :key="i">
          <nuxt-link class="mail" :to="{name:'show-aboutus',params:{'tab':menu.key}}">
            <i class="iconay" :class="menu.ico"></i><span>{{menu.title}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: [{
          title: '资金问题',
          ico: 'ay-tiyanjin',
          key: 'tab1'
        }, {
          title: '账户问题',
          ico: 'ay-denglu2',
          key: 'tab2'
        }, {
          title: '优惠问题',
          ico: 'ay-icon-test',
          key: 'tab3'
        }, {
          title: '游戏问题',
          ico: 'ay-youxi',
          key: 'tab4'
        },  {
          title: '常见问题',
          ico: 'ay-liuyan',
          key: 'tab5'
        }, {
          title: '关于我们',
          ico: 'ay-liebiao',
          key: 'tab6'
        }]
      };
    }
  }

</script>
<style lang="scss" scoped>
  // 如无特殊需求，必须加scoped，
.self-nav {
  width: 220px;
  background: #fff;
  max-height: 500px;
  h3 {
    background: #b58f53;
    background-image: -moz-linear-gradient(to right, #b58f53, #79512e);
    background-image: -o-linear-gradient(to right, #b58f53, #79512e);
    background-image: -webkit-linear-gradient(to right, #b58f53, #79512e);
    background-image: linear-gradient(to right, #b58f53, #79512e);
    text-align: center;
    font-size: 30px;
    color: #fff;
    line-height: 80px;
  }
  ul {
    padding: 10px 0;
  }
  li {
    font-size: 16px;
    line-height: 50px;
    a {
      padding-left: 50px;
      display: block;
      &:hover {
        background: #b58f53;
      background-image: -moz-linear-gradient(to right, #b58f53, #79512e);
      background-image: -o-linear-gradient(to right, #b58f53, #79512e);
      background-image: -webkit-linear-gradient(to right, #b58f53, #79512e);
      background-image: linear-gradient(to right, #b58f53, #79512e);
        color: #fff;
      }
      &.active{
        background: #b58f53;
      background-image: -moz-linear-gradient(to right, #b58f53, #79512e);
      background-image: -o-linear-gradient(to right, #b58f53, #79512e);
      background-image: -webkit-linear-gradient(to right, #b58f53, #79512e);
      background-image: linear-gradient(to right, #b58f53, #79512e);
        color: #fff;
      }
    }
    i {
      font-size: 24px;
      margin-right: 6px;
      vertical-align: middle;
    }
  }
}
</style>
