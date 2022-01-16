<template>
  <button @click="onToggle" :class="[{active:show}, 'button']">
      <div>
          <span>{{buttonText}} issue </span>
          <span><icon icon-name="triangle" class="icon"/> </span>
      </div>
  </button>
</template>

<script>
import {icon} from "@/components/icon"
export default {
    components: {
        icon
    },
    emits:['onToggle'],
    data() {
        return {
            show: false
        }
    },
    computed: {
        buttonText() {
            return this.show ? 'Hide' : 'Show';
        }
    },
    methods: {
        onToggle(){
            this.show = !this.show;
            this.$emit('onToggle', this.show);
        }
    }
}
</script>

<style lang="scss" scoped>
.button{
    display: flex;
    align-items: center;
    padding: 0;
}
.icon{
    width:10px;
    transform: rotate(180deg);
    transition: 0.4s;
}
.active{
    .icon{
        transform: rotate(0deg);
        }
    }
</style>