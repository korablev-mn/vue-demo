<template>
  <div class="c-story-post-item" :class={active} @onFinish="$emit('onProgressFinish')">
    <div class="stories-container">
      <div class="header">
        <div class="progress">
          <x-progress :activate="activate"/>
        </div>
        <div class="user pt-12">
          <user :name="data.username"
                :src="data.urlAvatar"
          />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner/>
        </div>
        <div class="info" v-else>
          <div v-if="data.content?.lenght" class="content-text" v-html="data.content">
          </div>
            <placeholder v-else :paragraphs="2"/>
        </div>
      </div>
      <div class="buttonn">
        <x-button text="Follow" :width="202" :height="40"/>
      </div>
      <template v-if="active">
        <button class="btnn btn-next">
          <span class="icon">
            <icon name="arrow"/>
          </span>
        </button>
        <button class="btnn btn-prev">
          <span class="icon">
            <icon name="arrow"/>
          </span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { progress } from '../progress'
import { icon } from '../../icons'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
import button from '../button/button.vue'
export default {
  name: 'StoryPostItem',
  components: {
    user,
    xButton: button,
    xProgress: progress,
    icon,
    placeholder,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShow: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (val) {
        return val.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.c-story-post-item{
  display: flex;
  // align-content: stretch;
  width: 302px;
  height: 538px;
  background: #fff;
  border-radius: 6px;
  align-self: center;
  padding: 10px;
  margin: 50px;
  // margin-left: 100px;
  // height: 664px;
  // position: relative;
  // transform: scale(0.8);
  // width: 376px;
  // transition: .5s;
  // pointer-events: none;
  // -moz-user-select: none;
  // -ms-user-select: none;
  // user-select: none;
}
.active {
  display: flex;
  width: 376px;
  height: 664px;
  background: #fff;
  border-radius: 12px;
  padding: 18px;
}
.stories-container{
  display: flex;
  width: 100%;
  flex-direction: column;
}
// .stories-container div:last-child{
//   // margin-top: auto;
// }
.buttonn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info {
  padding: 12px;
}
.content {
  flex:1;
  align-items: center;
}
.loader {
  padding-top: 200px;
  display: flex;
  justify-content: center;
  margin-top: auto;
}
.btn-prev{
  position: absolute;
  top:45%;
  left: -0.5%;
}
.btn-next{
  position: absolute;
  top:45%;
  left: 8%;
  transform: rotate(180deg);
}
</style>
