<template>
  <div class="wrapper">
      <div class="header"> <!-- header -->
          <div class="x-container">
              <button class="logo" @click="$router.push()">
                  <icon :name="logo"/>
              </button>
              <button class="close-btn" @click="$router.push()">
                  <icon :name="exit"/>
              </button>
          </div>
      </div><!-- header -->
      <div class="content">
          <stories-slider/>
      </div>
  </div>
</template>

<script>
import Icon from '../../icons/icon.vue'
import Button from '../../stories/Button.vue'
export default {
  components: { Button, Icon },

}
</script>

<style lang="scss" scoped>

</style>