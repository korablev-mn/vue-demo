<template>
  <feeds/>
  <posts/>
</template>

<script>
import { posts } from './pages/posts'
import { feeds } from './pages/feeds'
export default {
  name: 'App',
  components: {
    posts, feeds
  }
}
</script>

<style src="./global.scss" lang="scss">
p {
  color: red;
}
</style>
