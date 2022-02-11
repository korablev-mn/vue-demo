import button from '../button/button.vue';

export default {
  title: "component/button",
  components: { button },
    argTypes: {
      text: {
        type: 'text'
      },
      width: {
        type: 'number'
      },
      height: {
        type: 'number'
      },
      theme: {
        type: 'text'
      },
      loading: {
        type: 'boolean'
      },
      disabled: {
        type: 'boolean'
      }
    }
}

const template = args => ({
   props: Object.keys(args),
   components: {
       btn: button
   },
   data () {
       return {
           args
       }
   },
   template: `
     <btn :text='args.text' :width='args.width' 
     :height='args.height' :theme='args.theme' 
     :loading='args.loading' :disabled='args.disabled'/>
   `
})

export const defaultView = template.bind(template);

defaultView.args = {
    text: 'Follow',
    width: 52,
    height: 32,
    theme: 'green',
    loading: false,
    disabled: false
}
defaultView.story = {
    name: "Стандартное отображение"
}