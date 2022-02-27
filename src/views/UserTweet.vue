<template>
  <div>
    <Tweet :init-tweet-id="tweetId" />
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";

export default {
  components: {
    Tweet,
  },
  data() {
    return {
      tweetId: -1
    }
  },
  created(){
    const { tweet_id } = this.$route.params;
    this.tweetId = tweet_id
  }, 
  beforeRouteUpdate(to, from, next) {
    const { tweet_id } = to.params
    this.tweetId = tweet_id
    next();
  },
};
</script>
