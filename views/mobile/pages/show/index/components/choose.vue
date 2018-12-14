<template>
  <label class="switch" @click="cheacked=!cheacked">
    <input type="checkbox" v-model="cheacked" style="display: none;">
    <div class="slider round"></div>
  </label>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cheacked: this.value
    };
  },
  watch: {
    value: val => {
      this.cheacked = val;
    },
    cheacked(val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang="scss" scoped="">
// @import "~mobile/assets/scss/mixin.scss";
.switch {
  position: relative;
  display: inline-block;
  width: 100px;
  height: r(48);
  line-height: r(40);
  vertical-align: middle;
}
input:checked + .slider {
  background-color: #f66;
}
input:checked + .slider:before {
  left: 100%;
  transform: translate(-103%, -50%);
}
/* Rounded sliders */
.slider.round {
  border-radius: 68px;
}
.slider.round:before {
  border-radius: 50%;
}
.slider:before {
  position: absolute;
  content: "";
  height: 95%;
  width: 48px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
</style>
