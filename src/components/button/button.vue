<template>
  <div :style="{ width: width+'px', height: height + 'px', background: theme}"
       :class="[{active: hover, disable: disabled}, 'btn']"
       @mouseover = "hover = true" @mouseleave = "hover = false">
    <div v-if="loading"><spinner/></div>
    <div v-else>{{text}}</div>
  </div>
</template>

<script>
import { spinner } from '../spinner'
export default {
  name: 'Button',
  components: {
    spinner
  },
  props: {
    text: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 52
    },
    height: {
      type: Number,
      default: 32
    },
    theme: {
      type: String,
      default: 'green'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      defaul: false
    }
  },
  data () {
    return {
      hover: false
    }
  }
  // mounted: {
  //   // if (disabled) {
  //   //   this.hover = false
  //   // }
  // }
}
</script>

<style lang="scss" scoped>
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.15000000596046448px;
    color: #fff;
}
.active {
  background: grey !important;
}
.disable {
  background: grey !important;
}

</style>
