<template>
  <div class="tweet-wrapper">
    <div class="user-avatar"><img :src="currentUser.avatar" alt=""></div>
    <div class="tweet-area">
      <input
        v-model="reply"
        type="text"
        maxlength="140"
        placeholder="推你的回覆"
      />
    </div>
    <button
      type="button"
      class="btn btn-secondary"
      @click.stop.prevent="submitReply"
    >
      回覆
    </button>
  </div>
</template>

<script>
import tweetAPI from "./../apis/tweets";
import { mapState } from "vuex";
export default {
  props: {
    replyId: {
      type: Number
    }
  },
  data() {
    return {
      reply: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async submitReply() {
      try {
        // TODO: warning text > 140 words
        // TODO: handle api response
        if (this.reply.length > 140) return;
        const response = await tweetAPI.postReply(this.reply);

        console.log(response);
        this.$emit("after-reply-tweet")
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
