<template>
  <div>
    <div class="u-c-shows">
      <div class="u-c-menu">
        <a class="u-c-router active">
          <span class="icobjh bjh-chongzhi"></span>充值</a>
      </div>
      <div class="u-c-box">
        <div class="deposit">
            <types @setClasses="setClasses"></types>
            <classes @selectPayInfo="selectPayInfo" :classes="classesSelect"></classes>
            <pay-form :payItem='infoSelect'></pay-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import types from './components/types'
  import classes from './components/classes'
  import payForm from './components/payForm'
  export default {
    data() {
      return {
        classesSelect: [],
        infoSelect: {},
        paySelect: 'wechat',
      }
    },
    watch: {

    },
    methods: {
      setClasses(data) {
        this.classesSelect = data;
        // this.infoSelect = {};
      },
      selectPayInfo(info) {
        this.infoSelect = info
      }
    },
    components: {
      types,
      classes,
      payForm
    }
  };

</script>