<template>
  <div class="heading">
    <heading>
      <template #headline>
        <div class="topline">
          <div>
            <icon name="logo" class="items"/>
          </div>
          <div class="menu">
            <div class="icon mr-8 mb-6">
              <icon name="home" class="items"/>
            </div>
            <div class="ava mr-8">
              <avatar url="https://picsum.photos/300/300" size="" />
            </div>
            <div class="icon-exit">
              <icon name="exit" class="items"/>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li v-for="story in stories" :key="story.id" class="stories-item mr-8">
            <story-user-item
              class="story-user-item"
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </heading>
      <posts/>
  </div>
</template>

<script>
import { heading } from '@/components/heading'
import { icon } from '@/icons'
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import stories from '../../data.json'
import { avatar } from '../../components/avatar'
import { posts } from '../posts'
export default {
  name: 'feeds',
  components: {
    heading, icon, StoryUserItem, avatar, posts
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped>
  .topline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
  .icon-exit {
    width: 30px;
  }
  .stories {
    display: flex;
    justify-content: space-event;
  }
  .stories-item {
    &:last-child {
      margin-right: 0;
    }
  }
</style>
