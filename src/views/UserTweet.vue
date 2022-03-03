<template>
  <div>
    <Tweet
      :init-tweet-data="tweetsData"
      @after-reply-clicked="showReplyModal"
    />
    <div class="empty-data" v-if="isEmptyData">目前尚無回覆</div>
    <RepliesList
      v-for="reply in replies"
      :key="reply.commentId"
      :reply="reply"
    />
    <TweetModal
      :init-reply-tweet="tweetsData"
      v-if="modalVisibility"
      @after-close-modal="afterCloseModal"
    />
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";
import RepliesList from "@/components/RepliesList.vue";
import TweetModal from "@/components/TweetModal.vue";
import tweetsAPI from "./../apis/tweets";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: {
    Tweet,
    RepliesList,
    TweetModal,
  },
  data() {
    return {
      tweetsData: {},
      replies: [],
      modalVisibility: false,
      isEmptyData: false
    };
  },
  methods: {
    async getReplies(tweetId) {
      try {
        const response = await tweetsAPI.getReplies(tweetId);
        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        this.replies = response.data;
        this.isEmptyData = !this.replies.length
      } catch (error) {
        this.ToastError({
          title: "無法取得回覆清單，請稍後再試",
        });
      }
    },
    async fetchTweet(tweetId) {
      try {
        const response = await tweetsAPI.getTweet(tweetId);

        this.tweetsData = response.data;
      } catch (error) {
        this.ToastError({
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    showReplyModal(tweetId) {
      this.fetchTweet(tweetId);
      this.modalVisibility = true;
    },
    afterCloseModal() {
      this.modalVisibility = false;
      const { tweet_id } = this.$route.params;
      this.getReplies(tweet_id);
      this.fetchTweet(tweet_id);
    },
  },
  created() {
    const { tweet_id } = this.$route.params;
    this.getReplies(tweet_id);
    this.fetchTweet(tweet_id);
  },
  beforeRouteUpdate(to, from, next) {
    const { tweet_id } = to.params;
    this.fetchTweet(tweet_id);
    this.getReplies(tweet_id);
    next();
  },
};
</script>
