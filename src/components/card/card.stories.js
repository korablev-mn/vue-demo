import card from '../card/card.vue';

export default {
    title: "UI/card",
    components: { card }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        card
    },
    data () {
        return {
            args
        }
    },
    template: `
      <card :title='args.title'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    title: 'Title'
}
defaultView.story = {
    name: "Стандартное отображение"
}