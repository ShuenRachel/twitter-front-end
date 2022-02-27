<template>
  <div>
    <Tweet :init-tweet-id="tweetId" />
    <!-- <TweetsList
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet"
    /> -->
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";
// import TweetsList from "@/components/TweetsList.vue";
import tweetsAPI from "./../apis/tweets";

export default {
  components: {
    Tweet,
    // TweetsList
  },
  data() {
    return {
      tweetId: "",
      replies: []
    };
  },
  methods: {
    async getReplies() {
      try {
        const response = await tweetsAPI.getReplies(this.tweetId);
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        this.replies = response.data
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    const { tweet_id } = this.$route.params;
    this.tweetId = tweet_id.toString();
    this.getReplies();
  },
  beforeRouteUpdate(to, from, next) {
    const { tweet_id } = to.params;
    this.tweetId = tweet_id.toString();
    next();
  },
};
</script>
