<template>
  <div class="cooperation-menu">
    <router-link :to="{name:'agent_advantage'}" class="menu-item advantage">澳盈优势</router-link>
    <router-link data-toggle="tab" to="/cooperation/proce" class="menu-item proce">加盟计划</router-link>
    <router-link data-toggle="tab" to="/cooperation/question" class="menu-item question">常见问题</router-link>
    <router-link data-toggle="tab" to="/cooperation/contact" class="menu-item contact">联系我们</router-link>
    <router-link to="/cooperation/register" class="menu-item agentregister">加盟注册</router-link>
  </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props:{},
        methods:{},
        computed:{},
        created(){
        },
        components:{
        }
    };
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.cooperation-menu{
  width: 100%;
  padding: r(20) 1%;
  background-color: #ffffff;
    .menu-item{
      width: 19%;
      display: inline-block;
      text-align: center;
      line-height: r(50);
      @include f(24px);
      color: #727272;
      &.active{
        background: $cl6;
        color:#ffffff;
        border-radius: r(10);
      }
    }
}
</style>
