import icon from '../../icons/icon.vue';

export default {
    title: "component/icon",
    components: { icon },
    argTypes: {
        name: {
            control: {
                type: 'select'
            },
            options: ['home', 'exit', 'forks', 'logo', 'star', 'triangle']
        }
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        icon
    },
    data () {
        return {
            args
        }
    },
    template: `
      <icon :name='args.name'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    name: 'home'
}
defaultView.story = {
    name: "Стандартное отображение"
}
