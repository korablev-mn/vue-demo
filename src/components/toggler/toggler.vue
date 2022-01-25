<template>
  <button @click="onToggle" :class="[{active:show}, 'button']">
          <span class="mr-4">{{buttonText}} issue </span>
          <span><icon name="triangle" class="icon"/> </span>
  </button>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'Toggler',
  components: {
    icon
  },
  emits: ['onToggle'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    buttonText () {
      return this.show ? 'Hide' : 'Show'
    }
  },
  methods: {
    onToggle () {
      this.show = !this.show
      this.$emit('onToggle', this.show)
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
    display: flex;
    align-items: center;
    padding: 0;
}
.icon{
    width:10px;
    transform: rotate(180deg);
    transition: 0.4s;
}
.active{
    .icon{
        transform: rotate(0deg);
        }
    }
</style>
