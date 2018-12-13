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