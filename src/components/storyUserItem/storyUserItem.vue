<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
      <div class="avatar">
          <img :src="avatar" class="img" alt="username avatar"/>
          <!-- <div v-bind:style="{background: 'url(' + avatar + ')'}" class="img"/> -->
      </div>
      <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
    width: 92px;
    height: 92px;
    border: 2px solid #A6328D;
    border-radius: 50%;
    margin-right: -35px;
    // box-shadow: 2px #A6328D;
    // -moz-box-shadow: 2px #A6328D;
    // -webkit-box-shadow: 2px #A6328D;
}
.img{
    display: block;
    width:100%;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 5px solid #fff;
    // border-radius: 50;
    // background: no repeat center;
    // background-size: 92px 92px;
    // width: 92px;
    // height: 92px;
    // border: 1px solid green;
    // border-radius: 100px;
    // box-shadow: 0 0 0 3px green, 0 0 13px #333;
}
.username{
    margin-top: 6px;
}
</style>
