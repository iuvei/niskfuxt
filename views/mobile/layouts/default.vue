<template>
  <div class="layoutessfklj">
    <mt-header title="multiple button">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
        <mt-button @click="handleClose">close</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <nuxt/>
<mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="/assets/100x100.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="/assets/100x100.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="/assets/100x100.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="/assets/100x100.png">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods:{
    handleClose(){}
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log(window.location.href)
  }
};
</script>