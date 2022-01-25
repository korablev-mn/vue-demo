<template>
<button class="c-story-user-item" @click="$emit('onPress')">
  <avatar :url="avatar" :size="92" border="red" />
  <div class="username">{{ username }}</div>
</button>
</template>

<script>
import avatar from '../avatar/avatar.vue'
export default {
  name: 'StoryUserItem',
  components: { avatar },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  },
  methods: {
    onPress () {
      this.$emit('handlePress')
    }
  }
}
</script>

<style lang="scss" scoped>
.img{
    display: block;
    width:100%;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 5px solid #fff;
}
.username{
    margin-top: 6px;
}
</style>
