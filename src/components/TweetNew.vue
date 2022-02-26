<template>
  <div class="tweet-wrapper">
    <div class="user-avatar"><img :src="currentUser.avatar" alt=""></div>
    <div class="tweet-area">
      <input
        v-model="tweet"
        type="text"
        maxlength="140"
        placeholder="有什麼新鮮事？"
      />
    </div>
    <button
      type="button"
      class="btn btn-secondary"
      @click.stop.prevent="submitTweet"
    >
      推文
    </button>
  </div>
</template>

<script>
import tweetAPI from "./../apis/tweets";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tweet: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
    title() {
      return this.handlePathName();
    },
  },
  methods: {
    async submitTweet() {
      try {
        // TODO: warning text > 140 words
        // TODO: handle api response
        if (this.tweet.length > 140) return;
        const response = tweetAPI.createTweet(this.tweet);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
