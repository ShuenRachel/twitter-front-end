<template>
  <div class="user-all-tweets">
    <TweetsList
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet"
    />
  </div>
</template>

<script>
import TweetsList from "../components/TweetsList.vue";
import usersAPI from "../apis/users";
import { mapState } from "vuex";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: {
    TweetsList,
  },
  created() {
    this.fetchTweets(Number(this.userId));
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      tweetsData: [],
    };
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserTweets(userId);
        // TODO: check if repeated throw err here
        if (response.statusText !== "OK") {
          throw new Error("status: " + response.status);
        } else if (response.data.status === "error") {
          throw new Error("status: " + response.data.message);
        }
        this.tweetsData = response.data.map((tweet) => {
          return {
            TweetId: tweet.TweetId,
            tweetUserId: tweet.tweetUserId,
            avatar: tweet.avatar,
            description: tweet.description,
            createdAt: tweet.createdAt,
            tweetUserName: tweet.tweetUserName,
            tweetUserAccount: tweet.tweetUserAccount,
            repliedCount: tweet.repliedCount,
            likeCount: tweet.likeCount,
            liked: tweet.liked,
          };
        });
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶推文清單，請稍後再試",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.userId = to.params.user_id;
    this.fetchTweets(Number(this.userId));
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser: function () {
      this.fetchTweets(Number(this.userId));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
