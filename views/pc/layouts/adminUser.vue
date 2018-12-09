<template>
  <Layout class="adminUser t1">
    <Content>
      <Row class="banner">
        <Col span="24">
        <!--banner></banner-->
        </Col>
      </Row>
    </Content>
    <Content>
      <Row class="info">
        <Col span="24">
        <userInfo></userInfo>
        </Col>
      </Row>
    </Content>
    <Content>
      <Row class="banner">
        <Col span="24">
        <!--banner></banner-->
        </Col>
      </Row>
    </Content>
    <Content>
      <Row class="show">
        <Col span="5">
          <userMenu></userMenu>
        </Col>
        <Col span="18" offset="1">
          <div class="window-title">标题</div>
          <div class="window-show">
            <nuxt />
          </div>
        </Col>
      </Row>
    </Content>
  </Layout>
</template>
<script>
  import banner from "@/components/banners/t1";
  import userInfo from "@/components/userInfo/t1";
  import userMenu from "@/components/userMenu/t1";

  export default {
    computed: {
      userData() {
        return this.$store.getters.userData;
      }
    }

    ,
    mounted() {
      // console.log(window.location.href)
    }

    ,
    components: {
      banner,
      userInfo,
      userMenu
    }
  }

  ;

</script>
<style lang="scss">
  // 引用用户中心需用的iconfont 
  @import url("//at.alicdn.com/t/font_700045_jfc3obnxxb.css");
  .adminUser.t1 {
    background-image: url("/img/bg1.jpg");
    background-color: #000;
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding-top: 40px;
    padding-bottom: 40px;
    .banner {
      width: 1200px;
      margin: 0 auto;
    }
    .info {
      width: 1200px;
      margin: 20px auto;

    }
    .show{
      width:1200px;
      margin:20px auto;
    }
    .window-title{
      background: #151515;
      color: #fff;
      padding: 20px 10px;
      font-size: 16px;
    }
    .window-show{
      // width: 100%;
      background-color: #232323;
      min-height: 500px;
      padding: 20px;
    }
  }

</style>
