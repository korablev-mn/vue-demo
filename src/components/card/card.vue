<template>
  <div class ="card">
    <div class="card__title_wrap mb-12">
        <h2 class="card__title">{{title}}</h2>
    </div>
    <div class="card__desc mb-32">
        hdfvjknsdfkjvjhkdfsvjsdfnj;vnjsdfnjvnsjdfnvjlsnjldfbvnjsdnjfvnjlsdfnl/vnljsdfnjl/bdnjf
    </div>
    <div class="card__stats">
        <stats :stars="10" :forks="4"/>
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
