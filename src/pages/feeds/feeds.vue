<template>
  <div class="heading">
    <heading>
      <template #headline>
        <div class="icon">
          <icon name="home"/>
        </div>
      </template>
      <template #content>
        <h4>vsdv</h4>
      </template>
    </heading>
  </div>
</template>

<script>
import { heading } from '@/components/heading'
import { icon } from '@/icons'
export default {
  name: 'feeds',
  components: {
    heading, icon
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    color: red;
    width: 50px;
  }
</style>
