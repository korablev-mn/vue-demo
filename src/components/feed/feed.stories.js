import feed from '../feed/feed.vue';

export default {
    title: "UI/feed",
    components: { feed }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        feed
    },
    data () {
        return {
            args
        }
    },
    template: `
      <feed :title='args.title' 
            :username='args.username'
            :stars='args.stars'
            :description='args.description'
            :dark='args.dark'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    title: 'String',
    username: 'String',
    stars: 4,
    description: 'String',
    dark: true
}
defaultView.story = {
    name: "Стандартное отображение"
}