<template>
  <div class="c-story-post-item" :class={active}>
    <div class="stories-container">
      <div class="header">
        <div class="progress">
          <x-progress :active="active"/>
        </div>
          <div class="user">
            <user :name="data.username"
                  :src="data.url"
            />
          </div>
      </div>
          <div class="content">
            <div class="loader" v-if="loading">
              <spinner/>
            </div>
            <div class="info" v-else>
              <div v-if="data.content?.lenght" class="content-text" v-html="data.content"></div>
              <placeholder v-else :paragraphs="2"/>
            </div>
          </div>
          <div class="button">
            <x-button>Follow</x-button>
          </div>
          <template v-if="active">
            <button class="btn btn-next">
            <span class="icon">
              <icon name="arrow"/>
            </span>
          </button>
          <button class="btn btn-prev">
            <span class="icon">
              <icon name="arrow"/>
            </span>
          </button>
          </template>
    </div>
    <template></template>
  </div>
</template>

<script>
import { user } from '../user'
import { progress } from '../progress'
import { icon } from '../../icons'
// import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
import xbutton from '../button/button.vue'
export default {
  name: 'StoryPostItem',
  components: {
    user,
    xButton: xbutton,
    xProgress: progress,
    icon,
    // placeholder,
    spinner
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.c-story-post-item{
  height: 664px;
  position: relative;
  transform: scale(0.8);
  width: 376px;
  transition: .5s;
  pointer-events: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
