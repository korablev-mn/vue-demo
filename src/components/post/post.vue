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
            <li v-for="item in 1" class="commetn__item" :key="item">
                <p>
                    <span class="comment_user mb-16">{{ username }}</span><br/>
                    {{ data }}
                </p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { toggler } from '../toggler'
import { mapState, mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapState({
      data: state => state.issue.data
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    ...mapActions({
      getIssue: 'issue/getIssue'
    }),
    async toggleClick (state) {
      var prop = this.username.split('/')
      var owner = prop[0]
      var repo = prop[1]
      console.log('запрос issue: repo - ' + prop[0] + '////' + prop[1])
      await this.getIssue({ repo, owner })
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
