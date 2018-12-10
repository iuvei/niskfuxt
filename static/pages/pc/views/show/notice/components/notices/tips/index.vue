<template>
  <div class="noticeTips" v-show="value">
    <div class="noticeTipsContent">
      <img src="./images/close.png" @click="$emit('input',false)">
      <h1>
        系 统 公 告 NOTICES
        <span>
          system notification
        </span>
      </h1>
      <div class="n-show">
        <h2 class="n-title">{{data.title}}</h2>
        <div class="n-content">
          {{data.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "tips",
    data() {
      return {

      }
    },
    props: {
      value: Boolean,
      data: {
        required: true,
        default: {
          title: "",
          content: ""
        }
      }
    },
    computed: {},
    watch: {
    },
    methods: {
      close(){
        this.value = false;
      }
    },
    created() {
    },
    activated() {
    },
    components: {}
  }
</script>
<style spcoed lang="scss">
.noticeTips {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);

  .noticeTipsContent{
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.3);
    width: 605px;
    min-height: 355px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    border: 3px solid #008fe0;
    border-radius: 10px;
    img{
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    h1{
      font-size: 36px;
      color: #fff;
      text-align: center;
      line-height: 36px;
      padding: 15px 0;

      background: #0b6dc3;
      background: -webkit-linear-gradient(top, #008edf 0%, #005bad 50%, #0b6dc3 100%);
      background: -webkit-gradient(linear, left top, left bottom, from(#008edf), color-stop(50%, #005bad), to(#0b6dc3));
      background: linear-gradient(to bottom, #008edf 0%, #005bad 50%, #0b6dc3 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#008edf', endColorstr='#0b6dc3', GradientType=1);

      span{
        font-size: 16px;
        display: block;
        line-height: 22px;
      }
    }

    .n-show{
      margin: 20px 50px 30px;
    }

    .n-title{
      font-size: 30px;
      color: #008fe0;
      text-align: center;
    }

    .n-content{
      font-size: 18px;
      color: #008fe0;
      line-height:1.6;
      max-height:300px;
      overflow:hidden;
      &:hover{
        overflow-y:scroll;
      }
    }
  }
}
</style>
