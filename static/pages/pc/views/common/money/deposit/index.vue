<template>
  <div class="deposit">
      <types @setClasses="setClasses"></types>
      <div class="deposit_content">
        <classes @selectPayInfo="selectPayInfo" :classes="classesSelect"></classes>
        <pay-form :payItem='infoSelect'></pay-form>
        <tips></tips>
      </div>
  </div>
</template>
<script>
  import types from './components/types'
  import classes from './components/classes'
  import payForm from './components/payForm'
  import tips from './components/tips'
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
        this.infoSelect = {};
      },
      selectPayInfo(info) {
        this.infoSelect = info
        // console.log(this.infoSelect)
      }
    },
    components: {
      types,
      classes,
      payForm,
      tips
    }
  };

</script>
<style lang="scss">
.deposit {			
      display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  .deposit_content{
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #333333;
    padding: 20px;
    width: 100%;
  }
  .deposit_menus{
    background-color: rgba(0, 0, 0, 0.7);
    margin-right: 20px;
  }
}
</style>
