<template>
  <div class="wrapper">
      <!-- <div class="header">
          <div class="x-container">
              <button class="logo" @click="$router.push()">
                  <icon :name="logo"/>
              </button>
              <button class="close-btn" @click="$router.push()">
                  <icon :name="exit"/>
              </button>
          </div>
      </div>
      <div class="content">
          <stories-slider/>
      </div> -->

      <icon name="logo"/>
      <x-button :text="Flut"/>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { button } from '../button'
export default {
  components: {
    icon,
    xButton: button
  }
}
</script>

<style lang="scss" scoped>

</style>
