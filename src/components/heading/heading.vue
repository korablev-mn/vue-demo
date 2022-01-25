<template>
  <div class="c-heading">
      <div class="x-container">
        <div class="headline">
            <slot name="headline"/>
        </div>
        <div class="content" v-if="$slots.content">
            <slot name="content"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style lang="scss" src="./heading.scss" scoped>
</style>
