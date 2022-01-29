<template>
  <div class="flex-container" v-for='(n, ndx) in paragraphs' :key=ndx >
      Placeholder text
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

</style>
