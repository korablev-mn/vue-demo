import stats from '../stats/stats.vue';

export default {
    title: "component/stats",
    components: { stats },
    argTypes: {
        stars: {
            type: 'number'
        },
        forks: {
            type: 'number'
        }
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        stats
    },
    data () {
        return {
            args
        }
    },
    template: `
      <stats :stars='args.stars' :forks='args.forks'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    stars: '2',
    forks: '3'
}
defaultView.story = {
    name: "Стандартное отображение"
}