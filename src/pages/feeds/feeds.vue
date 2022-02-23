<template>
  <div class="heading">
    <heading>
      <template #headline>
        <div class="topline">
          <div @click="$router.push({name: 'feeds'})">
            <icon name="logo" class="items"/>
          </div>
          <div class="menu" v-if='hasUser'>
            <div class="login">
            {{ user.login }}
            </div>
            <div class="icon mr-8 mb-6" @click="$router.push({name: 'feeds'})">
              <icon name="home" class="items"/>
            </div>
            <div class="ava mr-8" @click="$router.push({name: 'user'})">
              <avatar :url="user.avatar_url" :size="38" />
            </div>
            <div :class="[{activeExt: hoverExt}, 'icon-exit']" @click='logout'
            @mouseover = "hoverExt = true" @mouseleave = "hoverExt = false">
              <icon name="exit" class="items"/>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li v-for="item in getUnstarredOnly" :key="item.id" class="stories-item mr-8">
            <story-user-item
              class="story-user-item"
              :avatar="item.owner.avatar_url"
              :username="item.owner.login"
              @onPress="handlePress(item.id)"
            />
          </li>
        </ul>
      </template>
    </heading>
      <posts/>
  </div>
</template>

<script>
import { heading } from '@/components/heading'
import { icon } from '@/icons'
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
// import stories from '../../data.json'
import { avatar } from '../../components/avatar'
import { posts } from '../posts'
import { useStore } from 'vuex'
import { onMounted, computed, ref } from 'vue'
// import feeds from '../../composables/feeds'

export default {
  name: 'Feeds',
  components: {
    heading, icon, StoryUserItem, avatar, posts
  },
  setup () {
    const { dispatch, state, getters } = useStore()
    const hasUser = ref(true)
    const hoverExt = ref(false)
    const logout = () => {
      dispatch('auth/logout')
    }
    onMounted(() => {
      dispatch('trends/fetchTrends')
      dispatch('user/getUser')
    })
    return {
      hasUser,
      hoverExt,
      items: computed(() => state.trends.data),
      user: computed(() => state.user.userData),
      logout,
      getUnstarredOnly: computed(() => getters.getUnstarredOnly)
    }
  },
  methods: {
    // getFeedData (item) {
    //   return {
    //     title: item.name,
    //     description: item.description,
    //     username: item.owner.login,
    //     stars: item.stargazers_count
    //   }
    // }
    handlePress (id) {
      this.$router.push({ name: 'stories', params: { initialSlide: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .topline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    cursor: pointer;
  }
  .ava {
    cursor: pointer;
  }
  .icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .icon-exit {
    width: 30px;
  }
  .activeExt {
    // transition: transform 2s;
    -webkit-animation: rotate 0.5s infinite linear;
  }
  .activeExt:hover {
    // -webkit-transform: scale(1.5);
    // transform: scale(1.5);
    cursor: pointer;
    color: gray;
  @-webkit-keyframes rotate{
    0%   { -webkit-transform: rotate(20deg); }
    100% { -webkit-transform: rotate(-20deg); }
  }
  }
  .stories {
    display: flex;
    justify-content: space-event;
  }
  .stories-item {
    &:last-child {
      margin-right: 0;
    }
  }
  .login {
    font: bold;
    margin-right: 12px;
  }
</style>
