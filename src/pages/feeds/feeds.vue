<template>
  <div class="heading">
    <heading>
      <template #headline>
        <div class="icon">
          <icon name="logo" class="items"/>
          <icon name="empty" class="items"/>
          <icon name="home" class="items"/>
          <icon name="avatar" class="items"/>
          <icon name="exit" class="items"/>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li v-for="story in stories" :key="story.id" class="stories-item">
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
  </div>
</template>

<script>
import { heading } from '@/components/heading'
import { icon } from '@/icons'
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import stories from '../../data.json'
export default {
  name: 'feeds',
  components: {
    heading, icon, StoryUserItem
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    display: flex;
    color: black;
    height: 26px;
  }
  .items {
    margin-right: 14px;
  }
  .items:nth-child(2) {
    flex: 1;
  }
  .stories {
    display: flex;
    justify-content: space-event;
  }
  .stories-item {
    margin: 24px;
  }
</style>
