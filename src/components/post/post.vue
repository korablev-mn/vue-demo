<template>
  <div class="post">
    My post component
    <div class="post__user">
        <user :src="avatarUrl" :name="username"/>
    </div>
    <div class="post__card">
        <slot name="card"/>
    </div>
    <toggler @onToggle="toggleClick"/>
    <div v-if="isShow">
        <ul class="post__comment comment__list mb-16">
            <li v-for="item in 5" class="commetn__item" :key="item">
                <p>
                    <span class="comment_user mb-16">User Name</span>
                    KJNKNKLBLJHBLJHBLBJHBLHVKUHVKHVLHBLJBHIUHBLJHVLJHBLIJBJHBJHVBMHVMGHV
                    fndfndfndfhndfhn
                    dfn dfhndfhn fbsfbsbsfgbsfgb
                </p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { user } from '@/components/user'
import { toggler } from '@/components/toggler'
export default {
  components: {
    user, toggler
  },
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      default: "User"
    }
  },
  data() {
    return {
      isShow: false
  }
},
methods: {
  toggleClick(state) {
    this.isShow = state;
  }
}
}
</script>

<style lang="scss" scoped>
.comment{
    &__user {
        font-weight: 600;
    }
}
</style>
