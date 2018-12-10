<template>
  <div id="contentbg" class="new-bg">
    <div class="middlebg">
      <div class="topbg">
        <div class="content" style="background-attachment:scroll;">
          <div class="main">
            <notices class='notice-show'></notices>
          </div>
        </div>
      </div>
    </div>
    <!-- <banner></banner>
    <annunciate></annunciate>
    <div class="promomain clear">
      <notices class='notice-show'></notices>
    </div> -->
  </div>
</template>
<script>
  import banner from "./components/banner"
  import annunciate from 'pc/components/annunciate'
  import menus from "pc/components/contact"
  import notices from "./components/notices"
  export default {
    data() {
      return {};
    },
    components: {
      banner,
      menus,
      notices,
      annunciate
    },
  }

</script>
<style lang="scss" scoped>
  .new-bg {
    background: url(./images/banner-notice.jpg) no-repeat center -230px;
    background-color: #181b20;
  }

  #contentbg {
    width: 100%;
    min-width: 1200px;
    padding-bottom: 50px;
    .middlebg{
      width: 100%;
      overflow: hidden;
      .main{
        overflow: hidden;
        margin: 10px auto 42px;
      }
      .topbg{
        width: 100%;
        overflow: hidden;
        .content{
          width: 1200px;
          margin: 0 auto;
        }
      }
    }
    .middlebg .topbg {
      padding-top: 350px;
    }
  }
  
</style>
