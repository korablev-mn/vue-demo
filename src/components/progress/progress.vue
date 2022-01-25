<template>
  <div :class={active} class="c-progress">
      <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
    name: 'Progress',
    data () {
        return {
            active: false
        }
    },
    emits: ['onFinish'],
    methods: {
        eFinish () {
            this.$emit('onFinish')
        }
    },
    mounted () {
        this.$nextTick(() => {     
            this.active = true
        })

      this.$refs.indicator
      .addEventListener('transitionend', this.eFinish)
    },
    beforeUnmount () {     
      this.$refs.indicator
      .removeEventListener('transitionend', this.eFinish)
    }
}
</script>

<style lang="scss" scoped>
.c-progress{
    background: rgba(116, 161, 129, 0.2);
    height: 6px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &.active {
        .indicator {
            width: 100%;
        }
    }
}
.indicator{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    width: 0;
    background: var(--green);
    transition: 6s;
}
</style>
