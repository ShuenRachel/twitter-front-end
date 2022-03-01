<template>
  <div class="user-all-tweets">
    <TweetsList
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet" />
  </div>
</template>

<script>
import TweetsList from '../components/TweetsList.vue'
import usersAPI from '../apis/users'

export default {
  components: { 
    TweetsList
  },
  created() {
    this.fetchTweets(Number(this.userId))
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      tweetsData: []
    }
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserTweets(userId)
  
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        } else if (response.data.status === 'error') {
          throw new Error('status: '+ response.data.message)
        }
        this.tweetsData = response.data.map(tweet => {
          return {
            TweetId: tweet.TweetId,
            UserId: tweet.tweetUserId,
            avatar: tweet.avatar,
            description: tweet.description,
            createdAt: tweet.createdAt,
            tweetUserName: tweet.tweetUserName,
            tweetUserAccount: tweet.tweetUserAccount,
            repliedCount: tweet.repliedCount,
            likeCount: tweet.likeCount,
            liked: tweet.liked
          }
        });

      } catch (error) {
        console.log(error)
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.userId = to.params.user_id
    this.fetchTweets(Number(this.userId))
    next()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
