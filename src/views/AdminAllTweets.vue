<template>
  <div>
    <AdminTweets />
  </div>
</template>

<script>
import AdminTweets from '../component/AdminTweets.vue'

export default {
  components: {
    AdminTweets,
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";
  div.fake-nav {
    min-width: 378px;
    border-right: 1px solid $border;
  }
</style>