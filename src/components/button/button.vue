<template>
  <div class="btn" :style="{ width: width+'px', height: height + 'px', background: colorBtn}">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Button',
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
    colorBtn: {
      type: String,
      default: 'rgba(49, 174, 84, 1)'
    }
  }
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

</style>
