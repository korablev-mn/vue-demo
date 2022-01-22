<template>
<div class="avatar">
    <img :src="avatar" class="img" alt="username avatar"/>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/300/300'
    },
    size: {
      type: String,
      required: true
      // validator: function (value) {
      //   return ['small', 'medium', 'large'].indexOf(value) !== -1;
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
    width: 37px;
    height: 37px;
    border-radius: 50%;
    margin-top: -6px;
}
.img{
    display: block;
    width:100%;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 2px solid #fff;
}
</style>
