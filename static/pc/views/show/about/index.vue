<template>
  <div class="about-main">
    <banner></banner>
    <div class="about-content content">
      <div class="menu-left">
        <menus></menus>
        <contact></contact>
      </div>
      <div calss="menu-right">
        <box></box>
      </div>
    </div>
  </div> 
</template>
<script>
  import banner from './components/banner'
  import menus from './components/menus'
  import contact from 'pc/components/contact'
  import box from './components/box' 
  export default {
    name: "",
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    activated() {},
    components: {
      banner,
      menus,
      contact,
      box
    }
  }

</script>
<style lang="scss">
.about-main{
  background:#202020;
  .about-content{
    display:flex;
    justify-content: space-between;
    padding:40px 0; 
  }
  .menu-left{
    
  }
  .menu-right{

  }

}
</style>
