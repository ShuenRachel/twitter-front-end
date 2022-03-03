<template>
  <div class="user-all-like">
    <TweetsList
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet"
    />
    <div class="empty-data" v-if="isEmptyData">目前尚無喜歡的內容</div>
  </div>
</template>

<script>
import TweetsList from "../components/TweetsList.vue";
import usersAPI from "../apis/users";
import { Toastification } from "./../utils/mixin";
import { mapState } from "vuex";

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
      isEmptyData: false,
    };
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserLike(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.status);
        } 

        this.tweetsData = response.data;
        this.isEmptyData = !this.tweetsData.length;
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶讚好清單，請稍後再試",
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
