import { feeds } from '../pages/feeds'
import { stories } from '../components/stories'
import { storyPostItem } from '../components/storyPostItem'
import { storySlider } from '../components/storiesSlider'
export default [
  {
    path: '/',
    component: feeds
  },
  {
    path: '/stories',
    component: stories
  },
  {
    path: '/storiesPost',
    component: storyPostItem
  },
  {
    path: '/slider',
    component: storySlider
  }
]
