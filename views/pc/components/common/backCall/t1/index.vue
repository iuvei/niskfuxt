<template>
  <div class="backCall-form">
    <Form :model="formData" label-position="top">
      <FormItem label="手机号">
        <Input v-model="formData.phone" placeholder="请填写手机号" :maxlength="11"></Input>
      </FormItem>
      <FormItem>
        <Button type="error" @click="submit">确认回拨</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { backCall } from "@@/mixins/common/backCall"; // 引入公共业务逻辑
export default {
  mixins: [backCall], // 混合
  data() {
    return {};
  },

  methods: {
    submit() {
      this.backCall(this.formData)
        .then(res => {
          // window.toast(res.message)
          this.$Message.success({
            content: res.message,
            closable: true
          });
        })
        .catch(err => {
          this.$Message.error({
            content: err.message,
            closable: true
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
