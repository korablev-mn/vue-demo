<template>
  <div class="post">
    <div class="post__user mt-16 mb-16 ml-12">
        <user :src="Url" :name="username"/>
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
import { user } from '../user'
import { toggler } from '../toggler'
export default {
  name: 'Post',
  components: {
    user, toggler
  },
  props: {
    Url: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      default: 'User'
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleClick (state) {
      this.isShow = state
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
