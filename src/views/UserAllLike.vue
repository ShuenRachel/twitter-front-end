<template>
  <div class="user-all-like">
    <TweetsList 
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet" />
    <div v-if="isLikeEmpty">目前尚無喜歡的內容</div>
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
      tweetsData: [],
      isLikeEmpty: false
    }
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserLike(userId)
  
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        } else if (response.data.status === 'error' && response.data.message === 'No liked tweets!') {
          this.tweetsData= [] // 切換到喜歡的內容為空的使用者要先把 tweetsData 清空。
          this.isLikeEmpty = true
          throw new Error('status: '+ response.data.status + ', message: ' + response.data.message)
        }

        this.tweetsData = response.data
        this.isLikeEmpty = false
        console.log(response)
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
