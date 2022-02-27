<template>
  <div>
    <TweetNew class="tweet-new" />
    <div class="tweets-wrapper">
      <TweetsList
        v-for="tweet in tweetsData"
        :key="tweet.id"
        :init-tweet-data="tweet"
      />
    </div>
  </div>
</template>

<script>
import TweetNew from "@/components/TweetNew.vue";
import TweetsList from "@/components/TweetsList.vue";
import tweetsAPI from "./../apis/tweets"


export default {
  components: {
    TweetNew,
    TweetsList,
  },
  data() {
    return {
      tweetsData: [],
    };
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await tweetsAPI.getAllTweets()

        this.tweetsData = response.data;
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchTweets();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.tweet-new {
  border-top: $border-setting;
  border-bottom: 10px solid $border-color;
}
.tweets-wrapper {
  max-height: 600px;
  max-width: 600px;
  overflow: scroll;
}
</style>
