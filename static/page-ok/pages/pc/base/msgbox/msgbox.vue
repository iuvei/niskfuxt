<template>
  <transition>
    <div class="msg-box" v-show="visible">
      <div class="msg-box-title" v-show="title!=''" v-html="title">
      </div>
      <div class="msg-box-content" v-html="message">
      </div>
      <div class="msg-box-btn">
        <div v-show="showCancel" @click="action('cancel')" class="msg-btn-cancel">{{cancelText}}</div>
        <div @click="action('confirm')" class="msg-btn-confirm">{{confirmText}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
  import cover from '@/base/cover/cover';
  export default {
    mixins: [cover],
    props: {
      showCancel: {
        type: Boolean,
        default: false
      },
      showConfirm: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      action(action) {
        this.value = false;
        this.callback(action);
      },
      close() {
        this.value = false;
      }
    },
    data() {
      return {
        title: '提示',
        message: '',
        confirmText: "确定",
        cancelText: "取消",
      };
    }
  };

</script>
<style lang="scss">
  .msg-box {
    position: fixed;
    overflow: hidden;
    top: 50%;
    width: 80%;
    z-index: 2;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    text-align: center;
    background: #ececec;
    box-sizing: border-box;
  }

  .msg-box-title {
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    font-weight: bold;
    font-size: 16px;
    background: rgb(255, 236, 183);
    /* Old browsers */
    background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
    /* IE6-9 */
    color: #343434;
  }

  .msg-box-content {
    padding: 20px 40px;
    color: #666;
    line-height: 34px;
    font-size: 16px;
  }

  .msg-box-btn {
    display: flex;
    border-top: 1px #ccc solid;
  }

  .msg-btn-cancel,
  .msg-btn-confirm {
    cursor: pointer;
    flex: 1;
    box-sizing: border-box;
    border-right: 1px #ccc solid;
    line-height: 44px;
    color: #000;
    font-size: 16px;
    width: 50%;
  }

  .msg-btn-confirm {
    color: #b99548;
  }

</style>
