<template>
  <div class="heading">
    <heading>
      <template #headline>
        <div class="icon">
          <div>
            <icon name="logo" class="items"/>
          </div>
          <div class="bar">
            <div class="iicon">
              <icon name="home" class="items"/>
            </div>
            <div class="iicon">
              <avatar avatar="https://picsum.photos/300/300" />
             <!-- // <icon name="avatar" class="items"/> -->
            </div>
            <div class="iicon">
            <icon name="exit" class="items"/>
            </div>
          </div>
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
import { avatar } from '../../components/avatar'
export default {
  name: 'feeds',
  components: {
    heading, icon, StoryUserItem, avatar
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
    justify-content: space-between;
    align-items: center;
    color: black;
  }
  .items {
    margin-right: 14px;
  }
  .iicon {
    width: 24px;
    height: 24px;
  }
  .bar {
    display: flex;
    justify-content: space-between;
  }
  .stories {
    display: flex;
    justify-content: space-event;
  }
  .stories-item {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }

</style>
