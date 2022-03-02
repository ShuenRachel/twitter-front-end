<template>
  <div class="tweet-wrapper">
    <div class="user-avatar"><img :src="currentUser.avatar" alt="" /></div>
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
import { Toastification } from "./../utils/mixin";
export default {
  mixins: [Toastification],
  props: {
    replyId: {
      type: Number,
    },
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
        // TODO: alert after success
        if (this.reply.length > 140) return;
        const response = await tweetAPI.postReply(this.replyId, this.reply);

        if (response.statusText !== "OK") {
          throw new Error();
        }

        this.ToastSuccess({
          title: "已成功發佈回覆",
        });

        this.$emit("after-reply-tweet");
      } catch (error) {
        this.ToastError({
          title: "無法回覆推文，請稍後再試",
        });
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