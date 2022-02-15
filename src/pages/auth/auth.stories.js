import auth from '../auth/auth.vue';

export default {
    title: "UI/auth",
    components: { auth },
    argTypes: {
    }
}

 const template = args => ({
    props: Object.keys(args),
    components: {
        auth
    },
    data () {
        return {
            args
        }
    },
    template: `
      <auth />
    `
 })

export const defaultView = template.bind(template);

defaultView.args = {
}
defaultView.story = {
    name: "Стандартное отображение"
}
