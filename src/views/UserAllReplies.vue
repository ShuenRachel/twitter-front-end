<template>
  <div class="user-all-replies">
    <RepliesList
      v-for="reply in repliesData"
      :key="reply.id"
      :reply="reply" />
  </div>
</template>

<script>
import RepliesList from '../components/RepliesList.vue'
import usersAPI from '../apis/users'

export default {
  components: { 
    RepliesList
  },
  created() {
    this.fetchReplies(Number(this.userId))
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      repliesData: []
    }
  },
  methods: {
    async fetchReplies(userId) {
      try {
        const response = await usersAPI.getUserReplies(userId)
  
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        }

        this.repliesData = response.data.map(reply => {
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
              account:  reply.replyUserAccount,
              avatar: reply.replyUserAvatar
            },
          }
        });
        console.log(this.repliesData)
      } catch (error) {
        console.log(error)
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.userId = to.params.user_id
    this.fetchReplies(Number(this.userId))
    next()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>

