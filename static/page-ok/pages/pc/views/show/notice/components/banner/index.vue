<template>
  <div class="tips-circular">
    <img src="./images/banner.png" alt="">
    <div class="content">
      <span class="icobjh bjh-tongzhi"></span>
      <ul id="con1" ref="con1" :class="{anim:animate == true}">
        <li v-for="item in myData" class="pointer" :key="item.id" @click="showTips(item)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <Tips></Tips>
  </div>
</template>
<script>
  import  {getNewAnnouncement} from '@/api/show';
  import Tips from "./tips";
  export default {
    name: "",
    data() {
      return {
        myData:[],
        animate:false
      }
    },
    props: {},
    created() {
      getNewAnnouncement().then(res=>{
        res.success&&(this.myData=res.data);
      })
      setInterval(this.scroll,2000)
    },
    methods:{
      showTips(item){
        this.$bus.$emit('getTipsShow',true)
        this.$bus.$emit('getTipsData',item)
      },
      scroll(){
        this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
            this.myData.push(this.myData[0]);  // 将数组的第一个元素添加到数组的
            this.myData.shift();               //删除数组的第一个元素
            this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },1000)
      }
    },
    components:{
      Tips
    }
  }
</script>
<style spcoed lang="scss">
  .tips-circular {
    // height: 54px;
    color: #787878 ;
    line-height: 54px;
    font-size:14px;
    min-width: 1200px;
    img{
      width: 100%;
    }
    .content {
      display:flex;
      box-sizing: border-box;
      height: 54px;
      overflow: hidden;
      padding-left: 30px;
      width: 800px;
      margin-top: -54px;
      .icobjh{
        font-size:20px;
        width:30px;
        color: #e2b85a;
      }
      .anim{
        transition: all 0.5s;
        margin-top: -54px;
      }
      ul{
        width: 810px;
        color: #e2b85a;
        li{
          list-style: none;
          line-height: 54px;
          height: 54px;
          cursor: pointer;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
      
    }
  }
</style>
