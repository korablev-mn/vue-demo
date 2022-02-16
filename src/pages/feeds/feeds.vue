<template>
<!-- <pre>{{items}}</pre> -->
  <div class="heading">
    <heading>
      <template #headline>
        <div class="topline">
          <div @click="$router.push({name: 'feeds'})">
            <icon name="logo" class="items"/>
          </div>
          <div class="menu" v-if='hasUser'>
            <div class="icon mr-8 mb-6" @click="$router.push({name: 'feeds'})">
              <icon name="home" class="items"/>
            </div>
            <div class="ava mr-8" @click="$router.push({name: 'user'})">
              <avatar url="https://picsum.photos/300/300" :size="38" />
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
          <li v-for="item in items" :key="item.id" class="stories-item mr-8">
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
      <!-- <div class="x-container">
        <ul class="list">
          <li class="item" v-for="item in items" :key='item.id'>
            <feed :feed="getFeedData(item)">
            </feed>
          </li>
        </ul>
      </div>-->
  </div>
</template>

<script>
import { heading } from '@/components/heading'
import { icon } from '@/icons'
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
// import stories from '../../data.json'
import { avatar } from '../../components/avatar'
import { posts } from '../posts'
// import * as api from '../../api'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Feeds',
  components: {
    heading, icon, StoryUserItem, avatar, posts
  },
  // data () {
  //   return {
  //     stories,
  //     items: []
  //   }
  // },
  computed: {
    ...mapState({
      items: state => state.trends.data
    }),
    ...mapGetters(['getUnstarredOnly'])
    // hasUser: 'user/hasUser'
  },
  data () {
    return {
      hasUser: true,
      hoverExt: false
    }
  },
  methods: {
    ...mapActions({
      fetchTrends: 'trends/fetchTrends',
      logout: 'auth/logout'
      // getUser: 'user/getUser'
    }),
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
  },
  async mounted () {
    await this.fetchTrends()
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
  .icon {
    width: 25px;
    height: 25px;
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
</style>
