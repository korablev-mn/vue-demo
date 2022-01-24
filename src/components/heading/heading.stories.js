import heading from '../heading/heading.vue';
import avatar  from '../avatar/avatar.vue';
import icon from '../../icons/icon.vue';
import storyUserItem from '../storyUserItem/storyUserItem.vue';

export default {
    title: "UI/heading",
    components: { heading },
    subcomponents: {avatar, icon, storyUserItem},
    argTypes: {
        name: {
            type: 'text'
        },
        avatar: {
            type: 'text'
        },
        size: {
            type: 'number'
        },
        border: {
            control: {
                type: 'select'
            },
            options: ['none', 'red', 'blue']
        }
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        heading,
        avatar, 
        icon, 
        storyUserItem
    },
    data () {
        return {
            args
        }
    },
    template: `
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
                    <avatar :url="args.avatar" :size="args.size" :border="args.border" />
                  </div>
                  <div class="icon-exit">
                    <icon name="exit" class="items"/>
                  </div>
                </div>
            </div>
        </template>
        <template #content>
            <ul class="stories">
              <li v-for="(story,ndx) in 12" :key = ndx class="stories-item mr-8">
                <story-user-item
                  class="story-user-item"
                  :avatar="args.avatar"
                  :username="args.name"
                />
              </li>
            </ul>
        </template>
      </heading>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    name: 'user name',
    avatar: 'https://picsum.photos/300/300',
    size: '37',
    border: 'none'
}
defaultView.story = {
    name: "Стандартное отображение"
}
