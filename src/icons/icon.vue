<template>
  <component :is="name"/>
</template>

<script>
import * as icons from '../icons/variants'
export default {
  name: 'Icon',
  components: {
    ...icons
  },
  props: {
    name: {
      type: String,
      required: true,
      valiator (val) {
        return Object.keys(icons).includes(val)
      }
    }
  }
}
</script>

<style>

</style>
