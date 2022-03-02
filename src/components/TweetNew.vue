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
import { Toastification } from "./../utils/mixin";
export default {
  mixins: [Toastification],
  data() {
    return {
      tweet: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async submitTweet() {
      try {
        // TODO: warning text > 140 words
        // TODO: alert after success
        if (this.tweet.length > 140) return;
        const response = await tweetAPI.createTweet(this.tweet);
        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        this.tweet = "";

        this.ToastSuccess({
          title: "已成功發佈推文",
        });

        this.$emit("after-submit-tweet");
      } catch (error) {
        this.ToastError({
          title: "無法發佈推文，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 30px;
  height: 30px;
}
</style>