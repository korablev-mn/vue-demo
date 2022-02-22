<template>
  <div class="posts-container">
      <ul class="posts__list">
          <li v-for="(item) in likes" :key="item.id" class="posts__item">
              <post :username="item.full_name" :Url="item.owner.avatar_url" >
                    <template #card>
                      <card :title="item.owner.type"
                            :description="item.description"
                            :stars="item.stargazers_count"
                            :forks="item.forks_count"/>
                    </template>
              </post>
          </li>
      </ul>
  </div>
  <pre>{{ likes }}</pre>
</template>

<script>
import { post } from '@/components/post'
import { card } from '@/components/card'
// import data from '@/data.json'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Posts',
  components: {
    post, card
  },
  computed: {
    ...mapState({
      likes: state => state.user.likes
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  // data () {
  //   return {
  //     posts: []
  //   }
  // },
  methods: {
    ...mapActions({
      getLikes: 'user/getLikeUserRepo'
    })
  },
  async mounted () {
    await this.getLikes()
  }
  // created () {
  //   this.posts = data
  //   console.log(data)
  // }
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
