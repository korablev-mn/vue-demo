<template>
  <div class ="feed" :class="dark">
    <h1>title: {{ feed.title }}</h1>
    <h1>owner: {{ feed.username }}</h1>
    <h1>stars: {{ feed.stars }}</h1>
    <p v-if="description">description: {{feed.description}}</p>
  </div>
</template>

<script>

export default {
  name: 'Feed',
  components: {
  },
  props: {
    feed: Object,
    // title: String,
    // username: String,
    // stars: Number,
    // description: String,
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped>
.feed {
  background: #864688
    // background: #ffffff;
    // border:1px solid #f1f1f1;
    // box-shadow: 0px 4px 40px rgba(0,0,0,0.007);
    // border-radius: 10px;
    // padding: 24px 20px;
}
</style>
