<template>
  <div class="avatar" :style="[Style, { width: size + 'px', height: size + 'px'}]">
    <img :src="url" class="img" alt="username "/>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
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
  setup (props) {
    const style = {
      red: {
        border: '2px solid #A6328D'
      },
      blue: {
        border: '2px solid #0000ff'
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
    border-radius: 50%;
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
