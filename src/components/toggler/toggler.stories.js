import toggler from '../toggler/toggler.vue';

export default {
    title: "UI/toggler",
    components: { toggler }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
      toggler
    },
    data () {
        return {
            args
        }
    },
    template: `
      <toggler/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
}
defaultView.story = {
    name: "Стандартное отображение"
}
