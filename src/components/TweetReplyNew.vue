<template>
  <div class="tweet-wrapper">
    <div 
      class="user-avatar"
      :style="{ backgroundImage: 'url(' + currentUser.avatar + ')' }">
    </div>
    <div class="tweet-area">
     <textarea
        v-model="tweet"
        name="description"
        id="tweet-area-description"
        rows="6"
        placeholder="有什麼新鮮事？"
        required
      ></textarea>
    </div>
    <button
      type="button"
      class="btn btn-orange"
      :disabled="isProcessing"
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
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async submitReply() {
      this.isProcessing = true;
      // TODO: warning text when > 140 words
      // TODO: warning if no content
      if (this.reply.length > 140 || !this.reply.trim().length) {
        return (this.isProcessing = false);
      }
      try {
        const response = await tweetAPI.postReply(this.replyId, this.reply);

        if (response.statusText !== "OK") {
          throw new Error();
        }

        this.ToastSuccess({
          title: "已成功發佈回覆",
        });
        this.isProcessing = false;

        this.$emit("after-reply-tweet");
      } catch (error) {
        this.ToastError({
          title: "無法回覆推文，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.tweet-wrapper {
  position: relative;
  height: 245px;
}

.user-avatar {
  position: absolute;
  top: 10px;
  left: 15px;
  border-radius: 50%;
  background-color: $empty-img;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
}

.tweet-area {
  textarea {
    position: absolute;
    top: 20px;
    left: 75px;
    right: 15px;
    resize: none;
    border: none;
    &::placeholder {
      font-size: 18px;
      color: #9197A3;
    }
  }
}

.text-area-error-info {
  position: absolute;
  bottom: 15px;
  right: 100px;
  font-size: 15px;
}

button {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 18px;
  width: 66px;
  height: 38px;
}
</style>
