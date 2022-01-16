<template>
  <posts/>
</template>

<script>
import {posts} from './pages/posts'
export default {
  name: "App",
  components: {
    posts
  },
};
</script>

<style src="./global.scss" lang="scss">
p {
  color: red;
}
</style>