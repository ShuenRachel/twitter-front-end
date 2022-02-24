<template>
  <div>
    <AdminTweets />
  </div>
</template>

<script>
import AdminTweets from '../component/TweetsList.vue'

export default {
  components: {
    AdminTweets,
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";
</style>