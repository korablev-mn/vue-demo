import avatar from '../avatar/avatar.vue';

export default {
    title: "avatar",
    components: { avatar }
}

export const defaultView = () => ({
    components: {
        avatar
    },
    template: `
      <avatar/>
    `
});

defaultView.story = {
    name: "Стандартное отображение"
}