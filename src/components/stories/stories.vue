<template>
  <div class="wrapper">
    <div class="hedline">
      <div class="x-container">
        <button class="logo mt-32" @click="$router.push('/')">
          <icon name="logo"/>
        </button>
        <button class="close-btn mt-32" @click="$router.push('/')">
          <icon name="close"/>
        </button>
      </div>
    </div>
    <div class="content">
      <stories-slider :initialSlide='Number($route.params.initialSlide)'/>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'
export default {
  components: {
    icon, storiesSlider
  },
  mounted () {
    document.body.style.backgroundColor = '#444444'
  },
  unmounted () {
    document.body.style.backgroundColor = '#fff'
  }
}
</script>

<style lang="scss" scoped>
.x-container {
  display: flex;
    justify-content: space-between;
    align-items: center;
}
.hedline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
  color: #fff;
}
</style>
