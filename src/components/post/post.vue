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
      <div v-if="loading" .class="container">
        <ul class="post__comment comment__list mb-16">
            <li v-for="item in 1" class="commetn__item" :key="item">
                <p>
                    <span class="comment_user mb-16">{{ username }}</span><br/>
                    {{ isData }}
                </p>
            </li>
        </ul>
      </div>
      <div v-else>
        <spinner/>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { toggler } from '../toggler'
import { spinner } from '../spinner'
import { mapState, mapActions } from 'vuex'
// import post from '../../composables/post'

export default {
  name: 'Post',
  components: {
    user, toggler, spinner
  },
  // setup (props, { attr, slots, emit }) {
  //   const {
  //     isShow, isData, state
  //   } = post(props)
  //   return {
  //     isShow, isData, state
  //   }
  //   // альтернатива return {...post}
  // },
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
      isShow: false,
      loading: true,
      isData: []
    }
  },
  computed: {
    ...mapState({
      data: state => state.issue.data
    })
  },
  methods: {
    ...mapActions({
      getIssue: 'issue/getIssue'
    }),
    async toggleClick (state) {
      this.isShow = state
      var prop = this.username.split('/')
      var owner = prop[0]
      var repo = prop[1]
      if (this.isData?.length === 0) {
        this.loading = false
        console.log('запрос issue: repo - ' + prop[0] + '////' + prop[1])
        try {
          await this.getIssue({ repo, owner })
          this.isData = this.data
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = true
        }
      }
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
