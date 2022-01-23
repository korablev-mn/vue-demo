import avatar from '../avatar/avatar.vue';

export default {
    title: "UI/avatar",
    components: { avatar },
    argTypes: {
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
        avatar
    },
    data () {
        return {
            args
        }
    },
    template: `
      <avatar :url='args.url' :size='args.size' :border='args.border'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    url: 'https://picsum.photos/300/300',
    size: 72,
    border: 'red'
}
defaultView.story = {
    name: "Стандартное отображение"
}