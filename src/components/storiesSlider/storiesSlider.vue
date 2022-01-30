<template>
  <div class="c-stories-slider">
      <div class="stories-contaner">
          <!-- <pre>{{ trends }}</pre> -->
          <!-- <ul class="stories">
              <li class="stories-item"
                  v-for='trend in trends'
                  :key="trend.id"
              >
                <story-post-item
                  :data="getStoryData(trend)"
                />
              </li>
          </ul> -->
        <story-post-item/>
      </div>
  </div>
</template>

<script>
import { storyPostItem } from '../storyPostItem'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    storyPostItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      trends: state => state.trends.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrends: 'trends/fetchTrends'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        urlAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    this.fetchTrends()
  }
}
</script>

<style lang="scss" scoped>
.stories {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -188px;
  transition: .4s;
  transform: translateX(-32px);
}
.stories-contaner {
  height: 660px;
  position: relative;
}
</style>
