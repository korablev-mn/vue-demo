import storyUserItem from '../storyUserItem/storyUserItem.vue';
import avatar  from '../avatar/avatar.vue';

export default {
    title: "UI/storyUserItem",
    components: { storyUserItem },
    subcomponents: {avatar},
    argTypes: {
        // border: {
        //     control: {
        //         type: 'select'
        //     },
        //     options: ['none', 'red', 'blue']
        // },
        name: {
            type: 'text'
        },
        avatar: {
            type: 'text'
        }
    }
}

 const template = args => ({
     props: Object.keys(args),
    components: {
        storyUserItem
    },
    data () {
        return {
            args
        }
    },
    template: `
      <storyUserItem :avatar='args.avatar' :username='args.name'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    avatar: 'https://picsum.photos/300/300',
    name: 'user name'
}
defaultView.story = {
    name: "Стандартное отображение"
}