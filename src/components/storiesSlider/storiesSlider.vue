<template>
  <div class="c-stories-slider">
      <div class="stories-contaner" >
          <ul class="stories" ref="slider" :style="x">
              <li class="stories-item"
                  v-for='(trend, ndx) in trends'
                  :key="trend.id"
                  ref="item"
              >
                <story-post-item
                :data="getStoryData(trend)"
                :active="slideNdx === ndx"
                :loading ='slideNdx === ndx && loading'
                :btnsShow="activeBtns"
                @onNextSlide="handleSlide(ndx + 1)"
                @onPrevSlide="handleSlide(ndx - 1)"
                @onProgressFinish="handleSlide(ndx + 1)"
                />
              </li>
          </ul>
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
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      slidePosition: 0,
      loading: false,
      btnsShow: true,
      xValue: 0
    }
  },
  computed: {
    ...mapState({
      trends: state => state.trends.data
    }),
    activeBtns () {
      if (this.btnsShow === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trends.length - 1) return ['prev']
      return ['next', 'prev']
    },
    x () {
      return `transform: translateX(-${this.xValue}px)`
    }
  },
  methods: {
    ...mapActions({
      fetchTrends: 'trends/fetchTrends',
      fetchReadme: 'trends/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trends[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        urlAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider } = this.$refs
      const slideWidth = getComputedStyle(slider).getPropertyValue('width')
      this.slideNdx = slideNdx
      this.slidePosition = parseInt(slideWidth) / 10 * parseInt(slideNdx)
      // const style = `translateX (-${this.slidePosition}px)`
      this.xValue = this.slidePosition
      // slider.style.transform = style
    },
    async loadReadme () {
      this.loading = true
      this.btnsShow = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShow = true
      }
      await this.fetchReadmeForActiveSlide()
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trends.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    await this.fetchTrends()
    await this.loadReadme()
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
  height: 715px;
  position: relative;
  display: flex;
  // justify-content: center;
}
</style>
