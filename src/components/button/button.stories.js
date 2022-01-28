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
      backgroundColor: {
        type: 'text'
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
     <btn :text='args.text' :width='args.width' :height='args.height' :colorBtn='args.backgroundColor' />
   `
})

export const defaultView = template.bind(template);

defaultView.args = {
    text: 'Follow',
    width: 52,
    height: 32,
    backgroundColor: 'rgba(49, 174, 84, 1)'
}
defaultView.story = {
    name: "Стандартное отображение"
}