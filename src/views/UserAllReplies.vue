<template>
  <div class="user-all-replies">
    <RepliesList v-for="reply in repliesData" :key="reply.id" :reply="reply" />
    <div class="empty-data" v-if="isEmptyData">目前尚無回覆</div>
  </div>
</template>

<script>
import RepliesList from "../components/RepliesList.vue";
import usersAPI from "../apis/users";
import { Toastification } from "./../utils/mixin";
import { mapState } from "vuex";

export default {
  mixins: [Toastification],
  components: {
    RepliesList,
  },
  created() {
    this.fetchReplies(Number(this.userId));
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      repliesData: [],
      isEmptyData: false,
    };
  },
  methods: {
    async fetchReplies(userId) {
      try {
        const response = await usersAPI.getUserReplies(userId);

        if (response.statusText !== "OK") {
          throw new Error("status: " + response.status);
        }

        this.repliesData = response.data.map((reply) => {
          return {
            TweetId: reply.tweetId,
            tweetUserId: reply.tweetUserId,
            tweetUserAccount: reply.tweetUserAccount,
            // commentId: reply.commentId,
            comment: reply.comment,
            createdAt: reply.replyTime,
            commentUser: {
              id: reply.replyUserId,
              name: reply.replyUserName,
              account: reply.replyUserAccount,
              avatar: reply.replyUserAvatar,
            },
          };
        });
        this.isEmptyData = !this.repliesData.length;
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶回覆清單，請稍後再試",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.userId = to.params.user_id;
    this.fetchReplies(Number(this.userId));
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser: function () {
      this.fetchReplies(Number(this.userId));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.user-all-replies {
  max-width: 600px;
  max-height: 300px;
  overflow: scroll;
}
</style>
