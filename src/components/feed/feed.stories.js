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
      <feed :feed='args.obj'
            :dark='args.dark'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    obj: {
        title: 'title',
        username: 'username',
        stars: 4
    },
    dark: true
}
defaultView.story = {
    name: "Стандартное отображение"
}