<template>
  <div class="wash-code">
    <Form :model="data" ref="transferForm" :label-width="100" class="discount-form">
      <!-- 游戏平台 -->
      <FormItem label="游戏平台">
        <Select v-model="type" placeholder="请选择游戏平台" @change="search(type)">
          <Option :label="item" v-for="(item,i)  in platformData" :value="item" :key="i"></Option>
        </Select>
      </FormItem>
      
      <!-- 开始时间 -->
      <FormItem label="开始时间" prop="data">
        <Input v-model.number="data.startDate" readonly placeholder="请选择游戏平台"></Input>
      </FormItem>

      <!-- 结束时间 -->
      <FormItem label="结束时间" prop="data">
        <Input v-model.number="data.endDate" readonly placeholder="请选择游戏平台"></Input>
      </FormItem>

      <!-- 总有效投注额 -->
      <FormItem label="总有效投注额" prop="data">
        <Input v-model.number="data.validAmount" readonly placeholder='无投注记录'></Input>
      </FormItem>

      <!-- 洗码比率 -->
      <FormItem label="洗码比率" prop="data">
        <Input v-model.number="data.rate" readonly placeholder='无投注记录'></Input>
      </FormItem>

      <!-- 返水金额 -->
      <FormItem label="返水金额" prop="data">
        <Input v-model.number="data.ximaAmount" readonly placeholder='无投注记录'></Input>
      </FormItem>

      <FormItem>
        <Button type="warning" @click="doXima" :disabled="!show">确定洗码</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {
    slot
  } from "@@/assets/data/games.json"
  import {washCode} from '@@/mixins/discount/washCode'
  export default {
    mixins:[washCode],
    data() {
      return {
        platformData:slot
      };
    },
    methods: {
      // 查询洗码结果
      search(type) {
        this.searchSubmit({gameId:type}).then(res=>{
          // window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      },
      // 确认洗码
      doXima() {
        this.doXimaSubmit({gameId: this.type}).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    components: {
    }
  };

</script>
<style lang="scss" scoped>
  .discount-form {
    margin-top: 30px;
    width: 500px;
    .Select {
      display: block !important;
    }
  }
</style>