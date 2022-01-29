import spinner from './spinner.vue';

export default {
    title: "component/spinner",
    components: { spinner }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        xSpinner: spinner
    },
    data () {
        return {
            args
        }
    },
    template: `
      <x-spinner/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
}
defaultView.story = {
    name: "Стандартное отображение"
}
