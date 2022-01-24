import post from '../post/post.vue';
import card  from '../card/card.vue';

export default {
    title: "UI/post",
    components: { post },
    subcomponents: {card},
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
      post, card
    },
    data () {
        return {
            args
        }
    },
    template: `
      <post :Url="args.avatar" :name="args.name">
          <template #card>
            <card :title="args.title"/>
          </template>
      </post>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    name: 'user name',
    avatar: 'https://picsum.photos/300/300',
    title: 'title'
}
defaultView.story = {
    name: "Стандартное отображение"
}
