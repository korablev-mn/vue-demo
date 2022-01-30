<template>
  <div :class="[{active: hover}, 'avatar']" :style="[Style, { width: size + 'px', height: size + 'px'}]"
  @mouseover = "hover = true" @mouseleave = "hover = false">
    <img :src="url" class="img" alt="username "/>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    size: {
      type: Number,
      default: 37
      // validator: function (value) {
      //   return ['small', 'medium', 'large'].indexOf(value) !== -1;
      // }
    },
    border: {
      type: String,
      default: 'none'
    }
  },
  data () {
    return {
      hover: false
    }
  },
  setup (props) {
    const style = {
      red: {
        borderColor: '#A6328D'
      },
      blue: {
        borderColor: '#0000ff'
      },
      none: {
        border: 'none'
      }
    }
    const Style = style[props.border]

    return { Style }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
}
.active{
  border: none;
}
.img{
    display: block;
    width:100%;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 4px solid #fff;
}
</style>
