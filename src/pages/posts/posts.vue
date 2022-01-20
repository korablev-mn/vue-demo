<template>
  <div class="posts-container">
      <ul class="posts__list">
          <li v-for="(item) in posts" :key="item.id" class="posts__item">
              <post :avatarUrl="item.avatar" :username="item.username">
                    <template #card>
                      <card :title="item.title"/>
                    </template>
              </post>
          </li>
      </ul>
  </div>
</template>

<script>
import { post } from '@/components/post'
import { card } from '@/components/card'
import data from '@/data.json'
export default {
  components: {
    post, card
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.posts = data
    console.log(data)
  }
}
</script>

<style lang="scss" scoped>
.posts{
    &-container{
        width:979px;
        margin: 0 auto;
    }
    &__item{
        margin-bottom: 20px;
    }
}
</style>
