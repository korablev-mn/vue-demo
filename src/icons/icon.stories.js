import icon from './icon.vue';

export default {
    title: "component/icon",
    components: { icon },
    argTypes: {
        name: {
            control: {
                type: 'select'
            },
            options: ['home', 'exit', 'forks', 'logo', 'star', 'triangle', 'close', 'arrow']
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
    <div class="storyIcon">
      <icon :name='args.name'/>
    </div>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    name: 'home'
}
defaultView.story = {
    name: "Стандартное отображение"
}
