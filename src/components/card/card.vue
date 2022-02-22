<template>
  <div class ="card">
    <div class="card__title_wrap mb-12">
        <h2 class="card__title">{{title}}</h2>
    </div>
    <div class="card__desc mb-32">
        {{ description }}
    </div>
    <div class="card__stats">
        <stats :stars="stars" :forks="forks"/>
    </div>
  </div>
</template>

<script>
import { stats } from '../stats'
export default {
  name: 'Card',
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Some text'
    },
    stars: {
      type: Number,
      default: 0
    },
    forks: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    border:1px solid #f1f1f1;
    box-shadow: 0px 4px 40px rgba(0,0,0,0.007);
    border-radius: 10px;
    padding: 24px 20px;
}
</style>
