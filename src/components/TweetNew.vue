<template>
  <div class="tweet-wrapper">
    <div class="user-avatar"><img :src="currentUser.avatar" alt="" /></div>
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
      class="btn btn-orange"
      :disabled="isProcessing"
      @click.stop.prevent="submitTweet"
    >
      推文
    </button>
  </div>
</template>

<script>
import tweetAPI from "./../apis/tweets";
import { mapState } from "vuex";
import { Toastification } from "./../utils/mixin";
export default {
  mixins: [Toastification],
  data() {
    return {
      tweet: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async submitTweet() {
      this.isProcessing = true;
      // TODO: warning text > 140 words
      // TODO: warning if no content
      if (this.tweet.length > 140 || !this.tweet.trim().length) {
        return (this.isProcessing = false);
      }
      try {
        const response = await tweetAPI.createTweet(this.tweet);
        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        this.tweet = "";

        this.ToastSuccess({
          title: "已成功發佈推文",
        });
        this.isProcessing = false;

        this.$emit("after-submit-tweet");
      } catch (error) {
        this.ToastError({
          title: "無法發佈推文，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 50px;
  height: 50px;
}
</style>
