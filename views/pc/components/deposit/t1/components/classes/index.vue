<template>
<div>
    <Form ref="form" :label-width="100" :label-position="'left'" class="deposit-class">
      <!-- 支付银行，某些网银支付需要，动态读取接口 -->
      <FormItem label="存款渠道：">
        <span :class="{active:item.id==infoSelect.id}" @click="changeClass(item)" v-for="(item,key,i) in classes">
          {{item.remark}}
        </span>
      </FormItem>
      </Form>
</div>
</template>
<script>
  export default {
    data() {
      return {
        infoSelect: {
          id: ''
        },
        value: ''
      }
    },
    methods: {
      changeClass(item) {
        this.infoSelect = item
        // 是否有配置定制化内容
        if (item.customParams) {
          // 风控 要加小数点
          if (item.customParams.enterMode === 'USER_DECIMAL') {
            let msg = ''
            if (item.customParams.depositLimitOfDay) {
              msg =
                `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。<br>每日存款次数限制为：${item.customParams.depositLimitOfDay}次`
            } else {
              msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。`
            }
            // 风控 要加小数点
            $alert({
              dangerouslyUseHTMLString: true,
              message: msg
            })
          }
        }
        this.infoSelect = item;
        this.$emit('selectPayInfo', item)
      }
    },
    watch: {
      classes(val) {
        this.infoSelect = {};
        // this.value = val[0].id;
      }
    },
    props: {
      classes: {
        type: Array
      }
    },
    created() {},
  };

</script>
<style lang="scss" scoped>
  .dep_type {
    margin-top: 20px;
    font-size: 14px;
    line-height: 30px;

    .test {
      margin: 5px 0 5px 27px;

      &:first-child {
        margin: 5px 0 5px 11px;
      }
    }

    .dep_title {
      color: #fff;
    }

    .dep_type_tips {
      color: #fff;
    }

    .dep_item {
      display: inline-block;
      border: solid 2px #efefef;
      border-radius: 5px;
      background: #f8f8f8;
      min-width: 100px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      margin: 0 10px 4px 0;
      padding: 0 10px;
      margin-bottom: 20px;
      cursor: pointer;
      position: relative;

      &:hover,
      &.active {
        border: solid 2px #8bd5ff;
      }

      .dep_selected {
        line-height: 1;
        position: absolute;
        color: #39b6fe;
        top: -6px;
        right: -8px;
        font-size: 16px;
      }
    }
  }

</style>
