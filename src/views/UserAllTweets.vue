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
        }

        this.tweetsData = response.data.map(tweet => {
          return {
            TweetId: tweet.id,
            UserId: tweet.UserId,
            description: tweet.description,
            createdAt: tweet.createdAt,
            updateAt: tweet.updateAt,
            //還缺 tweetUserName、tweetUserAccount、這則推文回覆數、這則推文被like數
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
