<template>
  <div class="logfriends-page">
    <logfriends></logfriends>
  </div>
</template>

<script>

  import logfriends from '@/components/admin/userLogs/friends/t1/index.vue';
  export default {
    layout: "admin", // 布局文件
    components: {
      logfriends,
    },
    data() {
      return {

      };
    },
    mounted() {


    },
    methods:{

    }

};
</script>

<style lang="scss">

</style>
