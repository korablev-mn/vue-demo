import placeholder from '../placeholder/placeholder.vue';

export default {
    title: "UI/placeholder",
    components: { placeholder },
    argTypes: {
        paragraphs: {
            type: 'number'
        }
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        placeholder
    },
    data () {
        return {
            args
        }
    },
    template: `
      <placeholder :paragraphs='args.paragraphs'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    paragraphs: 2
}
defaultView.story = {
    name: "Стандартное отображение"
}
