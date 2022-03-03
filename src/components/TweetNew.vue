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
    <div
      v-if="tweet.length > 140"
      class="text-area-error-info"
      style="color: #fc5a5a"
    >
      內容上限 140 字!
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
@import "../assets/scss/main.scss";
.tweet-wrapper {
  position: relative;
  max-width: 600px;  
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
