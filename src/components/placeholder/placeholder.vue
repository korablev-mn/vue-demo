<template>
  <div class="head"></div>
  <div class="flex-container" v-for='(n, ndx) in paragraphs' :key=ndx >
      <div class="block1"></div>
      <div class="block2"></div>
      <div class="block3"></div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  height: 140px;
  background: rgba(144, 159, 187, 0.5);
}
.block1 {
  height: 17px;
  width: 100px;
  background: rgba(144, 159, 187, 0.4);
  margin-top: 22px;
}
.block2 {
  height: 16px;
  width: 200px;
  background: rgba(144, 159, 187, 0.4);
  margin-top: 10px;
}
.block3 {
  height: 16px;
  width: 180px;
  background: rgba(144, 159, 187, 0.4);
  margin-top: 10px;
}
</style>
