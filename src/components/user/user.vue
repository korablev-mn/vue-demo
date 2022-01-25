<template>
  <div class="user">
      <Avatar class="user__avatar mr-12" :url="src" :size="38"/>
      <div>
          <div class="user__name mb-4">{{name}}</div>
          <div v-if="type" class="user__type">{{type}}</div>
      </div>
  </div>
</template>

<script>
import { avatar as Avatar } from '../avatar'
export default {
  name: 'User',
  components: {
    Avatar
  },
  props: {
    src: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    name: {
      type: String,
      default: 'John Doe'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 's'
    }
  },
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    align-items: center;
    &__name {
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
    }

    &__type {
        font-size: 12px;
        color: var(--lightGrey);
    }
}
</style>
