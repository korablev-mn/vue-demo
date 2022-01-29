import user from '../user/user.vue';

export default {
    title: "UI/user",
    components: { user },
    argTypes: {
        src: {
            type: 'text'
        },
        name: {
            type: 'text'
        },
        type: {
            type: 'text'
        },
        size: {
            control: {
                type: 'select'
            },
            options: ['s', 'm', 'l']
        }
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        user
    },
    data () {
        return {
            args
        }
    },
    template: `
      <user :src='args.src' :name='args.name' :size='args.size'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    src: 'https://picsum.photos/300/300',
    name: 'John Doe',
    type: '',
    size: 's'
}
defaultView.story = {
    name: "Стандартное отображение"
}
