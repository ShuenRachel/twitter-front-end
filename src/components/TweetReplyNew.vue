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
      class="btn btn-orange"
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
      // TODO: warning text when > 140 words
      // TODO: warning if no content
      if (this.reply.length > 140 || !this.reply.trim().length) return;
      try {
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
