import progress from '../progress/progress.vue';

export default {
    title: "component/progress",
    components: { progress },
    argTypes: {
        onFinish: {
            action: 'onFinish',
            desription: 'событие когда заканчивается прогресс'
        }
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        xProgress: progress
    },
    data () {
        return {
            args
        }
    },
    template: `
      <x-progress @onFinish='args.finish'/>
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
    finish: 'end'
}
defaultView.story = {
    name: "Стандартное отображение"
}
